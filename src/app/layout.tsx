// app/layout.tsx
import './globals.css';
import './perspective-slider.scss';
import './hero-styles.scss';
import { Sora, DM_Sans } from 'next/font/google';
import ClientProviders from "@/components/providers/ClientProviders";
import CookieConsent from "@/components/heroui/cookie-consent";
import { Viewport } from "next";

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

// ✅ ENHANCED METADATA with SEO optimization
export const metadata = {
  title: 'Bengkel Wiguna | Service & Perawatan Kendaraan Profesional di Depok',
  description: 'Bengkel One Stop Service terpercaya di Depok. Perawatan mobil profesional dengan teknisi berpengalaman. Booking sekarang & hemat hingga 20%!',
  keywords: ['bengkel depok', 'service mobil depok', 'perawatan mobil', 'bengkel mobil terpercaya', 'tune up depok', 'oli mesin depok'],
  authors: [{ name: 'Bengkel Wiguna' }],
  creator: 'Bengkel Wiguna',
  publisher: 'Bengkel Wiguna',
  icons: {
    icon: '/icon.png',
    apple: '/apple-touch-icon.png',
  },
  alternates: {
    canonical: 'https://bengkelwiguna.com',
    languages: {
      'id-ID': 'https://bengkelwiguna.com',
    },
  },
  openGraph: {
    title: 'Bengkel Wiguna | Service & Perawatan Kendaraan Profesional di Depok',
    description: 'Bengkel One Stop Service terpercaya di Depok. Perawatan mobil profesional dengan teknisi berpengalaman. Booking sekarang!',
    url: 'https://bengkelwiguna.com',
    siteName: 'Bengkel Wiguna',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: 'https://bengkelwiguna.com/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Bengkel Wiguna - Service & Perawatan Kendaraan Profesional',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bengkel Wiguna | Service & Perawatan Kendaraan Profesional di Depok',
    description: 'Bengkel One Stop Service terpercaya di Depok. Perawatan mobil profesional dengan teknisi berpengalaman.',
    site: '@bengkelwiguna',
    creator: '@bengkelwiguna',
    images: ['https://bengkelwiguna.com/images/og-image.jpg'],
  },
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
  },
  other: {
    // DNS Prefetch for external resources
    'dns-prefetch': 'https://backend.bengkelwiguna.com https://fonts.googleapis.com https://fonts.gstatic.com',
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
const criticalCSS = `
  body { margin: 0; font-family: var(--font-dm-sans); }
  .hero-section { min-height: 100vh; }
  .header-wrapper { position: fixed; top: 0; width: 100%; z-index: 60; }
`;

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
    <html lang="id" className={`${sora.variable} ${dmSans.variable}`}>
      <head>
        {/* ✅ CRITICAL: Preconnect to external origins */}
        <link rel="preconnect" href="https://backend.bengkelwiguna.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
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