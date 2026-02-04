import Link from "next/link";
import {
  Home,
  Compass,
  Search,
  Star,
  Globe,
  Cpu,
  Zap,
  Activity,
  Briefcase,
  Clock,
  MessageSquare,
  BarChart2,
  ChevronLeft,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Compass, label: "Discover", href: "#" },
  { icon: Search, label: "Research", href: "#" },
];

const SECONDARY_NAV_ITEMS = [
  { icon: Star, label: "Watchlist", href: "#" },
  { icon: Globe, label: "Market Movers", href: "#" },
  { icon: Cpu, label: "AI Stock Picker", href: "#" },
  { icon: Zap, label: "Smart Signals", href: "#" },
  { icon: Activity, label: "Smart Money", href: "#" },
];

const TOOLS_ITEMS = [
  { icon: Briefcase, label: "Portfolio Toolbox", href: "#" },
];

const HISTORY_ITEMS = [
  { icon: Clock, label: "History", href: "#" },
  { icon: MessageSquare, label: "Chat History", href: "#" },
  { icon: BarChart2, label: "Research History", href: "#" },
];

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-gray-50/50 flex flex-col hidden md:flex fixed left-0 top-0">
      <div className="p-4 flex items-center justify-between border-b">
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-bold text-blue-600">kavout</div>
        </Link>
        <button className="p-1 hover:bg-gray-200 rounded">
          <ChevronLeft className="w-4 h-4 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-auto py-4">
        <div className="px-3 space-y-1">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                item.label === "Home"
                  ? "bg-gray-200 text-gray-900"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
              )}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 px-3 space-y-1">
          {SECONDARY_NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 px-3 border-t pt-4 space-y-1">
          {TOOLS_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>

        <div className="mt-6 px-3 space-y-1">
          {HISTORY_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <button className="w-full bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700 transition-colors">
          Sign Up
        </button>
        <button className="w-full mt-2 bg-gray-200 text-gray-700 rounded-lg py-2 text-sm font-medium hover:bg-gray-300 transition-colors">
          Log in
        </button>
      </div>
    </div>
  );
}
