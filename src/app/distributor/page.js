import HeroOpening from "@/components/shared/HeroOpening";
import DistributorValueProp from "@/components/distributor/DistributorValueProp";
import DistributorBenefits from "@/components/distributor/DistributorBenefits";
import DistributorSupport from "@/components/distributor/DistributorSupport";
import DistributorTerritory from "@/components/distributor/DistributorTerritory";
import DistributorQualification from "@/components/distributor/DistributorQualification";
import DistributorClosing from "@/components/distributor/DistributorClosing";
import { getTranslations } from "next-intl/server";

export default async function DistributorPage() {
  const t = await getTranslations("pageDistributor");

  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-cyan-77)] selection:text-white overflow-hidden">
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
        bgImageUrl="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200"
        height="110vh"
      />
      <DistributorValueProp />
      <DistributorBenefits />
      <DistributorSupport />
      <DistributorTerritory />
      <DistributorQualification />
      <DistributorClosing />
    </main>
  );
}
