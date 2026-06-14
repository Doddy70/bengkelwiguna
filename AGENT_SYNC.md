# Agent Synchronization — Bengkel Wiguna

> **VERSION:** 1.0.0  
> **LAST UPDATED:** 2026-06-14  
> **PURPOSE:** Single source of truth untuk semua AI agent (Gemini & Claude)

---

## 🎯 OVERVIEW

Dokumen ini menyinkronkan workflow antara agent Gemini dan Claude untuk project Bengkel Wiguna. Semua agent WAJIB membaca file ini sebagai langkah pertama.

---

## 📋 QUICK START (5 Steps)

```
1. Baca file ini (AGENT_SYNC.md)
2. Baca .maestro.md untuk context bisnis
3. Baca .claude/state.json untuk state terkini
4. Pilih task dari .claude/tasks.md
5. Mulai kerja dengan konvensi di bawah
```

---

## 🤖 SUPPORTED AGENTS

| Agent | Model | Context Window | Best For |
|-------|-------|---------------|----------|
| **Gemini** | 3.1 Pro (High) | 1M tokens | Complex reasoning, coding |
| **Gemini** | 3.5 Flash | 1M tokens | Fast tasks, multimodal |
| **Claude** | Opus 4.8 | 1M tokens | Complex reasoning, coding |
| **Claude** | Sonnet 4 | 200K tokens | Balanced tasks |
| **Claude** | Haiku | 200K tokens | Lightweight tasks |

---

## 📁 REQUIRED FILES

| File | Fungsi | Wajib Dibaca |
|------|--------|-------------|
| `AGENT_SYNC.md` | ⬅️ INI - Single source of truth | Ya |
| `.maestro.md` | Workflow context & arsitektur | Ya |
| `.claude/state.json` | Current state machine | Ya |
| `.claude/tasks.md` | Task list dengan status | Ya |
| `.claude/conventions.md` | Coding standards | Ya |
| `.claude/workflow.md` | Detailed phase steps | Rekomendasi |
| `conductor/workflow.md` | CDD methodology | Rekomendasi |

---

## 🔄 UNIFIED WORKFLOW

### Phase Flow
```
AUDIT → ANALYSIS → RECOMMENDATIONS → ADAPTATION → IMPLEMENTATION → MONITORING
   ✅         ✅            ✅              ✅            🚧                ⏸️
```

### Current Active Phase
**IMPLEMENTATION PHASE 1 & 2** (Performance Optimization)

### Task Progress
| Task | Status | Branch |
|------|--------|--------|
| inline-critical-css | ✅ DONE | perf/inline-critical-css |
| minify-assets | ✅ DONE | perf/minify-assets |
| convert-hero-webp | ✅ DONE | perf/convert-hero-webp |
| lazy-loading | ✅ DONE | perf/lazy-loading |
| preload-lcp | ✅ DONE | perf/preload-lcp |
| browser-caching | 🚧 IN PROGRESS | perf/browser-caching |
| gzip-compression | ⏸️ PENDING | perf/compression |
| cdn-setup | ⏸️ PENDING | perf/cdn-setup |
| lighthouse-ci | ⏸️ PENDING | perf/lighthouse-ci |
| web-vitals-rum | ⏸️ PENDING | perf/web-vitals-rum |

---

## 📜 CONVENTIONS (Wajib Dipenuhi)

### Git Commit Format
```
<type>(<scope>): <description>

Contoh:
perf: inline critical CSS for above-the-fold
feat: add new service card component
fix: resolve CLS issue on mobile navigation
```

### Commit Types
| Type | Penggunaan |
|------|------------|
| `feat:` | Fitur baru |
| `fix:` | Bug fix |
| `perf:` | Performance optimization |
| `docs:` | Dokumentasi |
| `refactor:` | Refactoring |
| `test:` | Testing |
| `chore:` | Maintenance |

### Branch Naming
```
<type>/<short-description>

Contoh:
perf/inline-critical-css
perf/browser-caching
fix/cls-regression
```

---

## 🏗️ TECH STACK (ACTUAL - bexon/)

```
Frontend:  Next.js 15.5+ (App Router + Turbopack)
Styling:   Bootstrap 5.3 + Sass
Icons:     Font Awesome
Animations: GSAP + WOW.js
Sliders:   Swiper 11
Backend:   WordPress Headless CMS
API:       /bw/v1/ + /wp/v2/
```

---

## 🔗 API PATTERNS

### Gunakan Utility Terstandarisasi
```typescript
// ✅ Good: Gunakan bwFetch/wpFetch
import { bwFetch } from '@/lib/api';
import { wpFetch } from '@/lib/api';

const services = await bwFetch('/services-full');
const service = await bwFetch('/services/my-slug');
const posts = await wpFetch('/posts');
```

### Dilarang
```typescript
// ❌ Bad: Fetch langsung di komponen
const response = await fetch('https://backend.bengkelwiguna.com/bw/v1/services');
```

---

## 🛡️ GUARDRAILS

| Rule | Enforcement |
|------|-------------|
| **Zero Initiative** | ❌ Jangan ubah UI/UX, layout, warna tanpa izin |
| **Brand Colors** | Blue `#224297`, Gold `#ffd900` (DON'T CHANGE) |
| **URL Permanence** | ❌ Jangan ubah URL slug tanpa izin |
| **Feature Branch** | ✅ Selalu gunakan, never direct push |
| **Quality Gates** | Build + Lighthouse pass sebelum push |
| **No WIP Commits** | ❌ Jangan commit work-in-progress |
| **No Library Tambah** | ❌ Jangan tambah library tanpa konfirmasi |

---

## ✅ QUALITY GATES

Wajib lulus sebelum push:

```bash
# 1. Build validation
npm run build --turbopack

# 2. Type check
npm run type-check

# 3. Lighthouse audit
npm run lighthouse

# Threshold:
# - Performance Score ≥ 70 (minimal) / ≥ 85 (target)
# - LCP ≤ 5.5s (minimal) / ≤ 2.5s (target)
# - CLS = 0 (WAJIB)
```

---

## 📊 PERFORMANCE TARGETS

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| Performance Score | 72 | 90 | 🔴 NEEDS WORK |
| LCP | 6.4s | ≤2.5s | 🔴 CRITICAL |
| FCP | 1.85s | ≤1.8s | ⚠️ NEEDS WORK |
| TBT | 160ms | ≤200ms | ✅ ACCEPTABLE |
| CLS | 0 | ≤0.1 | ✅ EXCELLENT |

---

## ⚡ LIGHTWEIGHT MODEL PROTOCOL

Untuk model tier rendah (Haiku, 4o-mini):

1. **Atomic Tasks Only** — Kerjakan per SUB-TASK, jangan sekaligus
2. **Double Validation** — `npm run build` DAN `npm run type-check`
3. **Context Refresh** — Jika >5 turns, baca ulang state.json
4. **Explicit Search** — Selalu grep sebelum edit file
5. **No Blind Edits** — Validasi path dengan glob/list

---

## 📝 DOCUMENTATION REQUIREMENTS

Setiap perubahan besar harus di-dokumentasi:

### Performance Changes
```markdown
## Performance Impact
- **Metric:** [LCP/FCP/CLS/etc]
- **Before:** [value]
- **After:** [value]
- **Improvement:** [% or ms]
- **Tested on:** [device/browser]
```

### State Updates
Setelah selesai task:
1. Update `.claude/state.json` → task status = "DONE"
2. Update `.claude/tasks.md` → centang task selesai
3. Commit dengan conventional commits
4. Push ke feature branch

---

## 🚀 KNOWN URL ROUTES

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services/` | Services listing |
| `/services/[slug]/` | Service detail |
| `/blog/` | Blog listing |
| `/blog/[slug]/` | Blog post |
| `/lokasi/` | Location page |
| `/layanan-spesialis/[slug]/` | Specialist service |

---

## 📞 EMERGENCY CONTACTS

Jika ada pertanyaan atau blocker:
1. Baca `.claude/workflow.md` untuk step-by-step detail
2. Baca `.claude/conventions.md` untuk coding standards
3. Baca `.maestro.md` untuk arsitektur umum
4. Hubungi user untuk persetujuan perubahan

---

**Generated by:** Claude Opus 4.8  
**Date:** 2026-06-14  
**Version:** 1.0.0
