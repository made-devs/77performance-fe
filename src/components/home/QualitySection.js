"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

const QUALITY_IMAGES = [
  "/home/quality1.webp",
  "/home/quality2.webp",
  "/home/quality3.webp",
];

export default function QualitySection() {
  const viewportRef = useRef(null);
  const swipeStartXRef = useRef(null);
  const locale = useLocale();
  const t = useTranslations("pageHome.qualitySection");
  const [activeIndex, setActiveIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);

  const qualityPillars = t.raw("pillars").map((pillar, index) => ({
    ...pillar,
    image: QUALITY_IMAGES[index],
  }));

  const PEEK_PX = 28;
  const totalPanels = qualityPillars.length + 1;
  const isFirstPanel = activeIndex === 0;
  const isLastPanel = activeIndex === totalPanels - 1;
  const sliderProgress = totalPanels > 1 ? activeIndex / (totalPanels - 1) : 0;

  const slideHintByLocale = {
    id: "Geser atau klik Next",
    en: "Swipe or click Next",
    zh: "滑动或点击下一步",
  };

  const swipeHintByLocale = {
    id: "Swipe untuk lanjut",
    en: "Swipe to continue",
    zh: "滑动继续",
  };

  const slideHint = slideHintByLocale[locale] || slideHintByLocale.en;
  const swipeHint = swipeHintByLocale[locale] || swipeHintByLocale.en;
  const panelCounter = `${String(activeIndex + 1).padStart(2, "0")} / ${String(
    totalPanels,
  ).padStart(2, "0")}`;
  const panelWidth =
    viewportWidth > 0 ? Math.max(viewportWidth - PEEK_PX, 0) : 0;

  const panelStyle = {
    minWidth: panelWidth ? `${panelWidth}px` : `calc(100% - ${PEEK_PX}px)`,
  };

  useEffect(() => {
    if (!viewportRef.current) {
      return;
    }

    const updateViewportWidth = () => {
      if (!viewportRef.current) {
        return;
      }

      setViewportWidth(viewportRef.current.clientWidth);
    };

    updateViewportWidth();

    const resizeObserver = new ResizeObserver(updateViewportWidth);
    resizeObserver.observe(viewportRef.current);

    window.addEventListener("resize", updateViewportWidth);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateViewportWidth);
    };
  }, []);

  const goToPanel = (nextIndex) => {
    const safeIndex = Math.max(0, Math.min(totalPanels - 1, nextIndex));
    setActiveIndex(safeIndex);
    setHasInteracted(true);
  };

  const handlePrev = () => {
    if (isFirstPanel) {
      return;
    }

    goToPanel(activeIndex - 1);
  };

  const handleNext = () => {
    if (isLastPanel) {
      return;
    }

    goToPanel(activeIndex + 1);
  };

  const handleTouchStart = (event) => {
    swipeStartXRef.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event) => {
    if (swipeStartXRef.current === null) {
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? null;

    if (touchEndX === null) {
      swipeStartXRef.current = null;
      return;
    }

    const deltaX = touchEndX - swipeStartXRef.current;
    swipeStartXRef.current = null;

    if (Math.abs(deltaX) < 50) {
      return;
    }

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  return (
    <section className="relative bg-white text-slate-800 overflow-hidden">
      <div
        ref={viewportRef}
        className="w-full h-[100dvh] overflow-hidden relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* --- Background Kinetic Text --- */}
        <div
          className="absolute inset-0 flex flex-nowrap items-center pointer-events-none z-0 whitespace-nowrap top-1/2 transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${sliderProgress * 50}%) translateY(-50%)`,
          }}
        >
          <div className="min-w-[100vw]" />
          {qualityPillars.map((item) => (
            <div key={item.id} className="min-w-[100vw] flex justify-center">
              <span
                className="text-[40vw] lg:text-[25vw] font-black leading-none opacity-10 select-none"
                style={{
                  WebkitTextStroke: "2px #0891b2",
                  color: "transparent",
                }}
              >
                {item.bgText}
              </span>
            </div>
          ))}
        </div>

        <div
          className="h-full flex flex-nowrap transition-transform duration-700 ease-out"
          style={{
            transform: `translateX(-${activeIndex * panelWidth}px)`,
          }}
        >
          {/* --- PANEL 1: INTRO --- */}
          <div
            className="h-full flex items-center justify-center relative border-r border-slate-100 z-10"
            style={panelStyle}
          >
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/home3.webp')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white/95 via-white/80 to-white/50" />
            </div>

            <div className="container mx-auto px-6 lg:px-20 relative z-10 flex flex-col justify-center h-full">
              <div className="max-w-4xl">
                <span className="inline-block py-1 px-3 border border-cyan-77/30 rounded-full bg-cyan-50/80 backdrop-blur-sm text-cyan-600 text-[10px] lg:text-xs font-bold tracking-widest uppercase mb-4 lg:mb-6">
                  {t("intro.tag")}
                </span>
                <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black leading-tight mb-4 lg:mb-8 text-slate-900">
                  {t("intro.titleLine1")} <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-77 to-navy-77">
                    {t("intro.titleLine2")}
                  </span>
                </h2>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-xl border-l-4 border-cyan-77 pl-4 lg:pl-6">
                  {t("intro.description")}
                </p>

                <div className="mt-8 lg:mt-12 flex items-center gap-3">
                  <span className="text-xs lg:text-sm font-black text-cyan-600 tracking-[0.2em] uppercase">
                    {panelCounter}
                  </span>
                  <span className="w-12 h-[2px] bg-cyan-77/40" />
                </div>

                <div className="mt-4 flex items-center gap-2 text-cyan-700 text-xs lg:text-sm font-bold tracking-wide uppercase">
                  <span>{slideHint}</span>
                  <svg
                    className="w-4 h-4 animate-[pulse_1.3s_ease-in-out_2]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </div>

                {!hasInteracted && (
                  <div className="mt-3 lg:hidden inline-flex items-center gap-2 px-3 py-1.5 border border-cyan-77/30 bg-white/80 text-cyan-700 text-[11px] font-bold tracking-wide uppercase rounded-full">
                    <span className="animate-pulse">↔</span>
                    <span>{swipeHint}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* --- PANEL PILLARS (LOOP) --- */}
          {qualityPillars.map((item) => (
            <div
              key={item.id}
              className="h-full flex items-center relative border-r border-slate-100 bg-transparent z-10"
              style={panelStyle}
            >
              {/* Visual Layer: grid + gradient + ghost image */}
              <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                  className="absolute inset-0 opacity-[0.05]"
                  style={{
                    backgroundImage:
                      "linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)",
                    backgroundSize: "36px 36px",
                  }}
                />
                <div className="absolute -top-16 -right-10 w-72 h-72 rounded-full bg-cyan-77/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-10 w-80 h-80 rounded-full bg-navy-77/15 blur-3xl" />
                <div
                  className="absolute inset-0 opacity-[0.08] bg-cover bg-center"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />
              </div>

              <div className="absolute inset-0 z-[1] pointer-events-none flex items-center justify-center overflow-hidden">
                <span className="text-[22vw] font-black leading-none opacity-[0.09] text-cyan-900/20 select-none whitespace-nowrap">
                  {item.bgText}
                </span>
              </div>

              <div className="container mx-auto px-6 lg:px-20 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full">
                {/* Text Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 lg:mb-6">
                    <span className="text-5xl lg:text-6xl font-black text-cyan-77/20">
                      {item.id}
                    </span>
                    <div className="h-[2px] flex-grow bg-gradient-to-r from-cyan-77 to-transparent opacity-20" />
                  </div>

                  <h3 className="text-3xl lg:text-5xl font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cyan-600 font-bold tracking-widest text-xs lg:text-sm mb-4 lg:mb-8 uppercase">
                    {item.subtitle}
                  </p>
                  <p className="text-base lg:text-lg text-slate-600 mb-6 lg:mb-10 line-clamp-4 lg:line-clamp-none">
                    {item.desc}
                  </p>

                  <ul className="space-y-2 lg:space-y-4">
                    {item.features.map((feat) => (
                      <li
                        key={feat}
                        className="flex items-center gap-3 text-slate-700 font-bold uppercase text-xs lg:text-sm tracking-wide"
                      >
                        <span className="w-1.5 h-1.5 bg-cyan-77 rounded-full" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Desktop Image (3D Card) */}
                <div className="relative h-[400px] w-full hidden lg:block group panel-image">
                  <div className="absolute top-4 left-4 w-full h-full border-2 border-cyan-77/20 rounded-br-3xl z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2" />
                  <div className="absolute -top-2 -right-2 w-12 h-12 border-t-4 border-r-4 border-cyan-77 z-20" />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 border-b-4 border-l-4 border-cyan-77 z-20" />

                  <div className="relative w-full h-full overflow-hidden bg-slate-100 z-10 shadow-2xl shadow-cyan-900/10">
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900/20 to-transparent mix-blend-overlay" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-5 right-6 lg:bottom-10 lg:right-20 z-20 flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2 mr-2">
            {Array.from({ length: totalPanels }).map((_, dotIndex) => {
              const isActiveDot = dotIndex === activeIndex;

              return (
                <button
                  key={`dot-${dotIndex}`}
                  type="button"
                  onClick={() => goToPanel(dotIndex)}
                  aria-label={`Go to panel ${dotIndex + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActiveDot
                      ? "w-6 bg-cyan-77"
                      : "w-2 bg-cyan-77/30 hover:bg-cyan-77/60"
                  }`}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={handlePrev}
            disabled={isFirstPanel}
            aria-label="Previous panel"
            className={`w-10 h-10 lg:w-12 lg:h-12 border flex items-center justify-center transition-all ${
              isFirstPanel
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-cyan-77/40 text-cyan-77 hover:bg-cyan-77 hover:text-white"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>

          <div className="px-3 py-2 border border-cyan-77/30 bg-white/80 backdrop-blur-sm text-cyan-700 text-xs lg:text-sm font-bold tracking-widest min-w-20 text-center">
            {panelCounter}
          </div>

          <button
            type="button"
            onClick={handleNext}
            disabled={isLastPanel}
            aria-label="Next panel"
            className={`w-10 h-10 lg:w-12 lg:h-12 border flex items-center justify-center transition-all ${
              isLastPanel
                ? "border-slate-200 text-slate-300 cursor-not-allowed"
                : "border-cyan-77/40 text-cyan-77 hover:bg-cyan-77 hover:text-white"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>

          {!hasInteracted && (
            <div className="md:hidden ml-1 inline-flex items-center gap-1 text-cyan-700 text-[10px] font-bold uppercase tracking-wide">
              <span className="animate-pulse">↔</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
