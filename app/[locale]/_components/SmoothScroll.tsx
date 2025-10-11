"use client";

import Lenis from "@studio-freight/lenis";
import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type SmoothScrollProps = {
  children: ReactNode;
};

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 0.8, // Reduced duration for faster scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.2, // Slightly increased for better responsiveness
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync Lenis with GSAP ScrollTrigger
    lenis.on("scroll", (e: any) => {
      ScrollTrigger.update();
    });

    // Use GSAP ticker for smooth animation frame updates
    const scrollFn = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(scrollFn);
    gsap.ticker.lagSmoothing(0);

    // Update ScrollTrigger on resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      gsap.ticker.remove(scrollFn);
      window.removeEventListener("resize", handleResize);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return <>{children}</>;
}
