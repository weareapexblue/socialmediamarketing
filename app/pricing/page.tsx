import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { PricingCards } from "@/components/pricing-cards";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { AdsCta } from "@/components/ads-cta";
import { LeadCta } from "@/components/lead-cta";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "Social Media Management Pricing from $400 | SMM.VIP",
  description:
    "Compare SocialMediaMarketing.VIP plans from $400 to $1,500 per month. Friendly social media management for Maryland local businesses.",
  path: "/pricing",
  keywords: ["social media pricing", "small business social media packages", "maryland social media plans"]
});

const faqItems = [
  {
    question: "How much does social media management cost in Maryland?",
    answer:
      "Our plans are $400, $800, and $1,500 per month, depending on channel coverage, content volume, and engagement depth."
  },
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
  },
  {
    question: "What does your team need from us each month?",
    answer:
      "We need timely approvals, accurate offer and schedule details, appropriate account access, and a simple stream of real photos, clips, or business updates. We help organize what to capture."
  }
];

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Pricing", path: "/pricing" }
];

const schemaData = buildSchemaData({
  path: "/pricing",
  serviceName: "SocialMediaMarketing.VIP Pricing Plans",
  serviceDescription:
    "Monthly social media management tiers for Maryland local businesses, including posting, short-form video, and engagement support.",
  faqItems,
  breadcrumbs
});

const comparisonRows = [
  { feature: "Platforms", tier1: "Facebook + Instagram", tier2: "Meta + TikTok + YouTube", tier3: "Up to 10 platforms" },
  { feature: "Posts each week", tier1: "1", tier2: "2", tier3: "3" },
  { feature: "Short-form videos each month", tier1: "1", tier2: "4", tier3: "Included in the content plan" },
  { feature: "Human engagement", tier1: "Weekly", tier2: "Strategic multi-platform", tier3: "Ultra engagement" },
  { feature: "Follow prospects + targeted comments", tier1: "Included", tier2: "Included", tier3: "Expanded" },
  { feature: "DM and comment replies", tier1: "Included", tier2: "Included", tier3: "Expanded" },
  { feature: "Platform-specific formatting", tier1: "Meta", tier2: "Included", tier3: "Included" },
  { feature: "Profile optimization", tier1: "Not included", tier2: "Not included", tier3: "Included" },
  { feature: "Growth reporting", tier1: "Not included", tier2: "Not included", tier3: "Included" }
];

export default function PricingPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Pricing"
        title="Choose the plan that fits your stage"
        intro="Clear monthly pricing, friendly support, and real human interaction. No bloated retainers. No fake promises."
        breadcrumbs={breadcrumbs}
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

        <section className="mt-10 overflow-hidden rounded-[2rem] border border-ocean/10 bg-white shadow-soft">
          <div className="p-7 sm:p-8">
            <h2 className="font-heading text-3xl text-ink">Compare the plans side by side</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">
              Every tier includes real human communication. The main differences are channel coverage, content frequency, video volume, and engagement depth.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-ocean text-white">
                <tr>
                  <th className="px-5 py-4 font-bold">Feature</th>
                  <th className="px-5 py-4 font-bold">Tier 1 - $400</th>
                  <th className="px-5 py-4 font-bold">Tier 2 - $800</th>
                  <th className="px-5 py-4 font-bold">Tier 3 - $1,500</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, index) => (
                  <tr key={row.feature} className={index % 2 === 0 ? "bg-cloud" : "bg-white"}>
                    <th scope="row" className="px-5 py-4 font-semibold text-ink">{row.feature}</th>
                    <td className="px-5 py-4 text-ink/75">{row.tier1}</td>
                    <td className="px-5 py-4 text-ink/75">{row.tier2}</td>
                    <td className="px-5 py-4 text-ink/75">{row.tier3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

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

        <LeadCta
          title="Still deciding between two plans?"
          body="Tell us which platforms are active, how often you post now, and what keeps falling behind. We will recommend the smallest plan that fits the job."
        />
      </PageShell>
    </>
  );
}
