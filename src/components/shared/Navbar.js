"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

gsap.registerPlugin(ScrollTrigger);

const NAV_LINKS = [
  { key: "manufacturing", href: "/manufacturing" },
  { key: "products", href: "/products" },
  { key: "gallery", href: "/gallery" },
  { key: "community", href: "/community" },
  { key: "contact", href: "/contact" },
  { key: "about", href: "/about" },
  { key: "distributor", href: "/distributor" },
];

const LANGUAGES = ["id", "en", "zh"];

export default function Navbar() {
  const headerRef = useRef(null);
  const mainNavRef = useRef(null);
  const topBarRef = useRef(null);
  const logoRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const t = useTranslations("navbar");
  const tCommon = useTranslations("common");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (nextLocale) => {
    if (nextLocale === locale) {
      return;
    }

    router.replace(pathname, { locale: nextLocale });
  };

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

      // Sembunyikan top bar saat discroll
      tl.to(
        topBarRef.current,
        {
          height: 0,
          opacity: 0,
          pointerEvents: "none",
          borderBottomWidth: 0,
          borderBottomColor: "transparent",
          paddingTop: 0,
          paddingBottom: 0,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );

      // Animasi Main Navbar Background & Height
      tl.to(
        mainNavRef.current,
        {
          backgroundColor: "rgba(17, 17, 17, 0.95)", // Dark background
          backdropFilter: "blur(12px)",
          borderBottomColor: "rgba(255, 255, 255, 0.1)",
          paddingTop: "0.3rem",
          paddingBottom: "0.3rem",
          duration: 0.3,
          ease: "power2.out",
        },
        0, // Start together
      );

      // Animasi Logo Scale
      tl.to(
        logoRef.current,
        {
          scale: 0.85,
          transformOrigin: "left center",
          duration: 0.3,
        },
        0,
      );
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed top-0 w-full z-[100] flex flex-col font-mulish"
    >
      {/* Top Bar (Bahasa & Downloads) */}
      <div
        ref={topBarRef}
        className="w-full bg-[#0a0a0a] border-b border-white/5 flex items-center h-10 overflow-hidden"
      >
        <div className="w-full max-w-360 mx-auto px-6 lg:px-20 flex justify-between md:justify-end items-center gap-6 h-full">
          {/* Download Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              download
              className="group flex items-center gap-2 text-[10px] md:text-xs text-slate-400 hover:text-cyan-77 transition-colors uppercase tracking-widest font-bold"
            >
              <svg
                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <span>
                {tCommon("downloads.companyProfile") || "Company Profile"}
              </span>
            </a>
            <span className="w-[1px] h-3 bg-white/10 hidden md:block"></span>
            <a
              href="#"
              download
              className="group hidden md:flex items-center gap-2 text-[10px] md:text-xs text-slate-400 hover:text-cyan-77 transition-colors uppercase tracking-widest font-bold"
            >
              <svg
                className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
              <span>
                {tCommon("downloads.distributorProposal") ||
                  "Distributor Proposal"}
              </span>
            </a>
          </div>

          {/* Lang Selector */}
          <div
            className="flex items-center gap-2 md:pl-6 md:border-l border-white/10"
            aria-label={tCommon("language")}
          >
            {LANGUAGES.map((language) => {
              const active = language === locale;

              return (
                <button
                  key={language}
                  type="button"
                  onClick={() => handleLocaleChange(language)}
                  className={`px-1.5 py-0.5 text-[10px] tracking-widest border transition-colors uppercase ${
                    active
                      ? "bg-cyan-77/20 text-cyan-77 border-cyan-77/50"
                      : "text-slate-400 border-transparent hover:text-white hover:border-white/30"
                  }`}
                >
                  {t(`languages.${language}`)}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        ref={mainNavRef}
        className="relative w-full border-b border-transparent transition-all duration-300"
      >
        {/* Top Decorative Line (Industrial Look) */}
        <div
          className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-77/50 to-transparent transition-opacity duration-500"
          style={{ opacity: isScrolled ? 1 : 0 }}
        />

        {/* Container konten dibatasi max-width 1440px dan di-center */}
        <div className="w-full max-w-360 mx-auto px-6 lg:px-20 py-3 flex justify-between items-center relative">
          {/* Logo Area */}
          <Link href="/" aria-label={t("logoAlt")}>
            <img
              ref={logoRef}
              src="/logo.webp"
              alt={t("logoAlt")}
              className="w-25 h-auto cursor-pointer"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-12">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                className="relative group py-2"
              >
                <span className="font-mulish text-sm font-bold tracking-widest text-white transition-colors">
                  {t(`links.${link.key}`)}
                </span>
                {/* Hover Line Animation */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-77 transition-all duration-300 group-hover:w-full" />
                {/* Top Dot Ornament */}
                <span className="absolute -top-1 right-0 w-1 h-1 bg-cyan-77 rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-translate-y-1" />
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/distributor"
            className="hidden md:block relative overflow-hidden group px-6 py-2 bg-white/10 border border-white/20 hover:border-cyan-77 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-cyan-77 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative font-mulish text-sm font-bold tracking-widest text-white z-10 flex items-center gap-2">
              {t("cta")}
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
          </Link>

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
    </header>
  );
}
