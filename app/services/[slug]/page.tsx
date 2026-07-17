import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { getIndustryGuide } from "@/lib/industries";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { getServicePage, servicePages } from "@/lib/services";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    return buildPageMetadata({
      title: "Social Media Services | SocialMediaMarketing.VIP",
      description: "Explore practical social media services for Maryland local businesses.",
      path: "/services"
    });
  }

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: [service.name.toLowerCase(), `${service.name.toLowerCase()} Maryland`, "social media help for small business"]
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServicePage(slug);

  if (!service) {
    notFound();
  }

  const relatedGuides = service.relatedIndustrySlugs
    .map((industrySlug) => getIndustryGuide(industrySlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.name, path: `/services/${service.slug}` }
  ];

  const schemaData = buildSchemaData({
    path: `/services/${service.slug}`,
    serviceName: service.name,
    serviceDescription: service.description,
    faqItems: service.faq,
    breadcrumbs,
    serviceType: service.name,
    includeOffers: service.slug !== "social-media-advertising"
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge={service.name}
        title={service.hero}
        intro={service.description}
        breadcrumbs={breadcrumbs}
      >
        <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">What this service is designed to do</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
            {service.opening.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <MotionReveal>
            <section className="h-full rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
              <h2 className="font-heading text-3xl text-ink">Who it helps</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
                {service.whoItHelps.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </MotionReveal>

          <MotionReveal delay={0.06}>
            <section className="h-full rounded-3xl border border-coral/20 bg-coral/10 p-7">
              <h2 className="font-heading text-3xl text-ink">Problems we help organize</h2>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
                {service.commonProblems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </MotionReveal>
        </div>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">What our team handles</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">
            The exact scope follows your selected plan and onboarding agreement. These are the practical pieces this service is built around.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {service.deliverables.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.025}>
                <div className="rounded-2xl border border-ocean/10 bg-cloud p-4 text-sm leading-relaxed text-ink/85">{item}</div>
              </MotionReveal>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-skyMint/55 p-7 sm:p-9">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">Real People Behind Your Brand</p>
          <h2 className="mt-3 font-heading text-3xl text-ink">Why the human part matters</h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/80">
            {service.humanDifference.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">A clear monthly rhythm</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {service.monthlyFlow.map((step, index) => (
              <article key={step.title} className="rounded-2xl border border-ocean/10 bg-cloud p-4">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">Step {index + 1}</p>
                <h3 className="mt-2 font-heading text-xl text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/75">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">Which plan fits?</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">{service.planFit}</p>
          <Link
            href={service.planHref}
            className="mt-5 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
          >
            {service.slug === "social-media-advertising" ? "Ask About Paid Ads" : "Compare Plan Details"}
          </Link>
        </section>

        <section className="mt-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">See how this works for different businesses</h2>
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
          <div className="mt-5"><FaqList items={service.faq} /></div>
        </section>

        <LeadCta
          title={`Want to know if ${service.name.toLowerCase()} fits your business?`}
          body="Share a few details about your current channels and primary goal. The form is short, and your ad budget is optional."
        />
      </PageShell>
    </>
  );
}
