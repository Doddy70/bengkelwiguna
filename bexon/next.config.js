/**
 * Bengkel Wiguna - Next.js Configuration
 * Headless WordPress + Next.js Frontend
 *
 * OPTIMIZATION: Added compiler optimizations, tree shaking, and bundle splitting
 */

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  poweredByHeader: false,
  output: 'standalone',

  // Turbopack workspace root — silences lockfile warning from multiple package-lock.json files
  turbopack: {
    root: __dirname,
  },

  // COMPILER OPTIMIZATIONS - Reduce bundle size significantly
  compiler: {
    // Remove console logs in production for smaller bundles
    removeConsole: process.env.NODE_ENV === 'production'
      ? true
      : false,
  },

  // IMAGE OPTIMIZATION - LCP and CLS improvement
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'backend.bengkelwiguna.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'bengkelwiguna.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bengkelwiguna.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // OPTIMIZATION: Prefer AVIF for better compression
    formats: ['image/avif', 'image/webp'],
    // Responsive breakpoints
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Cache optimization
    minimumCacheTTL: 86400,
    // Enable responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
  },

  // MODULAR IMPORTS - Better tree shaking
  modularizeImports: {
    // OPTIMIZATION: Only import what's needed from lodash
    lodash: {
      transform: 'lodash/{{member}}',
    },
    // OPTIMIZATION: Split GSAP for better tree shaking
    'gsap': {
      transform: 'gsap/{{member}}',
    },
  },

  // EXPERIMENTAL FEATURES
  experimental: {
    // OPTIMIZATION: Better tree shaking for package imports
    optimizePackageImports: [
      'react',
      'react-dom',
      'gsap',
      'swiper',
      'chart.js',
      'isotope-layout',
      'sweetalert2',
      // UI libraries
      'lucide-react',
    ],

    // OPTIMIZATION: Enable CSS optimization with critters (already installed)
    optimizeCss: true,
  },

  // WEBPACK OPTIMIZATIONS
  webpack: (config, { isServer }) => {
    // OPTIMIZATION: Better chunk splitting
    config.optimization = {
      ...config.optimization,
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          // Separate vendor chunks
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          // Separate large libraries into their own chunks
          gsap: {
            test: /[\\/]node_modules[\\/]gsap[\\/]/,
            name: 'gsap',
            chunks: 'all',
            priority: 20,
          },
          swiper: {
            test: /[\\/]node_modules[\\/](swiper|@swiper)[\\/]/,
            name: 'swiper',
            chunks: 'all',
            priority: 20,
          },
          charts: {
            test: /[\\/]node_modules[\\/](chart\.js|recharts|d3)[\\/]/,
            name: 'charts',
            chunks: 'all',
            priority: 20,
          },
        },
      },
    };

    // Bundle analysis
    if (process.env.ANALYZE === 'true') {
      const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          openAnalyzer: false,
          reportFilename: 'bundle-report.html',
        })
      );
    }

    return config;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' data: https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https:;",
          },
        ],
      },
      // Aggressive caching for static assets
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Cache images
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=604800',
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: '/promosi/:id(\\d+)/',
        destination: '/promosi/',
        permanent: true,
      },
      {
        source: '/promosi/:id(\\d+)',
        destination: '/promosi/',
        permanent: false,
      },
    ];
  },

  // Enable Cache Components for Next.js 16+
  cacheComponents: true,
};

module.exports = nextConfig;