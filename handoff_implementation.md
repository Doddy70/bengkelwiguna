# Hand‑off Implementation for Agent Claude

**Project:** Bengkel Wiguna V3  
**Location:** `new bengkel wiguna/`

---

## 🎯 Goal
Provide Agent Claude with a concise, actionable snapshot of the *current error state* and the **context** needed to debug and fix the issues reported by the user.

---

## 📌 Current Reported Issues
1. **Missing images in *Hotspot* sections** – images do not render.
2. **Bento‑card grid displays “Promo Bulanan”** instead of only “Promo Regular”.
3. **Tabs (Cek Kaki‑kaki, Semi Overhaul, Reset AC) show no images**.
4. **Load‑more button shows “Promo Bulanan” items**; the label should read **“Muat Lebih Banyak”** and only load *Promo Regular*.
5. **Z‑index conflict** – the hotspot section title collides with the sticky navigation header.

---

## 🗂️ Relevant Files & Directories
| File | Purpose | Link |
|------|---------|------|
| `src/app/page.tsx` | Root page layout, includes Load‑more logic and Sticky header | [page.tsx](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/src/app/page.tsx) |
| `src/components/heroui/modern-equipment.tsx` | Renders the *Hotspot* component and the Bento‑card grid | [modern-equipment.tsx](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/src/components/heroui/modern-equipment.tsx) |
| `src/lib/wordpress.ts` | Centralised data‑fetch utilities (`bwFetch`, `wpFetch`) – must be used for API calls | [wordpress.ts](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/src/lib/wordpress.ts) |
| `bw-headless-cms/bw-headless-cms/includes/class-bw-rest-controller.php` | WordPress‑side REST controller providing `/bw/v1/` endpoints used by the front‑end | [class‑bw‑rest‑controller.php](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/bw-headless-cms/bw-headless-cms/includes/class-bw-rest-controller.php) |
| `.claude/CLAUDE.md` | Agent‑hand‑off instructions – must be read before any work | [CLAUDE.md](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/.claude/CLAUDE.md) |
| `.claude/state.json` | Current state machine, last completed task (`nav‑menu‑sync`) | [state.json](file:///Users/doddykapisha/Downloads/GITDODDY/new%20bengkel%20wiguna/.claude/state.json) |

---

## 🛠️ Debugging Checklist for Claude
1. **Run the dev server**
   ```bash
   npm run dev
   ```
   Verify the local site loads at `http://localhost:3000`.
2. **Inspect Network Requests**
   - Open browser devtools → Network.
   - Look for `/bw/v1/` or `/wp/v2/` calls that populate Hotspot and Bento data.
   - Ensure the response includes `image_url` fields for each item.
3. **Validate `bwFetch` usage**
   - Search for direct `fetch()` calls in the code base (should not exist per guardrails).
   - Replace any stray `fetch` with `bwFetch`/`wpFetch` if discovered.
4. **Check Category Filtering**
   - In the data processing logic (likely inside `modern-equipment.tsx`), confirm the filter only selects items where `category === "Promo Regular"` for the Bento grid and Load‑more.
5. **Z‑Index Fix**
   - Identify the CSS class for the sticky header (e.g., `.sticky-header`).
   - Ensure its `z-index` is higher than the Hotspot title container.
   - If the Hotspot title has a custom `z-index`, set it lower.
6. **Load‑More Button Text**
   - Locate the label string (maybe in `page.tsx` or a shared UI component) and replace **“Load More”** with **“Muat Lebih Banyak”**.
7. **Tab Image Rendering**
   - Verify the image URLs for the three tabs are correctly passed to the component.
   - If the data source omits them, add the missing fields on the WordPress side (`class‑bw‑rest‑controller.php`).

---

## 📋 Action Items for Claude
- **[ ]** Confirm that all API calls use `bwFetch`/`wpFetch`.
- **[ ]** Fix the category filter so Bento‑cards only show *Promo Regular*.
- **[ ]** Adjust CSS to resolve the sticky‑header / hotspot‑title z‑index clash.
- **[ ]** Update the Load‑more button label.
- **[ ]** Ensure image URLs are present and correctly mapped for Hotspot and the three tabs.
- **[ ]** Run `npm run build --turbopack` and `npx tsc --noEmit` to satisfy quality gates.

---

## 📦 How to Verify
1. After changes, refresh the page and verify:
   - Hotspot images appear.
   - Bento‑grid shows only *Promo Regular* items.
   - Tab sections display their images.
   - Load‑more button label is “Muat Lebih Banyak” and loads correct items.
   - No visual overlap between sticky header and hotspot title.
2. Run the build checks:
   ```bash
   npm run build --turbopack
   npx tsc --noEmit
   ```
   All must pass before committing.

---

## 📌 Notes & Constraints
- **Zero‑Initiative Rule:** Do **not** modify UI design, colors, or spacing beyond what is required for the above fixes.
- **Branching:** Create a feature branch (e.g., `fix/hotspot-bento-errors`) and open a PR.
- **Commit Format:** Follow Conventional Commits, e.g., `fix(ui): resolve hotspot image and bento‑grid category bugs`.
- **Do not push directly to `main`**.

---

*End of hand‑off file.*
/Users/doddykapisha/.gemini/antigravity-ide/brain