import Navbar from "@/components/shared/Navbar";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import AboutSection from "../components/home/AboutSection";
import ManufacturingSection from "../components/home/ManufacturingSection";
import QualitySection from "@/components/home/QualitySection";
import SpecsSection from "@/components/home/SpecsSection";
import BrandPositioning from "@/components/home/BrandPositioning";
import GlobalVision from "@/components/home/GlobalVision";
import DistributorBenefits from "@/components/home/DistributorBenefits";
import PromotionStrategy from "@/components/home/PromotionStrategy";
import MemberCommunity from "@/components/home/MemberCommunity";
import RealDifference from "@/components/home/RealDifference";
import DistributorQualification from "@/components/home/DistributorQualification";
import LimitedDistributorOpportunity from "@/components/home/LimitedDistributorOpportunity";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <main>
      <HeroSlideshow />
      <AboutSection />
      <ManufacturingSection />
      <QualitySection />
      <SpecsSection />
      <BrandPositioning />
      <GlobalVision />
      <DistributorBenefits />
      <PromotionStrategy />
      <MemberCommunity />
      <RealDifference />
      <DistributorQualification />
      <LimitedDistributorOpportunity />
      <FinalCTA />
    </main>
  );
}
