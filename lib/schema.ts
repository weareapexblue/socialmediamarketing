import { pricingTiers, siteConfig } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbItem = {
  name: string;
  path: string;
};

type SchemaInput = {
  path: string;
  serviceName: string;
  serviceDescription: string;
  faqItems?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
  areaServed?: string | string[];
  serviceType?: string;
  includeOffers?: boolean;
};

type ArticleSchemaInput = {
  path: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  faqItems?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
};

const businessId = `${siteConfig.url}/#business`;
const websiteId = `${siteConfig.url}/#website`;

function buildAreaServed(areaServed: string | string[] = "Maryland") {
  const areas = Array.isArray(areaServed) ? areaServed : [areaServed];

  return areas.map((area) => ({
    "@type": area === "Maryland" ? "State" : "City",
    name: area
  }));
}

function buildBusinessSchema() {
  return {
    "@type": "ProfessionalService",
    "@id": businessId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.svg`,
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.parentCompany,
      url: siteConfig.parentCompanyUrl
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "MD",
      addressCountry: "US"
    },
    areaServed: buildAreaServed(["Maryland"]),
    priceRange: "$400-$1,500 per month",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      email: siteConfig.email,
      contactType: "sales and customer support",
      areaServed: "US",
      availableLanguage: "English"
    }
  };
}

function buildWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@id": businessId
    },
    inLanguage: "en-US"
  };
}

function buildFaqSchema(faqItems: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };
}

function buildBreadcrumbSchema(breadcrumbs: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`
    }))
  };
}

export function buildSchemaData({
  path,
  serviceName,
  serviceDescription,
  faqItems = [],
  breadcrumbs = [],
  areaServed = "Maryland",
  serviceType = "Social media management",
  includeOffers = true
}: SchemaInput) {
  const url = `${siteConfig.url}${path}`;
  const graph: object[] = [buildBusinessSchema(), buildWebsiteSchema()];

  graph.push({
    "@type": "Service",
    "@id": `${url}#service`,
    name: serviceName,
    serviceType,
    description: serviceDescription,
    provider: {
      "@id": businessId
    },
    areaServed: buildAreaServed(areaServed),
    url,
    ...(includeOffers
      ? {
          offers: pricingTiers.map((tier) => ({
            "@type": "Offer",
            name: `${tier.name} - ${tier.subtitle}`,
            url: `${siteConfig.url}/pricing#${tier.id}`,
            price: tier.price.replace(/[^\d]/g, ""),
            priceCurrency: "USD",
            category: tier.channels,
            description: `${tier.channels}. ${tier.features.join(", ")}.`
          }))
        }
      : {})
  });

  if (faqItems.length > 0) {
    graph.push(buildFaqSchema(faqItems));
  }

  if (breadcrumbs.length > 0) {
    graph.push(buildBreadcrumbSchema(breadcrumbs));
  }

  return [
    {
      "@context": "https://schema.org",
      "@graph": graph
    }
  ];
}

export function buildArticleSchemaData({
  path,
  headline,
  description,
  datePublished,
  dateModified,
  faqItems = [],
  breadcrumbs = []
}: ArticleSchemaInput) {
  const url = `${siteConfig.url}${path}`;
  const graph: object[] = [
    buildBusinessSchema(),
    buildWebsiteSchema(),
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline,
      description,
      url,
      mainEntityOfPage: url,
      datePublished,
      dateModified,
      inLanguage: "en-US",
      image: `${siteConfig.url}/opengraph-image`,
      author: {
        "@type": "Organization",
        name: "SocialMediaMarketing.VIP Team",
        url: `${siteConfig.url}/about`
      },
      publisher: {
        "@id": businessId
      }
    }
  ];

  if (faqItems.length > 0) {
    graph.push(buildFaqSchema(faqItems));
  }

  if (breadcrumbs.length > 0) {
    graph.push(buildBreadcrumbSchema(breadcrumbs));
  }

  return [
    {
      "@context": "https://schema.org",
      "@graph": graph
    }
  ];
}
