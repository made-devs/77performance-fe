import DistributorOpening from "@/components/distributor/DistributorOpening";
import DistributorValueProp from "@/components/distributor/DistributorValueProp";
import DistributorBenefits from "@/components/distributor/DistributorBenefits";
import DistributorSupport from "@/components/distributor/DistributorSupport";
import DistributorTerritory from "@/components/distributor/DistributorTerritory";
import DistributorQualification from "@/components/distributor/DistributorQualification";
import DistributorClosing from "@/components/distributor/DistributorClosing";

export default function DistributorPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-cyan-77)] selection:text-white overflow-hidden">
      <DistributorOpening />
      <DistributorValueProp />
      <DistributorBenefits />
      <DistributorSupport />
      <DistributorTerritory />
      <DistributorQualification />
      <DistributorClosing />
    </main>
  );
}
