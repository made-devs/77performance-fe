"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function CustomCursor() {
  const cursorRef = useRef(null); // The big ring
  const dotRef = useRef(null); // The small dot
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Untuk hide cursor saat keluar window

  useGSAP(() => {
    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3",
    }); // Sedikit lebih cepat
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const xToDot = gsap.quickTo(dotRef.current, "x", {
      duration: 0,
      ease: "none",
    });
    const yToDot = gsap.quickTo(dotRef.current, "y", {
      duration: 0,
      ease: "none",
    });

    const onMouseMove = (e) => {
      // Tampilkan cursor saat mouse bergerak
      if (!isVisible) setIsVisible(true);

      xTo(e.clientX);
      yTo(e.clientY);
      xToDot(e.clientX);
      yToDot(e.clientY);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      // Deteksi elemen interaktif lebih luas
      const isInteractive =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === "pointer";

      setIsHovering(isInteractive);
    };

    // Hide cursor saat mouse keluar window
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.body.addEventListener("mouseleave", onMouseLeave);
    document.body.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.body.removeEventListener("mouseleave", onMouseLeave);
      document.body.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [isVisible]);

  useGSAP(() => {
    if (isHovering) {
      // HOVER STATE: Lingkaran membesar & jadi Cyan transparan
      gsap.to(cursorRef.current, {
        scale: 3,
        backgroundColor: "rgba(0, 174, 239, 0.15)", // Cyan 77 transparan
        borderColor: "rgba(0, 174, 239, 0.5)", // Border Cyan lebih tegas
        borderWidth: "1px",
        duration: 0.3,
      });
      // Dot mengecil tapi tidak hilang total (opsional, biar tetap ada center point)
      gsap.to(dotRef.current, {
        scale: 0.5,
        backgroundColor: "#ffffff", // Dot jadi putih saat hover biar kontras
        duration: 0.2,
      });
    } else {
      // NORMAL STATE: Ring Cyan tipis
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "transparent",
        borderColor: "#00aeef", // Cyan 77 Solid
        borderWidth: "1.5px", // Sedikit lebih tebal biar kelihatan
        duration: 0.3,
      });
      gsap.to(dotRef.current, {
        scale: 1,
        backgroundColor: "#00aeef", // Cyan 77 Solid
        duration: 0.2,
      });
    }
  }, [isHovering]);

  // Jangan render di mobile/touch device (simple check)
  if (
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return null;
  }

  return (
    <>
      {/* The Follower Ring */}
      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "0 0 10px rgba(0, 174, 239, 0.3)", // Glow effect cyan
        }}
      />

      {/* The Precision Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
