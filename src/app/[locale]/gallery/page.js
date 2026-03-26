import GalleryHero from "@/components/gallery/GalleryHero";
import ParallaxGallery from "@/components/gallery/ParallaxGallery";
import HeroOpening from "@/components/shared/HeroOpening";
import AnimatedCTA from "@/components/shared/AnimatedCTA";
import { getLocale, getTranslations } from "next-intl/server";

export default async function GalleryPage() {
  const t = await getTranslations("pageGallery");
  const locale = await getLocale();
  const whatsappUrl = `https://wa.me/${t("closing.whatsappNumber")}?text=${encodeURIComponent(t("closing.whatsappMessage"))}`;

  return (
    <main key={`gallery-${locale}`} className="bg-[var(--color-navy-77)]">
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={t("description")}
        // Image Theme: Dark Cinematic Garage/Detail (local)
        bgImageUrl="/gallery/gallery7.webp"
        height="100vh"
      />
      {/* 1. Kinetic Hero */}
      <GalleryHero />

      {/* 2. Main Parallax Grid */}
      <div className="relative z-10 -mt-20">
        <ParallaxGallery />
      </div>

      {/* 3. CTA to Join */}
      <AnimatedCTA
        uptitle={t("closing.uptitle")}
        titleLines={t.raw("closing.titleLines")}
        ctaText={t("closing.cta")}
        ctaSub={t("closing.ctaSub")}
        whatsappUrl={whatsappUrl}
        footerLeft={t("closing.footerLeft")}
        footerRight={t("closing.footerRight")}
        marqueeText={t("closing.marqueeText")}
        bgImage="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1920"
      />
    </main>
  );
}
