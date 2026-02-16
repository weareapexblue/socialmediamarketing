"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { siteConfig } from "@/lib/site";

export function AdsCta() {
  return (
    <section className="mt-12 overflow-hidden rounded-[2rem] bg-gradient-to-br from-skyMint via-white to-sunshine/30 p-8 shadow-card sm:p-10">
      <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.2em] text-ocean">Bonus Support</p>
          <h3 className="mt-3 font-heading text-3xl leading-tight text-ink sm:text-4xl">Want to run paid ads on social media?</h3>
          <p className="mt-4 text-base leading-relaxed text-ink/80">
            We can help with that too. Contact our team to learn about Meta, TikTok, and YouTube advertising options
            tailored for local businesses.
          </p>
          <div className="mt-5 space-y-2 text-sm font-semibold text-ink">
            <p>Text: {siteConfig.phone}</p>
            <p>Email: {siteConfig.email}</p>
          </div>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="mt-7 inline-flex">
            <Link
              href="/contact"
              className="rounded-full bg-coral px-6 py-3 text-sm font-bold text-white shadow-soft transition hover:bg-coral/90"
            >
              Ask About Paid Ads
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-md"
        >
          <Image
            src="/images/ads-cta.svg"
            alt="Illustration of social ad campaign planning"
            width={800}
            height={600}
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
