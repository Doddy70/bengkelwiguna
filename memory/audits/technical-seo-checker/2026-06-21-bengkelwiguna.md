# Technical SEO Audit: Bengkel Wiguna

**Date**: 2026-06-21  
**Target**: `https://bengkelwiguna.com`  
**Tooling**: Technical SEO Checker Skill, PageSpeed Insights  

## 1. Audit Crawlability & Robots.txt 
* **Evidence**: Fetched `/robots.txt`.
* **Issue**: (1) `Sitemap` directive was pointing to `http://localhost:3000/sitemap.xml` which prevented discovery. (2) Missing explicit directives for AI crawlers (GPTBot, ClaudeBot).
* **Fix**: ✅ Patched `src/app/robots.ts` to output `https://bengkelwiguna.com/sitemap.xml` and implemented "Split Stance" (allow retrieval via ChatGPT-User, block training via GPTBot/CCBot).
* **Score**: 🔴 Failed -> 🟢 Pass (After Fix)

## 2. Audit Indexability & Sitemap
* **Evidence**: Fetched `/sitemap.xml` (840+ URLs).
* **Issue**: Contains duplicate/test routes like `/home-1`, `/home-2`, etc.
* **Fix**: Need to filter out test/demo pages from `sitemap.ts` static routes.
* **Score**: 🟡 Warning (Action Required)

## 3. Audit Site Speed & Core Web Vitals (CWV)
* **Evidence**: PSI Mobile Report (Previous Session).
* **Issue**: LCP at 4.5s (Poor) due to render-blocking Chakra Petch fonts, FontAwesome CDN, and Next.js element render delay on the slideshow.
* **Fix**: ✅ Patched in `perf/mobile-cwv-phase1`. Added `ReactDOM.preload`, inline static LCP first-slide, removed FontAwesome CDN, and self-hosted Chakra Petch.
* **Score**: 🔴 Failed -> 🟢 Pass (Pending Vercel Deployment Validation)

## 4. Audit Mobile-Friendliness
* **Evidence**: Viewport config in `layout.tsx`.
* **Issue**: `maximumScale: 5` is good for accessibility, `initialScale: 1` is correct. Tap targets (Tailwind UI) are generally OK.
* **Score**: 🟢 Pass

## 5. Audit Security & HTTPS
* **Evidence**: Protocol and domain routing.
* **Issue**: Internal links and APIs properly use HTTPS. 
* **Score**: 🟢 Pass

## 6. Audit URL Structure
* **Evidence**: Sitemap analysis.
* **Issue**: `bengkelwiguna.com/promosi/promo-paket-ijig` etc. URLs are clean, localized, and use hyphens.
* **Score**: 🟢 Pass

## 7. Audit Structured Data
* **Evidence**: Code review of components.
* **Issue**: Missing `LocalBusiness` or `AutoRepair` JSON-LD Schema. This is critical for local SEO in Depok.
* **Fix**: Needs implementation of JSON-LD in `layout.tsx` or Homepage.
* **Score**: 🔴 Failed

## 8. Audit International SEO
* **Evidence**: N/A
* **Issue**: Purely localized site for Depok, Indonesia (`lang="id"`). Hreflang not required.
* **Score**: ⚪ N/A

---

## 🚦 Priority Fix Queue
1. **[P0]** Deploy `perf/mobile-cwv-phase1` to validate CWV / LCP fixes on Vercel.
2. **[P1]** Generate and implement `AutoRepair` JSON-LD Schema using the `schema-markup-generator` skill.
3. **[P2]** Filter development routes (`/home-1`, `/home-2`) from `sitemap.ts` to prevent duplicate content indexing.
