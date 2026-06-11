# 🔧 MASTER PROMPT — Headless WordPress Redevelopment
## Bengkel Wiguna | Next.js Frontend + WordPress Backend

> **Untuk digunakan sebagai:** `CLAUDE.md` di root project, atau dibaca Claude Code di awal setiap sesi kerja.

---

## 🎯 PROJECT OVERVIEW

Kamu adalah AI Coding Agent yang bertugas meredevelop website **Bengkel Wiguna** (https://bengkelwiguna.com) dari WordPress monolitik ke arsitektur **Headless WordPress + Next.js**.

**WordPress backend** tetap berjalan di domain/subdomain terpisah sebagai CMS & REST API sumber konten.
**Next.js frontend** mengambil alih semua rendering halaman yang dihadapi ke publik.

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
| Styling | Tailwind CSS (via SCSS existing template) |
| CMS / Data Source | WordPress (Headless via REST API) |
| SEO | Next.js Metadata API |
| Sitemap | next-sitemap |
| Image Optimization | next/image dengan domain whitelist ke WP Media |
| Deployment | Vercel (atau sesuai keputusan owner) |

---

## 📁 STRUKTUR PROJECT

```
bexon/
├── src/
│   ├── app/                      ← Next.js App Router pages
│   │   ├── page.js               ← Homepage (/)
│   │   ├── layout.js             ← Root layout
│   │   ├── services/
│   │   │   ├── page.js           ← /services/
│   │   │   └── [slug]/page.js    ← /services/[slug]/
│   │   ├── blog/
│   │   │   ├── page.js           ← /blog/
│   │   │   └── [slug]/page.js    ← /blog/[slug]/
│   │   ├── promosi/page.js       ← /promosi/
│   │   ├── tentang-wiguna/page.js
│   │   ├── karir/page.js
│   │   └── lokasi/page.js
│   ├── components/
│   │   ├── layout/               ← Header, Footer
│   │   ├── seo/                  ← JsonLd components
│   │   └── sections/             ← Page sections
│   └── lib/
│       ├── wordpress.js          ← WP API fetch functions
│       └── constants.js          ← Config & constants
├── scripts/
│   └── migrate-content.mjs       ← Content migration script
├── public/
│   ├── robots.txt
│   └── images/
└── next.config.js
```

---

## 🗺️ URL MAPPING — WAJIB DIPERTAHANKAN 1:1

```
/                                   → app/page.js
/services/                          → app/services/page.js
/services/penggantian-ban/          → app/services/[slug]/page.js
/services/penggantian-oli/           → app/services/[slug]/page.js
/services/kaki-kaki-mobil/           → app/services/[slug]/page.js
/services/service-ac/                → app/services/[slug]/page.js
/services/aki-dan-kelistrikan/       → app/services/[slug]/page.js
/services/servis-rem-dan-roda/       → app/services/[slug]/page.js
/services/spooring-balancing/        → app/services/[slug]/page.js
/services/engine-flushing/           → app/services/[slug]/page.js
/promosi/                            → app/promosi/page.js
/tentang-wiguna/                     → app/tentang-wiguna/page.js
/karir/                              → app/karir/page.js
/blog/                               → app/blog/page.js
/blog/[slug]/                        → app/blog/[slug]/page.js
/lokasi/                             → app/lokasi/page.js
```

> ⚠️ **LARANGAN KERAS:** Jangan pernah mengubah struktur slug. Gunakan `next.config.js` redirects jika terpaksa ada perubahan.

---

## 🔌 INTEGRASI WORDPRESS API

### Base Configuration
```javascript
// src/lib/constants.js
export const WP_API_BASE = process.env.NEXT_PUBLIC_WP_API_URL || 'https://bengkelwiguna.com/wp-json/wp/v2'
export const SITE_URL = 'https://bengkelwiguna.com'
```

### Fungsi Fetch Utama
```javascript
// src/lib/wordpress.js
export async function getPageBySlug(slug) { ... }
export async function getAllServices() { ... }
export async function getServiceBySlug(slug) { ... }
export async function getAllPosts(page, perPage) { ... }
export async function getPostBySlug(slug) { ... }
export async function getAllPromosi() { ... }
export async function getFeaturedImage(post) { ... }
export async function getYoastData(item) { ... }
```

---

## 🔍 SEO — IMPLEMENTASI WAJIB DI SETIAP HALAMAN

### Metadata Next.js (App Router)
Setiap `page.js` HARUS mengeksport `metadata` object:

```javascript
export const metadata = {
  title: 'Judul Halaman | Bengkel Wiguna',
  description: 'Deskripsi meta tag',
  alternates: { canonical: '/url-slug/' },
  openGraph: {
    title: 'OG Title',
    description: 'OG Description',
    url: '/url-slug/',
    type: 'website',
  },
}
```

### Structured Data (JSON-LD)
```javascript
// components/seo/JsonLd.jsx
<LocalBusinessJsonLd />     // Di root layout
<ServiceJsonLd service={data} />  // Di halaman service
<ArticleJsonLd post={post} />      // Di halaman blog
<BreadcrumbJsonLd items={[{name, url}]} />
```

### Sitemap & robots.txt
- Sitemap: `next-sitemap.config.js`
- Robots: `public/robots.txt`

---

## 📋 WORKFLOW DEVELOPMENT

```bash
# 1. Install dependencies
npm install

# 2. Setup environment
cp .env.example .env.local
# Edit .env.local dengan nilai yang tepat

# 3. Run development server
npm run dev

# 4. Build for production
npm run build

# 5. Content migration (opsional)
node scripts/migrate-content.mjs
```

---

## 🚦 ATURAN KERJA AGENT

### ✅ SELALU LAKUKAN:
- Baca file ini (`CLAUDE.md`) sebelum memulai task
- Pertahankan semua slug URL yang ada di URL Mapping
- Gunakan `generateStaticParams()` untuk halaman dinamis (SSG)
- Gunakan `metadata` object di setiap page file
- Prioritaskan data Yoast SEO jika tersedia
- Gunakan `next/image` untuk semua gambar
- Pastikan trailing slash konsisten

### ❌ JANGAN PERNAH:
- Mengubah slug URL tanpa konfirmasi eksplisit dari owner
- Menghapus atau mengabaikan meta tag canonical
- Menggunakan `<img>` biasa untuk gambar konten
- Hardcode konten yang seharusnya dari WordPress API
- Membuat redirect yang tidak direncanakan

---

## 📞 KONTEKS BISNIS

- **Nama:** Bengkel Wiguna
- **Jenis Usaha:** Bengkel One Stop Service (ban, oli, kaki-kaki, AC, aki, rem, spooring)
- **Lokasi:** Depok, Jawa Barat
- **Telepon/WA:** +62 878-1777-3888
- **Target Market:** Pemilik kendaraan di Depok dan sekitarnya
- **Tone Brand:** Terpercaya, profesional, ramah, lokal

---

## 🌐 ENVIRONMENT VARIABLES

```env
NEXT_PUBLIC_WP_API_URL=https://bengkelwiguna.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://bengkelwiguna.com
NEXT_PUBLIC_WA_NUMBER=6287817773888
REVALIDATE_SECRET=your-secret-token
```

---

*File ini adalah panduan utama project. Setiap keputusan teknis yang bertentangan dengan dokumen ini harus dikonfirmasi terlebih dahulu ke project owner.*