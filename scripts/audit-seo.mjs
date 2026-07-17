const baseUrl = process.env.AUDIT_BASE_URL ?? process.argv[2] ?? "http://127.0.0.1:3001";
const canonicalHost = "www.socialmediamarketing.vip";
const errors = [];
const warnings = [];

const sitemapResponse = await fetch(`${baseUrl}/sitemap.xml`);
if (!sitemapResponse.ok) {
  throw new Error(`Could not load sitemap: ${sitemapResponse.status}`);
}

const sitemapXml = await sitemapResponse.text();
const sitemapUrls = [...sitemapXml.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const lastModifiedCount = [...sitemapXml.matchAll(/<lastmod>/g)].length;

if (sitemapUrls.length === 0) {
  errors.push("Sitemap has no URLs.");
}

if (lastModifiedCount !== sitemapUrls.length) {
  errors.push(`Sitemap lastmod coverage is ${lastModifiedCount}/${sitemapUrls.length}.`);
}

for (const url of sitemapUrls) {
  const parsed = new URL(url);
  if (parsed.hostname !== canonicalHost) {
    errors.push(`Sitemap uses non-canonical host: ${url}`);
  }
}

const paths = sitemapUrls.map((url) => {
  const parsed = new URL(url);
  return `${parsed.pathname}${parsed.search}`;
});

const results = await mapWithConcurrency(paths, 8, auditPage);
const titleMap = groupBy(results, (result) => result.title);
const descriptionMap = groupBy(results, (result) => result.description);

for (const [title, pages] of titleMap) {
  if (title && pages.length > 1) {
    errors.push(`Duplicate title on ${pages.map((page) => page.path).join(", ")}: ${title}`);
  }
}

for (const [description, pages] of descriptionMap) {
  if (description && pages.length > 1) {
    errors.push(`Duplicate description on ${pages.map((page) => page.path).join(", ")}.`);
  }
}

const sitemapPathSet = new Set(paths.map(normalizePath));
const internalPaths = new Set(results.flatMap((result) => result.internalPaths));
const allowedNonSitemapPaths = new Set(["/feed.xml", "/llms.txt", "/manifest.webmanifest", "/robots.txt", "/sitemap.xml"]);

for (const path of internalPaths) {
  if (!sitemapPathSet.has(path) && !allowedNonSitemapPaths.has(path)) {
    errors.push(`Internal link is not represented in the sitemap: ${path}`);
  }
}

const robotsResponse = await fetch(`${baseUrl}/robots.txt`);
const robotsText = await robotsResponse.text();
if (!robotsResponse.ok || !robotsText.includes(`Host: https://${canonicalHost}`)) {
  errors.push("robots.txt is missing the canonical www host.");
}
if (!robotsText.includes(`Sitemap: https://${canonicalHost}/sitemap.xml`)) {
  errors.push("robots.txt is missing the canonical sitemap URL.");
}

for (const route of ["/feed.xml", "/llms.txt", "/opengraph-image", "/manifest.webmanifest"]) {
  const response = await fetch(`${baseUrl}${route}`);
  if (!response.ok) {
    errors.push(`${route} returned ${response.status}.`);
  }
}

const wordCounts = results.map((result) => result.wordCount);
const schemaCounts = results.map((result) => result.schemaCount);
const industryResults = results.filter((result) => result.path.startsWith("/industries/"));
const blogResults = results.filter((result) => result.path.startsWith("/blog/"));

console.log(
  JSON.stringify(
    {
      baseUrl,
      auditedPages: results.length,
      sitemapUrls: sitemapUrls.length,
      lastModifiedCount,
      contentWords: {
        minimum: Math.min(...wordCounts),
        maximum: Math.max(...wordCounts),
        average: Math.round(wordCounts.reduce((total, count) => total + count, 0) / wordCounts.length)
      },
      industryContentWords: summarizeWordCounts(industryResults),
      blogContentWords: summarizeWordCounts(blogResults),
      structuredDataBlocks: schemaCounts.reduce((total, count) => total + count, 0),
      warnings,
      errors
    },
    null,
    2
  )
);

if (errors.length > 0) {
  process.exitCode = 1;
}

async function auditPage(path) {
  const response = await fetch(`${baseUrl}${path}`);
  if (!response.ok) {
    errors.push(`${path} returned ${response.status}.`);
  }

  const html = await response.text();
  const title = firstMatch(html, /<title>(.*?)<\/title>/s);
  const description = firstMatch(html, /<meta name="description" content="(.*?)"\s*\/>/s);
  const canonical = firstMatch(html, /<link rel="canonical" href="(.*?)"\s*\/>/s);
  const h1Count = (html.match(/<h1\b/g) ?? []).length;
  const schemaScripts = [...html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)].map((match) => match[1]);
  const visibleText = html
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-zA-Z#0-9]+;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const wordCount = visibleText.split(/\s+/).filter(Boolean).length;

  if (!title) errors.push(`${path} is missing a title.`);
  if (!description) errors.push(`${path} is missing a meta description.`);
  if (!canonical) errors.push(`${path} is missing a canonical.`);
  if (h1Count !== 1) errors.push(`${path} has ${h1Count} H1 elements.`);
  if (/name="robots" content="[^"]*noindex/i.test(html)) errors.push(`${path} is unexpectedly noindex.`);

  if (title && (title.length < 25 || title.length > 70)) {
    warnings.push(`${path} title length is ${title.length}.`);
  }
  if (description && (description.length < 110 || description.length > 170)) {
    warnings.push(`${path} description length is ${description.length}.`);
  }

  if (canonical) {
    const expected = new URL(path, `https://${canonicalHost}`).href;
    const actual = new URL(canonical).href;
    if (actual !== expected) {
      errors.push(`${path} canonical mismatch: ${actual} !== ${expected}`);
    }
  }

  for (const schemaScript of schemaScripts) {
    try {
      JSON.parse(schemaScript);
    } catch {
      errors.push(`${path} contains invalid JSON-LD.`);
    }
  }

  if (schemaScripts.length === 0 && path !== "/privacy") {
    errors.push(`${path} is missing structured data.`);
  }

  if (/long-form (guide|article)|approximately \d+ words|SEO content gap|search intent/i.test(visibleText)) {
    errors.push(`${path} exposes internal content-production language.`);
  }

  const contentPath = path.startsWith("/blog/") || path.startsWith("/industries/") || path.startsWith("/services/") || path.startsWith("/locations/");
  if (contentPath && wordCount < 650) {
    warnings.push(`${path} has only ${wordCount} visible words.`);
  }
  if (path.startsWith("/industries/") && wordCount < 1800) {
    errors.push(`${path} has ${wordCount} visible words; industry guides require at least 1,800.`);
  }
  if (path.startsWith("/blog/") && wordCount < 1200) {
    errors.push(`${path} has ${wordCount} visible words; blog articles require at least 1,200.`);
  }

  const internalPaths = [...html.matchAll(/href="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((href) => href.startsWith("/") && !href.startsWith("/_next") && !href.startsWith("/api/"))
    .map((href) => normalizePath(new URL(href, `https://${canonicalHost}`).pathname))
    .filter((href) => !/\.[a-z0-9]+$/i.test(href));

  return {
    path,
    title: decodeBasicEntities(title),
    description: decodeBasicEntities(description),
    wordCount,
    schemaCount: schemaScripts.length,
    internalPaths
  };
}

function firstMatch(input, pattern) {
  return input.match(pattern)?.[1] ?? "";
}

function normalizePath(path) {
  if (!path || path === "/") return "/";
  return path.replace(/\/$/, "");
}

function decodeBasicEntities(value) {
  return value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'")
    .replaceAll("&#39;", "'");
}

function groupBy(items, keyFn) {
  const groups = new Map();
  for (const item of items) {
    const key = keyFn(item);
    groups.set(key, [...(groups.get(key) ?? []), item]);
  }
  return groups;
}

function summarizeWordCounts(items) {
  const counts = items.map((item) => item.wordCount);
  const lowest = [...items].sort((a, b) => a.wordCount - b.wordCount)[0];
  const highest = [...items].sort((a, b) => b.wordCount - a.wordCount)[0];

  return {
    pages: items.length,
    minimum: lowest ? { path: lowest.path, words: lowest.wordCount } : null,
    maximum: highest ? { path: highest.path, words: highest.wordCount } : null,
    average: counts.length ? Math.round(counts.reduce((total, count) => total + count, 0) / counts.length) : 0
  };
}

async function mapWithConcurrency(items, limit, callback) {
  const results = new Array(items.length);
  let nextIndex = 0;

  async function worker() {
    while (nextIndex < items.length) {
      const index = nextIndex;
      nextIndex += 1;
      results[index] = await callback(items[index]);
    }
  }

  await Promise.all(Array.from({ length: Math.min(limit, items.length) }, worker));
  return results;
}
