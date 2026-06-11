/**
 * next-sitemap Configuration
 * Untuk SEO dan Google Search Console
 */

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://bengkelwiguna.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,

  // URL yang tidak termasuk dalam sitemap
  exclude: [
    '/wp-admin',
    '/wp-login',
    '/wp-content/plugins',
    '/wp-content/themes',
    '/api/*',
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: [
          '/wp-admin/',
          '/wp-login.php',
          '/wp-content/',
        ],
      },
    ],
    additionalSitemaps: [
      // Tambahkan sitemap tambahan jika ada
      // 'https://bengkelwiguna.com/custom-sitemap.xml',
    ],
  },

  // Custom pages untuk sitemap
  pages: {
    changeFrequency: 'weekly',
    priority: 0.8,
    filters: {
      // Optional: Filter halaman berdasarkan pattern
    },
  },
};