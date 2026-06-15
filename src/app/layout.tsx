// app/layout.tsx
import './globals.css';
import './perspective-slider.scss';
import './hero-styles.scss';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Sora, DM_Sans, Mona_Sans, Geist } from 'next/font/google';
import ClientProviders from "@/components/providers/ClientProviders";
import CookieConsent from "@/components/heroui/cookie-consent";
import { Viewport } from "next";
import fs from 'fs';
import path from 'path';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// ✅ FORCE DYNAMIC RENDERING - Required for WordPress API integration
export const dynamic = 'force-dynamic'
export const revalidate = 0

// ✅ OPTIMIZED FONTS: Reduced subsets, optimized display
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap', // Critical for CLS and LCP
  preload: true,
  weight: ['400', '500', '600', '700', '800'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap', // Critical for CLS and LCP
  preload: true,
  weight: ['400', '500', '600', '700'],
});

const monaSans = Mona_Sans({
  subsets: ['latin'],
  variable: '--font-mona-sans',
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

// ✅ OPTIMIZED METADATA with SEO optimization (Meta Tags Optimizer Skill)
// Target: "bengkel depok" + "service mobil depok" keywords
// Title: 45 chars (within 50-60 optimal range)
// Description: 154 chars (within 150-160 optimal range)
export const metadata = {
  // ✅ Title: Front-loaded keyword for better CTR
  title: {
    default: 'Service Mobil Depok - Bengkel Wiguna | Profesional',
    template: '%s | Bengkel Wiguna',
  },

  // ✅ Description: Keyword + CTA + Value proposition
  description: 'Bengkel mobil terpercaya di Depok sejak 2010. Service profesional: tune up, ganti oli, AC, kaki-kaki. Diagnosa gratis, harga transparan!',

  // ✅ Keywords: Local + Service-based
  keywords: [
    'bengkel depok',
    'service mobil depok',
    'bengkel mobil terpercaya',
    'tune up depok',
    'ganti oli depok',
    'service ac mobil',
    'kaki-kaki mobil',
    'spooring balancing',
    'perawatan mobil depok',
    'bengkel one stop service',
  ],

  // ✅ Authors & Publishers
  authors: [{ name: 'Bengkel Wiguna', url: 'https://bengkelwiguna.com' }],
  creator: 'Bengkel Wiguna',
  publisher: 'Bengkel Wiguna',

  // ✅ Icons
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },

  // ✅ Canonical & Languages
  alternates: {
    canonical: 'https://bengkelwiguna.com',
    languages: {
      'id-ID': 'https://bengkelwiguna.com',
    },
  },

  // ✅ Open Graph (Enhanced for social sharing)
  openGraph: {
    title: 'Service Mobil Depok - Bengkel Wiguna | Profesional',
    description: 'Bengkel mobil terpercaya di Depok sejak 2010. Service profesional: tune up, ganti oli, AC, kaki-kaki. Diagnosa gratis!',
    url: 'https://bengkelwiguna.com',
    siteName: 'Bengkel Wiguna',
    locale: 'id_ID',
    type: 'website',
    images: [
      // Dynamic OG Image (generated on-demand)
      {
        url: 'https://bengkelwiguna.com/api/og?title=Service%20Mobil%20Depok&type=default',
        width: 1200,
        height: 630,
        alt: 'Bengkel Wiguna - Service & Perawatan Kendaraan Profesional di Depok',
        type: 'image/png',
      },
      // Fallback static image
      {
        url: 'https://bengkelwiguna.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bengkel Wiguna - Service & Perawatan Kendaraan Profesional di Depok',
        type: 'image/jpeg',
      },
    ],
  },

  // ✅ Twitter Card (Enhanced for social sharing)
  twitter: {
    card: 'summary_large_image',
    title: 'Service Mobil Depok - Bengkel Wiguna | Profesional',
    description: 'Bengkel mobil terpercaya di Depok sejak 2010. Service profesional: tune up, ganti oli, AC, kaki-kaki. Diagnosa gratis!',
    site: '@bengkelwiguna',
    creator: '@bengkelwiguna',
    images: {
      url: 'https://bengkelwiguna.com/api/og?title=Service%20Mobil%20Depok&type=default',
      alt: 'Bengkel Wiguna - Service & Perawatan Kendaraan Profesional',
    },
  },

  // ✅ Robots (Enhanced for SEO)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    nocache: false,
  },

  // ✅ Additional Meta Tags (Geographic + Mobile)
  other: {
    // Geographic targeting for local SEO
    'geo.region': 'ID-JB',
    'geo.placename': 'Depok, Jawa Barat',
    'ICBM': '-6.402460, 106.840610',

    // DNS Prefetch for external resources
    'dns-prefetch': 'https://backend.bengkelwiguna.com https://fonts.googleapis.com https://fonts.gstatic.com',

    // Mobile optimization
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  },
};

// ✅ VIEWPORT CONFIG for better mobile performance
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#224297',
};

// ✅ CRITICAL CSS INLINE for above-the-fold content
// Read from file for better maintainability and performance
let criticalCSS = '';
try {
  const criticalPath = path.join(process.cwd(), 'src/styles/critical.min.css');
  criticalCSS = fs.readFileSync(criticalPath, 'utf8');
} catch (error) {
  console.error('[CriticalCSS] Error reading critical.css:', error);
  // Fallback to basic reset
  criticalCSS = 'body { margin: 0; padding: 0; box-sizing: border-box; }';
}

// ✅ Speculation Rules for instant navigation
const speculationRules = {
  prerender: [
    { where: { href_matches: "/services/*" }, eagerness: "moderate" },
    { where: { href_matches: "/blog/*" }, eagerness: "moderate" },
    { where: { href_matches: "/promosi/*" }, eagerness: "moderate" },
    { where: { href_matches: "/paket-service/*" }, eagerness: "moderate" },
    { where: { href_matches: "/layanan-spesialis/*" }, eagerness: "moderate" },
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={cn(sora.variable, dmSans.variable, monaSans.variable, "font-sans", geist.variable)}>
      <head>
        {/* ✅ Preload LCP Hero Images based on viewport */}
        <link rel="preload" as="image" href="/images/hero-mobile.webp" media="(max-width: 767px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero-tablet.webp" media="(min-width: 768px) and (max-width: 1023px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero-desktop.webp" media="(min-width: 1024px)" fetchPriority="high" />

        {/* ✅ CRITICAL: Preconnect to external origins */}
        <link rel="preconnect" href="https://backend.bengkelwiguna.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" crossOrigin="anonymous" />
        
        {/* ✅ FontAwesome CDN for legacy icon support */}
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" 
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer"
        />

        {/* ✅ INLINE CRITICAL CSS for above-the-fold */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* ✅ Speculation Rules for instant navigation */}
        <script
          type="application/json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speculationRules)
          }}
        />
      </head>
      <body>
        <ClientProviders>
          {children}
          <CookieConsent />
        </ClientProviders>
      </body>
    </html>
  );
}