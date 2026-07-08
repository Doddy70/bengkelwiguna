# 🔴 COMPREHENSIVE ROUTES & API AUDIT REPORT
**Date:** 2026-07-08  
**Project:** Bengkel Wiguna V3  
**Scope:** Full-stack Frontend ↔ Backend Integration Audit

---

## 📊 EXECUTIVE SUMMARY

| Metric | Count | Status |
|--------|-------|--------|
| **Total Frontend Pages** | 53 | ⚠️ 18 duplicates |
| **CPTs** | 4 | ✅ All unique slugs |
| **API Functions** | 32 | ⚠️ 10 unused |
| **Components** | 16 | ⚠️ 5 critical issues |
| **Route Mismatches** | 5 | 🔴 Needs fix |

**Overall Health:** ⚠️ **MEDIUM RISK** — Architecture solid but cleanup needed

---

## 🔴 CRITICAL ISSUES

### 1. **CROSS-CPT TITLE DUPLICATES** (SEO Risk)

| Title | CPT 1 | Slug 1 | CPT 2 | Slug 2 |
|-------|-------|--------|-------|--------|
| Reset AC | services | `/services/reset-ac-mobil` | layanan_spesialis | `/layanan-spesialis/reset-ac` |
| Semi Overhaul | services | `/services/semi-overhaul` | layanan_spesialis | `/layanan-spesialis/spesialis-semi-overhaul` |
| Paket Siaga 1 | paket_service | `/paket-service/paket-siaga-1` | promosi | `/promosi/paket-siaga-1-promo` |
| Paket Siaga 2 | paket_service | `/paket-service/paket-siaga-2` | promosi | `/promosi/paket-siaga-2-promo` |
| Paket Siaga 3 | paket_service | `/paket-service/paket-siaga-3` | promosi | `/promosi/paket-siaga-3-promo` |

**Impact:** Google may see duplicate content if pages are similar.

**Recommendation:** Rename titles to be unique, e.g., "Reset AC Mobil" vs "Reset AC Spesialis"

---

### 2. **TITLE/EXCERPT FIELD FORMAT INCONSISTENCY**

| Source | Format | Example |
|--------|--------|---------|
| **WP REST API** | `{ rendered: string }` | `{ title: { rendered: "Hello" } }` |
| **BW Custom API** | `string` | `{ title: "Hello" }` |

**Affected Components:**
- `ServicesArchiveClient.tsx`
- `PaketServiceArchiveClient.tsx`
- `PromosiArchiveClient.tsx`
- `spesialis-slider.tsx`

**Current Code:**
```tsx
// INCONSISTENT - sometimes works, sometimes doesn't
const title = typeof service.title === 'string' 
  ? service.title 
  : service.title?.rendered || '';
```

**Recommendation:** Create data transformation layer

---

### 3. **FAQ FIELD NAME FRAGMENTATION**

| Post Type | Field Names Checked |
|-----------|---------------------|
| services/[slug] | `bw_services_faq`, `bw_service_faq`, `faq`, `bw_spesialis_faq` |
| promosi/[slug] | `faq` |
| layanan-spesialis/[slug] | `bw_spesialis_faq` |
| paket-service/[slug] | Not checked |

**Recommendation:** Standardize to single field name per CPT

---

### 4. **FEATURED IMAGE SOURCE AMBIGUITY**

| API Type | Field | Requires |
|----------|-------|----------|
| BW Custom Endpoints | `featured_img` | Direct URL |
| WP REST API | `_embedded['wp:featuredmedia'][0].source_url` | `?_embed=1` |

**Components affected:** All WigunaCard usages

**Current pattern:**
```tsx
// Each component handles differently
image={service.featured_img || "/images/hero-desktop.webp"}
// vs
image={p.featured_img || p._embedded?.['wp:featuredmedia']?.[0]?.source_url}
```

---

### 5. **CATEGORY FIELD NAME MISMATCH**

| Type Definition | Actual Code Checks |
|----------------|-------------------|
| `Service.service_category` | `services_category`, `service_category`, `spesialis_category` |

**Impact:** Category filtering may fail silently

---

## ⚠️ HIGH PRIORITY ISSUES

### 6. **DUPLICATE ROUTES** (18 total)

| Original | Duplicates |
|----------|------------|
| `/blog` | `/blog-1`, `/blog-2`, `/blog-3` |
| `/about` | `/about-2` |
| `/contact` | `/contact-2` |
| `/home` | `/home-1` through `/home-13` |

**Recommendation:** Add redirects in next.config.ts, then delete files

---

### 7. **AUTH ROUTE MISMATCHES** (5)

| Page | Issue |
|------|-------|
| `/login` | Links to `/auth/signup` (should be `/register`) |
| `/register` | No corresponding auth page |
| `/forgot-password` | No route handler |
| `/reset-password` | No route handler |

---

### 8. **UNUSED API FUNCTIONS** (10 total)

| Function | Status | Reason |
|----------|--------|--------|
| `getAllServicesWithCategories` | ❌ UNUSED | ✅ Just fixed - services page now uses `getAllServices()` |
| `getServicesForSitemap` | ❌ UNUSED | Redundant with `getAllServices` |
| `getPromosiForSitemap` | ❌ UNUSED | Redundant with `getAllPromosi` |
| `getLayananSpesialisForSitemap` | ❌ UNUSED | Redundant |
| `getAllPostsFlat` | ❌ UNUSED | Not imported anywhere |
| `getCachedPosts` | ❌ UNUSED | Duplicate of `getAllPosts` |
| `getFeaturedImageAlt` | ❌ UNUSED | Not imported anywhere |
| `decodeHtml` | ❌ UNUSED | Not imported anywhere |
| `getOptimizedImageUrl` | ❌ UNUSED | Smush CDN not implemented |
| `getResponsiveImageSrcSet` | ❌ UNUSED | Smush CDN not implemented |

---

## ✅ WORKING CORRECTLY

### Routes with Correct API Mapping

| Route | API Function | CPT | Status |
|-------|-------------|-----|--------|
| `/services` | `getAllServices()` | services (16) | ✅ Fixed |
| `/services/{slug}` | `getServiceBySlug()` | services | ✅ Working |
| `/layanan-spesialis` | `getAllLayananSpesialis()` | layanan_spesialis (3) | ✅ Working |
| `/layanan-spesialis/{slug}` | `getLayananSpesialisBySlug()` | layanan_spesialis | ✅ Working |
| `/promosi` | `getAllPromosi()` | promosi (9) | ✅ Working |
| `/promosi/{slug}` | `getPromosiBySlug()` | promosi | ✅ Working |
| `/paket-service` | `getAllPaketService()` | paket_service (3) | ✅ Working |
| `/paket-service/{slug}` | `getPaketServiceBySlug()` | paket_service | ✅ Working |
| `/blog` | `getAllPosts()` | posts | ✅ Working |
| `/blog/{slug}` | `getPostBySlug()` | posts | ✅ Working |

---

## 📋 WORDPRESS BACKEND DATA

### CPT Inventory

| CPT | Items | Slugs | Custom Fields |
|-----|-------|-------|---------------|
| `services` | 16 | All unique | `bw_services_faq`, `gallery`, `durasi`, `garansi` |
| `layanan_spesialis` | 3 | All unique | `teknologi_spesialis`, `bw_spesialis_faq`, `manfaat_spesialis` |
| `promosi` | 9 | All unique | `harga_promo`, `harga_asli`, `diskon_persen`, `faq`, `treatment_utama` |
| `paket_service` | 3 | All unique | `harga_paket`, `durasi_paket`, `items_paket`, `bestSeller` |

---

## 🎯 ACTION PLAN

### Priority 1: Fix Title Duplicates (SEO)

```json
// Via WordPress MCP - rename titles
{ "ID": 21593, "post_title": "Semi Overhaul Mesin" }
{ "ID": 22017, "post_title": "Reset AC Mobil" }
```

### Priority 2: Consolidate Unused Code

| Action | Functions |
|--------|-----------|
| Remove | `getAllServicesWithCategories`, `getCachedPosts`, `getAllPostsFlat`, `decodeHtml`, `getFeaturedImageAlt` |
| Keep for later | `getOptimizedImageUrl`, `getResponsiveImageSrcSet` (Smush CDN ready) |

### Priority 3: Add Data Transformation Layer

```tsx
// src/lib/transformers.ts
export function normalizeService(service: any): NormalizedService {
  return {
    id: service.id,
    title: typeof service.title === 'string' ? service.title : service.title?.rendered || '',
    slug: service.slug,
    excerpt: normalizeExcerpt(service.excerpt),
    featuredImage: service.featured_img || service._embedded?.['wp:featuredmedia']?.[0]?.source_url,
    categories: service.services_category || service.service_category || [],
  }
}
```

### Priority 4: Route Cleanup

```ts
// next.config.ts
redirects: async () => [
  { source: '/blog-1', destination: '/blog', permanent: true },
  { source: '/blog-2', destination: '/blog', permanent: true },
  { source: '/about-2', destination: '/about', permanent: true },
  // ... all 18 duplicates
]
```

---

## 📊 METRICS SUMMARY

| Category | Total | Healthy | Warning | Critical |
|----------|-------|---------|---------|----------|
| Pages | 53 | 35 | 18 duplicates | 0 |
| Routes | 5 dynamic | 5 | 0 | 0 |
| CPTs | 4 | 4 unique slugs | 5 title overlaps | 0 |
| API Functions | 32 | 22 used | 10 unused | 0 |
| Components | 16 | 11 | 5 issues | 0 |

**Technical Debt:** Medium (cleanup needed, architecture sound)

---

**Prepared by:** Claude Code + WordPress MCP Comprehensive Audit  
**Agents Used:** 4 parallel (Routes, API, Components, CPT)  
**Next Step:** Implement Priority 1-3 fixes
