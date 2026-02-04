import {
  Search,
  Sparkles,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STOCK_DATA = [
  {
    symbol: "MSFT",
    name: "STOCK",
    price: "411.21",
    change: "-2.96%",
    isPositive: false,
  },
  {
    symbol: "AMD",
    name: "STOCK",
    price: "242.11",
    change: "-1.72%",
    isPositive: false,
  },
  {
    symbol: "SPY",
    name: "ETF",
    price: "689.44",
    change: "-0.87%",
    isPositive: false,
  },
  {
    symbol: "PYPL",
    name: "STOCK",
    price: "41.70",
    change: "-25.49%",
    isPositive: false,
  },
  {
    symbol: "SMCI",
    name: "STOCK",
    price: "29.67",
    change: "-0.13%",
    isPositive: false,
  },
];

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-4 text-center max-w-6xl mx-auto">
      {/* Headlines */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-6">
        Enhance your{" "}
        <span className="text-blue-600 relative inline-block">
          portfolio management
          <svg
            className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10"
            viewBox="0 0 100 10"
            preserveAspectRatio="none"
          >
            <path
              d="M0 5 Q 50 10 100 5"
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
            />
          </svg>
        </span>{" "}
        with AI
      </h1>

      <p className="text-lg text-slate-500 max-w-2xl mb-12 leading-relaxed">
        Get instant deep research insights across 11,000+ stocks, crypto, forex,
        and ETFs.
        <br className="hidden md:block" />
        Powered by real-time data and AI research agents.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-3xl relative mb-16">
        <div className="absolute -top-3 left-6 z-10">
          <span className="bg-white text-xs font-bold text-green-600 px-2 py-0.5 rounded-full border shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            AI-Powered
          </span>
        </div>
        <div className="relative group">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full h-16 pl-14 pr-32 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-lg transition-all"
          />
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />

          <button className="absolute right-2 top-2 bottom-2 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 text-slate-800 font-semibold px-6 rounded-xl transition-all flex items-center gap-1 shadow-sm">
            Ask AI <ArrowRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>

      {/* Popular Today */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 mb-8">
          <span className="text-2xl">🔥</span>
          <h3 className="text-xl font-bold text-slate-900">Popular today</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {STOCK_DATA.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer text-left group"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold text-gray-400 tracking-wider group-hover:text-blue-600 transition-colors">
                  {stock.name}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-slate-900 text-lg">
                    {stock.symbol}
                  </div>
                  <div
                    className={cn(
                      "text-xs font-semibold mt-1",
                      stock.isPositive ? "text-green-600" : "text-red-500",
                    )}
                  >
                    {stock.change}
                  </div>
                </div>
                <div className="text-slate-700 font-bold">${stock.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
