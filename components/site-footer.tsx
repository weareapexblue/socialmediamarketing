import Link from "next/link";

import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-ocean/10 bg-white">
      <Container className="grid gap-10 py-14 md:grid-cols-2 xl:grid-cols-[1.55fr_1fr_1fr_1fr]">
        <div className="space-y-4">
          <h2 className="font-heading text-2xl text-ink">Real people behind your brand.</h2>
          <p className="max-w-xl text-sm text-ink/75">
            {siteConfig.name} is a Maryland social media management team under {siteConfig.parentCompany}. We blend
            warm human support with smart tools to keep your business visible, helpful, and easy to trust online.
          </p>
          <div className="flex flex-wrap gap-4 text-sm font-semibold text-ink">
            <Link href="/contact" className="rounded-full bg-coral px-4 py-2 text-white transition hover:bg-coral/90">
              Get My Social Plan
            </Link>
            <a href={siteConfig.emailHref} className="rounded-full bg-skyMint px-4 py-2 hover:bg-skyMint/70">
              {siteConfig.email}
            </a>
          </div>
          <p className="text-xs text-ink/60">
            Prefer a quick message? <a href={siteConfig.textHref} className="font-semibold text-ocean hover:underline">Text {siteConfig.phone}</a>
          </p>
        </div>

        <div>
          <h3 className="font-heading text-lg text-ink">Services</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li><Link className="hover:text-ocean" href="/services/social-media-management">Social Media Management</Link></li>
            <li><Link className="hover:text-ocean" href="/services/facebook-instagram-management">Facebook + Instagram</Link></li>
            <li><Link className="hover:text-ocean" href="/services/social-media-engagement">Human Engagement</Link></li>
            <li><Link className="hover:text-ocean" href="/services/short-form-video">Short-Form Video</Link></li>
            <li><Link className="hover:text-ocean" href="/services/social-media-advertising">Paid Social Ads</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-ink">Maryland Areas</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            <li><Link className="hover:text-ocean" href="/locations/baltimore-social-media-management">Baltimore</Link></li>
            <li><Link className="hover:text-ocean" href="/locations/annapolis-social-media-management">Annapolis</Link></li>
            <li><Link className="hover:text-ocean" href="/locations/columbia-social-media-management">Columbia</Link></li>
            <li><Link className="hover:text-ocean" href="/locations/frederick-social-media-management">Frederick</Link></li>
            <li><Link className="hover:text-ocean" href="/locations/rockville-social-media-management">Rockville</Link></li>
            <li><Link className="hover:text-ocean" href="/locations/towson-social-media-management">Towson</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-ink">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-ink/80">
            {navLinks.filter((link) => ["/about", "/how-it-works", "/blog"].includes(link.href)).map((link) => (
              <li key={link.href}><Link className="hover:text-ocean" href={link.href}>{link.label}</Link></li>
            ))}
            <li><Link className="hover:text-ocean" href="/pricing">Pricing</Link></li>
            <li><Link className="hover:text-ocean" href="/contact">Contact</Link></li>
            <li><Link className="hover:text-ocean" href="/privacy">Privacy</Link></li>
          </ul>
          <p className="mt-4 text-sm text-ink/70">
            A company of <a href={siteConfig.parentCompanyUrl} className="font-semibold text-ocean hover:underline">{siteConfig.parentCompany}</a>.
          </p>
        </div>
      </Container>
      <div className="border-t border-ocean/10 py-5 text-center text-xs text-ink/55">
        &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
