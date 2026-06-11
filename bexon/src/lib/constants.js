/**
 * Constants - Bengkel Wiguna
 * Semua konfigurasi global di satu tempat
 */

// WordPress API Base URL (Backend)
export const WP_API_BASE =
  process.env.NEXT_PUBLIC_WP_API_URL || 'https://backend.bengkelwiguna.com/wp-json/wp/v2';

// BW Custom API Base URL
export const BW_API_BASE = 
  process.env.NEXT_PUBLIC_BW_API_URL || WP_API_BASE.replace('/wp/v2', '/bw/v1');

// WP Abilities API Base URL
export const ABILITIES_API_BASE = 
  process.env.NEXT_PUBLIC_ABILITIES_API_URL || WP_API_BASE.replace('/wp/v2', '/wp-abilities/v1/abilities');

// GraphQL Endpoint
export const GRAPHQL_URL = 
  process.env.NEXT_PUBLIC_GRAPHQL_URL || 'https://backend.bengkelwiguna.com/graphql';

// Site Configuration (Frontend URL)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://bengkelwiguna.com';

// WhatsApp Number (format: 6281234567890)
export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || '6287817773888';

// WhatsApp Link Generator
export const getWhatsAppLink = (message = '') => {
  const encodedMessage = encodeURIComponent(message || 'Halo, saya ingin bertanya tentang layanan Bengkel Wiguna')
  return `https://wa.me/${WA_NUMBER}?text=${encodedMessage}`
}

// Google Search Console Verification (dari existing site)
export const GSC_VERIFICATION = 'oKmUkrdzFNPTkpDkESvjntcOa6iFa5DeVGSLFuJYuao'

// Cache Configuration (dalam detik)
export const REVALIDATE_TIME = 3600 // 1 jam
export const REVALIDATE_TIME_LONG = 86400 // 24 jam
export const REVALIDATE_TIME_SHORT = 600 // 10 menit

// Business Info
export const BUSINESS_INFO = {
  name: 'Bengkel Wiguna',
  type: 'AutoRepair',
  description: 'Bengkel One Stop Service terpercaya di Depok - ban, oli, kaki-kaki, AC, aki, rem, spooring & balancing',
  telephone: '+6287817773888',
  address: {
    locality: 'Depok',
    region: 'Jawa Barat',
    country: 'ID',
  },
  openingHours: 'Mo-Sa 08:00-17:00',
  social: {
    facebook: 'https://www.facebook.com/bengkelwiguna',
    instagram: 'https://www.instagram.com/bengkelwiguna',
  },
}

// Service Categories (dari URL Mapping)
export const SERVICE_SLUGS = [
  'penggantian-ban',
  'penggantian-oli',
  'kaki-kaki-mobil',
  'service-ac',
  'aki-dan-kelistrikan',
  'servis-rem-dan-roda',
  'spooring-balancing',
  'engine-flushing',
]

// Default SEO Values
export const DEFAULT_SEO = {
  title: 'Bengkel Wiguna | Bengkel Mobil Terpercaya di Depok',
  description: 'Bengkel One Stop Service terpercaya di Depok. Layanan: ganti ban, oli, kaki-kaki, AC, aki, rem, spooring & balancing. Hubungi 0878-1777-3888',
  ogImage: '/images/og-default.jpg',
}

// Claude API Configuration
export const CLAUDE_CONFIG = {
  model: 'claude-sonnet-4-6-20250514',
  maxTokens: parseInt(process.env.CLAUDE_MAX_TOKENS_PER_REQUEST || '4096'),
  thinkingBudget: 1024,
  monthlyBudget: parseFloat(process.env.CLAUDE_MONTHLY_BUDGET_USD || '50'),
}
