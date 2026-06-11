# AI Content Assistant - WordPress Plugin

Plugin WordPress untuk AI Content Assistant menggunakan Google Gemini API.

## Fitur

- 🎯 **Generate Title** — Generate 5 judul SEO-friendly dari konten
- 📝 **Generate Excerpt** — Buat excerpt singkat & menarik (max 160 chars)
- ✨ **Improve Content** — Perbaiki kualitas penulisan secara keseluruhan
- 📋 **Summarize** — Rangkum konten jadi 2-3 poin bullet

## Screenshot

Plugin menyediakan:
- **Dashboard** dengan statistik penggunaan (total request, model, reset stats)
- **Settings Page** dengan konfigurasi API key, model, temperature, max tokens
- **Meta Box** di post editor dengan tombol-tombol AI generation
- **Copy** / **Apply** buttons untuk hasil AI

## Instalasi

### Cara 1: Upload Manual
1. Download folder `ai-content-assistant`
2. ZIP folder tersebut
3. Di WordPress Admin → Plugins → Add New → Upload Plugin
4. Choose file → Install Now → Activate

### Cara 2: FTP / File Manager
1. Upload folder `ai-content-assistant` ke `/wp-content/plugins/`
2. Pastikan strukturnya: `/wp-content/plugins/ai-content-assistant/ai-content-assistant.php`
3. Activate plugin via Plugins page

## Konfigurasi

### 1. Dapatkan API Key
1. Buka [Google AI Studio](https://aistudio.google.com/app/apikey)
2. Login dengan Google account
3. Click "Create API Key" → Copy API key

### 2. Setup di WordPress
1. Buka **AI Content** di sidebar WordPress admin
2. Paste API key ke field "Google Gemini API Key"
3. Pilih model (default: Gemini 2.0 Flash)
4. Atur temperature & max tokens sesuai kebutuhan
5. Enable fitur yang diinginkan
6. Save Settings

## Cara Penggunaan

1. Buat post baru atau edit existing post
2. Di sidebar kanan, cari **"AI Content Assistant"** meta box
3. Klik tombol sesuai fitur yang diinginkan:
   - **Generate Titles** → 5 judul SEO-ready
   - **Generate Excerpt** → excerpt singkat menarik
   - **Improve Writing** → konten yang lebih profesional
   - **Summarize** → rangkuman 2-3 poin
4. Hasil muncul di bawah tombol
5. Gunakan **Copy** untuk copy ke clipboard
6. Gunakan **Apply** untuk masukkan ke editor

## Model yang Didukung

| Model | Keterangan | Kecepatan |
|-------|-------------|-----------|
| `gemini-2.0-flash` | Gemini 2.0 Flash (default) | ⚡⚡⚡⚡⚡ |
| `gemini-1.5-flash` | Gemini 1.5 Flash | ⚡⚡⚡⚡ |
| `gemini-1.5-pro` | Gemini 1.5 Pro (lebih kuat) | ⚡⚡ |

## Requirements

- WordPress 5.0+
- PHP 7.4+
- Google Gemini API key (free tier available)
- HTTPS required untuk API calls

## Troubleshooting

### "API key not configured"
→ Buka AI Content settings dan masukkan API key

### "Invalid API response"
→ Pastikan API key valid dan memiliki quota yang cukup

### Buttons not working
→ Periksa console browser (F12) untuk error messages
→ Pastikan tidak ada conflict dengan plugin lain

### Styles broken
→ Clear cache browser
→ Pastikan CSS loaded: cek `<link id="aica-admin-css"`

## Changelog

### 1.0.0
- Initial release
- Generate Title, Excerpt, Improve Content, Summarize
- Full admin dashboard with stats
- WordPress block editor (Gutenberg) support

## License

GPL v2 or later

## Support

Untuk fitur tambahan atau bug reports, buat issue di repository ini.