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
    ctaHeadline: "Turn scrolls into reservations and regulars",
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
        question: "Do social posts really generate roofing leads?",
        answer:
          "Yes, especially when content combines project proof, practical homeowner guidance, and quick response handling for estimate inquiries."
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
      "In Maryland communities, studios that feel welcoming online often outperform larger chains in member loyalty.",
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
      "Salons and spas usually see stronger results from frequent visual storytelling across multiple platforms, which makes Tier 2 ideal.",
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
    ctaHeadline: "Turn neighborhood attention into daily visits",
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
          "Yes. Consistent local storytelling and event reminders can increase awareness and in-store visits."
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
          "Yes. Quality-focused content can attract clients who value process, communication, and long-term results."
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

export function getIndustryGuide(slug: string) {
  return industryGuides.find((guide) => guide.slug === slug);
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

function buildAudienceParagraph(guide: IndustryGuide) {
  return `This guide is for ${guide.niche} that want a better social media system without turning the business into a full-time content studio. It is especially useful for teams that are already busy serving customers and need a reliable publishing and engagement partner. Instead of asking you to chase trends all day, we help create a practical workflow that keeps your business visible, consistent, and easy to trust.`;
}

function buildLocalParagraph(guide: IndustryGuide) {
  return `${guide.localAngle} Local customers do not need flashy viral tactics. They need clear proof that your team is active, responsive, and genuinely helpful. A steady social presence gives people confidence that they are choosing a real business with real standards.`;
}

function buildHumanParagraph(guide: IndustryGuide) {
  return `A lot of content tools can schedule posts, suggest hashtags, and draft rough ideas. What they cannot do well is hold a real conversation with your community in your voice. For ${guide.niche}, that human interaction matters because questions, concerns, and buying decisions usually happen in comments and DMs before someone ever calls.`;
}

function buildTierParagraph(guide: IndustryGuide) {
  return `${guide.bestTier} is typically the strongest fit for ${guide.niche} because ${guide.tierReason.toLowerCase()} If your goals expand over time, your plan can grow with you. The important thing is starting with a tier you can sustain consistently so your audience sees dependable activity week after week.`;
}

export function buildIndustrySections(guide: IndustryGuide): LongFormSection[] {
  const commonStruggleParagraphs = guide.struggles.map(
    (struggle) =>
      `One of the biggest challenges we see with ${guide.niche} is ${struggle}. When this pattern continues for months, followers stop expecting updates and potential customers assume your business is harder to reach than it really is. Solving this is less about posting more and more about building a realistic cadence your team can maintain.`
  );

  const whatWeDoParagraphs = guide.whatWeDo.map(
    (service) =>
      `Our team helps by ${service}. We keep strategy practical, content clear, and engagement warm so your social channels feel like an extension of your in-person customer experience. Every workflow is designed so your team can approve quickly without adding unnecessary meetings or complexity.`
  );

  return [
    {
      heading: "Who This Is For",
      paragraphs: [
        buildAudienceParagraph(guide),
        `Many owners come to us after trying to post whenever there is extra time, only to find that inconsistency creates stress and low results. This guide offers a different approach: simple weekly execution, clear responsibility, and realistic goals that match your business stage. You do not need to go viral to grow. You need a trusted social rhythm.`,
        buildLocalParagraph(guide)
      ],
      bullets: guide.audience
    },
    {
      heading: "Common Struggles for Growing Teams",
      paragraphs: [
        `Most ${guide.niche} do not struggle because they lack expertise. They struggle because daily operations consume attention. Social media gets pushed down the priority list, then suddenly weeks pass between posts. This gap creates a visibility problem, not a quality problem.`,
        ...commonStruggleParagraphs,
        `Another challenge is uneven voice. One week posts feel warm and personal, and the next week they feel rushed or generic. Consistency in tone builds trust, especially for local audiences who value familiarity. A reliable content and response system keeps your messaging aligned with who you are in real life.`
      ]
    },
    {
      heading: "What We Do for You",
      paragraphs: [
        `We run social media like an operating system, not a random list of ideas. That means calendar planning, production cadence, approvals, posting, and active community interaction all have a clear flow. The result is less stress for your team and more confidence for your audience.`,
        ...whatWeDoParagraphs,
        `We also keep momentum by reviewing what people actually respond to. If your audience is asking questions, we expand educational content. If short-form clips drive reach, we build more around that format. If comments show recurring concerns, we answer those themes proactively in future posts.`
      ]
    },
    {
      heading: "Why Human Interaction Matters",
      paragraphs: [
        buildHumanParagraph(guide),
        `People can tell when replies are scripted or disconnected from context. They can also tell when someone is genuinely listening. Our team uses smart tools for scheduling, optimization, and research, but real humans manage the interaction layer so your audience gets thoughtful, brand-safe communication.`,
        `Human interaction also protects reputation. A quick, respectful response to confusion or criticism can de-escalate issues and preserve trust. When businesses ignore these moments, uncertainty spreads fast. We treat engagement as customer care, not just social media maintenance.`,
        `Over time, this approach builds community. Followers become familiar with your voice. Customers feel recognized. Referral conversations increase because people feel connected to your brand personality, not just your offer list.`
      ]
    },
    {
      heading: "Tier Recommendations",
      paragraphs: [
        buildTierParagraph(guide),
        `Tier 1 is ideal if your top priority is showing up consistently on Facebook and Instagram with dependable weekly engagement. It works well for businesses that need a stable starting point and immediate communication support.`,
        `Tier 2 is often the next step when your audience is active across TikTok and YouTube as well, and you need platform-specific formatting plus short-form video cadence. This is where visibility usually accelerates for growing brands.`,
        `Tier 3 is best when your business needs omni-channel coverage, deeper community interaction, and broader profile optimization. Teams with larger growth goals or multiple service areas often choose this level to maintain strong presence everywhere their audience scrolls.`
      ],
      bullets: [
        `Recommended for ${guide.niche}: ${guide.bestTier}`,
        `Starting point rationale: ${guide.tierReason}`,
        "All tiers include real human interaction, not bot-only communication"
      ]
    },
    {
      heading: "Building a Sustainable Content Workflow",
      paragraphs: [
        `The strongest social strategy is the one your team can sustain for months, not one week. We keep implementation simple: clear monthly planning, predictable content windows, and fast approvals. This avoids the stop-start cycle that drains energy and creates inconsistent audience signals.`,
        `We also create reusable content frameworks so your staff is not reinventing ideas every week. One customer question can become a short video, a caption post, and a story sequence. One completed project can become a proof post, an educational breakdown, and a community update.`,
        `As performance trends become clear, we refine gradually. There is no need to constantly overhaul everything. Small, steady adjustments usually outperform dramatic resets and keep your brand voice stable.`
      ]
    },
    {
      heading: "A 30-Day Execution Example",
      paragraphs: [
        `Week one is about setup and clarity. We finalize your post themes, collect available brand assets, and align on approval timing so content can move quickly. Instead of trying to produce everything at once, we prioritize the highest-value topics for ${guide.niche} and build a practical sequence that your team can maintain. This first week creates structure and removes guesswork.`,
        `Week two focuses on visibility and conversation. Posts go live with platform-appropriate formatting, and we monitor comments and DMs for recurring questions. Those real audience questions become fuel for upcoming posts, which means your content strategy is informed by actual customer interest rather than assumptions.`,
        `Week three is where trust starts compounding. We reinforce successful themes, add short-form video where it fits, and continue responsive engagement. By this point, followers begin to recognize your rhythm. That recognition is valuable because people are more likely to choose brands that appear active, consistent, and easy to communicate with.`,
        `Week four is refinement and planning forward. We review what generated saves, shares, replies, and lead conversations, then apply those insights to the next monthly calendar. This process helps ${guide.niche} avoid random posting and replace it with a system that gets clearer and stronger over time.`,
        `The biggest win in this approach is operational calm. Your team knows what is happening, when it is happening, and why it matters. Social media no longer feels like a last-minute scramble. It becomes a dependable business function that supports reputation, lead flow, and long-term local visibility.`
      ],
      bullets: [
        "Week 1: setup, alignment, and realistic topic planning",
        "Week 2: publishing cadence and active message monitoring",
        "Week 3: engagement-driven iteration and video reinforcement",
        "Week 4: performance review and next-cycle optimization"
      ]
    },
    {
      heading: "Ready to Grow with Real People Behind Your Brand",
      paragraphs: [
        `${guide.ctaBody} Whether you need a clean starting point or a multi-platform system, we can match your current stage and help you scale responsibly.`,
        `${guide.ctaHeadline}. If you want practical, friendly support from a Maryland team that understands local businesses, we are ready to help. Reach out to discuss a plan that fits your schedule and budget.`,
        `The next step is simple: choose the tier that matches your current capacity, start a consistent publishing rhythm, and let real people handle the engagement layer with care. For ${guide.niche}, trust is built one interaction at a time. With steady execution and thoughtful communication, social media becomes a reliable source of visibility, stronger relationships, and better long-term growth.`
      ]
    }
  ];
}

export function estimateWordCount(sections: LongFormSection[], faq: FaqItem[]) {
  const text = [
    ...sections.flatMap((section) => [section.heading, ...section.paragraphs, ...(section.bullets ?? [])]),
    ...faq.flatMap((item) => [item.question, item.answer])
  ].join(" ");

  return text.split(/\s+/).filter(Boolean).length;
}
