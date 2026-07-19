"use client";

import { useMemo, useState } from "react";
import { cases } from "./cases";

const categories = ["All cases", ...Array.from(new Set(cases.map((item) => item.category)))];

const feedPairs = [
  { name: "ZeroHedge", url: "https://feeds.feedburner.com/zerohedge/feed", beat: "Markets, monetary policy, geopolitics", match: "Federal Reserve, SEC, Treasury, BLS, company filings", matchUrl: "https://www.federalreserve.gov/feeds/press_all.xml" },
  { name: "The Daily Sheeple", url: "https://thedailysheeple.com", beat: "Preparedness, civil liberties, alternative news", match: "FEMA, DOJ, court records, state and local agencies", matchUrl: "https://www.justice.gov/feeds/pressroom/press-release.xml" },
  { name: "Waking Times", url: "https://www.wakingtimes.com/feed/", beat: "Holistic health, spirituality, anti-establishment", match: "NIH, FDA, PubMed, Cochrane reviews", matchUrl: "https://www.nih.gov/news-events/news-releases/rss.xml" },
  { name: "The Vigilant Citizen", url: "https://vigilantcitizen.com/feed/", beat: "Symbolism, pop culture, alleged hidden agendas", match: "Original media, full interviews, credits, filings, scholarship", matchUrl: "https://www.si.edu/rss" },
  { name: "Before It’s News", url: "https://img.beforeitsnews.com/subscribe/", beat: "Citizen reports and wide-ranging fringe claims", match: "Claim-specific primary records plus BBC or Reuters", matchUrl: "https://feeds.bbci.co.uk/news/world/rss.xml" },
  { name: "InfoWars", url: "https://www.infowars.com/rss.xml", beat: "Deep-state, political and institutional claims", match: "Federal Register, court dockets, agency records, AP/Reuters", matchUrl: "https://www.federalregister.gov/documents/search.rss" },
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All cases");
  const [selected, setSelected] = useState(cases[0]);
  const [vote, setVote] = useState<string | null>(null);

  const results = useMemo(() => cases.filter((item) => {
    const matchesCategory = category === "All cases" || item.category === category;
    const haystack = `${item.title} ${item.question} ${item.category}`.toLowerCase();
    return matchesCategory && haystack.includes(query.toLowerCase());
  }), [query, category]);

  function chooseCase(item: typeof cases[number]) {
    setSelected(item);
    setVote(window.localStorage.getItem(`abyss-vote-${item.slug}`));
    window.setTimeout(() => document.getElementById("case-file")?.scrollIntoView({ behavior: "smooth" }), 0);
  }

  function recordVote(value: string) {
    window.localStorage.setItem(`abyss-vote-${selected.slug}`, value);
    setVote(value);
  }

  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top"><span className="brand-mark">D/A</span><span>DEEP IN THE ABYSS<small>Independent evidence archive</small></span></a>
        <div className="nav-links"><a href="#cases">Cases</a><a href="#method">Our method</a><a href="#sources">Sources</a><a className="nav-cta" href="#cases">Enter the archive</a></div>
      </nav>

      <header id="top" className="hero">
        <div className="eyebrow"><span>Case file 001</span><span>Evidence first • Verdict open</span></div>
        <div className="hero-grid">
          <div>
            <p className="kicker">Independent research for curious minds</p>
            <h1>Question the explanation.<br/><em>Check the evidence.</em></h1>
            <p className="lede">We place conventional and alternative accounts side by side, trace every claim to its source, and show where the evidence is strong, weak, or still missing.</p>
            <div className="hero-actions"><a className="primary" href="#cases">Explore case files <span>↘</span></a><button className="text-button" onClick={() => chooseCase(cases[Math.floor(Math.random() * cases.length)])}>Surprise me <span>↗</span></button></div>
          </div>
          <aside className="dossier" aria-label="Featured case">
            <div className="dossier-top"><span>Featured case</span><span className="stamp">UNRESOLVED</span></div>
            <div className="case-number">FLIGHT 370</div>
            <h2>What happened to MH370?</h2>
            <p>A missing aircraft. A trail of satellite handshakes. Debris found across the Indian Ocean—and a final cause still unknown.</p>
            <button onClick={() => chooseCase(cases[1])}>Open evidence file <span>→</span></button>
            <div className="dossier-meta"><span>Reviewed Jul 2026</span><span>12 min read</span></div>
          </aside>
        </div>
        <div className="trust-strip"><span><b>06</b> full case files</span><span><b>22</b> cited source records</span><span><b>0</b> conclusions sold as certainty</span><span className="fineprint">Research grows carefully—not automatically.</span></div>
      </header>

      <section id="cases" className="section cases-section">
        <div className="section-heading"><div><p className="kicker">Browse the archive</p><h2>Follow the evidence,<br/>wherever it leads.</h2></div><p>Search by question, event, or subject. Every file uses the same transparent assessment framework.</p></div>
        <div className="search-row"><label className="search"><span>⌕</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search JFK, Roswell, MH370, Atlantis…" aria-label="Search case files"/></label><div className="filters" aria-label="Filter cases">{categories.slice(0,4).map((item) => <button className={category === item ? "active" : ""} onClick={() => setCategory(item)} key={item}>{item}</button>)}</div></div>
        <div className="case-grid">{results.map((item, index) => <article className="case-card" key={item.slug}>
          <div className="card-top"><span>FILE {String(index + 1).padStart(3,"0")}</span><span className={`status ${item.tone}`}>{item.status}</span></div>
          <p className="category">{item.category}</p><h3>{item.title}</h3><p className="question">{item.question}</p>
          <div className="evidence-line"><span>Evidence record</span><strong>{item.evidence}</strong></div>
          <button onClick={() => chooseCase(item)}>Examine both accounts <span>→</span></button>
        </article>)}</div>
        {results.length === 0 && <div className="empty">No case file matches that search—yet.</div>}
      </section>

      <section id="case-file" className="section comparison">
        <div className="file-header"><div><p className="kicker">Open case file • {selected.reviewed}</p><h2>{selected.title}</h2><p>{selected.question}</p></div><span className={`status large ${selected.tone}`}>{selected.status}</span></div>
        <div className="compare-grid">
          <article className="position conventional"><div className="position-label"><span>A</span> Conventional account</div><h3>The established explanation</h3><p>{selected.conventional}</p><dl><div><dt>Evidence quality</dt><dd>{selected.tone === "green" ? "Strong" : "Moderate"}</dd></div><div><dt>Main strength</dt><dd>{selected.evidence}</dd></div></dl></article>
          <div className="versus">VS</div>
          <article className="position alternative"><div className="position-label"><span>B</span> Alternative account</div><h3>The disputed explanation</h3><p>{selected.alternative}</p><dl><div><dt>Evidence quality</dt><dd>{selected.tone === "red" ? "Very limited" : "Limited"}</dd></div><div><dt>Main weakness</dt><dd>Claims often exceed the available record.</dd></div></dl></article>
        </div>
        <div className="assessment"><div><p className="kicker">Current assessment</p><h3>Two accounts do not mean equal evidence.</h3></div><p>We distinguish what is documented from what is inferred. This summary is a starting point, not a substitute for the linked primary record.</p><a href="#method">See how ratings work →</a></div>
        <div className="case-depth">
          <article className="overview-panel"><p className="kicker">What happened</p><p>{selected.overview}</p><div className="confidence"><span>Confidence in assessment</span><strong>{selected.confidence}</strong></div></article>
          <article className="fact-panel"><div><p className="kicker">What both sides agree on</p><h3>Common ground</h3><ul>{selected.sharedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></div><div><p className="kicker">Still unresolved</p><h3>Open questions</h3><ul>{selected.unresolved.map((item) => <li key={item}>{item}</li>)}</ul></div></article>
          <article className="timeline-panel"><div className="depth-title"><div><p className="kicker">Chronology</p><h3>Case timeline</h3></div><span>{selected.timeline.length} documented points</span></div><div className="timeline-list">{selected.timeline.map((item) => <div className="timeline-item" key={`${item.date}-${item.event}`}><time>{item.date}</time><p>{item.event}</p><span className={item.status.toLowerCase()}>{item.status}</span></div>)}</div></article>
          <article className="evidence-board"><div className="depth-title"><div><p className="kicker">Evidence board</p><h3>Claims, weight, and counterargument</h3></div><span>Strength is not popularity</span></div><div className="evidence-cards">{selected.evidenceCards.map((card) => <section className="evidence-card" key={card.title}><div className="evidence-card-top"><span>{card.supports}</span><strong>{card.strength}</strong></div><h4>{card.title}</h4><p>{card.detail}</p><div className="counter"><b>Counterpoint</b>{card.counter}</div><div className="source-chips">{card.sourceIds.map((id) => { const source = selected.sources.find((item) => item.id === id); return source ? <a href={source.url} target="_blank" rel="noreferrer" key={id}>{source.publisher} ↗</a> : null; })}</div></section>)}</div></article>
          <article className="verdict-panel"><div><p className="kicker">Editorial conclusion</p><h3>Current evidence assessment</h3></div><p>{selected.verdict}</p></article>
          <article className="case-sources"><div className="depth-title"><div><p className="kicker">Reading room</p><h3>Sources used in this file</h3></div><span>Open the record yourself</span></div><ol>{selected.sources.map((source, index) => <li key={source.id}><span>{String(index + 1).padStart(2,"0")}</span><div><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><p>{source.publisher} • {source.type}</p></div></li>)}</ol></article>
        </div>
        <div className="poll"><div><p className="kicker">Your view stays on this device</p><h3>Which account best fits the evidence?</h3></div><div className="poll-options">{["Conventional", "Alternative", "Some combination", "Still undecided"].map((item) => <button className={vote === item ? "selected" : ""} onClick={() => recordVote(item)} key={item}>{item}{vote === item && " ✓"}</button>)}</div></div>
      </section>

      <aside className="ad-shell" aria-label="Advertisement"><span>ADVERTISEMENT</span><ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-9167552007992876" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>

      <section id="method" className="section method"><div className="section-heading"><div><p className="kicker">The research standard</p><h2>No mystery machine.<br/>Just a visible method.</h2></div><p>Every topic passes through the same editorial structure so you can audit our reasoning, not merely trust our verdict.</p></div>
        <div className="method-grid">{[["01","State the question","Define the exact claim without loading the language."],["02","Build the source trail","Prioritize primary documents, official reports, and peer-reviewed work."],["03","Steelman both accounts","Present the strongest credible form of each explanation."],["04","Rate the evidence","Separate evidence quality from confidence in the final conclusion."]].map(([n,t,d]) => <div className="method-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section id="signal-desk" className="section signal-desk"><div className="section-heading"><div><p className="kicker">RSS claim discovery</p><h2>One signal.<br/>Then find its match.</h2></div><p>Alternative feeds surface questions that may be overlooked. They enter the research queue as leads—not facts. Every claim must be paired with the strongest available record from the other side.</p></div>
        <div className="signal-rule"><b>The matching rule</b><span>Alternative claim</span><i>→</i><span>Original record</span><i>→</i><span>Independent confirmation</span><i>→</i><span>Published assessment</span></div>
        <div className="feed-table"><div className="feed-head"><span>Discovery feed</span><span>Typical beat</span><span>Required match</span></div>{feedPairs.map((feed) => <div className="feed-row" key={feed.name}><a href={feed.url} target="_blank" rel="noreferrer"><strong>{feed.name}</strong><small>Open feed ↗</small></a><p>{feed.beat}</p><a href={feed.matchUrl} target="_blank" rel="noreferrer">{feed.match} <small>Reference feed ↗</small></a></div>)}</div>
        <div className="signal-notes"><div><strong>We collect</strong><p>Headline, claim, original URL, publication time, named sources, and the exact evidence being asserted.</p></div><div><strong>We do not collect</strong><p>Copied full articles, anonymous claims presented as fact, invented citations, or a conclusion merely because several sites repeated it.</p></div><div><strong>Publication threshold</strong><p>A claim becomes a case update only after it can be traced to a document, data point, direct witness, or clearly labelled absence of evidence.</p></div></div>
      </section>

      <section id="sources" className="section source-band"><div><p className="kicker">Source hierarchy</p><h2>Receipts before rhetoric.</h2></div><div className="source-list"><span>Primary documents</span><span>Official investigations</span><span>Academic research</span><span>Reputable journalism</span><span>Alternative sources</span><span>Critical analysis</span></div><p>Facts are paraphrased and linked. Quotes are brief and attributed. Images must be public domain or properly licensed. Corrections are recorded, not quietly buried.</p></section>

      <footer><div className="footer-brand"><span className="brand-mark">D/A</span><div><strong>DEEP IN THE ABYSS</strong><p>Two explanations. One evidence trail. You decide.</p></div></div><div className="footer-links"><a href="#method">Editorial policy</a><a href="mailto:editor@deepintheabyss.com">Corrections</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div><p className="disclaimer">Independent educational research. We do not claim opposing explanations are equally credible. Advertising never determines an evidence rating.</p><p>© 2026 Deep in the Abyss</p></footer>
    </main>
  );
}
