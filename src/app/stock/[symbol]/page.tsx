"use client";

import { useParams } from "next/navigation";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { StockHeader } from "@/components/stock/StockHeader";
import { StockSidebar } from "@/components/stock/StockSidebar";
import { StockChart } from "@/components/stock/StockChart";

export default function StockDetailPage() {
  const params = useParams();
  const symbol = (params.symbol as string).toUpperCase();

  // Mock data based on symbol (defaulting to AMD for demo purposes if not specific)
  // In a real app, you'd fetch this data
  const stockData = {
    symbol: symbol,
    name: symbol === "AMD" ? "Advanced Micro Devices, Inc." : `${symbol} Corp`,
    price: "242.11",
    change: "-4.20",
    changePercent: "-1.72%",
    isPositive: false,
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-20">
      {/* Navigation Bar Placeholder */}
      <div className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-40 flex items-center gap-4">
        <Link
          href="/"
          className="p-2 rounded-full hover:bg-gray-100 text-slate-600 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <span className="font-bold text-slate-900">Back to Dashboard</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <StockHeader {...stockData} />

        <div className="flex flex-col md:flex-row gap-8">
          <StockSidebar />

          <main className="flex-1 min-w-0">
            <StockChart />

            {/* AI Chat Input - Specific to this stock */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-2 flex items-center gap-2 mt-4 relative group">
              <div className="pl-4 pr-2 text-blue-600 font-bold text-sm bg-blue-50 py-1 rounded-lg">
                Auto
              </div>
              <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 h-10 bg-transparent border-none focus:outline-none text-slate-900 placeholder-slate-400 text-sm"
              />
              <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors">
                <Send className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center mt-2">
              <p className="text-[10px] text-slate-400">
                AI can make mistakes. Information only, not financial advice.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
