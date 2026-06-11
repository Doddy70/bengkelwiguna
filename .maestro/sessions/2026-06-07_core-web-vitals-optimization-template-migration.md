# Session: Core Web Vitals Optimization - Template Migration
Date: 2026-06-07

## Commands Run
- /web-performance-optimization (skill invoked)
- /performance-security (skill invoked)
- /zero-defect (skill invoked)
- /adapt-workflow (skill invoked)
- /chain (skill invoked)
- /recap (recap generated)
- /capture (this session)

## Decisions
- **Abandoned bexon template** - CSS/Swiper issues unresolvable after 3+ hours debugging
- **Switch to new template** - User provided `/bengkel-wiguna-nextjs/` as replacement
- **Saved debugging history** - Created memory file for future agents to avoid repeating mistakes
- **Setup Maestro protocol** - Created .maestro.md with workflow guidelines

## Key Lesson Learned (Critical for Future Agents)
- **CSS Import Paths:**
  - ❌ Wrong: `import "/swiper/css/swiper.min.css"` (absolute path)
  - ❌ Wrong: `<CssLoader href="/swiper/css/..." />` (absolute URL)
  - ✅ Correct: `import "swiper/css"` (npm import)
  - ✅ Correct: `import "./assets/css/file.css"` (relative path)
- **Files in `src/app/assets/` need RELATIVE imports, not absolute paths**

## Files Changed (in /bexon/)
- `src/app/layout.js` - Added CSS imports, simplified metadata
- `src/lib/css-loader.js` - Created (later deleted - was buggy)
- `src/lib/css-loaders.jsx` - Created (later identified as root cause)
- `src/components/shared/wrappers/ClientWrapper.js` - Dynamic imports for animations
- `src/components/sections/services/Services5.js` - Removed css-loader imports
- `src/components/sections/spesialis/SpesialisSliderSection.js` - Removed css-loader imports
- `next.config.js` - Added compiler optimizations, tree shaking
- `src/app/page.js` - Parallel API fetching with Promise.all

## Files Created
- `src/lib/css-loader.js` - Utility hook (deleted)
- `src/lib/css-loaders.jsx` - React components (deleted - was buggy)
- `src/components/shared/seo/HeroPreload.js` - LCP optimization
- `.maestro.md` - Workflow context file
- Memory files in `/memory/`

## Issues Found
1. **CSS Files Return HTML** - `/assets/css/bexon-icons.css` returns 404 HTML instead of CSS
2. **Swiper CSS Not Loading** - `/swiper/css/swiper.min.css` not found
3. **All Carousels Broken** - No styling, no navigation arrows, no pagination dots
4. **Root Cause:** Absolute paths in css-loaders.jsx components

## Open Issues
- **Bexon template is BROKEN** - DO NOT USE
- **New template needs evaluation** - `/bengkel-wiguna-nextjs/` is untested
- **Performance optimization incomplete** - Original goal (Core Web Vitals improvement) not achieved

## Next Steps (Priority Order)
1. **Explore new template** - Check structure of `/bengkel-wiguna-nextjs/`
2. **Test baseline** - `npm install && npm run dev` to verify it works
3. **Verify CSS/Swiper** - Ensure no absolute path issues
4. **Apply Core Web Vitals optimization** - ONE CHANGE AT A TIME
5. **Test after each change**
6. **Push to GitHub when stable**
7. **Deploy to aapanel**

## Project Context
- **Name:** Bengkel Wiguna
- **Backend:** WordPress Headless CMS at backend.bengkelwiguna.com
- **Frontend (old):** `/bexon/` - BROKEN
- **Frontend (new):** `/bengkel-wiguna-nextjs/` - UNTESTED
- **Repo:** https://github.com/Doddy70/bengkelwiguna
- **Production URL:** bengkelwiguna.com

## User Feedback
- User frustrated with debugging time ("issshhh ini terlalu bertele tele...")
- User provided new template to continue project
- User wants working production website with good Core Web Vitals