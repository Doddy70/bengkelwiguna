# Project: Bengkel Wiguna — Agent Handoff Instructions

> **VERSION:** 1.0.0  
> **LAST UPDATED:** 2026-06-12  
> **DOCUMENT TYPE:** Primary Agent Instruction File  
> **READ FIRST:** Ya — file ini dibaca duluan oleh setiap agent sebelum mulai bekerja

---

## 🎯 STATUS SAAT INI (Last Updated: 2026-06-12)

### Core Web Vitals Performance (Baseline)
| Metric | Before | Target | Status |
|--------|--------|--------|--------|
| **LCP** | **6.4s** | ≤2.5s | 🔴 CRITICAL |
| **FCP** | **1.85s** | ≤1.8s | ⚠️  NEEDS WORK |
| **TBT** | **160ms** | ≤200ms | ✅ ACCEPTABLE |
| **CLS** | **0** | ≤0.1 | ✅ EXCELLENT |

### Overall Scores (Mobile)
| Category | Score | Status |
|----------|-------|--------|
| Performance | 72 | 🔴 NEEDS WORK |
| Accessibility | 91 | ✅ GOOD |
| Best Practices | 96 | ✅ EXCELLENT |
| SEO | 100 | ✅ PERFECT |

### Audit Source
- **Tool:** Google PageSpeed Insights
- **Device:** Mobile (Emulated Moto G Power)
- **Date:** 2026-06-12
- **Screenshot:** `.claude/notes/audit-2026-06-12.md`

---

## 🔧 WORKFLOW BERLANJUT

### ✅ YANG SUDAH SELESAI
1. PageSpeed Insights audit — masalah teridentifikasi
2. Best practices recommendations — dokumentasi lengkap
3. Skor performa baseline — tercatat

### 🚧 SEDANG BERLANJUT
1. **Render-blocking resources** — perlu implementasi (890ms savings potential)
2. **Image optimization** — perlu implementasi (92 KiB savings potential)

### 📋 TUGAS SELANJUTNYA (Priority Order)

| # | Task | Priority | Estimated Savings | Branch |
|---|------|----------|-------------------|--------|
| 1 | Inline Critical CSS | 🔴 HIGH | ~300ms FCP | `perf/inline-critical-css` |
| 2 | Minifikasi CSS & JS | 🔴 HIGH | ~200ms | `perf/minify-assets` |
| 3 | Konversi Hero ke WebP | 🔴 HIGH | ~500ms LCP | `perf/convert-hero-webp` |
| 4 | Lazy Loading Images | 🔴 HIGH | ~400ms LCP | `perf/lazy-loading` |
| 5 | Preload LCP Image | 🔴 HIGH | ~200ms LCP | `perf/preload-lcp` |
| 6 | Browser Caching | 🟡 MEDIUM | ~200ms (repeat) | `perf/browser-caching` |
| 7 | Gzip/Brotli Compression | 🟡 MEDIUM | ~60-70% size | `perf/compression` |
| 8 | CDN Setup | 🟡 MEDIUM | ~300ms | `perf/cdn-setup` |
| 9 | Lighthouse CI | 🟡 MEDIUM | Regression prevention | `perf/lighthouse-ci` |
| 10 | Web Vitals RUM | 🟢 LOW | Real monitoring | `perf/web-vitals-rum` |

---

## 🚫 JANGAN LAKUKAN (Constraints)

> [!IMPORTANT]
> **Zero Initiative Rule:** Agent DILARANG mengubah UI/UX, layout, warna, spacing tanpa izin eksplisit user.

1. ❌ **Jangan hapus atau modifikasi file tanpa persetujuan**
2. ❌ **Jangan push langsung ke branch utama** — gunakan feature branch
3. ❌ **Jangan ubah struktur folder yang sudah ada**
4. ❌ **Jangan hapus branch yang sudah dimerge**
5. ❌ **Jangan matikan lighthouse audit di pipeline**
6. ❌ **Jangan hilangkan CLS tracking** (sudah 0, pertahankan)
7. ❌ **Jangan ubah brand colors** — Blue (`#224297`), Gold (`#ffd900`)
8. ❌ **Jangan ubah URL slug yang sudah ada**
9. ❌ **Jangan tambahkan library baru** tanpa konfirmasi

---

## 📂 STRUKTUR PROJECT

```
new bengkel wiguna/
├── bexon/                          # ⭐ ACTIVE FRONTEND (Stable)
│   ├── src/
│   │   ├── app/                    # Next.js App Router
│   │   ├── components/             # UI Components
│   │   └── lib/                    # Utilities (wpFetch, bwFetch)
│   └── public/                     # Static assets
├── bengkel-wiguna-nextjs/          # ⚠️ DEPRECATED (Paused)
├── .claude/                        # ⬅️ AGENT KNOWLEDGE BASE
│   ├── CLAUDE.md                   # ⭐ INSTRUKSI UTAMA (INI)
│   ├── state.json                  # 📊 Current progress state
│   ├── workflow.md                # 📝 Step-by-step workflow
│   ├── tasks.md                   # 📋 Task list
│   ├── conventions.md             # 📜 Coding standards
│   ├── changelog.md               # 🔄 History log
│   └── notes/
│       ├── audit-2026-06-12.md    # 📸 PageSpeed findings
│       └── decisions.md           # 🏛️ Architecture decisions
├── .maestro/                       # Maestro agent context
│   └── sessions/                  # Session history
├── scripts/                        # Automation scripts
│   ├── agent-start.sh             # 🚀 Agent bootstrapper
│   └── validate.sh                # 🔍 Pre-push validator
├── .git/hooks/
│   └── pre-push                   # 🛡️ Auto-guard hook
├── lighthouse.config.js            # ⚡ Lighthouse CI
├── PERFORMANCE.md                 # 📊 Public performance report
└── README.md                       # 📖 Project README
```

---

## 🔗 DOKUMENTASI TERKAIT

| File | Fungsi |
|------|--------|
| `.claude/state.json` | State machine progress terkini |
| `.claude/workflow.md` | Detail workflow & step-by-step |
| `.claude/tasks.md` | Task breakdown dengan status |
| `.claude/conventions.md` | Coding standards |
| `.claude/changelog.md` | Riwayat perubahan |
| `.maestro.md` | Maestro agent context |
| `docs/performance-audit.md` | PageSpeed audit details |
| `docs/best-practices.md` | Best practices recommendations |

---

## 👤 LAST AGENT

- **Agent:** Claude Opus 4.8 (1M context)
- **Date:** 2026-06-12
- **Action:** PageSpeed Insights Core Web Vitals analysis + Best Practices recommendations
- **Git Commit:** (lihat `.claude/state.json` → `lastCommit`)
- **Next Agent:** Lanjutkan dari task list di `.claude/tasks.md`

---

## 🚀 CARA MEMULAI (untuk Agent Baru)

```bash
# 1. Baca instruksi utama
cat .claude/CLAUDE.md

# 2. Lihat state terkini
cat .claude/state.json | jq '.'

# 3. Lihat task list
cat .claude/tasks.md

# 4. Check git status
git status
git log -1 --pretty="%h %s"

# 5. Pilih task pertama dari tasks.md (yang PENDING & HIGH priority)
# 6. Buat feature branch
git checkout -b perf/inline-critical-css

# 7. Kerjakan task
# 8. Update state.json setelah selesai
# 9. Commit dengan conventional commits
# 10. Push & buat PR
```

---

## 📊 QUICK REFERENCE

### Build Commands
```bash
# Build validation (inside bexon/)
npm run build --turbopack

# Lighthouse audit
npm run lighthouse

# Run dev server
npm run dev
```

### Performance Targets
| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Performance Score | 72 | 90 | +18 |
| LCP | 6.4s | ≤2.5s | -3.9s |
| FCP | 1.85s | ≤1.8s | -0.05s |
| TBT | 160ms | ≤200ms | ✅ |
| CLS | 0 | ≤0.1 | ✅ |

---

## ⚠️ EMERGENCY CONTACTS

Jika ada pertanyaan atau blocker:
1. Baca `.claude/workflow.md` untuk step-by-step
2. Baca `.claude/conventions.md` untuk coding standards
3. Baca `.maestro.md` untuk arsitektur umum project
4. Hubungi user untuk persetujuan perubahan

---

**Generated by:** Claude Opus 4.8  
**Date:** 2026-06-12  
**Version:** 1.0.0
