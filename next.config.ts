import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "standalone",
  // ✅ TRAILING SLASH - Prevent redirect loops with Vercel
  trailingSlash: false,

  // ✅ ENABLE IMAGE OPTIMIZATION (removed unoptimized: true)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 95, 100],
    // ✅ LCP Image Priority for critical images
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'backend.bengkelwiguna.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bengkelwiguna.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bengkelwiguna.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'secure.gravatar.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.googleusercontent.com',
        pathname: '/**',
      },
    ],
    // ✅ Content Security Policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; style-src 'self' 'unsafe-inline';",
  },

  // ✅ ENABLE COMPRESSION
  compress: true,

  // ✅ POWERED BY HEADER (Performance hint)
  poweredByHeader: false,

  // ✅ EXPERIMENTAL: Optimize package imports
  experimental: {
    optimizePackageImports: ['@iconify/react', 'lucide-react', '@splidejs/react-splide', 'framer-motion'],
  },

  // ✅ HTTP HEADERS FOR CACHING & SECURITY
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Security headers (CITE audit T08 fix)
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://backend.bengkelwiguna.com https://img.youtube.com https://i.ytimg.com https://yt3.ggpht.com https://*.googleusercontent.com https://secure.gravatar.com https://i.pravatar.cc blob:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com; frame-src 'self' https://www.youtube.com https://www.google.com;",
          },
        ],
      },
      {
        // Cache static assets aggressively
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache fonts
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // ✅ OUTPUT FILE TRACING ROOT
  outputFileTracingRoot: path.join(__dirname),

  // ✅ WEBPACK OPTIMIZATION
  webpack: (config, { isServer }) => {
    // Let Next.js handle splitChunks natively to avoid './chunks/../undefined.js' module errors during SSG.
    // Disable webpack cache on Vercel to prevent build failures from corrupted restored cache
    if (process.env.VERCEL) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
