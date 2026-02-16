import type { Metadata } from "next";
import { Baloo_2, Nunito } from "next/font/google";

import "@/app/globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { buildPageMetadata } from "@/lib/metadata";

const heading = Baloo_2({
  subsets: ["latin"],
  variable: "--font-heading"
});

const body = Nunito({
  subsets: ["latin"],
  variable: "--font-body"
});

export const metadata: Metadata = buildPageMetadata({
  title: "SocialMediaMarketing.VIP | Friendly Social Media Management in Maryland",
  description:
    "Warm, practical social media management for Maryland local businesses. Real people manage your posts, comments, and DMs with support from smart tools.",
  path: "/",
  keywords: [
    "Maryland social media management",
    "social media for local business",
    "Facebook and Instagram management",
    "small business social media support"
  ]
});

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="font-body">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
