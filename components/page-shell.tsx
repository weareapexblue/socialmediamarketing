import type { ReactNode } from "react";

import { Container } from "@/components/container";
import { MotionReveal } from "@/components/motion-reveal";

type PageShellProps = {
  badge: string;
  title: string;
  intro: string;
  children: ReactNode;
};

export function PageShell({ badge, title, intro, children }: PageShellProps) {
  return (
    <>
      <section className="bg-hero-gradient pb-14 pt-16">
        <Container>
          <MotionReveal>
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
