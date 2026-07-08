# 🔴 COMPREHENSIVE BW CMS AUDIT REPORT
**Date:** 2026-07-08  
**Project:** Bengkel Wiguna V3  
**Scope:** BW Headless CMS Plugin + Frontend Integration  
**Method:** Fan-out Parallel Agents (5 agents, 259k tokens)

---

## 📊 EXECUTIVE SUMMARY

| Metric | Count | Status |
|--------|-------|--------|
| **BW Plugin Version** | 1.8.7 | ✅ Latest |
| **CPTs** | 4 | ✅ All configured |
| **Total CPT Items** | 31 | ✅ All active |
| **Custom Taxonomies** | 8 | ✅ All linked |
| **API Endpoints** | 12+ | ✅ Working |
| **Critical Issues** | 4 | 🔴 Needs fix |
| **High Priority** | 6 | ⚠️ Important |
| **Medium Priority** | 8 | ⚠️ Review |

---

## 📦 BW PLUGIN STRUCTURE

### Plugin Configuration
```json
{
  "version": "1.8.7",
  "namespace": "bw/v1",
  "cors_origins": ["bengkelwiguna.com", "localhost:3000"],
  "caching": "12-hour transients",
  "isr_revalidation": true
}
```

---

## 🗃️ CUSTOM POST TYPES

### 1. Services (16 items)

| Property | Value |
|----------|-------|
| **REST Base** | `/services` |
| **Rewrite Slug** | `/services` |
| **Items** | 16 published |
| **Taxonomies** | `services_category` (12 terms), `services_tag` (10 terms) |
| **Meta Fields** | `harga`, `durasi`, `garansi`, `bw_gallery_images`, `bw_services_faq` |
| **Endpoints** | `/bw/v1/services-full`, `/bw/v1/services/{slug}` |
| **Transient Cache** | `bw_services_full_v3` |

### 2. Layanan Spesialis (3 items)

| Property | Value |
|----------|-------|
| **REST Base** | `/layanan_spesialis` |
| **Rewrite Slug** | `/layanan-spesialis` |
| **Items** | 3 published |
| **Taxonomies** | `spesialis_category` (1 term), `spesialis_tag` (3 terms) |
| **Meta Fields** | `manfaat_spesialis`, `teknologi_spesialis`, `bw_spesialis_faq_image`, `bw_spesialis_faq` |
| **Endpoints** | `/bw/v1/layanan-spesialis-full`, `/bw/v1/layanan-spesialis/{slug}` |

### 3. Promosi (9 items)

| Property | Value |
|----------|-------|
| **REST Base** | `/promosi` |
| **Rewrite Slug** | `/promosi` |
| **Items** | 9 published |
| **Taxonomies** | `promosi_category` (2 terms: Regular, Seasonal), `promosi_tag` |
| **Meta Fields** | `harga_asli`, `harga_promo`, `diskon_persen`, `faq_promo`, `bw_promosi_faq`, `syarat_ketentuan`, `cf7_form_id` |
| **Special Feature** | Auto-filters expired promos by `tanggal_selesai` |

### 4. Paket Service (3 items)

| Property | Value |
|----------|-------|
| **REST Base** | `/paket_service` |
| **Rewrite Slug** | `/paket-service` |
| **Items** | 3 published |
| **Taxonomies** | `paket_category` (0 terms), `paket_tag` (0 terms) |
| **Meta Fields** | `harga_paket`, `durasi_paket`, `garansi_paket`, `items_paket`, `bestSeller`, `price`, `previousPrice`, `status` |

---

## 🔴 CRITICAL ISSUES

### 1. **Services Filter UI Broken** (CRITICAL)

**Root Cause:** Data Structure Mismatch

| What API Returns | What Filter Expects |
|-----------------|---------------------|
| `taxonomies.services_category: [{term_id: 940, name: 'AC & Radiator', slug: 'ac-radiator'}]` | `services_category: [940, 941, ...]` (flat array of IDs) |

**Affected File:** `ServicesArchiveClient.tsx` lines 61-103

**Current Code:**
```tsx
// ❌ WRONG - expects flat array of IDs
const serviceCategories = service.services_category || [];
serviceCategories.forEach((catId: number) => {
    categoryMap.set(catId, { id: catId, name: `Kategori ${catId}` });
});
```

**API Response:**
```json
{
  "taxonomies": {
    "services_category": [
      {"term_id": 940, "name": "AC & Radiator", "slug": "ac-radiator"}
    ]
  }
}
```

**Impact:** Filter shows "Kategori 940" instead of "AC & Radiator", filtering doesn't work.

---

### 2. **Promosi FAQ Field Mismatch** (HIGH)

| Component Expects | BW API Returns |
|-------------------|----------------|
| `promo.faq` | `promo.meta.bw_promosi_faq` |

**Affected File:** `promosi/[slug]/page.tsx`

**Fix Required:** Access `promo.meta.bw_promosi_faq` instead of `promo.faq`

---

### 3. **Service Detail Category Extraction** (HIGH)

| Frontend Expects | BW API Returns |
|-------------------|----------------|
| `service._embedded['wp:term'][0]` | `service.taxonomies.services_category[0]` |

**Affected File:** `services/[slug]/page.tsx` line 58

**Current Code:**
```tsx
// ❌ WRONG - _embedded doesn't exist in BW API
const serviceCategories = service._embedded?.['wp:term']?.[0] || [];
```

---

### 4. **Blog Route Structure Mismatch** (HIGH)

| Frontend Route | WordPress Permalink |
|----------------|-------------------|
| `/blog/{slug}` | `/{slug}` (direct, no /blog prefix) |

**Note:** This is actually **OK** because `getPostBySlug()` queries by slug directly, not URL.

---

## ⚠️ HIGH PRIORITY ISSUES

### 5. **Missing Taxonomy in getAllServices() Response**

The BW API list endpoint `/bw/v1/services-full` may not include taxonomy data in the response.

**Solution Options:**
- Option A: Update BW plugin to include `taxonomies` in list endpoint
- Option B: Switch to `getAllServicesWithCategories()` which uses WP REST API

---

### 6. **TypeScript Type Mismatches**

| Type | Issue |
|------|-------|
| `Service.harga` | Should be in meta, not top-level |
| `Promosi.faq` | Should be `bw_promosi_faq` in meta |
| `PaketService.items_paket` | Not in WP meta fields |

---

### 7. **Paket Service Taxonomies Empty**

| Taxonomy | Terms Count |
|----------|-------------|
| `paket_category` | 0 |
| `paket_tag` | 0 |

**Impact:** Paket service cannot be filtered by category.

---

### 8. **Blog Posts Missing `/blog/` Prefix in WP**

WordPress permalinks use direct slug structure. Frontend adds `/blog/` prefix via route.

**Note:** This works because API queries by slug, not URL path.

---

## 📋 STATIC PAGES AUDIT

### Frontend Pages (36 total)

| Category | Count | Examples |
|----------|-------|----------|
| Active Production | 15 | `/services`, `/blog`, `/promosi`, `/about`, `/contact` |
| Duplicate Variants | 18 | `/blog-1`, `/blog-2`, `/shop-1`, `/shop-2` |
| Auth Pages | 7 | `/login`, `/register`, `/forgot-password` |
| Static/Utility | 5 | `/pricing`, `/lokasi`, `/team` |

### Missing in Frontend (8 WP pages)
- `/frame`, `/integration`, `/testimonials`, `/my-account`
- `/booking`, `/faqs`, `/booking-service`, `/coupons`

### Missing in WordPress (36 FE pages)
- Most duplicate variants not in WP
- Some auth pages not implemented

---

## 📊 BLOG AUDIT

| Metric | Value |
|--------|-------|
| **Total Blog Posts** | 300+ |
| **Categories** | 27 |
| **Tags** | 200+ |
| **Sample Slugs** | All valid |
| **404 Issues** | None found ✅ |

---

## 🔧 API ENDPOINT ANALYSIS

### Working Correctly

| Endpoint | Used By | Status |
|----------|---------|--------|
| `/bw/v1/services-full` | `getAllServices()` | ✅ Working |
| `/bw/v1/services/{slug}` | `getServiceBySlug()` | ✅ Working |
| `/bw/v1/layanan-spesialis-full` | `getAllLayananSpesialis()` | ✅ Working |
| `/bw/v1/promosi-active` | `getAllPromosi()` | ✅ Working |
| `/wp/v2/posts` | `getPostBySlug()` | ✅ Working |

### Needs Improvement

| Endpoint | Issue |
|----------|-------|
| `getAllServices()` | Doesn't return taxonomy data in list |
| `getAllServicesWithCategories()` | Exists but unused |
| `getPromosiBySlug()` | FAQ field not mapped correctly |

---

## 🎯 PRIORITY IMPLEMENTATION PLAN

### Phase 1: Critical Fixes

| # | Issue | File | Fix |
|---|-------|------|-----|
| 1 | Services filter | `ServicesArchiveClient.tsx` | Parse nested `taxonomies.services_category` |
| 2 | Promosi FAQ | `promosi/[slug]/page.tsx` | Access `promo.meta.bw_promosi_faq` |
| 3 | Service detail categories | `services/[slug]/page.tsx` | Use `service.taxonomies.services_category` |

### Phase 2: High Priority

| # | Issue | File | Fix |
|---|-------|------|-----|
| 4 | Type definitions | `wordpress.ts`, `types/wordpress.ts` | Add missing meta fields |
| 5 | Caching optimization | Multiple pages | Add React.cache() where missing |

### Phase 3: Cleanup

| # | Issue | Action |
|---|-------|--------|
| 6 | Remove unused functions | Delete `getAllServicesWithCategories`, etc. |
| 7 | Add redirects | `next.config.ts` for duplicate pages |
| 8 | Create missing pages | `/frame`, `/testimonials`, etc. |

---

## 📁 FILES INVOLVED

### Frontend Files to Modify
- `src/app/(site)/services/ServicesArchiveClient.tsx`
- `src/app/(site)/services/[slug]/page.tsx`
- `src/app/(site)/promosi/[slug]/page.tsx`
- `src/lib/wordpress.ts`
- `src/types/wordpress.ts`
- `next.config.ts`

### Backend (BW Plugin) - No changes needed
- Plugin is working correctly
- Issues are in frontend data transformation

---

**Audit Completed:** 2026-07-08  
**Agents Used:** 5 fan-out parallel  
**Tokens Consumed:** 259,372  
**Tool Calls:** 67  
**Next Step:** Implement Phase 1 fixes
