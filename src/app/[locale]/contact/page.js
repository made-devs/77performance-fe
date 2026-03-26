import React from "react";
import HeroOpening from "@/components/shared/HeroOpening";
import DistributionMap from "@/components/contact/DistributionMap";
import ContactMain from "@/components/contact/ContactMain";
import ProductsClosing from "@/components/products/ProductsClosing"; // Reuse closing keren sebelumnya
import { getLocale, getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("pageContact");
  const locale = await getLocale();

  return (
    <main key={`contact-${locale}`} className="bg-[var(--color-navy-77)]">
      {/* 1. HERO */}
      <HeroOpening
        uptitle={t("uptitle")}
        titleLines={[t("titleLine1"), t("titleLine2")]}
        description={t("description")}
        bgImageUrl="/gallery/gallery7.webp"
        height="100vh"
      />

      {/* 2. CONTACT INFO & FORM */}
      {/* Putih di atas */}
      <ContactMain />

      {/* 3. INTERACTIVE MAP */}

      <DistributionMap />

      {/* 4. CLOSING (B2B CTA) */}
      <ProductsClosing />
    </main>
  );
}
