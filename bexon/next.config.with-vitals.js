/**
 * Next.js Configuration with Core Web Vitals Optimizations
 * This merges web-vitals config with your existing next.config.js
 *
 * Usage: Import this into your existing next.config.js
 */

const { withCoreWebVitals } = require('./next.config.web-vitals')

// Your existing config
const existingConfig = {
  reactStrictMode: true,
  // Add any existing config here
}

// Wrap with Core Web Vitals optimizations
const nextConfig = withCoreWebVitals(existingConfig)

module.exports = nextConfig
