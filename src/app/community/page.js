import React from "react";
import HeroOpening from "@/components/shared/HeroOpening";
import CommunityConcept from "@/components/community/CommunityConcept";
import EcosystemStructure from "@/components/community/EcosystemStructure";
import CommunityStrategy from "@/components/community/CommunityStrategy";
import CommunityClosing from "@/components/community/CommunityClosing";
import { getTranslations } from "next-intl/server";

export default async function CommunityPage() {
  const t = await getTranslations("pageCommunity");

  return (
    <main className="bg-white">
      {/* 1. HERO PAGE */}
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={t("description")}
        bgImageUrl="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920" // Abstract World/Network Map
        height="100vh"
      />

      {/* 2. CONCEPT DEFINITION */}
      <CommunityConcept />

      {/* 3. STRUCTURE DIAGRAM (The Core) */}
      <EcosystemStructure />

      {/* 4, 5, 6. STRATEGY & VALUE (Horizontal Scroll) */}
      <CommunityStrategy />

      {/* 7. CLOSING Positioning */}
      <CommunityClosing />
    </main>
  );
}
