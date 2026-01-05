import Navbar from '@/components/shared/Navbar';
import HeroSlideshow from '@/components/home/HeroSlideshow';
import AboutSection from '../components/home/AboutSection';
import ManufacturingSection from '../components/home/ManufacturingSection';

export default function Home() {
  return (
    <main>
      <HeroSlideshow />
      <AboutSection />
      <ManufacturingSection />
      {/* Section Manufacturing & Product Lineup menyusul */}
    </main>
  );
}
