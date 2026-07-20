import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "./site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: `${SITE.basePath}/`,
        disallow: [`${SITE.basePath}/api/`],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: "astarmedia.net",
  };
}
