"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cases } from "./cases";
import { topics } from "./archive/topics";

type Story = { title: string; url: string; date: string; description: string; source: string };
type Match = { left: Story; right: Story; score: number };
type MatchData = { updatedAt: string; alternativeSources: number; recordSources: number; matches: Match[]; error?: string };

export default function Home() {
  const [data, setData] = useState<MatchData | null>(null); const [loading, setLoading] = useState(false);
  async function matchStories() { setLoading(true); try { const response = await fetch("/api/matches"); setData(await response.json()); } catch { setData({ updatedAt: "", alternativeSources: 0, recordSources: 0, matches: [], error: "Could not reach the feeds." }); } finally { setLoading(false); } }
  useEffect(() => { void matchStories(); }, []);
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>They say · the record says</small></span></Link><div><a href="#matcher">Latest matches</a><Link href="/archive">Archive</Link></div></nav>

    <header className="tool-hero">
      <p className="label">One simple idea</p>
      <h1><span className="hl-theory">They say this.</span><br /><span className="hl-record">The record says that.</span><br />You decide.</h1>
      <p>Globe vs flat. Lone gunman vs conspiracy. Balloon vs saucer. Every subject gets both accounts side by side, point by point, with links to the underlying sources. The reader decides.</p>
    </header>

    <section id="matcher" className="matcher">
      <div className="matcher-controls"><div><span>MONITORING</span><b>{data?.alternativeSources ?? 6} theory feeds</b><i>against</i><b>{data?.recordSources ?? 12} record feeds</b></div><button onClick={matchStories} disabled={loading}>{loading ? "Checking both buckets…" : "Refresh matches"}</button></div>
      <div className="honesty"><b>Filter rule:</b> no strong match, no card. Matching discovers the shared event; a human still decides what the evidence means.</div>
      {!data && loading && <div className="empty-tool"><span>↳</span><h2>Searching both buckets…</h2><p>Unmatched headlines will be thrown away.</p></div>}
      {data?.error && <div className="error-tool">{data.error}</div>}
      {data && !data.error && <div className="results">{data.matches.length ? data.matches.map((match, index) => <article className="story-pair" key={`${match.left.url}-${index}`}>
        <a className="side-theory" href={match.left.url} target="_blank" rel="noreferrer"><small>◭ {match.left.source} · THEY SAY</small><h3>{match.left.title}</h3><p>{match.left.description}</p><b>Read the claim ↗</b></a>
        <a className="side-record" href={match.right.url} target="_blank" rel="noreferrer"><small>◉ {match.right.source} · THE RECORD</small><h3>{match.right.title}</h3><p>{match.right.description}</p><b>Read the response ↗</b></a>
        <div className="match-score"><strong>↔</strong><span>matched event</span></div>
      </article>) : <div className="empty-tool"><h2>No strong cross-bucket matches right now.</h2><p>That is a valid result. The site will not manufacture a comparison.</p></div>}</div>}
    </section>

    <section id="cases" className="mini-cases">
      <div className="section-title"><div><p className="label">The case files</p><h2>{topics.length} subjects—and growing</h2></div><p>Conspiracies, myths, monsters, missing planes, lost cities. {cases.length} subjects already have full head-to-head dossiers; the rest are queued.</p></div>
      <div className="case-cards">{cases.map((item) => <Link href={`/cases/${item.slug}`} key={item.slug}>
        <div className="card-top"><small>{item.category}</small><small>{item.readTime}</small></div>
        <h3>{item.title}</h3>
        <p className="card-question">{item.question}</p>
        <p className="card-hook">{item.hook}</p>
        <b>Compare both accounts →</b>
      </Link>)}</div>
      <Link className="archive-button" href="/archive">Browse all {topics.length} archive subjects →</Link>
    </section>

    <aside className="ad-slot">ADVERTISEMENT · ca-pub-9167552007992876</aside>
    <footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>Read both accounts. Open the sources. You decide.</p><span>© 2026</span></footer>
  </main>;
}
