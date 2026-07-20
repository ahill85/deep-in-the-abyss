/** Canonical public URL for SEO, sitemap, and social cards. */
export const SITE = {
  name: "Deep in the Abyss",
  shortName: "D/A",
  tagline: "They say. The record says. You decide.",
  description:
    "Compare conspiracy claims with government, mainstream, and primary-source reporting. Read both accounts, open the sources, and decide for yourself.",
  origin: "https://astarmedia.net",
  basePath: "/deep-in-the-abyss",
  locale: "en_US",
  themeColor: "#0a0d12",
  keywords: [
    "conspiracy theories",
    "alternative news",
    "fact checking",
    "primary sources",
    "government records",
    "research archive",
    "news comparison",
    "Deep in the Abyss",
  ],
} as const;

export const siteUrl = `${SITE.origin}${SITE.basePath}`;

export function absoluteUrl(path = "") {
  if (!path || path === "/") return siteUrl;
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}
