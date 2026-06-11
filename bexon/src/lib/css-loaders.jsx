"use client";
/**
 * Dynamic CSS Loader - Bengkel Wiguna
 *
 * OPTIMIZATION: Load CSS only when component is actually rendered
 * This reduces initial bundle size significantly
 *
 * Usage:
 * - Import the specific CSS wrapper component
 * - Add it as a child of the component that needs the CSS
 * - The CSS will only load when the component mounts
 */

import { useEffect, useState } from 'react';

/**
 * Base CSS Loader Component
 * Dynamically injects CSS into document head
 */
function CssLoader({ href, id }) {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		if (typeof document === 'undefined') return;

		// Check if already loaded
		const existingLink = document.getElementById(id);
		if (existingLink) {
			setLoaded(true);
			return;
		}

		const link = document.createElement('link');
		link.id = id;
		link.rel = 'stylesheet';
		link.href = href;
		link.type = 'text/css';
		link.onload = () => setLoaded(true);
		link.onerror = () => console.error(`Failed to load CSS: ${href}`);

		document.head.appendChild(link);
	}, [href, id]);

	return loaded ? null : <span style={{ display: 'none' }} />;
}

/**
 * Bootstrap CSS Loader
 * For shop/ecommerce pages
 */
export function BootstrapCss() {
	return <CssLoader href="/assets/css/bootstrap.min.css" id="css-bootstrap" />;
}

/**
 * Font Awesome CSS Loader
 * For pages with many icons
 */
export function FontAwesomeCss() {
	return <CssLoader href="/assets/css/font-awesome-pro.min.css" id="css-fontawesome" />;
}

/**
 * Swiper CSS Loader
 * For slider components
 */
export function SwiperCss() {
	return (
		<>
			<CssLoader href="/swiper/css/swiper.min.css" id="css-swiper-base" />
		</>
	);
}

/**
 * Animate CSS Loader
 * For scroll animations
 */
export function AnimateCss() {
	return <CssLoader href="/assets/css/animate.min.css" id="css-animate" />;
}

/**
 * GLightbox CSS Loader
 * For video/image lightbox
 */
export function GLightboxCss() {
	return <CssLoader href="/assets/css/glightbox.min.css" id="css-glightbox" />;
}

/**
 * Odometer CSS Loader
 * For number counter animations
 */
export function OdometerCss() {
	return <CssLoader href="/assets/css/odometer-theme-default.css" id="css-odometer" />;
}

/**
 * Bexon Icons CSS Loader
 * For custom icons
 */
export function BexonIconsCss() {
	return <CssLoader href="/assets/css/bexon-icons.css" id="css-bexon-icons" />;
}

/**
 * React Range Slider CSS Loader
 */
export function RangeSliderCss() {
	return <CssLoader href="/node_modules/react-range-slider-input/dist/style.css" id="css-range-slider" />;
}

/**
 * Common CSS bundles
 */
export function SwiperFullCss() {
	return (
		<>
			<SwiperCss />
			<CssLoader href="/swiper/css/effect-coverflow.min.css" id="css-swiper-coverflow" />
			<CssLoader href="/swiper/css/effect-fade.min.css" id="css-swiper-fade" />
			<CssLoader href="/swiper/css/navigation.min.css" id="css-swiper-nav" />
			<CssLoader href="/swiper/css/pagination.min.css" id="css-swiper-pagination" />
			<CssLoader href="/swiper/css/thumbs.min.css" id="css-swiper-thumbs" />
		</>
	);
}

/**
 * Hook version for programmatic usage
 */
export function useCssLoader(href, id) {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		if (typeof document === 'undefined') return;

		const existingLink = document.getElementById(id);
		if (existingLink) {
			setIsLoaded(true);
			return;
		}

		const link = document.createElement('link');
		link.id = id;
		link.rel = 'stylesheet';
		link.href = href;
		link.type = 'text/css';
		link.onload = () => setIsLoaded(true);

		document.head.appendChild(link);

		return () => {
			// Optional: cleanup on unmount
			// const el = document.getElementById(id);
			// if (el) el.remove();
		};
	}, [href, id]);

	return isLoaded;
}