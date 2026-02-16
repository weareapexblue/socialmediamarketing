"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Container } from "@/components/container";

const floatingCards = [
  { label: "Weekly posting", position: "left-4 top-8", delay: 0.2 },
  { label: "Friendly DM replies", position: "right-5 top-16", delay: 0.45 },
  { label: "Real human engagement", position: "left-10 bottom-8", delay: 0.65 }
];

export function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-16 pt-16 sm:pb-20 sm:pt-20">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-ocean"
          >
            Maryland Social Media Team
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl font-heading text-4xl leading-tight text-ink sm:text-6xl"
          >
            Real people behind your brand. Every week.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75"
          >
            SocialMediaMarketing.VIP helps local businesses, service brands, and community teams stay visible with warm,
            practical social media management powered by real humans and smart tools.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/pricing"
              className="rounded-full bg-ocean px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink"
            >
              See Pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-bold text-ink shadow-soft transition hover:-translate-y-0.5 hover:bg-skyMint"
            >
              Start Contact Form
            </Link>
          </motion.div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="relative overflow-hidden rounded-[2rem] border border-ocean/10 bg-white p-3 shadow-card"
          >
            <Image
              src="/images/local-team.svg"
              alt="Illustration of a social media management dashboard"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[1.4rem]"
              priority
            />
          </motion.div>
          {floatingCards.map((card) => (
            <motion.div
              key={card.label}
              className={`absolute ${card.position} hidden rounded-full bg-white px-4 py-2 text-xs font-bold text-ink shadow-soft sm:block`}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: card.delay }}
              whileHover={{ scale: 1.06 }}
            >
              {card.label}
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
