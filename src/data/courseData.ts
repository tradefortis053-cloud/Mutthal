export interface CurriculumLesson {
  code: string;
  title: string;
  description: string;
}

export interface CurriculumModule {
  id: string;
  number: string;
  title: string;
  summary: string;
  lessons: CurriculumLesson[];
}

export interface LearningTopic {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: "blue" | "green" | "red" | "yellow";
  iconName:
    | "Layers"
    | "AlignCenter"
    | "Grid3X3"
    | "ArrowLeftRight"
    | "ShieldAlert"
    | "Scale"
    | "Activity"
    | "GitBranch"
    | "Crosshair";
  tag: string;
}

export interface TestimonialPlaceholder {
  id: string;
  namePlaceholder: string;
  rolePlaceholder: string;
  initials: string;
  rating: number;
  feedback: string;
  moduleFocus: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/**
 * Central configuration file for brand, pricing, integrations, and curriculum content.
 * Replace bracketed placeholders before going live.
 */
export const siteConfig = {
  brandName: "[YOUR BRAND NAME]",
  courseName: "Order Flow & DOM Mastery",
  priceDisplay: "₹[YOUR PRICE]",
  priceSubtext: "Single enrollment · Applicable taxes calculated at checkout",
  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Curriculum", href: "#curriculum" },
    { label: "Course Preview", href: "#preview" },
    { label: "FAQs", href: "#faqs" },
  ],
  integrations: {
    razorpay: {
      enabled: false, // Set true once Razorpay Key ID / Payment Button URL is configured
      keyIdPlaceholder: "rzp_live_[YOUR_RAZORPAY_KEY_ID]",
      paymentLinkUrl: "", // Optional direct Razorpay Payment Page URL
      merchantDisplayName: "[YOUR BRAND NAME]",
    },
    whatsapp: {
      enabled: false, // Set true once your WhatsApp business number is added
      phoneNumberPlaceholder: "[YOUR_WHATSAPP_NUMBER]",
      prefilledMessage:
        "Hello! I have a question regarding the Order Flow & DOM Mastery course.",
    },
    previewVideo: {
      embedUrl: "", // Replace with YouTube / Vimeo / BunnyStream / MP4 URL
      thumbnailUrl: "/images/course-preview-thumb.jpg",
      title: "Inside the Two-Way Auction: Reading Liquidity Beyond Candlesticks",
      duration: "12:40",
    },
  },
  optionalFeatures: {
    showLifetimeAccessPlaceholder: true,
    showCommunityAccessPlaceholder: true,
  },
};

export const trustPillars = [
  {
    title: "Practical Market Understanding",
    description: "Grounded in auction mechanics and real order-book interaction",
    icon: "Compass",
  },
  {
    title: "Structured Learning",
    description: "Step-by-step progression from core concepts to chart execution",
    icon: "BookOpen",
  },
  {
    title: "Real-Chart Demonstrations",
    description: "Detailed walkthroughs of DOM ladders, footprints, and volume",
    icon: "LineChart",
  },
  {
    title: "Beginner-to-Advanced Learning Path",
    description: "Clear foundations built before introducing complex order flow",
    icon: "Layers",
  },
] as const;

export const learningTopics: LearningTopic[] = [
  {
    id: "order-flow-fundamentals",
    number: "01",
    title: "Order Flow Fundamentals",
    description:
      "Understand how financial markets operate as continuous two-way auctions driven by passive limit liquidity and aggressive market orders.",
    accent: "blue",
    iconName: "Layers",
    tag: "Core Foundation",
  },
  {
    id: "dom-depth-of-market",
    number: "02",
    title: "DOM (Depth of Market)",
    description:
      "Read the vertical price ladder with clarity—tracking resting bids, offers, inside spread behavior, queue depth, and order-book velocity.",
    accent: "green",
    iconName: "AlignCenter",
    tag: "Order Book",
  },
  {
    id: "footprint-charts",
    number: "03",
    title: "Footprint Charts",
    description:
      "Look inside every candle to inspect exact traded volume at each price tick, cluster Points of Control (POC), and unfinished auctions.",
    accent: "blue",
    iconName: "Grid3X3",
    tag: "Cluster Analysis",
  },
  {
    id: "bid-ask-analysis",
    number: "04",
    title: "Bid & Ask Analysis",
    description:
      "Distinguish between buyers lifting the offer and sellers hitting the bid to observe genuine urgency versus passive order matching.",
    accent: "green",
    iconName: "ArrowLeftRight",
    tag: "Tape Mechanics",
  },
  {
    id: "liquidity-absorption",
    number: "05",
    title: "Liquidity & Absorption",
    description:
      "Identify when large resting limit orders quietly absorb aggressive market volume at structural levels—often signaling exhaustion or reversal.",
    accent: "yellow",
    iconName: "ShieldAlert",
    tag: "Liquidity Events",
  },
  {
    id: "volume-imbalances",
    number: "06",
    title: "Volume Imbalances",
    description:
      "Spot diagonal bid-versus-ask volume imbalances and stacked institutional footprints that create high-conviction support and resistance zones.",
    accent: "red",
    iconName: "Scale",
    tag: "Imbalance Reading",
  },
  {
    id: "market-delta",
    number: "07",
    title: "Market Delta",
    description:
      "Measure net buying and selling pressure per bar and across sessions, uncovering delta divergences when effort fails to produce price progress.",
    accent: "blue",
    iconName: "Activity",
    tag: "Net Pressure",
  },
  {
    id: "market-structure",
    number: "08",
    title: "Market Structure",
    description:
      "Combine Volume Profile Value Areas, High/Low Volume Nodes, and multi-timeframe auction context so you never read order flow in isolation.",
    accent: "yellow",
    iconName: "GitBranch",
    tag: "Auction Context",
  },
  {
    id: "execution-risk-management",
    number: "09",
    title: "Trading Execution & Risk Management",
    description:
      "Define objective invalidation levels, structure disciplined position sizing, and execute entries without emotional impulse or guesswork.",
    accent: "green",
    iconName: "Crosshair",
    tag: "Risk Discipline",
  },
];

export const curriculumModules: CurriculumModule[] = [
  {
    id: "module-01",
    number: "Module 01",
    title: "Introduction to Order Flow",
    summary:
      "Build a rock-solid foundation in Auction Market Theory, order types, and why traditional candlestick charts only show the outcome—not the auction.",
    lessons: [
      {
        code: "01.1",
        title: "Why Candlesticks Only Tell Half the Story",
        description:
          "Comparing OHLC price bars against underlying executed transactions and resting liquidity.",
      },
      {
        code: "01.2",
        title: "The Continuous Two-Way Market Auction",
        description:
          "How price discovers fair value by Facilitating trade between buyers and sellers.",
      },
      {
        code: "01.3",
        title: "Passive Limit Liquidity vs. Aggressive Market Orders",
        description:
          "Understanding the two distinct participant roles that move or hold market price.",
      },
      {
        code: "01.4",
        title: "Exchange Matching Mechanics & Tick Microstructure",
        description:
          "How limit order books match incoming flow via price-time priority (FIFO).",
      },
      {
        code: "01.5",
        title: "Charting Data Feeds, Platforms & Workspace Setup",
        description:
          "Selecting reliable tick-level data feeds and configuring a clean analytical layout.",
      },
    ],
  },
  {
    id: "module-02",
    number: "Module 02",
    title: "Understanding DOM",
    summary:
      "Master the Depth of Market ladder—learning how to interpret resting depth, inside market spreads, traded volume columns, and order-book tempo.",
    lessons: [
      {
        code: "02.1",
        title: "Anatomy of a Modern DOM Ladder",
        description:
          "Configuring Bid Depth, Price Spine, Ask Depth, Volume Profile, and Recent Trade columns.",
      },
      {
        code: "02.2",
        title: "Reading Inside Bid/Ask Spread & Queue Dynamics",
        description:
          "Observing how liquidity thickens, thins, and replenishes around the current traded price.",
      },
      {
        code: "02.3",
        title: "Thick vs. Thin Order Books Across Instruments",
        description:
          "Adapting DOM expectations across index futures, equities, commodities, and liquid contracts.",
      },
      {
        code: "02.4",
        title: "Liquidity Pulling, Stacking & Spoofing Awareness",
        description:
          "Distinguishing committed resting orders from fleeting limit liquidity removed before execution.",
      },
      {
        code: "02.5",
        title: "Developing Calm Tape & Ladder Observation Habits",
        description:
          "Practical drills to track order-book rhythm without screen fatigue or overtrading.",
      },
    ],
  },
  {
    id: "module-03",
    number: "Module 03",
    title: "Footprint Chart Mastery",
    summary:
      "Learn to configure and read Bid × Ask Footprint clusters, Volume Profiles inside bars, Points of Control, and auction completion signals.",
    lessons: [
      {
        code: "03.1",
        title: "How Footprint Clusters Are Constructed",
        description:
          "Mapping Bid traded volume on the left and Ask traded volume on the right at every price level.",
      },
      {
        code: "03.2",
        title: "Footprint Display Modes: Bid × Ask, Delta & Volume",
        description:
          "Choosing the right cluster visualization style for your timeframe and analytical clarity.",
      },
      {
        code: "03.3",
        title: "Bar Point of Control (POC) Shifts & Value Migration",
        description:
          "Tracking whether heaviest traded volume is migrating higher, lower, or stalling at extremes.",
      },
      {
        code: "03.4",
        title: "Finished vs. Unfinished Auctions at Highs and Lows",
        description:
          "Identifying zero-print auction extremes versus congested unfinished highs and lows.",
      },
      {
        code: "03.5",
        title: "Filtering Noise with Volume Thresholds & Tick Aggregation",
        description:
          "Grouping ticks properly so Footprint charts stay clean, readable, and actionable.",
      },
      {
        code: "03.6",
        title: "Multi-Bar Footprint Patterns in Trending vs. Rotational Markets",
        description:
          "Comparing how healthy directional auctions print differently from range-bound rotations.",
      },
    ],
  },
  {
    id: "module-04",
    number: "Module 04",
    title: "Liquidity & Absorption",
    summary:
      "Uncover how institutional limit orders absorb aggressive market sweeps, trap emotional breakout traders, and establish structural turning points.",
    lessons: [
      {
        code: "04.1",
        title: "Where Liquidity Concentrates on the Chart",
        description:
          "Mapping prior highs/lows, session extremes, Value Area boundaries, and round numbers.",
      },
      {
        code: "04.2",
        title: "The Mechanics of Passive Absorption",
        description:
          "Recognizing heavy market buying or selling that repeatedly fails to advance price by a single tick.",
      },
      {
        code: "04.3",
        title: "Iceberg Orders & Reloading Limit Liquidity",
        description:
          "Spotting hidden liquidity replenishment on the DOM and Footprint when traded volume exceeds visible size.",
      },
      {
        code: "04.4",
        title: "Stop Runs, Liquidity Sweeps & Trapped Participants",
        description:
          "Reading what happens immediately after stop clusters are triggered beyond obvious swing levels.",
      },
      {
        code: "04.5",
        title: "Exhaustion vs. Absorption: Knowing the Difference",
        description:
          "Why a reversal from lack of participation behaves differently from a reversal backed by passive walls.",
      },
    ],
  },
  {
    id: "module-05",
    number: "Module 05",
    title: "Delta & Imbalances",
    summary:
      "Quantify aggressive buying and selling urgency through diagonal Footprint imbalances, stacked imbalance zones, and Cumulative Volume Delta (CVD).",
    lessons: [
      {
        code: "05.1",
        title: "Diagonal Bid/Ask Calculation Explained Simply",
        description:
          "Why Footprint imbalances compare Bid volume against the diagonally higher Ask price level.",
      },
      {
        code: "05.2",
        title: "Stacked Imbalances as Institutional Initiative Zones",
        description:
          "Marking 3+ consecutive directional imbalances and testing how price reacts upon retest.",
      },
      {
        code: "05.3",
        title: "Bar Delta, Min/Max Delta & Delta Tails",
        description:
          "Measuring intra-bar delta swings to spot mid-candle buyer or seller capitulation.",
      },
      {
        code: "05.4",
        title: "Cumulative Volume Delta (CVD) Divergences",
        description:
          "Interpreting higher highs in price with weaker delta—versus new delta highs failing to lift price.",
      },
      {
        code: "05.5",
        title: "Avoiding Common Delta Misconceptions",
        description:
          "Why positive delta is not automatically bullish—and how context determines meaning.",
      },
    ],
  },
  {
    id: "module-06",
    number: "Module 06",
    title: "Advanced Market Reading",
    summary:
      "Synthesize Market Structure, Session Volume Profile, DOM tempo, and Footprint confirmation into a unified top-down analytical framework.",
    lessons: [
      {
        code: "06.1",
        title: "Context First: Framing the Day with Volume Profile",
        description:
          "Using Value Area High (VAH), Value Area Low (VAL), and VPOC to identify high-probability locations.",
      },
      {
        code: "06.2",
        title: "High Volume Nodes (HVN) vs. Low Volume Nodes (LVN)",
        description:
          "Anticipating acceptance and consolidation at HVNs versus swift rejection across LVNs.",
      },
      {
        code: "06.3",
        title: "Opening Drive, Initial Balance & Session Transitions",
        description:
          "Reading shifts in liquidity participation from market open through mid-session and close.",
      },
      {
        code: "06.4",
        title: "Aligning Higher-Timeframe Structure with Micro Order Flow",
        description:
          "Zooming into the Footprint and DOM only when price reaches pre-defined structural zones.",
      },
      {
        code: "06.5",
        title: "Building Pre-Session Scenarios Without Bias",
        description:
          "Preparing conditional 'if-then' plans so you react to actual order flow rather than predicting.",
      },
    ],
  },
  {
    id: "module-07",
    number: "Module 07",
    title: "Practical Chart Analysis",
    summary:
      "Step through bar-by-bar annotated chart case studies illustrating continuation setups, failed breakouts, absorption reversals, and no-trade conditions.",
    lessons: [
      {
        code: "07.1",
        title: "Case Study 01: Failed Breakout & Ask Absorption at Resistance",
        description:
          "Full replay breakdown of trapped aggressive buyers meeting passive institutional supply.",
      },
      {
        code: "07.2",
        title: "Case Study 02: Stacked Imbalance Pullback in a Trend Day",
        description:
          "Identifying low-volume pullback exhaustion into a defended stacked buy imbalance zone.",
      },
      {
        code: "07.3",
        title: "Case Study 03: Value Area Rejection & LVN Rejection",
        description:
          "Combining composite profile structure with Footprint delta flip confirmation.",
      },
      {
        code: "07.4",
        title: "Case Study 04: Recognizing Choppy, Low-Clarity Conditions",
        description:
          "Knowing when order flow is balanced and sitting on your hands preserves capital.",
      },
      {
        code: "07.5",
        title: "Structured Chart Review & Journaling Protocol",
        description:
          "How to screenshot, annotate, and review your own Footprint and DOM observations effectively.",
      },
    ],
  },
  {
    id: "module-08",
    number: "Module 08",
    title: "Risk Management & Execution",
    summary:
      "Translate analytical insight into disciplined execution—covering invalidation placement, position sizing, risk caps, and psychological composure.",
    lessons: [
      {
        code: "08.1",
        title: "Order-Flow-Based Invalidation & Stop Placement",
        description:
          "Placing protective stops behind objective absorption walls, POCs, or imbalance zones.",
      },
      {
        code: "08.2",
        title: "Position Sizing, Fixed Fractional Risk & Daily Loss Limits",
        description:
          "Structuring risk parameters so no single trade or session compromises longevity.",
      },
      {
        code: "08.3",
        title: "Execution Mechanics: Limit Entry vs. Confirmation Entry",
        description:
          "Weighing queue priority and tighter stops against waiting for delta shift confirmation.",
      },
      {
        code: "08.4",
        title: "Trade Management & Scaling Around Structural Targets",
        description:
          "Monitoring active order flow en route to opposing liquidity pools and HVNs.",
      },
      {
        code: "08.5",
        title: "Your Complete Pre-Trade & Post-Trade Checklist",
        description:
          "Bringing every module together into a calm, repeatable daily analytical workflow.",
      },
    ],
  },
];

export const instructorPlaceholder = {
  name: "[Instructor Name Placeholder]",
  role: "Lead Educator & Founder · [YOUR BRAND NAME]",
  portraitUrl: "/images/instructor-portrait.jpg",
  intro:
    "Focused on demystifying market microstructure, auction mechanics, and order-book behavior for serious learners who want clarity beyond lagging indicators.",
  philosophy:
    "Markets move because of an ongoing interaction between passive liquidity and urgent order flow—not magic lines or secret formulas. Our teaching philosophy emphasizes objective observation, structured context, and strict risk discipline over prediction or hype.",
  expertise: [
    "Market Microstructure",
    "Depth of Market (DOM)",
    "Footprint & Cluster Charts",
    "Auction Market Theory",
    "Volume Profile & Delta",
    "Risk-First Execution",
  ],
  socials: [
    { label: "X / Twitter", href: "#instructor-social-x" },
    { label: "YouTube", href: "#instructor-social-youtube" },
    { label: "LinkedIn", href: "#instructor-social-linkedin" },
  ],
};

export const sampleTestimonials: TestimonialPlaceholder[] = [
  {
    id: "sample-01",
    namePlaceholder: "[Student Name Placeholder]",
    rolePlaceholder: "[Learner Profile · Sample Placeholder]",
    initials: "S1",
    rating: 5,
    moduleFocus: "DOM & Liquidity Modules",
    feedback:
      "Sample feedback placeholder: Replace this card with verified student feedback describing how structured DOM and liquidity lessons improved their chart reading clarity.",
  },
  {
    id: "sample-02",
    namePlaceholder: "[Student Name Placeholder]",
    rolePlaceholder: "[Learner Profile · Sample Placeholder]",
    initials: "S2",
    rating: 5,
    moduleFocus: "Footprint & Absorption",
    feedback:
      "Sample feedback placeholder: Replace this card with authentic student commentary on learning to distinguish passive absorption from breakout momentum.",
  },
  {
    id: "sample-03",
    namePlaceholder: "[Student Name Placeholder]",
    rolePlaceholder: "[Learner Profile · Sample Placeholder]",
    initials: "S3",
    rating: 5,
    moduleFocus: "Structure & Risk Execution",
    feedback:
      "Sample feedback placeholder: Replace this card with genuine learner remarks highlighting the beginner-to-advanced curriculum pacing and risk framework.",
  },
];

export const pricingFeatures = [
  {
    label: "Complete Course Modules",
    detail: "All 8 structured modules covering foundations to execution",
    isOptionalPlaceholder: false,
  },
  {
    label: "DOM & Footprint Training",
    detail: "In-depth order book ladder, cluster, delta & imbalance lessons",
    isOptionalPlaceholder: false,
  },
  {
    label: "Practical Chart Examples",
    detail: "Step-by-step annotated market microstructure case studies",
    isOptionalPlaceholder: false,
  },
  {
    label: "Bonus Learning Materials",
    detail: "Workspace setup guides, pre-session checklists & reference notes",
    isOptionalPlaceholder: false,
  },
  {
    label: "[Lifetime Access, if applicable]",
    detail: "Editable placeholder — configure according to your enrollment terms",
    isOptionalPlaceholder: true,
  },
  {
    label: "[Community Access, if applicable]",
    detail: "Editable placeholder — include if a student study group is offered",
    isOptionalPlaceholder: true,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Who is this course for?",
    answer:
      "This course is designed for discretionary traders and serious market learners who want to move beyond lagging indicators and understand how price actually forms through liquidity, order books, and executed volume. Whether you study index futures, liquid equities, commodities, or crypto derivatives, the core principles of two-way market auctions apply wherever transparent volume and order-book data exist.",
  },
  {
    id: "faq-2",
    question: "Do I need prior trading experience?",
    answer:
      "Familiarity with basic candlestick charts and order types (market vs. limit orders) is helpful, though not mandatory. Module 01 begins from first principles—explaining how exchanges match orders and how auctions function—before progressing systematically into DOM ladders, Footprint charts, delta, and execution.",
  },
  {
    id: "faq-3",
    question: "What is Order Flow?",
    answer:
      "Order Flow refers to the real-time stream of resting limit orders (passive liquidity) and executed market orders (aggressive buying and selling) that drive price movement. Instead of looking only at a candle's open, high, low, and close, Order Flow analysis examines the actual buying and selling interaction taking place inside every price level.",
  },
  {
    id: "faq-4",
    question: "What is DOM?",
    answer:
      "DOM stands for Depth of Market—a vertical price ladder displaying the quantity of resting buy limit orders (Bids) below market price and sell limit orders (Asks/Offers) above market price, alongside executed volume at each tick. It provides a transparent window into available liquidity, spread behavior, and immediate order-book pressure.",
  },
  {
    id: "faq-5",
    question: "What tools or platforms are required?",
    answer:
      "During the course, you can learn every concept directly from our high-definition recorded chart demonstrations without purchasing software immediately. When you are ready to practice on your own charts, we walk through popular Order Flow & DOM platforms (such as Sierra Chart, Quantower, ATAS, Bookmap, NinjaTrader, or TradingView Footprint tools) and explain what tick-data feeds to look for based on your market.",
  },
  {
    id: "faq-6",
    question: "Will I get lifetime access?",
    answer:
      "Access duration depends on the enrollment plan configured by [YOUR BRAND NAME]. Please check the Pricing & Enrollment card above for your exact access terms—whether ongoing lifetime access or fixed-term portal access is included with your enrollment.",
  },
  {
    id: "faq-7",
    question: "How will I access the course?",
    answer:
      "Immediately after completing secure checkout via Razorpay, your enrollment confirmation and student portal login credentials are sent to your registered email address. All modules and lessons are organized sequentially inside a clean, distraction-free learning dashboard accessible across desktop and tablet devices.",
  },
  {
    id: "faq-8",
    question: "Is this course suitable for beginners?",
    answer:
      "Yes—provided you approach it as a structured educational discipline rather than a shortcut. Beginners actually benefit from learning sound auction mechanics and risk management early, avoiding years of indicator clutter. Every technical term is defined clearly with visual diagrams before being applied to real charts.",
  },
];
