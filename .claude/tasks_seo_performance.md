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

> **Reference:** `.claude/COntent Authority Semi Overhaul.md` — Guidelines WAJIB diikuti untuk setiap artikel.

#### Objective
Setiap artikel harus meningkatkan:
- Organic Search (SEO), AI Search Visibility (GEO), Google AI Overview
- SERP Ranking, Topical Authority, User Experience (Helpful Content)
- Artikel bukan chasing keyword, tapi bagian dari **knowledge graph** yang saling terhubung

#### Writing Principles (WAJIB)
- [ ] Menjawab search intent secara lengkap
- [ ] Ditulis berdasarkan pengalaman bengkel nyata (E-E-A-T)
- [ ] Bahasa Indonesia profesional tapi mudah dipahami
- [ ] Tidak keyword stuffing
- [ ] Struktur heading logis
- [ ] Mudah dipahami pengguna & AI Search

#### Content Structure (per artikel)
1. H1
2. Quick Answer / Ringkasan
3. Pendahuluan
4. Penyebab
5. Gejala
6. Cara Diagnosis
7. Solusi
8. Risiko Jika Diabaikan
9. Kapan Harus ke Bengkel
10. Mengapa Memilih Bengkel Wiguna
11. FAQ
12. Kesimpulan

Gunakan bullet list, tabel, checklist, atau ilustrasi perbandingan jika relevan.

#### SEO Output (per artikel)
- [ ] SEO Title
- [ ] Meta Description
- [ ] URL Slug
- [ ] Focus Keyword + Secondary Keywords + Semantic/LSI Keywords
- [ ] Related Entities
- [ ] People Also Ask
- [ ] FAQ (5-7 Q&A)
- [ ] Suggested Schema (FAQ, Article, Breadcrumb)

#### Topical Authority (per artikel)
- [ ] Parent Topic
- [ ] Child Topic
- [ ] Related Topic
- [ ] Supporting Topic
- [ ] Suggested Internal Links
- [ ] Suggested Next Article

#### E-E-A-T (wajib tampilkan pengalaman nyata Bengkel Wiguna)
- [ ] Proses diagnosis
- [ ] Compression test
- [ ] Leak down test
- [ ] Pemeriksaan endoscope
- [ ] Inspeksi tekanan oli
- [ ] Analisis sebelum pembongkaran mesin
- [ ] Penggunaan peralatan khusus

#### GEO Optimization (untuk ChatGPT, Gemini, Perplexity, Claude, Google AI Overview)
- [ ] Ringkasan singkat di awal
- [ ] Checklist
- [ ] Langkah-langkah
- [ ] Tabel perbandingan
- [ ] FAQ
- [ ] Jawaban langsung terhadap pertanyaan pengguna

#### Internal Linking (di akhir setiap artikel)
- [ ] Artikel terkait
- [ ] Artikel lanjutan
- [ ] Artikel pendukung
- [ ] Anchor text natural (bukan keyword stuffing)

#### Quality Standard (sebelum menyelesaikan artikel)
- [ ] Search intent terjawab sepenuhnya
- [ ] Informasi akurat dan relevan
- [ ] Struktur mudah dipindai (scannable)
- [ ] Konten lebih bernilai dari artikel umum di halaman 1 Google
- [ ] Peluang tinggi muncul di AI Search & Google AI Overview
- [ ] Menjadi bagian ekosistem Topical Authority (bukan artikel berdiri sendiri)

#### Artikel yang harus dibuat:
- [ ] **Pillar Page:** `/overhaul-engine-mobil` (1200+ words, target "overhaul mesin mobil", "turun mesin", "semi overhaul")
  - Output: SEO Summary + Full Article + Topical Authority Section
- [ ] `/apa-bedanya-semi-overhaul-dan-overhaul-mesin` (comparison content)
- [ ] `/tanda-mesin-mobil-harus-overhaul` (gejala & diagnosis)
- [ ] `/biaya-overhaul-mesin-mobil-2026` (tabel harga + estimasi)
- [ ] `/proses-turun-mesin-mobil-step-by-step` (how-to, checklist)
- [ ] `/berapa-lama-overhaul-mesin-mobil` (FAQ-style, durasi & proses)

#### Setup internal linking: Pillar ← Cluster (Cluster ↔ Cluster)
- **Branch:** `feat/seo-cluster-overhaul`
- **Output file per artikel:** `.claude/cluster_overhaul/[slug]-seo-brief.md`

### 2.2 — Content Cluster #3: Service AC & Reset AC Mobil
- [ ] Buat pillar page: `/service-ac-mobil-depok` (1200+ words, target "service AC mobil depok", "reset AC mobil", "isi freon mobil")
- [ ] Buat 4-5 cluster articles:
  - [ ] `/tanda-ac-mobil-bermasalah` (ac tidak dingin, bocor, bau)
  - [ ] `/berapa-biaya-service-ac-mobil-2026`
  - [ ] `/cara-reset-ac-mobil-bodi`
  - [ ] `/jenis-freon-ac-mobil-r134a-vs-r1234yf`
  - [ ] `/isi-freon-ac-mobil-berapa-gram`
- [ ] Setup internal linking: Pillar ← Cluster
- [ ] **Branch:** `feat/seo-cluster-ac`


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
4. [FEAT] Phase 2.2 — Cluster Service AC (Content, Medium Impact)
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
