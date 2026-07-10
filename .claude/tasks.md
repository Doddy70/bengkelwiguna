# Task List — Bengkel Wiguna V3 (UI/UX Redesign)

> **VERSION:** 2.4.0  
> **LAST UPDATED:** 2026-07-10

---

## ✅ COMPLETED TASKS

### Task 1: Navigation Menu Sync
- **Status:** ✅ COMPLETED & FROZEN
- **Priority:** 🔴 HIGH
- **Decision:** 2026-06-22 — Mega menu implementation DECLINED
- **Reason:** Mega menu sync was identified as contributing factor in previous crash incidents
- **Action Taken:**
  1. ✅ Fixed MobileMenu 'Lokasi' link: `/contact` → `/lokasi`
  2. ✅ Added 'Layanan Spesialis' menu item to MobileMenu
  3. ✅ Added 'Tentang Wiguna' to match both components
  4. ✅ Standardized menu item naming
  5. ✅ DELETED `feat/nav-menu-sync` branch
  6. ✅ Navigation stays as simple dropdown (no mega menu)

### Task 2: Agent Knowledge Base (2026-06-20)
- **Status:** ✅ COMPLETED
- **Priority:** 🔴 HIGH
- **Commit:** `460f94e8`
- **Action Taken:**
  - Added `hotspot-ui-implementation` skill
  - Added `hotspot-ui-safe-implementation` pattern
  - Updated `AGENT_SYNC.md` with Known Incidents

### Task 3: SEO Content Cluster Kaki-Kaki — Broken Links Fix
- **Status:** ✅ COMPLETED
- **Date:** 2026-07-10
- **Action Taken:**
  - Fixed 15 broken internal links across 3 WordPress posts
  - Post 22095 (biaya-service-kaki-kaki): 5 links fixed
  - Post 22108 (8-tanda-ball-joint-rusak): 4 links fixed
  - Post 22107 (setir-bergetar): 6 links fixed
  - Replaced dead URLs (`/balancing`, `/spooring`, old slugs) with correct URLs
  - All links verified: HTTP 200/301 ✅

### Task 4: SEO Quick Wins Implementation (CITE Audit)
- **Status:** ✅ COMPLETED
- **Date:** 2026-07-09
- **Quick Wins Applied:**
  1. ✅ HTTP Security Headers (HSTS, CSP, X-Frame-Options, Referrer-Policy, Permissions-Policy) — `next.config.ts`
  2. ✅ AggregateRating Schema Fix: `ratingValue: "4.7"`, `reviewCount: "928"` — `src/lib/seo.ts`
  3. ✅ Trust Signals Fix: "928+ review pelanggan", rating 4.5→4.7 — `TrustSignals.tsx`
  4. ✅ Google Business Profile schema (already in place, no changes needed)
  5. ✅ Services Archive SEO: H1 + title + meta keywords updated — `ServicesArchiveClient.tsx`, `services/page.tsx`

---

## 🔄 ACTIVE / IN PROGRESS

### Task 6: SEO Internal Linking Phase 1
- **Status:** 🔄 IN PROGRESS
- **Priority:** 🔴 HIGH
- **Branch:** `fix/seo-internal-links-phase1`
- **Created:** 2026-07-10
- **Scope:**
  - [ ] 1.1 Pillar Page: Add cluster navigation section (→ all 11 cluster articles)
  - [ ] 1.2 Cluster Articles: Add reciprocal internal links (Cluster ↔ Cluster)
  - [ ] Target: Every cluster article linked minimum 1x from pillar + 1x from another cluster
- **Reference:** `.claude/tasks_seo_performance.md` § Phase 1

---

## 📋 PENDING TASKS (SEO Performance)

> **Full task breakdown:** `.claude/tasks_seo_performance.md`

> **⚠️ STRICT RULES: Semua agent WAJIB mengikuti 20 rules di tasks_seo_performance.md § STRICT RULES (R1-R20)**

### PHASE 0: SEO Intelligence Layer (NEW)
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 0.1 | Keyword Universe & Registry (R1: Keyword Governance) | 🔴 HIGH | `feat/seo-intelligence` | Pending |
| 0.2 | SERP Reverse Engineering per Cluster | 🔴 HIGH | `feat/seo-intelligence` | Pending |
| 0.3 | Content Gap Analysis | 🔴 HIGH | `feat/seo-intelligence` | Pending |
| 0.4 | Entity Mapping + Vehicle Entity Layer (R3) | 🔴 HIGH | `feat/seo-intelligence` | Pending |
| 0.5 | Knowledge Graph Building (R4, R5) | 🔴 HIGH | `feat/seo-intelligence` | Pending |

### PHASE 1: Knowledge Base Setup (NEW)
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 1.1 | Build Knowledge Base folder structure | 🔴 HIGH | `feat/seo-intelligence` | Pending |
| 1.2 | Keyword Research: Cluster Overhaul Engine (strict rules R1-R20) | 🔴 HIGH | `feat/seo-cluster-overhaul` | Pending |
| 1.3 | Keyword Research: Cluster Service AC (strict rules R1-R20) | 🔴 HIGH | `feat/seo-cluster-ac` | Pending |

### PHASE 2: Content Cluster
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 2.1 | Content Cluster #2: Overhaul Engine (pillar + 5 articles) — Authority MIN 90 | 🔴 HIGH | `feat/seo-cluster-overhaul` | Pending |
| 2.2 | Content Cluster #3: Service AC & Reset AC (pillar + 5 articles) — Authority MIN 90 | 🔴 HIGH | `feat/seo-cluster-ac` | Pending |

### PHASE 3: Content Depth Upgrade
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 3.1 | Upgrade Service Kaki-Kaki Pillar Page (Authority MIN 90) | 🟠 MED | `feat/seo-content-upgrade` | Pending |
| 3.2 | Upgrade biaya-service-kaki-kaki → 2000+ words (Authority MIN 90) | 🟠 MED | `feat/seo-content-upgrade` | Pending |
| 3.3 | Upgrade Kyoto Shaking Machine → 2000+ words (Authority MIN 90) | 🟠 MED | `feat/seo-content-upgrade` | Pending |

### PHASE 4: Technical SEO
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 4.1 | Core Web Vitals Audit & Fix (LCP, CLS, INP) | 🔴 HIGH | `fix/seo-core-web-vitals` | Pending |
| 4.2 | XML Sitemap + Robots.txt | 🟠 MED | `fix/seo-sitemap-robots` | Pending |
| 4.3 | Mobile Responsiveness Check | 🟠 MED | `fix/seo-mobile` | Pending |
| 4.4 | Indexing Audit (R14: Canonical, OG, Schema, Breadcrumb) | 🔴 HIGH | `fix/seo-indexing` | Pending |

### PHASE 5: Off-Page SEO
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 5.1 | Google Business Profile Optimization | 🟠 MED | `feat/seo-gbp-optimization` | Pending |
| 5.2 | Local Citations & Directory Listings (10+ directories) | 🟠 MED | `feat/seo-local-citations` | Pending |
| 5.3 | Backlink Outreach | 🟢 LOW | `feat/seo-backlinks` | Pending |

### PHASE 6: Schema & Structured Data
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 6.1 | Verify all schema + FAQ/Article/Breadcrumb schema per article | 🟢 LOW | `fix/seo-schema` | Pending |

### PHASE 7: Performance Monitoring (NEW)
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 7.1 | Weekly Monitoring (Impression, CTR, Ranking, Cannibalization) | 🔴 HIGH | `fix/seo-monitoring` | Pending |
| 7.2 | Monthly Ranking Report + AI Overview visibility | 🟠 MED | `fix/seo-monitoring` | Pending |

### PHASE 8: Content Refresh Automation (NEW)
| # | Task | Priority | Branch | Status |
|---|------|----------|--------|--------|
| 8.1 | Content Lifecycle Management (Draft→Publish→Refresh→Republish) | 🟠 MED | `feat/seo-refresh` | Pending |
| 8.2 | 6-Monthly Full Article Refresh Schedule | 🟠 MED | `feat/seo-refresh` | Pending |

## 🚨 KNOWN INCIDENTS

### Incident: Revert Total ModernEquipment Hotspot Section — 2026-06-20
- **Severity:** 🔴 HIGH
- **Cause:** Runtime browser crash akibat akumulasi perubahan tanpa commit checkpoint. Import statis BookingTrigger (client hook) di SSR context + koordinat hotspot yang salah.
- **Resolution:** `git reset --hard origin/main`
- **Documentation:**
  - `AGENT_SYNC.md` § Known Incidents
  - `.agents/skills/hotspot-ui-implementation/SKILL.md`
  - `conductor/patterns/hotspot-ui-safe-implementation.md`

---

## ✅ RECENTLY COMPLETED (Full List)

- [x] hero-slider-fix
- [x] blog-archive-bento
- [x] seasonal-promo-bento
- [x] bento-brand-refinement
- [x] aceternity-carousel
- [x] glassmorphism-faq
- [x] about-contact-redesign
- [x] footer-redesign
- [x] nav-menu-sync
- [x] agent-knowledge-docs-2026-06-20
- [x] semi-overhaul-hotspot-panel-info (2026-06-22)
- [x] modern-equipment-v3-hotspot (2026-06-22)
- [x] seo-quick-wins-cite-audit (2026-07-09)
- [x] seo-content-cluster-kaki-kaki-broken-links-fix (2026-07-10)

---

## 📊 EXECUTION ORDER (STRICT)

```
ORDER OF OPERATIONS:
EXECUTION ORDER:
1. [START] Phase 0 — SEO Intelligence Layer (Keyword Research + SERP + Entity + Knowledge Graph)
2. [NEXT] Phase 1 — Knowledge Base Setup (Build folder structure + research)
3. [NEXT] Phase 2.1 — Cluster Overhaul Engine (6 articles, strict rules R1-R20)
4. [NEXT] Phase 2.2 — Cluster Service AC (5 articles, strict rules R1-R20)
5. [NEXT] Phase 3 — Content Depth Upgrade (Upgrade existing articles, MIN 90 authority)
6. [NEXT] Phase 4 — Technical SEO (Core Web Vitals + Sitemap + Mobile + Indexing)
7. [NEXT] Phase 5 — Off-Page SEO (GBP + Citations + Backlinks)
8. [NEXT] Phase 6 — Schema (Verify + FAQ schema per article)
9. [NEXT] Phase 7 — Performance Monitoring (Weekly checklist + Monthly report)
10. [NEXT] Phase 8 — Content Refresh Automation (Lifecycle + Schedule)
```

---

**Generated by:** Claude Code  
**Date:** 2026-07-10  
**Version:** 2.4.0
