type Feed = { name: string; url: string; lane: string };
type Story = { title: string; url: string; date: string; description: string; source: string; lane: string };
export type MatchPayload = {
  updatedAt: string;
  alternativeSources: number;
  recordSources: number;
  matches: { left: Story; right: Story; score: number; shared: string[] }[];
};

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
  { name: "Space.com", url: "https://www.space.com/feeds/all", lane: "science" },
  { name: "Live Science", url: "https://www.livescience.com/feeds/all", lane: "science" },
  { name: "Skeptical Inquirer", url: "https://skepticalinquirer.org/feed/", lane: "paranormal" },
  { name: "ScienceDaily", url: "https://www.sciencedaily.com/rss/all.xml", lane: "science" },
  { name: "Smithsonian Magazine", url: "https://www.smithsonianmag.com/rss/latest_articles/", lane: "culture" },
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
  return blocks.slice(0, 18).map((block) => ({
    title: tag(block, ["title"]),
    url: block.match(/<link[^>]+href=["']([^"']+)/i)?.[1] || tag(block, ["link", "guid"]),
    date: tag(block, ["pubDate", "published", "updated"]),
    description: tag(block, ["description", "summary", "content:encoded"]).slice(0, 260),
    source: feed.name,
    lane: feed.lane,
  })).filter((item) => item.title && item.url);
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
  "the a an and or but into over after before says said this that with from have has will would could should their about latest story report reports amid more than what when where why how government official breaking live update news people world according officials today week years year state house press release reuters associated also just been were they them some many most such only other than into onto against during while since until still already another around because before between without within through under every those these being been research study studies scientists clinical disease hours found warns suggests comparable common".split(
    " ",
  ),
);

const DAY_MS = 24 * 60 * 60 * 1000;
const DATE_WINDOW_DAYS = 5;
const SCORE_THRESHOLD = 52;

function wordList(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => word.length > 3 && !stop.has(word));
}

const tokens = (text: string) => new Set(wordList(text));

function parseStoryDate(value: string) {
  if (!value) return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

function withinDateWindow(a: Story, b: Story) {
  const left = parseStoryDate(a.date);
  const right = parseStoryDate(b.date);
  if (left == null || right == null) return { ok: true, dated: false as const };
  return { ok: Math.abs(left - right) <= DATE_WINDOW_DAYS * DAY_MS, dated: true as const };
}

function scorePair(a: Story, b: Story): { score: number; shared: string[]; ok: boolean } {
  const titleA = tokens(a.title);
  const titleB = tokens(b.title);
  const descA = tokens(a.description);
  const descB = tokens(b.description);
  const allA = new Set([...titleA, ...descA]);
  const allB = new Set([...titleB, ...descB]);

  const sharedTitle: string[] = [];
  titleA.forEach((word) => {
    if (titleB.has(word)) sharedTitle.push(word);
  });

  const sharedAll: string[] = [];
  allA.forEach((word) => {
    if (allB.has(word)) sharedAll.push(word);
  });

  const hasLong = sharedAll.some((word) => word.length > 7);
  const hasDigit = sharedAll.some((word) => /\d/.test(word));
  const hasTitlePair = sharedTitle.length >= 2;
  if (!hasLong && !hasDigit && !hasTitlePair) {
    return { score: 0, shared: [], ok: false };
  }

  const dates = withinDateWindow(a, b);
  if (!dates.ok) return { score: 0, shared: [], ok: false };

  let sharedWeight = 0;
  sharedAll.forEach((word) => {
    const inTitle = titleA.has(word) && titleB.has(word);
    const base = word.length > 7 ? 2 : 1;
    sharedWeight += inTitle ? base * 2.5 : base;
  });

  const lane = dates.dated && a.lane === b.lane ? 8 : 0;
  const score = Math.min(99, Math.round(sharedWeight * 10 + lane));

  const ranked = [...sharedAll].sort((x, y) => {
    const xt = sharedTitle.includes(x) ? 1 : 0;
    const yt = sharedTitle.includes(y) ? 1 : 0;
    if (yt !== xt) return yt - xt;
    return y.length - x.length;
  });

  return { score, shared: ranked.slice(0, 3), ok: score >= SCORE_THRESHOLD };
}

/** Expensive: hits every RSS feed. Only call from the daily cron / cache miss. */
export async function computeMatches(): Promise<MatchPayload> {
  const [leftGroups, rightGroups] = await Promise.all([
    Promise.all(alternativeFeeds.map(load)),
    Promise.all(recordFeeds.map(load)),
  ]);
  const left = leftGroups.flat();
  const right = rightGroups.flat();
  const candidates = left
    .flatMap((story) =>
      right.map((record) => {
        const result = scorePair(story, record);
        return { left: story, right: record, score: result.score, shared: result.shared, ok: result.ok };
      }),
    )
    .filter((pair) => pair.ok)
    .sort((a, b) => b.score - a.score);

  const usedLeft = new Set<string>();
  const usedRight = new Set<string>();
  const matches: MatchPayload["matches"] = [];
  for (const pair of candidates) {
    if (usedLeft.has(pair.left.url) || usedRight.has(pair.right.url)) continue;
    usedLeft.add(pair.left.url);
    usedRight.add(pair.right.url);
    matches.push({ left: pair.left, right: pair.right, score: pair.score, shared: pair.shared });
    if (matches.length === 12) break;
  }
  return {
    updatedAt: new Date().toISOString(),
    alternativeSources: alternativeFeeds.length,
    recordSources: recordFeeds.length,
    matches,
  };
}

export const MATCH_CACHE_PATH = "/deep-in-the-abyss/api/matches";
/** Cache for a full day — users never trigger a live feed crawl. */
export const MATCH_CACHE_TTL_SECONDS = 60 * 60 * 24;
/** Shared with the Worker cron — not a user-facing secret. */
export const MATCH_REFRESH_SECRET = "dia-daily-refresh-v1";

