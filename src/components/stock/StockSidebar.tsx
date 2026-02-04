import {
  PieChart,
  Newspaper,
  TrendingUp,
  Activity,
  FileText,
} from "lucide-react";

export function StockSidebar() {
  const menuItems = [
    { icon: PieChart, label: "Overview", active: true },
    { icon: Newspaper, label: "News" },
    { icon: TrendingUp, label: "Technical Analysis" },
    { icon: Activity, label: "Stock Analysis" },
    { icon: FileText, label: "Financials" },
  ];

  return (
    <aside className="w-full md:w-64 flex-shrink-0">
      <nav className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-2 pb-4 md:pb-0 scrollbar-hide">
        {menuItems.map((item) => (
          <button
            key={item.label}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all whitespace-nowrap md:whitespace-normal ${
              item.active
                ? "bg-blue-50 text-blue-600 font-bold"
                : "text-slate-600 hover:bg-gray-50 hover:text-slate-900"
            }`}
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            <span className="text-sm">{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
