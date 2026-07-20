import { env } from "cloudflare:workers";
import {
  computeMatches,
  MATCH_CACHE_TTL_SECONDS,
  MATCH_REFRESH_SECRET,
  type MatchPayload,
} from "./compute";

const KV_KEY = "daily-matches";

type MatchesEnv = {
  MATCHES_CACHE?: KVNamespace;
  MATCH_REFRESH_SECRET?: string;
};

function jsonResponse(data: MatchPayload, source: string) {
  return new Response(JSON.stringify(data), {
    headers: {
      "content-type": "application/json; charset=utf-8",
      // Short browser cache only — shared snapshot lives in KV
      "cache-control": "public, max-age=60",
      "x-match-cache": source,
    },
  });
}

async function readKv(): Promise<MatchPayload | null> {
  try {
    const kv = (env as MatchesEnv).MATCHES_CACHE;
    if (!kv) return null;
    return await kv.get(KV_KEY, "json");
  } catch {
    return null;
  }
}

async function writeKv(data: MatchPayload) {
  try {
    const kv = (env as MatchesEnv).MATCHES_CACHE;
    if (!kv) return;
    await kv.put(KV_KEY, JSON.stringify(data), { expirationTtl: MATCH_CACHE_TTL_SECONDS });
  } catch {
    // ignore
  }
}

/**
 * Visitors always get the KV daily snapshot (free tier).
 * Only the daily cron may force a live feed crawl.
 */
export async function GET(request: Request) {
  const expected = (env as MatchesEnv).MATCH_REFRESH_SECRET || MATCH_REFRESH_SECRET;
  const force = request.headers.get("x-match-refresh") === expected;

  if (!force) {
    const cached = await readKv();
    if (cached?.updatedAt) return jsonResponse(cached, "kv");
  }

  const data = await computeMatches();
  await writeKv(data);
  return jsonResponse(data, force ? "cron" : "fresh");
}
