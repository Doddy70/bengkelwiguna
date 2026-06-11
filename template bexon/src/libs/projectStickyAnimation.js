import { gsap } from "@/libs/gsap.config";
const projectStickyAnimation = commonAnimContainerRef => {
	const animItems = commonAnimContainerRef.current.querySelectorAll(
		".marquee-slider-wrapper-two"
	);
	if (animItems.length) {
		gsap.to(".marquee-slider-wrapper-two", {
			scrollTrigger: {
				trigger: commonAnimContainerRef.current,
				start: "top center-=200",
				pin: ".marquee-slider-wrapper-two",
				end: "bottom bottom-=200",
				markers: false,
				pinSpacing: false,
				scrub: 1,
			},
		});
	}
};
export default projectStickyAnimation;
