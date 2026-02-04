"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Box,
  Layers,
  Edit,
  Scan,
  Database,
  Search,
  Zap,
  Shield,
  Target,
  BarChart2,
  Lock,
  MessageSquare,
  TrendingUp,
  LineChart,
  List,
  LucideIcon,
  CheckCircle2,
} from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { TOOLS_DATA } from "@/data/mockData";

// define interface for content
interface FeatureItem {
  icon: LucideIcon;
  title: string;
  desc: string;
}

interface ToolContent {
  title: string;
  subtitle: string;
  description: string;
  features: FeatureItem[];
}

// Content map for dynamic tools
const TOOL_CONTENT: Record<string, ToolContent> = {
  smart_money: {
    title: "Follow the Whales",
    subtitle: "Tool: Smart Money Tracker",
    description:
      "Don't guess where the market is going. See exactly where insiders, politicians, and hedge funds are putting their money in real-time.",
    features: [
      {
        icon: Target,
        title: "Insider Trades",
        desc: "Live feed of CEO and CFO purchases. When they buy with their own money, pay attention.",
      },
      {
        icon: Database,
        title: "Congressional Trading",
        desc: "Track the best trader in the world: Nancy Pelosi. Copy trades from top politicians.",
      },
      {
        icon: BarChart2,
        title: "Hedge Fund Flows",
        desc: "Analyze 13F filings instantly to see what the biggest funds are accumulating this quarter.",
      },
    ],
  },
  ai_agents: {
    title: "Your Personal Analyst Team",
    subtitle: "Tool: AI Research Agents",
    description:
      "Scale your research capable with a team of specialized AI agents. Assign them to deep-dive tickers, sectors, or macro events 24/7.",
    features: [
      {
        icon: Search,
        title: "Deep Dive Reports",
        desc: "Generate comprehensive investment memos with one click, covering financials, risks, and catalysts.",
      },
      {
        icon: Zap,
        title: "Real-time Monitoring",
        desc: "Agents stay active, alerting you only when their specific thesis criteria are met or broken.",
      },
      {
        icon: Layers,
        title: "Multi-Agent Synthesis",
        desc: "Get a balanced view as different agents (fundamental, technical, macro) debate the investment case.",
      },
    ],
  },
  invest_gpt: {
    title: "Instant Market Answers",
    subtitle: "Tool: InvestGPT",
    description:
      "The smartest financial chatbot. Ask complex questions about stocks, crypto, or economics and get instant, data-backed answers with citations.",
    features: [
      {
        icon: MessageSquare,
        title: "Natural Conversation",
        desc: "Ask follow-up questions and refine your analysis just like talking to a senior analyst.",
      },
      {
        icon: LineChart,
        title: "Chart Integration",
        desc: "Ask for a chart and InvestGPT will render technical indicators and key levels instantly.",
      },
      {
        icon: Lock,
        title: "Private & Secure",
        desc: "Your data and queries are private. Enterprise-grade security for your proprietary research.",
      },
    ],
  },
  stock_picker: {
    title: "Data-Driven Winners",
    subtitle: "Tool: AI Stock Picker",
    description:
      "Proprietary AI models scan thousands of assets daily to find the highest probability setups based on price action and fundamentals.",
    features: [
      {
        icon: Scan,
        title: "Daily Rankings",
        desc: "Fresh list of top 10 bullish and bearish ideas generated before the market opens every day.",
      },
      {
        icon: TrendingUp,
        title: "Win-Rate Backtesting",
        desc: "See exactly how specific strategies have performed historically before you risk capital.",
      },
      {
        icon: List,
        title: "Custom Screeners",
        desc: "Build your own AI scanning logic without writing a single line of code.",
      },
    ],
  },
};

const DEFAULT_FEATURES: FeatureItem[] = [
  {
    icon: Database,
    title: "Advanced Data",
    desc: "Access institutional-grade data sources.",
  },
  {
    icon: Shield,
    title: "Secure Platform",
    desc: "Your data and research are always protected.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    desc: "Real-time insights delivered millisecond-fast.",
  },
];

function ToolsContent() {
  const searchParams = useSearchParams();
  const toolId = searchParams.get("tool");

  // Find matching tool data for visual consistency (icon, colors)
  const toolData = toolId ? TOOLS_DATA.find((t) => t.id === toolId) : null;
  const content = toolId && TOOL_CONTENT[toolId] ? TOOL_CONTENT[toolId] : null;

  const features = content ? content.features : DEFAULT_FEATURES;

  // Use dynamic icon/color if available, otherwise default
  const HeaderIcon = toolData ? toolData.icon : Box;
  const iconColor = toolData ? toolData.iconColor : "text-blue-600";
  const iconBg = toolData ? toolData.iconBg : "bg-blue-50";

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
                Powerful <span className="text-blue-600">Trading Tools</span>
              </h1>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                Equip yourself with the same technology used by top hedge funds
                and institutional traders.
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

        <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-3xl p-10 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">
              Start using{" "}
              {content ? content.subtitle.replace("Tool: ", "") : "Aslan Tools"}{" "}
              today
            </h2>
            <p className="text-blue-100 mb-8 max-w-xl mx-auto">
              Get full access to updates, alerts, and premium features with a
              Pro subscription.
            </p>
            <button className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ToolsPage() {
  return (
    <Suspense>
      <ToolsContent />
    </Suspense>
  );
}
