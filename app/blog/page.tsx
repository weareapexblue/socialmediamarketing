import Link from "next/link";

import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { blogPosts } from "@/lib/blog";

export const metadata = buildPageMetadata({
  title: "Social Media Blog | SocialMediaMarketing.VIP",
  description:
    "Read practical social media guides for local businesses: posting frequency, engagement strategy, DM response, and growth basics.",
  path: "/blog",
  keywords: ["social media blog small business", "engagement strategy", "organic social tips"]
});

const faqItems = [
  {
    question: "Are these blog posts written for small businesses?",
    answer:
      "Yes. Every article is written in plain language for local teams, service providers, and owner-led brands."
  },
  {
    question: "Do blog posts include links to service pages?",
    answer:
      "Yes. Each post links to related industry guides and pricing so readers can take practical next steps."
  },
  {
    question: "How often is the blog updated?",
    answer:
      "We update with evergreen education and strategy insights designed to stay useful for local business teams."
  }
];

const schemaData = buildSchemaData({
  path: "/blog",
  serviceName: "Social Media Education Blog",
  serviceDescription:
    "Educational social media articles focused on practical strategy for local and small businesses.",
  faqItems
});

export default function BlogPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Blog"
        title="Friendly social media education for local businesses"
        intro="These long-form articles break down practical strategy in plain language so business owners can make confident marketing decisions."
      >
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <MotionReveal key={post.slug} delay={index * 0.03}>
              <article className="group rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft">
                <h2 className="font-heading text-2xl text-ink">{post.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex rounded-full bg-skyMint px-4 py-2 text-sm font-semibold text-ink transition group-hover:bg-ocean group-hover:text-white"
                >
                  Read article
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>
      </PageShell>
    </>
  );
}
