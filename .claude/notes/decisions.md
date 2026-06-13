# Architecture Decisions — Bengkel Wiguna Project

> **Document:** Keputusan arsitektur yang sudah dibuat  
> **Status:** Living document  
> **Last Updated:** 2026-06-12

---

## 1. FRONTEND ARCHITECTURE

### Decision: Headless CMS with Next.js Frontend

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Initial project setup

**Decision:**
- **Frontend:** Next.js 16.0+ (App Router + Turbopack)
- **Backend:** WordPress as Headless CMS
- **Integration:** WordPress REST API (`/bw/v1/` + `/wp/v2/`)

**Rationale:**
1. WordPress sudah familiar bagi tim content
2. Next.js memberikan performance dan SEO yang baik
3. Headless architecture memungkinkan multi-platform
4. REST API standar industri

**Alternatives Considered:**
- Pure WordPress theme (rejected: performance issues)
- Separate Laravel backend (rejected: overkill untuk content management)

---

## 2. FRONTEND VARIANTS

### Decision: bexon/ as Active Frontend

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Active vs Deprecated frontend

**Decision:**
- **Active Frontend:** `bexon/` (Stable, production-ready)
- **Deprecated Frontend:** `bengkel-wiguna-nextjs/` (Paused due to infrastructure instability)

**Rationale:**
1. bexon/ sudah stabil dan production-ready
2. bengkel-wiguna-nextjs/ memiliki issues dengan infrastructure
3. Fokus pada satu frontend untuk konsistensi

**Constraints:**
- Semua development baru di `bexon/`
- Jangan modifikasi `bengkel-wiguna-nextjs/` tanpa alasan khusus

---

## 3. STYLING APPROACH

### Decision: Bootstrap 5.3 + Sass

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Styling framework selection

**Decision:**
- **Framework:** Bootstrap 5.3
- **Preprocessor:** Sass
- **Custom Classes:** Brand-specific utilities

**Rationale:**
1. Bootstrap memberikan konsistensi UI
2. Sass memungkinkan modular CSS
3. Brand classes (`bg-brand-blue`, `text-brand-gold`) untuk konsistensi

**Brand Colors:**
| Name | Hex | Usage |
|------|-----|-------|
| Brand Blue | `#224297` | Primary brand color |
| Brand Gold | `#ffd900` | Accent/highlight color |

**Brand Shapes:**
- Main components: 12px border radius (class: `brand-rounded`)

---

## 4. ANIMATION & INTERACTION

### Decision: GSAP + WOW.js + Swiper 11

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Animation library selection

**Decision:**
- **Animation:** GSAP (GreenSock Animation Platform)
- **Scroll Animations:** WOW.js
- **Sliders:** Swiper 11

**Rationale:**
1. GSAP: Industry standard untuk complex animations
2. WOW.js: Lightweight scroll-triggered animations
3. Swiper: Feature-rich slider library

**Constraints:**
- Performance impact harus dipertimbangkan
- CLS harus tetap 0 setelah animasi

---

## 5. API PATTERNS

### Decision: wpFetch/bwFetch Utility Pattern

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** API fetching standardization

**Decision:**
- **`wpFetch(endpoint, options)`**: Wrapper untuk WordPress core REST API (`/wp/v2/`)
- **`bwFetch(endpoint, options)`**: Wrapper untuk custom endpoints (`/bw/v1/`)

**Rationale:**
1. Konsistensi dalam error handling
2. Centralized configuration
3. Easier to mock for testing
4. Clear distinction between core WP and custom endpoints

**Constraints:**
- DILARANG menggunakan `fetch` langsung di komponen UI
- SELALU gunakan utility terstandarisasi

---

## 6. PERFORMANCE TARGETS

### Decision: Core Web Vitals Targets

**Status:** ✅ APPROVED  
**Date:** 2026-06-12  
**Context:** Performance optimization goals

**Decision:**
| Metric | Target | Baseline | Priority |
|--------|--------|----------|----------|
| Performance Score | ≥90 | 72 | 🔴 HIGH |
| LCP | ≤2.5s | 6.4s | 🔴 HIGH |
| FCP | ≤1.8s | 1.85s | 🟡 MEDIUM |
| TBT | ≤200ms | 160ms | ✅ OK |
| CLS | ≤0.1 | 0 | ✅ OK |

**Rationale:**
1. Targets sesuai Google Core Web Vitals guidelines
2. Achievable dengan optimization yang planned
3. CLS 0 harus dipertahankan (sudah excellent)

---

## 7. SEO STRATEGY

### Decision: Rank Math Pro + JSON-LD

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** SEO management

**Decision:**
- **SEO Plugin:** Rank Math Pro
- **Fallback:** Yoast SEO metadata
- **Structured Data:** JSON-LD schemas

**Rationale:**
1. Rank Math Pro memberikan kontrol SEO yang baik
2. JSON-LD untuk structured data
3. Next.js metadata API parse Rank Math API

**Constraints:**
- Canonical links wajib dipertahankan
- next-sitemap.xml wajib di-update
- Google Site Verification wajib dijaga

---

## 8. CMS PLUGIN

### Decision: bw-headless-cms Plugin

**Status:** ✅ APPROVED  
**Date:** 2026-06-08  
**Context:** Custom plugin for headless CMS

**Decision:**
- **Plugin Name:** bw-headless-cms
- **Current Version:** v1.7.0 (Lokal — siap deploy)
- **Previous Version:** v1.6.0 (Live)

**Features in v1.7.0:**
- FAQ fields di REST API (`bw_spesialis_faq` + `bw_spesialis_faq_image`)

**Custom Post Types:**
| CPT | REST Endpoints |
|-----|----------------|
| `services` | `/bw/v1/services-full`, `/bw/v1/services/{slug}` |
| `promosi` | `/bw/v1/promosi-active`, `/bw/v1/promosi/{slug}` |
| `paket_service` | `/bw/v1/paket-service-full`, `/bw/v1/paket-service/{slug}` |
| `layanan_spesialis` | `/bw/v1/layanan-spesialis-full`, `/bw/v1/layanan-spesialis/{slug}` |

---

## 9. AGENT HANDOFF SYSTEM

### Decision: Claude + Maestro Compatible Knowledge Base

**Status:** ✅ APPROVED  
**Date:** 2026-06-12  
**Context:** Multi-agent workflow support

**Decision:**
- **Primary Instruction:** `.claude/CLAUDE.md`
- **State Tracking:** `.claude/state.json`
- **Workflow Guide:** `.claude/workflow.md`
- **Task List:** `.claude/tasks.md`
- **Coding Standards:** `.claude/conventions.md`
- **History:** `.claude/changelog.md`
- **Maestro Context:** `.maestro.md` (existing)

**Rationale:**
1. Multi-agent compatibility
2. Clear handoff between agents
3. State preservation between sessions
4. Standards untuk konsistensi

**Agent Types Supported:**
- Claude (primary)
- Maestro (secondary)
- Gemini/Gemini Pro
- Other AI agents

---

## 10. DEPLOYMENT

### Decision: Vercel Deployment

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Deployment platform

**Decision:**
- **Platform:** Vercel
- **Config:** `vercel.json`
- **Backend:** WordPress at https://backend.bengkelwiguna.com/

**Rationale:**
1. Native Next.js support
2. Easy CI/CD integration
3. Edge network untuk performance
4. Built-in analytics

---

## 11. CONSTRAINTS & GUARDRAILS

### Decision: Zero Initiative Rule

**Status:** ✅ APPROVED  
**Date:** 2026-06-10  
**Context:** Agent behavior constraints

**Decision:**
Agent DILARANG mengubah UI/UX, layout, warna, spacing tanpa izin eksplisit user.

**Rationale:**
1. Mencegah unwanted changes
2. Brand consistency
3. User control over visual changes

**Exceptions:**
- Performance optimization yang tidak mengubah visual
- Bug fixes yang minimal
- Documentation updates

---

## 12. CODE QUALITY

### Decision: Lighthouse CI Integration

**Status:** ✅ APPROVED  
**Date:** 2026-06-12  
**Context:** Performance regression prevention

**Decision:**
- **Tool:** Lighthouse CI
- **Config:** `lighthouse.config.js`
- **Thresholds:**
  - Performance: ≥0.85
  - LCP: ≤2500ms
  - CLS: ≤0.1

**Rationale:**
1. Automated performance monitoring
2. Regression prevention
3. CI/CD integration

---

## Future Decisions (Pending)

- [ ] CDN Provider Selection (Cloudflare vs AWS CloudFront)
- [ ] Image CDN (Cloudinary vsimgix vs native)
- [ ] Real-time Analytics Platform
- [ ] A/B Testing Framework

---

**Generated by:** Claude Opus 4.8  
**Date:** 2026-06-12
