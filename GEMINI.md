# PROJECT MANDATES: BENGKEL WIGUNA NEXT.JS
**Version**: 3.0 (V3 Migration Active)
**Lead Agent**: Gemini Pro (Primary / Orchestrator)
**Integration Agent**: Claude Sonnet 4 (Business Logic / SEO)

> [!IMPORTANT]
> **ACTIVE ENVIRONMENT: bengkel-wiguna-nextjs/**
> - **Bengkel-wiguna-nextjs:** Primary directory for all new development.
> - **Bexon:** LEGACY. Do not perform new features here unless explicitly requested for maintenance.

## 1. Core Tech Stack (V3 Architecture)

### A. Active Development (`bengkel-wiguna-nextjs/`)
- **Framework**: Next.js 15.5+ (App Router).
- **UI Library**: NextUI (@nextui-org/react).
- **Styling**: Tailwind CSS v4.
- **Slider**: Splide (@splidejs/react-splide).
- **Animation**: Framer Motion + AOS.
- **Icons**: Lucide React + Iconify.

### B. Legacy System (`bexon/`) - DEPRECATED
- **Framework**: Next.js 16.0+ (Bootstrap 5 based).
- **Status**: Maintenance only.

## 2. Hybrid AI Operational Rules
- **Claude Usage**: Reserved for specialized business logic, SEO generation, and Indonesian content.
- **Budget Monitoring**: Check `src/middleware/cost-tracking.js` if available in new stack.

## 3. Data Integration Rules
- **Standardization**: Implement unified fetching utilities in the new stack.
- **Type Safety**: STRICT TypeScript usage in `bengkel-wiguna-nextjs/`. No `any`.

## 4. Brand Identity Standards (Unified)
- **Primary Blue**: `#224297` (Class: `bg-brand-blue`, `text-brand-blue`).
- **Primary Gold**: `#ffd900` (Class: `text-brand-gold`, `bg-brand-gold`).
- **Border Radius**: 12px (Class: `brand-rounded`).
- **Layout**: Boxed Layout dengan gap minimal 15px.

## 5. Operational Directives for Agents
1. **Directory Integrity**: Pastikan Anda bekerja di direktori `bengkel-wiguna-nextjs/`.
2. **Context First**: Baca `GEMINI.md` dan `CLAUDE.md` di root dan target folder.
3. **Zero Initiative UI**: DILARANG mengubah layout, spacing, atau warna brand tanpa izin eksplisit user.
4. **Session Capture**: Setiap akhir pengerjaan WAJIB menjalankan `/capture` untuk dokumentasi handover.

---
**Status**: ACTIVE MANDATE (v2.2). Compliance is mandatory for session continuity.
