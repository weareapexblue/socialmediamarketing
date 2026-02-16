import Link from "next/link";

import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ocean/10 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Real people behind your brand.</h2>
          <p className="max-w-xl text-sm text-ink/75">
            {siteConfig.name} is a Maryland social media management team under {siteConfig.parentCompany}. We blend
            warm human support with smart tools to keep your business visible, helpful, and easy to trust online.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-ink">
            <a href={siteConfig.textHref} className="rounded-full bg-skyMint px-4 py-2 hover:bg-skyMint/70">
              Text us: {siteConfig.phone}
            </a>
            <a href={siteConfig.emailHref} className="rounded-full bg-skyMint px-4 py-2 hover:bg-skyMint/70">
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg text-ink">Site</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link className="hover:text-ocean" href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-ink">Parent Company</h3>
          <p className="mt-3 text-sm text-ink/80">
            Built by <a href={siteConfig.parentCompanyUrl} className="font-semibold text-ocean hover:underline">{siteConfig.parentCompany}</a>
            . Friendly strategy, no outsourcing farms, no cookie-cutter social plans.
          </p>
        </div>
      </Container>
    </footer>
  );
}
