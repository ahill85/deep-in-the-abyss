import Link from "next/link";
import { topics } from "./topics";
import { cases } from "../cases";

export default function Archive() {
  return <main>
    <nav className="site-nav"><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS<small>Conspiracy archive</small></span></Link><div><Link href="/">Live matches</Link></div></nav>
    <header className="archive-hero"><p className="label">Evergreen archive</p><h1>{topics.length} rabbit holes.<br/>Compare the accounts.</h1><p>Conspiracies, dragons, cryptids, lost cities, missing planes, relics, secret programs, and internet folklore. Every completed file presents both accounts and lets the reader decide.</p></header>
    <section className="archive-grid">{topics.map((topic, index) => {
      const complete = cases.find((item) => item.title.toLowerCase().includes(topic.title.toLowerCase()) || topic.title.toLowerCase().includes(item.title.toLowerCase()));
      return complete
        ? <Link href={`/cases/${complete.slug}`} key={topic.title}><span>{String(index + 1).padStart(2, "0")}</span><small>{topic.category}</small><h2>{topic.title}</h2><b>Compare both accounts →</b></Link>
        : <article key={topic.title}><span>{String(index + 1).padStart(2, "0")}</span><small>{topic.category}</small><h2>{topic.title}</h2><b>Research queued</b></article>;
    })}</section>
    <footer><Link className="logo" href="/"><b>D/A</b><span>DEEP IN THE ABYSS</span></Link><p>Read both accounts. Open the sources. You decide.</p><span>© 2026</span></footer>
  </main>;
}
