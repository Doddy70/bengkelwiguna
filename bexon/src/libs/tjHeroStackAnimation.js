import { gsap } from "@/libs/gsap.config";
const tjHeroStackAnimation = (selector, containerRef) => {
	let mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 992px)", () => {
		const hero = containerRef.current;
		// Parallax move of the whole hero section
		gsap.to(`${selector}`, {
			y: "30%",
			opacity: 0,
			ease: "none",
			scrollTrigger: {
				trigger: hero,
				start: "top top",
				end: "bottom top",
				scrub: true,
				// markers: true,
			},
		});
	});
};

export default tjHeroStackAnimation;
