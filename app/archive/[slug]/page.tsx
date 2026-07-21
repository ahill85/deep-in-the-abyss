import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { topics, topicSlug } from "../topics";
import { details } from "../details";
import { cases } from "../../cases";
import { SiteFooter } from "../../components/SiteFooter";
import { ThemeToggle } from "../../components/ThemeToggle";
import { absoluteUrl } from "../../site";

export function generateStaticParams() { return topics.map((topic) => ({ slug: topicSlug(topic.title) })); }

function findCase(title: string) {
  const lower = title.toLowerCase();
  return cases.find((item) => item.title.toLowerCase().includes(lower) || lower.includes(item.title.toLowerCase()));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const topic = topics.find((entry) => topicSlug(entry.title) === slug);
  if (!topic) return {};
  const description = `${topic.title}: what they say, what the record says — both accounts side by side. You decide.`;
  const url = absoluteUrl(`/archive/${slug}`);
  return {
    title: topic.title,
    description,
    keywords: [topic.title, topic.category, "conspiracy", "evidence", "Deep in the Abyss"],
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: `${topic.title} | Deep in the Abyss`, description, images: [{ url: absoluteUrl("/og-1200.png"), width: 1200, height: 630, alt: topic.title }] },
    twitter: { card: "summary_large_image", title: `${topic.title} | Deep in the Abyss`, description, images: [absoluteUrl("/og-1200.png")] },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = topics.findIndex((entry) => topicSlug(entry.title) === slug);
  if (index === -1) notFound();
  const topic = topics[index];
  const detail = details[topic.title];
  const fullCase = findCase(topic.title);
  const previous = topics[(index - 1 + topics.length) % topics.length];
  const next = topics[(index + 1) % topics.length];
  const search = encodeURIComponent(topic.title);
  const articleLd = {
    "@context": "https://schema.org", "@type": "Article", headline: topic.title,
    description: `${topic.title} — both accounts side by side.`,
    author: { "@type": "Organization", name: "Astar Media" },
    publisher: { "@type": "Organization", name: "Astar Media", url: "https://astarmedia.net" },
    mainEntityOfPage: absoluteUrl(`/archive/${slug}`), image: absoluteUrl("/og-1200.png"), articleSection: topic.category,
  };
  return <main className="case-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>They say · the record says</small></span></Link><div><Link href="/archive">All subjects</Link><Link href="/#matcher">Live matches</Link><ThemeToggle /></div></nav>

    <header className="case-hero">
      <div className="breadcrumbs"><Link href="/">Home</Link><span>/</span><Link href="/archive">Archive</Link><span>/</span><span>Subject {String(index + 1).padStart(3, "0")}</span></div>
      <p className="label">{topic.category} · {topic.status}</p>
      <h1>{topic.title}</h1>
    </header>

    <section className="vs-banner" aria-label="The two accounts">
      <article className="side-theory"><header><i>◭</i>THEY SAY</header><p>{topic.they}</p></article>
      <div className="vs-mark">VS</div>
      <article className="side-record"><header><i>◉</i>THE RECORD SAYS</header><p>{topic.record}</p></article>
    </section>

    <article className="case-article">
      {fullCase && <Link className="next-case full-file" href={`/cases/${fullCase.slug}`}><small>FULL DOSSIER AVAILABLE</small><span>{fullCase.title}</span><em>{fullCase.question} — story chapters, timeline, and primary sources →</em></Link>}

      {detail && detail.intro.length > 0 && <section className="story-chapters">
        <section className="chapter">
          <p className="label">The story so far</p>
          {detail.intro.map((paragraph, pIndex) => <p className={pIndex === 0 ? "lede" : undefined} key={pIndex}>{paragraph}</p>)}
        </section>
      </section>}

      {detail && detail.points.length > 0 && <section className="evidence-section">
        <p className="label">Point by point</p>
        <h2>They say. The record says.</h2>
        {detail.points.map((point, pointIndex) => <article className="duel-card" key={point.title}>
          <header><small>0{pointIndex + 1}</small><h3>{point.title}</h3></header>
          <div className="duel-body">
            <div className="side-theory"><small>◭ THEY SAY</small><p>{point.they}</p></div>
            <div className="side-record"><small>◉ THE RECORD SAYS</small><p>{point.record}</p></div>
          </div>
        </article>)}
      </section>}

      <section className="sources-section">
        <p className="label">Dig deeper — run the searches yourself</p>
        <h2>Check both sides</h2>
        <ol className="source-rows">
          <li><span>01</span><div><a href={`https://en.wikipedia.org/w/index.php?search=${search}`} target="_blank" rel="noreferrer">{topic.title} on Wikipedia ↗</a><p>Encyclopedic overview · community-sourced</p></div></li>
          <li><span>02</span><div><a href={`https://scholar.google.com/scholar?q=${search}`} target="_blank" rel="noreferrer">{topic.title} on Google Scholar ↗</a><p>Peer-reviewed research · academic record</p></div></li>
          <li><span>03</span><div><a href={`https://news.google.com/search?q=${search}`} target="_blank" rel="noreferrer">{topic.title} in current news ↗</a><p>Latest coverage · all outlets</p></div></li>
        </ol>
      </section>

      <div className="topic-pager">
        <Link className="next-case" href={`/archive/${topicSlug(previous.title)}`}><small>PREVIOUS SUBJECT</small><span>{previous.title}</span></Link>
        <Link className="next-case" href={`/archive/${topicSlug(next.title)}`}><small>NEXT SUBJECT</small><span>{next.title}</span></Link>
      </div>
    </article>

    <SiteFooter />
  </main>;
}
