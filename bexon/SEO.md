# SEO Optimization Guide

Complete SEO optimization guide for Bengkel Wiguna, based on `seo` skill patterns combined with `core-web-vitals` and `performance` skills.

## Quick Start

### 1. Add SEO to Your Layout

```tsx
// app/layout.tsx
import { generateOrganizationSchema, generateWebSiteSchema } from '@/lib/seo'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <head>
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />

        {/* WebSite Schema with Search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

### 2. Run SEO Audit

```bash
# Test your site
SITE_URL=http://localhost:3000 node scripts/audit-seo.mjs

# Full SEO + Performance audit
SITE_URL=http://localhost:3000 node scripts/audit-performance.mjs
```

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/seo.ts` | SEO utilities, meta tags, structured data |
| `src/lib/sitemap.ts` | Sitemap generation, robots.txt |
| `scripts/audit-seo.mjs` | SEO audit script |

## Structured Data (JSON-LD)

### Homepage Schemas

```tsx
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from '@/lib/seo'

// Organization
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateOrganizationSchema())
  }}
/>

// LocalBusiness
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateLocalBusinessSchema())
  }}
/>

// WebSite with SearchBox
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateWebSiteSchema())
  }}
/>
```

### Blog Post Schema

```tsx
import { generateArticleSchema } from '@/lib/seo'

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateArticleSchema({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      date: post.date,
      modified: post.modified,
      author: 'Bengkel Wiguna',
      featuredImage: post.featuredImage,
      categories: post.categories,
    }))
  }}
/>
```

### Service Page Schema

```tsx
import { generateServiceSchema } from '@/lib/seo'

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateServiceSchema({
      id: service.id,
      title: service.title,
      slug: service.slug,
      content: service.content,
      featuredImage: service.featuredImage,
      priceRange: service.meta?.price_range,
    }))
  }}
/>
```

### FAQ Schema

```tsx
import { generateFAQSchema } from '@/lib/seo'

const faqs = [
  { question: 'Jam operasional berapa?', answer: 'Senin-Jumat 08:00-17:00, Sabtu 08:00-15:00' },
  { question: 'Apakah bisa booking online?', answer: 'Ya, bisa melalui website kami.' },
]

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(generateFAQSchema(faqs))
  }}
/>
```

## Meta Tags

### Page Meta

```tsx
import { generateMetaTags, generateCanonical } from '@/lib/seo'

const meta = generateMetaTags({
  title: 'Service Ban Mobil | Spooring & Balancing | Bengkel Wiguna',
  description: 'Layanan service ban mobil profesional di Depok. Spooring, balancing, penggantian ban semua tipe. Harga transparan, garansi service.',
  canonical: generateCanonical('https://bengkelwiguna.com', '/services/penggantian-ban'),
  keywords: ['service ban', 'spooring', 'balancing', 'bengkel mobil depok'],
  robots: 'index, follow',
})
```

### Open Graph

```tsx
import { generateOpenGraph, generateTwitterCard } from '@/lib/seo'

const og = generateOpenGraph({
  title: 'Service Ban Mobil | Bengkel Wiguna',
  description: 'Layanan service ban profesional di Depok',
  url: 'https://bengkelwiguna.com/services/penggantian-ban',
  type: 'website',
  image: 'https://bengkelwiguna.com/og-image.jpg',
})

const twitter = generateTwitterCard({
  card: 'summary_large_image',
  title: 'Service Ban Mobil | Bengkel Wiguna',
  description: 'Layanan service ban profesional di Depok',
  image: 'https://bengkelwiguna.com/og-image.jpg',
})
```

## Sitemap

### Next.js App Router Sitemap

```tsx
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllPostsFlat, getAllServices, getAllPages } from '@/lib/wordpress'

const BASE_URL = 'https://bengkelwiguna.com'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, services, pages] = await Promise.all([
    getAllPostsFlat(),
    getAllServices(),
    getAllPages(),
  ])

  return [
    { url: BASE_URL, changeFrequency: 'daily', priority: 1 },
    { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/blog`, changeFrequency: 'daily', priority: 0.8 },
    ...posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: new Date(post.modified || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...services.map((service) => ({
      url: `${BASE_URL}/services/${service.slug}`,
      lastModified: new Date(service.modified || service.date),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ]
}
```

### Next.js App Router Robots

```tsx
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/private/'],
      },
      // Allow AI crawlers (good for AI search visibility)
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
    ],
    sitemap: 'https://bengkelwiguna.com/sitemap.xml',
  }
}
```

## SEO Checklist

### Critical (Must Have)
- [x] HTTPS enabled
- [x] robots.txt allows crawling
- [x] No `noindex` on important pages
- [x] Title tags present and unique (50-60 chars)
- [x] Single `<h1>` per page

### High Priority
- [x] Meta descriptions present (150-160 chars)
- [x] Sitemap submitted to Google Search Console
- [x] Canonical URLs set
- [x] Mobile-responsive design
- [x] Core Web Vitals passing

### Medium Priority
- [x] Structured data implemented (JSON-LD)
- [x] Internal linking strategy
- [x] Image alt text
- [x] Descriptive URLs (hyphens, lowercase)
- [x] Breadcrumb navigation

### AI Search Visibility (Emerging)
- [x] Allow AI crawlers (GPTBot, ClaudeBot, PerplexityBot)
- [x] Use schema.org Article/Product/FAQPage
- [x] First-paragraph answers are self-contained

## URL Structure

```
✅ Good URLs:
https://bengkelwiguna.com/services/penggantian-ban
https://bengkelwiguna.com/blog/tips-perawatan-mesin
https://bengkelwiguna.com/lokasi

❌ Poor URLs:
https://bengkelwiguna.com/?p=123
https://bengkelwiguna.com/category/1/2/3
```

## Schema Types to Implement

| Page Type | Schema | Purpose |
|-----------|--------|---------|
| Homepage | Organization, LocalBusiness, WebSite | Business info, search box |
| Services | Service, LocalBusiness | Service details |
| Blog Posts | Article, BreadcrumbList | Blog ranking |
| FAQ | FAQPage | Rich snippets in search |
| Contact | LocalBusiness, PostalAddress | Local SEO |

## Testing

### Validation Tools
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- [Schema.org Validator](https://validator.schema.org/)
- [Lighthouse SEO Audit](scripts/audit-seo.mjs)

### Audit Commands

```bash
# Full SEO audit
SITE_URL=https://bengkelwiguna.com node scripts/audit-seo.mjs

# Combined SEO + Performance
SITE_URL=https://bengkelwiguna.com node scripts/audit-performance.mjs

# WordPress health check
node scripts/wp-health.mjs

# Core Web Vitals
SITE_URL=https://bengkelwiguna.com node scripts/test-core-web-vitals.mjs
```

## Installed Skills

```
.agents/skills/
├── seo/                   ✅ Search engine optimization
├── core-web-vitals/       ✅ Core Web Vitals
├── performance/           ✅ General performance
├── wp-rest-api/          ✅ WordPress REST API
└── wp-abilities-api/     ✅ WordPress Abilities
```

## References

- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)
- [Lighthouse SEO](https://developer.chrome.com/docs/lighthouse/seo/)
- [Core Web Vitals](../core-web-vitals/SKILL.md)