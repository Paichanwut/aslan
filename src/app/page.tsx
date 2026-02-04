import { Search, Sparkles, Flame } from "lucide-react";
import { POPULAR_STOCKS } from "@/lib/mockData";
import { StockCard } from "@/components/StockCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Enhance your{" "}
            <span className="text-blue-600 relative">
              stock
              <span className="absolute bottom-1 left-0 w-full h-1 bg-blue-200 opacity-50"></span>
            </span>{" "}
            _ with AI
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Get instant deep research insights across 11,000+ stocks, crypto,
            forex, and ETFs. Powered by real-time data and AI research agents.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-20">
          <div className="absolute -top-3 left-4">
            <div className="bg-white border rounded-full px-2 py-0.5 flex items-center gap-1 shadow-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-[10px] font-bold text-gray-700 uppercase tracking-wide">
                AI-Powered
              </span>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative bg-white shadow-xl rounded-2xl border p-2 flex items-center">
              <Search className="w-5 h-5 text-gray-400 ml-3 mr-3" />
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 outline-none text-gray-700 bg-transparent placeholder:text-gray-400"
              />
              <button className="bg-gray-50 hover:bg-gray-100 text-gray-800 font-medium px-4 py-2 rounded-xl flex items-center gap-2 border transition-colors">
                Ask AI <Sparkles className="w-4 h-4 text-blue-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Popular Stocks Section */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Flame className="w-5 h-5 text-orange-500 fill-orange-500" />
            <h2 className="text-lg font-bold text-gray-900">Popular today</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {POPULAR_STOCKS.map((stock) => (
              <StockCard key={stock.symbol} stock={stock} />
            ))}
          </div>
        </div>

        {/* Footer Text */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">
            The Market Never Sleeps.
            <br />
            Neither Should Your Intelligence.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Every day, millions of investors face the same struggles.
            <br />
            Deep research for investing has become essential for success in
            today&apos;s markets.
          </p>
        </div>
      </div>
    </main>
  );
}
