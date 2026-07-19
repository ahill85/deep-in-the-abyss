"use client";

import { useMemo, useState } from "react";

const cases = [
  { slug: "jfk", title: "JFK Assassination", question: "Did Lee Harvey Oswald act alone?", category: "Historical events", status: "Disputed", reviewed: "July 2026", conventional: "The Warren Commission concluded Oswald fired three shots from the Texas School Book Depository and acted alone.", alternative: "Critics argue the timing, witness accounts, and later committee findings leave room for additional involvement.", evidence: "Extensive primary record", tone: "amber" },
  { slug: "mh370", title: "Malaysia Airlines MH370", question: "What caused the aircraft to disappear?", category: "Missing persons & transport", status: "Unresolved", reviewed: "July 2026", conventional: "Available satellite and debris evidence indicates the aircraft ended its flight in the southern Indian Ocean.", alternative: "Competing scenarios dispute who controlled the aircraft, the motive, and whether the accepted search area is correct.", evidence: "Strong location clues; cause unknown", tone: "red" },
  { slug: "moon", title: "The Moon Landing", question: "Did Apollo 11 land on the Moon?", category: "Space & UFOs", status: "Explained", reviewed: "June 2026", conventional: "Apollo missions landed astronauts on the Moon, supported by tracking data, samples, photographs, and retroreflectors.", alternative: "Hoax claims point to visual anomalies in photographs and alleged Cold War incentives, but lack equivalent physical evidence.", evidence: "Multiple independent evidence lines", tone: "green" },
  { slug: "roswell", title: "Roswell", question: "What crashed near Roswell in 1947?", category: "Space & UFOs", status: "Mostly explained", reviewed: "June 2026", conventional: "The debris came from a classified Project Mogul balloon array used to monitor Soviet nuclear tests.", alternative: "Witness testimony and changing official explanations are cited as evidence of non-human material or a deeper cover-up.", evidence: "Documents strong; testimony disputed", tone: "green" },
  { slug: "dyatlov", title: "Dyatlov Pass", question: "Why did nine hikers leave their tent?", category: "Unexplained phenomena", status: "Mostly explained", reviewed: "May 2026", conventional: "A slab avalanche and extreme conditions plausibly triggered a panicked evacuation and fatal exposure.", alternative: "Unusual injuries and incomplete records have supported theories involving weapons tests, conflict, or unknown forces.", evidence: "Natural mechanism plausible", tone: "green" },
  { slug: "atlantis", title: "Atlantis", question: "Was Plato describing a real civilization?", category: "Archaeology", status: "Speculative", reviewed: "May 2026", conventional: "Most classicists treat Atlantis as a philosophical story shaped to serve Plato’s argument.", alternative: "Some researchers propose memories of real disasters or civilizations inspired the account.", evidence: "No confirmed archaeological site", tone: "red" },
];

const categories = ["All cases", ...Array.from(new Set(cases.map((item) => item.category)))];

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
        <div className="trust-strip"><span><b>06</b> launch case files</span><span><b>64+</b> source links mapped</span><span><b>0</b> conclusions sold as certainty</span><span className="fineprint">Research grows carefully—not automatically.</span></div>
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
        <div className="poll"><div><p className="kicker">Your view stays on this device</p><h3>Which account best fits the evidence?</h3></div><div className="poll-options">{["Conventional", "Alternative", "Some combination", "Still undecided"].map((item) => <button className={vote === item ? "selected" : ""} onClick={() => recordVote(item)} key={item}>{item}{vote === item && " ✓"}</button>)}</div></div>
      </section>

      <aside className="ad-shell" aria-label="Advertisement"><span>ADVERTISEMENT</span><ins className="adsbygoogle" style={{display:"block"}} data-ad-client="ca-pub-9167552007992876" data-ad-format="auto" data-full-width-responsive="true"></ins></aside>

      <section id="method" className="section method"><div className="section-heading"><div><p className="kicker">The research standard</p><h2>No mystery machine.<br/>Just a visible method.</h2></div><p>Every topic passes through the same editorial structure so you can audit our reasoning, not merely trust our verdict.</p></div>
        <div className="method-grid">{[["01","State the question","Define the exact claim without loading the language."],["02","Build the source trail","Prioritize primary documents, official reports, and peer-reviewed work."],["03","Steelman both accounts","Present the strongest credible form of each explanation."],["04","Rate the evidence","Separate evidence quality from confidence in the final conclusion."]].map(([n,t,d]) => <div className="method-step" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section id="sources" className="section source-band"><div><p className="kicker">Source hierarchy</p><h2>Receipts before rhetoric.</h2></div><div className="source-list"><span>Primary documents</span><span>Official investigations</span><span>Academic research</span><span>Reputable journalism</span><span>Alternative sources</span><span>Critical analysis</span></div><p>Facts are paraphrased and linked. Quotes are brief and attributed. Images must be public domain or properly licensed. Corrections are recorded, not quietly buried.</p></section>

      <footer><div className="footer-brand"><span className="brand-mark">D/A</span><div><strong>DEEP IN THE ABYSS</strong><p>Two explanations. One evidence trail. You decide.</p></div></div><div className="footer-links"><a href="#method">Editorial policy</a><a href="mailto:editor@deepintheabyss.com">Corrections</a><a href="#privacy">Privacy</a><a href="#terms">Terms</a></div><p className="disclaimer">Independent educational research. We do not claim opposing explanations are equally credible. Advertising never determines an evidence rating.</p><p>© 2026 Deep in the Abyss</p></footer>
    </main>
  );
}
