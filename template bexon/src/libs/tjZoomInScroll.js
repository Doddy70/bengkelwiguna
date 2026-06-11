import { gsap } from "@/libs/gsap.config";
const tjZoomInScroll = selector => {
	let mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 0)", () => {
		// Progress Panels
		const animItems = gsap.utils.toArray(".zoom-on-scroll");
		if (animItems?.length) {
			// Set initial scale
			gsap.set(animItems, {
				scale: 0.74,
				transformOrigin: "top center",
			});
			// Animate to scale 1 on scroll
			gsap.to(animItems, {
				scale: 1,
				ease: "none",
				scrollTrigger: {
					trigger: ".zoom-on-scroll-wrapper",
					start: "top top",
					end: "top+=30% top",
					scrub: true,
				},
			});
		}
	});
};
export default tjZoomInScroll;
