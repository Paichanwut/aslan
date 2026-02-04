"use client";

import Link from "next/link";
import {
  Home,
  Compass,
  Clock,
  Search,
  Star,
  Globe,
  Target,
  Radio,
  DollarSign,
  LayoutGrid,
  MessageSquare,
  BarChart2,
  ChevronLeft,
  PanelLeft,
  User,
  Lightbulb,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

export function Sidebar({ isCollapsed, toggleCollapse }: SidebarProps) {
  return (
    <div
      className={cn(
        "h-screen border-r bg-white flex flex-col fixed left-0 top-0 transition-[width] duration-300 ease-in-out z-20",
        isCollapsed ? "w-20" : "w-64",
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center",
          isCollapsed ? "justify-center p-4 border-b" : "justify-between p-4",
        )}
      >
        {isCollapsed ? (
          <button
            onClick={toggleCollapse}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-700"
          >
            <PanelLeft className="w-6 h-6" />
          </button>
        ) : (
          <>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center transform rotate-45">
                <div className="w-4 h-4 bg-white transform -rotate-45" />
              </div>
              <span className="text-2xl font-bold text-blue-700 tracking-tight">
                slan
              </span>
            </Link>
            <button
              onClick={toggleCollapse}
              className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-500" />
            </button>
          </>
        )}
      </div>

      <div className="flex-1 overflow-y-auto overflow-x-hidden py-2 custom-scrollbar flex flex-col gap-1">
        {/* Main Nav */}
        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-3")}>
          <NavButton
            icon={Home}
            label="Home"
            href="/"
            isActive
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={Lightbulb}
            label="Discover"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={FileText}
            label="Research"
            href="#"
            isCollapsed={isCollapsed}
          />
        </div>

        <div
          className={cn(
            "border-t border-gray-100",
            isCollapsed ? "my-2" : "my-4",
          )}
        />

        {/* Tools */}
        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-3")}>
          <NavButton
            icon={Star}
            label="Watchlist"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={Globe}
            label="Market Movers"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={Target}
            label="AI Stock Picker"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={Radio}
            label="Smart Signals"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={DollarSign}
            label="Smart Money"
            href="#"
            isCollapsed={isCollapsed}
          />
        </div>

        <div
          className={cn(
            "border-t border-gray-100",
            isCollapsed ? "my-2" : "my-4",
          )}
        />

        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-3")}>
          <NavButton
            icon={LayoutGrid}
            label="Portfolio Toolbox"
            href="#"
            isCollapsed={isCollapsed}
          />
        </div>

        <div
          className={cn(
            "border-t border-gray-100",
            isCollapsed ? "my-2" : "my-4",
          )}
        />

        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-3")}>
          {!isCollapsed && (
            <div className="px-3 py-2 flex items-center gap-3 text-gray-900 font-medium text-sm">
              <Clock className="w-5 h-5" />
              History
            </div>
          )}
          {isCollapsed && (
            <div className="flex justify-center py-2">
              <Clock className="w-5 h-5 text-gray-500" />
            </div>
          )}

          <NavButton
            icon={MessageSquare}
            label="Chat History"
            href="#"
            isCollapsed={isCollapsed}
            className={!isCollapsed ? "pl-11" : ""}
          />
          <NavButton
            icon={BarChart2}
            label="Research History"
            href="#"
            isCollapsed={isCollapsed}
            className={!isCollapsed ? "pl-11" : ""}
          />
        </div>
      </div>

      {/* Footer Buttons */}
      <div className={cn("border-t bg-white", isCollapsed ? "p-2" : "p-4")}>
        {isCollapsed ? (
          <button className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center transition-colors shadow-sm">
            <User className="w-6 h-6" />
          </button>
        ) : (
          <>
            <button className="w-full bg-blue-700 text-white rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-800 transition-colors shadow-sm mb-3">
              Sign Up
            </button>
            <button className="w-full bg-gray-100 text-gray-900 rounded-lg py-2.5 text-sm font-semibold hover:bg-gray-200 transition-colors">
              Log in
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function NavButton({
  icon: Icon,
  label,
  href,
  isActive,
  isCollapsed,
  className,
}: {
  icon: any;
  label: string;
  href: string;
  isActive?: boolean;
  isCollapsed: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      title={isCollapsed ? label : undefined}
      className={cn(
        "flex items-center gap-3 rounded-lg transition-colors min-h-[40px]",
        isCollapsed ? "justify-center px-1 py-2.5" : "px-3 py-2.5",
        isActive
          ? "bg-gray-100/80 text-gray-900 font-semibold"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium",
        className,
      )}
    >
      <Icon className="w-5 h-5 flex-shrink-0" />
      {!isCollapsed && <span className="text-sm truncate">{label}</span>}
    </Link>
  );
}
