import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { LeadCta } from "@/components/lead-cta";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { getIndustryGuide } from "@/lib/industries";
import { buildPageMetadata } from "@/lib/metadata";
import { buildArticleSchemaData } from "@/lib/schema";
import { getServicePage } from "@/lib/services";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return buildPageMetadata({
      title: "Blog Post Not Found | SocialMediaMarketing.VIP",
      description: "The requested article was not found.",
      path: "/blog"
    });
  }

  return buildPageMetadata({
    title: `${post.title} | SMM.VIP`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: ["social media tips", "small business marketing", "maryland social media guidance"],
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedGuides = post.relatedIndustrySlugs
    .map((industrySlug) => getIndustryGuide(industrySlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const relatedServices = post.relatedServiceSlugs
    .map((serviceSlug) => getServicePage(serviceSlug))
    .filter((service): service is NonNullable<typeof service> => Boolean(service));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` }
  ];

  const schemaData = buildArticleSchemaData({
    path: `/blog/${post.slug}`,
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    faqItems: post.faq,
    breadcrumbs
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell badge="Small Business Social Media" title={post.title} intro={post.description} breadcrumbs={breadcrumbs}>
        <div className="mb-8 flex flex-wrap items-center gap-3 rounded-2xl border border-ocean/10 bg-white p-4 text-sm text-ink/70 shadow-soft">
          <span className="font-semibold text-ink">By the SocialMediaMarketing.VIP team</span>
          <span aria-hidden>|</span>
          <span>Updated <time dateTime={post.updatedAt}>{formatDate(post.updatedAt)}</time></span>
        </div>

        <section className="mb-8 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">Key takeaways</h2>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-ink/80">
            {post.keyTakeaways.map((takeaway) => (
              <li key={takeaway} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-leaf" aria-hidden />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </section>

        <div className="space-y-8">
          {post.sections.map((section, index) => (
            <MotionReveal key={section.heading} delay={index * 0.02}>
              <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
                <h2 className="font-heading text-3xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-5 space-y-2 text-sm leading-relaxed text-ink/80">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-coral" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            </MotionReveal>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-skyMint/55 p-7">
          <h2 className="font-heading text-3xl text-ink">Related services</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            See how our team turns these ideas into an ongoing content and engagement routine.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">See how this applies by industry</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Customer questions, content supply, and response boundaries change from one type of business to another.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {relatedGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/industries/${guide.slug}`}
                className="rounded-2xl border border-ocean/10 bg-white px-4 py-3 text-sm font-semibold text-ink transition hover:border-ocean hover:bg-skyMint"
              >
                {guide.title}
              </Link>
            ))}
            <Link
              href="/pricing"
              className="rounded-2xl border border-ocean bg-ocean px-4 py-3 text-sm font-semibold text-white transition hover:bg-ink"
            >
              Compare pricing tiers
            </Link>
          </div>
        </section>

        <section className="mt-10 rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
          <h2 className="font-heading text-3xl text-ink">Frequently asked questions</h2>
          <div className="mt-5">
            <FaqList items={post.faq} />
          </div>
        </section>

        <LeadCta
          title="Want a social media plan your team can actually maintain?"
          body="Tell us what is active now, where the workflow gets stuck, and what you want social media to support. We will recommend a practical next step."
        />
      </PageShell>
    </>
  );
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(new Date(`${value}T00:00:00Z`));
}
