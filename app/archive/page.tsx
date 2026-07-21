import type { Metadata } from "next";
import Link from "next/link";
import { topics, topicSlug } from "./topics";
import { cases } from "../cases";
import { SiteFooter } from "../components/SiteFooter";
import { ThemeToggle } from "../components/ThemeToggle";
import { absoluteUrl } from "../site";

export const metadata: Metadata = {
  title: "The Archive",
  description: `Browse ${topics.length} conspiracies, myths, cryptids, lost cities, and unexplained events — each with both accounts side by side and links to the record.`,
  alternates: { canonical: absoluteUrl("/archive") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/archive"),
    title: "The Archive | Deep in the Abyss",
    description: "Conspiracies, myths, cryptids, and unexplained events — claim vs record, side by side.",
    images: [{ url: absoluteUrl("/og-1200.png"), width: 1200, height: 630, alt: "Deep in the Abyss archive" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Archive | Deep in the Abyss",
    description: "Conspiracies, myths, cryptids, and unexplained events — claim vs record, side by side.",
    images: [absoluteUrl("/og-1200.png")],
  },
};

export default function Archive() {
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>They say · the record says</small></span></Link><div><Link href="/">Live matches</Link><ThemeToggle /></div></nav>
    <header className="archive-hero">
      <p className="label">The archive</p>
      <h1>{topics.length} rabbit holes.<br />Both accounts, every time.</h1>
      <p>Conspiracies, dragons, cryptids, lost cities, missing planes, relics, secret programs, and internet folklore. Each entry gives the claim and the record side by side—full files link through to sourced dossiers. You decide.</p>
    </header>
    <section className="archive-grid">
      {topics.map((topic, index) => {
        const complete = cases.find((item) => item.title.toLowerCase().includes(topic.title.toLowerCase()) || topic.title.toLowerCase().includes(item.title.toLowerCase()));
        return <Link href={complete ? `/cases/${complete.slug}` : `/archive/${topicSlug(topic.title)}`} key={topic.title}>
          <div className="topic-top"><span>{String(index + 1).padStart(3, "0")}</span><small>{topic.category}</small></div>
          <h2>{topic.title}</h2>
          <p className="they"><small>◭ THEY SAY</small>{topic.they}</p>
          <p className="rec"><small>◉ THE RECORD SAYS</small>{topic.record}</p>
          <b>{complete ? "Read the full dossier →" : "Open the file →"}</b>
        </Link>;
      })}
    </section>
    <SiteFooter />
  </main>;
}
