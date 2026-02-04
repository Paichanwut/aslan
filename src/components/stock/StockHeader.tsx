import { ArrowRight, Plus, Share2 } from "lucide-react";

interface StockHeaderProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  changePercent: string;
  isPositive: boolean;
}

export function StockHeader({
  symbol,
  name,
  price,
  change,
  changePercent,
  isPositive,
}: StockHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          {name} ({symbol})
        </h1>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-semibold">
            <Plus className="w-4 h-4" />
            Add to Watchlist
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 text-slate-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-semibold">
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
      <div className="flex items-baseline gap-3">
        <span className="text-4xl font-bold text-slate-900">${price}</span>
        <span
          className={`text-lg font-bold flex items-center ${
            isPositive ? "text-green-600" : "text-red-500"
          }`}
        >
          {change} ({changePercent})
        </span>
      </div>
    </div>
  );
}
