import Link from "next/link";

import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { blogPosts } from "@/lib/blog";

export const metadata = buildPageMetadata({
  title: "Social Media Blog | SocialMediaMarketing.VIP",
  description:
    "Read practical social media guides for local businesses: posting frequency, human engagement, DM response, paid ads, and content planning.",
  path: "/blog",
  keywords: ["social media blog small business", "engagement strategy", "organic social tips"]
});

const faqItems = [
  {
    question: "Where should a small business start with social media?",
    answer:
      "Start with the platforms your customers already use, a posting rhythm your team can sustain, and a clear process for responding to comments and DMs."
  },
  {
    question: "Is posting more often always better?",
    answer:
      "No. Useful, accurate content and dependable replies matter more than forcing a high volume your team cannot maintain."
  },
  {
    question: "Can AI handle social media for a local business?",
    answer:
      "AI can support research, organization, drafts, and scheduling, but real people should verify facts, protect tone, and handle customer conversations."
  }
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Blog", path: "/blog" }
];

const schemaData = buildSchemaData({
  path: "/blog",
  serviceName: "Social Media Education Blog",
  serviceDescription:
    "Educational social media articles focused on practical strategy for local and small businesses.",
  faqItems,
  breadcrumbs,
  includeOffers: false
});

export default function BlogPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Blog"
        title="Friendly social media education for local businesses"
        intro="Clear answers about posting, engagement, direct messages, paid ads, automation, and the social media decisions small businesses make every month."
        breadcrumbs={breadcrumbs}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <MotionReveal key={post.slug} delay={index * 0.03}>
              <article className="group rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft">
                <h2 className="font-heading text-2xl text-ink">{post.title}</h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-ocean">
                  Updated {formatDate(post.updatedAt)}
                </p>
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

        <LeadCta
          title="Ready to turn the advice into a dependable monthly routine?"
          body="Share your current platforms and primary goal. Our short form helps us recommend the right level of content and human engagement support."
        />
      </PageShell>
    </>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}
