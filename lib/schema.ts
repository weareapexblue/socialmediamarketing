import { pricingTiers, siteConfig } from "@/lib/site";

export type FaqItem = {
  question: string;
  answer: string;
};

type SchemaInput = {
  path: string;
  serviceName: string;
  serviceDescription: string;
  faqItems: FaqItem[];
};

export function buildSchemaData({
  path,
  serviceName,
  serviceDescription,
  faqItems
}: SchemaInput) {
  const url = `${siteConfig.url}${path}`;

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/images/local-team.svg`,
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
    areaServed: [
      {
        "@type": "State",
        name: "Maryland"
      },
      {
        "@type": "Place",
        name: "United States"
      }
    ],
    priceRange: "$400-$1500",
    sameAs: []
  };

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      email: siteConfig.email
    },
    areaServed: {
      "@type": "State",
      name: "Maryland"
    },
    url,
    offers: pricingTiers.map((tier) => ({
      "@type": "Offer",
      name: `${tier.name} - ${tier.subtitle}`,
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        priceCurrency: "USD",
        price: tier.price.replace(/[^\d]/g, "")
      },
      eligibleCustomerType: "SmallBusiness",
      description: `${tier.channels}. ${tier.features.join(", ")}.`
    }))
  };

  const faq = {
    "@context": "https://schema.org",
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

  return [localBusiness, service, faq];
}
