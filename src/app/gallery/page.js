import React from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import ParallaxGallery from "@/components/gallery/ParallaxGallery";
import CommunityClosing from "@/components/community/CommunityClosing"; // Reuse closing CTA
import HeroOpening from "@/components/shared/HeroOpening";
import { getTranslations } from "next-intl/server";

export default async function GalleryPage() {
  const t = await getTranslations("pageGallery");

  return (
    <main className="bg-[var(--color-navy-77)]">
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={t("description")}
        // Image Theme: Dark Cinematic Garage/Detail
        bgImageUrl="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
        height="90vh"
      />
      {/* 1. Kinetic Hero */}
      <GalleryHero />

      {/* 2. Main Parallax Grid */}
      <div className="relative z-10 -mt-20">
        <ParallaxGallery />
      </div>

      {/* 3. CTA to Join */}
      <CommunityClosing />
    </main>
  );
}
