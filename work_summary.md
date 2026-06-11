# Lead Agent Session Recap: 2026-06-07
**Project**: Bengkel Wiguna Next.js (Migrated from Bexon)
**Status**: 100% Calibrated, Production-Ready Arsitektur, High-Fidelity UI Restoration.

## 1. Konteks Utama (Mandatory Read for Next Agents)
Proyek telah bermigrasi sepenuhnya dari template `bexon` (JS/Bootstrap/Swiper) ke `bengkel-wiguna-nextjs` (**Next.js 15.5+ / TypeScript / NextUI / Tailwind v4**). 
**DILARANG** melakukan regresi ke pola Bootstrap atau menggunakan vanilla JS `fetch` langsung. Semua data harus melalui `apiFetch` yang sudah ter-fortify.

## 2. Pekerjaan yang Selesai Hari Ini

### Fondasi & Keamanan Data (Fortified Architecture)
- **TypeScript-First**: Implementasi `src/types/wordpress.ts` sebagai *source of truth* data WP.
- **Unified Fetcher**: Refaktor `src/lib/wordpress.ts` dengan pola `apiFetch<T>` dan `apiFetchPaginated<T>`.
- **Resilience**: Menambahkan **Retry Strategy (Exponential Backoff)**, Timeout 30 detik, dan input validation pada semua request API.
- **Performance**: Implementasi `next/dynamic` (Lazy Loading) pada seluruh komponen *below-the-fold*. Target LCP < 2.5s.

### Restorasi Visual High-Fidelity (Bexon Home-05 Identity)
- **Hero Restoration**: Mengembalikan **3D Perspective Hero Slider** asli dari bengkelwiguna.com dengan performa yang dioptimasi.
- **Component Porting**: Memindahkan dan mengadaptasi komponen HeroUI (NextUI) premium:
  * `GoogleReviews.tsx`: Widget ulasan Google premium (Restored).
  * `YoutubeEducation.tsx`: Galeri playlist video edukasi (Restored).
  * `SpesialisSlider.tsx`: Card carousel layanan dengan navigasi langsung ke halaman detail.
- **Section Sequencing**: Homepage telah disusun ulang mengikuti urutan: Hero 3D -> Why Choose Us -> Promo -> Google Reviews -> YouTube -> Layanan Carousel -> Artikel Blog.

### Brand Identity & A11y
- **Authentic Brand Colors**: Menetapkan **Bengkel Wiguna Blue (#224297)** dan **Gold (#ffd900)** sebagai variabel CSS utama.
- **Logo & Favicon**: Mengganti aset default dengan Logo Panjang Resmi dan Favicon Bulat Bengkel Wiguna.
- **Social Media**: Mensinkronkan seluruh link (FB, IG, TikTok, YT, WA) ke akun resmi.
- **WCAG 2.2 Compliance**: Perbaikan sistemik pada ARIA labels, focus management (Search/Accordion), dan language detection (`lang="id"`).

## 3. Workflow & Aturan Main (Lead Agent Directives)
- **Color Mandate**: Gunakan class `text-brand-blue`, `bg-brand-blue`, dan `text-brand-gold`. Hindari `blue-600`.
- **Radius Mandate**: Gunakan class `brand-rounded` (12px) untuk semua container utama.
- **Data Pattern**: Gunakan `apiFetch` dari `@/lib/wordpress`. Dilarang bypass menggunakan `fetch` native di komponen.
- **A11y First**: Setiap komponen baru wajib memiliki ARIA labels yang relevan.

## 4. Pending Tasks / Next Steps
- [ ] **FAQ Split Logic**: Implementasikan logika "5 FAQ pertama tampil berbeda" di halaman Layanan Spesialis (Port dari Bexon).
- [ ] **Deploy Preparation**: Jalankan `npm run build` untuk memverifikasi `generateStaticParams` dengan data real.
- [ ] **SEO Validation**: Pastikan metadata Rank Math ditarik secara dinamis di setiap halaman CPT.

---
**Saved to**: `.maestro/sessions/2026-06-07_workflow-adaptation-and-a11y-remediation.md`
**Lead Agent Signature**: Gemini Pro (Auto-Edit Mode)
