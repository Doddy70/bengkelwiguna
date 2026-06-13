# Workflow: Bengkel Wiguna Performance Optimization

> **VERSION:** 1.1.0  
> **LAST UPDATED:** 2026-06-13  
> **CURRENT PHASE:** ANALYSIS_COMPLETE  
> **NEXT PHASE:** IMPLEMENTATION_PHASE_1
> **ADAPTATION:** Gemini CLI (Lightweight Model Optimized)

---

## 📍 POSISI SAAT INI

**Status:** Analysis & Recommendations Complete  
**Next Action:** Mulai Implementation Phase 1 (Task 1: Inline Critical CSS)  
**Target Tier:** Claude 3.5 Haiku / GPT-4o-mini (Production)

---

## ⚡ LIGHTWEIGHT MODEL PROTOCOL (Wajib)

Untuk menjaga kualitas saat menggunakan model tier Haiku atau 4o-mini:

1. **Atomic Tasks Only:** JANGAN mengerjakan satu phase sekaligus. Kerjakan per SUB-TASK atau per FILE.
2. **Double Validation:** Setelah setiap perubahan kode, jalankan `npm run build` DAN `npm run type-check`.
3. **Context Refresh:** Jika pengerjaan satu task melebihi 5 turns, baca ulang `.claude/state.json` untuk sinkronisasi state.
4. **Explicit Search:** Selalu gunakan `grep_search` sebelum mengedit file untuk memastikan context yang lengkap.
5. **No Blind Edits:** Jangan berasumsi path file benar; validasi dengan `list_directory` atau `glob`.

---

## PHASE 0: AUDIT ✅
...

**Status:** COMPLETED  
**Date:** 2026-06-12  
**Agent:** Claude Opus 4.8

### Steps Completed:
- [x] Run PageSpeed Insights (mobile + desktop)
- [x] Identifikasi Core Web Vitals issues
- [x] Catat baseline metrics
- [x] Simpan screenshot audit

### Output:
- `.claude/notes/audit-2026-06-12.md`
- Skor baseline: Performance 72, LCP 6.4s, FCP 1.85s, TBT 160ms, CLS 0

---

## PHASE 1: ANALYSIS ✅

**Status:** COMPLETED  
**Date:** 2026-06-12  
**Agent:** Claude Opus 4.8

### Steps Completed:
- [x] Analisis render-blocking resources (890ms savings potential)
- [x] Analisis image optimization opportunities (92 KiB savings potential)
- [x] Identifikasi JavaScript optimization (15 KiB savings potential)
- [x] Dokumentasi best practices

### Output:
- `.claude/conventions.md` (Best Practices section)
- Performance recommendations lengkap

---

## PHASE 2: IMPLEMENTATION PHASE 1 🚧

**Status:** READY TO START  
**Next Task:** Task 1 - Inline Critical CSS

### Step 2.1: Inline Critical CSS
```
AKSI:
1. Identifikasi CSS yang dibutuhkan untuk above-the-fold
   - Header/navigation
   - Hero section
   - Above-fold content

2. Buat file critical.css
   - Path: bexon/src/styles/critical.css
   - Isi: CSS minimal yang diperlukan

3. Inline di <head> website
   - Gunakan <style> tag di <head>
   - Atau gunakan media="print" trick

4. Load remaining CSS dengan defer
   - <link rel="stylesheet" href="main.css" media="print" onload="this.media='all'">

5. Test:
   - FCP ≤ 1.5s
   - Tidak ada FOUC (Flash of Unstyled Content)
   - CLS tetap 0

6. Update state.json
   - task "inline-critical-css" status = "DONE"
   - lastCommit updated

7. Git commit
   git checkout -b perf/inline-critical-css
   git commit -m "perf: inline critical CSS for above-the-fold
   
   BREAKING CHANGE: none
   Related-to: #LCP-optimization
   Savings: ~300ms FCP"

FILES YANG TERLIBAT:
- bexon/src/app/layout.tsx (MODIFIKASI)
- bexon/src/styles/critical.css (BUAT)

VALIDASI:
- Lighthouse FCP harus turun minimal 0.3s
- Tidak ada FOUC saat reload
- CLS tetap 0
```

### Step 2.2: Minifikasi Assets
```
AKSI:
1. Install tools
   npm install --save-dev terser cssnano

2. Setup build script
   - Tambah script di package.json
   - "minify": "node scripts/minify.js"

3. Minifikasi CSS
   - semua .css → .min.css
   - gunakan cssnano

4. Minifikasi JS
   - gunakan terser
   - tree shaking

5. Update imports di codebase
   - import './styles.css' → import './styles.min.css'

6. Test:
   - File size turun 30-50%
   - Tidak ada console error
   - Functionality tetap jalan

7. Git commit
   git checkout -b perf/minify-assets
   git commit -m "perf: minify CSS and JavaScript assets
   
   BREAKING CHANGE: none
   Related-to: #performance-optimization
   Savings: ~200ms"

FILES YANG TERLIBAT:
- bexon/src/**/*.css (MODIFIKASI)
- bexon/src/**/*.js (MODIFIKASI)
- package.json (MODIFIKASI)
- scripts/minify.js (BUAT)

VALIDASI:
- Ukuran file turun 30-50%
- Tidak ada console error
- Build tetap success
```

### Step 2.3: Konversi Hero Image ke WebP
```
AKSI:
1. Identifikasi hero image saat ini
   - Path: bexon/public/images/hero.*
   - Format: JPEG/PNG
   - Ukuran: (cek actual size)

2. Convert ke WebP
   - Tool: cwebp, squoosh.app
   - Quality: 80%
   - Command: cwebp -q 80 original.jpg -o hero.webp

3. Generate responsive variants
   - hero-mobile.webp (400px)
   - hero-tablet.webp (800px)
   - hero-desktop.webp (1200px)

4. Update HTML dengan <picture> tag
   <picture>
     <source media="(max-width: 600px)" srcset="/images/hero-mobile.webp">
     <source media="(max-width: 1200px)" srcset="/images/hero-tablet.webp">
     <img src="/images/hero-desktop.webp" alt="Bengkel Wiguna" width="1200" height="600">
   </picture>

5. Setup fallback untuk browser lama
   - Tambah <img> dengan format asli sebagai fallback

6. Test:
   - LCP ≤ 5.5s
   - Image quality acceptable
   - Fallback works di browser lama

7. Git commit
   git checkout -b perf/convert-hero-webp
   git commit -m "perf: convert hero image to WebP with responsive variants
   
   BREAKING CHANGE: none
   Related-to: #LCP-optimization
   Savings: ~500ms LCP"

FILES YANG TERLIBAT:
- bexon/public/images/hero.webp (BUAT)
- bexon/public/images/hero-*.webp (BUAT)
- bexon/src/app/page.tsx (MODIFIKASI)

VALIDASI:
- PageSpeed LCP turun minimal 1s
- Tidak ada broken image
- Responsive variants work
```

---

## PHASE 3: IMPLEMENTATION PHASE 2

**Status:** PENDING  
**Depends on:** Phase 2 complete

### Step 3.1: Lazy Loading Implementation
```
DEPENDENCY: Task 3 (convert-hero-webp) selesai

AKSI:
1. Implement lazy loading untuk gambar non-LCP
   - Gunakan native: loading="lazy"
   - Atau Intersection Observer API

2. Update semua <img> tags
   <img src="image.jpg" loading="lazy" decoding="async">

3. Handle fallback untuk browser lama
   - Gunakan lazyload library jika perlu

4. Test:
   - Scroll down, images load correctly
   - No broken images
   - CLS tetap 0

5. Git commit
   git checkout -b perf/lazy-loading
   git commit -m "perf: implement lazy loading for below-fold images"
```

### Step 3.2: Preload LCP Image
```
DEPENDENCY: Task 3 (convert-hero-webp) selesai

AKSI:
1. Identifikasi LCP element
   - Biasanya hero image
   - Cek dengan Lighthouse

2. Tambahkan preload di <head>
   <link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high">

3. Test:
   - LCP ≤ 4.5s
   - No duplicate downloads

4. Git commit
   git checkout -b perf/preload-lcp
   git commit -m "perf: preload LCP image with high priority"
```

---

## PHASE 4: SERVER OPTIMIZATION

**Status:** PENDING  
**Depends on:** Phase 2 complete

### Step 4.1: Browser Caching Headers
```
AKSI:
1. Konfigurasi caching di vercel.json
   {
     "headers": [
       {
         "source": "/images/(.*)",
         "headers": [
           { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
         ]
       },
       {
         "source": "/static/(.*)",
         "headers": [
           { "key": "Cache-Control", "value": "public, max-age=2592000, immutable" }
         ]
       }
     ]
   }

2. Test:
   - Cache-Control headers present
   - curl -I https://site.com/images/hero.webp

3. Git commit
   git checkout -b perf/browser-caching
   git commit -m "perf: configure browser caching headers"
```

### Step 4.2: Gzip/Brotli Compression
```
AKSI:
1. Enable compression di next.config.ts
   compress: true

2. Test:
   - curl -H "Accept-Encoding: gzip" https://site.com/page | wc -c
   - Bandingkan dengan tanpa gzip

3. Git commit
   git checkout -b perf/compression
   git commit -m "perf: enable gzip compression"
```

---

## PHASE 5: MONITORING

**Status:** PENDING  
**Depends on:** Phase 4 complete

### Step 5.1: Lighthouse CI Pipeline
```
AKSI:
1. Install Lighthouse CI
   npm install -D @lhci/cli

2. Buat lighthouse.config.js
   {
     "ci": {
       "collect": {
         "url": ["http://localhost:3000"]
       },
       "assert": {
         "performance": [">=0.85"],
         "lcp": ["<=2500"],
         "cls": ["<=0.1"]
       }
     }
   }

3. Integrate dengan CI/CD
   - Tambah di GitHub Actions
   - atau script di package.json

4. Test:
   - lighthouse-ci runs successfully
   - Budget assertions pass

5. Git commit
   git checkout -b perf/lighthouse-ci
   git commit -m "perf: setup Lighthouse CI pipeline"
```

### Step 5.2: Web Vitals RUM
```
DEPENDENCY: Task 9 (lighthouse-ci) selesai

AKSI:
1. Install web-vitals
   npm install web-vitals

2. Buat lib/rum.ts
   import { getCLS, getFID, getLCP } from 'web-vitals';
   
   function sendToAnalytics({ name, delta, id }) {
     fetch('/api/vitals', {
       method: 'POST',
       body: JSON.stringify({ name, delta, id })
     });
   }
   
   getCLS(sendToAnalytics);
   getFID(sendToAnalytics);
   getLCP(sendToAnalytics);

3. Import di layout.tsx
   - Run on mount

4. Test:
   - Metrics appear in analytics

5. Git commit
   git checkout -b perf/web-vitals-rum
   git commit -m "perf: implement Web Vitals real user monitoring"
```

---

## 🔄 GIT WORKFLOW

```
1. Setiap task → feature branch
   git checkout -b perf/inline-critical-css

2. Implementasi task sesuai workflow.md

3. Test lokal
   npm run build --turbopack
   npm run lighthouse

4. Commit dengan conventional commits
   git commit -m "perf: inline critical CSS for above-the-fold
   
   BREAKING CHANGE: none
   Related-to: #LCP-optimization
   Savings: ~300ms FCP"

5. Push ke remote
   git push origin perf/inline-critical-css

6. Buat PR
   gh pr create --title "perf: inline critical CSS" \
                --body "Referensi: .claude/workflow.md#step-2-1"

7. Merge setelah approval
```

---

## ⚠️ RULES FOR ALL AGENTS

1. **SELALU** baca `.claude/state.json` sebelum mulai kerja
2. **SELALU** update `.claude/state.json` setelah selesai task
3. **SELALU** commit dengan conventional commits format
4. **SELALU** jalankan Lighthouse audit sebelum push
5. **JANGAN** push langsung ke main/master
6. **JANGAN** skip validation step
7. **JANGAN** hapus file yang sudah ada tanpa konfirmasi
8. **JANGAN** ubah brand colors tanpa izin

---

## 📊 PHASE PROGRESS

| Phase | Status | Tasks | Completed |
|-------|--------|-------|-----------|
| Phase 0: Audit | ✅ DONE | 1 | 1/1 |
| Phase 1: Analysis | ✅ DONE | 1 | 1/1 |
| Phase 2: Implementation 1 | 🚧 READY | 3 | 0/3 |
| Phase 3: Implementation 2 | ⏸️ PENDING | 2 | 0/2 |
| Phase 4: Server | ⏸️ PENDING | 2 | 0/2 |
| Phase 5: Monitoring | ⏸️ PENDING | 2 | 0/2 |

---

**Generated by:** Claude Opus 4.8  
**Date:** 2026-06-12
