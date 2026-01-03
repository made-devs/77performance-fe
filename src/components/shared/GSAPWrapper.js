"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

// Registrasi plugin
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

export default function GSAPWrapper({ children }) {
  const container = useRef();

  useGSAP(
    () => {
      // Inisialisasi smooth scroll
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,
        effects: true,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}
