"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";

import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-white/90 backdrop-blur-lg">
      <Container className="relative flex h-20 items-center justify-between gap-3">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="rounded-full bg-ocean px-3 py-2 text-sm font-black uppercase tracking-wide text-white">
            SMM
          </span>
          <span className="hidden font-heading text-lg font-bold text-ink sm:inline">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-2.5 py-2 text-sm font-semibold text-ink/80 transition hover:text-ocean",
                  isActive && "text-ocean"
                )}
              >
                {isActive ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ocean/10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                ) : null}
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="rounded-full bg-coral px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90"
          >
            <span className="sm:hidden">Start Here</span>
            <span className="hidden sm:inline">Get My Social Plan</span>
          </Link>
          <button
            type="button"
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ocean/15 bg-white text-ink xl:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5" aria-hidden>
              <span className={cn("h-0.5 w-full bg-current transition", mobileOpen && "translate-y-2 rotate-45")} />
              <span className={cn("h-0.5 w-full bg-current transition", mobileOpen && "opacity-0")} />
              <span className={cn("h-0.5 w-full bg-current transition", mobileOpen && "-translate-y-2 -rotate-45")} />
            </span>
          </button>
        </div>

        {mobileOpen ? (
          <nav
            id="mobile-navigation"
            className="absolute left-4 right-4 top-[4.6rem] rounded-3xl border border-ocean/10 bg-white p-4 shadow-card sm:left-6 sm:right-6 xl:hidden"
          >
            <div className="grid gap-1 sm:grid-cols-2">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-semibold text-ink/80 transition hover:bg-skyMint hover:text-ocean",
                      isActive && "bg-skyMint text-ocean"
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-2xl bg-ocean px-4 py-3 text-sm font-bold text-white"
              >
                Contact Our Team
              </Link>
            </div>
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
