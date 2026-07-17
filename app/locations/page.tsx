import Link from "next/link";

import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { locationPages } from "@/lib/locations";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Maryland Social Media Management Areas | SocialMediaMarketing.VIP",
  description:
    "Local social media management for businesses in Baltimore, Annapolis, Columbia, Frederick, Rockville, Towson, and communities across Maryland.",
  path: "/locations",
  keywords: [
    "Maryland social media management",
    "Baltimore social media management",
    "Annapolis social media manager",
    "Columbia MD social media marketing"
  ]
});

const faqItems = [
  {
    question: "Do you only serve the Maryland cities listed here?",
    answer:
      "No. These pages cover several of the markets we know best, but we support businesses across Maryland and can build around your actual service area."
  },
  {
    question: "Does local social media management require constant location mentions?",
    answer:
      "No. Local context should be accurate and useful. We use place references when they help customers understand the service area, story, event, or next step."
  },
  {
    question: "Can you support a business with several Maryland locations?",
    answer:
      "Yes. We can organize shared brand content alongside location-specific updates so each audience receives relevant information."
  }
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Maryland Areas", path: "/locations" }
];

const schemaData = buildSchemaData({
  path: "/locations",
  serviceName: "Maryland Social Media Management",
  serviceDescription:
    "Human-first social media management for local businesses across Baltimore, Annapolis, Columbia, Frederick, Rockville, Towson, and Maryland.",
  faqItems,
  breadcrumbs,
  areaServed: ["Maryland", ...locationPages.map((location) => location.city)]
});

export default function LocationsPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Maryland Areas"
        title="Local social media support shaped around the communities you serve"
        intro="Your social plan should reflect your real customers, service area, local seasonality, and the conversations happening around your business."
        breadcrumbs={breadcrumbs}
      >
        <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
          <h2 className="font-heading text-3xl text-ink">Maryland is the starting point, not a caption template</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Local content works when the place is genuinely connected to the customer story. We build around real service areas, neighborhood questions, seasonal needs, events, and relationships instead of adding a city name to generic posts.
          </p>
          <Link
            href="/maryland-social-media-management"
            className="mt-5 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
          >
            View Statewide Service Details
          </Link>
        </section>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {locationPages.map((location, index) => (
            <MotionReveal key={location.slug} delay={index * 0.04}>
              <article className="group flex h-full flex-col rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-ocean">{location.region}</p>
                <h2 className="mt-3 font-heading text-3xl text-ink">{location.label}</h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{location.description}</p>
                <Link
                  href={`/locations/${location.slug}`}
                  className="mt-5 inline-flex w-fit rounded-full bg-skyMint px-4 py-2 text-sm font-semibold text-ink transition group-hover:bg-ocean group-hover:text-white"
                >
                  Explore {location.city}
                </Link>
              </article>
            </MotionReveal>
          ))}
        </div>

        <LeadCta
          title="Tell us where your customers are and what you want social media to do."
          body="We will use your real market, service area, active platforms, and current goals to recommend a practical starting plan."
        />
      </PageShell>
    </>
  );
}
