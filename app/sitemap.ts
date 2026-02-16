import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { industryGuides } from "@/lib/industries";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const basePages = [
    "",
    "/about",
    "/pricing",
    "/contact",
    "/how-it-works",
    "/industries-we-serve",
    "/blog"
  ];

  return [
    ...basePages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.8
    })),
    ...industryGuides.map((guide) => ({
      url: `${siteConfig.url}/industries/${guide.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
