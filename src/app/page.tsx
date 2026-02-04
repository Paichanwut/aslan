"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { ToolsSection } from "@/components/landing/ToolsSection";
import { AgentDemoSection } from "@/components/landing/AgentDemoSection";
import { ResearchAgentsSection } from "@/components/landing/ResearchAgentsSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <ToolsSection />
      <AgentDemoSection />
      <ResearchAgentsSection />
    </main>
  );
}
