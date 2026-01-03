"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const SLIDES = [
  {
    title: "GLOBAL FOUNDATION",
    desc: "10,000+ SQM of automated manufacturing excellence.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940",
  },
  {
    title: "PRECISION PARTS",
    desc: "Fully functional, not gimmick. Engineered for performance.",
    img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2940",
  },
  {
    title: "BUILDING BUSINESS",
    desc: "Others sell parts, we build ecosystems for partners.",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2940",
  },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const container = useRef();
  const slideRefs = useRef([]);
  const prevActive = useRef(0);

  // Logic Next & Prev
  const nextSlide = () => setActive((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () =>
    setActive((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  useGSAP(
    () => {
      // (GSAP logic tetap sama)
      const tl = gsap.timeline();
      const currentSlide = slideRefs.current[active];
      const previousSlide = slideRefs.current[prevActive.current];

      if (!currentSlide || !previousSlide) return;

      if (active !== prevActive.current) {
        gsap.set(currentSlide, { zIndex: 10, opacity: 1, xPercent: 0 });
        gsap.set(previousSlide, { zIndex: 20, opacity: 1, xPercent: 0 });

        tl.to(previousSlide, {
          xPercent: 100,
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: () => {
            gsap.set(previousSlide, { opacity: 0, zIndex: 0, xPercent: 0 });
          },
        }).fromTo(
          currentSlide.querySelector("img"),
          { scale: 1.2 },
          { scale: 1, duration: 1.5, ease: "power2.out" },
          0
        );
      } else {
        gsap.set(currentSlide, { zIndex: 10, opacity: 1 });
        gsap.fromTo(
          currentSlide.querySelector("img"),
          { scale: 1.2 },
          { scale: 1, duration: 2, ease: "power2.out" }
        );
      }

      tl.fromTo(
        ".slide-title",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
        "-=0.8"
      ).fromTo(
        ".slide-desc",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        "-=0.7"
      );

      prevActive.current = active;
    },
    { dependencies: [active], scope: container }
  );

  // PERBAIKAN DI SINI:
  // Tambahkan [active] sebagai dependency agar timer reset setiap kali slide berubah
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(timer);
  }, [active]);

  return (
    <section
      ref={container}
      className="relative h-screen w-full bg-dark-77 overflow-hidden"
    >
      {/* Background Images Layer */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          ref={(el) => (slideRefs.current[i] = el)}
          className="absolute inset-0 w-full h-full opacity-0"
        >
          <div className="relative h-full w-full">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              className="object-cover brightness-50"
              priority={i === 0}
            />
          </div>
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-30 h-full flex flex-col justify-center px-6 lg:px-20 text-white pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <h1 className="slide-title text-7xl md:text-9xl font-display font-black leading-none mb-6">
            {SLIDES[active].title}
          </h1>
          <p className="slide-desc text-xl md:text-2xl font-body max-w-xl opacity-80">
            {SLIDES[active].desc}
          </p>
        </div>

        {/* Bottom UI Container */}
        <div className="absolute bottom-12 left-0 w-full px-6 lg:px-20 flex justify-between items-end pointer-events-auto">
          {/* Left: Progress Indicators */}
          <div className="flex gap-4">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group flex flex-col gap-2"
              >
                <span
                  className={`text-[10px] font-bold tracking-widest ${
                    active === i ? "text-cyan-77" : "text-white/50"
                  }`}
                >
                  0{i + 1}
                </span>
                <div
                  className={`h-[2px] w-12 lg:w-20 bg-white/20 relative overflow-hidden`}
                >
                  {active === i && (
                    <div
                      className="absolute inset-0 bg-cyan-77 origin-left"
                      style={{ animation: "progress 6s linear forwards" }}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Right: Navigation Arrows */}
          <div className="flex gap-2">
            <NavButton onClick={prevSlide} label="Prev">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </NavButton>
            <NavButton onClick={nextSlide} label="Next">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </NavButton>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}

// Komponen Tombol Navigasi Reusable
function NavButton({ onClick, children, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      className="
        relative w-14 h-14 flex items-center justify-center
        border border-white/20 bg-dark-77/30 backdrop-blur-sm
        text-white transition-all duration-300
        hover:border-cyan-77 hover:text-cyan-77 hover:bg-dark-77/80
        active:scale-95
      "
    >
      {children}
    </button>
  );
}
