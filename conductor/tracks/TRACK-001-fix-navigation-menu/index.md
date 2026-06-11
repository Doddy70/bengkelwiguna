# TRACK-001: Fix Navigation Menu Flash/Disappear

## Status
Completed: 2026-06-11

## Specification
The navigation menu currently displays a "flash" of hardcoded default items before either disappearing or updating to the correct WordPress items. This is a hydration and fetching synchronization issue.

## Acceptance Criteria
- [x] No flash of default items on page load.
- [x] Menu correctly renders WordPress data without manual refresh.
- [x] Menu remains stable and does not disappear.
- [x] Use SSR-safe loading patterns.

## Plan
1. **Phase 1: Diagnosis** - Identified hydration mismatch between server (default items) and client (fetched items).
2. **Phase 2: SSR Refactor** - Moved data fetching to Server Components (`layout.tsx` and `page.tsx`) and passed results via props to Header/MenuBlock.
3. **Phase 3: Validation** - Verified SSR data availability on first render.

## Solution Summary
Refactored the navigation architecture to use Server-Side Fetching. By fetching the menu data in the Root Layout and Homepage (Server Components), the `Header` component receives the final menu structure as props. This allows the `MenuBlock` to initialize its state directly with the real data, eliminating the need for a client-side `useEffect` fetch and preventing the "flash" of hardcoded content.
