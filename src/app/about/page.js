import AboutOpening from "@/components/about/AboutOpening";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutManufacturing from "@/components/about/AboutManufacturing";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutClosing from "@/components/about/AboutClosing";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-blue-900 selection:text-white overflow-hidden">
      <AboutOpening />
      <AboutWhoWeAre />
      <AboutManufacturing />
      <AboutPhilosophy />
      <AboutClosing />
    </main>
  );
}
