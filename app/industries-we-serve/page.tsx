import Link from "next/link";

import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { industryGuides } from "@/lib/industries";

export const metadata = buildPageMetadata({
  title: "Industries We Serve | SocialMediaMarketing.VIP",
  description:
    "Explore social media strategies for 20 local business niches, from restaurants and contractors to nonprofits and boutiques.",
  path: "/industries-we-serve",
  keywords: ["social media by industry", "local business social media guides", "maryland social media niches"]
});

const faqItems = [
  {
    question: "Do you customize strategy for each industry?",
    answer:
      "Yes. Each industry has unique customer behaviors and content priorities, so we tailor strategy and engagement accordingly."
  },
  {
    question: "Can you serve businesses with multiple service lines?",
    answer:
      "Yes. We can blend content pillars across service lines while maintaining a consistent brand voice and posting cadence."
  },
  {
    question: "Are these industry guides useful before hiring?",
    answer:
      "Yes. The guides are designed to help owners understand common social media problems, plan options, and next steps."
  }
];

const schemaData = buildSchemaData({
  path: "/industries-we-serve",
  serviceName: "Social Media Industry Guides",
  serviceDescription:
    "Detailed social media strategy guides for 20 local business industries, including tier recommendations and FAQs.",
  faqItems
});

export default function IndustriesPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Industries"
        title="Industry-specific social media support for local teams"
        intro="Explore our long-form guides built for the businesses we serve most often. Each guide breaks down common struggles, practical strategy, tier fit, and next steps."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryGuides.map((guide, index) => (
            <MotionReveal key={guide.slug} delay={index * 0.02}>
              <article className="group flex h-full flex-col rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <h2 className="font-heading text-2xl text-ink">{guide.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">Built for {guide.niche} that need practical weekly consistency and human engagement support.</p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-ocean">Recommended: {guide.bestTier}</p>
                <Link
                  href={`/industries/${guide.slug}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-skyMint px-4 py-2 text-sm font-semibold text-ink transition group-hover:bg-ocean group-hover:text-white"
                >
                  Read guide
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>
      </PageShell>
    </>
  );
}
