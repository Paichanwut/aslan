import Link from "next/link";
import {
  Home,
  Compass,
  Clock,
  Search,
  Star,
  Globe,
  Cpu,
  Zap,
  DollarSign,
  Briefcase,
  History,
  MessageSquare,
  BarChart2,
  ChevronLeft,
  Hexagon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { icon: Home, label: "Home", href: "/", isActive: true },
  { icon: Compass, label: "Discover", href: "#" },
  { icon: Clock, label: "Research", href: "#" }, // Using Clock or Search for Research? Image has a Clock/Paper icon. Let's use Clock or FileText. Actually the image has a clock-like icon for "Research"? No, looks like a document/search. Let's stick to Search or similar. Wait, look at the image: "Research" has a magnifying glass/document icon? No, looks like a clock or timer? Ah, "Research" icon looks like a document with a magnifying glass maybe? Or a report. History has a clock.
  // Let's re-examine image 2.
  // Home: House icon.
  // Discover: Lightbulb icon.
  // Research: Document with a clock or eye? It looks like a report. Let's use FileText or Search.
  // Watchlist: Star.
  // Market Movers: Globe.
  // AI Stock Picker: Target/Selection icon?
  // Smart Signals: Signal waves.
  // Smart Money: Dollar sign coin.
  // Portfolio Toolbox: Layout/Grid icon.
  // History: Clock.
  // Chat History: Bubble.
  // Research History: Bar chart.
];

// Let's correct the icons based on closer inspection if possible, or use closest matches.
// Discover: Lightbulb
// Research: Scroll/File?
import { Lightbulb, FileText, Target, Radio, LayoutGrid } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 h-screen border-r bg-white flex flex-col fixed left-0 top-0">
      {/* Header */}
      <div className="p-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center transform rotate-45">
            <div className="w-4 h-4 bg-white transform -rotate-45" />
          </div>
          <span className="text-2xl font-bold text-blue-700 tracking-tight">
            aslan
          </span>
        </Link>
        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <ChevronLeft className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar">
        {/* Main Nav */}
        <div className="space-y-1 px-3">
          <Link
            href="/"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-semibold bg-gray-100/80 text-gray-900"
          >
            <Home className="w-5 h-5" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Lightbulb className="w-5 h-5" />
            Discover
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <FileText className="w-5 h-5" />
            Research
          </Link>
        </div>

        <div className="my-4 border-t border-gray-100" />

        {/* Tools */}
        <div className="space-y-1 px-3">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Star className="w-5 h-5" />
            Watchlist
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Globe className="w-5 h-5" />
            Market Movers
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Target className="w-5 h-5" />
            AI Stock Picker
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <Radio className="w-5 h-5" />
            Smart Signals
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <DollarSign className="w-5 h-5" />
            Smart Money
          </Link>
        </div>

        <div className="my-4 border-t border-gray-100" />

        <div className="space-y-1 px-3">
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <LayoutGrid className="w-5 h-5" />
            Portfolio Toolbox
          </Link>
        </div>

        <div className="my-4 border-t border-gray-100" />

        <div className="space-y-1 px-3">
          <div className="px-3 py-2 flex items-center gap-3 text-gray-900 font-medium text-sm">
            <Clock className="w-5 h-5" />
            History
          </div>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 pl-11 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Chat History
          </Link>
          <Link
            href="#"
            className="flex items-center gap-3 px-3 py-2 pl-11 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
          >
            <BarChart2 className="w-5 h-5" />
            Research History
          </Link>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="p-4 border-t bg-white">
        <button className="w-full bg-blue-700 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm mb-3">
          Sign Up
        </button>
        <button className="w-full bg-gray-100 text-gray-900 rounded-lg py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors">
          Log in
        </button>
      </div>
    </div>
  );
}
