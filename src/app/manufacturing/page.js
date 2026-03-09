import HeroOpening from "@/components/shared/HeroOpening";
import ManufacturingFacility from "@/components/manufacturing/ManufacturingFacility";
import ProductionTech from "@/components/manufacturing/ProductionTech";
import DurabilitySection from "@/components/manufacturing/DurabilitySection";
import QualityTesting from "@/components/manufacturing/QualityTesting";
import GlobalSupply from "@/components/manufacturing/GlobalSupply";
import { getTranslations } from "next-intl/server";

export default async function ManufacturingPage() {
  const t = await getTranslations("pageManufacturing");

  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-navy-77)] selection:text-white overflow-hidden">
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
        bgImageUrl="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=3270&auto=format&fit=crop"
        height="110vh"
      />
      <ManufacturingFacility />
      <ProductionTech />
      <DurabilitySection />
      <QualityTesting />
      <GlobalSupply />
    </main>
  );
}
