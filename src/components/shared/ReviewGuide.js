"use client";
import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function GuideContent() {
  const searchParams = useSearchParams();
  const isReviewMode = searchParams.get("mode") === "review";

  if (!isReviewMode) return null;

  return (
    <div className="fixed bottom-24 left-6 z-[9999] max-w-xs bg-white text-[#0a1929] p-5 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-2 border-[var(--color-cyan-77)]">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
        <p className="font-black text-sm uppercase tracking-tighter">
          Review Mode Active
        </p>
      </div>
      <p className="text-xs leading-relaxed text-slate-600 mb-3">
        Halo Boss! Gunakan **Vercel Toolbar** (balon percakapan) di bagian bawah
        layar untuk klik dan beri komentar langsung pada bagian yang ingin
        dikritik.
      </p>
      <div className="text-[10px] font-mono bg-slate-100 p-2 rounded">
        Animasi & Layout Live Feedback
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
