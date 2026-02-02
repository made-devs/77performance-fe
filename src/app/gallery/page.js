import React from "react";
import GalleryHero from "@/components/gallery/GalleryHero";
import ParallaxGallery from "@/components/gallery/ParallaxGallery";
import CommunityClosing from "@/components/community/CommunityClosing"; // Reuse closing CTA
import HeroOpening from "@/components/shared/HeroOpening";

export default function GalleryPage() {
  return (
    <main className="bg-[var(--color-navy-77)]">
      <HeroOpening
        uptitle="VISUAL ARCHIVE"
        titleLines={["ENGINEERING", "ARTISTRY"]}
        description="Sebuah kurasi visual yang merekam standar presisi, detail mekanik, dan estetika performa dari ekosistem 77 Performance."
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
