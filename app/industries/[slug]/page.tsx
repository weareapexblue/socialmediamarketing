import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import {
  buildIndustrySections,
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
    description: `Practical social media management for ${guide.niche}, including content planning, human engagement, short-form video, plan recommendations, and FAQs.`,
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
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Industries", path: "/industries-we-serve" },
    { name: guide.title, path: `/industries/${guide.slug}` }
  ];

  const schemaData = buildSchemaData({
    path: `/industries/${guide.slug}`,
    serviceName: guide.title,
    serviceDescription: `Social media planning, publishing, short-form video, and human engagement support for ${guide.niche}.`,
    faqItems: guide.faq,
    breadcrumbs,
    serviceType: `Social media management for ${guide.niche}`
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge={`${guide.niche} Social Media`}
        title={guide.title}
        intro={`${guide.ctaBody} ${guide.localAngle}`}
        breadcrumbs={breadcrumbs}
      >
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

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-skyMint/55 p-7">
          <h2 className="font-heading text-3xl text-ink">Services that support this plan</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            See exactly how our team handles publishing, engagement, short-form video, and paid social options.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/services/social-media-management" className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean">
              Social Media Management
            </Link>
            <Link href="/services/social-media-engagement" className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean">
              Engagement and Community Management
            </Link>
            <Link href="/services/short-form-video" className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean">
              Short-Form Video
            </Link>
            <Link href="/services/social-media-advertising" className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean">
              Paid Social Advertising
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Explore related business needs</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            These related pages show how content and engagement priorities change for other customer journeys.
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
              Get My Social Plan
            </Link>
          </div>
        </section>

        <LeadCta
          title={`Want a practical social media plan for your ${guide.niche}?`}
          body="Share your current platforms, main goal, and biggest challenge. We will review the fit and recommend a sensible starting tier."
        />
      </PageShell>
    </>
  );
}
