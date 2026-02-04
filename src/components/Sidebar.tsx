"use client";

import Link from "next/link";
import {
  Home,
  Compass,
  Clock,
  Star,
  Globe,
  Target,
  Radio,
  DollarSign,
  LayoutGrid,
  MessageSquare,
  BarChart2,
  ChevronLeft,
  ChevronRight,
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
          "flex items-center h-[70px]",
          isCollapsed ? "justify-center px-2" : "justify-between px-6",
        )}
      >
        {isCollapsed ? (
          <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
        ) : (
          <Link href="/" className="flex items-center gap-1">
            {/* Logo Icon */}
            <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-extrabold text-slate-900 tracking-tight">
              SLAN
            </span>
          </Link>
        )}

        {!isCollapsed && (
          <button
            onClick={toggleCollapse}
            className="group w-8 h-8 flex items-center justify-center rounded-lg border-2 border-slate-100 hover:border-slate-200 hover:bg-slate-50 transition-all ml-4"
          >
            <div className="flex items-center text-slate-400 group-hover:text-slate-600 transition-colors">
              <span className="w-[1.5px] h-3.5 bg-current rounded-full mr-[1px]"></span>
              <ChevronLeft className="w-4 h-4" strokeWidth={2.5} />
            </div>
          </button>
        )}
      </div>

      {/* Collapse Toggle (Mobile/Collapsed View) */}
      {isCollapsed && (
        <div className="flex justify-center py-4 border-b border-dashed border-gray-200 mx-4">
          <button
            onClick={toggleCollapse}
            className="p-2 rounded-lg hover:bg-gray-50 text-gray-500"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      <div className="flex-1 overflow-y-auto overflow-x-hidden py-6 custom-scrollbar flex flex-col gap-6">
        {/* Group 1: Dashboards */}
        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-6")}>
          {!isCollapsed && (
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
              Dashboards
            </div>
          )}
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

        {/* Group 2: Tools */}
        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-6")}>
          {!isCollapsed && (
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
              Apps
            </div>
          )}
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
            label="Simulate Signals"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={DollarSign}
            label="Smart Money"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={LayoutGrid}
            label="Portfolio"
            href="#"
            isCollapsed={isCollapsed}
          />
        </div>

        {/* Group 3: History */}
        <div className={cn("space-y-1", isCollapsed ? "px-2" : "px-6")}>
          {!isCollapsed && (
            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2 px-3">
              User
            </div>
          )}
          <NavButton
            icon={User}
            label="My Profile"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={MessageSquare}
            label="Chat History"
            href="#"
            isCollapsed={isCollapsed}
          />
          <NavButton
            icon={BarChart2}
            label="Research History"
            href="#"
            isCollapsed={isCollapsed}
          />
        </div>
      </div>

      {/* Footer */}
      <div
        className={cn(
          "border-t border-dashed border-gray-200",
          isCollapsed ? "p-2" : "p-6",
        )}
      >
        {/* Using a sleek icon driven footer for collapsed, full details for expanded if needed */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 font-bold shrink-0">
            N
          </div>
          {!isCollapsed && (
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-gray-800 truncate">
                Nick Thomas
              </div>
              <div className="text-xs text-gray-500 truncate">
                nick@kavout.com
              </div>
            </div>
          )}
        </div>
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
        "flex items-center gap-3 rounded-lg transition-all group",
        isCollapsed ? "justify-center w-10 h-10 mx-auto" : "px-3 py-2.5",
        isActive
          ? "bg-blue-50 text-blue-700"
          : "text-gray-500 hover:text-blue-700 hover:bg-gray-50",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center justify-center transition-colors",
          isActive
            ? "text-blue-700"
            : "text-gray-400 group-hover:text-blue-700",
        )}
      >
        <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={2} />
      </div>

      {!isCollapsed && (
        <span className="text-sm font-medium truncate flex-1">{label}</span>
      )}

      {/* Active Dot for Expanded state */}
      {!isCollapsed && isActive && (
        <span className="w-1.5 h-1.5 rounded-full bg-blue-700"></span>
      )}
    </Link>
  );
}
