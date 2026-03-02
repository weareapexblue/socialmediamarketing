import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Maryland Social Media Management for Local Businesses | SocialMediaMarketing.VIP",
  description:
    "Maryland social media management for small businesses in Baltimore, Annapolis, Columbia, Bethesda, Rockville, and surrounding communities.",
  path: "/maryland-social-media-management",
  keywords: [
    "maryland social media management",
    "baltimore social media management",
    "annapolis social media manager",
    "columbia md social media marketing",
    "small business social media maryland"
  ]
});

const faqItems = [
  {
    question: "How much does social media management cost in Maryland?",
    answer:
      "Our plans start at $400 per month and scale to $1,500 per month based on channel coverage, posting cadence, and engagement depth."
  },
  {
    question: "Which Maryland areas do you support?",
    answer:
      "We support businesses across Maryland, including Baltimore, Annapolis, Columbia, Bethesda, Rockville, Towson, Frederick, Silver Spring, and nearby communities."
  },
  {
    question: "What does engagement include?",
    answer:
      "Engagement includes following potential customers, commenting on targeted posts, and responding to DMs and comments in your brand voice."
  },
  {
    question: "Do you support local service businesses and restaurants?",
    answer:
      "Yes. We work with local businesses, restaurants, contractors, service providers, creators, and community organizations throughout Maryland."
  }
];

const schemaData = buildSchemaData({
  path: "/maryland-social-media-management",
  serviceName: "Maryland Social Media Management",
  serviceDescription:
    "Human-first social media management for Maryland local businesses with posting, community engagement, and platform-specific content support.",
  faqItems
});

const marylandCities = [
  "Baltimore",
  "Annapolis",
  "Columbia",
  "Bethesda",
  "Rockville",
  "Silver Spring",
  "Towson",
  "Frederick",
  "Ellicott City",
  "Gaithersburg",
  "Pasadena",
  "Laurel"
];

const marylandCounties = [
  "Anne Arundel County",
  "Baltimore County",
  "Baltimore City",
  "Howard County",
  "Montgomery County",
  "Frederick County",
  "Harford County",
  "Prince George's County"
];

const deliverables = [
  "Monthly content planning tied to your local market and seasonal business cycles",
  "Platform-specific post formatting for Facebook, Instagram, TikTok, and YouTube",
  "Local hashtag and geo-tag research for stronger nearby visibility",
  "Community management: follow prospects, comment on targeted posts, and reply to DMs/comments",
  "Content performance reporting focused on visibility, message quality, and lead conversations",
  "Profile optimization updates so your channels match current offers, hours, and services"
];

const internalLinks = [
  { label: "Social Media for Local Businesses", href: "/industries/social-media-for-local-businesses" },
  { label: "Social Media for Restaurants", href: "/industries/social-media-for-restaurants" },
  { label: "Social Media for Contractors", href: "/industries/social-media-for-contractors" },
  { label: "Social Media for Real Estate Agents", href: "/industries/social-media-for-real-estate-agents" }
];

export default function MarylandSocialMediaManagementPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Maryland Service Page"
        title="Maryland social media management built for local businesses"
        intro="We help Maryland businesses stay consistent across social platforms with practical strategy, friendly engagement, and real people behind your brand."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <article className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-3xl text-ink">Cities and communities we support</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                We support businesses in major Maryland markets and nearby communities. If your team serves a local
                area, we can build a social media plan around your service radius, customer behavior, and local
                seasonality.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {marylandCities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-ocean/20 bg-skyMint px-3 py-1.5 text-xs font-semibold text-ink"
                  >
                    {city}, MD
                  </span>
                ))}
              </div>
            </article>
          </MotionReveal>

          <MotionReveal delay={0.07}>
            <article className="rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
              <h2 className="font-heading text-3xl text-ink">County-level coverage</h2>
              <p className="mt-3 text-sm leading-relaxed text-ink/75">
                For service businesses, we align content and engagement around county-level demand to keep local
                discovery and response quality consistent.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink/80">
                {marylandCounties.map((county) => (
                  <li key={county} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-coral" aria-hidden />
                    <span>{county}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/pricing"
                  className="rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
                >
                  Compare Pricing
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-coral/90"
                >
                  Send Quick Form
                </Link>
              </div>
            </article>
          </MotionReveal>
        </div>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">What your Maryland plan includes</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Every plan is built around weekly consistency, practical execution, and local audience interaction. We use
            smart tools for optimization and real humans for communication.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {deliverables.map((item, index) => (
              <MotionReveal key={item} delay={index * 0.02}>
                <article className="rounded-2xl border border-ocean/10 bg-cloud p-4">
                  <p className="text-sm leading-relaxed text-ink/85">{item}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-ink/75">
            Review the full process on our <Link href="/how-it-works" className="font-semibold text-ocean hover:underline">How It Works</Link>{" "}
            page or go straight to the <Link href="/pricing" className="font-semibold text-ocean hover:underline">Pricing</Link>{" "}
            page for tier details.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Explore industry-specific Maryland guides</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            If you want niche-specific examples, these long-form guides break down content ideas, common challenges, and
            best-fit tier recommendations.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {internalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-ocean/10 bg-cloud px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:bg-skyMint"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">Maryland social media FAQ</h2>
          <div className="mt-6">
            <FaqList items={faqItems} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
