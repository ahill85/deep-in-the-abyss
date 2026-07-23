import { env } from "cloudflare:workers";
import {
  computeMatches,
  MATCH_CACHE_TTL_SECONDS,
  MATCH_REFRESH_SECRET,
  type MatchPayload,
} from "./compute";

const KV_KEY = "daily-matches";
const ARCHIVE_TTL_SECONDS = 40 * 24 * 60 * 60;

type MatchRange = "today" | "week" | "month";
type MatchRow = MatchPayload["matches"][number];

type MatchesEnv = {
  MATCHES_CACHE?: KVNamespace;
  MATCH_REFRESH_SECRET?: string;
};

type RangePayload = MatchPayload & {
  range: MatchRange;
  snapshotCount: number;
};

const RANGE_DAYS: Record<MatchRange, number> = {
  today: 1,
  week: 7,
  month: 30,
};

const RANGE_CAPS: Record<MatchRange, number> = {
  today: 12,
  week: 36,
  month: 60,
};

function jsonResponse(data: RangePayload, source: string) {
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "public, max-age=60",
      "x-match-cache": source,
    },
  });
}

function parseRange(request: Request): MatchRange {
  const value = new URL(request.url).searchParams.get("range");
  if (value === "week" || value === "month" || value === "today") return value;
  return "today";
}

function utcDay(iso: string) {
  const time = Date.parse(iso);
  if (!Number.isFinite(time)) return new Date().toISOString().slice(0, 10);
  return new Date(time).toISOString().slice(0, 10);
}

function archiveKey(day: string) {
  return `daily-matches-${day}`;
}

function recentDays(count: number) {
  const days: string[] = [];
  const now = new Date();
  for (let i = 0; i < count; i++) {
    const day = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - i));
    days.push(day.toISOString().slice(0, 10));
  }
  return days;
}

async function readKey(key: string): Promise<MatchPayload | null> {
  try {
    const kv = (env as MatchesEnv).MATCHES_CACHE;
    if (!kv) return null;
    return await kv.get(key, "json");
  } catch {
    return null;
  }
}

async function writeKv(data: MatchPayload) {
  try {
    const kv = (env as MatchesEnv).MATCHES_CACHE;
    if (!kv) return;
    const day = utcDay(data.updatedAt);
    const today = new Date().toISOString().slice(0, 10);

    // Always refresh the live "today" cache.
    await kv.put(KV_KEY, JSON.stringify(data), { expirationTtl: MATCH_CACHE_TTL_SECONDS });

    // Only snapshot the current UTC day. Past `daily-matches-YYYY-MM-DD` keys are
    // never written here, so week/month history stays intact across deploys.
    if (day !== today) return;
    await kv.put(archiveKey(day), JSON.stringify(data), { expirationTtl: ARCHIVE_TTL_SECONDS });
  } catch {
    // ignore
  }
}

function mergeSnapshots(snapshots: MatchPayload[], range: MatchRange): RangePayload {
  const byPair = new Map<string, MatchRow>();
  let latest = "";
  let alternativeSources = 0;
  let recordSources = 0;

  for (const snap of snapshots) {
    if (!snap?.matches) continue;
    if (snap.updatedAt > latest) latest = snap.updatedAt;
    alternativeSources = Math.max(alternativeSources, snap.alternativeSources || 0);
    recordSources = Math.max(recordSources, snap.recordSources || 0);
    for (const match of snap.matches) {
      const key = `${match.left.url}::${match.right.url}`;
      const prev = byPair.get(key);
      if (!prev || match.score > prev.score) {
        byPair.set(key, {
          ...match,
          shared: match.shared ?? [],
        });
      }
    }
  }

  const matches = [...byPair.values()]
    .sort((a, b) => b.score - a.score || (b.left.date > a.left.date ? 1 : -1))
    .slice(0, RANGE_CAPS[range]);

  return {
    updatedAt: latest || new Date().toISOString(),
    alternativeSources,
    recordSources,
    matches,
    range,
    snapshotCount: snapshots.length,
  };
}

async function loadRange(range: MatchRange): Promise<RangePayload | null> {
  if (range === "today") {
    const cached = await readKey(KV_KEY);
    if (!cached?.updatedAt) return null;
    return {
      ...cached,
      matches: cached.matches.map((match) => ({ ...match, shared: match.shared ?? [] })),
      range: "today",
      snapshotCount: 1,
    };
  }

  const days = recentDays(RANGE_DAYS[range]);
  const reads = await Promise.all(days.map((day) => readKey(archiveKey(day))));
  // Fall back to live today key if today's archive is missing (first hours after deploy).
  const today = await readKey(KV_KEY);
  const snapshots: MatchPayload[] = [];
  const seenDays = new Set<string>();

  for (let i = 0; i < days.length; i++) {
    const snap = reads[i];
    if (snap?.updatedAt) {
      snapshots.push(snap);
      seenDays.add(days[i]);
    }
  }

  if (today?.updatedAt) {
    const day = utcDay(today.updatedAt);
    if (!seenDays.has(day)) snapshots.push(today);
  }

  if (!snapshots.length) return null;
  return mergeSnapshots(snapshots, range);
}

/**
 * Visitors always read KV. Only the daily cron may force a live feed crawl.
 * ?range=today|week|month merges archived daily snapshots (no extra RSS cost).
 */
export async function GET(request: Request) {
  const expected = (env as MatchesEnv).MATCH_REFRESH_SECRET || MATCH_REFRESH_SECRET;
  const force = request.headers.get("x-match-refresh") === expected;
  const range = parseRange(request);

  if (!force) {
    const cached = await loadRange(range);
    if (cached?.updatedAt) return jsonResponse(cached, range === "today" ? "kv" : `kv-${range}`);
  }

  const data = await computeMatches();
  await writeKv(data);

  if (range === "today") {
    return jsonResponse({ ...data, range: "today", snapshotCount: 1 }, force ? "cron" : "fresh");
  }

  const merged = await loadRange(range);
  if (merged) return jsonResponse(merged, force ? `cron-${range}` : `fresh-${range}`);
  return jsonResponse({ ...data, range, snapshotCount: 1 }, force ? "cron" : "fresh");
}
