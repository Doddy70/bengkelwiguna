# Session: FAQ Layout + Plugin v1.7.0 + Layanan Spesialis Page Fix
Date: 2026-06-06

## Commands Run
- /capture → Session capture (current)

## Decisions
- **Import order fix:** All import statements must be at the top of files (before any function/export) — Next.js 15+ requirement
- **Removed `dynamicParams = true`:** Conflicts with `cacheComponents: true` in next.config.js — causes 404 errors
- **Await params:** Next.js 15+ requires `await params` before accessing `params.slug`
- **FAQ data structure:** PHP array decoded before REST API response — frontend receives ready-to-use array, no `JSON.parse()` needed
- **FAQ split logic:** 5 items → `#faqOne` (FaqItem), items 6+ → `#faqTwo` (FaqItem2)

## Files Changed
- `bexon/src/app/layanan-spesialis/[slug]/page.js` — Full rebuild, FAQ layout, proper imports
- `bw-headless-cms/bw-headless-cms/bw-headless-cms.php` — Version 1.6.0 → 1.7.0
- `bw-headless-cms/bw-headless-cms/includes/class-bw-rest-controller.php` — FAQ fields in REST API + transient key bump
- `bw-headless-cms/bw-headless-cms-v1.7.0.zip` — New release (54K, 21 files)

## Issues Found & Fixed
1. **404 on `/layanan-spesialis/[slug]`:** Root causes: import order, `dynamicParams` conflict, unwaited params
2. **FAQ fields not in API:** Metabox fields existed in DB but not exposed in REST API response
3. **WP Admin upload failed:** Plugin ZIP upload via WordPress UI failed — need FTP/SFTP for deploy

## Open Issues
- Plugin v1.7.0 not yet deployed to live server
- FAQ content not yet populated in WP Admin
- WP Admin UI upload unreliable for this server

## Next Steps
1. Deploy plugin v1.7.0 via FTP/SFTP to `backend.bengkelwiguna.com`
2. Flush transients post-deploy: `wp transient delete --all`
3. Flush permalinks: Settings → Permalinks → Save Changes
4. Add FAQ content in WP Admin → Layanan Spesialis → Edit
5. Test FAQ display at `/layanan-spesialis/semi-overhaul/`