import React from "react";
import HeroOpening from "@/components/shared/HeroOpening";
import DistributionMap from "@/components/contact/DistributionMap";
import ContactMain from "@/components/contact/ContactMain";
import ProductsClosing from "@/components/products/ProductsClosing"; // Reuse closing keren sebelumnya

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-navy-77)]">
      {/* 1. HERO */}
      <HeroOpening
        uptitle="GET IN TOUCH"
        titleLines={["CONNECT", "WITH HQ"]}
        description="Jalur komunikasi resmi untuk kemitraan, distribusi, dan informasi korporat 77 Performance."
        bgImageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1920"
        height="80vh"
      />

      {/* 2. CONTACT INFO & FORM */}
      {/* Putih di atas */}
      <ContactMain />

      {/* 3. INTERACTIVE MAP */}
      {/* Gelap / Peta di bawah */}
      <div className="w-full">
        <div className="py-12 bg-slate-900 text-center">
          <h2 className="text-3xl font-bold text-white uppercase tracking-widest">
            <span className="text-[var(--color-cyan-77)]">Nationwide</span>{" "}
            Presence
          </h2>
          <div className="w-1 h-8 bg-[var(--color-cyan-77)] mx-auto mt-4" />
        </div>
        <DistributionMap />
      </div>

      {/* 4. CLOSING (B2B CTA) */}
      <ProductsClosing />
    </main>
  );
}
