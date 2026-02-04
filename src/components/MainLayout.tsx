"use client";

import { useState, useEffect } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";
import {
  PanelLeft,
  ArrowLeft,
  Home,
  Lightbulb,
  FileText,
  Star,
  Globe,
  Target,
  Radio,
  DollarSign,
  LayoutGrid,
  Clock,
  MessageSquare,
  BarChart2,
} from "lucide-react";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Auto-collapse on mobile/tablet on initial load
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Topbar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-40 flex items-center justify-between px-4">
        {/* Left: Menu Trigger */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 -ml-2 rounded-lg hover:bg-gray-50 text-slate-800"
        >
          <PanelLeft className="w-6 h-6" />
        </button>

        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-1">
          <div className="w-7 h-7 bg-blue-700 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-base">A</span>
          </div>
          <span className="text-lg font-extrabold text-slate-900 tracking-tight">
            SLAN
          </span>
        </div>

        {/* Right: Auth / Action */}
        <button className="text-sm font-semibold bg-slate-900 text-white px-3 py-1.5 rounded-full">
          Log in
        </button>
      </div>

      {/* Mobile Navigation Drawer (Slide-out) */}
      <div
        className={cn(
          "fixed inset-0 z-[100] lg:hidden transition-opacity duration-300",
          !isCollapsed
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsCollapsed(true)}
        />

        {/* Drawer Content */}
        <div
          className={cn(
            "absolute top-0 bottom-0 left-0 w-[280px] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col",
            !isCollapsed ? "translate-x-0" : "-translate-x-full",
          )}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-extrabold text-slate-900 tracking-tight">
                SLAN
              </span>
            </div>
            <button
              onClick={() => setIsCollapsed(true)}
              className="p-2 hover:bg-gray-50 rounded-lg text-slate-500"
            >
              <ArrowLeft className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Links */}
          <div className="flex-1 overflow-y-auto py-2">
            <div className="px-3 space-y-1">
              <div className="bg-gray-100 rounded-lg">
                <MobileNavLink icon={Home} label="Home" active />
              </div>
              <MobileNavLink icon={Lightbulb} label="Discover" />
              <MobileNavLink icon={FileText} label="Research" />
            </div>

            <div className="my-2 border-t border-gray-100 mx-4" />

            <div className="px-3 space-y-1">
              <MobileNavLink icon={Star} label="Watchlist" />
              <MobileNavLink icon={Globe} label="Market Movers" />
              <MobileNavLink icon={Target} label="AI Stock Picker" />
              <MobileNavLink icon={Radio} label="Smart Signals" />
              <MobileNavLink icon={DollarSign} label="Smart Money" />
            </div>

            <div className="my-2 border-t border-gray-100 mx-4" />

            <div className="px-3 space-y-1">
              <MobileNavLink icon={LayoutGrid} label="Portfolio Toolbox" />
            </div>

            <div className="my-2 border-t border-gray-100 mx-4" />

            <div className="px-4 py-2">
              <div className="flex items-center gap-2 text-slate-500 mb-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">History</span>
              </div>
              <div className="pl-6 space-y-3 mt-1">
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <MessageSquare className="w-4 h-4" />
                  Chat History
                </div>
                <div className="flex items-center gap-3 text-slate-600 text-sm">
                  <BarChart2 className="w-4 h-4" />
                  Research History
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer (Auth) */}
          <div className="p-4 border-t border-gray-100 bg-gray-50/50 space-y-3">
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg shadow-sm transition-colors">
              Sign Up
            </button>
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-slate-800 font-bold py-3 rounded-lg transition-colors">
              Log in
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar (Hidden on Mobile) */}
      <div className="hidden lg:block">
        <Sidebar
          isCollapsed={isCollapsed}
          toggleCollapse={() => setIsCollapsed(!isCollapsed)}
        />
      </div>

      <div
        className={cn(
          "transition-[margin] duration-300 ease-in-out pt-16 lg:pt-0",
          "ml-0",
          isCollapsed ? "lg:ml-20" : "lg:ml-64",
        )}
      >
        {children}
      </div>
    </div>
  );
}

function MobileNavLink({
  icon: Icon,
  label,
  active,
}: {
  icon: any;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-3 rounded-lg text-slate-700 font-medium transition-colors cursor-pointer",
        active ? "text-slate-900 font-bold" : "hover:bg-gray-50",
      )}
    >
      <Icon
        className={cn("w-5 h-5", active ? "text-slate-900" : "text-slate-500")}
        strokeWidth={active ? 2.5 : 2}
      />
      {label}
    </div>
  );
}
