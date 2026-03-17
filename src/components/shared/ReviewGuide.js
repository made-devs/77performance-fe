"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";

function GuideContent() {
  const searchParams = useSearchParams();
  const t = useTranslations("reviewGuide");
  const isReviewMode = searchParams.get("mode") === "review";

  if (!isReviewMode) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[9999] max-w-xs bg-dark-77 text-[#0a1929] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[var(--color-cyan-77)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
        <p className="font-black text-sm uppercase tracking-tighter">
          {t("active")}
        </p>
      </div>
      <p className="text-xs leading-relaxed text-slate-300 mb-3">{t("body")}</p>
      <div className="text-[10px] font-mono bg-neutral-900 p-2 rounded">
        {t("hint")}
      </div>
    </div>
  );
}

export default function ReviewGuide() {
  return (
    <Suspense fallback={null}>
      <GuideContent />
    </Suspense>
  );
}
