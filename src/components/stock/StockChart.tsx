export function StockChart() {
  // Mock simplified chart bars
  const bars = Array.from({ length: 40 }, (_, i) => ({
    height: Math.random() * 60 + 20 + "%",
    color: Math.random() > 0.4 ? "bg-green-500" : "bg-red-500",
  }));

  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-6">
      <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-4">
        {["1M", "3M", "6M", "YTD", "1Y", "2Y", "5Y"].map((period) => (
          <button
            key={period}
            className={`px-3 py-1 text-xs font-bold rounded-lg transition-colors ${
              period === "6M"
                ? "bg-slate-900 text-white"
                : "text-slate-500 hover:bg-gray-100"
            }`}
          >
            {period}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-2 text-xs font-bold text-slate-500 border border-gray-200 rounded-lg px-2 py-1">
          <span className="w-2 h-2 rounded bg-red-600"></span>
          AMD
        </div>
      </div>

      <div className="h-64 flex items-end justify-between gap-1 px-2">
        {bars.map((bar, i) => (
          <div
            key={i}
            className={`w-full rounded-t-sm transition-all hover:opacity-80 ${bar.color}`}
            style={{ height: bar.height }}
          ></div>
        ))}
      </div>

      <div className="flex justify-between mt-4 text-xs text-slate-400 font-medium px-2">
        <span>Aug 2025</span>
        <span>Sep</span>
        <span>Oct</span>
        <span>Nov</span>
        <span>Dec</span>
        <span>Jan 2026</span>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        {[
          { icon: "🌐", text: "Market Outlook" },
          { icon: "📈", text: "Swing Trade Analysis" },
          { icon: "💎", text: "Buy or Sell" },
          { icon: "📊", text: "Technical Analyst" },
          { icon: "📰", text: "News Sentiment" },
        ].map((tag) => (
          <button
            key={tag.text}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-gray-200 text-slate-600 text-xs font-bold hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            <span>{tag.icon}</span>
            {tag.text}
          </button>
        ))}
      </div>
    </div>
  );
}
