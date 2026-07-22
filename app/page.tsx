"use client";
import Link from "next/link";
import { useEffect, useState, type MouseEvent } from "react";
import { cases } from "./cases";
import { topics } from "./archive/topics";
import { SiteFooter } from "./components/SiteFooter";
import { ThemeToggle } from "./components/ThemeToggle";
import { SITE } from "./site";

type Story = { title: string; url: string; date: string; description: string; source: string };
type Match = { left: Story; right: Story; score: number; shared?: string[] };
type MatchRange = "today" | "week" | "month";
type MatchData = {
  updatedAt: string;
  alternativeSources: number;
  recordSources: number;
  matches: Match[];
  range?: MatchRange;
  snapshotCount?: number;
  error?: string;
};

const RANGES: { id: MatchRange; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "This week" },
  { id: "month", label: "This month" },
];

export default function Home() {
  const [range, setRange] = useState<MatchRange>("today");
  const [data, setData] = useState<MatchData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    (async () => {
      try {
        const response = await fetch(`${SITE.basePath}/api/matches?v=daily&range=${range}`, { cache: "no-store" });
        const json = (await response.json()) as MatchData;
        if (!cancelled) setData(json);
      } catch {
        if (!cancelled) {
          setData({
            updatedAt: "",
            alternativeSources: 0,
            recordSources: 0,
            matches: [],
            error: "Could not reach the match snapshot.",
          });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [range]);

  // Arriving from another page via /#matcher: scroll once, then strip the hash.
  // A fragment left in the URL makes mobile Safari re-snap to the anchor every
  // time async results change the page height, hijacking user scrolling.
  useEffect(() => {
    if (window.location.hash !== "#matcher") return;
    const timer = setTimeout(() => {
      document.getElementById("matcher")?.scrollIntoView({ block: "start" });
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }, 120);
    return () => clearTimeout(timer);
  }, []);

  function goToMatcher(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    document.getElementById("matcher")?.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  const updatedLabel = data?.updatedAt
    ? new Date(data.updatedAt).toLocaleString(undefined, { dateStyle: "medium", timeStyle: "short" })
    : null;

  const rangeMeta =
    range === "today"
      ? updatedLabel
        ? `Updated ${updatedLabel}`
        : null
      : data?.snapshotCount
        ? `From ${data.snapshotCount} daily snapshot${data.snapshotCount === 1 ? "" : "s"}`
        : "Building history…";

  return <main id="content">
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>They say · the record says</small></span></Link><div><a href="#matcher" onClick={goToMatcher}>Latest matches</a><Link href="/archive">Archive</Link><ThemeToggle /></div></nav>

    <header className="tool-hero">
      <p className="label">One simple idea</p>
      <h1><span className="hl-theory">They say this.</span><br /><span className="hl-record">The record says that.</span><br />You decide.</h1>
      <p>Globe vs flat. Lone gunman vs conspiracy. Balloon vs saucer. Every subject gets both accounts side by side, point by point, with links to the underlying sources. The reader decides.</p>
    </header>

    <section id="matcher" className="matcher">
      <div className="matcher-controls">
        <div>
          <span>DAILY SNAPSHOT</span>
          <b>{data?.alternativeSources ?? 10} theory feeds</b>
          <i>against</i>
          <b>{data?.recordSources ?? 18} record feeds</b>
        </div>
        {rangeMeta && <span className="match-updated">{rangeMeta}</span>}
      </div>
      <div className="match-ranges" role="tablist" aria-label="Match time range">
        {RANGES.map((item) => (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={range === item.id}
            className={range === item.id ? "is-active" : undefined}
            onClick={() => setRange(item.id)}
          >
            {item.label}
          </button>
        ))}
        {data && !data.error && !loading && (
          <span className="match-count">{data.matches.length} match{data.matches.length === 1 ? "" : "es"}</span>
        )}
      </div>
      <div className="honesty"><b>Filter rule:</b> no strong match, no card. Feeds are crawled once a day — visitors only read the cached snapshot.</div>
      {loading && <div className="empty-tool"><span>↳</span><h2>Loading matches…</h2><p>Unmatched headlines will be thrown away.</p></div>}
      {!loading && data?.error && <div className="error-tool">{data.error}</div>}
      {!loading && data && !data.error && <div className="results">{data.matches.length ? data.matches.map((match, index) => (
        <article className="story-pair" key={`${match.left.url}-${match.right.url}-${index}`}>
          {match.shared?.length ? (
            <p className="match-shared">Shared: {match.shared.join(" · ")}</p>
          ) : (
            <p className="match-shared match-shared-empty">Matched event</p>
          )}
          <a className="side-theory" href={match.left.url} target="_blank" rel="noreferrer">
            <small>◭ {match.left.source} · THEY SAY</small>
            <h3>{match.left.title}</h3>
            <p>{match.left.description}</p>
            <b>Read the claim ↗</b>
          </a>
          <a className="side-record" href={match.right.url} target="_blank" rel="noreferrer">
            <small>◉ {match.right.source} · THE RECORD</small>
            <h3>{match.right.title}</h3>
            <p>{match.right.description}</p>
            <b>Read the response ↗</b>
          </a>
          <div className="match-score"><strong>↔</strong><span>matched event</span></div>
        </article>
      )) : <div className="empty-tool"><h2>No strong cross-bucket matches for this range.</h2><p>That is a valid result. Week and month fill in as daily snapshots accumulate.</p></div>}</div>}
    </section>

    <section id="cases" className="mini-cases">
      <div className="section-title"><div><p className="label">The case files</p><h2>{topics.length} subjects—and growing</h2></div><p>Conspiracies, myths, monsters, missing planes, lost cities. Every subject opens into its own file with both accounts—{cases.length} have full deep-dive dossiers.</p></div>
      <div className="case-cards">{cases.map((item) => <Link href={`/cases/${item.slug}`} key={item.slug}>
        <div className="card-top"><small>{item.category}</small><small>{item.readTime}</small></div>
        <h3>{item.title}</h3>
        <p className="card-question">{item.question}</p>
        <p className="card-hook">{item.hook}</p>
        <b>Compare both accounts →</b>
      </Link>)}</div>
      <Link className="archive-button" href="/archive">Browse all {topics.length} archive subjects →</Link>
    </section>

    <SiteFooter />
  </main>;
}
