# Bexon Home-05 Motion Guide

## 1. Motion Summary
The motion character is **Staggered & Fluid**. It uses GSAP and Swiper to create layered entrances where text components appear with individual character delays.

## 2. Motion Tokens
| Token | Value | Intent |
|-------|-------|--------|
| `--motion-stagger` | `0.02s` | Delay between character reveals |
| `--motion-duration` | `0.8s` | Standard entrance duration |
| `--motion-ease` | `power3.out` | Decelerating ease for natural feel |

## 3. Trigger Matrix
- **Slide Change**: Triggers full content reveal for active slide.
- **Scroll**: Intersection Observer triggers "animated" class for section reveals.
- **Hover**: 0.4s smooth transition for interactive elements.

## 4. Reusable Motion Primitives
- `text.charReveal`: RotateX entrance with staggered characters. (`Reusable`)
- `card.lift`: smooth translateY change on hover. (`Reusable`)
- `overlay.glassFade`: Opacity shift with blur preservation. (`Reusable`)
