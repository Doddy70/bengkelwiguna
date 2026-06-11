# Maestro Workflow Context
Generated: 2026-06-10 (Hybrid Gemini + Claude Adaptation)

## Models & Providers
* **Primary Agent:** Gemini Pro / Flash (Orchestration & Development)
* **Integration Agent:** Claude Sonnet 4 (Business Logic & SEO)
* **Context Capacity:** 1,000,000+ (Gemini) / 200,000 (Claude)
* **Task Routing:** Gemini handles codebase updates; Claude handles specialized Indonesian SEO/Logic.

## Workflow Architecture (Tiered)
* **Tier 1: Stable Production (ACTIVE):** `bexon/` directory.
  - **Tech Stack:** Next.js 16, Bootstrap 5.3, Swiper 11, GSAP, Anthropic SDK.
  - **Status:** PRIMARY development target.
* **Tier 2: Future Target (PAUSED):** `bengkel-wiguna-nextjs/` directory.
  - **Status:** DEPRECATED due to Next.js 15/SSR instability. DO NOT USE.

## API Integration Standards (bexon)
* **WordPress Backend URL:** `https://backend.bengkelwiguna.com/`
* **Fetch Utilities:** 
  - `wpFetch(endpoint, params)`: Standard WordPress API.
  - `bwFetch(endpoint, params)`: Custom `/bw/v1` endpoints.
  - `fetchAll(endpoint, params)`: Automatic pagination.
* **AI Integration:** `src/lib/claude.js` wrapper with `ContextManager` and `CostTracker`.
* **Type Safety:** Interface definitions in `bexon/src/lib/wordpress.ts`.

## Custom Post Types (CPT) Reference
| CPT | REST Endpoints |
|-----|----------------|
| `services` | `/bw/v1/services-full`, `/bw/v1/services/{slug}` |
| `promosi` | `/bw/v1/promosi-active`, `/bw/v1/promosi/{slug}` |
| `paket_service` | `/bw/v1/paket-service-full`, `/bw/v1/paket-service/{slug}` |
| `layanan_spesialis` | `/bw/v1/layanan-spesialis-full`, `/bw/v1/layanan-spesialis/{slug}` |

## Quality & Evaluation
* **Build Validation:** `npm run build --turbopack` (within `bexon/`).
* **SEO:** Rank Math Pro integration + Claude-powered JSON-LD generation.
* **Performance:** Lighthouse target ≥ 90.
* **Golden URL Routes:**
  * Homepage: `/`
  * Services: `/services/`, `/services/[slug]/`
  * Blog: `/blog/`
  * Lokasi: `/lokasi/`

## Constraints & Guardrails
> [!IMPORTANT]
> **Zero Initiative Rule:** Agent DILARANG mengubah UI/UX, layout, warna, spacing tanpa izin eksplisit user. 
> **Directory Integrity:** Semua pekerjaan WAJIB dilakukan di dalam folder `bexon/`.

* **URL Permanence:** Zero unauthorized URL slug changes.
* **SEO Preservation:** Canonical links, next-sitemap, Google Site Verification wajib dijaga.
* **AI Budget:** $50/month hard limit via `middleware/cost-tracking.js`.
* **TypeScript Integrity:** Dilarang menggunakan `any` pada core logic fetch and component props.
