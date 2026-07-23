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
  { name: "BBC Politics", url: "https://feeds.bbci.co.uk/news/politics/rss.xml", lane: "government" },
  { name: "BBC Health", url: "https://feeds.bbci.co.uk/news/health/rss.xml", lane: "health" },
  { name: "BBC Science", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml", lane: "science" },
  { name: "BBC Culture", url: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml", lane: "culture" },
  { name: "The Guardian", url: "https://www.theguardian.com/world/rss", lane: "general" },
  { name: "NPR News", url: "https://feeds.npr.org/1001/rss.xml", lane: "general" },
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
  "the a an and or but into over after before says said this that with from have has will would could should their about latest story report reports amid more than what when where why how government official breaking live update news people world according officials today week years year state house press release reuters associated also just been were they them some many most such only other than onto against during while since until still already another around because between without within through under every those these being research study studies scientists clinical disease hours found warns suggests comparable common something somehow someone everyone everything anything nothing new old big war air cut put got can one two".split(
    " ",
  ),
);

const DAY_MS = 24 * 60 * 60 * 1000;
/** Soft proximity bonus if both dated within this many days. Never a hard reject. */
const DATE_CLOSE_DAYS = 7;
/** Mild penalty only if both dated and farther apart than this (still eligible). */
const DATE_FAR_DAYS = 30;
const SCORE_THRESHOLD_STRONG = 42;
const SCORE_THRESHOLD_FILL = 38;
const BIGRAM_BONUS = 28;
const MAX_MATCHES = 12;
/** Prefer at least this many cards when weaker-but-plausible pairs exist. */
const FILL_TARGET = 8;

/** Too generic to count as a useful title/description anchor alone. */
const weakAlone = new Set(
  (
    "payments payment guidance evidence military threat market markets policy funds shares " +
    "china russia israel ukraine federal national american california government treatment " +
    "computer security revealing forgotten hollywood heatwaves pentagon haunt ghosts christmas " +
    "approach proposal boosting financial powerful education disturbing mysterious director " +
    "asteroid plane transparency documentary formation impossible citing hidden change health " +
    "source getting america nuclear data billion digital largest finally mission science " +
    "therapy chronic strange space earth water world years people public system systems " +
    "project plans plan report reports study studies research release announces announce " +
    "first month weeks week daily night young women children vaccine virus infection " +
    "disease diseases medical hospital patient patients global local major small large " +
    "open closed secret secrets silent radio currency agenda collapse verge ancient " +
    "mystery lakes rainy create injury table compensated little dots beginning explanation " +
    "thanks performance robotic servicing launches support strategies halt muscle natural " +
    "backed body centered trauma gene sickle approved approves processed foods risks " +
    "fueling crackdown ultra occult meaning film colourful perform half time show country " +
    "alien dining disclosure flying cars news lights abductions close encounters forgotten " +
    "waves quantum effect dramatically boosts energy transfer missile tracking satellites " +
    "orders force medicaid pausing central bankers going gone " +
    "claims claim alleged allegedly flawed parts story still missing " +
    "afford french great court might based pilot minister president " +
    "brain memory singer function improves watching shrink midlife " +
    "leave including agency democratic voters proposed developing minutes " +
    "money increase administration cheap waste value inside times defense " +
    "early number solar storms signal predict reading mapping stars " +
    "scholars beliefs vikings based medieval fiction watching reality"
  ).split(/\s+/).filter(Boolean),
);

/** Shared proper phrases that are too broad to count as a same-event name hit. */
const weakPhrases = new Set([
  "trump administration",
  "white house",
  "united states",
  "new york",
  "supreme court",
  "federal reserve",
]);

function isWeakPhrase(phrase: string) {
  if (weakPhrases.has(phrase)) return true;
  for (const weak of weakPhrases) {
    if (phrase.includes(weak)) return true;
  }
  return false;
}

const shortKeep = new Set(["rfk", "fbi", "cia", "nsa", "ufo", "dhs", "cdc", "doj", "sec", "nih", "fda", "epa"]);
/** Frequent political names — alone they are not a same-event match. */
const commonActors = new Set(["trump", "biden", "putin", "harris", "obama", "netanyahu", "zelensky"]);

function wordList(text: string) {
  return text
    .toLowerCase()
    .replace(/(\d),(\d)/g, "$1$2")
    .replace(/[^a-z0-9 ]/g, " ")
    .split(/\s+/)
    .filter((word) => {
      if (!word || stop.has(word)) return false;
      if (/\d/.test(word)) return word.length >= 2;
      if (word.length > 3) return true;
      return shortKeep.has(word);
    });
}

function entities(words: string[]) {
  return words.filter((word) => word.length >= 5 || /\d/.test(word));
}

/** Multi-word capitalized runs + digit-y tokens (D4vd) — headline Title Case alone is too noisy. */
function properPhrases(title: string) {
  const phrases: string[] = [];
  const re = /\b([A-Z][A-Za-z0-9''-]{1,}(?:\s+[A-Z][A-Za-z0-9''-]{2,})+)\b/g;
  let match: RegExpExecArray | null;
  while ((match = re.exec(title))) {
    const phrase = match[1].toLowerCase().replace(/['']/g, "");
    const first = phrase.split(/\s+/)[0] ?? "";
    if (!stop.has(first) && !weakAlone.has(first)) phrases.push(phrase);
  }
  for (const token of title.match(/\b[A-Za-z]*\d[A-Za-z0-9]*\b/g) ?? []) {
    const lower = token.toLowerCase();
    if (lower.length >= 3 && !/^(19|20)\d{2}$/.test(lower)) phrases.push(lower);
  }
  return phrases;
}

function bigrams(words: string[]) {
  const out: string[] = [];
  for (let i = 0; i < words.length - 1; i++) {
    out.push(`${words[i]} ${words[i + 1]}`);
  }
  return out;
}

function parseStoryDate(value: string) {
  if (!value) return null;
  const time = Date.parse(value);
  return Number.isFinite(time) ? time : null;
}

/** Soft date signal only — never discards a pair (keeps week/month history usable). */
function dateSoftScore(a: Story, b: Story) {
  const left = parseStoryDate(a.date);
  const right = parseStoryDate(b.date);
  if (left == null || right == null) return { bonus: 0, dated: false as const };
  const days = Math.abs(left - right) / DAY_MS;
  if (days <= DATE_CLOSE_DAYS) return { bonus: 8, dated: true as const };
  if (days > DATE_FAR_DAYS) return { bonus: -4, dated: true as const };
  return { bonus: 0, dated: true as const };
}

function buildIdf(stories: Story[]) {
  const df = new Map<string, number>();
  for (const story of stories) {
    const unique = new Set(wordList(`${story.title} ${story.description}`));
    unique.forEach((word) => df.set(word, (df.get(word) ?? 0) + 1));
  }
  const n = Math.max(stories.length, 1);
  const idf = new Map<string, number>();
  df.forEach((count, word) => {
    idf.set(word, Math.log(1 + n / (1 + count)));
  });
  return idf;
}

function idfWeight(word: string, idf: Map<string, number>) {
  return idf.get(word) ?? 1;
}

type PairScore = { score: number; shared: string[]; tier: "strong" | "fill" | "reject" };

function scorePair(a: Story, b: Story, idf: Map<string, number>): PairScore {
  const titleWordsA = wordList(a.title);
  const titleWordsB = wordList(b.title);
  const titleA = new Set(titleWordsA);
  const titleB = new Set(titleWordsB);
  const entA = new Set(entities(titleWordsA));
  const entB = new Set(entities(titleWordsB));
  const bigA = new Set(bigrams(titleWordsA));
  const bigB = new Set(bigrams(titleWordsB));
  const descA = new Set(wordList(a.description));
  const descB = new Set(wordList(b.description));

  const sharedTitle: string[] = [];
  titleA.forEach((word) => {
    if (titleB.has(word)) sharedTitle.push(word);
  });

  const sharedEntities: string[] = [];
  entA.forEach((word) => {
    if (entB.has(word)) sharedEntities.push(word);
  });

  const sharedBigrams: string[] = [];
  bigA.forEach((phrase) => {
    if (!bigB.has(phrase) || isWeakPhrase(phrase)) return;
    const [leftWord, rightWord] = phrase.split(" ");
    if (!leftWord || !rightWord) return;
    if (weakAlone.has(leftWord) || weakAlone.has(rightWord)) return;
    if (leftWord.length < 4 || rightWord.length < 4) return;
    sharedBigrams.push(phrase);
  });

  const propsA = new Set(properPhrases(a.title));
  const propsB = new Set(properPhrases(b.title));
  const sharedProper: string[] = [];
  propsA.forEach((phrase) => {
    if (propsB.has(phrase) && !isWeakPhrase(phrase)) sharedProper.push(phrase);
  });

  const usefulTitle = sharedTitle.filter((word) => !weakAlone.has(word) && !/^(19|20)\d{2}$/.test(word));
  const specificTitle = usefulTitle.filter((word) => !commonActors.has(word));
  const sharedDescUseful: string[] = [];
  descA.forEach((word) => {
    if (!descB.has(word) || titleA.has(word) || titleB.has(word) || weakAlone.has(word)) return;
    if (word.length < 5) return;
    sharedDescUseful.push(word);
  });

  // Paraphrase path: same story often shares several uncommon tokens across title+blurb
  // even when headlines don't line up word-for-word.
  const bagA = new Set(
    [...titleWordsA, ...wordList(a.description)].filter(
      (word) =>
        !weakAlone.has(word) &&
        !/^(19|20)\d{2}$/.test(word) &&
        (word.length >= 5 || /\d/.test(word) || shortKeep.has(word)),
    ),
  );
  const bagB = new Set(
    [...titleWordsB, ...wordList(b.description)].filter(
      (word) =>
        !weakAlone.has(word) &&
        !/^(19|20)\d{2}$/.test(word) &&
        (word.length >= 5 || /\d/.test(word) || shortKeep.has(word)),
    ),
  );
  const sharedBag: string[] = [];
  bagA.forEach((word) => {
    if (bagB.has(word) && idfWeight(word, idf) >= 2.05) sharedBag.push(word);
  });
  const bagInBothTitles = sharedBag.filter((word) => titleA.has(word) && titleB.has(word));
  const richOverlap =
    (sharedBag.length >= 3 && bagInBothTitles.length >= 1) ||
    (sharedBag.length >= 2 &&
      sharedBag.some(
        (word) =>
          (word.length >= 8 || (/\d/.test(word) && word.length >= 3) || shortKeep.has(word)) &&
          bagInBothTitles.includes(word),
      ));

  const sharedDigit = sharedEntities.some((word) => {
    if (!/\d/.test(word) || /^(19|20)\d{2}$/.test(word)) return false;
    if (word.length < 3 || /^0+$/.test(word)) return false;
    return true;
  });
  const twoAnchors =
    specificTitle.filter((word) => word.length >= 5 && idfWeight(word, idf) >= 2.15).length >= 2;
  const titlePlusDesc =
    specificTitle.some((word) => word.length >= 5 && idfWeight(word, idf) >= 2.0) &&
    sharedDescUseful.length >= 1;
  const namedHit = sharedProper.some(
    (phrase) => phrase.length >= 4 && !weakAlone.has(phrase) && !isWeakPhrase(phrase),
  );
  const laneAnchor =
    a.lane === b.lane &&
    specificTitle.some((word) => (word.length >= 6 || shortKeep.has(word)) && idfWeight(word, idf) >= 2.35);
  const rareTitle =
    specificTitle.some((word) => word.length >= 6 && idfWeight(word, idf) >= 2.65) &&
    sharedDescUseful.length >= 1;

  const digitSupport = specificTitle.some((word) => !/^\d+$/.test(word));
  const strongGate =
    sharedBigrams.length > 0 ||
    twoAnchors ||
    namedHit ||
    richOverlap ||
    (sharedDigit && digitSupport);
  const fillGate = twoAnchors || titlePlusDesc || namedHit || richOverlap || laneAnchor || rareTitle;
  if (!strongGate && !fillGate) return { score: 0, shared: [], tier: "reject" };

  let weight = 0;
  usefulTitle.forEach((word) => {
    const rarity = Math.min(idfWeight(word, idf), 3.2);
    weight += rarity * (word.length > 7 ? 2.6 : word.length >= 5 ? 1.8 : 1.1);
  });
  sharedProper.forEach((phrase) => {
    const parts = phrase.split(/\s+/);
    weight += parts.length > 1 ? 4.2 : 2.8;
  });
  if (usefulTitle.length === 1 && sharedBigrams.length === 0 && !sharedDigit && !namedHit) {
    weight *= 0.55;
  }
  weight += sharedBigrams.length * (BIGRAM_BONUS / 10);
  if (richOverlap) {
    weight += Math.min(sharedBag.length, 5) * 0.85;
  }

  let descWeight = 0;
  sharedDescUseful.forEach((word) => {
    descWeight += Math.min(idfWeight(word, idf), 2.5) * 0.45;
  });
  weight += Math.min(descWeight, 4.5);

  const dates = dateSoftScore(a, b);
  const lane = a.lane === b.lane ? (dates.dated ? 8 : 4) : 0;
  const score = Math.min(99, Math.round(weight * 8 + dates.bonus + lane));

  const labels = [
    ...sharedProper,
    ...sharedBigrams,
    ...usefulTitle.sort((x, y) => y.length - x.length || idfWeight(y, idf) - idfWeight(x, idf)),
    ...sharedBag.sort((x, y) => y.length - x.length || idfWeight(y, idf) - idfWeight(x, idf)),
    ...sharedDescUseful.sort((x, y) => y.length - x.length).slice(0, 1),
  ];
  const shared = [...new Set(labels)].slice(0, 3);

  if (strongGate && score >= SCORE_THRESHOLD_STRONG) return { score, shared, tier: "strong" };
  if ((strongGate || fillGate) && score >= SCORE_THRESHOLD_FILL) return { score, shared, tier: "fill" };
  return { score, shared, tier: "reject" };
}

/** Expensive: hits every RSS feed. Only call from the daily cron / cache miss. */
export async function computeMatches(): Promise<MatchPayload> {
  const [leftGroups, rightGroups] = await Promise.all([
    Promise.all(alternativeFeeds.map(load)),
    Promise.all(recordFeeds.map(load)),
  ]);
  const left = leftGroups.flat();
  const right = rightGroups.flat();
  const idf = buildIdf([...left, ...right]);

  const scored = left
    .flatMap((story) =>
      right.map((record) => {
        const result = scorePair(story, record, idf);
        return { left: story, right: record, score: result.score, shared: result.shared, tier: result.tier };
      }),
    )
    .filter((pair) => pair.tier !== "reject")
    .sort((a, b) => {
      if (a.tier !== b.tier) return a.tier === "strong" ? -1 : 1;
      return b.score - a.score;
    });

  const usedLeft = new Set<string>();
  const usedRight = new Set<string>();
  const matches: MatchPayload["matches"] = [];

  const take = (tier: "strong" | "fill", limit: number) => {
    for (const pair of scored) {
      if (pair.tier !== tier) continue;
      if (usedLeft.has(pair.left.url) || usedRight.has(pair.right.url)) continue;
      usedLeft.add(pair.left.url);
      usedRight.add(pair.right.url);
      matches.push({ left: pair.left, right: pair.right, score: pair.score, shared: pair.shared });
      if (matches.length >= limit) break;
    }
  };

  take("strong", MAX_MATCHES);
  if (matches.length < FILL_TARGET) take("fill", MAX_MATCHES);

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
