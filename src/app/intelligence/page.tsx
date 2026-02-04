"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Brain,
  Cpu,
  Database,
  Globe,
  Filter,
  Zap,
  User,
  Scale,
  Shield,
  FileText,
  Activity,
  Bell,
  Wallet,
  Building,
  Layers,
  Search,
  BarChart,
  TrendingDown,
  LucideIcon,
  Grid,
  Heart,
  Clock,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PAIN_POINTS } from "@/data/mockData";

// define interface for content
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface TopicContent {
  title: string;
  subtitle: string;
  description: string;
  features: FeatureItem[];
}

// Content map for dynamic topics
const TOPIC_CONTENT: Record<string, TopicContent> = {
  data_overload: {
    title: "Cut Through the Noise",
    subtitle: "Solves: Drowning in Data",
    description:
      "Our AI filters out 99% of the noise, delivering only the high-signal intelligence that matters to your portfolio.",
    features: [
      {
        icon: Filter,
        title: "Smart Filtering",
        desc: "Automatically hides irrelevant news and noise, showing only market-moving events.",
      },
      {
        icon: Zap,
        title: "Signal Clarity",
        desc: "Distills complex data into clear buy/sell signals with confidence scores.",
      },
      {
        icon: User,
        title: "Personalized Feed",
        desc: "Curates intelligence based specifically on your portfolio and watchlists.",
      },
    ],
  },
  fomo_panic: {
    title: "Trade with Logic, Not Emotion",
    subtitle: "Solves: FOMO & Panic Selling",
    description:
      "Eliminate emotional biases. Our agents provide objective, data-backed rationale for every potential trade.",
    features: [
      {
        icon: Scale,
        title: "Objective Analysis",
        desc: "Data-driven trade setups that remove emotional bias from decision making.",
      },
      {
        icon: Shield,
        title: "Risk Management",
        desc: "Real-time risk assessment prevents impulsive entries during volatility.",
      },
      {
        icon: FileText,
        title: "Trade Rationales",
        desc: "Every signal comes with a clear, logic-based explanation.",
      },
    ],
  },
  late_entry: {
    title: "Catch Trends Early",
    subtitle: "Solves: Always Late to the Party",
    description:
      "Identify breakouts before they hit the mainstream news. Our real-time monitoring puts you ahead of the curve.",
    features: [
      {
        icon: Zap,
        title: "Early Detection",
        desc: "Identifies trend reversals and breakouts before they hit major news outlets.",
      },
      {
        icon: Activity,
        title: "Momentum Scanner",
        desc: "Tracks volume and price velocity to catch moves at inception.",
      },
      {
        icon: Bell,
        title: "Smart Alerts",
        desc: "Instant notifications when your specific entry criteria are met.",
      },
    ],
  },
  david_goliath: {
    title: "Institutional Power for You",
    subtitle: "Solves: David vs. Goliath",
    description:
      "Level the playing field. Access the same caliber of alternative data and processing power as top hedge funds.",
    features: [
      {
        icon: Wallet,
        title: "Smart Money Tracking",
        desc: "See where hedge funds and insiders are positioning their capital.",
      },
      {
        icon: Building,
        title: "Institutional Data",
        desc: "Access the same alternative data streams used by Wall Street desks.",
      },
      {
        icon: Layers,
        title: "Level 2 Insights",
        desc: "Visualize order book depth to spot accumulation and distribution.",
      },
    ],
  },
  hidden_risks: {
    title: "See What Others Miss",
    subtitle: "Solves: Hidden Risks",
    description:
      "Scan for red flags in earnings reports, insider selling, and macro data that traditional screens overlook.",
    features: [
      {
        icon: Search,
        title: "Forensic Scanning",
        desc: "Deep dives into filings to uncover hidden liabilities and red flags.",
      },
      {
        icon: BarChart,
        title: "Sentiment Shifts",
        desc: "Detects subtle changes in market sentiment before price action follows.",
      },
      {
        icon: TrendingDown,
        title: "Insider Selling",
        desc: "Alerts you when executives start dumping their shares.",
      },
    ],
  },
};

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    icon: Cpu,
    title: "Real-time Processing",
    desc: "Analyzing market movements as they happen, millisecond by millisecond.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    desc: "Monitoring 11,000+ stocks, crypto assets, and forex pairs across all major exchanges.",
  },
  {
    icon: Database,
    title: "Deep History",
    desc: "Cross-referencing current patterns with decades of historical financial data.",
  },
];

function IntelligenceContent() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic");

  // Find matching pain point data for visual consistency (icon, colors)
  const painPointData = topic ? PAIN_POINTS.find((p) => p.id === topic) : null;
  const content = topic && TOPIC_CONTENT[topic] ? TOPIC_CONTENT[topic] : null;

  const features = content ? content.features : DEFAULT_FEATURES;

  // Use dynamic icon/color if available, otherwise default
  const HeaderIcon = painPointData ? painPointData.icon : Brain;
  const iconColor = painPointData ? painPointData.color : "text-blue-600";
  const iconBg = painPointData ? painPointData.bg : "bg-blue-50";

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="p-2 rounded-full hover:bg-gray-100 text-slate-600 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="font-bold text-slate-900">Back to Dashboard</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div
            className={`inline-flex items-center justify-center p-3 rounded-2xl mb-6 ${iconBg}`}
          >
            <HeaderIcon className={`w-12 h-12 ${iconColor}`} />
          </div>

          {content ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <span className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2 block">
                {content.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                {content.title}
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                {content.description}
              </p>
            </div>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
                Unlock Your{" "}
                <span className="text-blue-600">Market Intelligence</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Stop trading in the dark. Our AI agents process millions of data
                points 24/7 to give you the edge that was previously only
                available to institutional giants.
              </p>
            </>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow text-center animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-backwards"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mx-auto mb-6 text-slate-900">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-500">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Ready to upgrade your trading?
            </h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Join thousands of traders who are already using AI to make
              smarter, faster decisions.
            </p>
            <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Get Started Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function IntelligencePage() {
  return (
    <Suspense>
      <IntelligenceContent />
    </Suspense>
  );
}
