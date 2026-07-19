"use client";
import Link from "next/link";
import { useState } from "react";
import { cases } from "./cases";

type Story = { title: string; url: string; date: string; description: string };
type Match = { left: Story; right: Story | null; score: number };
type MatchData = { leftName: string; rightName: string; updatedAt: string; matches: Match[]; error?: string };

export default function Home() {
  const [source, setSource] = useState("zerohedge"); const [data, setData] = useState<MatchData | null>(null); const [loading, setLoading] = useState(false);
  async function matchStories() { setLoading(true); setData(null); try { const response = await fetch(`/api/matches?source=${source}`); setData(await response.json()); } catch { setData({ leftName:"", rightName:"", updatedAt:"", matches:[], error:"Could not reach the feeds." }); } finally { setLoading(false); } }
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>Automated story comparison</small></span></Link><div><a href="#matcher">Story matcher</a><a href="#cases">Research cases</a></div></nav>
    <header className="tool-hero"><p className="label">Free RSS comparison tool</p><h1>See the claim.<br/><em>See the other record.</em></h1><p>Choose a conspiracy or alternative-news source. We pull its newest stories, search a matched government or mainstream feed, and put the closest stories beside each other.</p></header>
    <section id="matcher" className="matcher">
      <div className="matcher-controls"><label><span>1 · Choose alternative source</span><select value={source} onChange={(event) => setSource(event.target.value)}><option value="zerohedge">ZeroHedge → Federal Reserve</option><option value="sheeple">Daily Sheeple → Department of Justice</option><option value="waking">Waking Times → NIH</option><option value="vigilant">Vigilant Citizen → BBC World</option><option value="before">Before It’s News → BBC World</option><option value="infowars">InfoWars → Federal Register</option></select></label><button onClick={matchStories} disabled={loading}>{loading ? "Pulling both feeds…" : "2 · Pull and match stories"}</button></div>
      <div className="honesty"><b>What automation does:</b> matches shared names and keywords. <b>What it cannot do:</b> decide which story is true. Low scores mean “possible match,” not evidence.</div>
      {!data && !loading && <div className="empty-tool"><span>↳</span><h2>Choose a source and press match.</h2><p>The latest side-by-side stories will appear here.</p></div>}
      {data?.error && <div className="error-tool">{data.error}</div>}
      {data && !data.error && <div className="results"><div className="results-head"><div><span>ALTERNATIVE / CONSPIRACY FEED</span><b>{data.leftName}</b></div><div><span>GOVERNMENT / MAINSTREAM MATCH</span><b>{data.rightName}</b></div><div><span>MATCH</span></div></div>{data.matches.map((match, index) => <article className="story-pair" key={`${match.left.url}-${index}`}><a href={match.left.url} target="_blank" rel="noreferrer"><small>STORY {index + 1}</small><h3>{match.left.title}</h3><p>{match.left.description || "Open the original story for details."}</p><b>Read original ↗</b></a>{match.right ? <a href={match.right.url} target="_blank" rel="noreferrer"><small>CLOSEST RECORD</small><h3>{match.right.title}</h3><p>{match.right.description || "Open the matched record for details."}</p><b>Read other side ↗</b></a> : <div className="no-match">No comparison found</div>}<div className="match-score"><strong>{match.score}%</strong><span>{match.score >= 45 ? "Likely same topic" : match.score >= 20 ? "Possible match" : "Weak match"}</span></div></article>)}</div>}
    </section>
    <section id="cases" className="mini-cases"><div className="section-title"><div><p className="label">Human-reviewed research</p><h2>Six detailed case files</h2></div><p>The automated matcher discovers leads. These case pages do the slower work of comparing evidence.</p></div><div>{cases.map((item) => <Link href={`/cases/${item.slug}`} key={item.slug}><span className={`badge ${item.tone}`}>{item.status}</span><h3>{item.title}</h3><p>{item.question}</p><b>Open full comparison →</b></Link>)}</div></section>
    <aside className="ad-slot">ADVERTISEMENT · ca-pub-9167552007992876</aside><footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>RSS matching is automated discovery, never an automatic verdict.</p><span>© 2026</span></footer>
  </main>;
}
