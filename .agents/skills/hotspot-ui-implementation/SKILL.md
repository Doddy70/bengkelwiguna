---
name: hotspot-ui-implementation
description: >
  Panduan aman untuk mengimplementasikan UI hotspot interaktif pada komponen
  ModernEquipmentShowcase di project Bengkel Wiguna V3. Gunakan skill ini
  setiap kali ada permintaan perubahan pada section Panel Info, titik hotspot,
  thumbnail komponen, atau tata letak panel dalam modern-equipment.tsx.
  Berisi protokol wajib, anti-pattern yang terbukti gagal, dan prosedur
  implementasi yang aman berdasarkan post-mortem sesi 20 Juni 2026.
---

# Hotspot UI Implementation — Bengkel Wiguna

## ⚠️ Baca Dulu Sebelum Melakukan Apapun

Skill ini lahir dari **kegagalan nyata** pada sesi 20 Juni 2026 yang mengharuskan revert penuh ke `origin/main`. Ikuti setiap langkah tanpa pengecualian.

---

## 🗂️ File yang Terlibat

| File | Peran | Risiko |
|------|-------|--------|
| `src/components/heroui/modern-equipment.tsx` | Komponen utama UI | Tinggi — SSR sensitive |
| `src/data/equipment.json` | Data hotspot, thumbnail, teks panel | Sedang |
| `public/images/equipment/` | Aset gambar thumbnail | Rendah |

---

## 🔴 ANTI-PATTERN — Hal yang DILARANG

### 1. Import Statis Client-Only Component di SSR Context

```tsx
// ❌ DILARANG — menyebabkan SSR BAILOUT_TO_CLIENT_SIDE_RENDERING
import BookingTrigger from "@/components/heroui/BookingTrigger";

// ✅ WAJIB — gunakan dynamic import dengan ssr: false
import dynamic from 'next/dynamic';
const BookingTrigger = dynamic(
  () => import('@/components/heroui/BookingTrigger'),
  { ssr: false }
);
```

**Mengapa:** `modern-equipment.tsx` dirender dalam konteks yang di-lazy-load oleh Server Component (`page.tsx`). Komponen apapun yang menggunakan hook client-only (`useDisclosure`, `useModal`, `useLocalStorage`, dll dari NextUI/HeroUI) **HARUS** di-import secara dynamic dengan `ssr: false`.

---

### 2. `ssr: false` di Server Component

```tsx
// ❌ DILARANG — BUILD ERROR di Next.js 15 App Router
// File: src/app/page.tsx (Server Component — tidak ada 'use client')
const ModernEquipment = dynamic(() => import('...'), { ssr: false })

// ✅ BENAR — di Server Component, cukup dynamic() tanpa ssr:false
const ModernEquipment = dynamic(() => import('...'))
```

**Aturan:** `ssr: false` hanya valid di dalam file yang memiliki directive `'use client'` di baris pertama.

---

### 3. Menebak Koordinat Hotspot Tanpa Visual Feedback

```json
// ❌ DILARANG — tebak-tebakan koordinat %
{ "top": "60%", "left": "35%" }
```

Koordinat `top` dan `left` dalam persen bersifat relatif terhadap kontainer gambar. Nilai yang tepat **hanya bisa ditentukan secara visual di browser**. Menebak angka akan menghasilkan titik hotspot yang meleset jauh.

**Solusi wajib:** Gunakan Protokol Kalibrasi Koordinat (lihat bagian di bawah).

---

### 4. Akumulasi Perubahan Tanpa Commit Checkpoint

```bash
# ❌ DILARANG — kerja berjam-jam tanpa commit
# Jika ada error, semua pekerjaan hilang

# ✅ WAJIB — commit setelah setiap unit kerja berhasil diuji
git commit -am "feat(equipment): add hotspot 3 cover klep thumbnail and data"
```

---

## ✅ PROTOKOL IMPLEMENTASI YANG AMAN

### Step 1: Buat Commit Checkpoint Sebelum Mulai

```bash
git add -A && git commit -am "checkpoint: before [nama-fitur]"
```

### Step 2: Update Data di `equipment.json` Terlebih Dahulu

Jangan ubah komponen dulu. Mulai dari data:

```json
{
  "top": "35%",
  "left": "44%",
  "title": "NAMA KOMPONEN",
  "thumb": "/images/equipment/nama-file.png",
  "fungsi": "Deskripsi fungsi komponen.",
  "gejala": ["Masalah 1", "Masalah 2"],
  "manfaat": ["Manfaat 1", "Manfaat 2"],
  "hasilDeteksi": "Benefit 1, Benefit 2"
}
```

### Step 3: Copy Gambar ke Public Directory

```bash
cp "/path/to/source/Thumb.png" "public/images/equipment/"
```

### Step 4: Kalibrasi Koordinat Hotspot di Browser

**WAJIB** menggunakan tool koordinat interaktif. Tambahkan sementara ke image container:

```tsx
// Tambahkan ini SEMENTARA ke div container gambar di modern-equipment.tsx
// untuk mendapatkan koordinat yang presisi
onClick={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
  console.log(`"top": "${y}%", "left": "${x}%"`);
  // Output langsung siap pakai untuk equipment.json
}}
```

Buka halaman di browser → klik tepat di atas lokasi komponen → catat output console → update `equipment.json` → hapus listener ini.

### Step 5: Test di Browser Sebelum Lanjut

Setelah setiap perubahan:
1. Buka `http://localhost:3000` (atau port aktif)
2. Navigasi ke tab yang diubah
3. Klik hotspot yang baru dibuat
4. Verifikasi: panel info muncul? thumbnail tampil? koordinat tepat?
5. Baru lanjut ke hotspot berikutnya

### Step 6: Commit Setelah Setiap Hotspot Berhasil

```bash
git add src/data/equipment.json public/images/equipment/
git commit -m "feat(equipment): hotspot [N] [nama komponen] — thumbnail + data + koordinat"
```

### Step 7: Baru Update Komponen TSX (Jika Diperlukan)

Jika perlu mengubah tampilan/layout panel info di `modern-equipment.tsx`:

```bash
# Pastikan data sudah committed dulu (Step 6)
# Baru modifikasi TSX
# Test lagi di browser
# Commit lagi
git commit -am "feat(equipment): update semi-overhaul panel UI layout 3-column"
```

---

## 🧩 Struktur Data Hotspot Per Produk

### Produk: Cek Kaki-Kaki (Kyoto Shaking Machine)
Field yang wajib ada di setiap hotspot:
```json
{
  "top": "%", "left": "%",
  "title": "string",
  "subtitle": "string",
  "labelOffsetX": number, "labelOffsetY": number,
  "nodeIcon": "FeatherIconName",
  "color": "#hexcode",
  "thumb": "/images/equipment/file.png",
  "components": ["string"],
  "fungsi": "string",
  "gejala": ["string"],
  "risiko": ["string"],
  "manfaat": ["string"],
  "hasilDeteksi": "string"
}
```

### Produk: Semi Overhaul (Stinger Machine)
Field yang wajib ada:
```json
{
  "top": "%", "left": "%",
  "title": "string (ALL CAPS)",
  "subtitle": "string",
  "labelOffsetX": number, "labelOffsetY": number,
  "nodeIcon": "FeatherIconName",
  "thumb": "/images/equipment/file.png",
  "fungsi": "string",
  "gejala": ["string"],
  "manfaat": ["string"],
  "hasilDeteksi": "Benefit1, Benefit2, Benefit3"
}
```

---

## 🔧 Next.js 15 App Router — Aturan Wajib

### Komponen yang Berisi Client Hook
Setiap komponen yang menggunakan hook dari library UI (NextUI/HeroUI):
- `useDisclosure` → client-only
- `useModal` → client-only
- `useTheme` → client-only

Jika digunakan di dalam `modern-equipment.tsx` atau komponen yang di-lazy-load:

```tsx
// ✅ Import secara dynamic dengan ssr: false
const KomponenDenganClientHook = dynamic(
  () => import('@/components/heroui/KomponenDenganClientHook'),
  { ssr: false }
);
```

### Verifikasi Tidak Ada SSR Error

Setelah mengubah komponen, jalankan:
```bash
curl -s http://localhost:3000/ | grep -c "BAILOUT_TO_CLIENT_SIDE_RENDERING"
# Output harus: 0
```

---

## 🛡️ Quality Gates — Wajib Lulus Sebelum Commit

```bash
# 1. TypeScript check
npx tsc --noEmit
# Harus: tidak ada output error

# 2. SSR bailout check  
curl -s http://localhost:3000/ | grep "BAILOUT" | wc -l
# Harus: 0

# 3. HTTP status check
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Harus: 200
```

---

## 🚨 Prosedur Darurat — Jika Ada Error

### Error: "Something went wrong!" di browser
```bash
# 1. Cek apakah TypeScript bersih
npx tsc --noEmit

# 2. Cek SSR bailout
curl -s http://localhost:3000/ | grep "BAILOUT"

# 3. Jika tidak bisa diagnosa dalam 5 menit → revert ke checkpoint terakhir
git stash  # simpan perubahan sementara
# test apakah error hilang
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Jika 200 → masalah ada di perubahan kita
git stash drop  # buang perubahan bermasalah
# Mulai ulang dari checkpoint yang bersih
```

### Error: Build Error `ssr: false` di Server Component
```bash
# Cek apakah file yang bermasalah adalah Server Component
grep "'use client'" src/app/page.tsx
# Jika tidak ada output → itu Server Component, hapus ssr: false
```

### Rollback Total
```bash
git fetch origin
git reset --hard origin/main
```

---

## 📝 Referensi

- **Post-Mortem Sesi 20 Juni 2026:** Lihat artifact `postmortem_modern_equipment.md`  
- **Komponen Utama:** `src/components/heroui/modern-equipment.tsx`
- **Data:** `src/data/equipment.json`
- **Next.js 15 Dynamic Import Docs:** https://nextjs.org/docs/app/guides/lazy-loading
