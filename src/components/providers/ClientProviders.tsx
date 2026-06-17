/**
 * ClientProviders - Client-side wrapper for server components
 *
 * ✅ REQUIRED: Next.js 15 doesn't allow `ssr: false` in Server Components
 * This client component wraps all client-side functionality
 */

"use client";

import { Providers } from "@/components/providers/nextui-provider";
import dynamic from "next/dynamic";

// ✅ Lazy load AOS wrapper
const OptimizedAOSWrapper = dynamic(
  () => import("@/components/layout/OptimizedAOSWrapper"),
  { ssr: false, loading: () => null }
);

// ✅ Lazy load Web Vitals Monitor
const WebVitalsMonitor = dynamic(
  () => import("@/components/layout/WebVitalsMonitor"),
  { ssr: false, loading: () => null }
);

// ✅ Global Analytics Tracker
const GlobalAnalyticsTracker = dynamic(
  () => import("@/components/providers/GlobalAnalyticsTracker"),
  { ssr: false, loading: () => null }
);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      <OptimizedAOSWrapper />
      {children}
      {/* ✅ Web Vitals Monitor - Only in production */}
      {process.env.NODE_ENV === 'production' && <WebVitalsMonitor />}
      {/* ✅ Global Analytics Tracker */}
      <GlobalAnalyticsTracker />
    </Providers>
  );
}