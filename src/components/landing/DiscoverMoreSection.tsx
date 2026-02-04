import {
  Video,
  Mic,
  Edit3,
  Grid,
  ArrowLeftRight,
  Activity,
  CreditCard,
  List,
} from "lucide-react";

const DISCOVER_ITEMS = [
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
];

export function DiscoverMoreSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-orange-500 rounded-lg p-1.5 text-white">
            <span className="font-bold">Original</span>
            {/* Using text placeholder or simple icon if lucide doesn't have the ribbon shape exactly */}
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">
            Discover More
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DISCOVER_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group cursor-pointer flex items-start gap-4"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
