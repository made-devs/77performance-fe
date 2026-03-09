"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "motion/react";
import { PackageCheck, Shield, Award } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProductsProtection() {
  const targetRef = useRef(null);
  const t = useTranslations("pageProducts");
  const ICONS = [PackageCheck, Shield, Award];

  // Horizontal Scroll Setup (Fake) or just visual interaction
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.5, 1, 1, 0.5],
  );

  return (
    <section
      ref={targetRef}
      className="py-24 bg-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#0a0a0a]" />

      <motion.div
        style={{ scale, opacity }}
        className="container mx-auto px-6 md:px-12 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block py-1 px-3 rounded-full border border-[var(--color-cyan-77)] text-[var(--color-cyan-77)] text-xs font-bold tracking-widest uppercase mb-6"
          >
            {t("protection.tag")}
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tighter"
          >
            {t("protection.heading")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {t.raw("protection.items").map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + i * 0.2,
                duration: 0.8,
                type: "spring",
              }}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
            >
              <div className="mb-6 flex justify-center text-[var(--color-cyan-77)]">
                {(() => {
                  const Icon = ICONS[i] || PackageCheck;
                  return <Icon size={48} strokeWidth={1} />;
                })()}
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
