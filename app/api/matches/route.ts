type Feed = { name: string; url: string; lane: string };
type Story = { title: string; url: string; date: string; description: string; source: string; lane: string };

const alternativeFeeds: Feed[] = [
  { name: "ZeroHedge", url: "https://feeds.feedburner.com/zerohedge/feed", lane: "finance" },
  { name: "The Daily Sheeple", url: "https://thedailysheeple.com/feed/", lane: "government" },
  { name: "Waking Times", url: "https://www.wakingtimes.com/feed/", lane: "health" },
  { name: "Vigilant Citizen", url: "https://vigilantcitizen.com/feed/", lane: "culture" },
  { name: "Before It’s News", url: "https://beforeitsnews.com/feed/", lane: "general" },
  { name: "InfoWars", url: "https://www.infowars.com/rss.xml", lane: "government" },
];

const recordFeeds: Feed[] = [
  { name: "Federal Reserve", url: "https://www.federalreserve.gov/feeds/press_all.xml", lane: "finance" },
  { name: "SEC", url: "https://www.sec.gov/news/pressreleases.rss", lane: "finance" },
  { name: "U.S. Treasury", url: "https://home.treasury.gov/news/press-releases/feed", lane: "finance" },
  { name: "Department of Justice", url: "https://www.justice.gov/feeds/pressroom/press-release.xml", lane: "government" },
  { name: "Federal Register", url: "https://www.federalregister.gov/documents/search.rss", lane: "government" },
  { name: "NIH", url: "https://www.nih.gov/news-events/news-releases/rss.xml", lane: "health" },
  { name: "FDA", url: "https://www.fda.gov/about-fda/contact-fda/stay-informed/rss-feeds/press-releases/rss.xml", lane: "health" },
  { name: "NASA", url: "https://www.nasa.gov/news-release/feed/", lane: "science" },
  { name: "BBC World", url: "https://feeds.bbci.co.uk/news/world/rss.xml", lane: "general" },
  { name: "BBC Health", url: "https://feeds.bbci.co.uk/news/health/rss.xml", lane: "health" },
  { name: "BBC Science", url: "https://feeds.bbci.co.uk/news/science_and_environment/rss.xml", lane: "science" },
  { name: "BBC Culture", url: "https://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml", lane: "culture" },
];

const clean = (value: string) => value.replace(/<!\[CDATA\[|\]\]>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/\s+/g, " ").trim();
const tag = (block: string, names: string[]) => { for (const name of names) { const hit = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)<\\/${name}>`, "i")); if (hit) return clean(hit[1]); } return ""; };
function parse(xml: string, feed: Feed): Story[] { const blocks = xml.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) ?? []; return blocks.slice(0, 18).map((block) => ({ title: tag(block,["title"]), url: block.match(/<link[^>]+href=["']([^"']+)/i)?.[1] || tag(block,["link","guid"]), date: tag(block,["pubDate","published","updated"]), description: tag(block,["description","summary","content:encoded"]).slice(0,260), source: feed.name, lane: feed.lane })).filter((item) => item.title && item.url); }
async function load(feed: Feed) { try { const response = await fetch(feed.url,{headers:{"user-agent":"DeepInTheAbyss/1.0 RSS research"},next:{revalidate:1800}}); return response.ok ? parse(await response.text(),feed) : []; } catch { return []; } }

const stop = new Set("the a an and or but into over after before says said this that with from have has will would could should their about latest story report reports amid more than what when where why how government official breaking live update news".split(" "));
const tokens = (story: Story) => new Set(`${story.title} ${story.description}`.toLowerCase().replace(/[^a-z0-9 ]/g," ").split(/\s+/).filter((word) => word.length > 3 && !stop.has(word)));
function score(a: Story,b: Story){const aw=tokens(a),bw=tokens(b);let shared=0;aw.forEach((word)=>{if(bw.has(word))shared+=word.length>7?2:1});const lane=a.lane===b.lane?8:0;return Math.min(99,Math.round(shared*10+lane));}

export async function GET(){
  const [leftGroups,rightGroups]=await Promise.all([Promise.all(alternativeFeeds.map(load)),Promise.all(recordFeeds.map(load))]); const left=leftGroups.flat(),right=rightGroups.flat();
  const candidates=left.flatMap((story)=>right.map((record)=>({left:story,right:record,score:score(story,record)}))).filter((pair)=>pair.score>=38).sort((a,b)=>b.score-a.score);
  const used=new Set<string>(); const matches=[]; for(const pair of candidates){if(used.has(pair.left.url))continue;used.add(pair.left.url);matches.push(pair);if(matches.length===12)break;}
  return Response.json({updatedAt:new Date().toISOString(),alternativeSources:alternativeFeeds.length,recordSources:recordFeeds.length,matches});
}
