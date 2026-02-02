import HeroOpening from "@/components/shared/HeroOpening";
import DistributorValueProp from "@/components/distributor/DistributorValueProp";
import DistributorBenefits from "@/components/distributor/DistributorBenefits";
import DistributorSupport from "@/components/distributor/DistributorSupport";
import DistributorTerritory from "@/components/distributor/DistributorTerritory";
import DistributorQualification from "@/components/distributor/DistributorQualification";
import DistributorClosing from "@/components/distributor/DistributorClosing";

export default function DistributorPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-[var(--color-cyan-77)] selection:text-white overflow-hidden">
      <HeroOpening
        uptitle="Partner Program"
        titleLines={["BECOME", "DISTRIBUTOR", "PARTNER"]}
        description={
          <>
            Join our authorized distributor network to access preferential
            pricing, priority logistics, and full marketing support. <br />
            <span className="text-white font-medium">
              Grow with us — territory protection, training, and incentives
              available.
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
