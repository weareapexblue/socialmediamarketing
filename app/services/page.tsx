import Link from "next/link";

import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { servicePages } from "@/lib/services";

export const metadata = buildPageMetadata({
  title: "Social Media Management Services in Maryland | SMM.VIP",
  description:
    "Explore social media management, Facebook and Instagram support, human engagement, short-form video, and paid social advertising for Maryland businesses.",
  path: "/services",
  keywords: [
    "social media management services Maryland",
    "Facebook Instagram management",
    "social media engagement service",
    "short form video Maryland"
  ]
});

const faqItems = [
  {
    question: "Can we start with only Facebook and Instagram?",
    answer:
      "Yes. Tier 1 focuses on Facebook and Instagram with weekly posting, a monthly short-form video, human engagement, comment monitoring, and DM replies."
  },
  {
    question: "Does every plan include community engagement?",
    answer:
      "Yes. Every plan includes human engagement, with a wider and more active scope in the higher tiers."
  },
  {
    question: "Are paid ads part of monthly social media management?",
    answer:
      "No. Paid Meta, TikTok, and YouTube advertising is planned and quoted separately from the organic monthly tiers."
  }
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" }
];

const schemaData = buildSchemaData({
  path: "/services",
  serviceName: "Social Media Management Services",
  serviceDescription:
    "Human-first social media management, engagement, short-form video, and paid social advertising support for Maryland local businesses.",
  faqItems,
  breadcrumbs
});

export default function ServicesPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Services"
        title="Practical social media support, handled by real people"
        intro="Choose the kind of support your business needs now, from a focused Facebook and Instagram plan to wider content, video, engagement, and advertising help."
        breadcrumbs={breadcrumbs}
      >
        <div className="grid gap-5 md:grid-cols-2">
          {servicePages.map((service, index) => (
            <MotionReveal key={service.slug} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">Service</p>
                <h2 className="mt-3 font-heading text-3xl text-ink">{service.name}</h2>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="mt-6 inline-flex w-fit rounded-full bg-skyMint px-4 py-2 text-sm font-semibold text-ink transition group-hover:bg-ocean group-hover:text-white"
                >
                  Explore This Service
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>

        <LeadCta
          title="Not sure which service matches your current situation?"
          body="Share your active platforms, main goal, and biggest social media challenge. We will point you toward a sensible starting plan."
        />
      </PageShell>
    </>
  );
}
