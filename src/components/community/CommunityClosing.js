"use client";

import React from "react";
import { useTranslations } from "next-intl";
import AnimatedCTA from "@/components/shared/AnimatedCTA";

export default function CommunityClosing() {
  const t = useTranslations("pageCommunity");
  const whatsappNumber = "6285210450511";
  const message = t("closing.whatsappMessage");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <AnimatedCTA
      uptitle={t("uptitle")}
      titleLines={[t("closing.preline"), t("closing.emphasis")]}
      ctaText={t("closing.cta.big")}
      ctaSub={t("closing.cta.small")}
      whatsappUrl={whatsappUrl}
      footerLeft={t("closing.footer.left")}
      footerRight={t("closing.footer.right")}
      marqueeText={`${t("titleLine1")} • ${t("titleLine2")}`}
      bgImage="https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&q=80&w=1920"
    />
  );
}
