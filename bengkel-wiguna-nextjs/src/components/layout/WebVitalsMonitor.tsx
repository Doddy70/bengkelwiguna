/**
 * WebVitals Monitor — Performance Tracking Component
 *
 * ✅ PERFORMANCE MONITORING:
 * - Tracks LCP, INP, CLS metrics
 * - Sends data to analytics endpoint
 * - Helps identify performance regressions
 */

"use client";

import { useEffect } from 'react';

export default function WebVitalsMonitor() {
  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;

    const reportWebVitals = async ({ name, delta, id, rating }: any) => {
      // Send to analytics endpoint (you can customize this)
      const body = JSON.stringify({
        name,
        value: delta,
        rating,
        id,
        url: window.location.href,
        timestamp: Date.now(),
      });

      // Use sendBeacon for reliable delivery
      if (navigator.sendBeacon && navigator.sendBeacon.length > 0) {
        navigator.sendBeacon('/api/vitals', body);
      } else {
        // Fallback to fetch
        fetch('/api/vitals', {
          method: 'POST',
          body,
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
        }).catch(() => {
          // Silently fail - we don't want to impact user experience
        });
      }

      // Also log to console in development
      if (process.env.NODE_ENV === 'development') {
        console.log(`[WebVitals] ${name}: ${Math.round(delta)}ms (${rating})`);
      }
    };

    // Load web-vitals library dynamically
    const loadWebVitals = async () => {
      try {
        const { onLCP, onINP, onCLS, onFCP, onTTFB } = await import('web-vitals/attribution');

        // Largest Contentful Paint (LCP)
        onLCP((metric: any) => {
          reportWebVitals({
            name: 'LCP',
            delta: metric.value,
            id: metric.id,
            rating: metric.rating,
          });
        }, {
          // Report all LCP events, not just the worst
          reportAllChanges: true,
        });

        // Interaction to Next Paint (INP) - replaces FID
        onINP((metric: any) => {
          reportWebVitals({
            name: 'INP',
            delta: metric.value,
            id: metric.id,
            rating: metric.rating,
          });
        });

        // Cumulative Layout Shift (CLS)
        onCLS((metric: any) => {
          // Only report if there's significant shift
          if (metric.value > 0.01) {
            reportWebVitals({
              name: 'CLS',
              delta: metric.value,
              id: metric.id,
              rating: metric.rating,
            });
          }
        });

        // First Contentful Paint (FCP)
        onFCP((metric: any) => {
          reportWebVitals({
            name: 'FCP',
            delta: metric.value,
            id: metric.id,
            rating: metric.rating,
          });
        });

        // Time to First Byte (TTFB)
        onTTFB((metric: any) => {
          reportWebVitals({
            name: 'TTFB',
            delta: metric.value,
            id: metric.id,
            rating: metric.rating,
          });
        });
      } catch (error) {
        // web-vitals not available, use Performance API fallback
        console.warn('web-vitals library not available, using fallback');
        setupFallbackMetrics();
      }
    };

    // Fallback metrics using Performance Observer API
    const setupFallbackMetrics = () => {
      // LCP
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry;
        if (lastEntry) {
          reportWebVitals({
            name: 'LCP',
            delta: lastEntry.startTime,
            id: 'lcp-fallback',
            rating: lastEntry.startTime < 2500 ? 'good' : lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor',
          });
        }
      }).observe({ type: 'largest-contentful-paint', buffered: true });

      // CLS
      let clsValue = 0;
      new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!((entry as any).hadRecentInput)) {
            clsValue += (entry as any).value;
          }
        }
      }).observe({ type: 'layout-shift', buffered: true });

      // Report CLS on page hide
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          reportWebVitals({
            name: 'CLS',
            delta: clsValue,
            id: 'cls-fallback',
            rating: clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor',
          });
        }
      });
    };

    // Load web-vitals
    loadWebVitals();
  }, []);

  return null; // This component doesn't render anything
}