# 🔴 CRITICAL AUDIT REPORT — Routes & API Integration
**Date:** 2026-07-08  
**Source:** WordPress MCP Server + Frontend Code Analysis

---

## 🚨 CRITICAL FINDINGS

### 1. DUPLICATE SLUG COLLISION — SEO DISASTER!

**Problem:** Slug `semi-overhaul` exists in **TWO different CPTs**:

| CPT | ID | Title | URL | Meta Fields |
|-----|----|----|-----|-------------|
| `layanan_spesialis` | 21721 | Semi Overhaul | `/layanan-spesialis/semi-overhaul/` | `teknologi_spesialis`, `bw_spesialis_faq` |
| `services` | 21593 | Semi Overhaul | `/services/semi-overhaul/` | `bw_services_faq`, `bw_gallery_images` |

**Impact:** 
- ⚠️ **Google will see duplicate content**
- ⚠️ **Confused crawling — which URL is canonical?**
- ⚠️ **SEO ranking split between two pages**

**Recommended Action:** Choose one CPT to keep, redirect the other.

---

### 2. WRONG CPT API USED IN `/services/` PAGE

**File:** `src/app/(site)/services/page.tsx:68`

```tsx
// CURRENT (WRONG):
const services = await getAllServicesWithCategories()
// getAllServicesWithCategories() calls: /wp-json/wp/v2/layanan_spesialis
```

**Problem:**
- `layanan_spesialis` CPT only has **3 items** (Reset AC, Cek Kaki-Kaki, Semi Overhaul)
- `services` CPT has **16 items** (Tune Up Carbon Clean, Overhaul Transmisi, Servis AC, etc.)
- The page fetches the WRONG CPT!

**Actual `services` CPT items (16):**
1. Tune Up Carbon Clean
2. Overhaul Transmisi
3. Overhaul Engine
4. Servis AC Mobil
5. Reset AC Mobil
6. Kyoto Shaking Machine
7. Reset Radiator
8. Ganti Oli Transmisi
9. Super Tune Up
10. Semi Overhaul ← DUPLICATE
11. Ganti Ban
12. Balancing
13. Spooring
14. Servis Berkala
15. Ganti Oli Mesin
16. Servis Rem

---

### 3. ROUTE MISMATCH IN `ServicesArchiveClient`

**File:** `src/app/(site)/services/ServicesArchiveClient.tsx:24`

```tsx
// CURRENT (BROKEN):
<WigunaCard href={`/services/${service.slug}`} ... />

// BUT ServicesArchiveClient is imported by:
// - /layanan-spesialis/page.tsx
// - /services/page.tsx
```

**Problem:**
- `/layanan-spesialis/page.tsx` imports `ServicesArchiveClient`
- ServicesArchiveClient links to `/services/{slug}`
- But the data comes from `layanan_spesialis` CPT (slug: `/layanan-spesialis/{slug}`)
- **Result: 404 on every card click!**

---

## 📊 CPT STRUCTURE ANALYSIS

### Custom Post Types

| CPT | REST Base | Items | Taxonomies | Used By |
|-----|-----------|-------|------------|---------|
| `services` | `services` | 16 | `services_category`, `services_tag` | `/services/` page |
| `layanan_spesialis` | `layanan_spesialis` | 3 | `spesialis_category`, `spesialis_tag` | `/layanan-spesialis/` page |
| `promosi` | `promosi` | 9 | `promosi_category`, `promosi_tag` | `/promosi/` page |
| `paket_service` | `paket_service` | 3 | `paket_category`, `paket_tag` | `/paket-service/` page |

---

## 🔧 META FIELDS COMPARISON

### `layanan_spesialis` Meta Fields:
```json
{
  "teknologi_spesialis": "Stinger Engine Flush",
  "manfaat_spesialis": "<ul>...</ul>",
  "bw_spesialis_faq": "[{q, a}, ...]",
  "bw_spesialis_faq_image": "url"
}
```

### `services` Meta Fields:
```json
{
  "bw_services_faq": "[{q, a}, ...]",
  "bw_gallery_images": "id1,id2,id3"
}
```

---

## ✅ WORKING ROUTES (from WordPress MCP)

| Route | Frontend | Backend | Status |
|-------|----------|---------|--------|
| `/blog/` | `getAllPosts()` | `/wp/v2/posts` | ✅ Works |
| `/blog/[slug]/` | `getPostBySlug()` | `/wp/v2/posts?slug=` | ✅ Works |
| `/layanan-spesialis/` | `getAllLayananSpesialis()` | `/bw/v1/layanan-spesialis-full` | ⚠️ Works but link broken |
| `/layanan-spesialis/[slug]/` | `getLayananSpesialisBySlug()` | `/bw/v1/layanan-spesialis/{slug}` | ✅ Works |
| `/services/[slug]/` | `getServiceBySlug()` | `/bw/v1/services/{slug}` | ✅ Works |

---

## ❌ BROKEN ROUTES

| Route | Issue | Fix Required |
|-------|-------|--------------|
| `/services/` | Fetches wrong CPT (layanan_spesialis) | Change API endpoint |
| `/layanan-spesialis/` | Card links go to `/services/` | Fix href basePath |

---

## 🎯 ACTION PLAN

### Priority 1: FIX `/services/` PAGE

```tsx
// BEFORE (wrong):
const services = await getAllServicesWithCategories()  // fetches layanan_spesialis CPT!

// AFTER (correct):
const services = await getAllServices()  // fetches services CPT
```

Need to create `getAllServices()` that calls `/bw/v1/services-full`

### Priority 2: FIX ROUTE LINKS

```tsx
// In ServicesArchiveClient:
<WigunaCard href={`/${basePath}/${service.slug}`} ... />
```

### Priority 3: RESOLVE DUPLICATE SLUG

Options:
1. **Option A:** Keep `services` CPT (16 items), delete `layanan_spesialis` items
2. **Option B:** Keep `layanan_spesialis` CPT (3 items), merge into `services` CPT
3. **Option C:** Add prefix to slugs (e.g., `spesialis-semi-overhaul`)

---

**Prepared by:** Claude Code + WordPress MCP  
**Next Step:** Implement fixes
