# 📦 SOW ADDENDUM — Content Migration & Media Import
## Bengkel Wiguna | Headless WordPress → Next.js

> **Lampirkan ke:** `CLAUDE.md` (atau baca bersamaan sebagai konteks tambahan)
> **Scope:** Import semua konten existing (Posts, Pages, Services, Promosi) + migrasi aset gambar

---

## 🧭 PEMAHAMAN ARSITEKTUR DULU

Karena project ini menggunakan **WordPress yang tetap aktif sebagai backend** (bukan pindah ke CMS baru), strategi migrasinya BERBEDA dari migrasi ke Sanity/Contentful:

```
[SITUASI KITA]

WordPress existing (bengkelwiguna.com)
         ↓
   TETAP jadi CMS + Media Server
         ↓
   Diakses via REST API oleh Next.js
         ↓
   Next.js = Frontend rendering saja

[BUKAN INI]
WordPress → Export → Import ke CMS baru ❌
```

Artinya **konten tidak perlu dipindahkan**, tapi kita perlu:
1. **Snapshot/backup** semua konten sebagai safety net
2. **Download semua media** ke project (untuk `/public` atau CDN mandiri)
3. **Script otomasi** untuk fetch & map semua konten ke struktur Next.js

---

## 🛠️ TOOLS YANG DIGUNAKAN

### Tool 1: `wp-cli` — Swiss Army Knife untuk WP
Jika kamu punya akses SSH ke server WordPress:

```bash
# Install wp-cli di server
curl -O https://raw.githubusercontent.com/wp-cli/wp-cli/v2.9.0/utils/wp-completion.bash
curl -O https://raw.githubusercontent.com/wp-cli/wp-cli/v2.10.0/utils/wp-completion.bash

# Export semua konten ke XML (WXR format)
wp export --path=/var/www/html --dir=/tmp/wp-export --allow-root

# Export hanya posts
wp export --post_type=post --path=/var/www/html --dir=/tmp/wp-export --allow-root

# Export hanya pages  
wp export --post_type=page --path=/var/www/html --dir=/tmp/wp-export --allow-root

# Export custom post types (services, promosi, dll)
wp export --post_type=services --path=/var/www/html --dir=/tmp/wp-export --allow-root
wp export --post_type=promosi --path=/var/www/html --dir=/tmp/wp-export --allow-root

# Download semua media (gambar, PDF, dll) via rsync
rsync -avz --include="*.jpg" --include="*.jpeg" --include="*.png" \
  --include="*.webp" --include="*.gif" --include="*.svg" --include="*.pdf" \
  user@server:/var/www/html/wp-content/uploads/ \
  ./public/wp-content/uploads/
```

### Tool 2: WordPress REST API — Tanpa SSH
Jika kamu hanya punya akses ke domain (tidak ada SSH):

```bash
# Cek semua pages
curl "https://bengkelwiguna.com/wp-json/wp/v2/pages?per_page=100&_embed" | jq '.[].slug'

# Cek semua posts/blog
curl "https://bengkelwiguna.com/wp-json/wp/v2/posts?per_page=100&_embed" | jq '.[].slug'

# Cek media library
curl "https://bengkelwiguna.com/wp-json/wp/v2/media?per_page=100" | jq '.[] | {id, slug, source_url}'

# Cek custom post types yang ada (harus sudah di-expose di WP)
curl "https://bengkelwiguna.com/wp-json/wp/v2/types" | jq 'keys'
```

### Tool 3: `node-wordpress-migration` — Script Custom (Recommended)
Script Node.js yang kita buat sendiri untuk fetch + download semua konten:

```javascript
// scripts/migrate-content.mjs
// Jalankan: node scripts/migrate-content.mjs

import fs from 'fs'
import path from 'path'
import https from 'https'
import { pipeline } from 'stream/promises'

const WP_API = 'https://bengkelwiguna.com/wp-json/wp/v2'
const OUTPUT_DIR = './migration-data'
const IMAGES_DIR = './public/images/migrated'

// Pastikan folder output ada
fs.mkdirSync(OUTPUT_DIR, { recursive: true })
fs.mkdirSync(IMAGES_DIR, { recursive: true })

// Utility: fetch semua halaman (handle pagination)
async function fetchAll(endpoint, params = {}) {
  let page = 1
  let allItems = []
  
  while (true) {
    const url = new URL(`${WP_API}/${endpoint}`)
    url.searchParams.set('per_page', '100')
    url.searchParams.set('page', page)
    url.searchParams.set('_embed', '1')
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))
    
    const res = await fetch(url.toString())
    if (!res.ok) break
    
    const items = await res.json()
    if (!items.length) break
    
    allItems = [...allItems, ...items]
    
    const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '1')
    if (page >= totalPages) break
    page++
    
    // Rate limiting — jangan hammer server
    await new Promise(r => setTimeout(r, 300))
  }
  
  return allItems
}

// Download gambar ke local
async function downloadImage(url, filename) {
  const filepath = path.join(IMAGES_DIR, filename)
  if (fs.existsSync(filepath)) {
    console.log(`⏭️  Skip (exists): ${filename}`)
    return filepath
  }
  
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buffer = await res.arrayBuffer()
    fs.writeFileSync(filepath, Buffer.from(buffer))
    console.log(`✅ Downloaded: ${filename}`)
    return filepath
  } catch (err) {
    console.error(`❌ Failed: ${url} — ${err.message}`)
    return null
  }
}

// Extract semua URL gambar dari konten HTML
function extractImageUrls(htmlContent) {
  const regex = /https?:\/\/bengkelwiguna\.com\/wp-content\/uploads\/[^\s"')>]+\.(jpg|jpeg|png|webp|gif|svg)/gi
  return [...new Set(htmlContent.match(regex) || [])]
}

// Main migration runner
async function migrate() {
  console.log('🚀 Memulai migrasi konten Bengkel Wiguna...\n')

  // === 1. FETCH SEMUA PAGES ===
  console.log('📄 Fetching pages...')
  const pages = await fetchAll('pages')
  fs.writeFileSync(`${OUTPUT_DIR}/pages.json`, JSON.stringify(pages, null, 2))
  console.log(`   → ${pages.length} pages ditemukan\n`)

  // === 2. FETCH SEMUA POSTS (Blog) ===
  console.log('📝 Fetching blog posts...')
  const posts = await fetchAll('posts')
  fs.writeFileSync(`${OUTPUT_DIR}/posts.json`, JSON.stringify(posts, null, 2))
  console.log(`   → ${posts.length} posts ditemukan\n`)

  // === 3. FETCH MEDIA LIBRARY ===
  console.log('🖼️  Fetching media library...')
  const media = await fetchAll('media')
  fs.writeFileSync(`${OUTPUT_DIR}/media.json`, JSON.stringify(media, null, 2))
  console.log(`   → ${media.length} media items ditemukan\n`)

  // === 4. FETCH CUSTOM POST TYPES ===
  // Sesuaikan dengan CPT yang ada di WP Bengkel Wiguna
  const cptList = ['services', 'promosi'] // tambah jika ada CPT lain
  
  for (const cpt of cptList) {
    console.log(`📦 Fetching CPT: ${cpt}...`)
    try {
      const items = await fetchAll(cpt)
      fs.writeFileSync(`${OUTPUT_DIR}/${cpt}.json`, JSON.stringify(items, null, 2))
      console.log(`   → ${items.length} ${cpt} items ditemukan\n`)
    } catch (e) {
      console.warn(`   ⚠️  CPT "${cpt}" tidak ditemukan atau tidak di-expose via REST API`)
      console.warn(`   → Tambahkan ke functions.php: add_filter('rest_api_allowed_post_types', ...)`)
    }
  }

  // === 5. DOWNLOAD SEMUA GAMBAR ===
  console.log('⬇️  Download gambar dari media library...')
  const imageLog = []
  
  for (const item of media) {
    if (!item.source_url) continue
    
    const url = item.source_url
    const filename = path.basename(url)
    const localPath = await downloadImage(url, filename)
    
    imageLog.push({
      id: item.id,
      originalUrl: url,
      localPath: localPath ? `/images/migrated/${filename}` : null,
      alt: item.alt_text,
      title: item.title?.rendered,
      width: item.media_details?.width,
      height: item.media_details?.height,
    })
    
    // Rate limiting
    await new Promise(r => setTimeout(r, 100))
  }
  
  fs.writeFileSync(`${OUTPUT_DIR}/image-map.json`, JSON.stringify(imageLog, null, 2))
  console.log(`   → ${imageLog.length} gambar diproses\n`)

  // === 6. SCAN GAMBAR DALAM KONTEN (yang tidak di media library) ===
  console.log('🔍 Scanning gambar dalam konten halaman & posts...')
  const allContent = [
    ...pages.map(p => p.content?.rendered || ''),
    ...posts.map(p => p.content?.rendered || ''),
  ].join(' ')
  
  const inlineImageUrls = extractImageUrls(allContent)
  console.log(`   → ${inlineImageUrls.length} unique image URLs dalam konten`)
  
  const inlineImageLog = []
  for (const url of inlineImageUrls) {
    const filename = `inline_${path.basename(url)}`
    const localPath = await downloadImage(url, filename)
    inlineImageLog.push({ originalUrl: url, localPath: localPath ? `/images/migrated/${filename}` : null })
    await new Promise(r => setTimeout(r, 100))
  }
  
  fs.writeFileSync(`${OUTPUT_DIR}/inline-image-map.json`, JSON.stringify(inlineImageLog, null, 2))
  
  // === 7. GENERATE URL REPLACEMENT MAP ===
  console.log('\n📋 Generating URL replacement map...')
  const allImageMaps = [...imageLog, ...inlineImageLog]
  const urlMap = {}
  
  for (const img of allImageMaps) {
    if (img.originalUrl && img.localPath) {
      urlMap[img.originalUrl] = img.localPath
    }
  }
  
  fs.writeFileSync(`${OUTPUT_DIR}/url-replacement-map.json`, JSON.stringify(urlMap, null, 2))
  
  console.log('\n✅ MIGRASI SELESAI!')
  console.log(`📁 Semua data tersimpan di: ${OUTPUT_DIR}/`)
  console.log(`🖼️  Gambar tersimpan di: ${IMAGES_DIR}/`)
  console.log('\nFile yang dihasilkan:')
  console.log('  → migration-data/pages.json')
  console.log('  → migration-data/posts.json')
  console.log('  → migration-data/media.json')
  console.log('  → migration-data/services.json')
  console.log('  → migration-data/promosi.json')
  console.log('  → migration-data/image-map.json')
  console.log('  → migration-data/inline-image-map.json')
  console.log('  → migration-data/url-replacement-map.json')
}

migrate().catch(console.error)
```

### Tool 4: `wget` / `curl` — Bulk Download Gambar via Terminal
Alternatif cepat jika mau download semua gambar dari WP uploads folder:

```bash
# Download seluruh /wp-content/uploads/ secara rekursif
wget --mirror \
     --no-parent \
     --accept="*.jpg,*.jpeg,*.png,*.webp,*.gif,*.svg,*.pdf" \
     --directory-prefix=./public/wp-content \
     --cut-dirs=1 \
     https://bengkelwiguna.com/wp-content/uploads/

# Atau pakai curl + xargs untuk URL list dari API
curl "https://bengkelwiguna.com/wp-json/wp/v2/media?per_page=100" \
  | jq -r '.[].source_url' \
  | xargs -P 4 -I {} curl -O --create-dirs --output-dir ./public/images/migrated {}
```

---

## 📋 LANGKAH MIGRASI KONTEN — STEP BY STEP

### Phase M1: Audit Konten Existing

```bash
# 1. Install dependencies
npm install node-fetch jq  # jika belum ada

# 2. Audit via API — lihat semua yang ada
curl -s "https://bengkelwiguna.com/wp-json/wp/v2/types" | python3 -m json.tool

# 3. Hitung jumlah konten
echo "Pages:" && curl -sI "https://bengkelwiguna.com/wp-json/wp/v2/pages?per_page=1" | grep X-WP-Total
echo "Posts:" && curl -sI "https://bengkelwiguna.com/wp-json/wp/v2/posts?per_page=1" | grep X-WP-Total  
echo "Media:" && curl -sI "https://bengkelwiguna.com/wp-json/wp/v2/media?per_page=1" | grep X-WP-Total
```

### Phase M2: Jalankan Migration Script

```bash
# Jalankan script fetch & download
node scripts/migrate-content.mjs

# Hasil: migration-data/ berisi semua konten dalam JSON
# Hasil: public/images/migrated/ berisi semua gambar
```

### Phase M3: Expose Custom Post Types di WordPress

Tambahkan ini ke `functions.php` di WordPress (penting untuk Services & Promosi):

```php
// Pastikan CPT Services dan Promosi bisa diakses via REST API
function bengkel_expose_cpt_rest() {
    $post_types = ['services', 'promosi']; // sesuaikan nama CPT
    foreach ($post_types as $pt) {
        $args = get_post_type_object($pt);
        if ($args) {
            $args->show_in_rest = true;
            $args->rest_base = $pt;
        }
    }
}
add_action('init', 'bengkel_expose_cpt_rest', 30);

// Expose Yoast SEO data di REST API response
function bengkel_add_yoast_to_rest() {
    $post_types = get_post_types(['public' => true], 'names');
    foreach ($post_types as $pt) {
        add_filter("rest_prepare_{$pt}", function($response, $post, $request) {
            $yoast_meta = get_post_meta($post->ID, '_yoast_wpseo_metadesc', true);
            $yoast_title = get_post_meta($post->ID, '_yoast_wpseo_title', true);
            $response->data['yoast_meta'] = [
                'description' => $yoast_meta,
                'title'       => $yoast_title,
            ];
            return $response;
        }, 10, 3);
    }
}
add_action('rest_api_init', 'bengkel_add_yoast_to_rest');
```

### Phase M4: Update next.config.js untuk Gambar

Setelah gambar didownload ke `/public/images/migrated/`, update config:

```javascript
// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      // WP server (masih dibutuhkan untuk gambar yang belum dimigrasi)
      {
        protocol: 'https',
        hostname: 'bengkelwiguna.com',
        pathname: '/wp-content/uploads/**',
      },
    ],
    // Jika memakai Cloudinary/Imgix sebagai CDN untuk gambar migrated:
    // loader: 'cloudinary',
    // path: 'https://res.cloudinary.com/your-cloud-name/image/fetch/',
  },
}
```

### Phase M5: Replace URL Gambar di Konten

```javascript
// scripts/replace-image-urls.mjs
// Ganti semua URL WP dengan URL lokal/CDN dalam konten JSON

import fs from 'fs'

const urlMap = JSON.parse(fs.readFileSync('./migration-data/url-replacement-map.json', 'utf-8'))
const posts = JSON.parse(fs.readFileSync('./migration-data/posts.json', 'utf-8'))

function replaceUrls(content) {
  let result = content
  for (const [original, local] of Object.entries(urlMap)) {
    result = result.replaceAll(original, local)
  }
  return result
}

const updatedPosts = posts.map(post => ({
  ...post,
  content: {
    ...post.content,
    rendered: replaceUrls(post.content?.rendered || '')
  }
}))

fs.writeFileSync('./migration-data/posts-with-local-images.json', JSON.stringify(updatedPosts, null, 2))
console.log('✅ URL replacement selesai')
```

---

## 📁 STRATEGI PENYIMPANAN GAMBAR

Ada 3 opsi, pilih sesuai kebutuhan:

### Opsi A: Gambar Tetap di WP Server (Paling Mudah)
```
Pros: Tidak perlu download apa-apa
Cons: Next.js bergantung ke server WP untuk gambar
Cons: Jika WP server down, gambar ikut hilang

Setup: Cukup whitelist domain WP di next.config.js
       Gunakan <Image src="https://bengkelwiguna.com/wp-content/uploads/..." />
```

### Opsi B: Download ke /public + Git (Untuk Site Kecil ✅ RECOMMENDED untuk Bengkel Wiguna)
```
Pros: Gambar jadi bagian dari project, deploy bersama Next.js
Pros: Tidak bergantung ke server WP saat runtime
Cons: Repo git akan besar jika ada ratusan gambar besar

Setup: Jalankan scripts/migrate-content.mjs
       Gambar masuk ke /public/images/migrated/
       Commit ke git
```

### Opsi C: Upload ke CDN (Cloudinary / Bunny CDN / R2)
```
Pros: Optimal untuk production, transformasi gambar otomatis
Pros: Tidak memberatkan git repo
Cons: Ada biaya CDN

Setup Cloudinary:
  npx cloudinary-cli upload-dir ./public/images/migrated \
    --folder bengkel-wiguna \
    --cloud_name your_cloud_name

Setup Bunny.net Storage:
  # Upload via FTP atau Bunny API
  curl -X PUT "https://storage.bunnycdn.com/bengkel-wiguna-storage/" \
    -H "AccessKey: YOUR_KEY" \
    --data-binary @./public/images/migrated/gambar.jpg
```

---

## 🗂️ MAPPING KONTEN KE NEXT.JS PAGES

Setelah konten di-fetch via API, ini cara petanya:

```typescript
// lib/wordpress.ts — tambahkan fungsi-fungsi ini

// PAGES — halaman statis
export async function getPageBySlug(slug: string) {
  const res = await fetch(`${WP_API}/pages?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  })
  const data = await res.json()
  return data[0] ?? null
}

// POSTS — blog artikel
export async function getAllPosts(page = 1, perPage = 12) {
  const res = await fetch(`${WP_API}/posts?page=${page}&per_page=${perPage}&_embed`, {
    next: { revalidate: 3600 }
  })
  return {
    posts: await res.json(),
    total: parseInt(res.headers.get('X-WP-Total') || '0'),
    totalPages: parseInt(res.headers.get('X-WP-TotalPages') || '1'),
  }
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed`, {
    next: { revalidate: 3600 }
  })
  const data = await res.json()
  return data[0] ?? null
}

// SERVICES — custom post type
export async function getAllServices() {
  const res = await fetch(`${WP_API}/services?per_page=100&_embed`, {
    next: { revalidate: 86400 } // 24 jam, services jarang berubah
  })
  return res.json()
}

export async function getServiceBySlug(slug: string) {
  const res = await fetch(`${WP_API}/services?slug=${slug}&_embed`, {
    next: { revalidate: 86400 }
  })
  const data = await res.json()
  return data[0] ?? null
}

// PROMOSI
export async function getAllPromosi() {
  const res = await fetch(`${WP_API}/promosi?per_page=100&_embed`, {
    next: { revalidate: 3600 }
  })
  return res.json()
}

// MEDIA — ambil semua gambar dari library
export async function getMediaById(id: number) {
  const res = await fetch(`${WP_API}/media/${id}`, {
    next: { revalidate: 86400 }
  })
  return res.json()
}

// FEATURED IMAGE helper
export function getFeaturedImage(post: any) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.source_url ?? null
}

export function getFeaturedImageAlt(post: any) {
  return post?._embedded?.['wp:featuredmedia']?.[0]?.alt_text ?? ''
}
```

---

## 🔄 GENERATE STATIC PARAMS dari Konten WP

```typescript
// app/services/[slug]/page.tsx
export async function generateStaticParams() {
  const services = await getAllServices()
  return services.map((s: any) => ({ slug: s.slug }))
}

// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  const { posts } = await getAllPosts(1, 100)
  return posts.map((p: any) => ({ slug: p.slug }))
}
```

---

## ✅ CHECKLIST MIGRASI KONTEN

```
[ ] Script migrate-content.mjs sudah dijalankan
[ ] migration-data/pages.json berisi semua halaman
[ ] migration-data/posts.json berisi semua artikel blog
[ ] migration-data/services.json berisi semua halaman services
[ ] migration-data/promosi.json berisi semua konten promosi
[ ] migration-data/image-map.json berisi mapping URL gambar
[ ] Semua gambar berhasil didownload ke public/images/migrated/
[ ] CPT Services & Promosi sudah di-expose via WP REST API
[ ] Yoast data muncul di REST API response
[ ] Fungsi-fungsi di lib/wordpress.ts sudah ditest
[ ] generateStaticParams() sudah berfungsi untuk semua dynamic routes
[ ] Featured images tampil dengan benar di semua halaman
[ ] Tidak ada broken image link (cek browser console)
[ ] next/image tidak throw error untuk domain yang tidak di-whitelist
```

---

## ⚠️ HAL YANG PERLU DIVERIFIKASI DI WP BACKEND

Sebelum Next.js bisa fetch konten dengan benar:

1. **Plugin Yoast SEO** → aktif dan ter-konfigurasi
2. **CPT Services dan Promosi** → `show_in_rest = true`
3. **WordPress REST API** → tidak diblok oleh plugin security (Wordfence, dll)
4. **CORS Headers** → tambahkan di `.htaccess` atau `nginx.conf`:

```apache
# .htaccess — tambahkan di bawah RewriteEngine On
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "https://bengkelwiguna.com"
  Header set Access-Control-Allow-Methods "GET, OPTIONS"
  Header set Access-Control-Allow-Headers "Content-Type"
</IfModule>
```

5. **Application Password** → buat di WP Admin → Users → Application Passwords (jika ada endpoint yang butuh auth)

---

*SOW Addendum ini melengkapi CLAUDE.md utama. Baca keduanya sebelum memulai implementasi.*
