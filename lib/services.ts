import type { FaqItem } from "@/lib/schema";

export type ServicePage = {
  slug: string;
  name: string;
  metaTitle: string;
  description: string;
  hero: string;
  opening: string[];
  whoItHelps: string[];
  commonProblems: string[];
  deliverables: string[];
  humanDifference: string[];
  monthlyFlow: Array<{
    title: string;
    body: string;
  }>;
  planFit: string;
  planHref: string;
  relatedIndustrySlugs: string[];
  faq: FaqItem[];
};

export const servicePages: ServicePage[] = [
  {
    slug: "social-media-management",
    name: "Social Media Management",
    metaTitle: "Social Media Management in Maryland | SocialMediaMarketing.VIP",
    description:
      "Social media management for Maryland small businesses, including planning, posting, short-form video, engagement, DM replies, and a clear monthly workflow.",
    hero: "Consistent social media, without adding another full-time job to your week",
    opening: [
      "Social media management should make your business easier to discover and easier to trust. We plan the calendar, prepare posts, format content for each platform, publish on schedule, and keep an eye on the conversations that follow.",
      "Our approach is built for owner-led and local businesses. You do not need a complicated marketing department or a constant stream of polished studio content. You need a clear rhythm, useful stories from the work you already do, and real people who can speak with customers in a natural way.",
      "Smart tools help our team organize research, schedules, and performance signals. People make the decisions, write with context, review the details, and handle your community. That balance keeps the work efficient without turning your brand into an automated feed."
    ],
    whoItHelps: [
      "Local businesses that post only when someone finds a spare hour",
      "Service providers that receive questions through comments and direct messages",
      "Restaurants, retailers, and studios that need a dependable weekly presence",
      "Contractors and professional practices that need trust-building education",
      "Small teams that are not ready to hire an in-house social media employee"
    ],
    commonProblems: [
      "Weeks pass between posts because daily operations come first",
      "Captions feel rushed, generic, or disconnected from the actual business",
      "Good photos and job updates stay buried in team phones",
      "Messages and comments do not have a clear owner",
      "Every platform receives the same post even when the format does not fit",
      "Reports focus on follower totals instead of useful customer activity"
    ],
    deliverables: [
      "A practical monthly content plan tied to your offers, audience, and season",
      "Captions written in a friendly voice that sounds like your business",
      "Scheduled posts with platform-specific formatting and clear calls to action",
      "Short-form video planning and editing based on the selected plan",
      "Weekly engagement that includes following potential customers and commenting on targeted posts",
      "Human responses to DMs and comments using an approved response guide",
      "Performance review used to guide upcoming content, with growth reporting included in Tier 3"
    ],
    humanDifference: [
      "A scheduling tool can publish a post, but it cannot understand the full context behind a customer question, a sensitive complaint, or a local conversation. Our team reads before responding and knows when an issue should be passed directly to you.",
      "We also look for appropriate ways to participate beyond your own feed. That can include following potential customers, engaging with nearby organizations, and commenting on targeted public posts where your business can add something helpful. The goal is relevant visibility, not spammy outreach.",
      "Your response guide sets the boundaries. We document common questions, approved answers, escalation topics, and the tone that feels right for your brand. This gives customers a warm first response while keeping important decisions with your team."
    ],
    monthlyFlow: [
      {
        title: "Plan",
        body: "We choose useful themes, offers, local moments, and content formats for the month ahead."
      },
      {
        title: "Create",
        body: "We turn your photos, clips, expertise, and current priorities into finished posts and videos."
      },
      {
        title: "Publish",
        body: "Approved content is formatted and scheduled for the platforms included in your plan."
      },
      {
        title: "Engage",
        body: "We follow relevant prospects, comment on targeted posts, and respond to DMs and comments."
      },
      {
        title: "Refine",
        body: "We review meaningful activity and use it to improve the next month without constant strategy resets."
      }
    ],
    planFit:
      "Tier 1 is a practical Facebook and Instagram starting point. Tier 2 adds TikTok, YouTube, more weekly posts, and four short-form videos per month. Tier 3 is designed for wider channel coverage and a deeper engagement routine.",
    planHref: "/pricing",
    relatedIndustrySlugs: [
      "social-media-for-local-businesses",
      "social-media-for-restaurants",
      "social-media-for-contractors",
      "social-media-for-local-retail-stores"
    ],
    faq: [
      {
        question: "What is included in social media management?",
        answer:
          "Depending on your plan, management can include strategy, captions, posting, short-form video, platform formatting, engagement, DM and comment replies, profile updates, and reporting."
      },
      {
        question: "Do you need us to provide all of the content?",
        answer:
          "No. We can start with existing photos, clips, offers, and business knowledge, then give your team a simple capture list for the month ahead."
      },
      {
        question: "Can we approve posts before they are published?",
        answer:
          "Yes. We use a clear approval step so you can confirm facts, offers, and brand voice before scheduled content goes live."
      },
      {
        question: "How soon can management begin?",
        answer:
          "Most businesses can move from onboarding to the first approved content cycle within one to two weeks, depending on account access and asset availability."
      }
    ]
  },
  {
    slug: "facebook-instagram-management",
    name: "Facebook and Instagram Management",
    metaTitle: "Facebook and Instagram Management in Maryland | SMM.VIP",
    description:
      "Friendly Facebook and Instagram management for Maryland local businesses, with weekly posts, human engagement, comment monitoring, and DM replies.",
    hero: "Give Facebook and Instagram the steady attention your customers notice",
    opening: [
      "Facebook and Instagram are often the first places a local customer checks after hearing about a business. An active page helps them confirm that you are open, involved, responsive, and still doing work they can trust.",
      "We manage both Meta platforms as one connected system without making them look identical. Facebook is useful for local updates, community conversations, events, and detailed information. Instagram is stronger for visual proof, short video, stories, and quick brand discovery. Each post is shaped for the way people use that platform.",
      "This service is designed for businesses that want a reliable baseline before expanding everywhere else. It keeps the two most common local-business channels current while giving comments and messages a real human response."
    ],
    whoItHelps: [
      "Neighborhood businesses that rely on referrals and local recognition",
      "Restaurants, salons, fitness studios, and retailers with visual stories to share",
      "Contractors and home service companies with project photos and seasonal advice",
      "Professional practices that need a welcoming, informative presence",
      "Businesses with inactive pages, unanswered messages, or inconsistent branding"
    ],
    commonProblems: [
      "The last post is months old even though the business is busy",
      "Facebook questions about hours or services wait too long for a reply",
      "Instagram photos look disconnected because there is no content plan",
      "Posts are copied word-for-word between platforms",
      "Strong customer questions are answered privately but never become useful content",
      "Staff members are unsure who is responsible for monitoring the inbox"
    ],
    deliverables: [
      "A shared Facebook and Instagram calendar tied to real business priorities",
      "One weekly post and one monthly short-form video on the Tier 1 plan",
      "Captions adjusted for the format and audience on each platform",
      "Weekly engagement with potential customers and targeted local posts",
      "Comment monitoring and friendly replies to DMs and comments",
      "Story and reel ideas that make everyday business moments more useful",
      "Profile checks for current links, descriptions, services, and contact details"
    ],
    humanDifference: [
      "Meta tools can combine inboxes and schedule content, but customer conversations still need judgment. A person asking about an appointment should not receive the same style of reply as someone leaving a compliment or raising a service concern.",
      "We learn the difference between questions we can answer immediately and topics that should be escalated. That keeps replies helpful without guessing about availability, pricing exceptions, medical details, legal matters, or active project decisions.",
      "Engagement also reaches beyond reacting to your own comments. We can follow relevant potential customers and participate thoughtfully on targeted posts, helping your name become familiar in the communities you actually serve."
    ],
    monthlyFlow: [
      {
        title: "Choose the month's priorities",
        body: "We align content with current services, promotions, seasonal questions, and available visuals."
      },
      {
        title: "Build the Meta calendar",
        body: "We select the right mix of photos, carousels, reels, updates, and helpful explanations."
      },
      {
        title: "Review and schedule",
        body: "Your team approves key details before posts are prepared for Facebook and Instagram."
      },
      {
        title: "Monitor conversations",
        body: "We watch comments and DMs, respond within the agreed boundaries, and flag priority inquiries."
      },
      {
        title: "Use what customers tell us",
        body: "Recurring questions and strong reactions guide the next round of useful content."
      }
    ],
    planFit:
      "Tier 1 was built for this exact need: Facebook and Instagram, one post per week, one short-form video per month, weekly engagement, comment monitoring, and friendly DM replies.",
    planHref: "/pricing#tier-1",
    relatedIndustrySlugs: [
      "social-media-for-local-businesses",
      "social-media-for-restaurants",
      "social-media-for-salons-and-spas",
      "social-media-for-auto-repair-shops"
    ],
    faq: [
      {
        question: "Can the same content be used on Facebook and Instagram?",
        answer:
          "The core idea often can, but the caption length, crop, call to action, hashtags, and format should be adjusted so each post feels natural on its platform."
      },
      {
        question: "Do you reply through the Meta inbox?",
        answer:
          "Yes. We can monitor and respond to eligible Facebook and Instagram comments and DMs using your approved response guide."
      },
      {
        question: "What if we already have an inactive Facebook page?",
        answer:
          "We can review the profile, update basic information, organize a realistic restart, and begin publishing without pretending the page was active all along."
      },
      {
        question: "Is paid Meta advertising included?",
        answer:
          "No. Organic Facebook and Instagram management is included in the monthly tiers. Paid Meta advertising is quoted separately based on goals and ad budget."
      }
    ]
  },
  {
    slug: "social-media-engagement",
    name: "Social Media Engagement and Community Management",
    metaTitle: "Social Media Engagement Services in Maryland | SMM.VIP",
    description:
      "Human social media engagement for local businesses: follow potential customers, comment on targeted posts, and respond to DMs and comments.",
    hero: "Posting starts the conversation. Human engagement keeps it moving.",
    opening: [
      "A social account can look active and still feel empty if nobody responds. Community management is the work that happens after a post goes live: noticing questions, acknowledging people, joining relevant conversations, and helping interested customers take the next step.",
      "Our engagement service includes following potential customers, commenting on targeted public posts, and responding to DMs and comments. It is not a bot blasting generic reactions. A real person reads the context, uses your response guide, and protects the tone of your brand.",
      "For local businesses, this work often overlaps with customer service. Someone may ask whether you serve their area, have a table available, offer a certain repair, or can accommodate an event date. A warm first response can keep that conversation from going cold."
    ],
    whoItHelps: [
      "Businesses receiving social inquiries that no one consistently monitors",
      "Local brands that want to become more visible in nearby conversations",
      "Teams with active followers but very little back-and-forth interaction",
      "Service companies that need a clear path from social question to lead intake",
      "Owners who want engagement without handing responses to a bot"
    ],
    commonProblems: [
      "Direct messages are opened late or missed entirely",
      "Comments receive a generic emoji instead of a useful response",
      "Potential customers ask a question and quietly choose someone else",
      "Staff do not know which questions they can answer publicly",
      "The business only engages with people who already follow the page",
      "Sensitive issues are handled too casually or escalated too slowly"
    ],
    deliverables: [
      "A practical response guide covering tone, common questions, and escalation rules",
      "Monitoring for eligible comments, DMs, mentions, and public replies",
      "Friendly first responses that help people find the right next step",
      "Following potential customers who fit the agreed audience",
      "Thoughtful comments on targeted posts where the brand can participate naturally",
      "Escalation of complaints, sensitive details, urgent requests, and unusual questions",
      "Conversation notes that help future content answer what people really want to know"
    ],
    humanDifference: [
      "Good engagement requires reading the room. A playful restaurant comment, a worried healthcare question, and an urgent home-service message need very different treatment. Automated replies do not reliably understand those differences.",
      "We set boundaries before engagement begins. Your team decides which answers are approved, which details must stay private, and when we should hand the conversation over. This is especially important for legal, medical, financial, and active customer-service matters.",
      "Targeted engagement is also selective. We focus on people, businesses, and community conversations that make sense for your goals. We do not buy followers, send mass pitches, or leave empty comments just to inflate activity."
    ],
    monthlyFlow: [
      {
        title: "Build the response guide",
        body: "We document brand tone, common answers, privacy boundaries, and escalation contacts."
      },
      {
        title: "Choose engagement targets",
        body: "We define relevant customer profiles, local organizations, and conversation themes."
      },
      {
        title: "Monitor and respond",
        body: "Real people review DMs and comments and respond within the approved scope."
      },
      {
        title: "Participate thoughtfully",
        body: "We follow appropriate prospects and add useful comments to selected public posts."
      },
      {
        title: "Improve the playbook",
        body: "New questions and edge cases are added to the response guide with your input."
      }
    ],
    planFit:
      "Every monthly plan includes human engagement. Tier 1 provides a practical weekly routine, Tier 2 adds more strategic multi-platform activity, and Tier 3 includes the deepest community interaction and outreach support.",
    planHref: "/pricing",
    relatedIndustrySlugs: [
      "social-media-for-coffee-shops",
      "social-media-for-fitness-studios",
      "social-media-for-churches",
      "social-media-for-nonprofits"
    ],
    faq: [
      {
        question: "What does social media engagement include?",
        answer:
          "It includes following potential customers, commenting on targeted posts, and responding to eligible DMs and comments using your brand voice and response guidelines."
      },
      {
        question: "Will you answer every question without asking us?",
        answer:
          "No. We answer approved common questions and escalate anything sensitive, unusual, private, or outside the agreed response guide."
      },
      {
        question: "Do you use bots to leave comments?",
        answer:
          "No. Real people review the context and write relevant comments. Smart tools may support research and organization, but they do not replace human judgment."
      },
      {
        question: "Can engagement help turn messages into leads?",
        answer:
          "It can help by providing a timely first response and directing interested people to your preferred booking, estimate, reservation, or contact process."
      }
    ]
  },
  {
    slug: "short-form-video",
    name: "Short-Form Video Content",
    metaTitle: "Short-Form Video Services for Maryland Businesses | SMM.VIP",
    description:
      "Practical Reels, TikTok, and YouTube Shorts support for Maryland small businesses, from monthly topic planning to editing and platform formatting.",
    hero: "Turn the work you already do into short videos people can understand",
    opening: [
      "Short-form video does not require your business to chase every trend. A useful thirty-second explanation, a quick look behind the scenes, a project reveal, or a staff introduction can help people understand your work faster than a polished advertisement.",
      "We plan video around moments your team can realistically capture. That may be a dish leaving the kitchen, a contractor explaining one detail, a trainer demonstrating a movement, a stylist showing a transformation, or an owner answering a common question. The goal is to make expertise and personality visible without interrupting the whole workday.",
      "Once footage is available, we shape it for vertical viewing, keep the message focused, and prepare versions for the platforms in your plan. We favor clear storytelling and a recognizable brand voice over effects that will feel dated next month."
    ],
    whoItHelps: [
      "Businesses with strong visual work but no repeatable video routine",
      "Owners who are comfortable sharing expertise but need topic direction",
      "Teams that collect clips but never turn them into finished posts",
      "Restaurants, contractors, studios, venues, and retailers with frequent moments to show",
      "Professional services that want simple educational video without gimmicks"
    ],
    commonProblems: [
      "Recording feels awkward because nobody knows what to say",
      "Long clips do not have a clear opening or single takeaway",
      "Videos are edited once and posted everywhere without format changes",
      "Staff wait for a perfect production day that never arrives",
      "Trends replace useful business stories",
      "There is no plan for captions, cover frames, or the next action"
    ],
    deliverables: [
      "Monthly video topics based on customer questions and current business priorities",
      "Simple shot lists and talking prompts your team can use on a phone",
      "Vertical editing for Reels, TikTok, and YouTube Shorts where included",
      "Clear openings, readable on-screen text, and concise captions",
      "Platform-specific titles, descriptions, and calls to action",
      "A mix of educational, behind-the-scenes, personality, and proof-based formats",
      "Performance review focused on watch behavior, shares, replies, and useful inquiries"
    ],
    humanDifference: [
      "Video works best when it sounds like the person and business on screen. Our team helps shape the message without sanding away the local voice, practical knowledge, or natural personality that makes the clip believable.",
      "We also make judgment calls about context. A patient, client, child, job address, or private document should never appear casually in the background. Human review helps catch details that an automatic editor may not understand.",
      "The final video is only one part of the work. We prepare the caption, select an appropriate call to action, monitor the response, and use real audience questions to plan the next useful clip."
    ],
    monthlyFlow: [
      {
        title: "Pick useful topics",
        body: "We select questions, services, stories, and moments that fit the month's business priorities."
      },
      {
        title: "Make capture simple",
        body: "Your team receives short prompts and a practical shot list instead of a complicated production brief."
      },
      {
        title: "Edit for attention",
        body: "We tighten the story, add readable text where useful, and keep the main point easy to follow."
      },
      {
        title: "Format by platform",
        body: "Captions, titles, covers, and descriptions are adjusted for the channels in your plan."
      },
      {
        title: "Learn from response",
        body: "Questions, shares, and watch patterns guide the next set of video topics."
      }
    ],
    planFit:
      "Tier 1 includes one short-form video per month. Tier 2 includes four videos per month across Meta, TikTok, and YouTube. Tier 3 combines a steady video cadence with broad cross-platform distribution.",
    planHref: "/pricing",
    relatedIndustrySlugs: [
      "social-media-for-restaurants",
      "social-media-for-roofing-companies",
      "social-media-for-real-estate-agents",
      "social-media-for-wedding-vendors"
    ],
    faq: [
      {
        question: "Do you come to our business to film?",
        answer:
          "Video capture needs are discussed during planning. Many clients can use a simple guided phone capture workflow, while larger on-site production can be scoped separately."
      },
      {
        question: "How long should a short-form video be?",
        answer:
          "There is no single perfect length. We keep each video long enough to deliver one clear idea and short enough to respect the viewer's attention."
      },
      {
        question: "Do we have to appear on camera?",
        answer:
          "No. Hands-at-work footage, voiceover, process clips, products, spaces, and on-screen text can all support useful videos without a talking-head format."
      },
      {
        question: "Can one clip be used on Instagram, TikTok, and YouTube?",
        answer:
          "Often yes, but the cover, caption, title, description, and sometimes the edit should be adjusted for each platform."
      }
    ]
  },
  {
    slug: "social-media-advertising",
    name: "Social Media Advertising",
    metaTitle: "Social Media Advertising for Maryland Businesses | SMM.VIP",
    description:
      "Paid Meta, TikTok, and YouTube advertising support for Maryland local businesses, planned separately from organic social media management.",
    hero: "Use paid social to reach the right local audience with a clear next step",
    opening: [
      "Paid social advertising can place a useful offer in front of people beyond your current followers. It works best when the goal, audience, message, landing experience, and follow-up process are ready before budget is spent.",
      "We help local businesses explore advertising on Meta, TikTok, and YouTube. Campaign scope is tailored to the business, so ad management is quoted separately from our organic monthly tiers. The contact form includes an optional current ad budget question to help us understand what may be realistic.",
      "We do not treat advertising as a substitute for a trustworthy social presence. Organic content helps a potential customer check who you are, while paid campaigns create controlled reach. When both sides tell the same story, the customer journey feels more credible."
    ],
    whoItHelps: [
      "Local businesses with a defined offer and a clear service area",
      "Teams launching a seasonal promotion, event, opening, or new service",
      "Businesses that can respond promptly when an ad creates inquiries",
      "Brands with enough photo or video material to test more than one message",
      "Owners who want to understand the plan before committing ad spend"
    ],
    commonProblems: [
      "Campaigns begin without a specific conversion goal",
      "The audience is broad because the real customer has not been defined",
      "One ad is expected to work without creative testing",
      "Clicks land on a page that does not match the promise in the ad",
      "Messages arrive but follow-up is slow or inconsistent",
      "Ad spend and management fees are mixed together without clarity"
    ],
    deliverables: [
      "Goal and offer review before campaign recommendations are made",
      "Platform and audience planning based on location, customer fit, and available creative",
      "Ad copy and creative direction aligned with the landing experience",
      "Campaign setup for approved Meta, TikTok, or YouTube scopes",
      "Ongoing monitoring and reasonable testing based on budget",
      "Clear separation between media spend and management cost",
      "Reporting that explains what happened and what should be adjusted next"
    ],
    humanDifference: [
      "Ad platforms can automate delivery, but they cannot decide whether an offer is sensible for your business, whether a lead is truly qualified, or whether a message fits the way your customers make decisions. Those choices need business context.",
      "Human review is also important when comments appear under ads. Questions, confusion, and criticism are public. A thoughtful response protects trust and can clarify the offer for everyone else reading.",
      "We keep recommendations proportional to the available budget and conversion path. If the foundation is not ready, we would rather identify the gap than rush money into a campaign that cannot be evaluated fairly."
    ],
    monthlyFlow: [
      {
        title: "Define the outcome",
        body: "We choose a concrete action such as an inquiry, booking, registration, visit, or qualified message."
      },
      {
        title: "Check the path",
        body: "We review the offer, audience, creative, landing destination, and follow-up responsibility."
      },
      {
        title: "Build the campaign",
        body: "Approved ads are prepared with targeting and measurement appropriate to the platform."
      },
      {
        title: "Monitor and learn",
        body: "We watch delivery and response quality, then make measured adjustments rather than constant resets."
      },
      {
        title: "Report plainly",
        body: "You receive a clear view of spend, response, lead quality signals, and recommended next steps."
      }
    ],
    planFit:
      "Paid advertising is not included in the $400, $800, or $1,500 organic social media tiers. Contact our team for a separate recommendation based on the platforms, campaign goal, creative needs, and ad budget.",
    planHref: "/contact",
    relatedIndustrySlugs: [
      "social-media-for-event-venues",
      "social-media-for-home-improvement-companies",
      "social-media-for-dental-offices",
      "social-media-for-local-retail-stores"
    ],
    faq: [
      {
        question: "Is ad spend included in your monthly social media plans?",
        answer:
          "No. Paid advertising is scoped separately. Media spend paid to the platform is also separate from any campaign management fee."
      },
      {
        question: "What ad budget do I need?",
        answer:
          "The useful starting point depends on the platform, audience size, offer, geography, creative, and conversion goal. You can share your current budget on the contact form, but the field is optional."
      },
      {
        question: "Which platforms can you help with?",
        answer:
          "We can discuss paid advertising options for Meta, TikTok, and YouTube based on where your audience is active and what creative is available."
      },
      {
        question: "Should we run ads before building an organic presence?",
        answer:
          "Not always. A basic organic presence often helps interested people verify the business after seeing an ad, so we review both parts of the customer journey."
      }
    ]
  }
];

export function getServicePage(slug: string) {
  return servicePages.find((service) => service.slug === slug);
}
