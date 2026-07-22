/** Shared RSS match computation — used by cron refresh, never by end-user clicks. */

export type Feed = { name: string; url: string; lane: string };
export type Story = {
  title: string;
  url: string;
  date: string;
  description: string;
  source: string;
  lane: string;
};
export type Match = { left: Story; right: Story; score: number };
export type MatchData = {
  updatedAt: string;
  alternativeSources: number;
  recordSources: number;
  matches: Match[];
  error?: string;
};

export const MATCH_CACHE_URL = "https://deep-in-the-abyss.internal/api/matches";

// Theory-side feeds — every URL verified live July 2026, all free
const alternativeFeeds: Feed[] = [
  { name: "ZeroHedge", url: "https://feeds.feedburner.com/zerohedge/feed", lane: "finance" },
  { name: "InfoWars", url: "https://www.infowars.com/rss.xml", lane: "government" },
  { name: "Activist Post", url: "https://www.activistpost.com/feed/", lane: "government" },
  { name: "Natural News", url: "https://www.naturalnews.com/rss.xml", lane: "health" },
  { name: "Waking Times", url: "https://www.wakingtimes.com/feed/", lane: "health" },
  { name: "Vigilant Citizen", url: "https://vigilantcitizen.com/feed/", lane: "culture" },
  { name: "Before It’s News", url: "https://beforeitsnews.com/feed/", lane: "general" },
  { name: "Mysterious Universe", url: "https://feeds.mysteriousuniverse.org/feed", lane: "paranormal" },
  { name: "Latest UFO Sightings", url: "https://www.latest-ufo-sightings.net/feed", lane: "ufo" },
  { name: "Ancient Origins", url: "https://www.ancient-origins.net/rss.xml", lane: "archaeology" },
];

// Record-side feeds — every URL verified live July 2026, all free
const recordFeeds: Feed[] = [
  { name: "Federal Reserve", url: "https://www.federalreserve.gov/feeds/press_all.xml", lane: "finance" },
  { name: "SEC", url: "https://www.sec.gov/news/pressreleases.rss", lane: "finance" },
  { name: "U.S. Treasury", url: "https://home.treasury.gov/news/press-releases/feed", lane: "finance" },
  { name: "Department of Justice", url: "https://www.justice.gov/feeds/pressroom/press-release.xml", lane: "government" },
  { name: "Federal Register", url: "https://www.federalregister.gov/documents/search.rss", lane: "government" },
  { name: "FactCheck.org", url: "https://www.factcheck.org/feed/", lane: "general" },
  { name: "NIH", url: "https://www.nih.gov/news-events/news-releases/rss.xml", lane: "health" },
  { name: "FDA", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml", lane: "health" },
  { name: "NASA", url: "https://www.nasa.gov/news-release/feed/", lane: "science" },
  { name: "Space.com", url: "https://www.space.com/feeds/all", lane: "ufo" },
  { name: "Live Science", url: "https://www.livescience.com/feeds/all", lane: "paranormal" },
  { name: "Skeptical Inquirer", url: "https://skepticalinquirer.org/feed/", lane: "paranormal" },
  { name: "ScienceDaily", url: "https://www.sciencedaily.com/rss/all.xml", lane: "archaeology" },
  { name: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/rss/latest_articles/", lane: "archaeology" },
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", lane: "general" },
  { name: "BBC Health", url: "https://feeds.bbci.co.uk/news/health/rss.xml", lane: "health" },
  { name: "BBC Science", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml", lane: "science" },
  { name: "BBC Culture", url: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml", lane: "culture" },
];

const NAMED: Record<string, string> = {
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  nbsp: " ",
  rsquo: "\u2019",
  lsquo: "\u2018",
  rdquo: "\u201D",
  ldquo: "\u201C",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "\u2026",
  trade: "\u2122",
  copy: "\u00A9",
  reg: "\u00AE",
};

function fromCodePoint(code: number) {
  try {
    return String.fromCodePoint(code);
  } catch {
    return "";
  }
}

/** Decode RSS junk like &#8217; / &rsquo; into real characters. */
const clean = (value: string) =>
  value
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/&#x([0-9a-fA-F]+);/gi, (_, hex) => fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, num) => fromCodePoint(parseInt(num, 10)))
    .replace(/&([a-z]+);/gi, (match, name: string) => NAMED[name.toLowerCase()] ?? match)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const tag = (block: string, names: string[]) => {
  for (const name of names) {
    const hit = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i"));
    if (hit) return clean(hit[1]);
  }
  return "";
};

function parse(xml: string, feed: Feed): Story[] {
  const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) ?? [];
  return blocks
    .slice(0, 18)
    .map((block) => ({
      title: tag(block, ["title"]),
      url: block.match(/<link[^>]+href=["']([^"']+)/i)?.[1] || tag(block, ["link", "guid"]),
      date: tag(block, ["pubDate", "published", "updated"]),
      description: tag(block, ["description", "summary", "content:encoded"]).slice(0, 260),
      source: feed.name,
      lane: feed.lane,
    }))
    .filter((item) => item.title && item.url);
}

async function load(feed: Feed) {
  try {
    const response = await fetch(feed.url, {
      headers: { "user-agent": "DeepInTheAbyss/1.0 RSS research" },
    });
    return response.ok ? parse(await response.text(), feed) : [];
  } catch {
    return [];
  }
}

const stop = new Set(
  "the a an and or but into over after before says said this that with from have has will would could should their about latest story report reports amid more than what when where why how government official breaking live update news".split(
    " ",
  ),
);

const tokens = (story: Story) =>
  new Set(
    `${story.title} ${story.description}`
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, " ")
      .split(/\s+/)
      .filter((word) => word.length > 3 && !stop.has(word)),
  );

function score(a: Story, b: Story) {
  const aw = tokens(a);
  const bw = tokens(b);
  let shared = 0;
  aw.forEach((word) => {
    if (bw.has(word)) shared += word.length > 7 ? 2 : 1;
  });
  const lane = a.lane === b.lane ? 8 : 0;
  return Math.min(99, Math.round(shared * 10 + lane));
}

export async function computeMatches(): Promise<MatchData> {
  const [leftGroups, rightGroups] = await Promise.all([
    Promise.all(alternativeFeeds.map(load)),
    Promise.all(recordFeeds.map(load)),
  ]);
  const left = leftGroups.flat();
  const right = rightGroups.flat();
  const candidates = left
    .flatMap((story) => right.map((record) => ({ left: story, right: record, score: score(story, record) })))
    .filter((pair) => pair.score >= 38)
    .sort((a, b) => b.score - a.score);
  const used = new Set<string>();
  const matches: Match[] = [];
  for (const pair of candidates) {
    if (used.has(pair.left.url)) continue;
    used.add(pair.left.url);
    matches.push(pair);
    if (matches.length === 12) break;
  }
  return {
    updatedAt: new Date().toISOString(),
    alternativeSources: alternativeFeeds.length,
    recordSources: recordFeeds.length,
    matches,
  };
}

export async function readCachedMatches(): Promise<Response | null> {
  return caches.default.match(new Request(MATCH_CACHE_URL));
}

export async function writeCachedMatches(data: MatchData): Promise<Response> {
  const response = new Response(JSON.stringify(data), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=1800",
    },
  });
  await caches.default.put(new Request(MATCH_CACHE_URL), response.clone());
  return response;
}

export function emptyMatchesResponse(message: string): Response {
  const body: MatchData = {
    updatedAt: "",
    alternativeSources: alternativeFeeds.length,
    recordSources: recordFeeds.length,
    matches: [],
    error: message,
  };
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
}
