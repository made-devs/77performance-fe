import HeroOpening from "@/components/shared/HeroOpening";
import ProductsPhilosophy from "@/components/products/ProductsPhilosophy";
import ProductsCategories from "@/components/products/ProductsCategories";
import ProductsPerformance from "@/components/products/ProductsPerformance";
import ProductsReliability from "@/components/products/ProductsReliability";
import ProductsWarranty from "@/components/products/ProductsWarranty";
import ProductsClosing from "@/components/products/ProductsClosing";
import { getLocale, getTranslations } from "next-intl/server";

export default async function ProductsPage() {
  const t = await getTranslations("pageProducts");
  const locale = await getLocale();

  return (
    <main
      key={`products-${locale}`}
      className="bg-dark-77 text-white selection:bg-[var(--color-cyan-77)] selection:text-white overflow-hidden"
    >
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2"), t("titleLine3")]}
        description={
          <span className="text-white text-xl md:text-2xl font-light tracking-wide">
            {t("description")}
          </span>
        }
        bgImageUrl="/gallery/gallery11.webp"
        height="100vh"
      />

      <ProductsPhilosophy />

      <ProductsCategories key={`categories-${locale}`} />

      <ProductsPerformance />

      <ProductsReliability />

      <ProductsWarranty />

      <ProductsClosing />
    </main>
  );
}
