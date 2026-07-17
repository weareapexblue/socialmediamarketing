import { PageShell } from "@/components/page-shell";
import { buildPageMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Privacy Policy | SocialMediaMarketing.VIP",
  description:
    "How SocialMediaMarketing.VIP collects, uses, stores, and protects information submitted through our website and contact form.",
  path: "/privacy"
});

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Privacy", path: "/privacy" }
  ];

  return (
    <PageShell
      badge="Privacy"
      title="Privacy policy"
      intro="This policy explains what information we collect through this website, why we use it, and the choices available to you."
      breadcrumbs={breadcrumbs}
    >
      <div className="space-y-8 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft sm:p-9">
        <section>
          <p className="text-sm font-semibold text-ocean">Last updated July 16, 2026</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            {siteConfig.name} is a Maryland-based company of {siteConfig.parentCompany}. This policy applies to information submitted through {siteConfig.url}.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Information you choose to provide</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Our contact form may collect your name, business name, email address, phone number, preferred reply method, business type, active social platforms, primary goal, optional current ad budget, and any notes you choose to share. Please do not submit passwords, payment card details, health information, legal case details, or other sensitive personal information through the form.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">How we use the information</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            We use contact details to review your request, recommend an appropriate service or plan, respond to questions, and continue a business conversation you asked us to begin. We do not sell contact-form information.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Service providers</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            The website is hosted on Vercel. Contact-form records are stored using Neon, and lead notifications are sent through Resend. These providers process information as needed to host the site, store the request, and deliver the notification. Their own terms and privacy practices also apply to their services.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Website logs and technical information</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            Our hosting and security providers may process basic technical information such as IP address, browser type, device information, requested pages, and timestamps to deliver the site, maintain reliability, and prevent abuse. We do not use the contact form to request more information than we need for the inquiry.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Retention and security</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            We keep inquiry information for as long as reasonably useful for responding, maintaining business records, and meeting legal obligations. No online service can promise absolute security, but we limit access and use reputable infrastructure providers for website hosting, database storage, and email delivery.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Your choices</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            You may ask us to update or delete information you submitted, subject to any recordkeeping obligations. Contact us at <a href={siteConfig.emailHref} className="font-semibold text-ocean hover:underline">{siteConfig.email}</a>. We may need to verify the request before making changes.
          </p>
        </section>

        <section>
          <h2 className="font-heading text-3xl text-ink">Policy changes</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/80">
            We may update this policy when our website, providers, or business practices change. The current date will appear at the top of this page.
          </p>
        </section>
      </div>
    </PageShell>
  );
}
