import Navbar from "@/components/shared/Navbar";
import HeroSlideshow from "@/components/home/HeroSlideshow";
import AboutSection from "../components/home/AboutSection";
import ManufacturingSection from "../components/home/ManufacturingSection";
import QualitySection from "@/components/home/QualitySection";
import SpecsSection from "@/components/home/SpecsSection";
import BrandPositioning from "@/components/home/BrandPositioning";
import GlobalVision from "@/components/home/GlobalVision";

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
    </main>
  );
}
