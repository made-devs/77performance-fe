import HeroOpening from "@/components/shared/HeroOpening";
import AboutWhoWeAre from "@/components/about/AboutWhoWeAre";
import AboutManufacturing from "@/components/about/AboutManufacturing";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutClosing from "@/components/about/AboutClosing";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-900 selection:bg-blue-900 selection:text-white overflow-hidden">
      <HeroOpening
        uptitle="Since 2008 • Global Manufacturing"
        titleLines={["ENGINEERED", "PERFECTION"]}
        description={
          <>
            77 Performance delivers{" "}
            <span className="text-white font-medium">
              premium automotive parts
            </span>{" "}
            built on a foundation of proven global manufacturing and precision
            engineering.
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
