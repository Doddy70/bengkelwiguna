# 🔧 MASTER PROMPT — Headless WordPress Redevelopment
## Bengkel Wiguna | Next.js Frontend + WordPress Backend

> **Untuk digunakan sebagai:** `CLAUDE.md` di root project, atau dibaca Claude Code di awal setiap sesi kerja.

---

## 🎯 PROJECT OVERVIEW

Kamu adalah AI Coding Agent yang bertugas meredevelop website **Bengkel Wiguna** (https://bengkelwiguna.com) dari Wordpress monolitik ke arsitektur **Headless WordPress + Next.js**.

**WordPress backend** tetap berjalan di domain/subdomain terpisah sebagai CMS & REST API sumber konten.
**Next.js frontend** mengambil alih semua rendering halaman yang dihadapkan ke publik.

**Prioritas tertinggi** dalam seluruh proses ini adalah:
1. ✅ Tidak ada penurunan peringkat SEO yang sudah terindeks Google
2. ✅ Semua URL slug existing tetap identik (zero URL changes)
3. ✅ Semua meta tag, structured data, dan sitemap terjaga akurat
4. ✅ Core Web Vitals tidak memburuk dari kondisi existing

---

## 🏗️ TECH STACK — TIDAK BOLEH DIUBAH TANPA PERSETUJUAN

| Layer | Teknologi |
|---|---|
| Frontend Framework | Next.js (App Router) |
| Styling | Tailwind CSS |
| CMS / Data Source | WordPress (Headless via REST API + WPGraphQL opsional) |
| SEO | next-seo atau next/metadata bawaan Next.js |
| Sitemap | next-sitemap |
| Image Optimization | next/image dengan domain whitelist ke WP Media |
| Deployment | Vercel (atau sesuai keputusan owner) |
| Analitik | Google Search Console tetap terhubung |

---

## 📁 STRUKTUR FOLDER YANG HARUS DIBUAT

```
/
├── app/
│   ├── layout.tsx              ← Root layout, termasuk global meta
│   ├── page.tsx                ← Homepage (/)
│   ├── services/
│   │   ├── page.tsx            ← /services/
│   │   └── [slug]/page.tsx     ← /services/[slug]/
│   ├── blog/
│   │   ├── page.tsx            ← /blog/
│   │   └── [slug]/page.tsx     ← /blog/[slug]/
│   ├── promosi/page.tsx
│   ├── tentang-wiguna/page.tsx
│   ├── karir/page.tsx
│   └── lokasi/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── seo/
│   │   ├── JsonLd.tsx          ← Structured data (LocalBusiness, Service, Article)
│   │   └── BreadcrumbJsonLd.tsx
│   └── ui/                     ← Komponen reusable
├── lib/
│   ├── wordpress.ts            ← Semua fungsi fetch ke WP API
│   ├── constants.ts
│   └── utils.ts
├── public/
│   └── robots.txt
├── next.config.js
├── next-sitemap.config.js
└── CLAUDE.md                   ← File ini (panduan agent)
```

---

## 🗺️ URL MAPPING — WAJIB DIPERTAHANKAN 1:1

Berikut adalah semua URL existing yang HARUS tetap berfungsi persis sama di Next.js:

```
/                                   → app/page.tsx
/services/                          → app/services/page.tsx
/services/penggantian-ban/          → app/services/[slug]/page.tsx
/services/penggantian-oli/          → app/services/[slug]/page.tsx
/services/kaki-kaki-mobil/          → app/services/[slug]/page.tsx
/services/service-ac/               → app/services/[slug]/page.tsx
/services/aki-dan-kelistrikan/      → app/services/[slug]/page.tsx
/services/servis-rem-dan-roda/      → app/services/[slug]/page.tsx
/services/spooring-balancing/       → app/services/[slug]/page.tsx
/services/engine-flushing/          → app/services/[slug]/page.tsx
/promosi/                           → app/promosi/page.tsx
/tentang-wiguna/                    → app/tentang-wiguna/page.tsx
/karir/                             → app/karir/page.tsx
/blog/                              → app/blog/page.tsx
/blog/[slug]/                       → app/blog/[slug]/page.tsx
/lokasi/                            → app/lokasi/page.tsx
```

> ⚠️ **LARANGAN KERAS:** Jangan pernah mengubah struktur slug di atas. Jika ada kebutuhan URL baru, tambahkan TANPA menghapus yang lama. Gunakan `next.config.js` redirects jika terpaksa ada perubahan.

---

## 🔌 INTEGRASI WORDPRESS API

### Base Configuration
```typescript
// lib/constants.ts
export const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_URL || 'https://cms.bengkelwiguna.com/wp-json/wp/v2'
export const SITE_URL = 'https://bengkelwiguna.com'
export const REVALIDATE_TIME = 3600 // 1 jam, sesuaikan kebutuhan
```

### Pola Fetch Standar
```typescript
// lib/wordpress.ts
export async function getPageBySlug(slug: string) {
  const res = await fetch(`${WP_API_BASE}/pages?slug=${slug}&_embed`, {
    next: { revalidate: REVALIDATE_TIME }
  })
  if (!res.ok) return null
  const data = await res.json()
  return data[0] ?? null
}

export async function getAllServices() {
  // Custom Post Type "services" — pastikan CPT sudah di-expose via REST API di WP
  const res = await fetch(`${WP_API_BASE}/services?per_page=100&_embed`, {
    next: { revalidate: REVALIDATE_TIME }
  })
  return res.json()
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API_BASE}/posts?slug=${slug}&_embed`, {
    next: { revalidate: REVALIDATE_TIME }
  })
  const data = await res.json()
  return data[0] ?? null
}
```

> **Catatan WP Backend:** Pastikan plugin **"WP REST API — Custom Endpoints"** atau `register_rest_route` sudah dikonfigurasi untuk CPT seperti `services`, `promosi`, dll yang ada di WP existing.

---

## 🔍 SEO — IMPLEMENTASI WAJIB DI SETIAP HALAMAN

### 1. Metadata Next.js (App Router)
Setiap `page.tsx` HARUS mengeksport fungsi `generateMetadata`:

```typescript
// Contoh: app/services/[slug]/page.tsx
import type { Metadata } from 'next'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getServiceBySlug(params.slug)
  
  return {
    title: service?.yoast_head_json?.title || `${service?.title?.rendered} | Bengkel Wiguna`,
    description: service?.yoast_head_json?.description || service?.excerpt?.rendered,
    alternates: {
      canonical: `https://bengkelwiguna.com/services/${params.slug}/`,
    },
    openGraph: {
      title: service?.yoast_head_json?.og_title,
      description: service?.yoast_head_json?.og_description,
      images: [service?.yoast_head_json?.og_image?.[0]?.url],
      url: `https://bengkelwiguna.com/services/${params.slug}/`,
      type: 'website',
      siteName: 'Bengkel Wiguna',
    },
    twitter: {
      card: 'summary_large_image',
      title: service?.yoast_head_json?.twitter_title,
      description: service?.yoast_head_json?.twitter_description,
    },
    robots: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  }
}
```

> **PENTING:** WordPress dengan plugin Yoast SEO menyediakan field `yoast_head_json` di setiap response API. **Selalu prioritaskan data dari Yoast** sebelum fallback ke data mentah WP. Ini memastikan meta tag yang sudah dioptimasi di WP tidak hilang.

### 2. Structured Data (JSON-LD) — WAJIB

```typescript
// components/seo/JsonLd.tsx

// LocalBusiness — pasang di root layout
export const LocalBusinessJsonLd = () => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Bengkel Wiguna",
    "url": "https://bengkelwiguna.com",
    "telephone": "+6287817773888",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Depok",
      "addressRegion": "Jawa Barat",
      "addressCountry": "ID"
    },
    "openingHours": "Mo-Sa 08:00-17:00",
    "sameAs": [
      "https://www.facebook.com/bengkelwiguna",
      "https://www.instagram.com/bengkelwiguna"
    ]
  })}} />
)

// Service — pasang di setiap halaman service
export const ServiceJsonLd = ({ service }: { service: any }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "AutoRepair",
      "name": "Bengkel Wiguna",
      "url": "https://bengkelwiguna.com"
    }
  })}} />
)

// Article — pasang di setiap halaman blog
export const ArticleJsonLd = ({ post }: { post: any }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title.rendered,
    "datePublished": post.date,
    "dateModified": post.modified,
    "author": { "@type": "Organization", "name": "Bengkel Wiguna" },
    "publisher": {
      "@type": "Organization",
      "name": "Bengkel Wiguna",
      "logo": { "@type": "ImageObject", "url": "https://bengkelwiguna.com/logo.png" }
    }
  })}} />
)
```

### 3. Sitemap — next-sitemap
```javascript
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://bengkelwiguna.com',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/wp-admin', '/wp-login'],
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: ['/wp-admin/', '/wp-login.php'] }
    ]
  }
}
```

### 4. robots.txt
```
User-agent: *
Allow: /
Disallow: /wp-admin/

Sitemap: https://bengkelwiguna.com/sitemap.xml
```

### 5. Google Search Console Verification
Tambahkan di `app/layout.tsx`:
```typescript
export const metadata: Metadata = {
  verification: {
    google: 'oKmUkrdzFNPTkpDkESvjntcOa6iFa5DeVGSLFuJYuao', // nilai dari existing site
  }
}
```

---

## 🖼️ IMAGE HANDLING

```javascript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'bengkelwiguna.com',       // WP existing
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.bengkelwiguna.com',   // WP headless subdomain
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
}
```

Selalu gunakan `next/image` — **jangan pernah** menggunakan tag `<img>` biasa untuk gambar konten.

---

## ⚙️ NEXT.JS CONFIG — REDIRECTS & HEADERS

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Tambahkan redirect hanya jika ada perubahan URL yang tidak bisa dihindari
      // Format: { source: '/lama', destination: '/baru', permanent: true }
    ]
  },
}
```

---

## 🚦 ATURAN KERJA AGENT

### ✅ SELALU LAKUKAN:
- Baca file ini (`CLAUDE.md`) sebelum memulai task apapun
- Pertahankan semua slug URL yang ada di URL Mapping di atas
- Gunakan `generateStaticParams()` untuk halaman dinamis (SSG)
- Gunakan `generateMetadata()` di setiap page file
- Ambil `yoast_head_json` dari WP API untuk meta tag
- Gunakan `next/image` untuk semua gambar
- Test setiap halaman dengan `curl -I https://localhost:3000/[path]` untuk cek status code
- Tambahkan `loading="lazy"` hanya untuk gambar below-the-fold
- Pastikan trailing slash konsisten (sesuai konfigurasi `trailingSlash` di next.config.js)

### ❌ JANGAN PERNAH:
- Mengubah slug URL tanpa konfirmasi eksplisit dari owner
- Menghapus atau mengabaikan meta tag canonical
- Menggunakan `<img>` biasa untuk gambar konten
- Hardcode konten yang seharusnya diambil dari WordPress API
- Membuat redirect yang tidak direncanakan
- Menggunakan client-side rendering (`'use client'`) di halaman yang bisa di-SSG/SSR untuk konten SEO-sensitive
- Menghapus Google Site Verification meta tag
- Mengubah struktur JSON-LD yang sudah tervalidasi

---

## 📋 CHECKLIST SEBELUM DEPLOY

Jalankan ini sebelum setiap PR atau deployment:

```bash
# 1. Build check
npm run build

# 2. Lighthouse audit (target semua ≥ 90)
npx lighthouse https://bengkelwiguna.com --only-categories=performance,seo,accessibility

# 3. Cek semua URL penting masih return 200
curl -o /dev/null -s -w "%{http_code}" https://localhost:3000/
curl -o /dev/null -s -w "%{http_code}" https://localhost:3000/services/
curl -o /dev/null -s -w "%{http_code}" https://localhost:3000/services/penggantian-ban/
curl -o /dev/null -s -w "%{http_code}" https://localhost:3000/blog/
curl -o /dev/null -s -w "%{http_code}" https://localhost:3000/lokasi/

# 4. Validasi sitemap terbuat
curl https://localhost:3000/sitemap.xml

# 5. Validasi robots.txt
curl https://localhost:3000/robots.txt
```

---

## 🔄 ALUR PENGEMBANGAN YANG DIREKOMENDASIKAN

```
Phase 1: Setup & Config
  → Init Next.js project (App Router + TypeScript + Tailwind)
  → Setup next.config.js (images, headers, redirects)
  → Setup environment variables (.env.local)
  → Buat lib/wordpress.ts dengan semua fetch functions

Phase 2: Layout & Shared Components
  → app/layout.tsx (root metadata, LocalBusiness JSON-LD, GSC verification)
  → components/layout/Header.tsx (navigasi identik dengan existing)
  → components/layout/Footer.tsx

Phase 3: Halaman Statis (SSG Priority)
  → Homepage (/)
  → /tentang-wiguna/
  → /lokasi/
  → /karir/

Phase 4: Halaman Dinamis
  → /services/ dan /services/[slug]/
  → /blog/ dan /blog/[slug]/
  → /promosi/

Phase 5: SEO Audit & Validation
  → Validasi semua meta tag di setiap halaman
  → Test structured data di Google Rich Results Test
  → Submit sitemap baru ke Google Search Console
  → Monitor GSC selama 2 minggu post-launch

Phase 6: Launch
  → DNS cutover
  → Verifikasi ulang GSC property
  → Monitor crawl errors di GSC
```

---

## 🌐 ENVIRONMENT VARIABLES

```env
# .env.local (JANGAN commit ke git)
NEXT_PUBLIC_WP_API_URL=https://cms.bengkelwiguna.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://bengkelwiguna.com
NEXT_PUBLIC_WA_NUMBER=6287817773888
REVALIDATE_SECRET=your-secret-token-here
```

---

## 📞 KONTEKS BISNIS

- **Nama:** Bengkel Wiguna
- **Jenis Usaha:** Bengkel One Stop Service (ban, oli, kaki-kaki, AC, aki, rem, spooring)
- **Lokasi Utama:** Depok, Jawa Barat
- **Telepon/WA:** +62 878-1777-3888 (chat ke Minna/Monna — customer service)
- **Target Market:** Pemilik kendaraan di Depok dan sekitarnya
- **Tone Brand:** Terpercaya, profesional, ramah, lokal

---

*File ini adalah panduan utama project. Setiap keputusan teknis yang bertentangan dengan dokumen ini harus dikonfirmasi terlebih dahulu ke project owner.*
