# Bengkel Wiguna - Headless WordPress + Next.js

Website resmi **Bengkel Wiguna** - Bengkel One Stop Service terpercaya di Depok.

## 🚀 Tech Stack

- **Frontend**: Next.js 16 (App Router) + Turbopack
- **Styling**: Tailwind CSS + SCSS
- **CMS Backend**: WordPress (Headless via REST API)
- **Deployment**: Vercel

## 📁 Struktur Project

```
bexon/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.js            # Homepage
│   │   ├── services/          # Services pages
│   │   ├── blog/              # Blog pages
│   │   ├── promosi/           # Promosi page
│   │   ├── tentang-wiguna/    # About page
│   │   ├── karir/             # Careers page
│   │   └── lokasi/            # Location page
│   ├── components/            # React components
│   └── lib/
│       ├── wordpress.js       # WP API functions
│       └── constants.js       # Configuration
├── public/                    # Static assets
└── next.config.js             # Next.js config
```

## 🏃‍♂️ Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## 🌐 Environment Variables

Buat file `.env.local` dengan:

```env
NEXT_PUBLIC_WP_API_URL=https://backend.bengkelwiguna.com/wp-json/wp/v2
NEXT_PUBLIC_SITE_URL=https://bengkelwiguna.com
NEXT_PUBLIC_WA_NUMBER=6287817773888
REVALIDATE_SECRET=your-secret-token
```

## 📋 URL Mapping

| Halaman | URL |
|---------|-----|
| Homepage | `/` |
| Services List | `/services/` |
| Service Detail | `/services/[slug]/` |
| Blog List | `/blog/` |
| Blog Post | `/blog/[slug]/` |
| Promosi | `/promosi/` |
| Tentang Kami | `/tentang-wiguna/` |
| Karir | `/karir/` |
| Lokasi | `/lokasi/` |

## ✅ Fitur

- [x] WordPress API Integration (headless CMS)
- [x] SEO Metadata (title, description, canonical, OpenGraph)
- [x] JSON-LD Structured Data (LocalBusiness, Service, Article)
- [x] next/image optimization
- [x] Static Site Generation (SSG) untuk performance
- [x] WhatsApp integration
- [x] Responsive design
- [x] next-sitemap configuration

## 🚀 Deployment ke Vercel

1. Push ke GitHub repository
2. Connect repo ke Vercel
3. Set environment variables di Vercel dashboard
4. Deploy!

## 📞 Kontak

- **Telepon**: 0878-1777-3888
- **WhatsApp**: https://wa.me/6287817773888
- **Lokasi**: Depok, Jawa Barat

---

*Last Updated: 31 May 2026*