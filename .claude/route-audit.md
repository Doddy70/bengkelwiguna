# Frontend Route & Page Audit

**Audit Date:** 2026-07-08  
**Project:** Bengkel Wiguna Next.js

---

## Summary

| Metric | Count |
|--------|-------|
| Total Pages | 53 |
| Site Pages (active) | 47 |
| Home Variants | 13 |
| Dynamic Routes | 5 |
| API Functions | 21 |

---

## 🔴 Issues Found

### 1. Duplicate Routes (18 total)

| Primary Route | Duplicate(s) |
|---------------|---------------|
| `/blog` | `/blog-1`, `/blog-2`, `/blog-3` |
| `/blog/{slug}` | `/single-blog-1`, `/single-blog-2` |
| `/about` | `/about-2` |
| `/contact` | `/contact-2` |
| `/pricing` | `/pricing-2` |
| `/checkout` | `/checkout-2` |
| `/login` | `/signin` |
| `/register` | `/signup` |
| `/cart` | `/cart-2` |

### 2. Route Mismatch Issues (5)

| Page | Issue | Correct Link |
|------|-------|--------------|
| `/login` | Links to `/auth/signup` | Should be `/register` |
| `/register` | Links to `/auth/login` | Should be `/login` |
| `/forgot-password` | Links to `/auth/login` | Should be `/login` |
| `/reset-password` | Links to `/auth/login` | Should be `/login` |
| `/shop-1`, `/shop-2` | No actual shop functionality | Orphaned pages |

### 3. Not in Sitemap (7)

- `/shop-1`
- `/shop-2`
- `/single-product-1`
- `/single-product-2`
- `/cart-2`
- `/test-equipment-v3`

### 4. Deprecated Variants (13)

All `/home-{N}/` pages (home-1 through home-13) are home page variants that should be consolidated.

---

## ✅ Active Production Routes

### Core Routes
- `/` - Homepage
- `/about` - About page
- `/blog` - Blog archive
- `/blog/{slug}` - Blog post detail
- `/cart` - Cart page
- `/checkout` - Checkout page
- `/contact` - Contact page
- `/karir` - Careers page
- `/layanan-spesialis` - Specialist services archive
- `/layanan-spesialis/{slug}` - Specialist service detail
- `/lokasi` - Location page
- `/paket-service` - Package service archive
- `/paket-service/{slug}` - Package service detail
- `/pricing` - Pricing page
- `/privacy-policy` - Privacy policy
- `/promosi` - Promotions archive
- `/promosi/{slug}` - Promotion detail
- `/services` - Services archive
- `/services/{slug}` - Service detail
- `/syarat-ketentuan` - Terms & conditions
- `/team` - Team page
- `/tentang-wiguna` - About Wiguna page

### Auth Routes (Need Cleanup)
- `/login` - Login page
- `/register` - Registration page
- `/forgot-password` - Password recovery
- `/reset-password` - Password reset

---

## 🔗 Dynamic Routes

| Pattern | Directory | API Function |
|---------|-----------|--------------|
| `/services/{slug}` | `(site)/services/[slug]` | `getServiceBySlug` |
| `/blog/{slug}` | `(site)/blog/[slug]` | `getPostBySlug` |
| `/promosi/{slug}` | `(site)/promosi/[slug]` | `getPromosiBySlug` |
| `/paket-service/{slug}` | `(site)/paket-service/[slug]` | `getPaketServiceBySlug` |
| `/layanan-spesialis/{slug}` | `(site)/layanan-spesialis/[slug]` | `getLayananSpesialisBySlug` |

---

## 📡 API Functions (src/lib/wordpress.ts)

### Services
- `getAllServices()` → `/bw/v1/services-full`
- `getServiceBySlug(slug)` → `/bw/v1/services/{slug}`
- `getServicesForSitemap()`

### Promosi
- `getAllPromosi()` → `/bw/v1/promosi-active`
- `getPromosiBySlug(slug)` → `/bw/v1/promosi/{slug}`
- `getPromosiForSitemap()`

### Paket Service
- `getAllPaketService()` → `/bw/v1/paket-service-full`
- `getPaketServiceBySlug(slug)` → `/bw/v1/paket-service/{slug}`

### Layanan Spesialis
- `getAllLayananSpesialis()` → `/bw/v1/layanan-spesialis-full`
- `getLayananSpesialisBySlug(slug)` → `/bw/v1/layanan-spesialis/{slug}`
- `getLayananSpesialisForSitemap()`

### Blog/Posts
- `getAllPosts(page, perPage)` → `/wp/v2/posts`
- `getPostBySlug(slug)` → `/wp/v2/posts?slug={slug}`
- `getAllPostsFlat()` → All posts (pagination loop)
- `getAllCategories()` → `/wp/v2/categories`
- `getPostsByCategory(categoryId, excludeId, perPage)`

### Pages
- `getPageBySlug(slug)` → `/wp/v2/pages?slug={slug}`

### Settings
- `getHomepageSettings()` → `/bw/v1/homepage-settings`
- `getHomepageFaqs()` → Derived from homepage settings
- `getNavigationMenu(location)` → WordPress Menus API

### Utilities
- `bwFetch<T>(endpoint, options)` - Custom BW endpoint fetcher
- `normalizePath(path)` - URL normalization
- `getOptimizedImageUrl(url, options)` - Smush CDN optimization
- `getFeaturedImage(post)` - Extract featured image
- `formatDate(dateString)` - Indonesian date format
- `stripHtml(html)` - HTML stripping
- `decodeHtml(str)` - HTML entity decoding
- `parseFaqField(faqData)` - FAQ parsing

---

## ⚙️ next.config.ts

```typescript
{
  trailingSlash: false,
  output: "standalone",
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      'img.youtube.com',
      'i.ytimg.com',
      'yt3.ggpht.com',
      'backend.bengkelwiguna.com',
      'bengkelwiguna.com',
      'cms.bengkelwiguna.com',
      'secure.gravatar.com',
      'i.pravatar.cc',
      '*.googleusercontent.com'
    ]
  }
}
```

**No redirects or rewrites configured.**

---

## 📋 Recommendations

1. **Consolidate duplicate pages** - Remove blog-{1,2,3}, single-blog-{1,2}, about-2, contact-2, pricing-2, checkout-2, signin, signup

2. **Fix auth route links** - Update links in `/login`, `/register`, `/forgot-password`, `/reset-password` to use correct routes

3. **Clean up home variants** - Remove or archive all `/home-{N}/` pages

4. **Add missing sitemap entries** - Include `/shop-*`, `/single-product-*`, `/cart-2`, `/test-equipment-v3` or remove these pages

5. **Add redirects in next.config.ts** - For SEO, redirect duplicate URLs to canonical versions
