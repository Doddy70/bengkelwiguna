# Session Summary: Layanan Spesialis Single Page + FAQ Layout + Plugin v1.7.0
**Date**: 2026-06-06
**Status**: Completed (Single Page Fix + FAQ Layout + Plugin Update)
**Agent**: Antigravity (Google DeepMind)

## 1. Accomplishments

### Fix: Single Page `/layanan-spesialis/[slug]` — 404 → 200
- **Root cause 1:** Import statements ditulis di tengah file (setelah function body) — syntax error Next.js
- **Root cause 2:** `export const dynamicParams = true` konflik dengan `cacheComponents: true` di `next.config.js`
- **Root cause 3:** `params.slug` tidak di-await (Next.js 15+ wajib `await params`)
- **Fix:** Rebuild total `page.js` — semua import dipindah ke atas, `dynamicParams` dihapus, params di-await
- **Result:** HTTP 200 untuk semua 3 slug: semi-overhaul, reset-ac, cek-kaki-kaki ✅

### Adaptasi Layout FAQ Template Bexon
- **Referensi:** https://bexon-react.vercel.app/faq
- **Template source:** `template bexon/src/components/sections/faq/Faq2.js` (type=4) + `Faq3.js`
- **Layout Section 1 (Faq2 type=4):** Gambar + title overlay + call box nomor WA (kiri) | Content + FAQ accordion style-2 (kanan)
- **Layout Section 2 (Galeri):** Grid 3 kolom — opsional, tampil jika ada `gallery[]`
- **Layout Section 3 (Faq3):** Heading centered + accordion col-lg-8 — opsional, tampil jika FAQ > 5 item
- **Layout Section 4:** Related layanan spesialis lainnya
- **Komponen digunakan:** `FaqItem` (accordion #faqOne), `FaqItem2` (accordion #faqTwo), `BootstrapWrapper`

### Plugin v1.7.0 — FAQ Fields di REST API
- **Masalah ditemukan:** `bw_spesialis_faq` dan `bw_spesialis_faq_image` tersimpan di DB via metabox tapi TIDAK diekspos ke REST API response
- **Fix di `class-bw-rest-controller.php`:**
  - `get_layanan_spesialis()` list: tambah `bw_spesialis_faq` (decoded array) + `bw_spesialis_faq_image`, transient key bump ke `_full_v2`
  - `get_layanan_spesialis_item()` single: sama, transient key bump ke `_v2_`
- **FAQ dikirim sebagai PHP array** (sudah di-decode) — frontend tidak perlu `JSON.parse()`
- **Plugin versi:** 1.6.0 → **1.7.0**
- **ZIP:** `bw-headless-cms/bw-headless-cms-v1.7.0.zip` (54K, 21 files)
- **PHP lint:** No syntax errors di semua 7 file plugin ✅

### Frontend Update (page.js)
- Hapus `JSON.parse()` — langsung gunakan `item.bw_spesialis_faq` sebagai array
- WhatsApp link dinamis menggunakan `item.title` di query string

## 2. Files Modified

### Plugin Files
- `bw-headless-cms/bw-headless-cms/bw-headless-cms.php` — version 1.6.0 → 1.7.0
- `bw-headless-cms/bw-headless-cms/includes/class-bw-rest-controller.php` — FAQ fields + transient key bump

### Frontend Files
- `bexon/src/app/layanan-spesialis/[slug]/page.js` — Full rebuild, FAQ layout Bexon, proper imports

### Output Files
- `bw-headless-cms/bw-headless-cms-v1.7.0.zip` — ready to deploy

## 3. Current Project State
- **Dev Server:** http://localhost:3000 (running, PID 33143)
- **Plugin Version Local:** 1.7.0 (ZIP ready)
- **Plugin Version Live:** 1.6.0 (belum di-update ke server — upload gagal via WP Admin UI)
- **CPTs Registered:** services, promosi, paket_service, layanan_spesialis
- **Layanan Spesialis Slugs Live:** reset-ac, cek-kaki-kaki, semi-overhaul
- **FAQ API Fields:** Ada di plugin lokal v1.7.0, belum live

## 4. Pending Tasks
- [ ] **Deploy plugin v1.7.0** ke `backend.bengkelwiguna.com` (gunakan FTP/SFTP atau cPanel File Manager — WP Admin Upload gagal)
- [ ] **Flush Transients** setelah deploy: `wp transient delete --all` via WP-CLI atau cPanel Terminal
- [ ] **Flush Permalinks:** Settings → Permalinks → Save Changes
- [ ] **Isi FAQ** di WP Admin → Layanan Spesialis → Edit (field FAQ Repeater + gambar)
- [ ] **Test FAQ** di frontend setelah plugin live dan konten diisi
- [ ] **Deploy script** tersedia: `bw-headless-cms/bw-headless-cms/deploy-ops.sh` (butuh WP-CLI di server)

## 5. Deployment Guide (Plugin v1.7.0)
### Opsi A — FTP/SFTP (Recommended)
Hanya upload 2 file yang berubah:
```
wp-content/plugins/bw-headless-cms/bw-headless-cms.php
wp-content/plugins/bw-headless-cms/includes/class-bw-rest-controller.php
```
### Opsi B — cPanel File Manager
Upload `bw-headless-cms-v1.7.0.zip` → Extract → Replace files

### Post-Deploy (WP-CLI / cPanel Terminal)
```bash
wp transient delete bw_layanan_spesialis_full_v1 --allow-root
wp transient delete --all --allow-root  # lebih aman, hapus semua
wp rewrite flush --allow-root
```

---
**Saved to**: `.maestro/sessions/2026-06-06_layanan-spesialis-faq-layout.md`
