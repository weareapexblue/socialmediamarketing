import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { PricingCards } from "@/components/pricing-cards";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { AdsCta } from "@/components/ads-cta";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Pricing | SocialMediaMarketing.VIP",
  description:
    "Compare SocialMediaMarketing.VIP plans from $400 to $1,500 per month. Friendly social media management for Maryland local businesses.",
  path: "/pricing",
  keywords: ["social media pricing", "small business social media packages", "maryland social media plans"]
});

const faqItems = [
  {
    question: "Can I upgrade tiers later?",
    answer:
      "Yes. Many clients start with Tier 1 or Tier 2, then move up as they need wider platform coverage and deeper engagement support."
  },
  {
    question: "Do all plans include real human engagement?",
    answer:
      "Yes. Engagement includes following potential customers, commenting on targeted posts, and responding to DMs and comments, with expanded scope in higher tiers."
  },
  {
    question: "Is paid advertising included in these tiers?",
    answer:
      "Paid ads are not included by default, but we can support Meta, TikTok, and YouTube ad campaigns separately."
  }
];

const schemaData = buildSchemaData({
  path: "/pricing",
  serviceName: "SocialMediaMarketing.VIP Pricing Plans",
  serviceDescription:
    "Monthly social media management tiers for Maryland local businesses, including posting, short-form video, and engagement support.",
  faqItems
});

export default function PricingPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Pricing"
        title="Choose the plan that fits your stage"
        intro="Clear monthly pricing, friendly support, and real human interaction. No bloated retainers. No fake promises."
      >
        <MotionReveal>
          <div className="rounded-[2rem] border border-ocean/15 bg-white p-6 shadow-card sm:p-8">
            <h2 className="font-heading text-3xl text-ink">Social media plans for local growth</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink/75">
              Every tier includes strategy, posting, and a team that keeps your channels active and responsive. Choose a
              starting point you can sustain, then scale as your visibility grows.
            </p>
            <div className="mt-8">
              <PricingCards />
            </div>
          </div>
        </MotionReveal>

        <AdsCta />

        <div className="mt-12">
          <h2 className="font-heading text-3xl text-ink">Pricing FAQ</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Questions about fit, channel coverage, or next steps? These quick answers help most businesses pick a strong
            starting tier.
          </p>
          <div className="mt-6">
            <FaqList items={faqItems} />
          </div>
        </div>
      </PageShell>
    </>
  );
}
