type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-xs font-black uppercase tracking-[0.2em] text-ocean">{eyebrow}</p>
      <h2 className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-ink/75">{description}</p>
    </div>
  );
}
