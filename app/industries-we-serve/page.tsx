import Link from "next/link";

import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { industryGuides } from "@/lib/industries";

export const metadata = buildPageMetadata({
  title: "Social Media Management by Industry | SMM.VIP",
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
    question: "Do you work with regulated or sensitive industries?",
    answer:
      "Yes, when clear review, privacy, and response boundaries are in place. Legal and medical teams keep control of professional and case-specific decisions."
  }
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Industries", path: "/industries-we-serve" }
];

const schemaData = buildSchemaData({
  path: "/industries-we-serve",
  serviceName: "Social Media Industry Guides",
  serviceDescription:
    "Social media management approaches for 20 local business industries, including content planning, human engagement, and tier recommendations.",
  faqItems,
  breadcrumbs
});

export default function IndustriesPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Industries"
        title="Industry-specific social media support for local teams"
        intro="See how content, customer questions, privacy boundaries, video opportunities, and engagement priorities change from one type of business to another."
        breadcrumbs={breadcrumbs}
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industryGuides.map((guide, index) => (
            <MotionReveal key={guide.slug} delay={index * 0.02}>
              <article className="group flex h-full flex-col rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <h2 className="font-heading text-2xl text-ink">{guide.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{guide.ctaBody}</p>
                <p className="mt-3 text-xs font-black uppercase tracking-[0.16em] text-ocean">Recommended: {guide.bestTier}</p>
                <Link
                  href={`/industries/${guide.slug}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-skyMint px-4 py-2 text-sm font-semibold text-ink transition group-hover:bg-ocean group-hover:text-white"
                >
                  Explore {guide.niche}
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-skyMint/55 p-7">
          <h2 className="font-heading text-3xl text-ink">The same foundation, adapted to the business</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Every plan starts with real source material, a sustainable calendar, platform-ready formatting, and human engagement. The industry determines what customers need to understand, what the team should capture, and which questions require escalation.
          </p>
          <Link href="/services/social-media-management" className="mt-5 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink">
            See Social Media Management Services
          </Link>
        </section>

        <LeadCta
          title="Do not see your exact business type?"
          body="Tell us what you sell, who your customers are, and how social media is handled now. We can still recommend a practical content and engagement approach."
        />
      </PageShell>
    </>
  );
}
