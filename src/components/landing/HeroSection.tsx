import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_STOCKS } from "@/data/mockData";

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
      <div className="w-full max-w-7xl relative">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">🔥</span>
          <h3 className="text-lg font-bold text-slate-900">Popular today</h3>
        </div>

        {/* Gradient Fades for Scroll Indication */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none hidden md:block"></div>
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Scrollable container */}
        <div className="flex overflow-x-auto pb-6 gap-4 px-4 scrollbar-hide snap-x snap-mandatory -mx-4 md:mx-0 justify-start md:justify-center flex-nowrap">
          {HERO_STOCKS.map((stock) => (
            <div
              key={stock.symbol}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-pointer text-left group min-w-[160px] snap-center flex-shrink-0"
            >
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold text-gray-400 tracking-wider group-hover:text-blue-600 transition-colors uppercase truncate">
                  {stock.name}
                </span>
                {stock.isPositive ? (
                  <div className="text-[10px] font-bold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                    ▲ {stock.change}
                  </div>
                ) : (
                  <div className="text-[10px] font-bold text-red-500 bg-red-50 px-1.5 py-0.5 rounded-full flex items-center gap-1">
                    ▼ {stock.change}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <div className="font-bold text-slate-900 text-lg leading-none">
                  {stock.symbol}
                </div>
                <div className="text-slate-500 font-medium text-xs">
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
