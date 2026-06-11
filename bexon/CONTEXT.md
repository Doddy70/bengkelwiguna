# Bengkel Wiguna Project Context

## Project Purpose

Bengkel Wiguna is a headless Next.js website for an automotive repair shop in Depok, Indonesia. The site fetches content from a WordPress backend and renders it as a static/statically-generated site.

## Architecture

```
bexon/                          # Next.js frontend
├── src/
│   ├── app/                  # Next.js App Router pages
│   ├── components/             # Reusable UI components
│   ├── context_api/            # Context providers
│   ├── hooks/                 # Custom React hooks
│   └── lib/                   # Utilities & integrations
│       ├── wordpress.js        # WordPress REST API client
│       ├── seo.ts             # SEO utilities
│       ├── gsap-animations.ts  # GSAP animation presets
│       ├── brand.ts           # Brand tokens & CSS variables
│       └── *.ts               # Theme, WP client, etc.
├── scripts/                    # CLI utilities
└── public/                    # Static assets

backend.bengkelwiguna.com/      # WordPress CMS (external)
```

## WordPress Integration

- **Backend URL**: `https://backend.bengkelwiguna.com/wp-json`
- **Custom Post Types**: `services`, `promosi`
- **SEO**: Rank Math Pro plugin integration
- **API Client**: `src/lib/wordpress.js`

## Key Dependencies

```json
{
  "next": "15.x",
  "react": "19.x",
  "tailwindcss": "4.x",
  "gsap": "3.x",
  "@anthropic-ai/sdk": "latest"
}
```

## Important Commands

```bash
cd bexon
npm install                    # Install dependencies
npm run dev                   # Development server
npm run build                # Production build
npm run lint                 # ESLint check
```

## SEO & Performance

- **Sitemap**: Auto-generated at `/sitemap.xml`
- **Core Web Vitals**: Target LCP <2.5s, INP <200ms, CLS <0.1
- **Lighthouse**: Score targets ≥90

## Design System

- **Fonts**: Poppins (headings), Inter (body)
- **Colors**: Navy primary, Orange accent (#e94560)
- **Tailwind v4** with custom theme

## Working With This Project

1. Read `AGENTS.md` and `CLAUDE.md` before changes
2. WordPress content → Next.js pages via REST API
3. Test SEO with `scripts/audit-seo.mjs`
4. Test performance with `scripts/test-core-web-vitals.mjs`
5. Animate with GSAP hooks from `src/lib/useGSAP.ts`
6. Use brand tokens from `src/lib/brand.ts`