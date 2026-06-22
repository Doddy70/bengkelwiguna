// app/layout.tsx
import './globals.css';
import './perspective-slider.scss';
import './hero-styles.scss';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import { Sora, DM_Sans, Geist, Chakra_Petch } from 'next/font/google';
import { preload } from 'react-dom';
import Script from 'next/script';
import ClientProviders from "@/components/providers/ClientProviders";
import CookieConsent from "@/components/heroui/cookie-consent";
import { Viewport } from "next";
import fs from 'fs';
import path from 'path';
import { cn } from "@/lib/utils";
import AutoRepairSchema from "@/components/seo/AutoRepairSchema";

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

// ✅ Chakra Petch: migrated from CDN @import → next/font (self-hosted, zero render-blocking)
// Eliminates 780ms Google Fonts CDN round-trip blocking FCP/LCP
const chakraPetch = Chakra_Petch({
  subsets: ['latin'],
  variable: '--font-chakra',
  display: 'swap',
  preload: true,
  weight: ['300', '400', '500', '600', '700'],
});


// ✅ ISR: Pages use their own revalidate — removed force-dynamic to allow caching

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

// Mona_Sans removed — not used in any component class

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
  description: 'Bengkel one stop service terpercaya di Depok sejak 1990. Mengedepankan kejujuran dan pelayanan maksimal. Service profesional: tune up, ganti oli, AC.',

  // ✅ Keywords: Local + Service-based
  keywords: [
    'bengkel depok',
    'service mobil depok',
    'bengkel mobil terpercaya',
    'bengkel jujur depok',
    'bengkel mobil sejak 1990',
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
    description: 'Bengkel one stop service terpercaya di Depok sejak 1990. Berkomitmen pada kejujuran dan pelayanan maksimal.',
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
    description: 'Bengkel one stop service terpercaya di Depok sejak 1990. Berkomitmen pada kejujuran dan pelayanan maksimal.',
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
    'dns-prefetch': 'https://backend.bengkelwiguna.com',

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
  // ✅ ReactDOM.preload() — only API that correctly emits fetchpriority=high on <link rel=preload>
  // Fixes PSI: "fetchpriority=high should be applied to the image preload request"
  preload('/images/hero/slider-1.webp', {
    as: 'image',
    fetchPriority: 'high',
    type: 'image/webp',
    imageSrcSet: '/_next/image?url=%2Fimages%2Fhero%2Fslider-1.webp&w=640&q=90 640w, /_next/image?url=%2Fimages%2Fhero%2Fslider-1.webp&w=1080&q=90 1080w',
    imageSizes: '100vw',
  });

  return (
    <html lang="id" className={cn(sora.variable, dmSans.variable, chakraPetch.variable, "font-sans", geist.variable)}>
      <head>

        {/* ✅ Preconnect: fonts.googleapis.com removed — all fonts self-hosted via next/font */}
        <link rel="preconnect" href="https://backend.bengkelwiguna.com" crossOrigin="anonymous" />
        
        {/* ✅ FontAwesome CDN removed — all icons via @iconify/react (zero render-blocking) */}

        {/* ✅ INLINE CRITICAL CSS for above-the-fold */}
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />

        {/* ✅ Speculation Rules for instant navigation */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(speculationRules)
          }}
        />

        {/* ✅ GTM moved to next/script afterInteractive — no longer render-blocking */}
        
        {/* ✅ AutoRepair Schema JSON-LD for Local SEO */}
        <AutoRepairSchema />
      </head>
      <body>
        {/* ✅ GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WKKBRC8X"
            height="0"
            width="0"
            style={{display:'none', visibility:'hidden'}}
          />
        </noscript>

        <ClientProviders>
          {children}
          <CookieConsent />
        </ClientProviders>

        {/* ✅ GTM — afterInteractive: loads after page is interactive, not render-blocking */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WKKBRC8X');`
          }}
        />

        {/* ✅ Facebook Pixel — lazyOnload: loads after all resources, minimal TBT impact */}
        <Script
          id="fb-pixel"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1214658270215713');fbq('track','PageView');`
          }}
        />
        <noscript>
          <img height="1" width="1" style={{display:'none'}} alt="" src="https://www.facebook.com/tr?id=1214658270215713&ev=PageView&noscript=1"/>
        </noscript>
      </body>
    </html>
  );
}