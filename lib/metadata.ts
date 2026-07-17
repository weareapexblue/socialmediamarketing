import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildPageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  type = "website",
  publishedTime,
  modifiedTime
}: BuildMetadataInput): Metadata {
  const canonical = `${siteConfig.url}${path}`;
  const socialImage = `${siteConfig.url}/opengraph-image`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description,
    keywords,
    applicationName: siteConfig.name,
    category: "business",
    ...(type === "article"
      ? {
          authors: [
            {
              name: "SocialMediaMarketing.VIP Team",
              url: `${siteConfig.url}/about`
            }
          ]
        }
      : {}),
    alternates: {
      canonical,
      types: {
        "application/rss+xml": `${siteConfig.url}/feed.xml`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1
      }
    },
    openGraph: {
      title,
      description,
      type,
      url: canonical,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} - real people behind your brand`
        }
      ],
      ...(type === "article"
        ? {
            publishedTime,
            modifiedTime,
            authors: [`${siteConfig.url}/about`]
          }
        : {})
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}
