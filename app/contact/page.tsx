import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Get a Social Media Plan | Contact SocialMediaMarketing.VIP",
  description:
    "Send the short contact form to get a practical social media plan for your Maryland business. Share your goal, active platforms, and optional ad budget.",
  path: "/contact",
  keywords: ["social media contact form", "maryland social media help", "social media plan"]
});

const faqItems = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Your request reaches our team for review. We use the details to understand your current channels, primary goal, and likely plan fit before following up."
  },
  {
    question: "How long does the form take?",
    answer:
      "Most businesses can complete it in about two minutes. The current ad budget and notes fields are optional."
  },
  {
    question: "Is the ad budget question required?",
    answer:
      "No. The 'What's Your Current Ad Budget?' field is optional and used only to tailor recommendations if you share it."
  }
];

const schemaData = buildSchemaData({
  path: "/contact",
  serviceName: "Contact SocialMediaMarketing.VIP",
  serviceDescription:
    "Submit a short contact form to connect with Maryland-based SocialMediaMarketing.VIP for practical social media support.",
  faqItems,
  breadcrumbs: [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" }
  ],
  includeOffers: false
});

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Start Here"
        title="Tell us what you want social media to do for your business"
        intro="The short form gives us enough context to recommend a useful starting plan without turning your first conversation into homework."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" }
        ]}
      >
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <MotionReveal>
            <ContactForm />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <article className="space-y-5 rounded-[2rem] border border-ocean/10 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-2xl text-ink">What happens next</h2>
              <p className="text-sm leading-relaxed text-ink/75">
                A real person reviews the details, checks the likely platform and content fit, and follows up using the reply method you selected.
              </p>

              <ol className="space-y-3 text-sm leading-relaxed text-ink/80">
                <li className="rounded-2xl bg-cloud p-4"><strong>1. We review the fit.</strong> Your business type, current channels, and main goal help us avoid a generic recommendation.</li>
                <li className="rounded-2xl bg-cloud p-4"><strong>2. We recommend a starting point.</strong> We explain which tier or separate ad conversation makes sense and why.</li>
                <li className="rounded-2xl bg-cloud p-4"><strong>3. We answer questions.</strong> You can review the scope, process, and what we would need from your team before making a decision.</li>
              </ol>

              <div className="rounded-2xl border border-leaf/20 bg-leaf/10 p-4 text-sm leading-relaxed text-ink/80">
                We are based in Maryland and built for local businesses that want consistent, human-first social media
                support without enterprise complexity.
              </div>

              <div className="border-t border-ocean/10 pt-5">
                <p className="text-sm font-semibold text-ink">Prefer a quick message?</p>
                <p className="mt-2 text-sm text-ink/70">
                  Text <a href={siteConfig.textHref} className="font-semibold text-ocean hover:underline">{siteConfig.phone}</a> or email <a href={siteConfig.emailHref} className="font-semibold text-ocean hover:underline">{siteConfig.email}</a>.
                </p>
              </div>
            </article>
          </MotionReveal>
        </div>

        <div className="mt-12">
          <h2 className="font-heading text-3xl text-ink">Contact FAQ</h2>
          <div className="mt-5">
            <FaqList items={faqItems} />
          </div>
        </div>
      </PageShell>
    </>
  );
}
