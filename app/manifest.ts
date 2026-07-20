import type { MetadataRoute } from "next";
import { SITE } from "./site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: SITE.shortName,
    description: SITE.description,
    start_url: SITE.basePath,
    scope: SITE.basePath,
    display: "standalone",
    orientation: "portrait-primary",
    background_color: SITE.themeColor,
    theme_color: SITE.themeColor,
    categories: ["news", "education", "reference"],
    icons: [
      { src: `${SITE.basePath}/favicon.svg`, type: "image/svg+xml", sizes: "any", purpose: "any" },
      { src: `${SITE.basePath}/icon-192.png`, type: "image/png", sizes: "192x192", purpose: "any" },
      { src: `${SITE.basePath}/icon-512.png`, type: "image/png", sizes: "512x512", purpose: "any" },
      { src: `${SITE.basePath}/maskable-512.png`, type: "image/png", sizes: "512x512", purpose: "maskable" },
      { src: `${SITE.basePath}/apple-touch-icon.png`, type: "image/png", sizes: "180x180", purpose: "any" },
    ],
  };
}
