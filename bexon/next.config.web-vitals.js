/** @type {import('next').NextConfig} */

/**
 * Core Web Vitals Optimization Configuration
 * Based on core-web-vitals skill patterns
 *
 * Optimizations:
 * - LCP: Image optimization, preload hints, font optimization
 * - INP: Minimal JS, code splitting, deferred loading
 * - CLS: Image dimensions, layout stability
 */

const nextConfig = {
  // ============================================
  // IMAGE OPTIMIZATION (LCP, CLS)
  // ============================================
  images: {
    // Modern formats for smaller file sizes
    formats: ['image/avif', 'image/webp'],

    // Image optimization settings
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Remote patterns for WordPress
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.bengkelwiguna.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
        pathname: '/**',
      },
    ],

    // Optimization settings
    minimumCacheTTL: 60, // seconds

    // Disable lazy loading for LCP images (handled by priority prop)
    disableStaticImages: false,
  },

  // ============================================
  // FONT OPTIMIZATION (LCP, CLS)
  // ============================================
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['@anthropic-ai/sdk', 'web-vitals'],

    // Optimize CSS
    optimizeCss: true,
  },

  // ============================================
  // JAVASCRIPT OPTIMIZATION (INP)
  // ============================================
  modularizeImports: {
    // Split heavy libraries
    lodash: {
      transform: 'lodash/{{member}}',
    },
    // Split icon libraries
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },

  // ============================================
  // COMPILATION OPTIMIZATION
  // ============================================
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ============================================
  // OUTPUT OPTIMIZATION
  // ============================================
  reactStrictMode: true,

  // ============================================
  // HEAD OPTIMIZATION
  // ============================================
  async headers() {
    return [
      {
        // Cache static assets aggressively
        source: '/:path*.(ico|jpg|jpeg|png|gif|webp|avif|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Cache CSS and JS
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Preload critical resources
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
