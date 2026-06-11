# Session: Rollback to Bexon & Blog V2 Restoration
**Date:** 2026-06-10
**Status:** SUCCESS (Stable Environment Restored)

## Context
This session involved a failed attempt to migrate the Bengkel Wiguna project to a new Next.js 15 template (`bengkel-wiguna-nextjs`). The migration encountered critical infrastructure issues, including consistent 500/503 Internal Server Errors caused by Next.js 15's strict Server Component constraints (specifically `ssr: false` in `next/dynamic` calls) and API fetching timeouts.

## Key Decisions
1.  **Immediate Rollback:** Abandoned the unstable Next.js 15 template to prevent further downtime and technical debt.
2.  **Restore Bexon:** Returned to the `bexon` project as the primary development environment due to its proven stability and established high-fidelity assets.
3.  **Blog V2 Layout:** Decided to implement the requested modern blog layout directly within the Bexon framework instead of the new template.

## Technical Accomplishments

### 1. Project Restoration
- Stopped the faulty `bengkel-wiguna-nextjs` server.
- Reactivated the `bexon` development server using Turbopack for near-instant responsiveness.
- Verified API connectivity to `https://backend.bengkelwiguna.com`.

### 2. Blog V2 Implementation (Bexon)
- Refactored `bexon/src/app/blog/[slug]/page.js` to adopt the "Blog V2" architecture.
- **Dynamic Sidebar:** Integrated WordPress categories with accurate post counts.
- **Related Articles:** Implemented intelligent filtering to show related posts based on the current article's category.
- **High-Fidelity Promo Banner:** Added a brand-aligned sidebar widget for conversion (WA integration, gold/blue branding).
- **Cinematic Visuals:** Optimized Featured Images with a 21:9 aspect ratio and shadow depth for a premium look.

### 3. Resilience & Debugging
- Identified and removed `ssr: false` patterns that were crashing the server in the App Router environment.
- Optimized `apiFetch` parameters in development to reduce "hanging" during backend latency.

## Verification
- **Localhost:** http://localhost:3000 is LIVE and stable.
- **Single Blog:** Layout V2 confirmed with working sidebar and dynamic related articles.
- **Logs:** No more 500/503 errors during navigation.

## Memory Update for Future Sessions
*   **DO NOT** attempt to use `ssr: false` in `next/dynamic` inside Server Components (Next.js 15+ restriction).
*   **Bexon is the source of truth:** All future feature requests (Promosi, Paket Service) must be applied to the `bexon` directory.
