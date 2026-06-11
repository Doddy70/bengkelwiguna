import { gsap } from "@/libs/gsap.config";
const tjStackAnimation = selector => {
	const animItems = gsap.utils.toArray(".service-stack");
	if (animItems?.length) {
		let mediaMatch = gsap.matchMedia();
		mediaMatch.add("(min-width: 992px)", () => {
			animItems.forEach(item => {
				gsap.to(item, {
					opacity: 0,
					scale: 0.9,
					y: 50,
					scrollTrigger: {
						trigger: item,
						scrub: true,
						start: "top top",
						pin: true,
						pinSpacing: false,
						markers: false,
					},
				});
			});
		});
	}
};
export default tjStackAnimation;
