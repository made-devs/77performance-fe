"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, X } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";

gsap.registerPlugin(ScrollTrigger);

// Fallback data (used if translations not present)
const FALLBACK_ITEMS = [
  // Kolom 1
  {
    src: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&q=80&w=800",
    col: 1,
    title: "Precision Tuning",
  },
  {
    src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=800",
    col: 1,
    title: "Night Run",
  },
  {
    src: "https://images.unsplash.com/photo-1597687210387-e45e74257181?auto=format&fit=crop&q=80&w=800",
    col: 1,
    title: "Engine Bay",
  },

  // Kolom 2 (Offset Speed)
  {
    src: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800",
    col: 2,
    title: "Blueprints",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&q=80&w=800",
    col: 2,
    title: "Welding Works",
  },
  {
    src: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&q=80&w=800",
    col: 2,
    title: "Fabrication",
  },

  // Kolom 3
  {
    src: "https://images.unsplash.com/photo-1503376763036-066120622c74?auto=format&fit=crop&q=80&w=800",
    col: 3,
    title: "Neon Garage",
  },
  {
    src: "https://images.unsplash.com/photo-1532585252495-22049eb8ae2b?auto=format&fit=crop&q=80&w=800",
    col: 3,
    title: "Track Day",
  },
  {
    src: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&q=80&w=800",
    col: 3,
    title: "Details",
  },
];

export default function ParallaxGallery() {
  const container = useRef(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const t = useTranslations("pageGallery");
  const locale = useLocale();
  const galleryItems = t?.raw("gallery.items") || FALLBACK_ITEMS;

  useGSAP(
    () => {
      // Parallax Effect: Kolom tengah (col-2) bergerak lebih cepat ke atas
      gsap.to(".col-2", {
        y: -150, // Geser ke atas 150px relatif terhadap scroll
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Kolom pinggir bergerak lebih lambat (creates depth)
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

      {/* LIGHTBOX MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12 animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-8 right-8 text-white hover:text-[var(--color-cyan-77)] transition-colors">
            <X size={40} strokeWidth={1} />
          </button>

          <img
            src={selectedImg.src}
            alt={selectedImg.title}
            className="max-w-full max-h-full object-contain shadow-[0_0_100px_rgba(5,145,190,0.3)] animate-in zoom-in-90 duration-500"
            onClick={(e) => e.stopPropagation()} // Prevent close on image click
          />

          <div className="absolute bottom-12 left-12 text-white">
            <span className="text-[var(--color-cyan-77)] font-mono text-xs tracking-widest uppercase block mb-1">
              {t("gallery.lightbox.archiveTag")}
            </span>
            <h3 className="text-4xl font-black tracking-tighter uppercase">
              {selectedImg.title}
            </h3>
          </div>
        </div>
      )}
    </section>
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
        className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 grayscale group-hover:grayscale-0"
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
        <div>
          <span className="block w-8 h-[2px] bg-dark-77 mb-2" />
          <h4 className="text-white font-bold tracking-widest uppercase text-sm">
            {item.title}
          </h4>
        </div>
      </div>
    </div>
  );
}
