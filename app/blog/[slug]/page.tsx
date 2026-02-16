import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { FaqList } from "@/components/faq-list";
import { MotionReveal } from "@/components/motion-reveal";
import { PageShell } from "@/components/page-shell";
import { SchemaJsonLd } from "@/components/schema-json-ld";
import { blogPosts, buildBlogSections, estimateBlogWordCount, getBlogPost } from "@/lib/blog";
import { getIndustryGuide } from "@/lib/industries";
import { buildPageMetadata } from "@/lib/metadata";
import { buildSchemaData } from "@/lib/schema";

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
    title: `${post.title} | SocialMediaMarketing.VIP Blog`,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: ["social media tips", "small business marketing", "maryland social media guidance"]
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const sections = buildBlogSections(post);
  const estimatedWords = estimateBlogWordCount(sections, post.faq);

  const relatedGuides = post.relatedIndustrySlugs
    .map((industrySlug) => getIndustryGuide(industrySlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const schemaData = buildSchemaData({
    path: `/blog/${post.slug}`,
    serviceName: post.title,
    serviceDescription: post.description,
    faqItems: post.faq
  });

  return (
    <>
      <SchemaJsonLd data={schemaData} />
      <PageShell badge="Blog Article" title={post.title} intro={post.description}>
        <div className="mb-8 rounded-2xl border border-ocean/10 bg-skyMint/60 p-4 text-xs font-semibold uppercase tracking-[0.14em] text-ocean">
          Long-form article length: approximately {estimatedWords} words
        </div>

        <div className="space-y-8">
          {sections.map((section, index) => (
            <MotionReveal key={section.heading} delay={index * 0.02}>
              <section className="rounded-3xl border border-ocean/10 bg-white p-7 shadow-soft">
                <h2 className="font-heading text-3xl text-ink">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-sm leading-relaxed text-ink/80">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            </MotionReveal>
          ))}
        </div>

        <section className="mt-10 rounded-3xl border border-leaf/20 bg-leaf/10 p-7">
          <h2 className="font-heading text-3xl text-ink">Related industry guides</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            Keep learning with these long-form niche pages, then compare plans on our pricing page.
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
          <h2 className="font-heading text-3xl text-ink">FAQ</h2>
          <div className="mt-5">
            <FaqList items={post.faq} />
          </div>
        </section>
      </PageShell>
    </>
  );
}
