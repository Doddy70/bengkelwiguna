# Bexon Home-05 Style Guide

> **Source:** https://bexon-react.vercel.app/home-05
> **Date captured:** 2026-06-01
> **Quality bar:** 9nine-visual-novel
> **Status:** Both reference packages (9nine and MotherDuck) were reviewed before extraction. 9nine was used as the primary quality bar.

## 1. Overview
The Home-05 style is a premium, high-tech marketing aesthetic characterized by "floating boxed" layouts, intense glassmorphism, and vibrant background glowing effects. It prioritizes depth and layering over flat design.

## 2. Design Philosophy
- **Boxed Immersive**: Content is contained within boxes with significant border-radius and side gaps, creating a "floating" feel on top of glowing backgrounds. (`Reusable`)
- **Translucent Depth**: Heavy use of backdrop-blur (30px+) and low-opacity backgrounds to create sophisticated layering. (`Reusable`)
- **Vibrant Accents**: Use of large, blurred pseudo-elements to create atmospheric light pendaran. (`Reusable`)

## 3. Semantic Tokens
| Token | Value | Intent |
|-------|-------|--------|
| `--glass-bg` | `rgba(255, 255, 255, 0.65)` | Primary navigation and panel surfaces |
| `--glass-blur` | `35px` | Maximum translucency for premium feel |
| `--side-gap` | `15px` | Consistent whitespace between screen edge and content box |
| `--hero-height` | `850px` | Calibrated height for balanced visual weight |
| `--glow-opacity` | `0.8` | Intensity of atmospheric background lights |

## 4. Component System
### 4.1 Header-5 (Glass Navigation)
- **Role**: Absolute-positioned floating nav
- **Visual Rule**: 65% white background with 35px blur and bright border
- **State Matrix**:
  - Default: Absolute at top: 30px
  - Sticky: Fixed at top: 0, 85% opacity

### 4.2 Project-Card-H5
- **Role**: Promotional display unit
- **Visual Rule**: Consistent image height (200px) with flexible footer alignment
- **State Matrix**:
  - Hover: translateY(-8px), shadow increase

## 5. Implementation Notes
- Use `backdrop-filter: blur(35px)` for the best glass effect.
- Ensure `z-index` management puts pseudo-element glows correctly behind the text content.
- Standardize all thumbnails to 200px height for visual rhythm.
