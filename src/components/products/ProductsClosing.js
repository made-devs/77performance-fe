"use client";

import React from "react";
import { useTranslations } from "next-intl";
import AnimatedCTA from "../shared/AnimatedCTA";

export default function ProductsClosing() {
  const t = useTranslations("pageProducts");

  // WhatsApp Link Config - Disesuaikan untuk B2B
  const whatsappNumber = t("closing.whatsappNumber");
  const message = t("closing.whatsappMessage");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatedCTA
      uptitle={t("closing.uptitle")}
      titleLines={t.raw("closing.titleLines")}
      ctaText={t("closing.cta")}
      ctaSub={t("closing.ctaSub")}
      whatsappUrl={whatsappUrl}
      footerLeft={t("closing.footerLeft")}
      footerRight={t("closing.footerRight")}
      marqueeText="SUPPLY. QUALITY. PROFIT."
      bgImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=1920"
    />
  );
}
