"use client";

import React, { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { Plus, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// Fallback data (uses local images from public/gallery)
const LOCAL_GALLERY_COUNT = 22;
const FALLBACK_ITEMS = Array.from({ length: LOCAL_GALLERY_COUNT }).map(
  (_, i) => ({
    src: `/gallery/gallery${i + 1}.webp`,
    col: (i % 3) + 1,
    title: `Archive ${i + 1}`,
  }),
);

export default function ParallaxGallery() {
  const container = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const t = useTranslations("pageGallery");
  const locale = useLocale();

  // Always use the full local gallery of 22 images for consistent display
  const galleryItems = FALLBACK_ITEMS;

  // Freeze/unfreeze ScrollSmoother + body scroll when lightbox opens/closes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const smoother = ScrollSmoother.get();

    if (selectedImg) {
      smoother?.paused(true);
      document.body.style.overflow = "hidden";
      document.body.style.cursor = "default";
    } else {
      smoother?.paused(false);
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    }

    return () => {
      smoother?.paused(false);
      document.body.style.overflow = "";
      document.body.style.cursor = "";
    };
  }, [selectedImg]);

  useGSAP(
    () => {
      // Parallax Effect: center column moves up faster
      gsap.to(".col-2", {
        y: -150,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Side columns move slower to create depth
      gsap.to(".col-1, .col-3", {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: container, dependencies: [locale] },
  );

  // Group images by columns
  const col1 = galleryItems.filter((i) => i.col === 1);
  const col2 = galleryItems.filter((i) => i.col === 2);
  const col3 = galleryItems.filter((i) => i.col === 3);

  return (
    <>
      <section
        ref={container}
        className="relative py-20 bg-[var(--color-navy-77)] min-h-screen overflow-hidden"
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* COLUMN 1 */}
            <div className="col-1 flex flex-col gap-12 pt-0 md:pt-24">
              {col1.map((item, idx) => (
                <GalleryCard
                  key={idx}
                  item={item}
                  onClick={() => setSelectedImg(item)}
                />
              ))}
            </div>

            {/* COLUMN 2 (CENTER) */}
            <div className="col-2 flex flex-col gap-12">
              {col2.map((item, idx) => (
                <GalleryCard
                  key={idx}
                  item={item}
                  onClick={() => setSelectedImg(item)}
                />
              ))}
            </div>

            {/* COLUMN 3 */}
            <div className="col-3 flex flex-col gap-12 pt-0 md:pt-12">
              {col3.map((item, idx) => (
                <GalleryCard
                  key={idx}
                  item={item}
                  onClick={() => setSelectedImg(item)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIGHTBOX — rendered in document.body via portal to escape GSAP transforms */}
      {selectedImg &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-300 cursor-default"
            onClick={() => setSelectedImg(null)}
          >
            <button
              className="absolute top-8 right-8 text-white hover:text-[var(--color-cyan-77)] transition-colors cursor-pointer"
              onClick={() => setSelectedImg(null)}
            >
              <X size={40} strokeWidth={1} />
            </button>

            <img
              src={selectedImg.src}
              alt={selectedImg.title}
              className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(5,145,190,0.3)] animate-in zoom-in-90 duration-500"
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body,
        )}
    </>
  );
}

// Sub-component for individual card with hover effects
function GalleryCard({ item, onClick }) {
  return (
    <div
      className="group relative w-full aspect-[3/4] overflow-hidden bg-slate-800 cursor-pointer"
      onClick={onClick}
    >
      {/* Image */}
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
      />

      {/* Overlay Cyan Tint */}
      <div className="absolute inset-0 bg-[var(--color-cyan-77)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Hover Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex justify-end">
          <div className="w-10 h-10 rounded-full bg-dark-77 text-[var(--color-navy-77)] flex items-center justify-center">
            <Plus size={20} />
          </div>
        </div>
        {/* no text overlay per request */}
      </div>
    </div>
  );
}
