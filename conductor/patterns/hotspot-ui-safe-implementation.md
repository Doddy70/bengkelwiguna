# Pattern: Safe Hotspot UI Implementation

**Kategori:** Next.js 15 App Router — Component Architecture  
**Berlaku untuk:** `modern-equipment.tsx`, komponen hotspot interaktif  
**Dibuat:** 2026-06-20  
**Sumber:** Post-mortem insiden revert total ModernEquipment Hotspot Section

---

## Problem Statement

Mengimplementasikan UI hotspot interaktif pada komponen Next.js 15 yang di-lazy-load oleh Server Component menghadirkan risiko khusus:

1. **SSR Bailout** — Client-only hooks menyebabkan `BAILOUT_TO_CLIENT_SIDE_RENDERING`
2. **Build Error** — `ssr: false` tidak diizinkan di Server Component
3. **Koordinat Blind** — Posisi `top/left` CSS tidak bisa ditentukan tanpa visual browser
4. **Data Loss** — Tidak ada commit checkpoint menyebabkan semua pekerjaan hilang saat error

---

## Pattern: Dynamic Import Guard

### Konteks
`modern-equipment.tsx` menggunakan `'use client'` tapi di-load oleh Server Component via `dynamic()`. Komponen child yang menggunakan NextUI/HeroUI hooks **harus** diproteksi.

### Solusi

```tsx
// src/components/heroui/modern-equipment.tsx

// ✅ BENAR: Komponen dengan client-only hook wajib dynamic + ssr:false
import dynamic from 'next/dynamic';

const BookingTrigger = dynamic(
  () => import('@/components/heroui/BookingTrigger'),
  { ssr: false }
);

// ❌ SALAH: Import statis komponen yang menggunakan useDisclosure dll
import BookingTrigger from "@/components/heroui/BookingTrigger";
```

### Kapan Digunakan
Setiap kali menambahkan komponen yang menggunakan hook dari:
- `@nextui-org/react`: `useDisclosure`, `useModal`, `useSelect`
- `framer-motion` dengan `useAnimation`, `useScroll`
- Browser-only APIs: `localStorage`, `window`, `navigator`

---

## Pattern: Server vs Client Component `dynamic()` Rule

### Rule
```
Server Component  → dynamic() tanpa opsi
Client Component  → dynamic() dengan { ssr: false } boleh digunakan
```

### Deteksi
```bash
# Cek apakah file adalah Server Component
grep "'use client'" src/app/page.tsx
# Tidak ada output → Server Component → JANGAN pakai ssr: false
```

---

## Pattern: Interactive Coordinate Calibration

### Problem
Koordinat `top` dan `left` dalam persen pada hotspot overlay **tidak bisa ditentukan secara akurat** tanpa melihat hasil render di browser.

### Solusi: Temporary Click Listener

Tambahkan sementara ke container gambar (`motion.div`) di `modern-equipment.tsx`:

```tsx
// TAMBAHKAN SEMENTARA — hapus setelah kalibrasi selesai
onClick={(e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
  const y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
  console.log(`"top": "${y}%", "left": "${x}%"`);
}}
```

**Workflow:**
1. Tambahkan listener → buka browser → klik lokasi komponen di gambar
2. Catat output console → update `equipment.json`  
3. Hapus listener → commit

---

## Pattern: Incremental Commit Protocol

### Problem
Bekerja lama tanpa commit menyebabkan tidak ada rollback point saat error.

### Solusi

```bash
# Sebelum mulai sesi
git commit -am "checkpoint: before [feature]"

# Setelah setiap hotspot berhasil diuji
git add src/data/equipment.json public/images/equipment/NamaFile.png
git commit -m "feat(equipment): hotspot N [nama komponen] — data + thumb + koordinat"

# Setelah perubahan komponen TSX berhasil
git commit -am "feat(equipment): update [product] panel UI layout"
```

---

## Quality Gates Wajib

```bash
# 1. TypeScript bersih
npx tsc --noEmit

# 2. Tidak ada SSR bailout
curl -s http://localhost:3000/ | grep -c "BAILOUT_TO_CLIENT_SIDE_RENDERING"
# Target: 0

# 3. HTTP 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/
# Target: 200
```

---

## Referensi

- Skill lengkap: `.agents/skills/hotspot-ui-implementation/SKILL.md`
- Post-mortem: `postmortem_modern_equipment.md` (artifact)
- AGENT_SYNC.md § Known Incidents
