# SEO Performance Implementation Tasks
> Generated: 2026-07-10
> Source: SEO Audit — Content Cluster Analysis
> Status: READY TO EXECUTE

---

## PHASE 1: Internal Linking Fix (IMMEDIATE)

> **Rationale:** Broken links sudah difix, tapi 11 artikel masih tanpa internal links. Ini pemborosan link equity terbesar.

### 1.1 — Pillar Page: Add Cluster Navigation
- [ ] **File:** `src/app/(site)/services/ServiceKakiKakiClient.tsx` (atau page terkait)
- [ ] Tambahkan section "Artikel Terkait Kaki-Kaki" dengan cards ke semua 11 cluster articles
- [ ] Tambahkan anchor text links di body content pillar → setiap cluster article
- [ ] Target: Setiap cluster article dilink minimal 1x dari pillar page
- [ ] **Branch:** `fix/seo-internal-links-phase1`

### 1.2 — Cluster Articles: Add Internal Links (Reciprocal)
- [ ] Edit setiap cluster article → tambahkan 2-3 internal links ke article lain
- [ ] Link flow: Cluster ↔ Cluster (bukan hanya Cluster → Pillar)
- [ ] Gunakan anchor text yang natural, bukan keyword stuffing
- [ ] **Branch:** `fix/seo-internal-links-phase1`

---

## PHASE 2: Topical Authority Expansion (HIGH PRIORITY)

> **Rationale:** 1 cluster topic是不够的. Butuh minimum 3 cluster untuk competitive keywords.

### 2.1 — Content Cluster #2: Semi Overhaul / Overhaul Engine / Turun Mesin
- [ ] Buat pillar page: `/overhaul-engine-mobil` (1200+ words, target "overhaul mesin mobil", "turun mesin", "semi overhaul")
- [ ] Buat 4-5 cluster articles:
  - [ ] `/apa-bedanya-semi-overhaul-dan-overhaul-mesin`
  - [ ] `/tanda-mesin-mobil-harus-overhaul`
  - [ ] `/biaya-overhaul-mesin-mobil-2026`
  - [ ] `/proses-turun-mesin-mobil-step-by-step`
  - [ ] `/berapa-lama-overhaul-mesin-mobil`
- [ ] Setup internal linking: Pillar ← Cluster
- [ ] **Branch:** `feat/seo-cluster-overhaul`

### 2.2 — Content Cluster #3: Sistem Rem (Brake)
- [ ] Buat pillar page: `/service-rem-mobil-depok` (1200+ words)
- [ ] Buat 4-5 cluster articles:
  - [ ] `/tanda-rem-mobil-bermasalah`
  - [ ] `/kapan-harus-ganti-brake-pad`
  - [ ] `/biaya-service-rem-mobil-2026`
  - [ ] `/rem-berdedesing-ini-penyebabnya`
  - [ ] `/perbedaan-brake-fluid-dot3-dot4-dot5`
- [ ] **Branch:** `feat/seo-cluster-rem`

### 2.3 — Content Cluster #4: AC Mobil (Optional if resources allow)
- [ ] Buat pillar page: `/service-ac-mobil-depok`
- [ ] Buat 3-4 cluster articles
- [ ] **Branch:** `feat/seo-cluster-ac` (low priority, skip jika waktu terbatas)

---

## PHASE 3: Content Depth Upgrade (MEDIUM PRIORITY)

> **Rationale:** E-E-A-T score butuh content depth. 3-5 artikel terbaik diupgrade ke 2000+ words.

### 3.1 — Upgrade Biaya Service Kaki-Kaki Article
- [ ] **Post ID:** 22095 (biaya-service-kaki-kaki)
- [ ] Expand jadi 2000+ words
- [ ] Tambahkan: tabel harga detail per komponen, step-by-step proses service
- [ ] Tambahkan FAQ section (5-7 Q&A)
- [ ] Tambahkan internal links ke semua cluster articles
- [ ] **Branch:** `feat/seo-content-upgrade`

### 3.2 — Upgrade Kyoto Shaking Machine Article
- [ ] **Post ID:** 22109
- [ ] Expand jadi 2000+ words
- [ ] Tambahkan: comparison section (Kyoto vs Conventional vs Manual)
- [ ] Tambahkan video embed placeholder (jika ada)
- [ ] **Branch:** `feat/seo-content-upgrade`

### 3.3 — Upgrade Pillar Page (Service Kaki-Kaki)
- [ ] Expand pillar page jadi 1500+ words
- [ ] Tambahkan comprehensive TOC
- [ ] Tambahkan "Panduan Lengkap" intro section
- [ ] Strong CTA + internal navigation to all clusters
- [ ] **Branch:** `feat/seo-content-upgrade`

---

## PHASE 4: Technical SEO (HIGH PRIORITY)

### 4.1 — Core Web Vitals Audit & Fix
- [ ] Jalankan Lighthouse audit di `https://bengkelwiguna.com`
- [ ] Check LCP (target: < 2.5s), CLS (target: < 0.1), INP (target: < 200ms)
- [ ] Identifikasi dan fix top 3 issues
- [ ] **Branch:** `fix/seo-core-web-vitals`

### 4.2 — XML Sitemap & Robots.txt
- [ ] Generate XML sitemap dari semua published posts + pages
- [ ] Submit ke Google Search Console
- [ ] Verifikasi robots.txt tidak memblock critical pages
- [ ] **Branch:** `fix/seo-sitemap-robots`

### 4.3 — Mobile Responsiveness Check
- [ ] Test semua article pages di mobile viewport
- [ ] Fix layout issues jika ada
- [ ] Verify touch targets (min 48px)
- [ ] **Branch:** `fix/seo-mobile`

---

## PHASE 5: Off-Page SEO & Authority Building (MEDIUM PRIORITY)

### 5.1 — Google Business Profile Optimization
- [ ] Verifikasi GBP sudah complete 100%
- [ ] Tambahkan photos terbaru
- [ ] Posting update mingguan (minimum 2 posts/week)
- [ ] Respond semua reviews (positive + negative)
- [ ] **Branch:** `feat/seo-gbp-optimization`

### 5.2 — Local Citations & Directory Listings
- [ ] Submit/update ke directory berikut:
  - [ ] Google Business Profile ✅
  - [ ] Bing Places
  - [ ] Apple Maps
  - [ ] Gojek / Grab (if applicable)
  - [ ] Tokopedia / Tokooble service listing
  - [ ] OLX Autos
  - [ ] Waze
  - [ ] Maps.me
  - [ ] Foursquare
  - [ ] TripAdvisor (if applicable)
- [ ] **Branch:** `feat/seo-local-citations`

### 5.3 — Backlink Outreach (Passive)
- [ ] Buat "Link to Us" page di website dengan logo + embed code
- [ ] Submit ke Indonesian automotive directories
- [ ] DA 40+: mobil123.com, otosport, automotive directories
- [ ] **Branch:** `feat/seo-backlinks`

---

## PHASE 6: Schema & Structured Data (LOW PRIORITY — ALREADY GOOD)

### 6.1 — Verify All Structured Data
- [ ] Test semua schema types dengan Rich Results Test
- [ ] Fix any errors
- [ ] Tambahkan FAQ schema di setiap article page
- [ ] **Branch:** `fix/seo-schema`

---

## TASK EXECUTION ORDER

```
SEQUENCE:
1. [FIX]  Phase 1 — Internal Linking (Fast, High Impact)
2. [FEAT] Phase 2.1 — Cluster Overhaul Engine (Content, High Impact)
3. [FIX]  Phase 4.1 — Core Web Vitals (Technical, High Impact)
4. [FEAT] Phase 2.2 — Cluster Rem (Content, Medium Impact)
5. [FIX]  Phase 4.2 — Sitemap (Technical, Medium Impact)
6. [FEAT] Phase 3 — Content Depth Upgrade (Content, Medium Impact)
7. [FEAT] Phase 5 — Off-Page SEO (Authority, Long-term)
```

---

## ESTIMATED TIME TO IMPACT

| Phase | Effort | Time | SEO Impact |
|-------|--------|------|------------|
| Phase 1 (Internal Links) | Low | 2-4h | Fast (2-4 weeks) |
| Phase 2 (New Clusters) | High | 2-3 days | Medium (1-2 months) |
| Phase 3 (Content Depth) | Medium | 4-6h | Medium (1-2 months) |
| Phase 4 (Technical) | Medium | 3-5h | Fast (2-4 weeks) |
| Phase 5 (Off-Page) | High | 1-2 weeks | Slow (3-6 months) |
| Phase 6 (Schema) | Low | 1-2h | Fast (2-4 weeks) |

---

## VALIDATION CHECKLIST (After Each Phase)

- [ ] `curl -s -o /dev/null -w "%{http_code}" <url>` untuk setiap link baru → harus 200/301
- [ ] Lighthouse score tidak turun
- [ ] `npm run build --turbopack` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Push ke GitHub, verify CI passes

---

## METRICS TO TRACK (GSC)

- [ ] Impressions (target: +20% dalam 30 hari)
- [ ] CTR (target: +5% dalam 30 hari)
- [ ] Average Position (target: top 10 untuk target keywords)
- [ ] Core Web Vitals status: PASS

---

Generated by Claude Code — SEO Performance Audit 2026-07-10
