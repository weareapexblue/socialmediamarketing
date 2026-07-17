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
import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/services";

export const metadata = buildPageMetadata({
  title: "Maryland Social Media Management | SocialMediaMarketing.VIP",
  description:
    "Social media management for Maryland small businesses. Real people handle content, short-form video, targeted engagement, comments, and DMs from $400/month.",
  path: "/",
  keywords: [
    "social media management Maryland",
    "baltimore social media management",
    "annapolis social media marketing",
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
      "Yes. Engagement includes following potential customers, commenting on targeted posts, and responding to eligible DMs and comments. Smart tools support the workflow, but real people handle communication."
  },
  {
    question: "Can I start with one platform and grow later?",
    answer:
      "Absolutely. Many businesses start with Meta and expand to TikTok, YouTube, and additional channels as they grow."
  },
  {
    question: "Which Maryland areas do you serve?",
    answer:
      "We support local businesses across Maryland, including Baltimore, Annapolis, Columbia, Bethesda, Rockville, Towson, Frederick, and surrounding communities."
  },
  {
    question: "How much does social media management cost?",
    answer:
      "Our three organic social media plans are $400, $800, and $1,500 per month. The right fit depends on platforms, posting frequency, video volume, and engagement depth."
  },
  {
    question: "Can you also run paid social media ads?",
    answer:
      "Yes. Meta, TikTok, and YouTube advertising can be planned separately from the monthly organic social media tiers."
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
    title: "Keep the plan current",
    body: "We use customer questions and useful response patterns to shape upcoming posts. Tier 3 also includes growth reporting."
  }
];

const trustPoints = [
  {
    title: "30+ years combined experience",
    body: "Experience across branding, content, digital strategy, and practical execution."
  },
  {
    title: "A company of Apex Blue",
    body: "Led by the founder of Apex Blue with accountable, direct support."
  },
  {
    title: "No outsourcing farms",
    body: "Real people learn your voice and handle the communication layer."
  },
  {
    title: "Pricing you can review now",
    body: "Three clear monthly plans, with paid advertising scoped separately."
  }
];

const engagementIncludes = [
  "Follow potential customers who fit the agreed audience",
  "Comment thoughtfully on targeted public posts",
  "Respond to eligible DMs and comments in your brand voice",
  "Escalate sensitive, private, urgent, or unusual questions",
  "Use recurring customer questions to improve future content"
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
            eyebrow="What We Handle"
            title="Choose support that matches the way your business works"
            description="Start with focused Facebook and Instagram management or add wider platforms, video, community engagement, and paid social support."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {servicePages.slice(0, 4).map((service, index) => (
              <MotionReveal key={service.slug} delay={index * 0.05}>
                <article className="group flex h-full flex-col rounded-3xl border border-ocean/10 bg-cloud p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                  <h2 className="font-heading text-2xl text-ink">{service.name}</h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/75">{service.description}</p>
                  <Link href={`/services/${service.slug}`} className="mt-5 text-sm font-bold text-ocean hover:underline">
                    See What Is Included
                  </Link>
                </article>
              </MotionReveal>
            ))}
          </div>
          <Link href="/services" className="mt-7 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink">
            Explore All Services
          </Link>
        </Container>
      </section>

      <section className="py-16">
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

      <section className="bg-white py-16">
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

      <section className="py-16">
        <Container>
          <div className="grid gap-8 rounded-[2rem] border border-ocean/10 bg-skyMint/55 p-7 shadow-soft lg:grid-cols-[0.85fr_1.15fr] sm:p-9">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-ocean">Human Engagement</p>
              <h2 className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-4xl">Posting is only useful if someone handles the conversation.</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                We create a response guide with your tone, approved answers, privacy boundaries, and escalation contacts. Then real people monitor and participate within that scope.
              </p>
              <Link href="/services/social-media-engagement" className="mt-6 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink">
                See How Engagement Works
              </Link>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {engagementIncludes.map((item) => (
                <li key={item} className="rounded-2xl border border-ocean/10 bg-white p-4 text-sm leading-relaxed text-ink/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <SectionTitle
            eyebrow="Why Us"
            title="A small-business service with an accountable team"
            description="Straightforward support, clear boundaries, and no need to decode an enterprise agency pitch."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {trustPoints.map((point, index) => (
              <MotionReveal key={point.title} delay={index * 0.04}>
                <article className="h-full rounded-3xl border border-ocean/10 bg-cloud p-5 shadow-soft">
                  <h3 className="font-heading text-xl text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{point.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <Link href="/about" className="mt-7 inline-flex rounded-full border border-ocean/20 bg-white px-5 py-2.5 text-sm font-semibold text-ocean transition hover:bg-skyMint">
            Meet SocialMediaMarketing.VIP
          </Link>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <SectionTitle
            eyebrow="Maryland Coverage"
            title="Local strategy for real Maryland markets"
            description="We shape content around local community behavior, nearby service areas, and practical engagement for Maryland small businesses."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {locationPages.map((market, index) => (
              <MotionReveal
                key={market.slug}
                delay={index * 0.04}
                className="h-full"
              >
                <Link href={`/locations/${market.slug}`} className="block h-full rounded-2xl border border-ocean/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-ocean">
                  <span className="font-heading text-xl text-ink">{market.label}</span>
                  <span className="mt-2 block text-sm leading-relaxed text-ink/70">{market.region}</span>
                </Link>
              </MotionReveal>
            ))}
          </div>
          <div className="mt-7">
            <Link
              href="/locations"
              className="inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Explore Maryland Areas
            </Link>
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
                Get My Social Plan
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
