import { locationPages } from "@/lib/locations";
import { servicePages } from "@/lib/services";
import { pricingTiers, siteConfig } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const services = servicePages
    .map((service) => `- ${service.name}: ${service.description} ${siteConfig.url}/services/${service.slug}`)
    .join("\n");

  const pricing = pricingTiers
    .map((tier) => `- ${tier.name}, ${tier.price}: ${tier.channels}; ${tier.idealFor}.`)
    .join("\n");

  const locations = locationPages
    .map((location) => `- ${location.label}: ${siteConfig.url}/locations/${location.slug}`)
    .join("\n");

  const text = `# ${siteConfig.name}

${siteConfig.description}

## Key facts
- Based in Maryland and serving local businesses across the state and beyond.
- Parent company: ${siteConfig.parentCompany} (${siteConfig.parentCompanyUrl}).
- Phone: ${siteConfig.phone}
- Email: ${siteConfig.email}
- Human engagement includes following potential customers, commenting on targeted posts, and responding to DMs and comments.
- Smart tools support research, organization, scheduling, and optimization; real people handle communication and community decisions.

## Services
${services}

## Monthly organic social media plans
${pricing}
Full pricing details: ${siteConfig.url}/pricing
Paid social advertising is quoted separately from the organic monthly plans.

## Maryland service areas
${locations}
Statewide details: ${siteConfig.url}/maryland-social-media-management

## Start a conversation
The contact form asks for the business name, contact details, business type, active platforms, and primary goal. Current ad budget is optional.
${siteConfig.url}/contact
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400"
    }
  });
}
