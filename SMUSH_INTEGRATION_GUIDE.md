# Smush Pro + Next.js Integration Guide

Panduan untuk mengintegrasikan Smush Pro dengan Next.js frontend untuk Core Web Vitals optimization.

## 🎯 Target Core Web Vitals Improvement

| Metric | Before | Target After |
|--------|--------|-------------|
| LCP | ~4000ms | <2500ms |
| CLS | 0 | 0 |
| FCP | ~3500ms | <2000ms |

## 📋 Langkah 1: Konfigurasi Smush Pro di WordPress

### 1.1 Aktifkan Smush CDN

1. Buka **WordPress Dashboard** → **Smush** → **CDN**
2. Klik **Activate CDN**
3. Konfigurasi:
   ```
   ✓ Enable Auto-convert to WebP
   ✓ Enable AVIF (jika tersedia)
   ✓ Enable Lazy Loading
   ✓ Image resizing: Full Size
   ✓ CDN URL: (otomatis dari Smush)
   ```

### 1.2 Konfigurasi Image Settings

```
Smush > Settings > Image:
- ✓ Compress original images
- ✓ Strip metadata
- ✓ Detect and resize oversized images
- ✓ Disable backup copies
- Quality: 85% (optimal for photos)
```

### 1.3 Bulk Smush Semua Images

```
Smush > Bulk Smush:
- Klik "Smush Now" untuk semua images
- Tunggu sampai selesai
- Cek "Skipped" untuk images yang sudah optimal
```

## 🔧 Langkah 2: Konfigurasi Environment Variables

Tambahkan ke `.env.production`:

```env
# Smush Pro CDN
NEXT_PUBLIC_SMUSH_CDN_ENABLED=true
NEXT_PUBLIC_SMUSH_CDN_URL=https://cdn.bengkelwiguna.com
```

> ⚠️ **Important:** Cek URL CDN aktual dari Smush Dashboard.

## 📝 Langkah 3: Update Image Components

### Sebelum (Tanpa Smush):
```tsx
<img src="https://backend.bengkelwiguna.com/wp-content/uploads/slider-1.jpg" />
```

### Sesudah (Dengan Smush):
```tsx
import SmushOptimizedImage from '@/components/performance/SmushOptimizedImage'
import { getOptimizedImageUrl } from '@/lib/wordpress'

// Untuk static images
<SmushOptimizedImage
  src="https://backend.bengkelwiguna.com/wp-content/uploads/slider-1.jpg"
  alt="Hero Image"
  priority
  width={1920}
  height={1080}
/>

// Untuk dynamic images dari WP API
<SmushOptimizedImage
  src={getOptimizedImageUrl(post.featured_image, { width: 800, format: 'webp' })}
  alt={post.title}
  sizes="(max-width: 640px) 100vw, 800px"
/>
```

## ⚡ Langkah 4: Optimize Hero Image (Highest Impact)

Hero image adalah LCP element. Update HeroSlideshow:

```tsx
// src/components/heroui/hero-slideshow.tsx

// Gunakan format WebP via Smush
const optimizedHeroSrc = getOptimizedImageUrl('/images/hero/slider-1.webp', {
  width: 1920,
  quality: 85,
  format: 'webp'
})

// Atau gunakan responsive srcset
const { src, srcset, sizes } = getResponsiveImageSrcSet(
  '/images/hero/slider-1.webp',
  1920
)
```

## 📊 Monitoring & Testing

### 1. Test dengan Lighthouse

```bash
npx lighthouse https://bengkelwiguna.com \
  --preset=perf \
  --form-factor=mobile \
  --output=json \
  --output-path=lighthouse-report.json
```

### 2. Cek Image Headers

```bash
curl -I "https://cdn.bengkelwiguna.com/wp-content/uploads/image.jpg?w=800&format=webp"
```

Seharusnya return:
```
content-type: image/webp
cache-control: public, max-age=31536000
```

### 3. Verify WebP Serving

Buka DevTools → Network → Cek content-type images.

## 🔄 Troubleshooting

### Images tidak serve WebP
1. Cek Smush CDN sudah aktif
2. Pastikan format=webp parameter ada di URL
3. Cek .htaccess tidak blocking

### CLS masih tinggi
1. Pastikan semua images punya width/height
2. Gunakan `fill` dengan parent container ber-dimension
3. Check placeholder images tidak causing shift

### LCP belum optimal
1. Pastikan hero image pakai `priority` dan `fetchPriority="high"`
2. Cek Time to First Byte (TTFB) - mungkin server perlu optimization
3. Verify lazy loading tidak preload hero image

## 📈 Expected Results

Setelah semua konfigurasi:

| Metric | Improvement |
|--------|-------------|
| LCP | ↓ 30-50% (dari WebP + CDN) |
| FCP | ↓ 20-30% (dari lazy loading) |
| CLS | ↓ 100% (dari proper sizing) |
| TTFB | ↓ 40-60% (dari CDN edge) |
| Overall Score | 50 → 85+ |

## 🚀 Quick Wins Checklist

- [ ] Smush CDN activated
- [ ] All images bulk smushed
- [ ] WebP/AVIF conversion enabled
- [ ] Lazy loading enabled
- [ ] Environment variables set
- [ ] Hero image uses priority loading
- [ ] All images have width/height or aspect-ratio
- [ ] Lighthouse scores verified
