/** @type {import('next').NextConfig} */

/**
 * Complete Performance + Core Web Vitals Optimization
 * Combines performance skill + core-web-vitals skill patterns
 *
 * Targets:
 * - LCP: < 2.5s
 * - FCP: < 1.8s
 * - TTI: < 3.8s
 * - CLS: < 0.1
 * - Performance Score: 90+
 *
 * Budget:
 * - Total: < 1.5 MB
 * - JS: < 300 KB
 * - CSS: < 100 KB
 * - Images: < 500 KB
 * - Fonts: < 100 KB
 */

const nextConfig = {
  // ============================================
  // REACT & NEXT.JS SETTINGS
  // ============================================
  reactStrictMode: true,
  poweredByHeader: false,

  // ============================================
  // IMAGE OPTIMIZATION (LCP, CLS)
  // ============================================
  images: {
    // Modern formats with AVIF priority
    formats: ['image/avif', 'image/webp'],

    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // WordPress media library
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.bengkelwiguna.com',
        pathname: '/**',
      },
      // WordPress.com CDN
      {
        protocol: 'https',
        hostname: '**.wordpress.com',
        pathname: '/**',
      },
      // Jetpack CDN
      {
        protocol: 'https',
        hostname: '**.cdn.jetpack.com',
        pathname: '/**',
      },
    ],

    // Cache optimization
    minimumCacheTTL: 60,
  },

  // ============================================
  // COMPILER OPTIMIZATIONS (INP, Bundle Size)
  // ============================================
  compiler: {
    // Remove console in production for smaller bundles
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // ============================================
  // PACKAGE IMPORT OPTIMIZATION (Tree Shaking)
  // ============================================
  experimental: {
    // Optimize package imports for better tree shaking
    optimizePackageImports: [
      // AI SDKs
      '@anthropic-ai/sdk',
      'web-vitals',
      // UI Libraries
      'lucide-react',
      // Utility Libraries
      'lodash',
    ],
  },

  // ============================================
  // MODULAR IMPORTS (Code Splitting)
  // ============================================
  modularizeImports: {
    // Split lodash - only import what's needed
    lodash: {
      transform: 'lodash/{{member}}',
    },
    // Split icons - tree shake unused icons
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{member}}',
    },
  },

  // ============================================
  // OUTPUT & HEADERS (Caching, Compression)
  // ============================================
  async headers() {
    return [
      // Immutable assets (hashed filenames)
      {
        source: '/:path*.(ico|jpg|jpeg|png|gif|webp|avif|svg|woff|woff2)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
        ],
      },
      // Static assets (CSS, JS)
      {
        source: '/:path*.(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
      // HTML pages (short cache)
      {
        source: '/:path*.html',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
      // API routes (no cache)
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'private, max-age=0, must-revalidate',
          },
        ],
      },
      // Early Hints support for critical resources
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ]
  },

  // ============================================
  // REDIRECTS (Performance - avoid 404s)
  // ============================================
  async redirects() {
    return [
      // Redirect old URL patterns to new ones (prevent 404 crawl overhead)
      // Add as needed based on URL migration
    ]
  },

  // ============================================
  // WEBPACK OPTIMIZATIONS
  // ============================================
  webpack: (config, { isServer }) => {
    // Optimize chunk splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // Separate vendor chunks for better caching
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
          // Separate large libraries
          charts: {
            test: /[\\/]node_modules[\\/](chart|recharts|d3)[\\/]/,
            name: 'charts',
            chunks: 'all',
            priority: 10,
          },
        },
      },
    }

    // Bundle analysis in development
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
        })
      )
    }

    return config
  },
}

module.exports = nextConfig