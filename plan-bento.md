# Rencana Perubahan: Bento Grid dengan Tailwind UI

Berdasarkan permintaan Anda, saya akan merombak bagian `bento-promo-section.tsx` (yang menampilkan promo) menjadi **Bento Grid otentik** khas Tailwind UI/Apple Style, yang jauh lebih dinamis dan modern dibandingkan tumpukan *card* biasa.

## Proposed Changes
1. **Layout Asimetris (Bento Box)**:
   - Membuat grid dengan ukuran kolom dan baris yang bervariasi (`col-span-2`, `row-span-2`, dll).
   - Card pertama mungkin membentang lebar (Feature Promo), card kedua berbentuk persegi (Square Card), card ketiga memanjang ke bawah (Vertical Card), dst.
2. **Estetika Tailwind UI**:
   - Menghapus komponen `WigunaCard` lama yang mungkin terlalu *rigid*.
   - Menggantinya dengan desain *card* *sleek* berlatar belakang gradien halus, efek *glassmorphism*, bayangan (*shadow-sm* hingga *shadow-xl* saat *hover*), dan *border* super tipis (`ring-1 ring-gray-900/5`).
   - Teks yang *clean* dengan hierarki visual yang jelas (Badge diskon di atas, Judul besar, Deskripsi ringkas).
3. **Responsivitas Mulus**:
   - Mobile: Semua *card* ditumpuk lurus 1 kolom.
   - Tablet: 2 kolom dengan variasi lebar.
   - Desktop: Grid kompleks (misal 3 atau 4 kolom) yang saling mengunci dengan sempurna layaknya *bento box*.

## User Review Required
> [!IMPORTANT]
> Karena komponen `WigunaCard` lama akan saya ganti dengan desain kustom langsung di dalam file `bento-promo-section.tsx`, apakah Anda setuju dengan pendekatan ini? Ini akan memberikan fleksibilitas penuh untuk membuat *Bento Grid* yang jauh lebih estetik!

Silakan berikan persetujuan jika Anda ingin saya langsung mengeksekusinya.
