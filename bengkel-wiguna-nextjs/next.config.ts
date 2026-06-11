import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ ENABLE IMAGE OPTIMIZATION (removed unoptimized: true)
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 80, 85, 90, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
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

  // ✅ HTTP HEADERS FOR CACHING
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
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

  // ✅ OUTPUT FILE TRACING ROOT (fix warning)
  outputFileTracingRoot: "/Users/doddykapisha/Downloads/GITDODDY/new bengkel wiguna/bengkel-wiguna-nextjs",

  // ✅ WEBPACK OPTIMIZATION
  webpack: (config, { isServer }) => {
    // Optimize chunks
    config.optimization.splitChunks = {
      chunks: 'all',
      minSize: 20000,
      maxSize: 244000,
      cacheGroups: {
        default: false,
        vendors: false,
        // Vendor chunk for node_modules
        vendor: {
          name: 'vendor',
          chunks: 'all',
          test: /[\\/]node_modules[\\/]/,
          priority: 20,
        },
        // Common chunks
        common: {
          name: 'common',
          minChunks: 2,
          chunks: 'all',
          priority: 10,
          reuseExistingChunk: true,
        },
      },
    };

    return config;
  },
};

export default nextConfig;