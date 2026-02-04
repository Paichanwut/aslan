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
      <Sidebar
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      <div
        className={cn(
          "transition-[margin] duration-300 ease-in-out",
          // Mobile: always has at least the collapsed sidebar width (80px/20rem) space
          // unless we decide to make it overlay.
          // For now, let's stick to the requested "notch" fix which usually implies safely avoiding the left edge.
          // Adding pl-20 (padding left) or ml-20.
          isCollapsed ? "ml-20" : "ml-20 md:ml-64",
        )}
      >
        {children}
      </div>
    </div>
  );
}
