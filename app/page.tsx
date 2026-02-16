import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { HomeHero } from "@/components/home-hero";
import { MotionReveal } from "@/components/motion-reveal";
import { PricingCards } from "@/components/pricing-cards";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { SectionTitle } from "@/components/section-title";
import { Container } from "@/components/container";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "SocialMediaMarketing.VIP | Social Media Management for Maryland Small Businesses",
  description:
    "Friendly social media management for Maryland businesses. Real humans handle posting, engagement, and DM support with practical monthly plans.",
  path: "/",
  keywords: [
    "social media management Maryland",
    "social media for local business",
    "facebook instagram management",
    "maryland marketing support"
  ]
});

const homeFaq = [
  {
    question: "Who is SocialMediaMarketing.VIP best for?",
    answer:
      "We are built for local businesses, small brands, service providers, restaurants, contractors, creators, and community organizations that need practical social media support."
  },
  {
    question: "Do real people manage engagement?",
    answer:
      "Yes. We use smart tools for support tasks, but real people manage comments, DMs, and community interaction."
  },
  {
    question: "Can I start with one platform and grow later?",
    answer:
      "Absolutely. Many businesses start with Meta and expand to TikTok, YouTube, and additional channels as they grow."
  }
];

const schemaData = buildSchemaData({
  path: "/",
  serviceName: "Social Media Management for Local Businesses",
  serviceDescription:
    "Maryland-based social media management with real human engagement, practical monthly plans, and platform-ready content.",
  faqItems: homeFaq
});

const audiences = [
  "Local businesses",
  "Small brands",
  "Service providers",
  "Restaurants",
  "Contractors",
  "Creators",
  "Community businesses"
];

const steps = [
  {
    title: "Share your goals",
    body: "We learn your voice, offers, and local audience so your social strategy starts from real business context."
  },
  {
    title: "Approve your monthly plan",
    body: "You get a clear post schedule, video topics, and engagement approach before publishing starts."
  },
  {
    title: "We post and engage",
    body: "Our team publishes content, follows potential customers, comments on targeted posts, and responds to DMs and comments in a friendly brand-safe tone."
  },
  {
    title: "Review simple progress",
    body: "You get clear reporting focused on visibility, engagement quality, and real customer conversations."
  }
];

export default function HomePage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <HomeHero />

      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Who We Help"
            title="Built for everyday businesses, not enterprise teams"
            description="We support real local teams who want to show up consistently without hiring a full in-house social department."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((audience, index) => (
              <MotionReveal
                key={audience}
                delay={index * 0.04}
                className="rounded-2xl border border-ocean/10 bg-white p-5 text-sm font-semibold text-ink shadow-soft"
              >
                {audience}
              </MotionReveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow="Pricing"
            title="Simple monthly plans with human support"
            description="No inflated retainers. No fake growth hacks. Just clear packages that fit where your business is today."
          />
          <PricingCards compact />
          <div className="mt-8 text-center">
            <Link
              href="/pricing"
              className="inline-flex rounded-full bg-coral px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-coral/90"
            >
              Compare Full Plan Details
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="How It Works"
            title="A practical process that keeps momentum"
            description="Our workflow is simple, transparent, and designed for busy teams that need reliable execution every week."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <MotionReveal key={step.title} delay={index * 0.06}>
                <article className="rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">Step {index + 1}</p>
                  <h3 className="mt-2 font-heading text-2xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-8 rounded-3xl border border-leaf/20 bg-leaf/10 p-6 text-sm leading-relaxed text-ink">
            We are based in Maryland and support businesses throughout the state and beyond. If your business serves a
            local community, we can help your social channels feel consistent, friendly, and trustworthy.
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Quick answers before we chat"
            description="Clear details to help you choose the right next step."
          />
          <FaqList items={homeFaq} />
        </Container>
      </section>

      <section className="pb-20 pt-16">
        <Container>
          <div className="rounded-[2rem] bg-gradient-to-r from-ocean to-leaf p-8 text-white shadow-card sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Ready to Start</p>
            <h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">
              Let&apos;s build a social media plan that feels like your brand.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/90">
              Friendly strategy, clear monthly pricing, and real human interaction from a Maryland team that understands
              local businesses.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ocean transition hover:bg-skyMint"
              >
                Start Contact Form
              </Link>
              <Link
                href="/industries-we-serve"
                className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Explore Industries
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
