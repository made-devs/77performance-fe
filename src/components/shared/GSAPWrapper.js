"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function GSAPWrapper({ children }) {
  const container = useRef();

  useGSAP(
    () => {
      const isMobile = window.matchMedia("(max-width: 1024px)").matches;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (isMobile || prefersReducedMotion) {
        return;
      }

      // Kurangi smooth value & matikan effects
      const smoother = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5, // Lebih rendah = lebih ringan (was 1.5)
        effects: false, // Matikan effects (was true)
        smoothTouch: false, // Matikan di touch devices
        normalizeScroll: true, // Lebih stabil di berbagai device
      });

      return () => {
        smoother.kill();
      };
    },
    { scope: container },
  );

  return (
    <div ref={container} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
