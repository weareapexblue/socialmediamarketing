import { ContactForm } from "@/components/contact-form";
import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Contact SocialMediaMarketing.VIP | Text or Form",
  description:
    "Send your details through our contact form or text our Maryland team to get a practical social media plan for your business.",
  path: "/contact",
  keywords: ["social media contact form", "maryland social media help", "text social media team"]
});

const faqItems = [
  {
    question: "What happens after I submit the form?",
    answer:
      "Your details are saved to our lead database and an email notification is sent to our team so we can follow up quickly."
  },
  {
    question: "Can I text instead of filling out the full form?",
    answer:
      "Yes. You can text us directly if you prefer. The form is recommended because it helps us prepare a better first plan."
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
    "Text or submit the contact form to connect with Maryland-based SocialMediaMarketing.VIP for practical social media support.",
  faqItems
});

export default function ContactPage() {
  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell
        badge="Contact"
        title="Text us or send your quick lead form"
        intro="The fastest way to get started is our contact form. It asks a few targeted social media questions, saves your lead in our system, and notifies our team right away."
      >
        <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <MotionReveal>
            <ContactForm />
          </MotionReveal>

          <MotionReveal delay={0.08}>
            <article className="space-y-5 rounded-[2rem] border border-ocean/10 bg-white p-7 shadow-soft">
              <h2 className="font-heading text-2xl text-ink">Prefer to text first?</h2>
              <p className="text-sm leading-relaxed text-ink/75">
                No problem. Send a quick text and we can point you to the right plan. If you have 2 minutes, the contact
                form helps us give you a more useful recommendation faster.
              </p>

              <div className="space-y-3 text-sm font-semibold text-ink">
                <a href={siteConfig.textHref} className="block rounded-2xl bg-skyMint px-4 py-3 hover:bg-skyMint/70">
                  Text: {siteConfig.phone}
                </a>
                <a href={siteConfig.emailHref} className="block rounded-2xl bg-skyMint px-4 py-3 hover:bg-skyMint/70">
                  Email: {siteConfig.email}
                </a>
              </div>

              <div className="rounded-2xl border border-leaf/20 bg-leaf/10 p-4 text-sm leading-relaxed text-ink/80">
                We are based in Maryland and built for local businesses that want consistent, human-first social media
                support without enterprise complexity.
              </div>

              <ul className="space-y-2 text-sm leading-relaxed text-ink/75">
                <li>- Friendly support from a real team</li>
                <li>- Practical tier recommendation</li>
                <li>- No fake case studies or inflated claims</li>
              </ul>
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
