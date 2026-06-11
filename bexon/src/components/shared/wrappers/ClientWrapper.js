"use client";
/**
 * ClientWrapper - Bengkel Wiguna
 *
 * OPTIMIZATION: All animations now use dynamic imports
 * Animations are loaded only when needed (on viewport visibility)
 * This reduces initial bundle size significantly
 */

import { useEffect } from 'react';
import { useGSAP } from '@/libs/gsap.config';

/**
 * Lazy load animation library dynamically
 * Only loads when component mounts
 */
const loadAnimation = async (animationFn) => {
	try {
		await animationFn();
	} catch (err) {
		if (process.env.NODE_ENV === 'development') {
			console.warn('Animation load warning:', err);
		}
	}
};

const ClientWrapper = () => {
	useEffect(() => {
		// Lazy load WOW.js only on client side
		import('wow.js').then(({ default: WOW }) => {
			new WOW().init();
		});

		// Load smooth scroll to top
		import('@/libs/smoothScrollToTop').then(({ default: smoothScrollToTop }) => {
			smoothScrollToTop();
		});

		// Load magic cursor animation
		let cleanup;
		import('@/libs/tjMagicCursorAnimation').then(({ default: tjMagicCursorAnimation }) => {
			cleanup = tjMagicCursorAnimation();
		});

		return () => {
			if (cleanup) cleanup();
		};
	}, []);

	// GSAP animations - loaded after initial render
	useGSAP((context, contextSafe) => {
		// Use requestIdleCallback to defer non-critical animations
		const scheduleAnimation = (fn, priority = 'low') => {
			if (priority === 'high') {
				// Run immediately for critical animations
				loadAnimation(fn);
			} else if (typeof scheduler !== 'undefined' && scheduler.postTask) {
				// Use scheduler API if available (modern browsers)
				scheduler.postTask(() => loadAnimation(fn), { priority: 'background' });
			} else if (typeof requestIdleCallback !== 'undefined') {
				// Fallback to requestIdleCallback
				requestIdleCallback(() => loadAnimation(fn), { timeout: 2000 });
			} else {
				// Final fallback - small delay
				setTimeout(() => loadAnimation(fn), 100);
			}
		};

		// Core animations (high priority - needed for layout)
		scheduleAnimation(async () => {
			const { default: initSmoothScroller } = await import('@/libs/initSmoothScroller');
			initSmoothScroller();
		}, 'high');

		scheduleAnimation(async () => {
			const { default: tjLeftSwipeAnimation } = await import('@/libs/tjLeftSwipeAnimation');
			tjLeftSwipeAnimation();
		}, 'high');

		// UI animations (medium priority)
		scheduleAnimation(async () => {
			const { default: titleAnim } = await import('@/libs/titleAnim');
			titleAnim();
		}, 'medium');

		scheduleAnimation(async () => {
			const { default: titleAnim2 } = await import('@/libs/titleAnim2');
			titleAnim2();
		}, 'medium');

		// Below-fold animations (low priority - defer these)
		scheduleAnimation(async () => {
			const { default: sidebarSticky } = await import('@/libs/sidebarSticky');
			sidebarSticky();
		});

		scheduleAnimation(async () => {
			const { default: arrangeAnim } = await import('@/libs/arrangeAnim');
			arrangeAnim();
		});

		scheduleAnimation(async () => {
			const { default: arrangeAnim2 } = await import('@/libs/arrangeAnim2');
			arrangeAnim2();
		});

		scheduleAnimation(async () => {
			const { default: animateInvertText } = await import('@/libs/animateInvertText');
			animateInvertText();
		});

		scheduleAnimation(async () => {
			const { default: fadeInRightOnScrollAnim } = await import('@/libs/fadeInRightOnScrollAnim');
			fadeInRightOnScrollAnim();
		});

		scheduleAnimation(async () => {
			const { default: onePageNavAnim } = await import('@/libs/onePageNavAnim');
			onePageNavAnim(contextSafe);
		});

		scheduleAnimation(async () => {
			const { default: progressBar } = await import('@/libs/progressBar');
			progressBar();
		});

		scheduleAnimation(async () => {
			const { default: tjStackAnimation } = await import('@/libs/tjStackAnimation');
			tjStackAnimation();
		});

		scheduleAnimation(async () => {
			const { default: tjScrollSlider } = await import('@/libs/tjScrollSlider');
			tjScrollSlider();
		});

		scheduleAnimation(async () => {
			const { default: tjStackAnimation2 } = await import('@/libs/tjStackAnimation2');
			tjStackAnimation2();
		});

		scheduleAnimation(async () => {
			const { default: tjImageParallex } = await import('@/libs/tjImageParallex');
			tjImageParallex();
		});

		scheduleAnimation(async () => {
			const { default: tjProgressAnimation } = await import('@/libs/tjProgressAnimation');
			tjProgressAnimation();
		});

		scheduleAnimation(async () => {
			const { default: tjZoomInScroll } = await import('@/libs/tjZoomInScroll');
			tjZoomInScroll();
		});

		scheduleAnimation(async () => {
			const { default: tjStackAnimation3 } = await import('@/libs/tjStackAnimation3');
			tjStackAnimation3();
		});

		// Right swipe animation (loaded synchronously as it's commonly used)
		(async () => {
			try {
				const { default: tjRightSwipeAnimation } = await import('@/libs/tjRightSwipeAnimation');
				tjRightSwipeAnimation();
			} catch (e) {
				// Ignore if not available
			}
		})();

		// Text reveal animation (loaded synchronously as it's commonly used)
		(async () => {
			try {
				const { default: textReavealAnim } = await import('@/libs/textReavealAnim');
				textReavealAnim();
			} catch (e) {
				// Ignore if not available
			}
		})();

		// Title anim 3 (loaded synchronously as it's commonly used)
		(async () => {
			try {
				const { default: titleAnim3 } = await import('@/libs/titleAnim3');
				titleAnim3();
			} catch (e) {
				// Ignore if not available
			}
		})();
	});

	return null;
};

export default ClientWrapper;