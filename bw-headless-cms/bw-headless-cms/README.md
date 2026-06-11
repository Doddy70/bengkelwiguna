# Bengkel Wiguna Headless CMS Plugin

Plugin WordPress untuk integrasi headless CMS dengan Next.js frontend.

## Instalasi

### Opsi 1: Upload via WordPress Admin

1. **Download file plugin:**
   ```
   bexon/bw-headless-cms/bw-headless-cms.php
   ```

2. **Zip folder plugin:**
   ```bash
   cd bexon/bw-headless-cms
   zip -r bw-headless-cms.zip .
   ```

3. **Upload ke WordPress:**
   - Buka WordPress Admin → Plugins → Add New → Upload Plugin
   - Upload file `bw-headless-cms.zip`
   - Activate plugin

### Opsi 2: Manual Upload via FTP/cPanel

1. **Upload folder ke server:**
   ```
   wp-content/plugins/bw-headless-cms/
   ```

2. **Buka SSH/FTP dan jalankan:**
   ```bash
   # Jika pakai SSH
   cd wp-content/plugins
   # Download atau copy file bw-headless-cms.php ke folder ini

   # Pastikan file permission benar
   chmod 644 bw-headless-cms.php
   ```

3. **Aktivasi via WordPress Admin:**
   - Plugins →Installed Plugins
   - Find "Bengkel Wiguna Headless CMS API"
   - Click "Activate"

## Setelah Aktivasi

### 1. Flush Rewrite Rules
- Buka **Settings → Permalinks**
- Klik **Save Changes** (tanpa ubah apapun)
- Ini mendaftarkan endpoint API baru

### 2. Verifikasi Instalasi
Test endpoint di browser atau curl:

```bash
# Test GET endpoint
curl https://backend.bengkelwiguna.com/wp-json/bw/v1/homepage-settings

# Response contoh:
{
  "hero": {...},
  "services": {...},
  "business": {...},
  "sections": {...}
}
```

## API Endpoints

### Homepage Settings

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/wp-json/bw/v1/homepage-settings` | Ambil semua pengaturan |
| POST | `/wp-json/bw/v1/homepage-settings` | Simpan pengaturan |
| GET | `/wp-json/bw/v1/homepage-settings/{section}` | Ambil section tertentu |
| PATCH | `/wp-json/bw/v1/homepage-settings/{section}` | Update section tertentu |

### Other Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/wp-json/bw/v1/site-info` | Info site WordPress |
| GET | `/wp-json/bw/v1/services-full` | Semua services dengan meta |
| GET | `/wp-json/bw/v1/promosi-active` | Promosi yang aktif |

## Admin Menu

Setelah terinstall, akan muncul menu baru di WordPress Admin:
- **BW Headless CMS** (sidebar menu dengan icon gear)

Menu ini menampilkan:
- Info endpoint API
- Status settings
- Link dokumentasi

## Troubleshooting

### Endpoint Tidak Ditemukan
1. Pastikan plugin sudah activated
2. Flush rewrite rules: Settings → Permalinks → Save
3. Test di incognito browser

### CORS Error
Plugin sudah mengkonfigurasi CORS untuk:
- `https://bengkelwiguna.com`
- `https://www.bengkelwiguna.com`
- `http://localhost:3000`
- `http://127.0.0.1:3000`

Untuk domain lain, edit di `bw-headless-cms.php` line 12-19.

### Save Gagal (POST/PATCH)
- Pastikan user punya capability `edit_posts`
- Login sebagai Administrator

## Struktur Data

### Hero Slides
```json
{
  "hero": {
    "slides": [
      {
        "title": "Judul Slide",
        "subtitle": "Deskripsi slide",
        "btnText": "Teks Tombol",
        "btnLink": "/promosi/",
        "bgImage": "/images/slider/slide.jpg",
        "enabled": true
      }
    ],
    "autoplay": true,
    "autoplayInterval": 6000
  }
}
```

### Business Info
```json
{
  "business": {
    "name": "Bengkel Wiguna",
    "phone": "+62 878-1777-3888",
    "whatsapp": "6287817773888",
    "email": "info@bengkelwiguna.com",
    "address": "Depok, Jawa Barat",
    "openingHours": "Senin-Sabtu: 08.00 - 17.00"
  }
}
```

### Sections Visibility
```json
{
  "sections": {
    "hero": true,
    "services": true,
    "strategy": true,
    "process": true,
    "portfolios": true,
    "blogs": true
  }
}
```

## Update Plugin

Untuk update, deactivate → replace files → activate ulang.

## Support

Untuk pertanyaan tentang plugin ini, hubungi developer yang mengelola WordPress backend.