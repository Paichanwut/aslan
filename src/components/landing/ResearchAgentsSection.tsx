import {
  ArrowRight,
  BarChart2,
  Globe,
  TrendingUp,
  DollarSign,
  Activity,
  FileText,
} from "lucide-react";

const AGENTS = [
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
];

export function ResearchAgentsSection() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
            Your AI Research Agents for Deep Market Analysis
          </h2>
          <p className="text-lg text-slate-500 max-w-3xl mx-auto">
            Specialized agents providing institutional-grade deep research
            across stocks, crypto, forex, and ETFs. Make confident trading and
            investing decisions 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {AGENTS.map((agent, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <agent.icon className={`w-5 h-5 ${agent.color}`} />
                <h3 className="font-bold text-slate-900 text-sm">
                  {agent.title}
                </h3>
              </div>
              <p className="text-slate-500 text-sm mb-6 flex-1">{agent.desc}</p>
              <a
                href="#"
                className="flex items-center gap-1 text-blue-600 font-bold text-sm group-hover:gap-2 transition-all"
              >
                {agent.link} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}

          {/* "What Agents Next?" Card */}
          <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-100 transition-colors cursor-pointer min-h-[180px]">
            <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center mb-3">
              <span className="text-xl text-gray-400">+</span>
            </div>
            <h3 className="font-bold text-gray-600">What Agents Next?</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
