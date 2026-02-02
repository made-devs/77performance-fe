import HeroOpening from "@/components/shared/HeroOpening";
import ProductsPhilosophy from "@/components/products/ProductsPhilosophy";
import ProductsCategories from "@/components/products/ProductsCategories";
import ProductsPerformance from "@/components/products/ProductsPerformance";
import ProductsReliability from "@/components/products/ProductsReliability";
import ProductsWarranty from "@/components/products/ProductsWarranty";
import ProductsClosing from "@/components/products/ProductsClosing";

export default function ProductsPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-cyan-77)] selection:text-white overflow-hidden">
      <HeroOpening
        uptitle="Product Lineup"
        titleLines={["ENGINEERED", "AUTOMOTIVE", "PARTS"]}
        description={
          <span className="text-white text-xl md:text-2xl font-light tracking-wide">
            Performance &bull; Comfort &bull; Reliability
          </span>
        }
        bgImageUrl="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=2940"
        height="100vh"
      />

      <ProductsPhilosophy />

      <ProductsCategories />

      <ProductsPerformance />

      <ProductsReliability />

      <ProductsWarranty />

      <ProductsClosing />
    </main>
  );
}
