import type { MetadataRoute } from "next";
import { cases } from "./cases";
import { topics, topicSlug } from "./archive/topics";
import { absoluteUrl } from "./site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "hourly", priority: 1 },
    { url: absoluteUrl("/archive"), lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    ...cases.map((item) => ({
      url: absoluteUrl(`/cases/${item.slug}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...topics.map((topic) => ({
      url: absoluteUrl(`/archive/${topicSlug(topic.title)}`),
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
