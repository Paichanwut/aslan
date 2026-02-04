"use client";

import { HeroSection } from "@/components/landing/HeroSection";
import { PainPointsSection } from "@/components/landing/PainPointsSection";
import { ToolsSection } from "@/components/landing/ToolsSection";
import { AgentDemoSection } from "@/components/landing/AgentDemoSection";
import { ResearchAgentsSection } from "@/components/landing/ResearchAgentsSection";
import { DiscoverMoreSection } from "@/components/landing/DiscoverMoreSection";
import { MasterMarketsSection } from "@/components/landing/MasterMarketsSection";
import { TopArticlesSection } from "@/components/landing/TopArticlesSection";
import { CallToActionSection } from "@/components/landing/CallToActionSection";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <HeroSection />
      <PainPointsSection />
      <ToolsSection />
      <AgentDemoSection />
      <ResearchAgentsSection />
      <DiscoverMoreSection />
      <MasterMarketsSection />
      <TopArticlesSection />
      <CallToActionSection />
    </main>
  );
}
