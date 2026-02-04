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
    <section className="flex flex-col items-center justify-center py-10 px-4 text-center max-w-6xl mx-auto">
      {/* Headlines */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
        Enhance your{" "}
        <span className="text-blue-600 relative inline-block">
          portfolio management
          <svg
            className="absolute w-full h-2 -bottom-1 left-0 text-blue-200 -z-10"
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

      <p className="text-base text-slate-500 max-w-2xl mb-8 leading-relaxed">
        Get instant deep research insights across 11,000+ stocks, crypto, forex,
        and ETFs.
        <br className="hidden md:block" />
        Powered by real-time data and AI research agents.
      </p>

      {/* Search Bar */}
      <div className="w-full max-w-2xl relative mb-10">
        <div className="absolute -top-3 left-6 z-10">
          <span className="bg-white text-[10px] font-bold text-green-600 px-2 py-0.5 rounded-full border shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            AI-Powered
          </span>
        </div>
        <div className="relative group">
          <input
            type="text"
            placeholder="Ask anything..."
            className="w-full h-12 pl-12 pr-28 rounded-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-base transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 text-slate-800 font-semibold px-4 rounded-lg transition-all flex items-center gap-1 shadow-sm text-sm">
            Ask AI <ArrowRight className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      {/* Popular Today */}
      <div className="w-full">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">🔥</span>
          <h3 className="text-lg font-bold text-slate-900">Popular today</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {STOCK_DATA.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow cursor-pointer text-left group"
            >
              <div className="flex justify-between items-start mb-2">
                <span className="text-[10px] font-bold text-gray-400 tracking-wider group-hover:text-blue-600 transition-colors">
                  {stock.name}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-bold text-slate-900 text-base">
                    {stock.symbol}
                  </div>
                  <div
                    className={cn(
                      "text-[10px] font-semibold mt-0.5",
                      stock.isPositive ? "text-green-600" : "text-red-500",
                    )}
                  >
                    {stock.change}
                  </div>
                </div>
                <div className="text-slate-700 font-bold text-sm">
                  ${stock.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
