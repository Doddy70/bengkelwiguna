# Bengkel Wiguna Interactive Hotspot System

## Product Requirement Document (PRD)

---

# Overview

Tujuan fitur ini adalah mengubah website Bengkel Wiguna menjadi sebuah:

> **Interactive Vehicle Diagnostic Experience**

Bukan sekadar landing page bengkel biasa.

Konsep UX terinspirasi dari:

* Tesla Product Experience
* Apple Product Explainer
* Stripe Dashboard
* Linear App
* Aceternity UI
* Modern SaaS Dashboard

---

# Core User Journey

```text
User Masuk Website

↓

Melihat Mobil + Mesin

↓

Melihat Pulse Hotspot

↓

Hover Tooltip

↓

Klik Hotspot

↓

Animated Beam Line

↓

Panel Informasi Update

↓

Before vs After

↓

Booking WhatsApp
```

---

# Technology Stack

## Framework

```bash
Next.js 15
TypeScript
Tailwind CSS
```

## UI Library

```bash
shadcn/ui
```

Alasan:

* Tailwind Native
* Modern
* Production Ready
* Mudah Custom Branding Bengkel Wiguna

---

# Animation Library

```bash
framer-motion
```

Digunakan untuk:

* Hotspot Animation
* Card Transition
* Panel Transition
* Progress Indicator
* Fade Effect

---

# Additional Libraries

## Aceternity UI

Digunakan untuk:

```tsx
Animated Beam
Tracing Beam
```

Fungsi:

* Garis konektor dari hotspot menuju panel kanan
* Efek beam bergerak

---

## React Compare Slider

```bash
react-compare-slider
```

Digunakan untuk:

* Before vs After

Contoh:

* Semi Overhaul
* Reset AC
* Coolant Changer

---

## Icons

```bash
lucide-react
```

---

# Layout Structure

## Desktop Layout

```text
------------------------------------------------

LEFT SIDEBAR

CENTER VEHICLE CANVAS

RIGHT INFORMATION PANEL

------------------------------------------------
```

---

# Left Sidebar

Berisi menu layanan:

```text
Semi Overhaul

Kyoto Shaking Machine

Reset AC

Coolant Changer

Perawatan Berkala
```

Komponen:

```tsx
<ServiceSidebar />
```

---

# Center Canvas

Berisi:

```text
Mobil

Mesin / Equipment

Hotspot Interaktif
```

Komponen:

```tsx
<VehicleCanvas />
```

Isi:

```tsx
<VehicleImage />

<MachineImage />

<Hotspot />

<AnimatedBeam />
```

---

# Right Information Panel

Komponen:

```tsx
<InfoPanel />
```

Lebar:

```css
480px - 520px
```

Jangan menggunakan thumbnail kecil.

Panel harus langsung menampilkan informasi.

---

# Hotspot Design

## Visual Style

Gunakan:

```css
animate-ping
```

atau

```tsx
motion.div
```

---

## Normal State

```text
◉
```

---

## Hover State

```text
◉
◌
◌
```

Pulse keluar.

---

## Active State

```text
◉══════════►
```

Beam menuju panel kanan.

---

# Tooltip Hotspot

Gunakan:

```tsx
Tooltip
```

dari:

```bash
shadcn/ui
```

Contoh:

```text
Cover Klep

Klik untuk melihat detail
```

---

# Beam Connector

## Konsep

Bukan:

```text
Hotspot
↓
Label Card
```

Tetapi:

```text
Hotspot
↓
Animated Beam
↓
Information Panel
```

---

## Behaviour

Saat hotspot aktif:

* Garis muncul
* Garis glow
* Beam bergerak
* Panel update otomatis

---

# Information Panel Structure

```text
--------------------------------

Area 1 dari 6

--------------------------------

Judul Area

--------------------------------

Gambar Komponen

--------------------------------

Deskripsi

--------------------------------

Masalah Umum

--------------------------------

Manfaat Setelah Treatment

--------------------------------

Benefit

--------------------------------

Before vs After

--------------------------------

CTA

--------------------------------
```

---

# Progress Indicator

Bagian atas panel:

```text
● ● ● ● ● ●
```

atau

```text
Area 2 dari 6
```

User mengetahui masih ada area lainnya.

---

# Before vs After Section

Gunakan:

```tsx
ReactCompareSlider
```

Contoh:

```text
Sebelum ◄ ► Sesudah
```

Untuk:

* Semi Overhaul
* Reset AC
* Coolant Changer

---

# CTA Section

Dynamic CTA.

Contoh:

## Cover Klep

```text
Cek Kondisi Mesin Saya
```

---

## Oil Pan

```text
Apakah Mesin Saya Mengandung Sludge?
```

---

## Reset AC

```text
Cek Performa AC Saya
```

---

## Kyoto Shaking Machine

```text
Cari Sumber Bunyi Kaki-Kaki
```

---

# Mobile UX

## Desktop

```text
Sidebar

Canvas

Info Panel
```

---

## Mobile

```text
Service Menu

Vehicle

Hotspot

Bottom Sheet
```

---

Saat hotspot dipilih:

```text
Bottom Sheet Slide Up

↓

Informasi Area

↓

Booking
```

---

# Service Data Structure

Semua hotspot menggunakan JSON.

Contoh:

```ts
const semiOverhaul = [
  {
    id: "cover-klep",

    title: "Cover Klep",

    x: 35,

    y: 22,

    description:
      "Membersihkan area atas mesin dari sludge dan varnish.",

    image:
      "/semi-overhaul/cover-klep.png",

    problems: [
      "Sludge menumpuk",
      "Kerak oli"
    ],

    benefits: [
      "Aliran oli lancar",
      "Mesin lebih halus"
    ]
  }
]
```

---

# Service Modules

## Semi Overhaul

Hotspot:

1. Cover Klep
2. Timing Area
3. Jalur Oli Utama
4. Jalur Oli Presisi
5. Carter / Oil Pan
6. Oil Pump & Saringan

---

## Kyoto Shaking Machine

Hotspot:

1. Shockbreaker
2. Support Shock
3. Tie Rod
4. Rack End
5. Lower Arm
6. Bushing Arm
7. Stabilizer Link
8. Bushing Stabilizer
9. Rack Steer
10. Wheel Bearing

---

## Reset AC

Hotspot:

1. Kompresor AC
2. Jalur Freon
3. Kondensor
4. Motor Fan
5. Evaporator
6. Blower AC

---

## Coolant Changer

Hotspot:

1. Radiator
2. Motor Fan
3. Water Pump
4. Engine Block
5. Heater System
6. Thermostat
7. Reservoir Tank

---

## Perawatan Berkala

Hotspot:

1. Mesin
2. Sistem Pembakaran
3. Ban & Roda
4. Steering & Alignment
5. Sistem Rem
6. Sistem AC
7. Underbody Protection

---

# UX Improvements

## Wajib

### 1. Pulse Hotspot

User langsung tahu area bisa diklik.

---

### 2. Animated Beam

Menghubungkan hotspot dengan panel.

---

### 3. Area Highlight

Saat hotspot dipilih:

* Area menyala
* Area lain blur

Seperti CT Scan.

---

### 4. Dynamic Panel

Panel berubah otomatis.

Tanpa popup tambahan.

---

### 5. Before After Slider

Menunjukkan hasil nyata treatment.

---

# Branding Position

Website harus terasa seperti:

> Digital Vehicle Diagnostic Center

Bukan website bengkel biasa.

Positioning:

* No Tebak-Tebak
* No Bongkar-Bongkar
* Diagnosa Presisi
* Teknologi Modern
* Edukasi Transparan
* Interactive Experience

```
```
