"use client";
/**
 * HeroPreload - Bengkel Wiguna
 *
 * OPTIMIZATION: Preloads hero/LCP images to improve LCP metric
 * Uses WebP versions for smaller file size
 * This component should be placed at the top of the page layout
 */

import { useEffect } from 'react';

// OPTIMIZATION: WebP versions of hero images (smaller file size)
const CRITICAL_IMAGES = [
	'/images/hero/bg_diagnostics.webp', // 185KB vs 337KB original JPEG
	'/images/hero/bg_video.webp', // 114KB vs 211KB original JPEG
];

/**
 * Preloads critical images for LCP optimization
 * Place this component in the layout's <head> or as first child of body
 */
export default function HeroPreload({ images = [] }) {
	useEffect(() => {
		if (typeof document === 'undefined') return;

		const allImages = [...CRITICAL_IMAGES, ...images];

		allImages.forEach((src) => {
			// Skip if already preloaded
			const existing = document.querySelector(`link[href="${src}"]`);
			if (existing) return;

			// Skip if already loaded as img
			const loaded = document.querySelector(`img[src="${src}"]`);
			if (loaded) return;

			const link = document.createElement('link');
			link.rel = 'preload';
			link.as = 'image';
			link.href = src;

			// Add fetchpriority for higher priority
			link.fetchPriority = 'high';

			document.head.appendChild(link);
		});
	}, [images]);

	return null;
}