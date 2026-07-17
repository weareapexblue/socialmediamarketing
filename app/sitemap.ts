import type { MetadataRoute } from "next";

import { blogPosts } from "@/lib/blog";
import { industryGuides } from "@/lib/industries";
import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/services";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updatedAt = new Date("2026-07-16T00:00:00-04:00");
  const basePages = [
    "",
    "/about",
    "/services",
    "/pricing",
    "/contact",
    "/how-it-works",
    "/maryland-social-media-management",
    "/locations",
    "/industries-we-serve",
    "/blog",
    "/privacy"
  ];

  return [
    ...basePages.map((path) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.8
    })),
    ...servicePages.map((service) => ({
      url: `${siteConfig.url}/services/${service.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.9
    })),
    ...locationPages.map((location) => ({
      url: `${siteConfig.url}/locations/${location.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...industryGuides.map((guide) => ({
      url: `${siteConfig.url}/industries/${guide.slug}`,
      lastModified: updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.85
    })),
    ...blogPosts.map((post) => ({
      url: `${siteConfig.url}/blog/${post.slug}`,
      lastModified: new Date(`${post.updatedAt}T00:00:00-04:00`),
      changeFrequency: "monthly" as const,
      priority: 0.75
    }))
  ];
}
