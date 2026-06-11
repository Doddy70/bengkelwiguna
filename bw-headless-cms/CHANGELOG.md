# Plugin BW Headless CMS — Changelog & Documentation

**Current Version:** 1.7.0
**Last Updated:** 2026-06-07
**Author:** Bengkel Wiguna

---

## 📦 Versi Update History

| Versi | Tanggal | Perubahan |
|-------|---------|-----------|
| **1.7.0** | 2026-06-07 | FAQ fields (bw_spesialis_faq, bw_spesialis_faq_image) + REST API |
| **1.6.0** | 2026-06-06 | AI Editor Assistant, Gallery metabox |
| **1.5.0** | 2026-06-06 | Security hardening: revalidate permission, rate limiting, log injection fix |
| **1.4.0** | 2026-06-05 | Dual AI Provider (Gemini + OpenAI), Provider dropdown UI |
| **1.3.0** | 2026-06-05 | CPT Registration + Menu REST API + Paket Service |
| **1.2.0** | 2026-06-05 | Paket Service CPT + REST endpoints |
| **1.1.0** | 2025-07-03 | Initial release dengan REST API + AI Editor |
| **1.0.0** | 2025 | Initial development |

---

## 🔧 Fitur Plugin v1.7.0

### FAQ Fields (NEW in v1.7.0)

Layanan Spesialis now supports FAQ fields for detailed Q&A sections:

**Meta Fields:**
| Field | Type | Description |
|-------|------|-------------|
| `bw_spesialis_faq` | JSON string | Array of `{q, a}` objects |
| `bw_spesialis_faq_image` | URL string | Optional image for FAQ section |

**FAQ Format:**
```json
[
  {"q": "Apa itu Semi Overhaul?", "a": "Proses overhauling..."},
  {"q": "Berapa lama?", "a": "Biasanya 2-3 hari..."}
]
```

**REST API:**
- `GET /bw/v1/layanan-spesialis-full` — Returns all with FAQ
- `GET /bw/v1/layanan-spesialis/{slug}` — Returns single with FAQ

### Gallery Metabox (v1.6.0)

Layanan Spesialis includes gallery support:
- Multiple image upload
- Stored in `gallery` meta field as JSON array of URLs

### Dual AI Provider System (NEW)

Plugin sekarang mendukung **dua AI provider** dengan automatic fallback:

| Provider | Model Default | Endpoint | Multimodal |
|----------|--------------|----------|------------|
| **Google Gemini** | Gemini 2.0 Flash | `generativelanguage.googleapis.com` | ✅ (via image_id) |
| **OpenAI** | GPT-4o Mini | `api.openai.com/v1/chat/completions` | ✅ (via base64 image) |
| **Both (Auto-fallback)** | — | Gemini → OpenAI | ✅ |

**Provider Strategy:**
1. `gemini` — Gemini only (default)
2. `openai` — OpenAI only
3. `both` — Gemini primary → OpenAI fallback (recommended for reliability)

**Konfigurasi via WordPress Settings (Settings → General):**
- `bw_ai_provider` — Pilih provider: `gemini`, `openai`, atau `both`
- `bw_gemini_api_key` — Google Gemini API Key
- `bw_gemini_model` — Model Gemini (gemini-2.0-flash, gemini-2.5-flash, dll.)
- `bw_openai_api_key` — OpenAI API Key
- `bw_openai_model` — Model OpenAI (gpt-4o-mini, gpt-4o, gpt-4-turbo)

**UI (Gutenberg Block Editor):**
- Dropdown selector "AI Provider:" di panel BW AI Assistant sidebar
- Status message menampilkan provider yang digunakan setelah generate
- Help text menjelaskan setiap opsi

**Affected Components:**
- AI Editor Assistant (`class-bw-editor-assistant.php`) — dual provider `call_ai()`
- REST AI Chat (`class-bw-rest-controller.php`) — dual provider `handle_ai_chat()`

### 1. Custom Post Types (Tanpa CPT UI Plugin)

Plugin register 3 CPT secara otomatis saat aktivasi:

| CPT | Slug URL | REST Base | Supports |
|-----|----------|-----------|----------|
| **Layanan** | `/services/` | `services` | title, editor, thumbnail, excerpt, custom-fields |
| **Promosi** | `/promosi/` | `promosi` | title, editor, thumbnail, excerpt, custom-fields |
| **Paket Service** | `/paket-service/` | `paket_service` | title, editor, thumbnail, excerpt, custom-fields |

**Lokasi kode:** `includes/class-bw-post-types.php`

#### Meta Fields per CPT

**Services:**
- `harga` (string) — Harga layanan
- `durasi` (string) — Estimasi durasi
- `garansi` (string) — Kebijakan garansi

**Promosi:**
- `harga_asli` (string) — Harga sebelum diskon
- `harga_promo` (string) — Harga setelah diskon
- `diskon_persen` (number) — Persentase diskon
- `tanggal_mulai` (string) — Tanggal mulai (YYYY-MM-DD)
- `tanggal_selesai` (string) — Tanggal akhir (YYYY-MM-DD)
- `include` (string) — Daftar yang termasuk (pisahkan dengan |)

**Paket Service:**
- `harga_paket` (string) — Harga paket
- `durasi_paket` (string) — Estimasi durasi
- `garansi_paket` (string) — Kebijakan garansi
- `items_paket` (string) — Daftar item service (pisahkan dengan |)
- `jenis_kendaraan` (string) — Jenis kendaraan (SUV, LCGC, dll)

---

### 2. REST API Endpoints

**Namespace:** `/wp-json/bw/v1/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/homepage-settings` | Ambil semua settings homepage |
| GET | `/homepage-settings/{section}` | Ambil satu section settings |
| POST | `/homepage-settings` | Update semua settings |
| PATCH | `/homepage-settings/{section}` | Update satu section |
| GET | `/site-info` | Info site (nama, deskripsi, URL) |
| GET | `/services-full` | Semua layanan dengan meta |
| GET | `/services/{slug}` | Detail satu layanan |
| GET | `/promosi-active` | Semua promo aktif (filter tanggal) |
| GET | `/promosi/{slug}` | Detail satu promo |
| GET | `/paket-service-full` | Semua paket service |
| GET | `/paket-service/{slug}` | Detail satu paket service |
| GET | `/menu/{location}` | Navigation menu (WP Nav API) |
| POST | `/revalidate` | Trigger ISR revalidation ke Next.js |

**Namespace:** `/wp-json/wp-abilities/v1/`

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/bengkel/ai-chat` | AI chat assistant |

---

### 3. WP Abilities API Registration

Plugin register 4 abilities untuk WP Abilities API:

| Ability | Description | Permission |
|---------|-------------|-------------|
| `bw/flush-cache` | Clear transient caches | manage_options |
| `bw/get-service-portfolio-data` | Optimized service + prev/next slug | public |
| `bw/ai-create-cpt` | Create CPT dengan AI | publish_posts |
| `bw/ai-generate-cpt-content` | Generate konten CPT via AI | edit_posts |

**Lokasi kode:** `includes/class-bw-abilities.php`

---

### 4. AI Editor Assistant

Integrasi TinyMCE + Gutenberg untuk generate konten langsung di editor WordPress:

**Action Types:**
- `services` — Generate artikel layanan lengkap
- `promosi` — Generate penawaran promo (AIDA framework)
- `improve` — Kembangkan teks yang dipilih
- `grammar` — Koreksi ejaan & tata bahasa
- `shorten` — Ringkas teks
- `lengthen` — Perluas teks
- `custom` — Prompt bebas

**Fitur:**
- Sinkronisasi Rank Math SEO fields (title, description, focus keyword)
- Featured Image extraction dari flyer (multimodal AI)
- Support TinyMCE (Classic Editor) + Gutenberg (Block Editor)

**Lokasi kode:** `includes/class-bw-editor-assistant.php`

---

### 5. On-Demand ISR Revalidation

Otomatis trigger revalidation ke Next.js saat konten berubah:

- Trigger saat `transition_post_status` (publish/update/trash)
- Flush transient cache untuk services, promosi, paket_service
- Webhook ke `/api/revalidate` dengan secret authentication

**Lokasi kode:** `includes/class-bw-isr.php`

---

### 6. Navigation Menu Integration (v1.3.0)

Hybrid menu system — prioritas: BW API → Plugin API → Static fallback

**Endpoint:** `GET /wp-json/bw/v1/menu/{location}`

**Strategies:**
1. **WP Navigation API** (WP 6.5+) — Built-in, no plugin tambahan
2. **WP REST API Menus plugin** — Compatibility fallback
3. **Fallback** — Returns empty items → frontend pakai static nav-items.json

**Lokasi kode:** `includes/class-bw-rest-controller.php` → `get_menu_by_location()`

---

## 📁 Struktur File Plugin

```
bw-headless-cms/
├── bw-headless-cms.php          # Main plugin file
├── README.md                     # Plugin documentation
├── deploy-ops.sh                # Deployment operations script
├── wp-cli.yml                   # WP-CLI config
├── assets/
│   ├── css/
│   │   └── bw-editor-assistant.css
│   └── js/
│       └── bw-editor-assistant.js
├── includes/
│   ├── class-bw-admin.php              # Admin settings page
│   ├── class-bw-post-types.php        # CPT registration (v1.3.0)
│   ├── class-bw-rest-controller.php    # REST API endpoints
│   ├── class-bw-isr.php                # ISR revalidation
│   ├── class-bw-abilities.php           # WP Abilities API
│   └── class-bw-editor-assistant.php   # AI Editor
└── docs/
    └── abilities-audit.md               # Abilities documentation
```

---

## 🚀 Installation & Activation

### Requirements
- WordPress 6.0+
- PHP 7.4+
- Rewrite rules enabled

### Steps
1. Upload plugin folder ke `/wp-content/plugins/`
2. Activate via **Plugins → Installed Plugins**
3. Flush permalinks: **Settings → Permalinks → Save Changes**
4. Konfigurasi API Key: **Settings → General** (Gemini API Key)

---

## ⚙️ Configuration

### Environment Variables (Next.js)
```env
NEXT_PUBLIC_WP_API_URL=https://backend.bengkelwiguna.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://bengkelwiguna.com
REVALIDATE_SECRET=your-secret-token
```

### WordPress Settings
- **Google Gemini API Key** — Untuk AI Editor Assistant
- **Next.js Site URL** — Untuk ISR webhook trigger
- **Revalidation Secret** — Auto-generated jika kosong

---

## 🔒 Security Notes

### Critical Fixes Applied (v1.5.0)

**1. Revalidate Endpoint Permission (class-bw-isr.php)**
- Changed from `__return_true` (publicly accessible) to proper permission callback
- Secret verification via `X-BW-Revalidate-Secret` header (not body)
- Timing-safe comparison using `hash_equals()`
- Returns generic error message to prevent information disclosure

**2. Debug Logs Secret (class-bw-rest-controller.php)**
- Removed hardcoded secret `gemini-debug-2026`
- Now reads from WordPress option `bw_debug_logs_secret`
- Generic error message for both missing and invalid secrets

**3. Log Injection Prevention (bw-headless-cms.php)**
- All user inputs sanitized before logging (sanitize_text_field, sanitize_url)
- Newlines stripped from logged data to prevent log injection
- Request body truncated to 1000 chars
- Uses LOCK_EX for atomic writes

**4. Rate Limiting (v1.5.0)**
- AI Chat endpoint: 20 requests/minute per IP
- AI Editor Assistant: 10 requests/minute per IP
- Uses WordPress transients for distributed-friendly rate limiting
- Cloudflare/Proxy IP detection for accurate client IP

### Security Checklist
- [x] CORS whitelist untuk frontend origins
- [x] Basic auth header bypass untuk WP REST API
- [x] Nonce validation untuk AJAX endpoints
- [x] Capability checks untuk write operations
- [x] Input sanitization pada semua user inputs
- [x] Timing-safe secret comparison
- [x] Rate limiting on AI endpoints
- [x] Log injection prevention

---

## 📋 TODO / Pending

- [ ] WP Abilities API silent fail — perlu admin notice saat WP 6.5+ tidak tersedia
- [x] Rate limiting pada AI Editor Assistant endpoint
- [ ] ISR retry on failure — queue-based retry untuk failed webhook
- [ ] Menu endpoint cache — transient cache untuk menu responses

---

## 📞 Support

- **Backend:** `backend.bengkelwiguna.com`
- **Frontend:** `bengkelwiguna.com`
- **WhatsApp:** +62 878-1777-3888