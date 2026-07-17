import type { ReactNode } from "react";
import Link from "next/link";

import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";
import type { BreadcrumbItem } from "@/lib/schema";

type PageShellProps = {
  badge: string;
  title: string;
  intro: string;
  children: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
};

export function PageShell({ badge, title, intro, children, breadcrumbs = [] }: PageShellProps) {
  return (
    <>
      <section className="bg-hero-gradient pb-14 pt-16">
        <Container>
          <MotionReveal>
            {breadcrumbs.length > 0 ? (
              <nav aria-label="Breadcrumb" className="mb-5 flex flex-wrap items-center gap-2 text-xs font-semibold text-ink/60">
                {breadcrumbs.map((item, index) => (
                  <span key={item.path} className="inline-flex items-center gap-2">
                    {index > 0 ? <span aria-hidden>/</span> : null}
                    {index === breadcrumbs.length - 1 ? (
                      <span aria-current="page" className="text-ink/80">{item.name}</span>
                    ) : (
                      <Link href={item.path} className="transition hover:text-ocean">{item.name}</Link>
                    )}
                  </span>
                ))}
              </nav>
            ) : null}
            <span className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ocean">
              {badge}
            </span>
            <h1 className="mt-5 max-w-4xl font-heading text-4xl leading-tight text-ink sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-ink/75">{intro}</p>
          </MotionReveal>
        </Container>
      </section>
      <section className="py-14">
        <Container>{children}</Container>
      </section>
    </>
  );
}
