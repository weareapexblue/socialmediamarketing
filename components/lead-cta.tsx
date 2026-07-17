import Link from "next/link";

type LeadCtaProps = {
  eyebrow?: string;
  title?: string;
  body?: string;
  primaryLabel?: string;
  primaryHref?: string;
};

export function LeadCta({
  eyebrow = "Start With a Simple Plan",
  title = "Tell us what is happening with your social media now.",
  body = "The contact form takes about two minutes and gives our team enough context to recommend a practical next step.",
  primaryLabel = "Get My Social Plan",
  primaryHref = "/contact"
}: LeadCtaProps) {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-r from-ocean via-ocean to-leaf p-8 text-white shadow-card sm:p-10">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight sm:text-4xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/90">{body}</p>
      <div className="mt-7 flex flex-wrap gap-3">
        <Link
          href={primaryHref}
          className="rounded-full bg-white px-5 py-2.5 text-sm font-bold text-ocean transition hover:-translate-y-0.5 hover:bg-skyMint"
        >
          {primaryLabel}
        </Link>
        <Link
          href="/pricing"
          className="rounded-full border border-white/60 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-white/10"
        >
          Compare Monthly Plans
        </Link>
      </div>
    </section>
  );
}
