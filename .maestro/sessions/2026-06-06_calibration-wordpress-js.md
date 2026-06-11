# Session: Calibration - wordpress.js Consistency
Date: 2026-06-06

## Commands Run
- /calibrate → Assessed naming, prompt, and error handling consistency
- Fixed JSDoc documentation across wordpress.js

## Decisions
- **Naming standard:** `get{Noun}BySlug`, `getAll{Nouns}`, `generate{Noun}Sitemap`
- **Return value standard:** Single item → `null` on error, List → `[]` on error, Paginated → consistent structure
- **JSDoc requirement:** All functions must have `@param`, `@returns` documentation

## Files Changed
- `bexon/src/lib/wordpress.js` — Added JSDoc to all 30+ functions with proper @param and @returns

## Issues Fixed
- Missing JSDoc on helper functions (getFeaturedImage, getRankMathData, stripHtml, formatDate)
- Missing JSDoc on all fetch functions
- Updated `.maestro.md` with Code Conventions section

## Next Steps
1. Run `/refine` for final polish pass
2. Verify build still passes (`npm run build`)
3. Consider adding TypeScript types for stricter type checking