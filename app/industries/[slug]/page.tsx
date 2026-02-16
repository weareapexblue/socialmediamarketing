import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import {
  buildIndustrySections,
  estimateWordCount,
  getIndustryGuide,
  getRelatedIndustryGuides,
  industryGuides
} from "@/lib/industries";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getIndustryGuide(slug);

  if (!guide) {
    return buildPageMetadata({
      title: "Industry Guide Not Found | SocialMediaMarketing.VIP",
      description: "The requested industry guide was not found.",
      path: "/industries-we-serve"
    });
  }

  return buildPageMetadata({
    title: `${guide.title} | SocialMediaMarketing.VIP`,
    description: `Long-form guide for ${guide.niche}: common struggles, practical social strategy, tier recommendations, and FAQs for local businesses.`,
    path: `/industries/${guide.slug}`,
    keywords: [
      `${guide.niche} social media management`,
      `${guide.niche} marketing help`,
      "maryland social media services"
    ]
  });
}

export default async function IndustryGuidePage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const guide = getIndustryGuide(slug);

  if (!guide) {
    notFound();
  }

  const sections = buildIndustrySections(guide);
  const related = getRelatedIndustryGuides(guide.slug, 4);
  const estimatedWords = estimateWordCount(sections, guide.faq);

  const schemaData = buildSchemaData({
    path: `/industries/${guide.slug}`,
    serviceName: `${guide.title} Social Media Management Guide`,
    serviceDescription: `Detailed social media strategy for ${guide.niche} with practical human-first engagement recommendations.`,
    faqItems: guide.faq
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Industry Guide"
        title={guide.title}
        intro={`${guide.ctaBody} This guide is written for real teams that want practical social media strategy with consistent human interaction.`}
      >
        <div className="mb-8 rounded-2xl border border-ocean/10 bg-skyMint/60 p-4 text-xs font-semibold uppercase tracking-[0.14em] text-ocean">
          Long-form guide length: approximately {estimatedWords} words
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <MotionReveal key={section.heading} delay={index * 0.02}>
              <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
                <h2 className="font-heading text-3xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-2 text-sm text-ink/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2">
                        <span className="mt-2 h-2 w-2 rounded-full bg-coral" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </MotionReveal>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">Frequently asked questions</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            These are common questions we hear from {guide.niche} owners exploring social media support.
          </p>
          <div className="mt-6">
            <FaqList items={guide.faq} />
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Explore more industry guides</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            These related pages help you compare strategy approaches across different local business niches.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="rounded-2xl border border-ocean/10 bg-cloud px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:bg-skyMint"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/pricing"
              className="rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Compare pricing tiers
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-coral/90"
            >
              Talk with our team
            </Link>
          </div>
        </section>
      </PageShell>
    </>
  );
}
