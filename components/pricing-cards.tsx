"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { pricingTiers } from "@/lib/site";

type PricingCardsProps = {
  compact?: boolean;
};

export function PricingCards({ compact = false }: PricingCardsProps) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {pricingTiers.map((tier, index) => (
        <motion.article
          key={tier.id}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="group flex h-full flex-col rounded-3xl border border-ocean/15 bg-white p-7 shadow-card"
        >
          <p className="text-xs font-black uppercase tracking-[0.18em] text-ocean">{tier.name}</p>
          <h3 className="mt-3 font-heading text-3xl text-ink">{tier.price}</h3>
          <p className="mt-2 text-sm font-semibold text-leaf">{tier.subtitle}</p>
          <p className="mt-3 text-sm text-ink/70">Channels: {tier.channels}</p>
          <p className="mt-4 text-sm text-ink/70">{tier.idealFor}</p>

          <ul className="mt-5 space-y-3 text-sm text-ink/85">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-coral" aria-hidden />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {!compact ? (
            <Link
              href="/contact"
              className="mt-8 inline-flex w-fit rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white transition group-hover:bg-ink"
            >
              Pick {tier.name}
            </Link>
          ) : null}
        </motion.article>
      ))}
    </div>
  );
}
