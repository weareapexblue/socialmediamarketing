export const siteConfig = {
  name: "SocialMediaMarketing.VIP",
  parentCompany: "Apex Blue",
  parentCompanyUrl: "https://apex.blue",
  location: "Maryland",
  phone: "(443) 595-7739",
  phoneHref: "tel:+14435957739",
  textHref: "sms:+14435957739",
  email: "team@socialmediamarketing.vip",
  emailHref: "mailto:team@socialmediamarketing.vip",
  url: "https://socialmediamarketing.vip",
  description:
    "Friendly social media management for Maryland small businesses, led by real people who post, engage, and build your community with care."
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Pricing" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/industries-we-serve", label: "Industries" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" }
] as const;

export type Tier = {
  id: string;
  name: string;
  price: string;
  subtitle: string;
  channels: string;
  idealFor: string;
  features: string[];
};

export const pricingTiers: Tier[] = [
  {
    id: "tier-1",
    name: "Tier 1",
    price: "$400/month",
    subtitle: "Meta Starter",
    channels: "Facebook + Instagram",
    idealFor: "Small local businesses just getting started",
    features: [
      "1 post per week",
      "1 short-form video per month",
      "Weekly engagement: follow potential customers and comment on targeted posts",
      "Comment monitoring",
      "Friendly replies to DMs and comments"
    ]
  },
  {
    id: "tier-2",
    name: "Tier 2",
    price: "$800/month",
    subtitle: "Multi-Platform Growth",
    channels: "Meta + TikTok + YouTube",
    idealFor: "Growing brands that want visibility everywhere people scroll",
    features: [
      "2 posts per week",
      "4 short-form videos per month",
      "SEO-optimized captions",
      "Strategic engagement: follow potential customers and comment on targeted posts",
      "Platform-specific formatting",
      "Hashtag research",
      "Friendly replies to DMs and comments"
    ]
  },
  {
    id: "tier-3",
    name: "Tier 3",
    price: "$1,500/month",
    subtitle: "Omni-Channel + Ultra Engagement",
    channels: "Up to 10 platforms",
    idealFor: "Businesses ready to build real digital presence",
    features: [
      "3 posts per week",
      "Cross-posting to up to 10 platforms",
      "Ultra engagement strategy with targeted outreach and conversation support",
      "Community interaction",
      "Following potential customers and commenting on targeted posts",
      "Responsive replies to DMs and comments",
      "SEO-optimized captions",
      "Profile optimization",
      "Growth reporting"
    ]
  }
];

export const socialChannels = [
  "Facebook",
  "Instagram",
  "TikTok",
  "YouTube",
  "Google Business Profile",
  "LinkedIn",
  "X",
  "Pinterest"
];
