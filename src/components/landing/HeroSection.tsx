import { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HERO_STOCKS } from "@/data/mockData";

export function HeroSection() {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredStocks = HERO_STOCKS.filter(
    (stock) =>
      stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
      stock.name.toLowerCase().includes(query.toLowerCase()),
  );

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
      <div className="w-full max-w-2xl relative mb-10 text-left">
        <div className="absolute -top-3 left-6 z-[51]">
          <span className="bg-white text-[10px] font-bold text-green-600 px-2 py-0.5 rounded-full border shadow-sm flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            AI-Powered
          </span>
        </div>
        <div className="relative group z-50">
          <input
            type="text"
            placeholder="Ask anything..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowResults(true);
            }}
            onFocus={() => setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            className="w-full h-12 pl-12 pr-28 rounded-xl border border-gray-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-300 text-base transition-all"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />

          <button className="absolute right-1.5 top-1.5 bottom-1.5 bg-gray-50 hover:bg-white border border-gray-100 hover:border-gray-200 text-slate-800 font-semibold px-4 rounded-lg transition-all flex items-center gap-1 shadow-sm text-sm">
            Ask AI <ArrowRight className="w-3 h-3 ml-1" />
          </button>

          {/* Search Dropdown Results */}
          {showResults && query.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
              <div className="py-2">
                <div className="px-4 py-2 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  Suggestions
                </div>
                {filteredStocks.length > 0 ? (
                  <ul>
                    {filteredStocks.map((stock) => (
                      <li
                        key={stock.symbol}
                        className="border-b border-gray-50 last:border-0"
                      >
                        <Link
                          href={`/stock/${stock.symbol}`}
                          className="px-4 py-3 hover:bg-blue-50 cursor-pointer flex justify-between items-center transition-colors block w-full"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold text-xs text-slate-600">
                              {stock.symbol[0]}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900 text-sm">
                                {stock.symbol}
                              </div>
                              <div className="text-xs text-slate-500">
                                {stock.name}
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900 text-sm">
                              ${stock.price}
                            </div>
                            <div
                              className={cn(
                                "text-[10px] font-bold",
                                stock.isPositive
                                  ? "text-green-600"
                                  : "text-red-500",
                              )}
                            >
                              {stock.change}
                            </div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-8 text-center">
                    <div className="text-slate-400 mb-2">🤔</div>
                    <p className="text-slate-500 text-sm">
                      No results found for "{query}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Popular Today */}
      <div className="w-full max-w-7xl relative">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="text-xl">🔥</span>
          <h3 className="text-lg font-bold text-slate-900">Popular today</h3>
        </div>

        {/* Gradient Fades for Scroll Indication */}
        {/* Removed left gradient to prevent hiding the first item */}
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none hidden md:block"></div>

        {/* Scrollable container */}
        <div className="flex overflow-x-auto pb-6 gap-4 px-4 scrollbar-hide snap-x snap-mandatory -mx-4 md:mx-0 justify-start flex-nowrap">
          {HERO_STOCKS.map((stock) => (
            <Link
              key={stock.symbol}
              href={`/stock/${stock.symbol}`}
              className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-lg hover:border-blue-100 transition-all duration-300 cursor-pointer text-left group min-w-[160px] snap-center flex-shrink-0 block"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
