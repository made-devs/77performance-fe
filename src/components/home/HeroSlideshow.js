"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Marquee from "react-fast-marquee"; // Import Marquee

export default function HeroSlideshow() {
  const container = useRef();

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-sub",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          ".hero-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: "power4.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-desc",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.7"
        )
        // Tambahkan animasi masuk untuk button
        .fromTo(
          ".hero-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        );
    },
    { scope: container }
  );

  return (
    <section
      ref={container}
      className="relative h-screen w-full bg-dark-77 overflow-hidden"
    >
      {/* Single Background Image */}
      <div className="absolute inset-0 right-5 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="https://i.imgur.com/aVcGBvO.png"
            alt="Premium Import Automotive Parts"
            fill
            className="object-cover object-[65%_center] md:object-center"
            priority
            unoptimized
          />
          {/* Gradient Overlay for better text readability against the blue sky/shirt */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent" />
        </div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-30 h-full w-full max-w-[1440px] mx-auto flex flex-col justify-center px-6 text-white pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <span className="hero-sub block text-cyan-77 font-bold tracking-widest mb-4 text-sm md:text-base">
            GLOBAL • PREMIUM • PERFORMANCE
          </span>
          <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-mulish font-bold mb-6">
            Premium Import Automotive Parts
          </h1>
          <p className="hero-desc text-lg md:text-2xl font-body max-w-xl text-gray-200">
            Discover the finest selection of automotive parts, engineered for
            performance and durability. Elevate your vehicle with our premium
            imports.
          </p>

          {/* CTA Button */}
          <div className="hero-btn mt-10">
            <button className="group relative px-8 py-4 bg-transparent border border-white/30 overflow-hidden transition-colors duration-300 hover:border-cyan-77">
              {/* Animated Background Fill */}
              <div className="absolute inset-0 w-full h-full bg-cyan-77 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />

              {/* Button Content */}
              <div className="relative z-10 flex items-center gap-3">
                <span className="font-mulish font-bold tracking-[0.15em] text-white group-hover:text-black transition-colors duration-300">
                  EXPLORE PARTS
                </span>
                <svg
                  className="w-5 h-5 text-cyan-77 group-hover:text-black transition-all duration-300 group-hover:translate-x-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Running Text Marquee */}
      <div className="absolute bottom-0 left-0 w-full z-40 border-t border-white/10 bg-black/40 backdrop-blur-md">
        <Marquee
          autoFill
          speed={40}
          gradient={false}
          className="py-4 overflow-hidden"
        >
          <div className="flex items-center">
            <span className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-white font-mulish">
              77 PERFORMANCE
            </span>
            <span className="text-cyan-77 text-xs">✦</span>
            <span
              className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-transparent font-mulish"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            >
              PREMIUM IMPORT PARTS
            </span>
            <span className="text-cyan-77 text-xs">✦</span>
            <span className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-white font-mulish">
              WORLDWIDE SHIPPING
            </span>
            <span className="text-cyan-77 text-xs">✦</span>
            <span
              className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-transparent font-mulish"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            >
              AUTHENTIC QUALITY
            </span>
            <span className="text-cyan-77 text-xs">✦</span>
            <span className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-white font-mulish">
              24/7 CUSTOMER SUPPORT
            </span>
            <span className="text-cyan-77 text-xs">✦</span>
            <span
              className="mx-8 text-sm md:text-base font-bold tracking-[0.2em] text-transparent font-mulish"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
            >
              SECURE PAYMENT
            </span>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
