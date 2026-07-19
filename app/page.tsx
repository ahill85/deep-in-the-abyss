"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cases } from "./cases";

type Story = { title: string; url: string; date: string; description: string; source: string };
type Match = { left: Story; right: Story; score: number };
type MatchData = { updatedAt: string; alternativeSources: number; recordSources: number; matches: Match[]; error?: string };

export default function Home() {
  const [data, setData] = useState<MatchData | null>(null); const [loading, setLoading] = useState(false);
  async function matchStories() { setLoading(true); try { const response = await fetch("/api/matches"); setData(await response.json()); } catch { setData({ updatedAt:"",alternativeSources:0,recordSources:0,matches:[],error:"Could not reach the feeds." }); } finally { setLoading(false); } }
  useEffect(() => { void matchStories(); }, []);
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>Conspiracy versus record</small></span></Link><div><a href="#matcher">Latest matches</a><Link href="/archive">Conspiracy archive</Link></div></nav>
    <header className="tool-hero"><p className="label">Not a news site</p><h1>They made a claim.<br/><em>Here is the other record.</em></h1><p>We monitor alternative and conspiracy feeds alongside government, scientific, and mainstream sources. Unmatched stories are discarded. Only strong cross-bucket matches appear.</p></header>
    <section id="matcher" className="matcher">
      <div className="matcher-controls auto"><div><span>MONITORING</span><b>{data?.alternativeSources ?? 6} alternative sources</b><i>against</i><b>{data?.recordSources ?? 12} record sources</b></div><button onClick={matchStories} disabled={loading}>{loading ? "Checking both buckets…" : "Refresh matches"}</button></div>
      <div className="honesty"><b>Filter rule:</b> no strong match, no card. Matching discovers the shared event; a human still decides what the evidence means.</div>
      {!data && loading && <div className="empty-tool"><span>↳</span><h2>Searching both buckets…</h2><p>Unmatched headlines will be thrown away.</p></div>}
      {data?.error && <div className="error-tool">{data.error}</div>}
      {data && !data.error && <div className="results"><div className="results-head"><div><span>CONSPIRACY / ALTERNATIVE ACCOUNT</span><b>What they are saying</b></div><div><span>GOVERNMENT / MAINSTREAM RECORD</span><b>What the other side reports</b></div><div><span>EVENT MATCH</span></div></div>{data.matches.length ? data.matches.map((match,index)=><article className="story-pair" key={`${match.left.url}-${index}`}><a href={match.left.url} target="_blank" rel="noreferrer"><small>{match.left.source} · CLAIM SIDE</small><h3>{match.left.title}</h3><p>{match.left.description}</p><b>Read claim ↗</b></a><a href={match.right.url} target="_blank" rel="noreferrer"><small>{match.right.source} · RECORD SIDE</small><h3>{match.right.title}</h3><p>{match.right.description}</p><b>Read response ↗</b></a><div className="match-score"><strong>{match.score}%</strong><span>same event</span></div></article>):<div className="empty-tool"><h2>No strong cross-bucket matches right now.</h2><p>That is a valid result. The site will not manufacture a comparison.</p></div>}</div>}
    </section>
    <section id="cases" className="mini-cases"><div className="section-title"><div><p className="label">Evergreen conspiracy archive</p><h2>60 subjects—and growing</h2></div><p>The archive covers the famous, obscure, confirmed, debunked, and still unexplained. Six already have full evidence dossiers.</p></div><div>{cases.map((item) => <Link href={`/cases/${item.slug}`} key={item.slug}><span className={`badge ${item.tone}`}>{item.status}</span><h3>{item.title}</h3><p>{item.question}</p><b>Open full comparison →</b></Link>)}</div><Link className="archive-button" href="/archive">Browse all 60 archive subjects →</Link></section>
    <aside className="ad-slot">ADVERTISEMENT · ca-pub-9167552007992876</aside><footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>RSS matching is automated discovery, never an automatic verdict.</p><span>© 2026</span></footer>
  </main>;
}
