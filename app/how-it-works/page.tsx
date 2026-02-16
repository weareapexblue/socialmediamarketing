import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "How It Works | SocialMediaMarketing.VIP",
  description:
    "Learn the step-by-step process SocialMediaMarketing.VIP uses to plan content, post weekly, and manage social engagement with real people.",
  path: "/how-it-works",
  keywords: ["social media onboarding", "social media workflow", "maryland social media process"]
});

const faqItems = [
  {
    question: "How often do we review content plans?",
    answer:
      "We review and refresh your content plan monthly, with weekly posting and engagement execution throughout the month."
  },
  {
    question: "Can I approve content before it goes live?",
    answer:
      "Yes. You can review and approve planned content before scheduling to keep voice and priorities aligned."
  },
  {
    question: "Do you provide reporting?",
    answer:
      "Yes. We provide practical reports focused on consistency, engagement quality, and growth signals that matter for small businesses."
  }
];

const schemaData = buildSchemaData({
  path: "/how-it-works",
  serviceName: "How SocialMediaMarketing.VIP Works",
  serviceDescription:
    "A simple Maryland social media management workflow that covers strategy, posting, engagement, and reporting.",
  faqItems
});

const workflow = [
  {
    title: "Discovery and onboarding",
    body: "We learn your voice, offers, audience, and current social channels. This helps us build content that feels true to your business from day one."
  },
  {
    title: "Monthly strategy setup",
    body: "We map post topics, video ideas, engagement focus areas, and campaign priorities so execution is structured and clear."
  },
  {
    title: "Content creation and scheduling",
    body: "Our team writes captions, formats media by platform, and schedules posts according to your selected tier."
  },
  {
    title: "Weekly engagement support",
    body: "We follow potential customers, comment on targeted posts, and respond to DMs and comments with a friendly voice that reflects your brand values."
  },
  {
    title: "Performance review and refinement",
    body: "At the end of each cycle, we review what resonated most and update the next plan to keep improving outcomes."
  }
];

export default function HowItWorksPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="How It Works"
        title="A simple process built for busy business owners"
        intro="Our workflow keeps social media practical: clear planning, reliable publishing, and warm human engagement that supports your local reputation."
      >
        <div className="space-y-5">
          {workflow.map((step, index) => (
            <MotionReveal key={step.title} delay={index * 0.05}>
              <article className="rounded-3xl border border-ocean/10 bg-white p-6 shadow-soft">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">Step {index + 1}</p>
                <h2 className="mt-2 font-heading text-2xl text-ink">{step.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.body}</p>
              </article>
            </MotionReveal>
          ))}
        </div>

        <div className="mt-10 rounded-3xl border border-leaf/20 bg-leaf/10 p-6">
          <h2 className="font-heading text-2xl text-ink">Need platform-specific help?</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Tier 2 and Tier 3 include expanded channel support, short-form video cadence, and formatting tailored to where
            your audience spends time.
          </p>
          <Link
            href="/pricing"
            className="mt-4 inline-flex rounded-full bg-leaf px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ocean"
          >
            View pricing tiers
          </Link>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-3xl text-ink">Frequently asked questions</h2>
          <div className="mt-5">
            <FaqList items={faqItems} />
          </div>
        </div>
      </PageShell>
    </>
  );
}
