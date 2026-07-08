# Route & API Audit Report
**Date:** 2026-07-08  
**Project:** Bengkel Wiguna V3  
**Scope:** Frontend (Next.js) ↔ Backend (WordPress) Integration

---

## 📊 SUMMARY

| Status | Count | Description |
|--------|-------|-------------|
| ✅ WORKING | 8 | Routes & APIs that function correctly |
| ⚠️ WARNING | 3 | Routes with data mismatches |
| ❌ BROKEN | 2 | Critical route mismatches causing 404s |

---

## 🔴 CRITICAL ISSUES

### 1. **ROUTE MISMATCH: ServicesArchiveClient links to wrong route**

**File:** `src/app/(site)/services/ServicesArchiveClient.tsx`  
**Line:** 24

```tsx
// CURRENT (BROKEN):
href={`/services/${service.slug}`}

// SHOULD BE:
href={`/layanan-spesialis/${service.slug}`}
```

**Problem:**
- The `/layanan-spesialis/page.tsx` **imports and uses** `ServicesArchiveClient`
- When a user clicks a service card from `/layanan-spesialis/`, they go to `/services/{slug}`
- But `/services/{slug}` page uses `getServiceBySlug()` (different API)
- This causes **404 or wrong data** because the slug exists in different CPT

**Impact:** HIGH - All service cards on `/layanan-spesialis/` page link to wrong destinations

---

### 2. **DUPLICATE ARCHIVE PAGES with DIFFERENT DATA SOURCES**

| Route | API Used | Data Source |
|-------|----------|-------------|
| `/layanan-spesialis/` | `getAllLayananSpesialis()` | `/bw/v1/layanan-spesialis-full` |
| `/services/` | `getAllServicesWithCategories()` | `/wp-json/wp/v2/layanan_spesialis` |

**Problem:** Both pages show services but use different CPT endpoints, returning different field structures.

**API Response Difference:**

| Field | BW API (`/bw/v1/`) | WP API (`/wp/v2/`) |
|-------|---------------------|---------------------|
| FAQ | `bw_spesialis_faq` | ❌ Not available |
| Technology | `teknologi_spesialis` | ❌ Not available |
| Category | ❌ Not returned | `spesialis_category` |
| Featured Image | `featured_img` | `_embedded['wp:featuredmedia']` |

---

## ⚠️ WARNINGS

### 3. **MISSING CATEGORY DATA in Frontend**

**File:** `src/app/(site)/services/ServicesArchiveClient.tsx`  
**Lines:** 50-67

```tsx
// Frontend expects:
const serviceCategories = service.services_category || service.spesialis_category || [];

// But BW API returns NO category field!
```

**Actual BW API Response:**
```json
{
  "id": 21721,
  "title": "Semi Overhaul",
  "slug": "semi-overhaul",
  "featured_img": "...",
  "teknologi_spesialis": "Stinger Engine Flush",
  "bw_spesialis_faq": [...]
  // NOTE: No spesialis_category field!
}
```

**Impact:** Category filter on ServicesArchiveClient won't work for BW API data

---

### 4. **UNUSED VARIABLES causing lint warnings**

| File | Variable | Impact |
|------|----------|--------|
| `ServicesArchiveClient.tsx` | `index`, `Link` | Unused params |
| `BlogArchiveClient.tsx` | `BRAND_BLUE`, `BRAND_GOLD` | Unused constants |
| `layanan-spesialis/[slug]/page.tsx` | `faqFirst5` | Unused variable |

---

## ✅ WORKING ROUTES

| Route | API | Status |
|-------|-----|--------|
| `/blog/` | `getAllPosts()` → `/wp/v2/posts` | ✅ Working |
| `/blog/[slug]/` | `getPostBySlug()` → `/wp/v2/posts?slug=` | ✅ Working |
| `/layanan-spesialis/[slug]/` | `getLayananSpesialisBySlug()` → `/bw/v1/layanan-spesialis/` | ✅ Working |
| `/services/[slug]/` | `getServiceBySlug()` → `/bw/v1/services/` | ✅ Working |
| `/promosi/` | `getAllPromosi()` → `/bw/v1/promosi-active` | ✅ Working |

---

## 🔧 RECOMMENDED FIXES

### Priority 1: Fix Route Mismatch

**File:** `src/app/(site)/services/ServicesArchiveClient.tsx`

Add a `basePath` prop to make the component reusable:

```tsx
interface ServicesArchiveClientProps {
  services: Service[];
  basePath?: string; // NEW: Default to '/layanan-spesialis'
}

export default function ServicesArchiveClient({ 
  services, 
  basePath = '/layanan-spesialis' 
}: ServicesArchiveClientProps) {
  // ...
  <WigunaCard
    href={`${basePath}/${service.slug}`}
    // ...
  />
}
```

**Update usages:**
```tsx
// layanan-spesialis/page.tsx (current - works if fixed)
<ServicesArchiveClient services={data} basePath="/layanan-spesialis" />

// services/page.tsx (if still needed)
<ServicesArchiveClient services={data} basePath="/services" />
```

### Priority 2: Align API Response Fields

**Option A:** Update WordPress plugin to include `spesialis_category` in BW API response

**Option B:** Update frontend to use `teknologi_spesialis` as category for display

### Priority 3: Clean up unused imports

Remove unused variables to reduce lint warnings.

---

## 📋 API ENDPOINTS CHECKLIST

| Endpoint | Method | Status | Notes |
|----------|--------|--------|-------|
| `/wp-json/wp/v2/posts` | GET | ✅ | Works |
| `/wp-json/wp/v2/categories` | GET | ✅ | Works |
| `/bw/v1/layanan-spesialis-full` | GET | ✅ | Works |
| `/bw/v1/layanan-spesialis/{slug}` | GET | ✅ | Works |
| `/bw/v1/services-full` | GET | ✅ | Works |
| `/bw/v1/services/{slug}` | GET | ✅ | Works |
| `/bw/v1/promosi-active` | GET | ✅ | Works |

---

## 🎯 ACTION ITEMS

| # | Task | Priority | Owner |
|---|------|----------|-------|
| 1 | Fix ServicesArchiveClient route links | 🔴 HIGH | Frontend |
| 2 | Add category field to BW API | 🟡 MED | Backend |
| 3 | Clean up unused imports | 🟢 LOW | Frontend |
| 4 | Consider consolidating `/services/` and `/layanan-spesialis/` | 🟡 MED | Architecture |

---

**Prepared by:** Claude Code Audit  
**Next Step:** Implement Priority 1 fix
