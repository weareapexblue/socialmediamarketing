import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { getIndustryGuide } from "@/lib/industries";
import { getLocationPage, locationPages } from "@/lib/locations";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

type LocationDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    return buildPageMetadata({
      title: "Maryland Social Media Management | SocialMediaMarketing.VIP",
      description: "Human-first social media management for businesses across Maryland.",
      path: "/locations"
    });
  }

  return buildPageMetadata({
    title: location.metaTitle,
    description: location.description,
    path: `/locations/${location.slug}`,
    keywords: [
      `${location.city} social media management`,
      `${location.city} social media marketing`,
      `${location.region} social media manager`
    ]
  });
}

export default async function LocationDetailPage({ params }: LocationDetailPageProps) {
  const { slug } = await params;
  const location = getLocationPage(slug);

  if (!location) {
    notFound();
  }

  const relatedGuides = location.relatedIndustrySlugs
    .map((industrySlug) => getIndustryGuide(industrySlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Maryland Areas", path: "/locations" },
    { name: location.label, path: `/locations/${location.slug}` }
  ];

  const schemaData = buildSchemaData({
    path: `/locations/${location.slug}`,
    serviceName: `Social Media Management in ${location.city}, Maryland`,
    serviceDescription: location.description,
    faqItems: location.faq,
    breadcrumbs,
    areaServed: [location.city, "Maryland"]
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge={`${location.label} Social Media Team`}
        title={location.hero}
        intro={location.description}
        breadcrumbs={breadcrumbs}
      >
        <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">A social plan built around real local customers</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
            {location.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <MotionReveal>
            <section className="h-full rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
              <h2 className="font-heading text-3xl text-ink">Areas your plan may include</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                We use location references only where they match your real customers, service area, or business story.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {location.nearbyAreas.map((area) => (
                  <span key={area} className="rounded-full border border-leaf/20 bg-white px-3 py-1.5 text-xs font-semibold text-ink">{area}</span>
                ))}
              </div>
            </section>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <section className="h-full rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-3xl text-ink">What matters in this market</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
                {location.marketNotes.map((note) => (
                  <li key={note} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" aria-hidden />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            </section>
          </MotionReveal>
        </div>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">Useful content directions for {location.city} businesses</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">
            The strongest ideas come from the business itself. We use your expertise, customer questions, team, work, and current priorities as the source material.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {location.contentIdeas.map((idea, index) => (
              <MotionReveal key={idea} delay={index * 0.025}>
                <div className="rounded-2xl border border-ocean/10 bg-cloud p-4 text-sm leading-relaxed text-ink/85">{idea}</div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-skyMint/55 p-7 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">Human Engagement</p>
          <h2 className="mt-3 font-heading text-3xl text-ink">Where conversation support can focus</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Engagement is planned around relevance and customer fit. We do not buy followers or leave automated comments.
          </p>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
            {location.engagementTargets.map((target) => (
              <li key={target} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-ocean" aria-hidden />
                <span>{target}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/services/social-media-engagement"
            className="mt-6 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
          >
            See How Engagement Works
          </Link>
        </section>

        <section className="mt-8 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">A sensible starting plan</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">{location.recommendedPlan}</p>
          <Link href="/pricing" className="mt-5 inline-flex rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ocean">
            Compare All Three Plans
          </Link>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Explore nearby business needs by industry</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/industries/${guide.slug}`}
                className="rounded-2xl border border-ocean/10 bg-cloud px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:bg-skyMint"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Frequently asked questions</h2>
          <div className="mt-5"><FaqList items={location.faq} /></div>
        </section>

        <LeadCta
          title={`Want a practical social media plan for your ${location.city} business?`}
          body="Tell us about your business type, current platforms, and primary goal. We will review the details and recommend a clear starting point."
        />
      </PageShell>
    </>
  );
}
