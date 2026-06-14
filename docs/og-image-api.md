# OG Image API - Documentation

## Overview

Dynamic Open Graph image generator for Bengkel Wiguna. Generates branded OG images on-demand using Next.js ImageResponse API.

## Usage

### Basic Usage
```
GET /api/og
```

### With Custom Title
```
GET /api/og?title=Service%20Mobil%20Depok
```

### With Type
```
GET /api/og?title=Tune%20Up%20Promo&type=promo
GET /api/og?title=Tips%20Otomotif&type=blog
GET /api/og?title=Layanan%20Unggulan&type=service
```

## Available Types

| Type | Badge | Badge Color | Use Case |
|------|-------|-------------|----------|
| `default` | ONE STOP SERVICE | Gold | Homepage, general |
| `service` | LAYANAN PROFESIONAL | Gold | Service pages |
| `promo` | PROMO SPESIAL | Red | Promo/special offers |
| `blog` | TIPS OTOMOTIF | Green | Blog posts |

## Image Specifications

- **Size**: 1200x630 pixels (optimal for Facebook, LinkedIn, Twitter)
- **Format**: PNG
- **Runtime**: Edge (fast global delivery)

## Social Media Preview Links

### Facebook Debugger
```
https://developers.facebook.com/tools/debug/
```

### Twitter Card Validator
```
https://cards-dev.twitter.com/validator
```

### LinkedIn Post Inspector
```
https://www.linkedin.com/post-inspector/
```

## Implementation in Pages

### Homepage (default)
```typescript
export const metadata = {
  openGraph: {
    images: [
      {
        url: '/api/og?title=Service%20Mobil%20Depok&type=default',
        width: 1200,
        height: 630,
      }
    ]
  }
}
```

### Service Page
```typescript
export async function generateMetadata({ params }) {
  return {
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(serviceTitle)}&type=service`,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}
```

### Promo Page
```typescript
export async function generateMetadata({ params }) {
  return {
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(promoTitle)}&type=promo`,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}
```

### Blog Post
```typescript
export async function generateMetadata({ params }) {
  return {
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(postTitle)}&type=blog`,
          width: 1200,
          height: 630,
        }
      ]
    }
  }
}
```

## Caching

The OG image is cached at the edge. To force refresh:
1. Clear browser cache
2. Add cache-busting query: `/api/og?title=...&v=1`

## Example URLs

```
https://bengkelwiguna.com/api/og?title=Service%20Mobil%20Depok&type=default
https://bengkelwiguna.com/api/og?title=Tune%20Up%20Promo%2020%25&type=promo
https://bengkelwiguna.com/api/og?title=Cara%20Merawat%20Mobil&type=blog
```

---
Generated: 2026-06-14
