import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cases } from "../../cases";

export function generateStaticParams() { return cases.map((item) => ({ slug: item.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = cases.find((entry) => entry.slug === slug);
  return item ? { title: `${item.title} | Deep in the Abyss`, description: item.question } : {};
}

export default async function CasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = cases.find((entry) => entry.slug === slug); if (!item) notFound();
  const currentIndex = cases.findIndex((entry) => entry.slug === item.slug); const next = cases[(currentIndex + 1) % cases.length];
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>Claim-by-claim evidence</small></span></Link><div><Link href="/#cases">All cases</Link><Link href="/#desk">Signal desk</Link></div></nav>
    <header className="case-hero"><div className="breadcrumbs"><Link href="/">Archive</Link><span>/</span><span>Case {String(currentIndex + 1).padStart(2,"0")}</span></div><div className="case-heading"><div><p className="label">{item.category} · reviewed {item.reviewed}</p><h1>{item.title}</h1><p>{item.question}</p></div><div className="case-stats"><span className={`badge ${item.tone}`}>{item.status}</span><small>READING TIME</small><b>{item.readTime}</b><small>CONFIDENCE</small><b>{item.confidence}</b></div></div></header>

    <section className="case-body"><aside className="toc"><b>IN THIS FILE</b><a href="#snapshot">01 Snapshot</a><a href="#comparison">02 Claim vs response</a><a href="#facts">03 Agreed facts</a><a href="#timeline">04 Timeline</a><a href="#verdict">05 Assessment</a><a href="#sources">06 Sources</a></aside>
      <div className="case-content">
        <section id="snapshot" className="content-block"><p className="label">01 · What happened</p><p className="big-copy">{item.overview}</p></section>

        <section id="comparison" className="content-block"><p className="label">02 · Direct comparison</p><h2>Claim vs official response</h2><p className="block-intro">Each row starts with a specific disputed claim. The response must answer that same claim—not change the subject.</p>
          <div className="comparison-head"><span>Disputed / conspiracy claim</span><span>Official or conventional response</span><span>Evidence check</span></div>
          {item.evidenceCards.map((card, index) => <article className="comparison-row" key={card.title}><div><small>CLAIM {index + 1}</small><h3>{card.title}</h3><p>{card.supports.toLowerCase().includes("alternative") ? card.detail : card.counter}</p></div><div><small>RESPONSE</small><p>{card.supports.toLowerCase().includes("alternative") ? card.counter : card.detail}</p></div><div><span className={`strength ${card.strength.toLowerCase().replace(" ", "-")}`}>{card.strength}</span><p>{card.supports} evidence</p><div className="mini-sources">{card.sourceIds.map((id) => { const source = item.sources.find((entry) => entry.id === id); return source ? <a href={source.url} target="_blank" rel="noreferrer" key={id}>{source.publisher} ↗</a> : null; })}</div></div></article>)}
        </section>

        <section className="account-grid"><article><p className="label">The conventional account</p><p>{item.conventional}</p></article><article><p className="label">The alternative account</p><p>{item.alternative}</p></article></section>

        <section id="facts" className="content-block two-lists"><div><p className="label">03 · Both sides agree</p><h2>Confirmed ground</h2><ul>{item.sharedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></div><div><p className="label">Still disputed</p><h2>Open questions</h2><ul>{item.unresolved.map((fact) => <li key={fact}>{fact}</li>)}</ul></div></section>

        <section id="timeline" className="content-block"><p className="label">04 · Chronology</p><h2>What happened, in order</h2><div className="case-timeline">{item.timeline.map((event) => <div key={`${event.date}-${event.event}`}><time>{event.date}</time><p>{event.event}</p><span>{event.status}</span></div>)}</div></section>

        <section id="verdict" className="verdict"><p className="label">05 · Current assessment</p><h2>{item.evidence}</h2><p>{item.verdict}</p><div><span>Confidence</span><b>{item.confidence}</b></div></section>

        <section id="sources" className="content-block"><p className="label">06 · Reading room</p><h2>Open the underlying record</h2><ol className="source-rows">{item.sources.map((source, index) => <li key={source.id}><span>{String(index + 1).padStart(2,"0")}</span><div><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><p>{source.publisher} · {source.type}</p></div></li>)}</ol></section>
        <aside className="ad-slot">ADVERTISEMENT · ca-pub-9167552007992876</aside>
        <Link className="next-case" href={`/cases/${next.slug}`}><small>NEXT CASE</small><span>{next.title} →</span></Link>
      </div>
    </section>
    <footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>Two accounts do not mean equal evidence.</p><span>© 2026</span></footer>
  </main>;
}
