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
  const chapterCount = item.story.length;
  return <main className="case-page">
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>They say · the record says</small></span></Link><div><Link href="/archive">All cases</Link><Link href="/#matcher">Live matches</Link></div></nav>

    <header className="case-hero">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/archive">Archive</Link><span>/</span><span>File {String(currentIndex + 1).padStart(2, "0")}</span></div>
      <p className="label">{item.category} · reviewed {item.reviewed}</p>
      <h1>{item.title}</h1>
      <p className="case-question">{item.question}</p>
      <p className="case-hook">{item.hook}</p>
      <div className="case-meta">
        <span className="meta-chip"><small>Read</small>{item.readTime}</span>
        <span className="meta-chip wide"><small>Sources</small>{item.sources.length} linked records</span>
      </div>
    </header>

    <section className="vs-banner" aria-label="The two accounts">
      <article className="side-record"><header><i>◉</i>THE RECORD</header><p>{item.conventional}</p></article>
      <div className="vs-mark">VS</div>
      <article className="side-theory"><header><i>◭</i>THE THEORY</header><p>{item.alternative}</p></article>
    </section>

    <nav className="chapter-nav" aria-label="Sections">
      <a href="#story">The story</a><a href="#duel">Compare</a><a href="#facts">Agreed / open</a><a href="#timeline">Timeline</a><a href="#sources">Sources</a>
    </nav>

    <article className="case-article">
      <section id="story" className="story-chapters">
        {item.story.map((chapter, index) => <section className="chapter" key={chapter.heading}>
          <p className="label">Chapter {index + 1} of {chapterCount}</p>
          <h2>{chapter.heading}</h2>
          {chapter.body.map((paragraph, pIndex) => <p className={pIndex === 0 && index === 0 ? "lede" : undefined} key={pIndex}>{paragraph}</p>)}
        </section>)}
      </section>

      <section id="duel" className="evidence-section">
        <p className="label">The comparison · point by point</p>
        <h2>They say. The record says.</h2>
        <p className="section-intro">Every card is one disputed point. One side presents its claim; the other answers that same claim. Follow the linked sources and decide for yourself.</p>
        {item.evidenceCards.map((card, index) => <article className="duel-card" key={card.title}>
          <header><small>0{index + 1}</small><h3>{card.title}</h3></header>
          <div className="duel-body">
            <div className="side-theory"><small>◭ THEY SAY</small><p>{card.theory}</p></div>
            <div className="side-record"><small>◉ THE RECORD SAYS</small><p>{card.record}</p></div>
          </div>
          <footer>{card.sourceIds.map((id) => { const source = item.sources.find((entry) => entry.id === id); return source ? <a href={source.url} target="_blank" rel="noreferrer" key={id}>{source.publisher} ↗</a> : null; })}</footer>
        </article>)}
      </section>

      <section id="facts" className="two-lists">
        <div className="agree"><p className="label">Both sides agree</p><h2>Confirmed ground</h2><ul>{item.sharedFacts.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
        <div className="open"><p className="label">Still open</p><h2>Fair questions</h2><ul>{item.unresolved.map((fact) => <li key={fact}>{fact}</li>)}</ul></div>
      </section>

      <section id="timeline" className="timeline-section">
        <p className="label">Chronology</p><h2>What happened, in order</h2>
        <div className="case-timeline">{item.timeline.map((event) => <div className="timeline-row" key={`${event.date}-${event.event}`}>
          <time>{event.date}</time>
          <div><p>{event.event}</p></div>
        </div>)}</div>
      </section>

      <section id="sources" className="sources-section">
        <p className="label">Reading room</p><h2>Check us—open the record</h2>
        <ol className="source-rows">{item.sources.map((source, index) => <li key={source.id}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <div><a href={source.url} target="_blank" rel="noreferrer">{source.title} ↗</a><p>{source.publisher} · {source.type}</p></div>
        </li>)}</ol>
      </section>

      <aside className="ad-slot">ADVERTISEMENT · ca-pub-9167552007992876</aside>
      <Link className="next-case" href={`/cases/${next.slug}`}><small>NEXT FILE</small><span>{next.title}</span><em>{next.question} →</em></Link>
    </article>

    <footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>Read both accounts. Open the sources. You decide.</p><span>© 2026</span></footer>
  </main>;
}
