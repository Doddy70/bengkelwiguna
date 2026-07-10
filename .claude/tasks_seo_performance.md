# SEO Performance Implementation Tasks — STRICT RULES
> Generated: 2026-07-10
> Source: SEO Audit + Content Authority Adjustment Document
> Status: READY TO EXECUTE
> **RULE: Semua agent WAJIB mengikuti rules di bawah ini tanpa pengecualian**

---

## STRICT WORKFLOW (WAJIB DIIKUTI)

```
Keyword Universe
       ↓
Search Intent
       ↓
SERP Analysis
       ↓
Content Gap
       ↓
Entity Mapping
       ↓
Knowledge Graph
       ↓
Article (Knowledge Object)
       ↓
Internal Linking
       ↓
Monitoring
```

> **PERINGATAN:** AI TIDAK BOLEH langsung menulis artikel tanpa melewati semua langkah di atas.
> Jika跳过 langkah manapun = RULE VIOLATION.

---

## STRICT RULES (GLOBAL — BERLAKU UNTUK SEMUA PHASE)

### R1. Keyword Governance (⭐⭐⭐⭐⭐ — PALING PENTING)
**Status** yang WAJIB digunakan untuk setiap keyword:

| Status | Definisi |
|--------|----------|
| `NOT_STARTED` | Belum ada artikel |
| `IN_PROGRESS` | Sedang dalam pengerjaan |
| `PUBLISHED` | Sudah publish, belum terindex |
| `INDEXED` | Sudah terindex Google |
| `RANKING` | Sudah masuk top 50 |
| `REFRESH_REQUIRED` | Perlu diupdate |
| `MERGED` | Di-gabung dengan artikel lain |
| `REDIRECTED` | Di-redirect ke URL lain |
| `DEPRECATED` | Tidak digunakan lagi |

**aturan:**
- Setiap keyword hanya boleh memiliki SATU status
- TIDAK BOLEH ada duplicate content
- TIDAK BOLEH ada keyword cannibalization
- AI wajib cek keyword status SEBELUM membuat artikel baru
- AI tahu artikel mana yang HARUS diupdate, bukan membuat baru

**Output per keyword:** `.claude/seo-intelligence/keyword-registry.md`

---

### R2. Search Intent Classification (WAJIB)
AI TIDAK BOLEH menulis artikel tanpa mengklasifikasikan intent terlebih dahulu.

| Intent | Contoh Keyword |
|--------|---------------|
| `Informational` | Mesin makan oli, penyebab setir bergetar |
| `Commercial Investigation` | Bengkel service AC mobil Depok |
| `Transactional` | Booking service kaki-kaki |
| `Navigational` | Bengkel Wiguna |
| `Local` | Overhaul mesin mobil Depok |
| `Emergency` | Mobil overheat di jalan tol |
| `Comparison` | Semi overhaul vs overhaul mesin |

**Contoh:**
```
Mesin makan oli         → Informational
Overhaul mesin Depok    → Transactional + Local
Semi Overhaul Avanza    → Commercial Investigation + Local
```

**Output:** Search Intent Classification per keyword

---

### R3. Vehicle Entity Layer (WAJIB untuk setiap artikel yang relevan)
Setiap artikel yang membahas komponen mesin WAJIB menyertakan relasi ke:

**Brand:**
Toyota, Honda, Suzuki, Mitsubishi, Mazda, BMW, Mercedes, Hyundai, Kia, Nissan, Isuzu, Daihatsu, Wuling, Chevrolet, Ford

**Model Populer:**
Avanza, Innova, Fortuner, Rush, Brio, Jazz, HR-V, CR-V, Civic, Xpander, Pajero, Alphard, Calya, Agya, Sigra, Ertiga, Terios, Kijang, Rush, Veloz

**Engine Codes:**
1NR, 2NR, 2KD, 2TR, 1KZ, L15, K24, 4N15, 4D56, 2AZ, M15A, D16A, D17A, N12A, K3VE, 4G92

**Contoh output:**
```
Semi Overhaul
├─ Toyota → Avanza, Innova, Fortuner, Rush, Calya
├─ Honda → Brio, Jazz, HR-V, CR-V, Civic
├─ Engine: 1NR, 2NR, 2KD, L15, K24
```

---

### R4. Problem → Service Mapping (WAJIB)
AI WAJIB membuat graph ini untuk setiap problem:

```
Symptom (Gejala)
      ↓
Component (Komponen)
      ↓
Diagnostic Test (Tes Diagnosa)
      ↓
Service (Layanan)
```

**Contoh:**
```
Asap Putih → Head Gasket → Compression Test → Semi Overhaul
Mesin Overheat → Water Pump → Temperature Test → Overhaul
Mesin Makan Oli → Ring Piston / Valve Seal → Leak Down Test → Semi Overhaul
Setir Bergetar → Tie Rod → Play Test → Service Kaki-Kaki
AC Tidak Dingin → Kompresor → Tekanan AC → Service AC
```

---

### R5. Knowledge Object (BUKAN Article-Based)
AI TIDAK berpikir dalam bentuk "artikel". Semua content adalah **Knowledge Object**.

**Struktur Knowledge Object:**
```
Entity
├─ Symptoms
├─ Causes
├─ Repair Methods
├─ Vehicles
├─ Services
├─ Related Articles
├─ FAQs
├─ Videos
├─ Images
└─ Specifications
```

**Contoh:**
```
Ring Piston
├─ Symptoms: Mesin makan oli, tenaga turun, asap hitam
├─ Causes: Aus, rusak, seal lemah
├─ Repair: Penggantian ring piston, honing
├─ Vehicles: Semua jenis mobil
├─ Services: Semi Overhaul, Overhaul Mesin
├─ Articles: [links]
├─ FAQs: [links]
├─ Videos: [links]
└─ Specs: Ring standar, ring oversize
```

---

### R6. Evidence Requirement (WAJIB)
Setiap artikel WAJIB memiliki minimal SATU dari berikut:

- [ ] Checklist
- [ ] Diagram
- [ ] Photo
- [ ] Video
- [ ] Measurement (hasil pengukuran)
- [ ] Specification (spesifikasi teknis)
- [ ] Torque Spec
- [ ] Repair Flow
- [ ] Inspection Flow
- [ ] Decision Tree

**TANPA evidence = E-E-A-T violation.**

---

### R7. No Guess Policy (STRICT)
AI TIDAK BOLEH menulis:
```
"Biasanya rusak karena..."
```

AI WAJIB menulis:
```
"Kemungkinan penyebab yang umum ditemukan:
1. [penyebab 1]
2. [penyebab 2]
3. [penyebab 3]
Diagnosis tetap diperlukan."
```

**Diagnosis Tree WAJIB digunakan untuk setiap gejala:**
```
Mobil makan oli
        ↓
Ada asap?
   Ya → Tidak
    ↓       ↓
Valve   Ring Piston
Seal    Compression Test
        ↓
    Normal?
   Ya → Tidak
    ↓       ↓
Valve   Ring Piston
Seal    aus
```

---

### R8. Diagnosis Tree (WAJIB)
Untuk setiap gejala, AI WAJIB membuat Diagnosis Tree:

Format:
```
[Symptom]
   ↓
[Pertanyaan 1]
   ├─ Ya → [Next Step / Component]
   └─ Tidak → [Next Step / Component]
        ↓
[Diagnostic Test]
   ├─ Normal → [Komponen A]
   └─ Abnormal → [Komponen B]
        ↓
[Service Recommendation]
```

---

### R9. Content Reuse (WAJIB)
AI TIDAK BOLEH membuat konten yang sudah ada.

**Prosedur:**
1. Cek Knowledge Object yang sudah ada
2. Jika sudah ada → REUSE, jangan bikin baru
3. Jika ada partial match → UPDATE, jangan buat dari nol
4. Jika benar-benar baru → BUAT BARU

**Contoh:**
```
Artikel baru: "Penyebab Mesin Makan Oli"
├─ Cek Ring Piston (sudah ada) → REUSE
├─ Cek Valve Seal (sudah ada) → REUSE
├─ Cek Turbo (belum ada) → BUAT baru
└─ Final Article = Compilation of Knowledge Objects
```

---

### R10. Authority Score (MIN 90 — WAJIB)
Sebelum publish, AI WAJIB memberikan skor:

| Kategori | Skor |
|----------|------|
| SEO Score | ___/100 |
| E-E-A-T | ___/100 |
| Entity Coverage | ___/100 |
| Search Intent | ___/100 |
| Topical Completeness | ___/100 |
| GEO (AI Search) | ___/100 |
| Internal Linking | ___/100 |
| Media Coverage | ___/100 |
| Freshness | ___/100 |
| Conversion Layer | ___/100 |

**TOTAL: ___/100**

> **RULE: Jika TOTAL < 90 → JANGAN PUBLISH**

---

### R11. Trust Signals (WAJIB di setiap artikel)
Setiap artikel WAJIB memiliki section:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Artikel ini ditinjau oleh:
👨‍🔧 [Nama Senior Technician]
📅 Tanggal ditinjau: [Tanggal]
🔧 Alat diagnosis yang digunakan: [Alat]
⏱️ Estimasi waktu pengerjaan: [Waktu]
✅ Garansi: [Jika relevan]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

### R12. Citation Policy (WAJIB untuk fakta teknis)
Untuk spesifikasi teknis, AI WAJIB memberi referensi:

**Brands:**
API (American Petroleum Institute), SAE (Society of Automotive Engineers), Toyota, Honda, Mitsubishi, Suzuki, Bosch, Denso, NGK, ZF, Aisin, Hitachi, KYB, Showa, Magneti Marelli

**Standards:**
JIS, DIN, ISO, SAE, API, ASTM

**Format:**
```
[Spesifikasi]
Sumber: [Brand] Official Specification / [Standard] Standard
Link: [jika ada]
```

---

### R13. Conversion Layer (WAJIB di setiap artikel)

Urutan WAJIB:
```
1. Soft CTA (read more related article)
       ↓
2. Checklist PDF (downloadable)
       ↓
3. Booking Inspection (link to booking page)
       ↓
4. WhatsApp (direct chat link)
       ↓
5. Free Diagnosis (promotion)
       ↓
6. Related Services (internal links)
```

---

### R14. Indexing Checklist (WAJIB sebelum publish)

| Item | Status |
|------|--------|
| Canonical URL | [ ] Done |
| Open Graph Tags | [ ] Done |
| Twitter Card | [ ] Done |
| Schema (Article/FAQ/FAQPage) | [ ] Done |
| Breadcrumb | [ ] Done |
| XML Sitemap inclusion | [ ] Done |
| Noindex? | [ ] No (unless intentional) |
| Robots.txt | [ ] Allowed |
| Internal Links | [ ] Done |
| Image ALT text | [ ] Done |
| Image Filename | [ ] SEO-optimized |
| Lazy Load | [ ] Enabled |
| WebP Format | [ ] Converted |
| Structured Data | [ ] Validated |

---

### R15. AI Search Optimization (WAJIB)

Setiap artikel WAJIB menjawab:

| Pertanyaan | Wajib Dijawab? |
|------------|---------------|
| Apa? | Ya |
| Mengapa? | Ya |
| Bagaimana? | Ya |
| Kapan? | Ya |
| Berapa lama? | Ya |
| Berapa biaya? | Ya |
| Risikonya? | Ya |
| Alternatifnya? | Ya |
| Kesimpulan? | Ya |

---

### R16. Search Console Feedback Loop (WAJIB)

**Weekly Monitoring Checklist:**

```
Setiap minggu, cek:
├─ [ ] Query baru yang muncul
├─ [ ] CTR rendah → Rewrite Meta
├─ [ ] Position 8 → Tambah FAQ
├─ [ ] Position 4 → Verifikasi竞争对手
├─ [ ] Impression naik → Jaga posisi
├─ [ ] Cannibalization Detection
├─ [ ] Orphan Pages
├─ [ ] Broken Links
├─ [ ] Lost Keywords
├─ [ ] New Keywords
├─ [ ] Featured Snippet Opportunities
└─ [ ] AI Overview Visibility
```

---

### R17. Cannibalization Detection (WAJIB sebelum bikin artikel baru)

Sebelum bikin artikel baru, WAJIB cek:

```
Cek 2 artikel yang mungkin overlap:
├─ Keyword Overlap → [% overlap]
├─ Search Intent → [sama/beda]
├─ SERP Competition → [analisis]
├─ Anchor Text → [termasuk/berbeda]
├─ Canonical → [perlu disetting?]
└─ Merge Required? → [Ya/Tidak]
```

**Jika overlap > 70% → MERGE, jangan bikin baru.**

---

### R18. Local SEO Layer (WAJIB untuk setiap artikel)

Setiap artikel WAJIB menyertakan variations:

```
Base: Semi Overhaul
       ↓
Lokal Variations:
├─ Semi Overhaul di Depok
├─ Overhaul Mesin Toyota Depok
├─ Turun Mesin Honda Depok
├─ Overhaul Avanza Depok
├─ Semi Overhaul Innova Diesel
├─ Overhaul Pajero di Margonda
└─ [Other localities: Cinere, Sawangan, Cibubur, Jagakarsa, Jakarta Selatan, Bekasi]
```

**Lokal entities:**
Depok, Margonda, Cinere, Sawangan, Cibubur, Jagakarsa, Jakarta Selatan, Bekasi, Cimanggis, Beji, Pancoran Mas

---

### R19. Media Strategy (WAJIB)

Setiap artikel WAJIB memiliki:
- [ ] Hero Image
- [ ] Diagram (jika proses)
- [ ] Tabel (jika perbandingan)
- [ ] Infographic (jika kompleks)
- [ ] Video (jika ada)
- [ ] Process Illustration (jika step-by-step)
- [ ] Checklist (format)
- [ ] Comparison Chart (jika relevan)

---

### R20. Content Freshness (WAJIB untuk existing articles)

**Every 6 months, review:**
- [ ] Statistics → Update dengan data terbaru
- [ ] FAQ → Tambah/ubah sesuai query baru
- [ ] Internal Links → Periksa broken links
- [ ] Images → Ganti jika outdated
- [ ] Video → Tambah jika ada baru
- [ ] Schema → Re-validate
- [ ] Publish Date → Update
- [ ] Modified Date → Update

---

## PHASE 0 — SEO INTELLIGENCE LAYER (NEW — SEBELUM SEMUA PHASE)

> **RULE: Agent TIDAK BOLEH mulai bikin artikel tanpa menyelesaikan Phase 0 terlebih dahulu.**

### 0.1 — Keyword Universe
- [ ] Buat keyword list komprehensif untuk setiap cluster
- [ ] Kategorisasi: [Service], [Problem], [Component], [Vehicle], [Location]
- [ ] Assign Keyword Status (R1)
- [ ] Output: `.claude/seo-intelligence/keyword-registry.md`

### 0.2 — SERP Reverse Engineering
- [ ] Analisis Top 10 untuk setiap target keyword
- [ ] Catat: URL, Domain Authority, Word Count, FAQ Count, Heading Count, Image Count, Schema, Internal/External Links, Freshness, Entity Coverage
- [ ] Identifikasi: Missing Topics, Opportunity
- [ ] Output: `.claude/seo-intelligence/serp-analysis/[keyword].md`

### 0.3 — Content Gap Analysis
- [ ] Bandingkan Top 10 dengan Knowledge Object Bengkel Wiguna
- [ ] Identifikasi gap: topik yang belum dibahas competitor
- [ ] Prioritas: High Opportunity (low competition, high intent)
- [ ] Output: `.claude/seo-intelligence/content-gap/[cluster].md`

### 0.4 — Entity Mapping
- [ ] Map semua entities untuk setiap cluster
- [ ] Main Entity + Related Entities + Vehicles + Components
- [ ] Output: `.claude/seo-intelligence/entity-mapping/[cluster].md`

### 0.5 — Knowledge Graph Building
- [ ] Bangun graph: Symptom → Component → Diagnostic → Service
- [ ] Parent, Children, Sibling relationships
- [ ] Output: `.claude/seo-intelligence/knowledge-graph/[cluster].md`

### 0.6 — Cluster Coverage Roadmap
- [ ] Target: 100 artikel
- [ ] Progress tracker: [X]%
- [ ] Coverage: [Y]%
- [ ] Missing Topics: [Z]
- [ ] Output: `.claude/seo-intelligence/cluster-roadmap.md`

---

## PHASE 1 — KNOWLEDGE BASE SETUP (NEW)

### 1.1 — Build Knowledge Base Structure
```
.claude/seo-intelligence/
├── keyword-registry.md          # Semua keyword + status
├── cluster-roadmap.md           # Progress tracker
├── serp-analysis/               # SERP analysis per keyword
│   └── [keyword].md
├── content-gap/                 # Content gap analysis
│   └── [cluster].md
├── entity-mapping/              # Entity mapping
│   └── [cluster].md
├── knowledge-graph/             # Knowledge graph
│   └── [cluster].md
├── knowledge-objects/          # Reusable knowledge objects
│   └── [entity].md
├── intent-library/             # Search intent classification
├── faq-library/                # Reusable FAQ library
├── media-library/              # Image/video references
├── schema-templates/           # Schema templates
└── content-templates/         # Article templates
```

### 1.2 — Keyword Research: Cluster Overhaul Engine
- [ ] Keyword Universe untuk Semi Overhaul / Overhaul / Turun Mesin
- [ ] SERP Analysis untuk 5 target keywords
- [ ] Content Gap Analysis
- [ ] Entity Mapping: Ring Piston, Valve Seal, Head Gasket, Cylinder Head, dll.
- [ ] Knowledge Graph Building
- [ ] Assign Keyword Status (R1)
- [ ] **Branch:** `feat/seo-cluster-overhaul`

### 1.3 — Keyword Research: Cluster Service AC
- [ ] Keyword Universe untuk Service AC / Reset AC
- [ ] SERP Analysis untuk 5 target keywords
- [ ] Content Gap Analysis
- [ ] Entity Mapping: Kompresor, Freon, Evaporator, Kondensor, dll.
- [ ] Knowledge Graph Building
- [ ] Assign Keyword Status (R1)
- [ ] **Branch:** `feat/seo-cluster-ac`

---

## PHASE 2 — CONTENT CLUSTER

### 2.1 — Content Cluster #2: Overhaul Engine & Turun Mesin

> **Reference:** `.claude/COntent Authority Semi Overhaul.md`

**Workflow per artikel (STRICT):**
```
1. Cek Keyword Status (R1)
2. Klasifikasi Search Intent (R2)
3. SERP Analysis
4. Content Gap Check
5. Entity Mapping (R3)
6. Knowledge Object Assembly (R5)
7. Build Diagnosis Tree (R8)
8. Content Reuse Check (R9)
9. Tulis Artikel
10. Authority Score Check (R10) → MIN 90
11. Add Trust Signals (R11)
12. Add Citations (R12)
13. Add Conversion Layer (R13)
14. Indexing Checklist (R14)
15. AI Search Optimization (R15)
16. Local SEO Layer (R18)
17. Media Strategy (R19)
18. Publish
```

**Artikel yang harus dibuat (dengan strict rules):**

- [ ] **Pillar Page:** `/overhaul-engine-mobil`
  - Search Intent: Commercial Investigation + Transactional + Local
  - Vehicle Entities: Toyota, Honda, Mitsubishi, dll.
  - Knowledge Graph: Semi Overhaul → Ring Piston → Mesin Makan Oli
  - Authority Score: ___/100
  - Output: `.claude/seo-intelligence/cluster-overhaul/pillar-seo-brief.md`

- [ ] `/apa-bedanya-semi-overhaul-dan-overhaul-mesin`
  - Comparison Content
  - Diagnosis Tree wajib
  - Comparison Table wajib
  - Authority Score: ___/100

- [ ] `/tanda-mesin-mobil-harus-overhaul`
  - Problem-based Article
  - Diagnosis Tree: Mesin Makan Oli → Asap → Kompresi → Overhaul
  - Evidence Requirement (R6) wajib
  - Output: `.claude/seo-intelligence/cluster-overhaul/tanda-overhaul-seo-brief.md`

- [ ] `/biaya-overhaul-mesin-mobil-2026`
  - Pricing Article
  - Tabel harga per komponen + estimasi
  - Citation Policy (R12) wajib untuk harga
  - Authority Score: ___/100

- [ ] `/proses-turun-mesin-mobil-step-by-step`
  - How-to Article
  - Step-by-step dengan diagram
  - No Guess Policy (R7) wajib
  - Evidence Requirement (R6) wajib

- [ ] `/berapa-lama-overhaul-mesin-mobil`
  - FAQ-style Article
  - AI Search Optimization (R15) prioritas tinggi
  - People Also Ask focus

**Internal Linking Setup:**
- Pillar ← Cluster
- Cluster ↔ Cluster (sesuai Knowledge Graph)
- Output: `.claude/seo-intelligence/cluster-overhaul/internal-linking-plan.md`

**Branch:** `feat/seo-cluster-overhaul`

---

### 2.2 — Content Cluster #3: Service AC & Reset AC Mobil

**Artikel yang harus dibuat:**

- [ ] **Pillar Page:** `/service-ac-mobil-depok`
  - Search Intent: Commercial Investigation + Local
  - Vehicle Entities untuk AC
  - Authority Score: ___/100

- [ ] `/tanda-ac-mobil-bermasalah`
  - AC tidak dingin, bocor, bau
  - Diagnosis Tree: Tidak Dingin → Kompresor / Freon / Evaporator

- [ ] `/berapa-biaya-service-ac-mobil-2026`
  - Pricing Article
  - Tabel harga per layanan

- [ ] `/cara-reset-ac-mobil-bodi`
  - How-to Article
  - Step-by-step wajib
  - Vehicle-specific untuk Bodi

- [ ] `/jenis-freon-ac-mobil-r134a-vs-r1234yf`
  - Comparison Article
  - Tabel perbandingan wajib

- [ ] `/isi-freon-ac-mobil-berapa-gram`
  - Specification Article
  - Citation Policy wajib
  - Vehicle-specific data

**Internal Linking Setup:** Pillar ← Cluster
**Branch:** `feat/seo-cluster-ac`

---

## PHASE 3 — EXISTING ARTICLES UPGRADE (Content Depth)

### 3.1 — Upgrade Service Kaki-Kaki Pillar Page
- [ ] **Post ID:** (akan dicek dari WordPress)
- [ ] Expand jadi 1500+ words
- [ ] Add Diagnosis Tree
- [ ] Authority Score: ___/100
- [ ] Refresh: Evidence, Media, FAQ
- [ ] **Branch:** `feat/seo-content-upgrade`

### 3.2 — Upgrade biaya-service-kaki-kaki Article
- [ ] **Post ID:** 22095
- [ ] Expand jadi 2000+ words
- [ ] Add Tabel harga detail per komponen
- [ ] Add Step-by-step process
- [ ] Add FAQ (5-7 Q&A)
- [ ] Authority Score: ___/100
- [ ] **Branch:** `feat/seo-content-upgrade`

### 3.3 — Upgrade Kyoto Shaking Machine Article
- [ ] **Post ID:** 22109
- [ ] Expand jadi 2000+ words
- [ ] Add Comparison section
- [ ] Add Video placeholder
- [ ] Authority Score: ___/100
- [ ] **Branch:** `feat/seo-content-upgrade`

---

## PHASE 4 — TECHNICAL SEO

### 4.1 — Core Web Vitals Audit & Fix
- [ ] Lighthouse audit: LCP (< 2.5s), CLS (< 0.1), INP (< 200ms)
- [ ] Fix top 3 issues
- [ ] **Branch:** `fix/seo-core-web-vitals`

### 4.2 — XML Sitemap & Robots.txt
- [ ] Generate XML sitemap
- [ ] Submit ke Google Search Console
- [ ] Verifikasi robots.txt
- [ ] **Branch:** `fix/seo-sitemap-robots`

### 4.3 — Mobile Responsiveness Check
- [ ] Test mobile viewport
- [ ] Fix touch targets (min 48px)
- [ ] **Branch:** `fix/seo-mobile`

### 4.4 — Indexing Audit (R14 enforcement)
- [ ] Audit semua halaman: Canonical, OG, Twitter Card, Schema
- [ ] Fix issues
- [ ] **Branch:** `fix/seo-indexing`

---

## PHASE 5 — OFF-PAGE SEO

### 5.1 — Google Business Profile Optimization
- [ ] Complete 100%
- [ ] Weekly posts (min 2/week)
- [ ] Respond all reviews
- [ ] **Branch:** `feat/seo-gbp-optimization`

### 5.2 — Local Citations & Directory Listings
- [ ] Google Business Profile ✅
- [ ] Bing Places
- [ ] Apple Maps
- [ ] Gojek / Grab
- [ ] Tokopedia / Tokooble
- [ ] OLX Autos
- [ ] Waze
- [ ] Maps.me
- [ ] Foursquare
- [ ] **Branch:** `feat/seo-local-citations`

### 5.3 — Backlink Outreach
- [ ] "Link to Us" page
- [ ] Submit ke Indonesian automotive directories
- [ ] DA 40+ directories
- [ ] **Branch:** `feat/seo-backlinks`

---

## PHASE 6 — SCHEMA & STRUCTURED DATA

### 6.1 — Verify All Structured Data
- [ ] Rich Results Test
- [ ] Fix errors
- [ ] FAQ schema per article
- [ ] Article schema per article
- [ ] Breadcrumb schema per article
- [ ] LocalBusiness schema verification
- [ ] **Branch:** `fix/seo-schema`

---

## PHASE 7 — PERFORMANCE MONITORING (NEW)

> **RULE: Monitoring TIDAK berhenti setelah publish.**

### 7.1 — Weekly Monitoring Checklist (R16)
- [ ] Query baru → Analisis intent → Tambah artikel?
- [ ] CTR rendah → Rewrite meta
- [ ] Position tracking → Tambah FAQ / content
- [ ] Cannibalization Detection (R17)
- [ ] Orphan Pages check
- [ ] Broken Links check
- [ ] **Branch:** `fix/seo-monitoring`

### 7.2 — Monthly Ranking Report
- [ ] Ranking changes per keyword
- [ ] Impression trends
- [ ] CTR trends
- [ ] Featured Snippet opportunities
- [ ] AI Overview visibility
- [ ] **Branch:** `fix/seo-monitoring`

---

## PHASE 8 — CONTENT REFRESH AUTOMATION (NEW)

### 8.1 — Content Lifecycle Management
```
Draft
   ↓
SEO Review (Authority Score MIN 90)
   ↓
Publish
   ↓
Index Check (Google Search Console)
   ↓
Ranking Monitor (Weekly)
   ↓
CTR Analysis
   ↓
Refresh Required? → Ya → Update
   ↓
Republish (Update Modified Date)
```

### 8.2 — Refresh Schedule
- [ ] Every 6 months: Full article review
- [ ] Every 3 months: Price updates
- [ ] Every 1 month: FAQ updates
- [ ] Every week: New queries monitoring
- [ ] **Branch:** `feat/seo-refresh`

---

## EXECUTION ORDER

```
SEQUENCE:
1. [NEW] Phase 0 — SEO Intelligence Layer
   │   (Keyword Research + SERP + Entity + Knowledge Graph)
   │
2. [NEW] Phase 1 — Knowledge Base Setup
   │   (Build folder structure + research for Cluster Overhaul & AC)
   │
3. [FEAT] Phase 2.1 — Cluster Overhaul Engine
   │   (6 articles dengan strict rules R1-R20)
   │
4. [FEAT] Phase 2.2 — Cluster Service AC
   │   (5 articles dengan strict rules R1-R20)
   │
5. [FEAT] Phase 3 — Content Depth Upgrade
   │   (Upgrade existing articles MIN 90 authority score)
   │
6. [FIX]  Phase 4 — Technical SEO
   │   (Core Web Vitals + Sitemap + Mobile + Indexing)
   │
7. [FEAT] Phase 5 — Off-Page SEO
   │   (GBP + Citations + Backlinks)
   │
8. [FIX]  Phase 6 — Schema
   │   (Verify + FAQ schema per article)
   │
9. [NEW] Phase 7 — Performance Monitoring
   │   (Weekly checklist + Monthly ranking report)
   │
10. [NEW] Phase 8 — Content Refresh Automation
     (Lifecycle management + Refresh schedule)
```

---

## QUALITY GATES (STRICT)

> **Tidak ada pengecualian. Semua harus terpenuhi SEBELUM publish.**

### Gate 1: Pre-Writing
- [ ] Keyword Status checked (R1)
- [ ] Search Intent classified (R2)
- [ ] SERP Analysis done
- [ ] Content Gap checked
- [ ] Entity Mapping done
- [ ] Knowledge Graph reference established

### Gate 2: During Writing
- [ ] Evidence Requirement met (R6)
- [ ] No Guess Policy followed (R7)
- [ ] Diagnosis Tree included (R8)
- [ ] Content Reuse applied (R9)
- [ ] Vehicle Entity Layer included (R3)
- [ ] Problem → Service Mapping done (R4)
- [ ] Knowledge Object structured (R5)

### Gate 3: Post-Writing
- [ ] Authority Score MIN 90 (R10)
- [ ] Trust Signals added (R11)
- [ ] Citations added (R12)
- [ ] Conversion Layer complete (R13)
- [ ] Indexing Checklist done (R14)
- [ ] AI Search Optimization done (R15)
- [ ] Local SEO Layer done (R18)
- [ ] Media Strategy done (R19)

### Gate 4: Pre-Publish
- [ ] All internal links verified (200/301)
- [ ] All external links verified
- [ ] Images: ALT text, Filename, Lazy Load, WebP
- [ ] Schema validated
- [ ] No keyword cannibalization
- [ ] No duplicate content

---

## VALIDATION CHECKLIST (After Each Phase)

- [ ] Authority Score MIN 90 per article
- [ ] `curl` untuk setiap link baru → 200/301
- [ ] Schema validated
- [ ] `npm run build --turbopack` passes
- [ ] `npx tsc --noEmit` passes
- [ ] Keyword Status updated di registry
- [ ] Knowledge Object created/updated
- [ ] Internal Linking recorded di graph
- [ ] Push ke GitHub, verify CI passes

---

## METRICS TO TRACK

- [ ] Impressions (target: +20% dalam 30 hari)
- [ ] CTR (target: +5% dalam 30 hari)
- [ ] Average Position (target: top 10)
- [ ] Authority Score average (target: 90+)
- [ ] Coverage percentage (target: 50%+)
- [ ] AI Overview visibility
- [ ] Featured Snippet count

---

## ROADMAP SCORE (Current vs Target)

| Area | Current | Target |
|------|---------|--------|
| Technical SEO | 10/10 | 10/10 |
| Internal Linking | 10/10 | 10/10 |
| Content Cluster | 9/10 | 10/10 |
| E-E-A-T | 9/10 | 10/10 |
| GEO | 9/10 | 10/10 |
| Schema | 9/10 | 10/10 |
| Local SEO | 8/10 | 10/10 |
| Knowledge Graph | 5/10 → 9/10 | 10/10 |
| Entity SEO | 5/10 → 9/10 | 10/10 |
| SERP Intelligence | 4/10 → 9/10 | 10/10 |
| Monitoring & Refresh | 5/10 → 9/10 | 10/10 |
| Keyword Governance | 0/10 → 9/10 | 10/10 |
| AI Workflow | 8/10 | 10/10 |
| **OVERALL** | **9/10** | **10/10** |

---

**Generated by:** Claude Code — SEO Performance Implementation with Strict Rules
**Date:** 2026-07-10
**Version:** 3.0.0 — STRICT RULES EDITION
**Reference:** `.claude/Adjusment Insight untuk Task Seo Perfomance Implement.md`
