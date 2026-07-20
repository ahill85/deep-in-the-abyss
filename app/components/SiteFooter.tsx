import Link from "next/link";
import { AdSlot } from "./AdSlot";

/** Bottom ad + site footer — used on every page. */
export function SiteFooter() {
  return (
    <>
      <AdSlot placement="bottom" />
      <footer>
        <Link className="logo" href="/">
          <b>D/A</b>
          <span>DEEP IN THE ABYSS</span>
        </Link>
        <p>Read both accounts. Open the sources. You decide.</p>
        <span>© 2026</span>
      </footer>
    </>
  );
}
