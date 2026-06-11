import { gsap } from "@/libs/gsap.config";
const tjStackAnimation2 = selector => {
	const animItems = gsap.utils.toArray(".tj-sticky-panel");
	if (animItems?.length) {
		let mediaMatch = gsap.matchMedia();
		let tl = gsap.timeline();
		mediaMatch.add("(min-width: 992px)", () => {
			animItems.forEach((item, i) => {
				tl.to(item, {
					scrollTrigger: {
						trigger: item,
						pin: item,
						scrub: 1,
						start: "top-=50 top",
						end: "bottom top",
						endTrigger: ".tj-sticky-panel-container",
						pinSpacing: false,
						markers: false,
					},
				});
			});
		});
	}
};
export default tjStackAnimation2;
