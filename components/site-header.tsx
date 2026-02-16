"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { Container } from "@/components/container";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ocean/10 bg-white/90 backdrop-blur-lg">
      <Container className="flex h-20 items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <span className="rounded-full bg-ocean px-3 py-2 text-sm font-black uppercase tracking-wide text-white">
            SMM
          </span>
          <span className="font-heading text-lg font-bold text-ink">{siteConfig.name}</span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-semibold text-ink/80 transition hover:text-ocean",
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

        <Link
          href="/contact"
          className="rounded-full bg-coral px-4 py-2 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-coral/90"
        >
          Text or Form
        </Link>
      </Container>
    </header>
  );
}
