import Link from "next/link";

import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

export const metadata = buildPageMetadata({
  title: "About SocialMediaMarketing.VIP | Maryland Social Media Team",
  description:
    "Meet the real human team behind SocialMediaMarketing.VIP, led by the founder of Apex Blue with 30+ years of combined experience.",
  path: "/about",
  keywords: [
    "about social media marketing vip",
    "maryland social media team",
    "apex blue founder"
  ]
});

const faqItems = [
  {
    question: "Who leads SocialMediaMarketing.VIP?",
    answer:
      "Our team is led by the founder of Apex Blue and supported by experienced social media professionals focused on local business growth."
  },
  {
    question: "Do you outsource social media to content farms?",
    answer:
      "No. We do not use outsourcing farms. We keep strategy and communication in the hands of a real, accountable team."
  },
  {
    question: "How much experience does your team have?",
    answer:
      "Our leadership and specialists bring 30+ years of combined experience across branding, content strategy, and digital marketing execution."
  }
];

const schemaData = buildSchemaData({
  path: "/about",
  serviceName: "About SocialMediaMarketing.VIP",
  serviceDescription:
    "Maryland social media management team with 30+ years of combined experience, led by Apex Blue founder.",
  faqItems
});

const values = [
  {
    title: "Real human team",
    body: "We use smart tools behind the scenes, but people handle your voice, comments, and community communication."
  },
  {
    title: "Friendly support",
    body: "You get direct communication, clear updates, and a team that explains strategy in plain language."
  },
  {
    title: "No outsourcing farms",
    body: "Your social media is managed by a trusted team, not anonymous bulk production pipelines."
  },
  {
    title: "Practical growth",
    body: "We focus on consistent visibility and engagement that supports real business outcomes over hype."
  }
];

export default function AboutPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="About Us"
        title="A friendly social media team built for local businesses"
        intro="SocialMediaMarketing.VIP is a Maryland-based company under Apex Blue. We combine practical strategy, consistent execution, and human interaction so your brand stays active and trustworthy online."
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <MotionReveal>
            <article className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-3xl text-ink">Why we started this</h2>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Too many small businesses are told they need enterprise-level systems just to stay visible online. We built
                SocialMediaMarketing.VIP to offer something better: straightforward monthly plans, warm communication, and
                social media execution you can actually sustain.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                Our team has 30+ years of combined experience across content, branding, and digital strategy. We are led by
                the founder of Apex Blue and focused on one promise: real people behind your brand.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/75">
                From Maryland main streets to growing local service brands, we support teams who care about reputation,
                responsiveness, and long-term community trust.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-ink"
              >
                Meet the Team
              </Link>
            </article>
          </MotionReveal>

          <div className="grid gap-4">
            {values.map((value, index) => (
              <MotionReveal key={value.title} delay={index * 0.06}>
                <article className="rounded-2xl border border-ocean/10 bg-white p-5 shadow-soft">
                  <h3 className="font-heading text-xl text-ink">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/75">{value.body}</p>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-3xl text-ink">Frequently asked questions</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-ink/75">
            If you are looking for social media support that feels personal, clear, and practical, we would love to talk.
          </p>
          <div className="mt-6">
            <FaqList items={faqItems} />
          </div>
        </div>
      </PageShell>
    </>
  );
}
