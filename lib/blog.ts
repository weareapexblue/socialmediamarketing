import { FaqItem } from "@/lib/schema";

import { LongFormSection } from "@/lib/industries";

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  focus: string;
  talkingPoints: string[];
  relatedIndustrySlugs: string[];
  faq: FaqItem[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "why-social-media-still-matters-for-small-businesses",
    title: "Why Social Media Still Matters for Small Businesses",
    description:
      "A practical look at why social media remains one of the most cost-effective visibility channels for local and small businesses.",
    focus:
      "Social media still works for small businesses because it creates ongoing visibility, trust, and conversation where local buying decisions happen.",
    talkingPoints: [
      "visibility and consistency beat occasional bursts",
      "people check your social channels before they call",
      "content builds trust even when followers are modest",
      "engagement is customer service in public",
      "small businesses can win by sounding human and local"
    ],
    relatedIndustrySlugs: [
      "social-media-for-local-businesses",
      "social-media-for-local-retail-stores",
      "social-media-for-contractors"
    ],
    faq: [
      {
        question: "Do small businesses need every social platform?",
        answer:
          "No. Most businesses should start with the platforms where their local audience is already active, then expand as consistency improves."
      },
      {
        question: "How long before social media starts helping?",
        answer:
          "Most businesses see early traction within a few months of consistent posting and active engagement."
      },
      {
        question: "Is social media still worth it without paid ads?",
        answer:
          "Yes. Organic social builds long-term trust and visibility, especially for local businesses with strong customer experience."
      }
    ]
  },
  {
    slug: "the-real-reason-engagement-beats-follower-count",
    title: "The Real Reason Engagement Beats Follower Count",
    description:
      "Follower counts look impressive, but meaningful engagement is what drives trust, referrals, and real business outcomes.",
    focus:
      "Engagement reflects real audience connection and buying intent, while follower count alone often hides weak community relationships.",
    talkingPoints: [
      "follower counts can grow without real customer intent",
      "comments and DMs reveal actual buying questions",
      "responsive brands build stronger conversion pathways",
      "engagement signals improve platform reach over time",
      "community trust compounds in local markets"
    ],
    relatedIndustrySlugs: [
      "social-media-for-restaurants",
      "social-media-for-fitness-studios",
      "social-media-for-salons-and-spas"
    ],
    faq: [
      {
        question: "What is a healthy engagement goal for local businesses?",
        answer:
          "A healthy goal depends on audience size, but quality interactions and message volume matter more than vanity ratios alone."
      },
      {
        question: "Should we buy followers to look bigger?",
        answer:
          "No. Purchased followers usually hurt engagement quality and make performance data less useful for strategy decisions."
      },
      {
        question: "Can engagement help with referrals?",
        answer:
          "Yes. Consistent responses and community interaction increase trust, which often drives word-of-mouth recommendations."
      }
    ]
  },
  {
    slug: "how-often-should-you-post-on-social-media",
    title: "How Often Should You Post on Social Media?",
    description:
      "A simple posting frequency framework for small businesses that want consistency without burnout.",
    focus:
      "The best posting frequency is the cadence you can sustain with quality, clear messaging, and timely engagement.",
    talkingPoints: [
      "consistency matters more than aggressive volume",
      "different platforms reward different content rhythms",
      "content batching reduces stress and missed weeks",
      "posting without reply support wastes opportunity",
      "frequency should match team capacity and business goals"
    ],
    relatedIndustrySlugs: [
      "social-media-for-roofing-companies",
      "social-media-for-hvac-companies",
      "social-media-for-auto-repair-shops"
    ],
    faq: [
      {
        question: "Is posting daily necessary for growth?",
        answer:
          "Not for most local businesses. A consistent weekly rhythm with strong engagement often performs better than unsustainable daily posting."
      },
      {
        question: "How many videos should we post monthly?",
        answer:
          "A practical starting point is one to four short videos monthly, then scale based on performance and production capacity."
      },
      {
        question: "Should posting frequency change by season?",
        answer:
          "Yes. Seasonal demand changes may require campaign bursts, but your baseline presence should remain steady."
      }
    ]
  },
  {
    slug: "what-happens-when-you-ignore-your-dms",
    title: "What Happens When You Ignore Your DMs?",
    description:
      "Ignoring direct messages costs trust and revenue. This guide explains why timely responses are a core growth function.",
    focus:
      "DMs are high-intent conversations; delayed replies create lost opportunities and weaken brand trust.",
    talkingPoints: [
      "direct messages are often the final step before a call or booking",
      "slow response times lead to silent lead loss",
      "timely replies improve customer experience and retention",
      "message workflows reduce team confusion",
      "human-first DM communication protects reputation"
    ],
    relatedIndustrySlugs: [
      "social-media-for-dental-offices",
      "social-media-for-medical-practices",
      "social-media-for-law-firms"
    ],
    faq: [
      {
        question: "How quickly should a business reply to DMs?",
        answer:
          "As quickly as possible during business hours. Even a brief first response helps keep conversation momentum."
      },
      {
        question: "Can automated replies solve DM management?",
        answer:
          "Automation helps with intake, but real human follow-up is still essential for trust and conversion."
      },
      {
        question: "Do DM replies impact public reputation?",
        answer:
          "Yes. People often judge responsiveness by social behavior before deciding to contact a business directly."
      }
    ]
  },
  {
    slug: "organic-social-vs-paid-ads-whats-better",
    title: "Organic Social vs Paid Ads: What's Better?",
    description:
      "Both organic social and paid ads can work, but they solve different problems for small businesses.",
    focus:
      "Organic social builds trust and brand familiarity, while paid ads accelerate reach; most growing businesses benefit from both in the right order.",
    talkingPoints: [
      "organic social creates trust signals and brand memory",
      "paid ads create controlled reach and speed",
      "without organic proof, ads can feel disconnected",
      "small businesses should align spend with readiness",
      "a blended strategy supports both short and long-term growth"
    ],
    relatedIndustrySlugs: [
      "social-media-for-event-venues",
      "social-media-for-wedding-vendors",
      "social-media-for-nonprofits"
    ],
    faq: [
      {
        question: "Should a new business start with paid ads immediately?",
        answer:
          "Usually it helps to establish basic organic credibility first, then add ads once messaging and response workflows are stable."
      },
      {
        question: "Can organic social work without ad spend?",
        answer:
          "Yes. Consistent content and active engagement can drive awareness and leads, especially in local markets."
      },
      {
        question: "What is the safest way to combine both?",
        answer:
          "Use organic content to test messaging and audience response, then amplify proven themes with targeted paid campaigns."
      }
    ]
  },
  {
    slug: "why-real-humans-outperform-automation",
    title: "Why Real Humans Outperform Automation",
    description:
      "Automation can support workflows, but genuine community building still depends on real human communication.",
    focus:
      "AI tools are useful for speed and support, but real humans create empathy, context, and trust in social interactions.",
    talkingPoints: [
      "automation is efficient for drafting and scheduling",
      "human nuance matters in comments and sensitive moments",
      "community building requires personality and memory",
      "real responses protect brand voice and tone",
      "hybrid systems deliver the best mix of scale and trust"
    ],
    relatedIndustrySlugs: [
      "social-media-for-churches",
      "social-media-for-coffee-shops",
      "social-media-for-boutiques"
    ],
    faq: [
      {
        question: "Can AI replace social media managers?",
        answer:
          "AI can assist tasks, but human judgment is still needed for tone, context, and meaningful audience conversations."
      },
      {
        question: "What parts of social media are best for automation?",
        answer:
          "Research, scheduling, drafts, and organization are strong automation use cases when paired with human review."
      },
      {
        question: "Why does human response quality matter so much?",
        answer:
          "People choose businesses they trust, and trust is built through thoughtful interaction, not generic auto-replies."
      }
    ]
  },
  {
    slug: "how-social-media-helps-local-businesses-compete",
    title: "How Social Media Helps Local Businesses Compete",
    description:
      "Local businesses can compete with bigger brands by showing personality, responsiveness, and community relevance online.",
    focus:
      "Social media helps local businesses compete by making trust, service quality, and community connection visible at scale.",
    talkingPoints: [
      "local relevance is an advantage bigger brands cannot fake",
      "consistent posting keeps independent businesses discoverable",
      "storytelling around real people builds preference",
      "engagement turns customers into community advocates",
      "practical strategy beats flashy tactics in local markets"
    ],
    relatedIndustrySlugs: [
      "social-media-for-home-improvement-companies",
      "social-media-for-real-estate-agents",
      "social-media-for-local-businesses"
    ],
    faq: [
      {
        question: "Can local businesses really outperform bigger competitors online?",
        answer:
          "Yes. Local businesses often win when they combine consistent visibility with responsive, personalized communication."
      },
      {
        question: "What type of content helps local businesses stand out?",
        answer:
          "Educational posts, behind-the-scenes moments, local partnerships, and customer-focused storytelling usually perform well."
      },
      {
        question: "How does social media support long-term competitiveness?",
        answer:
          "It builds ongoing trust and familiarity, so customers think of your business first when needs arise."
      }
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function buildBlogSections(post: BlogPost): LongFormSection[] {
  const pointSections: LongFormSection[] = post.talkingPoints.map((point) => ({
    heading: toTitleCase(point),
    paragraphs: [
      `A practical social strategy starts with this idea: ${point}. For many small businesses, the challenge is not effort, it is direction. Teams put time into content but do not always have a repeatable system that connects posting, engagement, and real customer action. When this piece is handled intentionally, social media stops feeling random and starts supporting the business day after day.`,
      `In real client work, we see better outcomes when businesses treat social media as an ongoing communication channel rather than a campaign-only task. That means clear priorities, realistic weekly cadence, and thoughtful responses to comments and DMs. Over time, this approach builds familiarity and trust that no one-off burst of posting can replicate.`
    ]
  }));

  return [
    {
      heading: "Why This Topic Matters",
      paragraphs: [
        `${post.focus} This is especially important for local and service-based businesses where customers want reassurance before reaching out. Social profiles are often checked before people call, submit forms, or walk into a location.`,
        `When social channels are active and helpful, they reduce uncertainty. When they are stale or silent, potential customers assume the business may be harder to work with. The goal is not perfection. The goal is dependable communication that reflects how you already serve customers in person.`
      ]
    },
    ...pointSections,
    {
      heading: "A Four-Week Action Blueprint",
      paragraphs: [
        `If you want this strategy to stick, map it into a four-week cycle. In week one, choose your core content pillars and define a realistic posting cadence. In week two, focus on response quality by tightening DM and comment handling. In week three, review which topics created the most meaningful interaction. In week four, refine the next month based on those signals. This rhythm keeps strategy simple and measurable.`,
        `For most teams, the key is batching. Capture photos and short video clips in one focused session, then distribute that content across multiple posts with platform-specific formatting. This reduces production stress and gives you consistent visibility even during busy operational weeks. It also gives your audience a stable sense of brand presence.`,
        `Keep your metrics practical. Track saves, shares, DMs, and qualified inquiries instead of obsessing over vanity numbers. These signals provide a clearer picture of trust and purchase intent. If certain posts repeatedly spark questions, turn those questions into your next round of content topics and short-form videos.`,
        `This approach works especially well in Maryland and other local markets where people often choose businesses based on familiarity and responsiveness. When your channels show steady activity and real conversation, your brand feels approachable. That feeling can be the deciding factor between being shortlisted and being skipped.`
      ]
    },
    {
      heading: "Common Mistakes to Avoid",
      paragraphs: [
        `One common mistake is chasing volume without a process. Posting more can feel productive, but if no one is tracking engagement, responding to messages, or learning from results, the effort rarely compounds. Another mistake is switching strategy every few weeks. Frequent resets break consistency and make it hard for audiences to recognize your brand voice.`,
        `A better path is simple and steady: define a realistic posting rhythm, choose content pillars that match your business goals, and maintain a response workflow so conversation does not stall. Small improvements repeated every week usually outperform big strategy swings.`
      ]
    },
    {
      heading: "When to Scale Your Support",
      paragraphs: [
        `As consistency improves, you can scale strategically. If your audience becomes active on more than one or two platforms, it may be time to expand beyond a starter workflow. More channels can increase visibility, but only when execution quality remains strong. Growth should never come at the cost of brand voice or response speed.`,
        `That is why many businesses start with a focused plan, then move into broader platform coverage and higher video cadence once the basics are stable. The right sequence is simple: establish trust, maintain consistency, then expand reach. This keeps social media sustainable and avoids the burnout cycle that hurts long-term performance.`
      ]
    },
    {
      heading: "A Friendly Plan You Can Use This Month",
      paragraphs: [
        `Start with one month of focused execution. Pick your primary platforms, map weekly post themes, and decide who approves content quickly. Then set standards for reply timing in comments and DMs. Keep tracking basic signals like saves, shares, questions, and inquiry volume. Those indicators tell you what your audience values most.`,
        `If your team wants support, our Maryland-based crew handles strategy, posting, and engagement with real humans behind your brand. We use smart tools for speed, but people do the communication work. That balance keeps your social presence efficient, trustworthy, and practical for long-term growth.`
      ]
    }
  ];
}

export function estimateBlogWordCount(sections: LongFormSection[], faq: FaqItem[]) {
  const text = [
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs]),
    ...faq.flatMap((item) => [item.question, item.answer])
  ].join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}

function toTitleCase(value: string) {
  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
