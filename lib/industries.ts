import { FaqItem } from "@/lib/schema";

export type IndustryGuide = {
  slug: string;
  title: string;
  niche: string;
  audience: string[];
  struggles: string[];
  whatWeDo: string[];
  bestTier: "Tier 1" | "Tier 2" | "Tier 3";
  tierReason: string;
  localAngle: string;
  ctaHeadline: string;
  ctaBody: string;
  faq: FaqItem[];
};

export type LongFormSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type IndustryPlaybook = {
  contentPillars: string[];
  captureList: string[];
  engagementFocus: string[];
  leadPath: string;
};

export type IndustryDepthGuide = {
  decisionJourney: string;
  weeklyRhythm: string;
  reviewBoundaries: string;
  conversationHandoff: string;
  successSignals: string;
};

export const industryGuides: IndustryGuide[] = [
  {
    slug: "social-media-for-local-businesses",
    title: "Social Media for Local Businesses",
    niche: "local businesses",
    audience: [
      "Owner-operated shops and neighborhood service brands",
      "Businesses with strong word-of-mouth but inconsistent online visibility",
      "Teams that need practical social media support without adding full-time staff"
    ],
    struggles: [
      "running out of post ideas while juggling daily operations",
      "inconsistent replies to comments and direct messages",
      "difficulty showing what makes a local business more trustworthy than a chain",
      "unclear social media priorities across Facebook, Instagram, and short-form video"
    ],
    whatWeDo: [
      "plan content around weekly business rhythms, seasonal moments, and community events",
      "write captions in a natural, friendly voice that sounds like your team",
      "respond to comments and DMs with real human support so leads do not sit",
      "turn everyday business moments into useful photo and short-video content"
    ],
    bestTier: "Tier 1",
    tierReason:
      "Most local businesses start strong with consistent posting and weekly engagement on Meta, then expand once they see steady momentum.",
    localAngle:
      "Across Maryland, from busy suburbs to smaller downtown districts, people still choose businesses they recognize and trust. Your social presence is often that first trust signal.",
    ctaHeadline: "Let your local reputation show up online every week",
    ctaBody:
      "If your business is already known in person, our team helps that same energy show up in feeds, comments, and messages where new customers are deciding who to call.",
    faq: [
      {
        question: "How fast can a local business get started?",
        answer:
          "Most local businesses can start within one to two weeks after onboarding, content planning, and account access are complete."
      },
      {
        question: "Do you need brand photos before starting?",
        answer:
          "Not always. We can begin with existing photos and smartphone clips, then build a simple monthly capture plan as we go."
      },
      {
        question: "Will you reply to comments and DMs?",
        answer:
          "Yes. We provide human comment monitoring and friendly DM replies based on your preferred tone and response guidelines."
      }
    ]
  },
  {
    slug: "social-media-for-restaurants",
    title: "Social Media for Restaurants",
    niche: "restaurants",
    audience: [
      "Independent restaurants, cafes, and quick-service spots",
      "Owners and managers who need reliable posting around menus and specials",
      "Teams that want more local repeat traffic without complicated ad systems"
    ],
    struggles: [
      "menu updates and daily operations leaving little time for content",
      "great food photos posted randomly without a strategic cadence",
      "messages about reservations, hours, and events sitting too long",
      "difficulty turning one-time visitors into repeat regulars"
    ],
    whatWeDo: [
      "build content calendars around menu launches, chef features, and seasonal promos",
      "package short-form clips that highlight texture, atmosphere, and personality",
      "keep comment and DM communication warm, quick, and accurate",
      "format posts by platform so every channel feels native and polished"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Restaurants benefit from frequent visual storytelling and multi-platform reach, which makes Tier 2 a practical growth fit for busy hospitality teams.",
    localAngle:
      "In Maryland food scenes, community loyalty grows when people feel connected to your story, staff, and day-to-day kitchen energy.",
    ctaHeadline: "Give local diners a clear reason to remember your restaurant",
    ctaBody:
      "We help restaurants stay visible with consistent social storytelling so your menu, team, and atmosphere stay top of mind in the local community.",
    faq: [
      {
        question: "Can you promote rotating menu items?",
        answer:
          "Yes. We structure a posting workflow for weekly specials, seasonal dishes, and event nights so promotions stay timely and clear."
      },
      {
        question: "Do you manage both photos and video?",
        answer:
          "Yes. We use your existing visuals and produce short-form video content plans that fit your pace and kitchen schedule."
      },
      {
        question: "What if customers ask detailed questions in DMs?",
        answer:
          "We follow your response playbook for hours, reservations, and menu details, then escalate edge cases to your staff when needed."
      }
    ]
  },
  {
    slug: "social-media-for-roofing-companies",
    title: "Social Media for Roofing Companies",
    niche: "roofing companies",
    audience: [
      "Residential and commercial roofing contractors",
      "Roofing teams that want steady lead flow beyond referral cycles",
      "Businesses that need trust-focused content, not trend chasing"
    ],
    struggles: [
      "hard-to-explain service quality in a short social format",
      "before-and-after work not being organized into consistent content",
      "slow follow-up to estimate requests that arrive in messages",
      "difficulty standing out against lower-priced but lower-quality competitors"
    ],
    whatWeDo: [
      "show real project progress with human-centered before-and-after storytelling",
      "explain roofing decisions in simple terms homeowners actually understand",
      "monitor comments and DMs so high-intent inquiries get fast responses",
      "highlight trust markers like workmanship, warranties, and communication standards"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Roofing brands often need recurring educational content and short-form proof across multiple platforms, making Tier 2 the most balanced starting point.",
    localAngle:
      "Maryland weather patterns make roof health a recurring homeowner concern, so timely local education can create year-round relevance.",
    ctaHeadline: "Show homeowners the quality behind every roof",
    ctaBody:
      "Our team helps roofing companies build credibility online with clear educational posts, project highlights, and responsive conversation handling.",
    faq: [
      {
        question: "Can social media support roofing inquiries?",
        answer:
          "It can support inquiries by making project quality, homeowner guidance, service areas, and the estimate process easier to understand."
      },
      {
        question: "Can we post during active project seasons only?",
        answer:
          "You can, but year-round consistency builds stronger brand recall and improves off-season lead stability."
      },
      {
        question: "How do you handle technical questions online?",
        answer:
          "We use your approved answers for common roofing concerns and route specialized technical questions to your team quickly."
      }
    ]
  },
  {
    slug: "social-media-for-law-firms",
    title: "Social Media for Law Firms",
    niche: "law firms",
    audience: [
      "Solo attorneys and small legal practices",
      "Firms that want to appear approachable and knowledgeable online",
      "Teams balancing compliance and client communication needs"
    ],
    struggles: [
      "concern about sounding too promotional or making risky claims",
      "limited time for educational content despite common client questions",
      "slow social replies causing potential clients to move on",
      "difficulty building trust before a consultation call"
    ],
    whatWeDo: [
      "translate legal topics into clear educational posts with compliant language",
      "develop recurring content themes around common client concerns",
      "manage human-first engagement so inquiries feel heard and respected",
      "position your firm as approachable without sacrificing professionalism"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Law firms often need recurring educational posts and consistent multi-platform visibility to stay discoverable and credible.",
    localAngle:
      "Maryland communities often seek legal guidance through trusted local referrals, and social media helps your reputation travel farther.",
    ctaHeadline: "Build trust before the first consultation",
    ctaBody:
      "We help law firms communicate clearly, stay active, and show the human side of legal support without hype or risky claims.",
    faq: [
      {
        question: "Can you keep content compliant for legal marketing?",
        answer:
          "Yes. We draft educational content with careful language, avoid guarantees, and align with your internal review process."
      },
      {
        question: "Will you answer legal questions in comments?",
        answer:
          "We provide general, non-advisory responses and direct users to consultations for case-specific guidance."
      },
      {
        question: "Do you support niche practice areas?",
        answer:
          "Yes. We can build tailored content pillars for family law, estate planning, business law, injury law, and other focus areas."
      }
    ]
  },
  {
    slug: "social-media-for-real-estate-agents",
    title: "Social Media for Real Estate Agents",
    niche: "real estate agents",
    audience: [
      "Independent agents and boutique broker teams",
      "Teams that want dependable listing and neighborhood content",
      "Professionals who need consistent visibility between transactions"
    ],
    struggles: [
      "posting heavily during listings but disappearing between closings",
      "content that shows homes but not agent personality or process",
      "delayed message response during fast-moving market windows",
      "difficulty balancing local expertise with engaging social formats"
    ],
    whatWeDo: [
      "create repeatable content systems for listings, neighborhoods, and market tips",
      "highlight the human journey behind buying and selling decisions",
      "coordinate platform-specific formats for reels, carousels, and shorts",
      "support active engagement to keep lead conversations moving"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Real estate benefits from frequent short-form visuals and platform-specific content, making Tier 2 a strong fit for growth.",
    localAngle:
      "Maryland buyers and sellers care deeply about neighborhood fit, school zones, and local lifestyle, which social media can communicate naturally.",
    ctaHeadline: "Stay visible between closings",
    ctaBody:
      "We help agents build a social presence that blends listing visibility, local knowledge, and approachable communication all year long.",
    faq: [
      {
        question: "Can you help with both buyer and seller content?",
        answer:
          "Yes. We build balanced content tracks for seller education, buyer preparation, neighborhood insights, and behind-the-scenes process guidance."
      },
      {
        question: "Do you post open house reminders?",
        answer:
          "Yes. We schedule timely pre-event and day-of reminders formatted for each platform."
      },
      {
        question: "How do you handle listing changes quickly?",
        answer:
          "We use a simple update workflow with your team so status changes and price updates are reflected fast."
      }
    ]
  },
  {
    slug: "social-media-for-home-improvement-companies",
    title: "Social Media for Home Improvement Companies",
    niche: "home improvement companies",
    audience: [
      "Remodelers, renovation teams, and specialty home service businesses",
      "Companies that have strong project outcomes but weak social consistency",
      "Teams that want homeowners to understand quality differences"
    ],
    struggles: [
      "large projects that are hard to summarize in short posts",
      "before-and-after photos shared without context or storytelling",
      "lead inquiries missed due to delayed DM response",
      "difficulty educating homeowners on timelines and expectations"
    ],
    whatWeDo: [
      "turn projects into educational story arcs with realistic expectations",
      "show craftsmanship details that separate your team from low-bid options",
      "keep communication friendly and prompt in comments and messages",
      "create a visual system for progress updates and final reveals"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Home improvement brands usually benefit from frequent project storytelling across multiple channels before scaling to full omni-channel execution.",
    localAngle:
      "Maryland homeowners often compare contractors online before requesting quotes, so social presence directly supports trust and close rates.",
    ctaHeadline: "Let your craftsmanship speak online",
    ctaBody:
      "We help home improvement teams present projects clearly, answer homeowner questions quickly, and stay visible in local decision cycles.",
    faq: [
      {
        question: "Can you build content from finished jobs only?",
        answer:
          "Yes, and we can also structure in-progress updates to show process quality and communication transparency."
      },
      {
        question: "Will social content help with higher-value projects?",
        answer:
          "Consistent educational and proof-based content can attract clients focused on quality rather than lowest price."
      },
      {
        question: "Do you manage replies for estimate inquiries?",
        answer:
          "Yes. We guide inquiries toward your preferred intake process so potential customers get clear next steps quickly."
      }
    ]
  },
  {
    slug: "social-media-for-fitness-studios",
    title: "Social Media for Fitness Studios",
    niche: "fitness studios",
    audience: [
      "Yoga, pilates, boxing, and training studios",
      "Studios that need recurring member engagement and class awareness",
      "Owners who want social media that feels motivating and local"
    ],
    struggles: [
      "class schedules changing faster than social updates",
      "great coaching moments not translated into repeatable content",
      "DM questions about memberships and trials waiting too long",
      "difficulty keeping current members engaged between visits"
    ],
    whatWeDo: [
      "create content pillars for classes, coaching tips, and member stories",
      "capture short-form video that reflects energy without overproducing",
      "respond quickly to common DM questions about classes and plans",
      "build simple community engagement loops that reward consistency"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Studios thrive with high-frequency visuals and platform-specific formats, making Tier 2 a strong baseline for growth and retention.",
    localAngle:
      "In Maryland communities, an independent studio can use social media to make its coaching style and member experience feel more personal than a chain.",
    ctaHeadline: "Build a stronger fitness community online",
    ctaBody:
      "We help studios keep class energy visible all week with consistent posting, video storytelling, and human interaction.",
    faq: [
      {
        question: "Can you promote seasonal fitness programs?",
        answer:
          "Yes. We build campaign calendars around challenge series, intro offers, and local events to keep classes full."
      },
      {
        question: "Do you work with multiple studio locations?",
        answer:
          "Yes. We can align shared branding while still highlighting each location's schedule and personality."
      },
      {
        question: "Will you answer membership questions in DMs?",
        answer:
          "Yes. We reply with your approved pricing and trial details, then route complex cases to your staff."
      }
    ]
  },
  {
    slug: "social-media-for-medical-practices",
    title: "Social Media for Medical Practices",
    niche: "medical practices",
    audience: [
      "Independent medical groups and specialty clinics",
      "Practices that need patient education content in plain language",
      "Teams wanting a warm social presence without overpromising"
    ],
    struggles: [
      "balancing educational value with responsible communication standards",
      "inconsistent social posting despite frequent patient questions",
      "missed engagement opportunities in comments and direct messages",
      "difficulty helping new patients understand what to expect"
    ],
    whatWeDo: [
      "build patient-friendly education series using clear and careful language",
      "show provider personality and practice values in a respectful tone",
      "maintain timely, human responses with proper escalation boundaries",
      "organize content around recurring care concerns and appointment readiness"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Medical practices often need regular educational cadence and multi-platform trust content, making Tier 2 practical for sustained visibility.",
    localAngle:
      "Maryland patients often compare local providers online before calling, so consistent social communication supports confidence and continuity.",
    ctaHeadline: "Make patient communication clearer online",
    ctaBody:
      "We help practices stay present with warm, accurate educational content and responsive engagement that respects clinical boundaries.",
    faq: [
      {
        question: "Can social content stay compliant and patient-friendly?",
        answer:
          "Yes. We prioritize educational messaging, avoid promises, and follow your compliance review workflow."
      },
      {
        question: "Do you answer medical questions directly?",
        answer:
          "We provide general informational responses and direct specific concerns to proper medical channels."
      },
      {
        question: "Can you support specialty practices?",
        answer:
          "Yes. We tailor content pillars around your specialty and common patient education needs."
      }
    ]
  },
  {
    slug: "social-media-for-dental-offices",
    title: "Social Media for Dental Offices",
    niche: "dental offices",
    audience: [
      "General and specialty dental offices",
      "Teams that want to improve patient trust and appointment consistency",
      "Practices aiming to reduce no-shows with better communication"
    ],
    struggles: [
      "educational content sounding too clinical or too generic",
      "inconsistent posting around preventive care reminders",
      "slow social replies to insurance or appointment questions",
      "difficulty showcasing patient experience in a friendly way"
    ],
    whatWeDo: [
      "publish approachable dental education that patients can act on",
      "feature team introductions and office culture to lower patient anxiety",
      "keep comment and DM responses timely and welcoming",
      "build recurring content around hygiene, prevention, and treatment education"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Dental offices usually gain from frequent educational and trust-building posts across multiple platforms, which aligns with Tier 2.",
    localAngle:
      "Maryland families often choose dentists based on trust, convenience, and communication, all of which social media can reinforce.",
    ctaHeadline: "Help patients feel comfortable before they visit",
    ctaBody:
      "We help dental offices share useful guidance, highlight team warmth, and maintain responsive communication that supports appointments.",
    faq: [
      {
        question: "Can you promote preventive care campaigns?",
        answer:
          "Yes. We create monthly preventive themes and reminders tied to simple at-home habits and checkup scheduling."
      },
      {
        question: "Do you handle pediatric and family dental messaging?",
        answer:
          "Yes. We adapt tone and examples for families while keeping messaging clear and reassuring."
      },
      {
        question: "What if patients ask detailed insurance questions?",
        answer:
          "We share approved guidance and route plan-specific questions to your front desk team quickly."
      }
    ]
  },
  {
    slug: "social-media-for-hvac-companies",
    title: "Social Media for HVAC Companies",
    niche: "HVAC companies",
    audience: [
      "Heating and cooling contractors",
      "Service teams that want stronger year-round lead consistency",
      "Businesses aiming to educate homeowners before emergencies"
    ],
    struggles: [
      "seasonal demand swings causing inconsistent visibility",
      "educational service content being too technical for homeowners",
      "slow DM responses during urgent heating or cooling issues",
      "difficulty differentiating service quality beyond price"
    ],
    whatWeDo: [
      "build seasonal content campaigns for maintenance, efficiency, and emergency readiness",
      "translate technical HVAC topics into homeowner-friendly language",
      "support faster message handling for time-sensitive inquiries",
      "highlight reliability, communication standards, and technician professionalism"
    ],
    bestTier: "Tier 2",
    tierReason:
      "HVAC teams need frequent educational content and multi-platform visibility around seasonal shifts, making Tier 2 a strong fit.",
    localAngle:
      "Maryland weather swings create recurring HVAC needs, and proactive social content helps homeowners plan instead of panic.",
    ctaHeadline: "Stay top of mind before the emergency call",
    ctaBody:
      "We help HVAC companies run steady educational social programs that build trust and keep inquiries moving quickly.",
    faq: [
      {
        question: "Can social content support both service and install work?",
        answer:
          "Yes. We split content tracks for preventative service, system replacement education, and financing awareness."
      },
      {
        question: "Will you post around seasonal campaigns?",
        answer:
          "Yes. We organize spring and fall tune-up campaigns plus weather-triggered reminders."
      },
      {
        question: "Do you manage urgent message responses?",
        answer:
          "We handle first-response communication quickly and route emergency service requests into your intake process."
      }
    ]
  },
  {
    slug: "social-media-for-auto-repair-shops",
    title: "Social Media for Auto Repair Shops",
    niche: "auto repair shops",
    audience: [
      "Independent repair shops and specialty garages",
      "Teams that want to improve trust with clear communication",
      "Shops aiming to increase repeat customer relationships"
    ],
    struggles: [
      "technical repair work being hard to explain in simple social terms",
      "low posting consistency despite daily repair stories",
      "slow responses to service questions and quote requests",
      "difficulty proving reliability compared with chain shops"
    ],
    whatWeDo: [
      "turn common repair topics into easy educational content",
      "show team expertise and service transparency with real examples",
      "maintain friendly engagement in comments and DMs",
      "feature maintenance reminders that encourage repeat visits"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Auto repair shops benefit from regular educational storytelling and multi-channel visibility, which Tier 2 supports well.",
    localAngle:
      "Maryland drivers often choose local shops based on trust and communication, not just price, so social presence directly shapes bookings.",
    ctaHeadline: "Build trust before the keys hit your counter",
    ctaBody:
      "We help auto repair teams communicate clearly online so drivers feel confident choosing your shop for routine and urgent service.",
    faq: [
      {
        question: "Can social media help with repeat maintenance visits?",
        answer:
          "Yes. Recurring maintenance reminders and educational posts keep your shop top of mind between appointments."
      },
      {
        question: "Do you help explain repairs to non-technical customers?",
        answer:
          "Yes. We write in plain language and focus on practical outcomes, safety, and cost clarity."
      },
      {
        question: "Can you feature technician expertise?",
        answer:
          "Yes. We create team-focused content that highlights certifications, quality checks, and customer care standards."
      }
    ]
  },
  {
    slug: "social-media-for-salons-and-spas",
    title: "Social Media for Salons & Spas",
    niche: "salons and spas",
    audience: [
      "Hair salons, esthetic studios, and spa brands",
      "Businesses that rely on visual storytelling and repeat bookings",
      "Teams needing support with promos, launches, and engagement"
    ],
    struggles: [
      "beautiful results posted irregularly with no campaign rhythm",
      "difficulty showing service value beyond discounted offers",
      "inconsistent replies to booking and service questions",
      "limited cross-platform strategy for reels, TikTok, and shorts"
    ],
    whatWeDo: [
      "build visual content systems that showcase transformations and care",
      "create short-form video concepts for services, products, and team moments",
      "manage engagement so potential clients get prompt, friendly responses",
      "align promotions and launches with platform-specific formats"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Salons and spas usually have enough visual and educational material for frequent multi-platform storytelling, which makes Tier 2 a practical fit.",
    localAngle:
      "Maryland beauty and wellness clients often discover new providers through social feeds before visiting or booking online.",
    ctaHeadline: "Keep your chairs and treatment rooms top of mind",
    ctaBody:
      "We help salons and spas show consistent quality online with warm engagement, polished visuals, and reliable booking support.",
    faq: [
      {
        question: "Can you promote service bundles and seasonal offers?",
        answer:
          "Yes. We structure offers into campaigns that stay clear, attractive, and aligned with your service calendar."
      },
      {
        question: "Do you help with product highlights too?",
        answer:
          "Yes. We blend service-focused and product-focused content so your feed supports both bookings and retail sales."
      },
      {
        question: "Can you manage comments during busy booking windows?",
        answer:
          "Yes. We monitor engagement and keep conversations moving with your approved booking links and response flow."
      }
    ]
  },
  {
    slug: "social-media-for-coffee-shops",
    title: "Social Media for Coffee Shops",
    niche: "coffee shops",
    audience: [
      "Independent coffee shops and roasters",
      "Teams wanting stronger neighborhood awareness and repeat visits",
      "Brands that need consistency around menu and community events"
    ],
    struggles: [
      "daily specials and seasonal drinks not reaching enough locals",
      "great in-store atmosphere not translating to social content",
      "DM and comment questions about hours and offerings going unanswered",
      "difficulty standing out against larger chains with bigger budgets"
    ],
    whatWeDo: [
      "build recurring local storytelling around drinks, people, and place",
      "create quick short-form content for launches and cafe moments",
      "keep social replies helpful so customer questions get answered quickly",
      "highlight loyalty, events, and neighborhood partnerships"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Coffee shops benefit from frequent content and cross-platform visibility, so Tier 2 provides enough cadence to stay top of feed.",
    localAngle:
      "In Maryland neighborhoods, coffee shops often become community anchors, and social media helps that community feel stay visible online.",
    ctaHeadline: "Give nearby customers more reasons to stop in",
    ctaBody:
      "We help coffee shops stay consistent online so your drinks, people, and local vibe reach both new faces and regulars.",
    faq: [
      {
        question: "Can you promote daily specials quickly?",
        answer:
          "Yes. We set up fast-turn content workflows for specials, launches, and event reminders."
      },
      {
        question: "Do you create content from ordinary cafe moments?",
        answer:
          "Yes. Everyday moments often perform best when captured naturally with clear storytelling and timing."
      },
      {
        question: "Will you respond to customer questions on social?",
        answer:
          "Yes. We manage friendly first responses and keep conversations aligned with your service style."
      }
    ]
  },
  {
    slug: "social-media-for-boutiques",
    title: "Social Media for Boutiques",
    niche: "boutiques",
    audience: [
      "Independent retail boutiques and lifestyle shops",
      "Store owners who want consistent in-store and online traffic",
      "Teams balancing inventory changes with customer engagement"
    ],
    struggles: [
      "new arrivals posted sporadically with no strategy",
      "difficulty maintaining engagement outside launch windows",
      "slow response to sizing and availability questions",
      "inconsistent storytelling around brand personality"
    ],
    whatWeDo: [
      "organize product storytelling around drops, arrivals, and seasonal edits",
      "create quick short-form showcases for styling and in-store moments",
      "manage social conversations around fit, stock, and shopping options",
      "build a repeatable posting rhythm that supports steady traffic"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Boutiques usually need frequent visual updates and cross-platform content to keep inventory discovery high, making Tier 2 a strong fit.",
    localAngle:
      "Maryland shoppers often discover local boutiques through reels and stories before planning an in-store visit.",
    ctaHeadline: "Keep every new arrival visible",
    ctaBody:
      "We help boutiques turn daily merchandising into social content that feels personal, polished, and easy to shop from.",
    faq: [
      {
        question: "Can you handle frequent inventory updates?",
        answer:
          "Yes. We create a quick content handoff process so arrivals and restocks get posted while they are still timely."
      },
      {
        question: "Do you support event promotions like trunk shows?",
        answer:
          "Yes. We build countdown and reminder content for in-store events and collaborations."
      },
      {
        question: "Can social posts improve in-store traffic?",
        answer:
          "Consistent local storytelling and clear calls to visit can significantly support walk-in awareness and repeat shoppers."
      }
    ]
  },
  {
    slug: "social-media-for-event-venues",
    title: "Social Media for Event Venues",
    niche: "event venues",
    audience: [
      "Event spaces, halls, and private venue operators",
      "Teams looking to attract planners, couples, and local organizations",
      "Venues that need to showcase atmosphere and service reliability"
    ],
    struggles: [
      "beautiful spaces not presented consistently online",
      "content focused on aesthetics but not logistics and support",
      "inquiry messages going stale during high-demand seasons",
      "difficulty differentiating venue personality in a crowded market"
    ],
    whatWeDo: [
      "show venue flexibility with event-type-specific content series",
      "balance visual atmosphere with practical planning information",
      "manage inquiry engagement so prospects move toward tours quickly",
      "create reels and shorts that highlight flow, layout, and service"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Event venues gain from frequent visual storytelling and platform-tailored video, making Tier 2 the right balance for growth.",
    localAngle:
      "Maryland planners often compare multiple venues online before booking tours, so clear social communication helps you stand out early.",
    ctaHeadline: "Show more than a pretty room",
    ctaBody:
      "We help venues showcase both atmosphere and planning confidence, so social followers become tour requests and booked dates.",
    faq: [
      {
        question: "Can you promote different event types separately?",
        answer:
          "Yes. We can run tailored content tracks for weddings, corporate events, social gatherings, and nonprofit functions."
      },
      {
        question: "Do you handle inquiry responses in social DMs?",
        answer:
          "Yes. We provide warm first-response messaging and route leads to your tour or quote process quickly."
      },
      {
        question: "Can social media help fill off-peak dates?",
        answer:
          "Yes. Strategic campaign content and targeted messaging can improve visibility for weekday and off-season availability."
      }
    ]
  },
  {
    slug: "social-media-for-wedding-vendors",
    title: "Social Media for Wedding Vendors",
    niche: "wedding vendors",
    audience: [
      "Photographers, planners, florists, and wedding service providers",
      "Vendors who need consistent visibility between wedding weekends",
      "Teams wanting to turn social interest into consultation calls"
    ],
    struggles: [
      "incredible event work posted with little strategic structure",
      "difficulty keeping lead conversations warm during booking cycles",
      "content that looks good but does not explain service process",
      "inconsistent cross-platform presence during peak season"
    ],
    whatWeDo: [
      "shape event highlights into story-based content that converts",
      "build educational posts around planning timelines and expectations",
      "support responsive engagement for consultation and availability inquiries",
      "format content for platform-specific reach and shareability"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Wedding vendors see strong value from recurring visual storytelling and platform diversity, making Tier 2 an effective standard.",
    localAngle:
      "Maryland couples often book vendors based on trust and personality fit, and social media is where that fit becomes visible.",
    ctaHeadline: "Stay memorable between wedding weekends",
    ctaBody:
      "We help wedding vendors keep momentum strong with human-first social content that supports inquiries, consultations, and bookings.",
    faq: [
      {
        question: "Can you handle seasonal booking pushes?",
        answer:
          "Yes. We build campaign sequences around peak engagement season, venue showcases, and consultation calls."
      },
      {
        question: "Do you coordinate content from multiple events each month?",
        answer:
          "Yes. We organize assets into a planned calendar so each event supports long-term visibility."
      },
      {
        question: "Can social content communicate service process, not just highlights?",
        answer:
          "Yes. We include expectation-setting posts that explain what couples can expect from inquiry to event day."
      }
    ]
  },
  {
    slug: "social-media-for-churches",
    title: "Social Media for Churches",
    niche: "churches",
    audience: [
      "Local churches and faith communities",
      "Teams that want to communicate events and support consistently",
      "Leaders looking for warm, accessible community outreach"
    ],
    struggles: [
      "important updates not reaching members in time",
      "difficulty balancing spiritual messaging with practical communication",
      "limited volunteer capacity for ongoing social management",
      "inconsistent response to messages from new visitors"
    ],
    whatWeDo: [
      "create clear content rhythms for services, events, and outreach",
      "support welcoming responses to visitor questions and comments",
      "format announcements so each platform is easy to follow",
      "highlight community stories that reflect care and connection"
    ],
    bestTier: "Tier 1",
    tierReason:
      "Many churches succeed with a dependable Meta-based foundation first, then scale channels as volunteer and staff capacity grows.",
    localAngle:
      "Across Maryland communities, church social pages often serve as both information hubs and first-touch welcome spaces.",
    ctaHeadline: "Make every community update easier to find",
    ctaBody:
      "We help churches stay consistent online so events, support resources, and welcoming communication reach people who need them.",
    faq: [
      {
        question: "Can you post service updates and event reminders weekly?",
        answer:
          "Yes. We build recurring schedules for worship services, groups, outreach events, and announcements."
      },
      {
        question: "Do you help respond to messages from new visitors?",
        answer:
          "Yes. We provide warm first-response messaging and route pastoral or ministry-specific inquiries as needed."
      },
      {
        question: "Can content reflect our church voice and values?",
        answer:
          "Yes. We align language, tone, and content pillars with your leadership guidance and communication standards."
      }
    ]
  },
  {
    slug: "social-media-for-nonprofits",
    title: "Social Media for Nonprofits",
    niche: "nonprofits",
    audience: [
      "Local nonprofits and mission-driven organizations",
      "Teams that need stronger awareness, participation, and donor communication",
      "Organizations balancing impact work with limited marketing resources"
    ],
    struggles: [
      "mission stories told inconsistently due to capacity constraints",
      "supporter engagement dropping between campaigns and events",
      "messages and comments from volunteers not answered quickly",
      "difficulty turning awareness into action"
    ],
    whatWeDo: [
      "shape mission impact into story arcs people understand and remember",
      "create recurring content for events, volunteer asks, and donor updates",
      "maintain responsive, human engagement to keep supporters connected",
      "build platform-specific content that supports broader community reach"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Nonprofits usually need multi-channel visibility and recurring video storytelling to maintain momentum, which Tier 2 supports.",
    localAngle:
      "Maryland nonprofit communities are highly relationship-driven, so social communication that feels personal can improve volunteer and donor retention.",
    ctaHeadline: "Keep your mission visible all year",
    ctaBody:
      "We help nonprofits communicate impact clearly, engage supporters warmly, and maintain steady momentum between major campaigns.",
    faq: [
      {
        question: "Can you support event and fundraising campaigns?",
        answer:
          "Yes. We can build campaign calendars that combine storytelling, reminders, and clear calls to action."
      },
      {
        question: "Do you help with volunteer recruitment messaging?",
        answer:
          "Yes. We create role-specific posts and community-centered copy that encourages participation."
      },
      {
        question: "Can social content support grant credibility?",
        answer:
          "Consistent impact communication can strengthen public trust and reinforce your organization's long-term credibility."
      }
    ]
  },
  {
    slug: "social-media-for-local-retail-stores",
    title: "Social Media for Local Retail Stores",
    niche: "local retail stores",
    audience: [
      "Independent local retail shops",
      "Store teams that need steady visibility around inventory and events",
      "Retail brands wanting stronger local loyalty"
    ],
    struggles: [
      "new product drops posted inconsistently",
      "limited strategy for turning social followers into in-store buyers",
      "message response delays around stock and hours",
      "difficulty standing out against larger online competitors"
    ],
    whatWeDo: [
      "build practical product storytelling systems for weekly consistency",
      "create social campaigns around local events and seasonal demand",
      "support responsive communication for common shopping questions",
      "adapt content formats to maximize platform-by-platform visibility"
    ],
    bestTier: "Tier 2",
    tierReason:
      "Retail stores often need higher visual frequency and multi-platform reach to keep inventory moving, which Tier 2 provides.",
    localAngle:
      "Maryland shoppers often decide where to browse based on what they see in social feeds that same week.",
    ctaHeadline: "Keep your shelves and stories moving",
    ctaBody:
      "We help local retail teams stay visible with consistent product content, friendly communication, and clear calls to visit or shop.",
    faq: [
      {
        question: "Can you post quickly when inventory changes?",
        answer:
          "Yes. We use a fast content handoff system so arrivals and updates remain timely."
      },
      {
        question: "Do social posts help in-store foot traffic?",
        answer:
          "Consistent local storytelling and event reminders can keep current reasons to visit visible to nearby shoppers."
      },
      {
        question: "Can you support holiday shopping campaigns?",
        answer:
          "Yes. We build seasonal campaigns with clear offer timing and platform-specific formats."
      }
    ]
  },
  {
    slug: "social-media-for-contractors",
    title: "Social Media for Contractors",
    niche: "contractors",
    audience: [
      "General contractors and specialty trade businesses",
      "Teams that need trust-focused social proof for larger projects",
      "Owners who want quality leads, not random low-intent traffic"
    ],
    struggles: [
      "project expertise not communicated clearly online",
      "job-site progress content being underused",
      "slow responses to inquiry messages and estimate requests",
      "difficulty differentiating craftsmanship and process quality"
    ],
    whatWeDo: [
      "present job progress in clear, homeowner-friendly social stories",
      "highlight process reliability, communication, and project outcomes",
      "support prompt DM handling for high-intent lead conversations",
      "build multi-channel content systems that keep your pipeline visible"
    ],
    bestTier: "Tier 3",
    tierReason:
      "Contractors with larger project pipelines often benefit from omni-channel visibility and deeper engagement, making Tier 3 the strongest long-term fit.",
    localAngle:
      "In Maryland, contractors are frequently selected through trust signals and visible project consistency, both online and offline.",
    ctaHeadline: "Turn job-site quality into digital trust",
    ctaBody:
      "We help contractors build a visible brand presence that reflects real workmanship, responsive communication, and local credibility.",
    faq: [
      {
        question: "Can social media help attract better-fit projects?",
        answer:
          "Quality-focused content can help prospective clients understand your process, communication standards, and project fit before they request an estimate."
      },
      {
        question: "Do you support multi-platform posting for contractors?",
        answer:
          "Yes. Tier 3 supports cross-posting to up to 10 platforms with strategic adaptation per channel."
      },
      {
        question: "Can you keep lead conversations active in DMs?",
        answer:
          "Yes. We provide first-response support and route estimate requests into your preferred workflow quickly."
      }
    ]
  }
];

const industryPlaybooks: Record<string, IndustryPlaybook> = {
  "social-media-for-local-businesses": {
    contentPillars: [
      "Answers to the questions customers ask before visiting, booking, or requesting a quote",
      "Owner and team stories that make the business easier to recognize",
      "Current products, services, schedules, and seasonal reasons to visit",
      "Community partnerships and local involvement with a real connection to the business"
    ],
    captureList: [
      "A short weekly clip showing the business in motion",
      "Three useful photos of people, products, work, or the customer environment",
      "One customer question and the plain-language answer your team gives",
      "Any time-sensitive offer, event, schedule change, or service update"
    ],
    engagementFocus: [
      "Potential customers interacting with relevant local topics",
      "Nearby organizations and complementary businesses",
      "DMs and comments asking about fit, availability, hours, or next steps"
    ],
    leadPath:
      "A local customer may first notice a useful comment, then visit your profile, review recent posts, and finally ask a practical question. The page needs enough current information and warmth to make that next step feel safe."
  },
  "social-media-for-restaurants": {
    contentPillars: [
      "Menu stories that explain ingredients, preparation, or the reason a dish is special",
      "Chef and staff moments that show the people behind the dining experience",
      "Atmosphere, events, and practical visit information",
      "Seasonal features, recurring specials, and guest questions answered clearly"
    ],
    captureList: [
      "Vertical clips of a dish being prepared, plated, or served",
      "Wide and close photos that show both atmosphere and detail",
      "A quick staff recommendation or menu explanation",
      "Accurate notes about specials, reservation details, hours, and event dates"
    ],
    engagementFocus: [
      "Local food conversations where the restaurant can participate naturally",
      "Nearby event, hospitality, and community accounts",
      "DMs and comments about reservations, menus, dietary questions, and hours"
    ],
    leadPath:
      "A diner often moves from a food photo to the profile, checks atmosphere and recent activity, then asks about a table, menu item, or event. Current details and a timely response help turn interest into a visit."
  },
  "social-media-for-roofing-companies": {
    contentPillars: [
      "Project stories that explain the condition, recommendation, and finished result",
      "Homeowner education about inspections, materials, ventilation, and maintenance",
      "Weather-aware guidance without using storms to create fear",
      "Team, safety, cleanup, communication, warranty, and workmanship standards"
    ],
    captureList: [
      "Safe before, progress, and completion photos with customer permission",
      "Short field explanations from an estimator or project lead",
      "Material and detail close-ups that show what homeowners normally miss",
      "Service-area and scheduling updates that do not reveal private addresses"
    ],
    engagementFocus: [
      "Homeowners publicly asking general roof or exterior questions",
      "Realtors, property professionals, and complementary home service businesses",
      "DMs about inspections, leaks, storm concerns, service areas, and estimates"
    ],
    leadPath:
      "A homeowner may save an educational post long before a leak or replacement becomes urgent. When the need arrives, visible project quality, calm explanations, and a quick path to an inspection help the company make the shortlist."
  },
  "social-media-for-law-firms": {
    contentPillars: [
      "General explanations of legal processes and common terminology",
      "Preparation guidance for consultations, documents, and next steps",
      "Attorney and staff introductions that make the firm more approachable",
      "Careful reminders about deadlines or common issues without discussing individual cases"
    ],
    captureList: [
      "Short attorney answers to one general question at a time",
      "Professional team and office photos without client information",
      "A list of recurring intake questions that can become educational posts",
      "Firm updates, speaking events, community involvement, and schedule changes"
    ],
    engagementFocus: [
      "Community and professional conversations where general education is appropriate",
      "Referral partners and organizations connected to the firm's practice areas",
      "DMs that need a respectful intake response rather than legal advice"
    ],
    leadPath:
      "A potential client is often looking for clarity and reassurance before contacting a lawyer. General education can reduce uncertainty, but the public response should always direct case-specific questions into a private consultation process."
  },
  "social-media-for-real-estate-agents": {
    contentPillars: [
      "Buyer and seller preparation explained in small, useful steps",
      "Neighborhood and property stories that add context beyond listing photos",
      "The agent's working style, communication process, and local knowledge",
      "Open houses, market updates, vendor guidance, and milestones with clear timing"
    ],
    captureList: [
      "Vertical property walkthrough clips and detail shots",
      "Neighborhood footage tied to a real listing or customer question",
      "Short answers to financing, preparation, inspection, or closing questions",
      "Accurate status, open-house, and availability updates"
    ],
    engagementFocus: [
      "Local home, neighborhood, relocation, and community conversations",
      "Lenders, inspectors, contractors, and other real referral relationships",
      "DMs from buyers and sellers asking about properties, timing, or preparation"
    ],
    leadPath:
      "People may follow an agent for months before they are ready to move. A steady mix of local knowledge, process education, and real availability gives them a reason to remember who to contact when the timing changes."
  },
  "social-media-for-home-improvement-companies": {
    contentPillars: [
      "Project timelines from the homeowner's point of view",
      "Material, design, and process decisions explained without jargon",
      "Before-and-after stories that include the problem and the solution",
      "Communication, cleanliness, scheduling, and craftsmanship standards"
    ],
    captureList: [
      "Before, progress, detail, and completion images from approved projects",
      "A project lead explaining one important decision",
      "Material samples or construction details customers commonly compare",
      "A weekly answer to a budget, timing, preparation, or disruption question"
    ],
    engagementFocus: [
      "Homeowners researching renovations and project planning",
      "Designers, real estate professionals, suppliers, and complementary trades",
      "DMs about estimates, project fit, service areas, timelines, and next steps"
    ],
    leadPath:
      "Homeowners rarely choose a major improvement partner from one post. They review several projects, look for communication clues, and decide whether the company seems organized enough to invite into their home."
  },
  "social-media-for-fitness-studios": {
    contentPillars: [
      "Beginner guidance that makes the first class feel less intimidating",
      "Coach education, movement tips, and modifications explained responsibly",
      "Class atmosphere, schedules, programs, and community routines",
      "Member stories and milestones shared only with clear permission"
    ],
    captureList: [
      "Short class clips that show coaching and energy without disrupting members",
      "A coach answering one common beginner question",
      "Current schedule, trial, challenge, or workshop details",
      "Space, equipment, and arrival information for first-time visitors"
    ],
    engagementFocus: [
      "Local wellness and community conversations relevant to the studio",
      "Complementary health professionals and nearby businesses",
      "DMs about class fit, schedules, trials, memberships, and accessibility"
    ],
    leadPath:
      "A future member often wants to know whether the studio feels welcoming before trying a class. Showing the coaching style, beginner experience, and a prompt answer to practical questions can lower that first-visit barrier."
  },
  "social-media-for-medical-practices": {
    contentPillars: [
      "General patient education written in clear, responsible language",
      "What to expect before, during, and after common appointment types",
      "Provider and staff introductions that build familiarity",
      "Office updates, preventive reminders, and service information with appropriate review"
    ],
    captureList: [
      "Provider answers to one general educational question",
      "Team and environment photos without patient information",
      "Approved appointment preparation and office process details",
      "Common non-clinical questions from the front desk"
    ],
    engagementFocus: [
      "General health education conversations where the practice can share approved information",
      "Community organizations and complementary providers with appropriate relationships",
      "DMs that need office guidance, privacy protection, and clinical escalation"
    ],
    leadPath:
      "A patient may use social content to decide whether a practice feels understandable and welcoming. The account can explain general processes, but individual health questions must move to secure clinical channels."
  },
  "social-media-for-dental-offices": {
    contentPillars: [
      "Preventive care education and common dental questions",
      "First-visit, treatment, and comfort expectations explained simply",
      "Dentist, hygienist, assistant, and front-office introductions",
      "Office technology, services, scheduling, and insurance process information"
    ],
    captureList: [
      "Short dentist or hygienist answers to general questions",
      "Welcoming office and team photos without patient information",
      "Approved demonstrations using models or non-patient visuals",
      "Recurring scheduling, preparation, and insurance questions"
    ],
    engagementFocus: [
      "Local family, wellness, and community conversations where general education fits",
      "Pediatric, medical, orthodontic, and community referral relationships",
      "DMs about appointments, services, insurance process, and urgent office contact"
    ],
    leadPath:
      "Dental anxiety and uncertainty can delay contact. Friendly team visibility, plain-language process explanations, and a clear booking route help people understand what the first step will feel like."
  },
  "social-media-for-hvac-companies": {
    contentPillars: [
      "Seasonal maintenance and comfort guidance timed before peak demand",
      "Repair-versus-replacement factors explained without pressure",
      "Technician, installation, safety, and home-care process stories",
      "Airflow, filter, efficiency, thermostat, and indoor comfort education"
    ],
    captureList: [
      "Approved equipment, installation, maintenance, and clean-work-area photos",
      "A technician answering one common homeowner question",
      "Seasonal service availability and preparation details",
      "Close-ups that help explain a component or maintenance issue"
    ],
    engagementFocus: [
      "Homeowners asking general heating, cooling, and indoor comfort questions",
      "Realtors, property managers, contractors, and complementary home services",
      "DMs about service areas, scheduling, system concerns, and estimate requests"
    ],
    leadPath:
      "Homeowners may follow maintenance advice in mild weather and need urgent help months later. Consistent education makes the company familiar before the system stops working, while clear replies route urgent needs properly."
  },
  "social-media-for-auto-repair-shops": {
    contentPillars: [
      "Maintenance timing and warning signs explained without creating fear",
      "Repair process, diagnostic steps, parts, and quality standards",
      "Technician introductions and the people customers trust with their vehicles",
      "Seasonal driving preparation, shop updates, and appointment guidance"
    ],
    captureList: [
      "Approved vehicle components and repair-progress details without license plates",
      "A technician explaining one symptom or maintenance question",
      "Shop, equipment, team, and clean-work-process photos",
      "Accurate scheduling, service, and seasonal preparation information"
    ],
    engagementFocus: [
      "Local drivers discussing maintenance and general vehicle concerns",
      "Dealers, detailers, towing providers, and other appropriate automotive partners",
      "DMs about symptoms, services, appointments, estimates, and shop procedures"
    ],
    leadPath:
      "Drivers want to know whether a shop will explain the problem and treat them fairly. Educational posts and visible process standards can build familiarity, but diagnosis and price decisions should move into the shop's normal intake process."
  },
  "social-media-for-salons-and-spas": {
    contentPillars: [
      "Service results, maintenance expectations, and preparation guidance",
      "Stylist, technician, and provider specialties",
      "The client experience, atmosphere, products, and aftercare education",
      "Seasonal availability, new services, booking reminders, and policies"
    ],
    captureList: [
      "Before-and-after photos or clips with clear client permission",
      "Short provider explanations of service fit and aftercare",
      "Space, product, tool, and process details",
      "Current appointment availability and policy information"
    ],
    engagementFocus: [
      "Local beauty, wellness, event, and self-care conversations",
      "Wedding vendors, boutiques, fitness studios, and complementary providers",
      "DMs about service fit, pricing basics, availability, preparation, and booking"
    ],
    leadPath:
      "A client often saves several examples before booking. Consistent work, clear provider specialties, realistic maintenance information, and a quick answer about fit or availability help move that interest toward an appointment."
  },
  "social-media-for-coffee-shops": {
    contentPillars: [
      "Drink, food, ingredient, and preparation stories",
      "Barista, baker, owner, and regular community moments",
      "Seasonal menus, events, hours, workspace, and visit information",
      "Local suppliers, artists, organizations, and partnerships"
    ],
    captureList: [
      "Short preparation clips with sound, movement, and close detail",
      "Morning atmosphere and quieter space photos",
      "A staff recommendation or explanation of a seasonal item",
      "Accurate event, menu, hour, and availability updates"
    ],
    engagementFocus: [
      "Nearby residents, workers, students, and visitors discussing local places",
      "Artists, makers, food businesses, and community organizations",
      "DMs and comments about hours, events, menu details, seating, and orders"
    ],
    leadPath:
      "People may first notice a drink or event, then scan the profile for atmosphere, hours, and current activity. A friendly reply and a clear reason to visit can turn casual discovery into a regular habit."
  },
  "social-media-for-boutiques": {
    contentPillars: [
      "New arrivals, styling ideas, product details, and practical use",
      "Owner taste, buying decisions, staff picks, and shop personality",
      "Seasonal collections, events, gift guidance, and inventory updates",
      "Local makers, collaborations, and customer features with permission"
    ],
    captureList: [
      "Vertical try-on, styling, product-detail, or unboxing clips",
      "Clean photos showing scale, texture, color, and use",
      "A staff pick with a specific reason behind the recommendation",
      "Accurate availability, event, size, shipping, and store-hour information"
    ],
    engagementFocus: [
      "Local style, gift, shopping, and community conversations",
      "Makers, salons, venues, restaurants, and complementary shops",
      "DMs about sizing, inventory, holds, shipping, events, and store visits"
    ],
    leadPath:
      "A shopper may save an item, ask about size or availability, and decide whether to visit based on the response. Current inventory context and human product knowledge make social feel like an extension of the shop floor."
  },
  "social-media-for-event-venues": {
    contentPillars: [
      "Room layouts, capacities, flow, amenities, and planning options",
      "Real event details and transformations shared with permission",
      "Planning timelines, vendor coordination, and frequently asked questions",
      "Venue team, service approach, available dates, and different event types"
    ],
    captureList: [
      "Empty, setup, detail, and finished-room clips from approved events",
      "A venue manager answering one planning question",
      "Entrances, parking, accessibility, staging, and guest-flow details",
      "Accurate date, tour, package, and inquiry information"
    ],
    engagementFocus: [
      "Public wedding, corporate, nonprofit, and celebration planning conversations",
      "Planners, caterers, photographers, florists, entertainers, and real vendor partners",
      "DMs about dates, capacity, tours, packages, policies, and event fit"
    ],
    leadPath:
      "Planners compare spaces long before requesting a tour. A profile that answers practical questions, shows several event types, and responds clearly about fit can help the venue earn a serious inquiry."
  },
  "social-media-for-wedding-vendors": {
    contentPillars: [
      "The planning process and what couples can expect at each stage",
      "Real work, details, and finished celebrations shared with permission",
      "Vendor personality, working style, packages, and preparation guidance",
      "Seasonal booking windows, venue relationships, and common decision questions"
    ],
    captureList: [
      "Approved setup, detail, behind-the-scenes, and finished-event clips",
      "A vendor answering one timeline, package, or preparation question",
      "Tools, materials, sketches, samples, or process details",
      "Accurate availability, consultation, travel, and inquiry information"
    ],
    engagementFocus: [
      "Couples publicly discussing planning needs relevant to the service",
      "Venues, planners, photographers, florists, caterers, and trusted vendor partners",
      "DMs about dates, packages, fit, availability, travel, and next steps"
    ],
    leadPath:
      "Couples may follow a vendor through an entire planning season before inquiring. Consistent work, useful guidance, clear personality, and fast availability answers help them decide whether the relationship feels right."
  },
  "social-media-for-churches": {
    contentPillars: [
      "Service, program, group, and event information that is easy to act on",
      "Pastoral and staff messages that feel welcoming rather than promotional",
      "Community service, volunteer needs, and partnerships explained clearly",
      "First-visit guidance, accessibility, family information, and weekly reminders"
    ],
    captureList: [
      "Welcoming exterior, space, team, and approved community photos",
      "Short messages from ministry leaders or volunteers",
      "Accurate dates, times, locations, registration links, and accessibility details",
      "Service and outreach moments captured with consent and care"
    ],
    engagementFocus: [
      "Community organizations, local needs, and public service conversations",
      "Partner nonprofits, schools, ministries, and neighborhood groups",
      "DMs about visiting, programs, support, volunteering, and event details"
    ],
    leadPath:
      "A first-time visitor may review social pages to understand the atmosphere, schedule, family options, and what to expect. Clear information and a warm response can make the first visit less uncertain."
  },
  "social-media-for-nonprofits": {
    contentPillars: [
      "The need, program, and next action explained without exaggeration",
      "Volunteer, donor, staff, and partner stories shared with permission",
      "Event, campaign, service, and resource information",
      "Transparent updates that show the work while protecting participant dignity"
    ],
    captureList: [
      "Approved program, event, preparation, team, and resource-distribution visuals",
      "Short staff or volunteer explanations of how participation works",
      "Accurate dates, goals, registration, donation, and eligibility information",
      "Questions supporters repeatedly ask before acting"
    ],
    engagementFocus: [
      "Community conversations connected to the mission and people served",
      "Funders, partner organizations, volunteers, and public resources",
      "DMs about services, eligibility, volunteering, donations, events, and urgent needs"
    ],
    leadPath:
      "Supporters need to understand both the mission and the next practical action. Clear program context, respectful stories, and prompt answers help people decide whether to volunteer, donate, attend, refer, or request help."
  },
  "social-media-for-local-retail-stores": {
    contentPillars: [
      "Products in real use, staff recommendations, and buying guidance",
      "New arrivals, seasonal inventory, events, and timely store updates",
      "Owner, employee, maker, and supplier stories",
      "Gift ideas, comparisons, care tips, and answers to common product questions"
    ],
    captureList: [
      "Product close-ups, demonstrations, arrivals, and display changes",
      "A staff pick with a specific use or customer in mind",
      "Store atmosphere, team, event, and behind-the-scenes clips",
      "Accurate inventory, hold, pickup, return, event, and hour information"
    ],
    engagementFocus: [
      "Local shopping, gift, hobby, home, style, and community conversations",
      "Makers, neighboring businesses, events, and complementary shops",
      "DMs about availability, sizes, variants, holds, pickup, and store visits"
    ],
    leadPath:
      "A shopper often discovers one product, checks whether the store feels current and helpful, then asks about availability. A knowledgeable response can bridge the gap between browsing a feed and walking through the door."
  },
  "social-media-for-contractors": {
    contentPillars: [
      "Project scope, process, progress, and finished outcomes",
      "Materials, decisions, site preparation, and homeowner expectations",
      "Crew, safety, communication, cleanliness, and quality standards",
      "Seasonal planning, service areas, timelines, and common estimate questions"
    ],
    captureList: [
      "Approved before, progress, detail, and completion visuals",
      "Short field explanations from owners, estimators, or project leads",
      "Materials, tools, protection, cleanup, and craftsmanship details",
      "Accurate service-area, consultation, scheduling, and preparation information"
    ],
    engagementFocus: [
      "Homeowners and property owners publicly discussing relevant projects",
      "Designers, realtors, property managers, suppliers, and complementary trades",
      "DMs about scope, service areas, estimates, timing, and project fit"
    ],
    leadPath:
      "A property owner may watch several projects before requesting an estimate. Detailed work, clear expectations, and visible communication standards help them judge whether the contractor is a fit beyond price alone."
  }
};

const industryDepthGuides: Record<string, IndustryDepthGuide> = {
  "social-media-for-local-businesses": {
    decisionJourney:
      "A nearby customer may notice the business in a community post, visit the profile, scan recent work or products, and then check hours, location, reviews, or the easiest way to ask a question. The profile should make that path feel connected. Recent posts establish that the business is active, practical captions answer basic questions, and a prompt human reply gives the customer a reason to continue instead of returning to a crowded list of alternatives.",
    weeklyRhythm:
      "A workable week can begin with one useful customer question, one current business moment, and one community connection. The team might capture a new arrival, a short process clip, a staff recommendation, or a seasonal reminder while normal work is happening. We turn that small batch into the formats required by the selected plan, prepare captions and approvals, and keep the next capture request specific enough that it does not become another large assignment for the owner.",
    reviewBoundaries:
      "Local businesses often have informal knowledge that needs to become clear public guidance. We document current hours, service areas, pricing language, promotion limits, refund or booking rules, and topics that must go to an owner. Customer photos and stories are used only with permission. If a post refers to a partner, event, neighborhood, or public organization, names and details are checked before publishing so community-friendly content also stays accurate.",
    conversationHandoff:
      "The social team can answer approved questions, acknowledge comments, follow suitable prospects, and join relevant public conversations. A request becomes a handoff when it involves a quote, appointment, complaint, private account detail, unusual accommodation, or decision only the business can make. The customer should not have to repeat the whole conversation. We pass along the contact details, original question, platform, and agreed next step so the internal team can respond with context.",
    successSignals:
      "Useful progress is broader than follower growth. We look for more profile visits from the right area, saves on practical posts, shares into local conversations, questions that show real interest, and DMs that move toward a visit, booking, or estimate. We also watch which recurring questions deserve a permanent answer. The monthly plan improves when those signals shape the next topics, response guide, and capture list instead of chasing a new trend every week."
  },
  "social-media-for-restaurants": {
    decisionJourney:
      "A diner often moves quickly from a food photo or local recommendation to the profile, menu, hours, reservation details, and directions. They may also look for the atmosphere, portion style, dietary options, parking, or whether the restaurant fits a family meal, date, or group event. Social content should reduce those unknowns without making every post a sales pitch. A timely reply about availability or menu details can help the guest decide while the plan is still active.",
    weeklyRhythm:
      "Restaurant capture works best when it follows prep and service rather than interrupting them. One short session can document a featured dish, a quick kitchen process, the dining room before service, and a staff recommendation. Weekly updates should also cover sold-out items, changing hours, events, and reservation needs. We organize those assets in advance, leave room for timely specials, and confirm that anything promoted will still be available when the post reaches local diners.",
    reviewBoundaries:
      "Menu names, ingredients, prices, service times, reservation rules, and allergen language need a reliable approval source. We avoid making dietary or allergy assurances that the restaurant has not approved, and we keep private guest matters out of public replies. Staff and customer images require appropriate permission. When a special, event, or schedule changes after approval, the team needs a fast update path so an attractive post does not send guests toward outdated information.",
    conversationHandoff:
      "Approved replies can cover hours, location, reservation links, common menu questions, takeout, and general event information. The restaurant team takes over for allergy concerns, complaints, refunds, large-party details, lost items, or availability that changes in real time. We preserve the original question and urgency when handing it off. This keeps the guest from being bounced between accounts and gives managers enough context to resolve the issue directly.",
    successSignals:
      "For restaurants, a useful post may create saves for later, shares among a group, menu-page visits, reservation questions, direction requests, or DMs about an event. Comments can also reveal confusion about hours, ordering, parking, or dietary options. We use those patterns to improve future captions and profile details. The goal is not to make every piece of content viral; it is to stay memorable, current, and easy to choose when people decide where to eat."
  },
  "social-media-for-roofing-companies": {
    decisionJourney:
      "A homeowner may first see a storm reminder, project transformation, or answer to a roof question. From there, they often inspect recent jobs, service areas, workmanship details, warranty language, and the estimate process before reaching out. Because roofing decisions involve cost and trust, one polished image is not enough. A consistent record of real projects, clear explanations, and respectful responses helps a homeowner understand how the company works before sharing an address or scheduling an inspection.",
    weeklyRhythm:
      "The strongest roofing content can be captured during normal project milestones: arrival, property protection, tear-off, decking findings, material details, ventilation, flashing, cleanup, and completion. A field lead does not need to narrate every step. A few approved photos and a short explanation of one decision can support several useful posts. We plan around weather and production schedules, then hold any time-sensitive storm or availability message until the operations team confirms the details.",
    reviewBoundaries:
      "Project addresses, homeowner identities, insurance information, pricing, code interpretations, warranty promises, and damage conclusions require clear boundaries. We remove identifying details unless permission is documented and avoid diagnosing a roof from a social photo. Claims about materials or workmanship must match the actual installation and written company policies. If a post touches insurance, financing, or urgent damage, the draft goes to the appropriate internal reviewer before publication.",
    conversationHandoff:
      "Our team can acknowledge service-area questions, explain the normal inspection request, and collect basic contact information through the approved path. Active leaks, storm damage, insurance questions, complaints, existing project issues, and technical diagnoses move to the roofing team. The handoff should include the property area, contact preference, stated concern, urgency, and any image the homeowner voluntarily supplied. That context helps an estimator or service coordinator continue the conversation without asking the customer to start over.",
    successSignals:
      "Useful roofing signals include saves on maintenance guidance, shares after local weather, profile visits from the service area, questions about inspections, and messages that contain a real property concern. Project posts can also show which workmanship details customers care about most. We use that information to choose future explanations and improve the inquiry path. Reach matters, but qualified local conversations and clearer homeowner expectations provide a more practical view of whether the social program is helping."
  },
  "social-media-for-law-firms": {
    decisionJourney:
      "A potential client may encounter an educational post, visit the attorney profile, review practice areas, and look for signs that the firm communicates clearly and treats sensitive situations with care. They are not trying to solve a legal matter in a comment thread. They want to understand whether the firm handles the type of issue, what a first conversation involves, and how to contact someone privately. Content should support that evaluation without promising an outcome or turning general information into legal advice.",
    weeklyRhythm:
      "A sustainable legal content rhythm can begin with recurring intake questions, common process misunderstandings, deadline awareness, and explanations of what clients should prepare for a consultation. One attorney review session can approve several topics at once. We then adapt the material into concise posts and short videos without stripping away important qualifications. Timely legal developments are handled separately and published only when the firm has confirmed that the information is current and appropriate for its jurisdictions and practice areas.",
    reviewBoundaries:
      "Every firm needs written rules for disclaimers, attorney advertising requirements, jurisdiction, confidentiality, past results, testimonials, and case references. We do not imply an attorney-client relationship, provide case-specific advice, or reveal identifying facts without documented permission. General answers stay general. If a law, filing rule, deadline, or procedural statement could change, the responsible attorney reviews it before publication rather than relying on a previously approved caption.",
    conversationHandoff:
      "Social replies can acknowledge the message, identify the broad practice area, share the approved consultation path, and remind the sender not to post confidential details publicly. The firm takes over when a person describes facts, names parties, mentions a deadline, requests advice, or needs a conflicts check. The handoff includes only the minimum information needed and follows the firm's intake process. Social media remains the doorway, while legal evaluation stays with qualified staff and attorneys.",
    successSignals:
      "A useful legal post may be saved, shared privately, or lead someone to review a practice page without leaving a public comment. We therefore look beyond visible reactions to consultation-page visits, profile actions, appropriate DMs, and repeated intake questions. We also track which explanations reduce confusion before the first call. The purpose is a clearer and more approachable public presence, not sensational reach or a promise that every interaction will become a client matter."
  },
  "social-media-for-real-estate-agents": {
    decisionJourney:
      "Buyers and sellers often watch an agent long before they announce a move. They notice neighborhood knowledge, listing presentation, communication style, and whether the agent explains difficult steps without pressure. A listing may start the visit, but process guidance and recognizable personality help the person decide whether to follow, save, or ask a private question. Social content should make the agent's service area and working style easy to understand between active listings as well as during a launch.",
    weeklyRhythm:
      "A balanced week can combine one property or neighborhood feature, one buyer or seller question, and one human view of the work behind a transaction. Capture can happen during approved listing preparation, open houses, neighborhood visits, and routine planning. We keep time-sensitive status details separate from evergreen guidance, confirm changes before publishing, and build a reserve of useful content for weeks when there is no new listing available to show.",
    reviewBoundaries:
      "Listing status, price, availability, property facts, school references, fair housing language, client privacy, and brokerage requirements must be checked carefully. We avoid language that could steer, exclude, or make unsupported claims about a neighborhood. Client stories, closing photos, and home interiors require permission. If a property changes status or a detail in the listing source is corrected, the social version should be updated or removed through a clear internal process.",
    conversationHandoff:
      "The social team can answer approved questions about event times, public listing links, service areas, and the agent's contact process. Questions about offers, representation, financing, private property details, negotiation, or a person's specific situation go directly to the agent. The handoff includes the property or topic, contact details, platform, and preferred reply method. That allows the agent to respond personally while the customer's interest is still current.",
    successSignals:
      "Useful real estate signals include saves on preparation tips, shares between household decision-makers, profile visits during a listing launch, open-house questions, and DMs about timing or representation. Neighborhood posts may build recognition long before an inquiry appears. We compare those signals with the agent's actual business priorities, then adjust the mix of listings, education, local context, and personal content without treating every view as purchase intent."
  },
  "social-media-for-home-improvement-companies": {
    decisionJourney:
      "A homeowner usually wants to see more than a finished room. They look for evidence of planning, protection, craftsmanship, communication, and how the company handles the disruption of work inside an occupied property. A useful profile shows the sequence from problem to decision to completed result. Clear captions help people understand which projects fit the company, while prompt answers about service areas and consultations make it easier to take the next step.",
    weeklyRhythm:
      "Home improvement content becomes easier when each approved project has a simple capture checklist. Early photos establish the starting condition, progress clips explain one meaningful decision, detail shots show the work that disappears later, and completion images close the story. We coordinate requests around the production schedule, not against it. When a job cannot be shown, material education, planning guidance, team explanations, and seasonal preparation keep the calendar useful.",
    reviewBoundaries:
      "Private addresses, family details, valuables, security features, permit information, pricing, and subcontractor identities need careful handling. Home interiors and customer stories are used only with permission. We avoid describing a hidden condition, code requirement, or project cost as universal when it depends on an onsite assessment. Warranty, financing, timeline, and material claims must match the company's written terms and the facts of the specific project.",
    conversationHandoff:
      "Approved social replies can cover general project types, service areas, consultation steps, and where to submit photos or contact information privately. Scope questions, estimates, active-job issues, structural concerns, complaints, and scheduling commitments belong with an estimator or project manager. We pass along the room or project type, location, desired timing, stated concern, and any approved images so the internal team starts with a useful summary.",
    successSignals:
      "The most useful signals often come from detailed project posts: saves, shares between household members, questions about materials, and messages that describe a real renovation need. We also watch whether people understand the consultation process and service area after viewing the profile. Those patterns guide future project explanations and FAQs. Large view counts can be welcome, but local project-fit conversations are a more practical measure of whether the content supports the business."
  },
  "social-media-for-fitness-studios": {
    decisionJourney:
      "A prospective member may watch for weeks while deciding whether the studio feels welcoming, appropriate for their experience level, and realistic for their schedule. They look for class format, coaching style, community atmosphere, location, and what a first visit involves. Social content should reduce intimidation without making promises about personal results. A friendly answer about class choice, preparation, or booking can help someone move from quiet interest to a first session.",
    weeklyRhythm:
      "A useful studio week can include one movement or coaching explanation, one schedule or program reminder, one community moment, and one first-visit answer. Short clips can be captured before or after class with participating members' consent, while instructors can record concise guidance during a quieter window. We plan recurring themes around the real schedule and leave room for accurate updates when instructors, capacity, workshops, or holiday hours change.",
    reviewBoundaries:
      "Member images, health information, injuries, body changes, testimonials, and performance claims require strong boundaries. No one should appear in content without appropriate permission, and captions should not diagnose conditions or promise outcomes. Pricing, cancellation rules, class capacity, age requirements, and instructor credentials must be accurate. Questions involving pain, pregnancy, recovery, or medical restrictions are referred to qualified staff and the person's healthcare professional as appropriate.",
    conversationHandoff:
      "Our team can explain the approved first-visit process, direct people to schedules and booking, and answer general questions about class types or required equipment. Membership disputes, health limitations, private account details, refunds, and individualized program recommendations go to studio staff. The handoff includes the class or membership topic, preferred timing, and the person's contact method so a coach or manager can respond with the right context.",
    successSignals:
      "Fitness content often works quietly through saved routines, schedule checks, class-page visits, replies to beginner guidance, and DMs about a first session. We also notice which class descriptions create confusion and which instructor explanations lead to useful questions. These signals help refine content and onboarding information. The program should support a welcoming, informed path into the studio rather than treating appearance-based reactions or follower count as the main measure of progress."
  },
  "social-media-for-medical-practices": {
    decisionJourney:
      "A patient may use social media to understand the practice's services, communication style, location, appointment process, and approach to common concerns. They should never need to disclose protected health information publicly to get basic direction. Content can explain general care pathways and preparation while making clear that individual guidance requires the proper clinical channel. A calm, accurate public presence can make the next administrative step easier without replacing medical evaluation.",
    weeklyRhythm:
      "Medical content planning works best in approved batches. The practice can identify recurring non-urgent questions, seasonal reminders, service explanations, staff introductions, and administrative guidance, then assign a qualified reviewer. We prepare several weeks of material from that source and separate evergreen education from time-sensitive notices. Schedule changes, public health updates, new services, and clinical claims are published only after the designated practice contact confirms the current language.",
    reviewBoundaries:
      "HIPAA, patient consent, clinical accuracy, credential language, treatment claims, testimonials, before-and-after images, and platform privacy all require documented rules. We do not confirm that someone is a patient, discuss symptoms in comments, or invite protected details through ordinary DMs. General education stays general and does not become diagnosis or treatment advice. Any clinical statement goes through the practice's reviewer, and urgent concerns are directed to the appropriate emergency or clinical channel.",
    conversationHandoff:
      "The social team can share public office information, approved scheduling links, service categories, and a reminder to use secure channels for personal health matters. Symptoms, treatment questions, medication concerns, records, billing disputes, and urgent issues go directly to practice staff through the approved route. We avoid copying sensitive details into internal social notes. The handoff identifies the platform and general request while protecting privacy and keeping clinical decisions with qualified professionals.",
    successSignals:
      "Useful medical-practice signals include saves on preparation guidance, visits to service or appointment pages, questions about accepted administrative processes, and fewer repeated misunderstandings about where to call. Public comments are not a complete measure because many patient decisions remain private. We use aggregate patterns, not personal health details, to improve future explanations. The goal is accurate access information and a trustworthy public voice, never pressure, diagnosis, or an exaggerated promise of results."
  },
  "social-media-for-dental-offices": {
    decisionJourney:
      "A prospective patient may look for services, location, insurance or payment guidance, the feel of the office, and what happens at a first visit. Someone who is anxious may pay close attention to tone and whether questions receive patient, respectful answers. Educational posts can clarify common procedures at a general level, while team and office content makes the experience less unfamiliar. Personal treatment recommendations still belong in a private clinical setting.",
    weeklyRhythm:
      "A dental office can build a consistent month from recurring patient questions, prevention reminders, service explanations, team introductions, office updates, and first-visit guidance. Content capture can happen during a scheduled staff window without disrupting care. We batch drafts for clinical review, maintain a reserve of evergreen education, and confirm changes to hours, provider schedules, promotions, or availability before a time-sensitive post is published.",
    reviewBoundaries:
      "Patient identities, treatment plans, images, X-rays, testimonials, before-and-after work, pricing, insurance language, and outcome claims require clear approval. We do not interpret symptoms or recommend a procedure through comments or ordinary DMs. Clinical explanations must be reviewed by the practice and framed as general information. Any patient story or visual needs documented permission, and urgent dental concerns are directed to the practice's established clinical process.",
    conversationHandoff:
      "Approved replies can cover public hours, location, the general appointment request, service categories, and where to find new-patient information. Pain, swelling, trauma, medication, treatment, records, billing, and account-specific questions move to office staff through a secure route. The handoff stays minimal and avoids repeating sensitive details. The social response should make the correct next action clear without presenting itself as clinical triage.",
    successSignals:
      "For a dental office, useful signals include saves on care guidance, profile actions, new-patient page visits, appointment-process questions, and messages asking whether the office offers a relevant service. We also watch which explanations reduce uncertainty about first visits and common procedures. Because many decisions are private, visible engagement alone is incomplete. The content plan improves when real administrative questions and approved patient education shape the next month."
  },
  "social-media-for-hvac-companies": {
    decisionJourney:
      "A homeowner often discovers an HVAC company during a comfort problem, seasonal tune-up decision, or equipment question. They want to know whether the company serves the area, handles the system type, offers the needed appointment path, and communicates clearly inside the home. Educational content and real field work can establish familiarity before the urgent moment. A fast, accurate reply should guide the person toward service without diagnosing equipment from a comment.",
    weeklyRhythm:
      "HVAC content can follow Maryland's real heating and cooling cycle. Before peak seasons, the calendar can explain preparation, maintenance, filters, airflow, thermostat use, and what to expect during service. Field teams can capture approved equipment details, clean work practices, and short explanations without sharing private addresses. We keep room for timely weather reminders while confirming availability and emergency-service language with dispatch before publication.",
    reviewBoundaries:
      "Technicians should not diagnose a system, quote a repair, or make safety assurances from limited social information. Customer addresses, equipment serial numbers, account details, financing terms, rebates, warranties, and utility claims need protection and current approval. Carbon monoxide, gas, electrical, refrigerant, and no-heat emergencies require the company's established safety response. Promotional language must match actual service capacity and written terms.",
    conversationHandoff:
      "Our team can confirm general service areas, share the booking path, explain common appointment preparation, and acknowledge a request. No-heat or no-cooling situations, unusual sounds or smells, active customer issues, pricing, equipment diagnosis, and schedule commitments go to dispatch or a technician. The handoff includes location area, system concern, urgency, existing-customer status when volunteered, and preferred contact method so the service team can prioritize correctly.",
    successSignals:
      "Useful HVAC signals include saves on seasonal checklists, shares during weather changes, service-area profile visits, maintenance questions, and messages that describe a current comfort need. We also look for repeated confusion about appointments, emergency coverage, financing, or system types. Those patterns improve future posts and profile information. Broad reach can support awareness, but qualified local requests and clearer customer expectations are the more meaningful operational signals."
  },
  "social-media-for-auto-repair-shops": {
    decisionJourney:
      "A driver may find a shop through a maintenance explanation, local recommendation, or behind-the-scenes repair post. They then look for services, location, hours, appointment process, technician credibility, and whether the shop communicates without making customers feel uninformed. Social content can make routine maintenance and repair processes easier to understand. It should never diagnose a vehicle from a comment or imply a firm price before proper inspection.",
    weeklyRhythm:
      "A repair shop can capture useful content during normal work with customer permission and identifying details removed. One week might include a maintenance reminder, a worn-versus-new component, a technician explanation, and an answer about appointment preparation. We organize topics around seasonal driving needs and common services, then confirm that promotions, parts availability, hours, and booking capacity are accurate before publishing time-sensitive information.",
    reviewBoundaries:
      "License plates, VINs, customer names, paperwork, keys, addresses, and private conversations stay out of public content. Repair explanations must distinguish a general example from a diagnosis of another person's vehicle. Estimates, warranties, parts claims, safety statements, and completion times require shop approval. Urgent brake, steering, tire, overheating, electrical, or accident concerns are directed to the shop's safety and towing guidance rather than handled casually online.",
    conversationHandoff:
      "The social team can share public service categories, hours, location, appointment links, and general preparation information. Warning lights, symptoms, estimates, parts availability, active repair status, warranty questions, and complaints move to a service advisor. A useful handoff includes vehicle year and model if the customer volunteered it, the stated concern, urgency, and preferred reply method. The advisor can then ask the technical questions in the correct service channel.",
    successSignals:
      "Auto repair content is useful when drivers save maintenance guidance, share safety reminders, visit the booking page, or ask a specific service question. Repeated questions can reveal where the shop's appointment, diagnostic, or warranty process needs a clearer explanation. We use those patterns to plan future content. A large audience outside the service area is less valuable than steady recognition among nearby drivers who understand what the shop handles and how to contact it."
  },
  "social-media-for-salons-and-spas": {
    decisionJourney:
      "A prospective guest often studies the work, atmosphere, service menu, price range, booking process, and stylist or provider fit before making contact. They may save several examples and return when the timing feels right. Social content should show real style and care while setting honest expectations about what varies by consultation, hair, skin, schedule, or service. A warm answer about booking or preparation can make the first appointment feel more approachable.",
    weeklyRhythm:
      "A strong salon or spa week can include one approved result, one process or care explanation, one provider introduction, and one practical booking reminder. Capture should be planned around consent and service flow, not assumed because a guest is present. We build evergreen material during quieter windows, confirm availability before promoting openings, and coordinate seasonal topics with the actual service menu, retail inventory, and provider schedules.",
    reviewBoundaries:
      "Guest images, names, personal stories, treatment details, skin or health information, and before-and-after results require documented consent. Captions should not guarantee an identical outcome or make medical claims beyond the provider's licensed scope. Pricing, deposits, cancellations, patch tests, preparation, contraindications, and aftercare need approved language. Questions involving reactions, health conditions, or individualized suitability go directly to the qualified provider.",
    conversationHandoff:
      "Our team can explain public booking steps, service categories, general preparation, location, and approved policies. Color corrections, treatment suitability, health concerns, complaints, refunds, detailed pricing, or schedule exceptions move to the stylist, provider, or manager. We pass along the requested service, desired timing, relevant provider preference, and contact method without collecting unnecessary sensitive information in social messages.",
    successSignals:
      "Useful signals include saves of service examples, shares between friends, booking-link visits, provider questions, waitlist interest, and DMs that describe a real appointment need. We also watch which policy or preparation topics reduce repeated questions. Visual reach is helpful, but it does not tell the whole story. A healthier content program makes the right services, expectations, and booking path easier for nearby guests to understand."
  },
  "social-media-for-coffee-shops": {
    decisionJourney:
      "A guest may notice a drink, pastry, event, or inviting corner of the shop and then check location, hours, menu, seating, parking, or whether the space fits a quick stop, meeting, or work session. The decision can happen within minutes, so profile details and timely replies matter. Content should make the shop recognizable and current while showing the people and daily rituals that turn an occasional visit into a familiar local habit.",
    weeklyRhythm:
      "Coffee shop capture can follow the opening routine, drink preparation, pastry arrival, staff picks, customer-approved community moments, and event setup. One short session can produce several pieces without slowing the morning rush. We balance evergreen atmosphere and team stories with timely menu updates, then confirm sold-out items, changing hours, event capacity, and seasonal availability before publishing posts that may influence a same-day visit.",
    reviewBoundaries:
      "Ingredient, allergen, dietary, pricing, promotion, and availability details must come from an approved source. Customer images require permission, and private conversations should not become content. We avoid making health claims about drinks or guaranteeing an allergy accommodation the shop has not approved. If an event, vendor pop-up, or product collaboration is featured, names, times, ticket details, and partner tags are checked before the post goes live.",
    conversationHandoff:
      "The social team can answer approved questions about hours, directions, public menu items, general seating, events, and ordering links. Allergy concerns, complaints, refunds, catering, large orders, lost property, and real-time inventory go to shop staff. The handoff includes the relevant date, item or event, stated need, and contact preference so the manager can respond without making the guest repeat the entire request.",
    successSignals:
      "Coffee shop content often creates saves for a future visit, shares to a friend, direction taps, event questions, menu interest, and same-day DMs. We also notice which posts bring useful questions about hours, seating, or ordering and which community collaborations introduce the shop to nearby people. The goal is a steady, recognizable presence that supports visits and local relationships, not a feed that depends on one unusually popular drink video."
  },
  "social-media-for-boutiques": {
    decisionJourney:
      "A shopper may discover one item, visit the profile for overall style, check sizing or availability, and decide whether to visit, reserve, or ask for help. Staff taste and product knowledge can be as important as the product itself. Social content should help people imagine an item in real life, understand who it may suit, and know how to purchase it. Prompt, accurate replies are especially important when inventory is limited.",
    weeklyRhythm:
      "A boutique can create a useful week from new arrivals, one styled combination, a staff recommendation, a product detail, and an in-store moment. Capture works best when items are steamed, tagged, and still available. We organize a small asset batch, adapt it across selected platforms, and keep a timely slot for arrivals or events. Availability is checked before publishing, and sold items are not presented as current unless the caption clearly says so.",
    reviewBoundaries:
      "Inventory, sizes, variants, prices, promotion dates, returns, holds, shipping, and pickup rules need accurate approved language. Customer photos and fitting-room content require permission. Product descriptions should match labels and supplier information without unsupported quality, origin, sustainability, or performance claims. Collaborations and maker stories are credited correctly, and any change to an event or discount is reflected quickly in the public post.",
    conversationHandoff:
      "The social team can answer approved questions about store hours, general availability, public product details, events, and the standard purchase path. Detailed fit advice, special orders, holds, returns, damaged items, shipping exceptions, or real-time stock checks go to store staff. The handoff includes the item, size or variant, desired action, and contact method so the shopper gets a useful answer while the product decision is still active.",
    successSignals:
      "Useful boutique signals include saves of outfits or gift ideas, shares to a friend, product questions, direction taps, event responses, and messages about a specific size or item. We also look for repeated confusion about holds, pickup, or returns that content can clarify. A smaller nearby audience with real product interest can be more valuable than broad views from people who cannot reasonably shop the store."
  },
  "social-media-for-event-venues": {
    decisionJourney:
      "A planner may discover the venue through an event image, then study capacity, layout, atmosphere, location, accessibility, included features, and the inquiry process. They want to picture their own event while understanding what the photos do and do not show. Content should present multiple uses of the space and answer practical planning questions. A prompt reply about availability or a tour can keep the venue on the shortlist without pressuring the planner.",
    weeklyRhythm:
      "Venue content can be organized around setup, empty-room flexibility, approved event details, staff preparation, vendor collaboration, and planning education. Capture should happen before guests arrive or under clear event permissions. We build evergreen tours and FAQs alongside time-sensitive open dates or showcases. Capacity, included items, accessibility, restrictions, and availability are confirmed with the venue team before they appear in a caption or reply.",
    reviewBoundaries:
      "Guest privacy, client names, event details, minors, vendor agreements, alcohol rules, capacity, accessibility, pricing, deposits, and availability require defined approval. Photos from private events are used only with permission from the appropriate parties. We avoid implying that a setup, service, or feature is included when it came from an outside vendor. Contract questions and date commitments remain with the venue's authorized staff.",
    conversationHandoff:
      "Our team can share public capacity ranges, tour links, location information, common features, and the standard inquiry process. Date availability, custom layouts, contracts, pricing, catering, alcohol, insurance, accessibility accommodations, and event-specific restrictions move to the venue coordinator. The handoff includes event type, preferred date, estimated guest count, stated priorities, and contact method, giving the sales team a useful starting brief.",
    successSignals:
      "Useful venue signals include saves of layouts, shares among planning groups, tour-page visits, date questions, vendor inquiries, and DMs that include an event type and guest count. We also track recurring questions about what is included or how the space changes between events. Those patterns inform future tours, captions, and FAQs. The social program should help qualified planners understand fit, not simply maximize views of attractive event photography."
  },
  "social-media-for-wedding-vendors": {
    decisionJourney:
      "Couples often follow a wedding vendor through months of planning before they inquire. They compare style, personality, communication, process, availability, and how the vendor works with other professionals. Finished images attract attention, but planning guidance and behind-the-scenes decisions help a couple understand the actual experience. Social content should communicate fit clearly while avoiding pressure during a personal, high-stakes purchase.",
    weeklyRhythm:
      "A practical wedding-vendor week can combine one approved portfolio moment, one planning answer, one process detail, and one partner or venue connection. During events, capture responsibilities and permissions should be agreed in advance so content does not interfere with client service. We build evergreen education outside peak weekends, confirm credit and usage rights, and check availability before promoting a season, package, destination, or remaining date.",
    reviewBoundaries:
      "Couple and guest privacy, minors, event dates, venue rules, image rights, vendor credit, pricing, deposits, travel, availability, and package details need careful approval. Private moments are never assumed to be marketing material. We avoid promising a result another vendor controls or presenting a styled shoot as a client wedding without clear context. Contract, cancellation, and date commitments stay with the business owner or authorized team member.",
    conversationHandoff:
      "The social team can explain the public inquiry path, general service area, portfolio categories, and approved planning information. Date checks, package recommendations, quotes, contracts, travel, custom requests, complaints, and active-client details move to the vendor. The handoff includes event date, location, service need, estimated scope when volunteered, and preferred contact method so the owner can respond personally with the relevant context.",
    successSignals:
      "Wedding content often works through saves, private shares, venue or partner discovery, profile revisits, and inquiries that arrive long after the original post. We look for DMs that include a date or clear planning need, visits to the inquiry page, and questions that reveal what couples need explained. The aim is steady fit and trust across a long decision cycle, not a promise that every beautiful post will create an immediate booking."
  },
  "social-media-for-churches": {
    decisionJourney:
      "A person considering a first visit may look for service times, location, atmosphere, family information, accessibility, beliefs, community programs, and what to expect when they arrive. Someone seeking help may need a clear private contact rather than a public conversation. Social content should feel welcoming and informative without assuming that every viewer already understands church language, schedules, or how programs are organized.",
    weeklyRhythm:
      "A useful church week can include one clear service or program reminder, one short message from a leader, one community or volunteer update, and one first-visit answer. Capture should be planned around consent, especially for children, care programs, and people receiving assistance. We prepare dates and links in advance, confirm last-minute schedule changes, and build evergreen welcome content that remains useful between major events.",
    reviewBoundaries:
      "Member privacy, prayer requests, pastoral care, children, vulnerable people, donations, counseling, internal matters, and photos from worship or service activities need careful rules. Permission is required before personal stories are shared. We do not expose someone seeking help or turn a private need into promotional content. The church approves theological statements, safety information, registration details, and any public response to a sensitive community issue.",
    conversationHandoff:
      "Our team can answer approved questions about service times, public programs, location, registration, accessibility, and the general first-visit experience. Requests for pastoral care, financial assistance, counseling, safeguarding, private prayer, conflict resolution, or urgent support go directly to designated church staff. The handoff respects confidentiality and includes only the information needed to connect the person with the right ministry or leader.",
    successSignals:
      "Useful church signals include event registrations, direction requests, first-visit questions, volunteer interest, shares of accurate community resources, and DMs asking how to connect. We also watch which program details are repeatedly misunderstood and improve future explanations. Visible reactions are not the only measure because many meaningful needs remain private. The social presence should make participation and support easier to understand while treating people with care."
  },
  "social-media-for-nonprofits": {
    decisionJourney:
      "A potential supporter, volunteer, partner, or person seeking help needs to understand the mission, the specific work, and the next practical action. They may review recent programs, leadership, financial or impact information, eligibility, event details, and how people are represented. Social content should make participation clear without reducing complex community needs to emotional promotion. Respectful context builds a stronger path to informed support.",
    weeklyRhythm:
      "A nonprofit can plan around program delivery, volunteer opportunities, resource education, events, partner work, and transparent updates. Capture responsibilities and consent should be defined before an activity begins, especially when services involve children or vulnerable people. We batch evergreen mission explanations and leave room for timely needs, then verify dates, quantities, eligibility, donation instructions, and partner details before publishing a call to action.",
    reviewBoundaries:
      "Participant dignity, consent, safeguarding, case details, donor information, grant restrictions, financial claims, impact figures, and urgent needs require strong review. We do not share a person's hardship simply because a photo is available. Numbers must come from the organization's approved records and include enough context to avoid misleading readers. Public replies should not confirm service participation or expose private eligibility, housing, health, or family information.",
    conversationHandoff:
      "The social team can explain public program information, volunteer steps, event registration, donation links, and general resource directions. Eligibility, case support, crisis requests, major gifts, media inquiries, complaints, and partnership proposals move to the appropriate staff member. The handoff identifies the request type, urgency, and contact preference while keeping sensitive personal information in the organization's approved intake channel.",
    successSignals:
      "Useful nonprofit signals include completed registrations, volunteer questions, resource-page visits, shares by trusted partners, qualified donation inquiries, and messages from people who understand the next step. We also track recurring confusion about eligibility, program timing, or how funds and materials are used. These patterns improve future communication. Reach can support awareness, but respectful action and clearer access are more meaningful than attention alone."
  },
  "social-media-for-local-retail-stores": {
    decisionJourney:
      "A shopper may discover a product, check whether the store is nearby and active, review the broader selection, and ask about availability before visiting. They also notice whether staff can explain differences and recommend the right item without pressure. Social content should connect inspiration with practical details such as location, hours, pickup, and current inventory. A knowledgeable response can turn casual browsing into a planned store visit.",
    weeklyRhythm:
      "A retail week can be built from one new or timely product, one demonstration, one staff recommendation, one customer question, and one view of the store or community. Capture is easiest when arrivals are unpacked and displays are updated. We create reusable material alongside time-sensitive inventory posts, then confirm prices, variants, availability, event details, and promotions before publishing anything that may prompt an immediate trip.",
    reviewBoundaries:
      "Inventory, pricing, sale dates, product specifications, warranties, returns, holds, shipping, pickup, and supplier claims need accurate approval. Customer photos and stories require permission. We avoid unsupported claims about safety, sustainability, origin, health, or product performance. If a manufacturer changes a specification or a featured item sells out, the social team needs a clear way to update the post or direct shoppers to a suitable alternative.",
    conversationHandoff:
      "Our team can share public store information, approved product details, standard policies, and the normal purchase or event path. Real-time stock, special orders, returns, damaged items, technical fit, bulk needs, and exceptions go to store staff. The handoff includes the item, variant, quantity, desired timing, and customer contact method, allowing an employee to verify details before making a commitment.",
    successSignals:
      "Useful retail signals include product saves, shares, direction taps, event responses, pickup questions, and messages about a specific item or need. We also watch which staff recommendations or demonstrations lead to informed questions and which policies need clearer explanation. Broad exposure has a role, but nearby shoppers who understand the product and next step provide a more useful signal for a local store."
  },
  "social-media-for-contractors": {
    decisionJourney:
      "A property owner may follow a contractor through several projects before requesting an estimate. They look for relevant scope, craftsmanship, communication, site care, team professionalism, and whether the company understands homes or properties like theirs. Finished work creates interest, but process details help the customer judge fit beyond price. The profile should also make service areas, consultation steps, and the right way to describe a project easy to find.",
    weeklyRhythm:
      "Contractor content can follow a repeatable project sequence: starting condition, preparation, protection, meaningful progress, hidden quality details, cleanup, and completion. A superintendent or crew lead can capture a few approved moments without becoming a full-time creator. We organize those assets around production reality, supplement them with planning guidance and team explanations, and confirm schedule, material, or availability statements before posting time-sensitive information.",
    reviewBoundaries:
      "Addresses, access points, security details, plans, customer information, subcontractor agreements, permits, pricing, timelines, code statements, warranties, and financing need defined approval. Customer homes and stories are used only with permission. We avoid diagnosing a condition from a social image or presenting one project's cost and timeline as universal. Safety and technical explanations stay within the company's approved scope and qualified expertise.",
    conversationHandoff:
      "The social team can explain general services, service areas, consultation steps, and the approved way to submit project details. Estimates, site conditions, technical questions, scheduling commitments, active-job concerns, complaints, and contract matters go to the contractor's estimator or project team. The handoff includes project type, location area, desired timing, stated priorities, and any images voluntarily provided so the internal response begins with useful context.",
    successSignals:
      "Useful contractor signals include saves of planning guidance, shares between decision-makers, profile visits from the service area, questions about process, and messages that describe an actual project. We also learn from repeated concerns about timelines, preparation, materials, or living through construction. Those patterns shape future content and the response guide. The goal is qualified understanding and trust, not a guarantee that every project video becomes an estimate request."
  }
};

export function getIndustryGuide(slug: string) {
  return industryGuides.find((guide) => guide.slug === slug);
}

export function getIndustryPlaybook(slug: string) {
  return industryPlaybooks[slug] ?? industryPlaybooks["social-media-for-local-businesses"];
}

export function getIndustryDepthGuide(slug: string) {
  return industryDepthGuides[slug] ?? industryDepthGuides["social-media-for-local-businesses"];
}

export function getRelatedIndustryGuides(slug: string, count = 4) {
  const index = industryGuides.findIndex((guide) => guide.slug === slug);

  if (index === -1) {
    return industryGuides.slice(0, count);
  }

  const related: IndustryGuide[] = [];

  for (let offset = 1; offset <= industryGuides.length && related.length < count; offset += 1) {
    const next = industryGuides[(index + offset) % industryGuides.length];

    if (next.slug !== slug) {
      related.push(next);
    }
  }

  return related;
}

export function buildIndustrySections(guide: IndustryGuide): LongFormSection[] {
  const playbook = getIndustryPlaybook(guide.slug);
  const depthGuide = getIndustryDepthGuide(guide.slug);

  return [
    {
      heading: `Who We Help in ${guide.niche}`,
      paragraphs: [
        `This service is for ${guide.niche} that need a dependable social media system without turning day-to-day operations into a full-time content studio. We organize the calendar, prepare platform-ready content, and make sure conversations have a clear owner.`,
        guide.localAngle,
        `The right plan starts with the way customers already make decisions. ${playbook.leadPath}`
      ],
      bullets: guide.audience
    },
    {
      heading: "What Usually Gets in the Way",
      paragraphs: [
        `The problem is rarely a lack of knowledge or good work. The problem is that the useful stories, answers, and proof inside the business do not have a repeatable path into the social calendar.`,
        `When these issues continue, the profile can look quieter and less responsive than the business really is. We reduce that gap by assigning clear responsibilities and building a cadence the team can actually maintain.`
      ],
      bullets: guide.struggles.map((struggle) => `${struggle.charAt(0).toUpperCase()}${struggle.slice(1)}`)
    },
    {
      heading: "Content That Helps Customers Make a Decision",
      paragraphs: [
        `For ${guide.niche}, useful content should answer a real customer question, show a meaningful part of the experience, or make the next step easier to understand. A balanced month usually needs more than promotions.`,
        `We use these themes as a starting point, then shape them around your services, voice, permissions, current priorities, and the material your team can provide.`
      ],
      bullets: playbook.contentPillars
    },
    {
      heading: "How Customers Move From Discovery to Action",
      paragraphs: [
        depthGuide.decisionJourney,
        `That path determines what the profile needs to explain first. We connect posts to accurate profile details, relevant service information, and a clear contact option so a person does not reach a dead end after becoming interested. Not every viewer is ready to act, and useful content should still serve the person who is comparing, saving, or learning. Consistent answers and recognizable business details make it easier for that person to return when the need becomes immediate.`
      ]
    },
    {
      heading: "What Our Team Handles",
      paragraphs: [
        `We connect planning, creation, approvals, publishing, and engagement so social media does not depend on whoever happens to have time that day. The scope follows your selected tier.`,
        `Smart tools support research, scheduling, organization, and performance review. Real people make the communication decisions and keep the work grounded in the context of your business.`
      ],
      bullets: guide.whatWeDo.map((service) => `${service.charAt(0).toUpperCase()}${service.slice(1)}`)
    },
    {
      heading: "A Simple Monthly Capture List",
      paragraphs: [
        `You do not need to document every minute of the work. A small, consistent capture routine gives us enough real material to keep content specific and believable.`,
        `We tailor the list to your environment and privacy needs. Customer identities, private addresses, protected information, and sensitive details stay out of content unless proper permission and review are in place.`
      ],
      bullets: playbook.captureList
    },
    {
      heading: "A Weekly Rhythm the Team Can Maintain",
      paragraphs: [
        depthGuide.weeklyRhythm,
        `The purpose of a rhythm is to reduce last-minute scrambling, not to make the business perform for social media. We define who can capture material, where it should be sent, when facts need confirmation, and how quickly approvals can reasonably happen. A small reserve of approved evergreen content protects consistency when weather, staffing, customer needs, or daily operations change the original plan. Timely posts still have a place, but they no longer carry the whole calendar.`
      ]
    },
    {
      heading: "Where Human Engagement Should Focus",
      paragraphs: [
        `Engagement for ${guide.niche} includes more than reacting to your own posts. Depending on the plan, our team can follow potential customers, comment on targeted public posts, and respond to eligible DMs and comments.`,
        `A response guide defines tone, approved answers, privacy boundaries, and escalation topics. Real people review the context before communicating, and anything sensitive or outside the playbook goes back to your team.`
      ],
      bullets: playbook.engagementFocus
    },
    {
      heading: "Approvals, Privacy, and Response Boundaries",
      paragraphs: [
        depthGuide.reviewBoundaries,
        `These rules are set during onboarding and updated when services, staff, policies, or responsibilities change. Our team keeps routine public communication inside the approved playbook and pauses when a fact is unclear. This protects customers as well as the business. It also makes everyday engagement faster because common questions already have an accurate response path, while unusual or sensitive situations reach someone with the authority and context to handle them.`
      ]
    },
    {
      heading: "From a Social Question to the Right Person",
      paragraphs: [
        depthGuide.conversationHandoff,
        `A good handoff has a named owner and a clear next step. Before launch, we identify who receives sales questions, service concerns, scheduling requests, complaints, and urgent issues. We also agree on what the social team may say while a customer is waiting. The goal is not to keep every conversation inside the platform. It is to acknowledge the person, protect private information, and move the request into the channel where the business can answer it correctly.`
      ]
    },
    {
      heading: `Why ${guide.bestTier} Is the Recommended Starting Point`,
      paragraphs: [
        guide.tierReason,
        `Tier 1 covers Facebook and Instagram with one post per week, one short-form video per month, weekly engagement, comment monitoring, and friendly replies. Tier 2 adds more weekly content, four monthly videos, TikTok, and YouTube. Tier 3 adds wider channel coverage, deeper engagement, profile optimization, and reporting.`,
        `The best plan is the one that matches your current content supply, audience, and response capacity. You can start focused and expand when the workflow is stable.`
      ],
      bullets: [
        `Recommended for ${guide.niche}: ${guide.bestTier}`,
        "All tiers include real human engagement",
        "Paid social advertising is available separately"
      ]
    },
    {
      heading: "What the First Month Looks Like",
      paragraphs: [
        `The first week is for account access, voice, priorities, permissions, response boundaries, and available content. We choose a small set of useful themes instead of trying to cover everything at once.`,
        `Next, we build and approve the calendar, prepare platform-specific versions, and begin the agreed posting and engagement rhythm. Questions from real customers become input for future posts.`,
        `At the end of the cycle, we review useful signals such as saves, shares, replies, DMs, profile activity, and qualified conversations. The next month is refined from that evidence without changing direction every few days.`
      ]
    },
    {
      heading: "How We Read Useful Progress",
      paragraphs: [
        depthGuide.successSignals,
        `We review results in the context of the plan, the size of the existing audience, seasonality, the content supplied, and the actions the business can actually fulfill. A post that answers an important question for a small number of nearby people may be more useful than a widely viewed post with no local relevance. We use performance patterns to improve topics, formats, timing, profile information, and the response guide, while avoiding promises that organic social activity alone can guarantee a specific business outcome.`
      ]
    },
    {
      heading: guide.ctaHeadline,
      paragraphs: [
        guide.ctaBody,
        `If your team needs a more dependable social presence, send the short contact form. Tell us what is active now, what you want to improve, and which questions your customers ask most often.`,
        `We will review the fit, recommend a practical tier, and explain what we would need from your team to get started. There is no requirement to share an ad budget unless paid advertising is part of the conversation.`
      ]
    }
  ];
}
