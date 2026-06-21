# Agent Synchronization — Bengkel Wiguna V3

> **VERSION:** 2.2.0  
> **LAST UPDATED:** 2026-06-20  
> **PURPOSE:** Single source of truth untuk semua AI agent (Gemini, Claude, Maestro)

---

## 🎯 OVERVIEW

Dokumen ini menyinkronkan workflow antara agent Gemini, Claude, dan Maestro untuk project Bengkel Wiguna V3. Semua agent WAJIB membaca file ini sebagai langkah pertama.

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
| **Gemini** | 3.1 Pro (High) | 1M tokens | Complex reasoning, coding, planning |
| **Gemini** | 3.5 Flash | 1M tokens | Fast tasks, multimodal |
| **Claude** | Opus 4.8 / Sonnet 3.5 | 200K+ tokens | Complex UI/UX, coding |
| **Maestro** | AI Orchestrator | - | Context generation, multi-agent management |

---

## 📁 REQUIRED FILES

| File | Fungsi | Wajib Dibaca |
|------|--------|-------------|
| `AGENT_SYNC.md` | ⬅️ INI - Single source of truth | Ya |
| `.maestro.md` | Workflow context & arsitektur | Ya |
| `.claude/state.json` | Current state machine | Ya |
| `.claude/tasks.md` | Task list dengan status | Ya |
| `.claude/conventions.md` | Coding standards | Ya |

---

## 🔄 UNIFIED WORKFLOW

### Current Active Phase
**FUNCTIONAL SYNC & POLISH**

### Task Progress
| Task | Status | Branch |
|------|--------|--------|
| UI/UX Redesign (WigunaCard, Aceternity, Glassmorphism) | ✅ DONE | main |
| Refine Brand Colors & Core Layouts | ✅ DONE | main |
| Dynamic Navigation Menu Sync | ⏸️ PENDING | feat/nav-menu-sync |
| Domain Authority Audit | ⏸️ PENDING | chore/seo-audit |

---

## 📜 CONVENTIONS (Wajib Dipenuhi)

### Git Commit Format
```
<type>(<scope>): <description>

Contoh:
feat(ui): refactor bento grid with glassmorphism
fix(slider): resolve autoplay loop bug
```

### Commit Types
`feat:` (Fitur), `fix:` (Bug fix), `perf:` (Performa), `docs:` (Dokumentasi), `refactor:` (Refactoring), `chore:` (Maintenance)

---

## 🏗️ TECH STACK (V3 Architecture)

```
Frontend:  Next.js 15.5+ (App Router + Turbopack)
Styling:   Tailwind CSS 4.x
UI Library: HeroUI (NextUI) + Aceternity UI
Icons:     Lucide React + @iconify/react
Animations: Framer Motion + SplideJS
Backend:   WordPress Headless CMS
API:       /bw/v1/ + /wp/v2/
```

---

## 🔗 API PATTERNS

### Gunakan Utility Terstandarisasi
```typescript
// ✅ Good: Gunakan bwFetch/wpFetch
import { bwFetch, wpFetch } from '@/lib/wordpress';

const services = await bwFetch('/services-full');
const posts = await wpFetch('/posts');
```

---

## 🛡️ GUARDRAILS

| Rule | Enforcement |
|------|-------------|
| **Zero Initiative** | ❌ Jangan ubah UI/UX, layout, warna tanpa izin |
| **Mandatory Confirmation**| 🛑 WAJIB konfirmasi & minta arahan user sebelum memulai implementasi / eksekusi script apapun. |
| **Brand Colors** | Blue `#224297`, Gold `#ffd900` (DON'T CHANGE) |
| **Feature Branch** | ✅ Selalu gunakan, never direct push ke main |
| **Quality Gates** | Build (`npm run build`) harus lulus sebelum push |

---

## ✅ QUALITY GATES

Wajib lulus sebelum push:
```bash
npm run build --turbopack
npx tsc --noEmit
```

---

## 🚀 KNOWN URL ROUTES

| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services/[slug]/` | Service detail |
| `/blog/[slug]/` | Blog post |
| `/layanan-spesialis/[slug]/` | Specialist service |

---

---

## 🚨 KNOWN INCIDENTS & LESSONS LEARNED

> Bagian ini WAJIB dibaca sebelum menyentuh komponen `ModernEquipmentShowcase`.

### Insiden: Revert Total — ModernEquipment Hotspot Section (20 Juni 2026)

**Apa yang terjadi:** Agent Gemini melakukan serangkaian perubahan pada `modern-equipment.tsx` dan `equipment.json` tanpa commit checkpoint. Akumulasi error menyebabkan runtime crash dan revert penuh ke `origin/main`.

#### ❌ Anti-Pattern yang Terbukti Fatal

**1. Import statis client hook di SSR context**
```tsx
// ❌ FATAL — SSR BAILOUT_TO_CLIENT_SIDE_RENDERING
import BookingTrigger from "@/components/heroui/BookingTrigger";

// ✅ WAJIB — client component dengan client hook harus dynamic + ssr:false
import dynamic from 'next/dynamic';
const BookingTrigger = dynamic(
  () => import('@/components/heroui/BookingTrigger'),
  { ssr: false }
);
```

**2. `ssr: false` di Server Component**
```tsx
// ❌ FATAL — Build Error di Next.js 15 App Router
// src/app/page.tsx TIDAK memiliki 'use client' → ini Server Component
const X = dynamic(() => import('...'), { ssr: false }) // BUILD ERROR!

// ✅ BENAR — Server Component cukup dynamic() tanpa opsi
const X = dynamic(() => import('...'))
```

**3. Menebak koordinat hotspot tanpa visual browser**
```bash
# ❌ DILARANG — koordinat harus dikalibrasi interaktif di browser
# Gunakan skill: .agents/skills/hotspot-ui-implementation/SKILL.md
```

**4. Bekerja berjam-jam tanpa commit checkpoint**
```bash
# ✅ WAJIB — commit setelah setiap unit kerja yang berhasil diuji di browser
git commit -am "feat(equipment): hotspot N — nama komponen"
```

#### 📚 Skill Wajib untuk Komponen Ini

Sebelum menyentuh `modern-equipment.tsx` atau `equipment.json`, baca:
```
.agents/skills/hotspot-ui-implementation/SKILL.md
```

Skill ini berisi:
- Protokol implementasi yang aman (7 langkah)
- Prosedur kalibrasi koordinat interaktif
- Quality gates wajib
- Prosedur darurat jika terjadi error

---

**Generated by:** Gemini (Antigravity IDE)  
**Date:** 2026-06-20  
**Version:** 2.2.0

---

## 📅 LAST SESSION LOG

### Sesi: 21 Juni 2026 (02:35–02:54 WIB)
**Agent:** Antigravity (Gemini/Claude)  
**Branch:** `main` | **Commit:** `2b5f01c4`

#### ✅ Yang Diselesaikan
- **Tab Kyoto Shaking Machine** — ModernEquipmentShowcase:
  - Hotspot #2 (Tie Rod & Rack End): dipindah ke depan kiri roda depan (`left: 14.5%`, `top: 49.5%`)
  - Hotspot #4 (Rack Steer): digeser kiri (`left: 27.0%`)
  - Hotspot #5 (Lower Arm): dipindah ke area roda depan (`left: 22.0%`, `top: 65.0%`)
  - Hotspot #6 (Wheel Bearing): dipindah ke area roda depan luar (`left: 10.0%`, `top: 67.0%`)
- **Fix .next cache corrupt** → restart clean dev server
- **Push & deploy Vercel** → commit `2b5f01c4` live

#### ⏭️ NEXT SESSION — TODO
- [ ] Verifikasi visual posisi hotspot di browser setelah Vercel deploy
- [ ] Fine-tune koordinat hotspot jika masih perlu kalibrasi (cek di browser live)
- [ ] Cek tab-tab lain (Flushing AC, Kuras Radiator, Service Berkala) — apakah hotspot sudah on-point
- [ ] Pertimbangkan: apakah info panel card perlu animasi atau content tambahan?

#### 📁 File Aktif
- `src/data/equipment.json` — hotspot coordinates
- `src/components/heroui/modern-equipment.tsx` — UI komponen
- `public/images/equipment/` — semua image assets hotspot

