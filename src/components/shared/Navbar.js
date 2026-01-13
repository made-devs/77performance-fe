"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { name: "Manufacturing", href: "#" },
  { name: "Products", href: "#" },
  { name: "Partnership", href: "#" },
  { name: "About", href: "#" },
];

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          start: "top top",
          end: "+=100",
          onLeave: () => setIsScrolled(true),
          onEnterBack: () => setIsScrolled(false),
          scrub: true, // Smooth scrubbing effect
        },
      });

      // Animasi Navbar Background & Height
      tl.to(navRef.current, {
        backgroundColor: "rgba(17, 17, 17, 0.85)", // Dark-77 with opacity
        backdropFilter: "blur(12px)",
        borderBottomColor: "rgba(255, 255, 255, 0.1)",
        paddingTop: "1rem",
        paddingBottom: "1rem",
        duration: 0.3,
        ease: "power2.out",
      });

      // Animasi Logo Scale
      tl.to(
        logoRef.current,
        {
          scale: 0.9,
          transformOrigin: "left center",
          duration: 0.3,
        },
        0
      );
    },
    { scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="fixed top-0 w-full z-[100] px-6 lg:px-20 py-6 border-b border-transparent transition-all duration-500"
    >
      {/* Top Decorative Line (Industrial Look) */}
      <div
        className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-77/50 to-transparent opacity-0 transition-opacity duration-500"
        style={{ opacity: isScrolled ? 1 : 0 }}
      />

      {/* Container konten dibatasi max-width 1440px dan di-center */}
      <div className="w-full max-w-[1440px] mx-auto flex justify-between items-center relative">
        {/* Logo Area */}
        <img
          ref={logoRef}
          src="/logo.webp"
          alt="Logo"
          className=" w-25 h-auto cursor-pointer"
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative group py-2"
            >
              <span className="font-mulish text-sm font-bold uppercase tracking-widest text-white transition-colors">
                {link.name}
              </span>
              {/* Hover Line Animation */}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-77 transition-all duration-300 group-hover:w-full" />
              {/* Top Dot Ornament */}
              <span className="absolute -top-1 right-0 w-1 h-1 bg-cyan-77 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <button className="hidden md:block relative overflow-hidden group px-6 py-2 bg-white/10 border border-white/20 hover:border-cyan-77 transition-all duration-300">
          <div className="absolute inset-0 bg-cyan-77 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          <span className="relative font-mulish text-sm font-bold tracking-widest text-white z-10 flex items-center gap-2">
            DISTRIBUTOR
            <svg
              className="w-3 h-3 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </span>
        </button>

        {/* Mobile Menu Toggle (Hamburger) */}
        <button className="md:hidden text-white">
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </nav>
  );
}
