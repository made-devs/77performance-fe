import React from "react";
import HeroOpening from "@/components/shared/HeroOpening";
import CommunityConcept from "@/components/community/CommunityConcept";
import EcosystemStructure from "@/components/community/EcosystemStructure";
import CommunityStrategy from "@/components/community/CommunityStrategy";
import CommunityClosing from "@/components/community/CommunityClosing";

export default function CommunityPage() {
  return (
    <main className="bg-white">
      {/* 1. HERO PAGE */}
      <HeroOpening
        uptitle="GLOBAL NETWORK"
        titleLines={["SUSTAINABLE", "ECOSYSTEM"]}
        description="Transformasi konsep komunitas dari sekadar pengguna menjadi jaringan bisnis terintegrasi yang menghubungkan Principal, Distributor, dan Retail Network."
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
