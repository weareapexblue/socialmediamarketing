import Link from "next/link";

import { Container } from "@/components/container";

export default function NotFoundPage() {
  return (
    <section className="bg-hero-gradient py-24">
      <Container className="text-center">
        <h1 className="font-heading text-5xl text-ink">Page not found</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-ink/75">
          We could not find that page. You can return home, explore industry guides, or contact our team for help.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-full bg-ocean px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink">
            Go Home
          </Link>
          <Link
            href="/industries-we-serve"
            className="rounded-full bg-coral px-5 py-2.5 text-sm font-semibold text-white hover:bg-coral/90"
          >
            Explore Industries
          </Link>
        </div>
      </Container>
    </section>
  );
}
