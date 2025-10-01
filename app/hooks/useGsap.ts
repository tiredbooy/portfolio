import { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAP = (
  callback: (context: gsap.Context) => void,
  dependencies: any[] = []
) => {
  const contextRef = useRef<gsap.Context>();

  // Use useLayoutEffect for DOM mutations, useEffect for others
  const useIsomorphicEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicEffect(() => {
    contextRef.current = gsap.context(callback);

    return () => {
      contextRef.current?.revert();
    };
  }, dependencies);

  return contextRef.current;
};

// Add a flag to prevent multiple initializations
let isScrollTriggerInitialized = false;

// Helper function to sync GSAP ScrollTrigger with Lenis
export const initScrollTrigger = (lenis: any) => {
  if (typeof window === "undefined" || !lenis || isScrollTriggerInitialized)
    return;

  isScrollTriggerInitialized = true;

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};

// Utility functions for common animations
export const fadeInUp = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: 60,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
    }
  );
};

export const staggerFadeIn = (elements: string | Element[], stagger = 0.1) => {
  return gsap.fromTo(
    elements,
    {
      opacity: 0,
      y: 40,
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger,
      ease: "power2.out",
    }
  );
};

export const scaleIn = (element: string | Element, delay = 0) => {
  return gsap.fromTo(
    element,
    {
      scale: 0.8,
      opacity: 0,
    },
    {
      scale: 1,
      opacity: 1,
      duration: 1,
      delay,
      ease: "back.out(1.7)",
    }
  );
};
