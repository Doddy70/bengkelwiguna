/**
 * OptimizedAOSWrapper - Lazy loaded AOS (Animate on Scroll)
 *
 * ✅ PERFORMANCE: AOS is now lazy loaded using dynamic imports
 * - Reduces initial bundle size
 * - Improves Time to Interactive (TTI)
 * - Better Core Web Vitals scores
 */

"use client";

import { useEffect, useState } from "react";

export default function OptimizedAOSWrapper() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Mark as mounted to prevent hydration mismatch
    setIsMounted(true);

    // Lazy load AOS only on client side
    const initAOS = async () => {
      try {
        const AOS = (await import("aos")).default;
        await import("aos/dist/aos.css");

        AOS.init({
          duration: 200,
          once: true,
          easing: "ease-out-cubic",
          offset: 50, // Start animations earlier
          delay: 0,
          throttleDelay: 99,
          disable: false,
        });
      } catch (error) {
        console.warn('AOS initialization failed:', error);
      }
    };

    // Load AOS with requestIdleCallback for better performance
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(initAOS, { timeout: 1000 });
    } else {
      setTimeout(initAOS, 300);
    }

    return () => {
      // Cleanup AOS on unmount
      import("aos").then(({ default: AOS }) => {
        AOS.refresh();
      });
    };
  }, []);

  // Render null on server to prevent hydration mismatch
  if (!isMounted) {
    return null;
  }

  return null;
}