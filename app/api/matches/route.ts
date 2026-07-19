const PAIRS = {
  zerohedge: { left: ["ZeroHedge", "https://feeds.feedburner.com/zerohedge/feed"], right: ["Official + mainstream pool", ["https://www.federalreserve.gov/feeds/press_all.xml", "https://feeds.bbci.co.uk/news/world/rss.xml", "https://www.justice.gov/feeds/pressroom/press-release.xml", "https://www.federalregister.gov/documents/search.rss"]] },
  sheeple: { left: ["The Daily Sheeple", "https://thedailysheeple.com/feed/"], right: ["Official + mainstream pool", ["https://www.justice.gov/feeds/pressroom/press-release.xml", "https://feeds.bbci.co.uk/news/world/rss.xml", "https://www.federalregister.gov/documents/search.rss"]] },
  waking: { left: ["Waking Times", "https://www.wakingtimes.com/feed/"], right: ["Health evidence pool", ["https://www.nih.gov/news-events/news-releases/rss.xml", "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml", "https://feeds.bbci.co.uk/news/health/rss.xml"]] },
  vigilant: { left: ["Vigilant Citizen", "https://vigilantcitizen.com/feed/"], right: ["Mainstream + public record pool", ["https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml", "https://feeds.bbci.co.uk/news/world/rss.xml", "https://www.federalregister.gov/documents/search.rss"]] },
  before: { left: ["Before It’s News", "https://beforeitsnews.com/feed/"], right: ["Official + mainstream pool", ["https://feeds.bbci.co.uk/news/world/rss.xml", "https://www.justice.gov/feeds/pressroom/press-release.xml", "https://www.federalregister.gov/documents/search.rss"]] },
  infowars: { left: ["InfoWars", "https://www.infowars.com/rss.xml"], right: ["Official + mainstream pool", ["https://www.federalregister.gov/documents/search.rss", "https://www.justice.gov/feeds/pressroom/press-release.xml", "https://feeds.bbci.co.uk/news/world/rss.xml"]] },
} as const;

type Story = { title: string; url: string; date: string; description: string };
const stop = new Set("the a an and or but in on at to for of with from by is are was were be this that it as into over after before says said new latest".split(" "));
const clean = (value: string) => value.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/\s+/g, " ").trim();
const tag = (block: string, names: string[]) => { for (const name of names) { const hit = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i")); if (hit) return clean(hit[1]); } return ""; };
function parse(xml: string): Story[] { const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) ?? []; return blocks.slice(0, 14).map((block) => { const linkText = tag(block, ["link", "guid"]); const href = block.match(/<link[^>]+href=["']([^"']+)/i)?.[1]; return { title: tag(block, ["title"]), url: href || linkText, date: tag(block, ["pubDate", "published", "updated"]), description: tag(block, ["description", "summary", "content:encoded"]).slice(0, 280) }; }).filter((item) => item.title && item.url); }
const words = (story: Story) => new Set(`${story.title} ${story.description}`.toLowerCase().replace(/[^a-z0-9 ]/g, " ").split(/\s+/).filter((word) => word.length > 3 && !stop.has(word)));
function score(a: Story, b: Story) { const aw = words(a), bw = words(b); let shared = 0; aw.forEach((word) => { if (bw.has(word)) shared++; }); return Math.min(99, Math.round((shared / Math.max(3, Math.min(aw.size, bw.size))) * 180)); }

export async function GET(request: Request) {
  const key = new URL(request.url).searchParams.get("source") as keyof typeof PAIRS || "zerohedge"; const pair = PAIRS[key]; if (!pair) return Response.json({ error: "Unknown source" }, { status: 400 });
  try {
    const leftResponse = await fetch(pair.left[1], { headers: { "user-agent": "DeepInTheAbyss/1.0 RSS research" }, next: { revalidate: 1800 } });
    const rightResponses = await Promise.allSettled(pair.right[1].map((url) => fetch(url, { headers: { "user-agent": "DeepInTheAbyss/1.0 RSS research" }, next: { revalidate: 1800 } }).then(async (response) => response.ok ? parse(await response.text()) : [])));
    if (!leftResponse.ok) throw new Error("The alternative feed did not respond");
    const left = parse(await leftResponse.text()); const right = rightResponses.flatMap((result) => result.status === "fulfilled" ? result.value : []);
    if (!right.length) throw new Error("Comparison feeds did not respond");
    const matches = left.slice(0, 8).map((story) => { const ranked = right.map((candidate) => ({ candidate, score: score(story, candidate) })).sort((a,b) => b.score - a.score); const best = ranked[0]; return { left: story, right: best && best.score >= 30 ? best.candidate : null, score: best?.score ?? 0 }; });
    return Response.json({ leftName: pair.left[0], rightName: pair.right[0], updatedAt: new Date().toISOString(), matches });
  } catch { return Response.json({ error: "One of these feeds is unavailable right now. Try another source." }, { status: 502 }); }
}
