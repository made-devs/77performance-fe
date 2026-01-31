import ManufacturingOpening from "@/components/manufacturing/ManufacturingOpening";
import ManufacturingFacility from "@/components/manufacturing/ManufacturingFacility";
import ProductionTech from "@/components/manufacturing/ProductionTech";
import DurabilitySection from "@/components/manufacturing/DurabilitySection";
import QualityTesting from "@/components/manufacturing/QualityTesting";
import GlobalSupply from "@/components/manufacturing/GlobalSupply";

export default function ManufacturingPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-navy-77)] selection:text-white overflow-hidden">
      <ManufacturingOpening />
      <ManufacturingFacility />
      <ProductionTech />
      <DurabilitySection />
      <QualityTesting />
      <GlobalSupply />
    </main>
  );
}
