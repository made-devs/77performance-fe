import HeroOpening from "@/components/shared/HeroOpening";
import ManufacturingFacility from "@/components/manufacturing/ManufacturingFacility";
import ProductionTech from "@/components/manufacturing/ProductionTech";
import DurabilitySection from "@/components/manufacturing/DurabilitySection";
import QualityTesting from "@/components/manufacturing/QualityTesting";
import GlobalSupply from "@/components/manufacturing/GlobalSupply";
import AnimatedCTA from "@/components/shared/AnimatedCTA";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ManufacturingPage() {
  const t = await getTranslations("pageManufacturing");
  const locale = await getLocale();

  return (
    <main
      key={`manufacturing-${locale}`}
      className="bg-dark-77 text-white selection:bg-[var(--color-navy-77)] selection:text-white overflow-hidden"
    >
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2"), t("titleLine3")]}
        description={
          <>
            {t("descriptionLead")} <br />
            <span className="text-white font-medium">
              {t("descriptionHighlight")}
            </span>
          </>
        }
        bgImageUrl="/gallery/gallery6.webp"
        height="110vh"
      />
      <ManufacturingFacility />
      <ProductionTech />
      <DurabilitySection />
      <QualityTesting />
      <GlobalSupply />
      <AnimatedCTA
        uptitle={t("closing.uptitle")}
        titleLines={t.raw("closing.titleLines")}
        ctaText={t("closing.cta")}
        ctaSub={t("closing.ctaSub")}
        whatsappUrl={`https://wa.me/${t("closing.whatsappNumber")}?text=${encodeURIComponent(t("closing.whatsappMessage"))}`}
        footerLeft={t("closing.footerLeft")}
        footerRight={t("closing.footerRight")}
        marqueeText={t("closing.marqueeText")}
        bgImage="https://images.unsplash.com/photo-1565439390118-c2245645f7f3?q=80&w=2000&auto=format&fit=crop"
      />
    </main>
  );
}
