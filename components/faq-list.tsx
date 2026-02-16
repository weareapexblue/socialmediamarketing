import { FaqItem } from "@/lib/schema";

type FaqListProps = {
  items: FaqItem[];
};

export function FaqList({ items }: FaqListProps) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <details key={item.question} className="group rounded-2xl border border-ocean/15 bg-white p-5 shadow-soft">
          <summary className="cursor-pointer list-none font-semibold text-ink">{item.question}</summary>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
