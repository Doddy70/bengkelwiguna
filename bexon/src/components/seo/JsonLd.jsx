/**
 * SEO Components - Bengkel Wiguna
 * Structured Data (JSON-LD) untuk Google Rich Results
 */

import { BUSINESS_INFO, SITE_URL } from '@/lib/constants'

/**
 * LocalBusiness JSON-LD - untuk semua halaman
 * Menandakan ini adalah bisnis bengkel
 */
export function LocalBusinessJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'AutoRepair'],
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    telephone: BUSINESS_INFO.telephone,
    image: `${SITE_URL}/images/brand/favicon.png`,
    logo: `${SITE_URL}/images/logos/logo-panjang-bengkelwiguna.png`,
    description: 'Bengkel mobil profesional di Depok. Layanan lengkap: ganti ban, penggantian oli, service AC, kaki-kaki, aki, rem, spooring & balancing.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Jl. Raya Bogor KM 25',
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.region,
      postalCode: '16411',
      addressCountry: BUSINESS_INFO.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-6.4025',
      longitude: '106.7942',
    },
    hasMap: 'https://maps.google.com/?q=Bengkel+Wiguna+Depok',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '17:00',
      },
    ],
    priceRange: '$$',
    currenciesAccepted: 'IDR',
    paymentAccepted: 'Cash, Transfer Bank',
    areaServed: {
      '@type': 'City',
      name: 'Depok',
    },
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Bengkel Wiguna',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Ganti Ban Mobil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Penggantian Oli Mesin' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service AC Mobil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spooring & Balancing' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Service Rem Mobil' } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kaki-Kaki Mobil' } },
      ],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Service JSON-LD - untuk halaman service详情
 */
export function ServiceJsonLd({ service }) {
  if (!service) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title?.rendered || service.title,
    description: service.excerpt?.rendered?.replace(/<[^>]*>/g, '') || '',
    provider: {
      '@type': 'AutoRepair',
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    url: `${SITE_URL}/services/${service.slug}/`,
    ...(service.featured_media && {
      image: service._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Article JSON-LD - untuk halaman blog
 */
export function ArticleJsonLd({ post }) {
  if (!post) return null

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]
  const categories = post._embedded?.['wp:term']?.[0] || []
  const categoryNames = categories.map((c) => c.name).join(', ')
  const rawExcerpt = post.excerpt?.rendered?.replace(/<[^>]*>?/gm, '').trim() || ''

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title?.rendered || post.title,
    description: rawExcerpt.substring(0, 200) || '',
    datePublished: post.date,
    dateModified: post.modified || post.date,
    author: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logos/logo-panjang-bengkelwiguna.png`,
        width: 250,
        height: 60,
      },
    },
    url: `${SITE_URL}/blog/${post.slug}/`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}/`,
    },
    ...(featuredImage && {
      image: {
        '@type': 'ImageObject',
        url: featuredImage.source_url,
        width: featuredImage.media_details?.width || 1200,
        height: featuredImage.media_details?.height || 630,
      },
    }),
    ...(categoryNames && { keywords: categoryNames }),
    inLanguage: 'id-ID',
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Breadcrumb JSON-LD - untuk navigasi breadcrumb
 */
export function BreadcrumbJsonLd({ items }) {
  if (!items || items.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * FAQ JSON-LD - untuk halaman FAQ (jika ada)
 */
export function FAQJsonLd({ faqs }) {
  if (!faqs || faqs.length === 0) return null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * WebSite JSON-LD - untuk homepage
 */
export function WebSiteJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

/**
 * Organization JSON-LD
 */
export function OrganizationJsonLd() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BUSINESS_INFO.name,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BUSINESS_INFO.telephone,
      contactType: 'customer service',
      availableLanguage: 'Indonesian',
    },
    sameAs: [BUSINESS_INFO.social.facebook, BUSINESS_INFO.social.instagram],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}