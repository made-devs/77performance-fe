import HeroOpening from "@/components/shared/HeroOpening";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutManufacturing from "@/components/about/AboutManufacturing";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutClosing from "@/components/about/AboutClosing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("pageAbout");
  const locale = await getLocale();

  return (
    <main
      key={`about-${locale}`}
      className="bg-dark-77 text-white selection:bg-blue-900 selection:text-white overflow-hidden"
    >
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={
          <>
            {t("descriptionLead")}{" "}
            <span className="text-white font-medium">
              {t("descriptionHighlight")}
            </span>{" "}
            {t("descriptionTail")}
          </>
        }
        bgImageUrl="/about.webp"
        height="110vh"
      />
      <AboutWhoWeAre />
      <AboutManufacturing />
      <AboutPhilosophy />
      <AboutClosing />
    </main>
  );
}
