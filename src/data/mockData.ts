import {
  Search,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ArrowRight,
  Grid,
  Heart,
  Clock,
  Layers,
  Box,
  Edit,
  Scan,
  BarChart2,
  Globe,
  DollarSign,
  Activity,
  FileText,
  Video,
  Mic,
  Edit3,
  ArrowLeftRight,
  CreditCard,
  List,
  BookOpen,
  BarChart3,
  Check,
} from "lucide-react";

// Hero Section Data
export const HERO_STOCKS = [
  {
    symbol: "MSFT",
    name: "MICROSOFT",
    price: "411.21",
    change: "-2.96%",
    isPositive: false,
  },
  {
    symbol: "AMD",
    name: "ADVANCED MICRO",
    price: "242.11",
    change: "-1.72%",
    isPositive: false,
  },
  {
    symbol: "SPY",
    name: "SPDR S&P 500",
    price: "689.44",
    change: "-0.87%",
    isPositive: false,
  },
  {
    symbol: "PYPL",
    name: "PAYPAL",
    price: "41.70",
    change: "-25.49%",
    isPositive: false,
  },
  {
    symbol: "SMCI",
    name: "SUPER MICRO",
    price: "29.67",
    change: "-0.13%",
    isPositive: false,
  },
  {
    symbol: "NVDA",
    name: "NVIDIA",
    price: "887.00",
    change: "+3.12%",
    isPositive: true,
  },
  {
    symbol: "TSLA",
    name: "TESLA",
    price: "198.50",
    change: "+1.05%",
    isPositive: true,
  },
  {
    symbol: "AAPL",
    name: "APPLE",
    price: "182.30",
    change: "-0.45%",
    isPositive: false,
  },
];

// Pain Points Data
export const PAIN_POINTS = [
  {
    icon: Grid,
    color: "text-blue-600",
    bg: "bg-blue-50",
    title: "Drowning in Data",
    desc: "Charts, signals, news, filings—weeks of analysis with conflicting views. Result? Paralyzed by data overload.",
  },
  {
    icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "FOMO & Panic Selling",
    desc: "Bought high? Sold low? You're not alone. Emotions drive 80% of retail losses. You need an objective voice.",
  },
  {
    icon: Clock,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "Always Late to the Party",
    desc: "See that spike? It already happened. While you sleep, algorithms trade. While you work, opportunities pass.",
  },
  {
    icon: Layers,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "David vs. Goliath",
    desc: "Hedge funds have AI, Bloomberg terminals, and teams of analysts. What do you have?",
  },
  {
    icon: Activity,
    color: "text-green-600",
    bg: "bg-green-50",
    title: "Hidden Risks",
    desc: "Market manipulation and hidden risks are everywhere. Without AI, you're investing blind.",
  },
];

// Tools Section Data
export const TOOLS_DATA = [
  {
    type: "card",
    icon: Box,
    iconColor: "text-red-500",
    iconBg: "bg-red-50",
    title: "Smart Money",
    desc: "Follow what insiders, analysts, Congress, and billionaires are buying before the market reacts.",
    features: [
      "Cross-validate from multiple sources",
      "Track 10,000+ insiders & institutions",
      "Real-time alerts on high-confidence trades",
    ],
    linkText: "View smart money moves",
    linkColor: "text-blue-600",
  },
  {
    type: "card",
    icon: Layers,
    iconColor: "text-orange-500",
    iconBg: "bg-orange-50",
    title: "AI Research Agents",
    desc: "Your 24/7 team of specialized analysts for stocks, crypto, forex, and ETFs.",
    features: [
      "7 expert agents working around the clock",
      "Institutional-grade research instantly",
      "All research saved in your library",
    ],
    linkText: "Start research",
    linkColor: "text-blue-600",
  },
  {
    type: "card",
    // type: "highlight", // InvestGPT
    icon: Edit,
    iconColor: "text-blue-500",
    iconBg: "bg-blue-50",
    title: "InvestGPT",
    desc: "Your 24/7 AI analyst that answers any market question instantly.",
    features: [
      "Real-time data analysis",
      "Technical & fundamental insights",
      "Instant intelligence—just ask",
    ],
    linkText: "Start chatting",
      linkColor: "text-blue-600",
  },
  {
    type: "card",
    icon: Scan,
    iconColor: "text-green-500",
    iconBg: "bg-green-50",
    title: "AI Stock Picker",
    desc: "Discover high-potential stocks daily with AI-driven strategies.",
    features: [
      "AI analysis of 9,000+ U.S. stocks",
      "Daily updated stock rankings",
      "Actionable, data-driven picks",
    ],
    linkText: "Get today's picks",
    linkColor: "text-blue-600",
  },
];

// Agent Demo Questions
export const AGENT_DEMO_QUESTIONS = [
  {
    text: "Should I buy NVDA now?",
    subtext: "Get instant analysis from multiple specialized agents",
    // active: true,
  },
  {
    text: "What stocks should I buy today?",
    subtext: "Your agents scan 11,000+ stocks in real-time",
  },
  {
    text: "Any day trading opportunities?",
    subtext: "Live setups refreshed every 30 seconds",
  },
  {
    text: "Are there any negative news on Apple?",
    subtext: "Real-time news sentiment and impact analysis",
  },
  {
    text: "Analyze Tesla's earnings report",
    subtext: "Compare guidance vs analyst expectations",
  },
  {
    text: "Is Bitcoin bullish or bearish?",
    subtext: "Multi-timeframe technical breakdown",
  },
];

// Research Agents Data
export const RESEARCH_AGENTS = [
  {
    icon: BarChart2,
    color: "text-red-500",
    title: "Commodity Strategist",
    desc: "Smarter analysis. Better commodity decisions.",
    link: "Spot",
  },
  {
    icon: Globe,
    color: "text-green-500",
    title: "Market Outlook",
    desc: "Live market momentum: track shifts across US, Canada, Europe...",
    link: "Start",
  },
  {
    icon: TrendingUp,
    color: "text-orange-500",
    title: "Swing Trade Analysis",
    desc: "Spot short- to medium-term swing opportunities.",
    link: "Start",
  },
  {
    icon: DollarSign,
    color: "text-blue-500",
    title: "Buy or Sell",
    desc: "Provides investment ratings and analysis to help investors evaluate decisions.",
    link: "Start",
  },
  {
    icon: Activity,
    color: "text-green-600",
    title: "Technical Analyst",
    desc: "Live price trends & technical analysis.",
    link: "Analyze",
  },
  {
    icon: FileText,
    color: "text-orange-600",
    title: "News Sentiment",
    desc: "Gauges bullish or bearish news sentiment.",
    link: "Track",
  },
  {
    icon: DollarSign,
    color: "text-purple-500",
    title: "Fundamental Analyst",
    desc: "Evaluates stock value & financial health with latest data.",
    link: "Evaluate",
  },
  {
    icon: Activity,
    color: "text-red-500",
    title: "Trading Signals QuickView",
    desc: "Check short-term trading signals across multiple timeframes.",
    link: "Check",
  },
  {
    icon: TrendingDown,
    color: "text-pink-500",
    title: "Short Selling Scout",
    desc: "Identify overvalued stocks ripe for a correction.",
    link: "Find",
  },
  {
    icon: BarChart3,
    color: "text-teal-500",
    title: "ETF Rotation",
    desc: "Track sector rotation and flow into top ETFs.",
    link: "Monitor",
  },
  {
    icon: Sparkles,
    color: "text-yellow-500",
    title: "Crypto Pulse",
    desc: "AI-driven sentiment and on-chain analysis for crypto assets.",
    link: "Scan",
  },
];

// Discover More Data
export const DISCOVER_ITEMS = [
  {
    icon: Video,
    color: "text-purple-600",
    bg: "bg-purple-50",
    title: "Videos",
    desc: "Fresh, actionable market content.",
  },
  {
    icon: Mic,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "Podcast",
    desc: "Fresh take on the financial markets",
  },
  {
    icon: Edit3,
    color: "text-blue-500",
    bg: "bg-blue-50",
    title: "InvestGPT",
    desc: "Get instant answers to any market question",
  },
  {
    icon: Grid,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    title: "AI Stock Picker",
    desc: "Find tomorrow's winners today",
  },
  {
    icon: ArrowLeftRight,
    color: "text-orange-500",
    bg: "bg-orange-50",
    title: "Smart Signals",
    desc: "Trade what the pros are watching",
  },
  {
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-50",
    title: "Market Movers",
    desc: "Catch trends before they take off",
  },
  {
    icon: CreditCard,
    color: "text-purple-500",
    bg: "bg-purple-50",
    title: "Watchlist",
    desc: "Never miss a move on your picks",
  },
  {
    icon: List,
    color: "text-blue-400",
    bg: "bg-blue-50",
    title: "Stocklist",
    desc: "Browse trending stocks, ETFs & crypto",
  },
  {
    icon: Globe,
    color: "text-teal-500",
    bg: "bg-teal-50",
    title: "Forex Scanner",
    desc: "Real-time currency pair opportunities",
  },
  {
    icon: BarChart3,
    color: "text-amber-500",
    bg: "bg-amber-50",
    title: "Earnings Calendar",
    desc: "Stay ahead of major market events",
  },
];

// Education / Master Markets Data
export const MARKET_EDUCATION = [
  {
    icon: BookOpen,
    iconColor: "text-slate-700",
    iconBg: "bg-blue-100",
    title: "Academy",
    desc: "Learning center featuring tutorials, glossary, help docs, and expert investing tips",
    linkText: "Start Learning",
  },
  {
    icon: BarChart3,
    iconColor: "text-slate-700",
    iconBg: "bg-green-100",
    title: "Market Lens",
    desc: "Actionable investment ideas and sector insights across stocks, ETFs, crypto, and forex",
    linkText: "Explore Ideas",
  },
  {
    icon: Video,
    iconColor: "text-slate-700",
    iconBg: "bg-yellow-100",
    title: "Video Tutorials",
    desc: "How-to videos for mastering AI tools, features, and smarter investing techniques",
    linkText: "View Tutorials",
  },
];

// Top Articles Data
export const TOP_ARTICLES = [
  {
    title: "Travel Industry Outlook 2026: Airlines, Hotels, and Booking Stocks Investment Guide",
    date: "Jan 26, 2026",
    color: "from-green-800 to-emerald-600",
  },
  {
    title: "Cathie Wood's Golden Age Thesis: What Investors Need to Know in 2026",
    date: "Jan 20, 2026",
    color: "from-slate-900 to-blue-900",
  },
  {
    title: "Walmart Joins Nasdaq-100 in 2026: What Investors Need to Know",
    date: "Jan 16, 2026",
    color: "from-yellow-600 to-orange-500",
  },
  {
    title: "Apple and Google AI Partnership 2026: Everything You Need to Know About Gemini-Pro",
    date: "Jan 14, 2026",
    color: "from-gray-800 to-gray-600",
  },
  {
    title: "The Rise of Quantum Computing: Investment Opportunities for the Next Decade",
    date: "Jan 10, 2026",
    color: "from-purple-800 to-indigo-600",
  },
];

// CTA Features
export const CTA_FEATURES = [
  "Instant intelligence",
  "Confident, rational decisions",
  "24/7 opportunity detection",
  "Institutional-grade insights",
  "Real-time risk monitoring",
  "Portfolio optimization",
  "Automated trade alerts",
  "Sentiment analysis",
];
