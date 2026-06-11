/**
 * CSS Lazy Loader - Bengkel Wiguna
 * Load CSS only when component is rendered (reduce render-blocking)
 */

import { useEffect } from 'react';

/**
 * Hook to load CSS dynamically when component mounts
 * @param {string[]} cssFiles - Array of CSS file paths
 */
export function useDynamicCss(cssFiles) {
	useEffect(() => {
		if (typeof document === 'undefined') return;

		const loadedLinks = [];

		cssFiles.forEach((cssFile) => {
			// Check if already loaded
			const existingLink = document.querySelector(
				`link[href*="${cssFile}"]`
			);
			if (existingLink) return;

			const link = document.createElement('link');
			link.rel = 'stylesheet';
			link.href = cssFile;
			link.type = 'text/css';
			document.head.appendChild(link);
			loadedLinks.push(link);
		});

		return () => {
			// Cleanup on unmount (optional - keeps CSS cached)
			// Comment out if you want CSS to persist across navigations
			// loadedLinks.forEach(link => {
			//   if (link.parentNode) {
			//     link.parentNode.removeChild(link);
			//   }
			// });
		};
	}, [cssFiles]);
}

/**
 * Preload critical CSS synchronously (for above-the-fold content)
 * @param {string[]} cssFiles - Array of critical CSS file paths
 */
export function preloadCriticalCss(cssFiles) {
	if (typeof document === 'undefined') return;

	cssFiles.forEach((cssFile) => {
		const existingLink = document.querySelector(
			`link[href*="${cssFile}"]`
		);
		if (existingLink) return;

		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = cssFile;
		link.type = 'text/css';
		document.head.appendChild(link);
	});
}

/**
 * Common CSS file paths for lazy loading
 */
export const CSS_FILES = {
	// Swiper - only for slider pages
	swiper: [
		'/_next/static/chunks/swiper-bundle.min.css', // Will be handled by next/dynamic
	],

	// Bootstrap - only for shop/ecommerce pages
	bootstrap: [
		'/assets/css/bootstrap.min.css',
	],

	// Font Awesome - only for pages using icons extensively
	fontAwesome: [
		'/assets/css/font-awesome-pro.min.css',
	],

	// Animate.css - for scroll animations
	animate: [
		'/assets/css/animate.min.css',
	],

	// GLightbox - for video/image lightbox
	glightbox: [
		'/assets/css/glightbox.min.css',
	],

	// Odometer - for number counters
	odometer: [
		'/assets/css/odometer-theme-default.css',
	],

	// Range slider
	rangeSlider: [
		'/node_modules/react-range-slider-input/dist/style.css',
	],

	// Bexon icons
	bexonIcons: [
		'/assets/css/bexon-icons.css',
	],
};