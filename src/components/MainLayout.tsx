"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { cn } from "@/lib/utils";

export function MainLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Sidebar
        isCollapsed={isCollapsed}
        toggleCollapse={() => setIsCollapsed(!isCollapsed)}
      />
      <div
        className={cn(
          "transition-[margin] duration-300 ease-in-out",
          isCollapsed ? "md:ml-20" : "md:ml-64",
        )}
      >
        {children}
      </div>
    </div>
  );
}
