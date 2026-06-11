import { gsap } from "@/libs/gsap.config";
import rtlValue from "./rtlValue";
const fadeInRightOnScrollAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".tj-fadein-right-on-scroll");
	if (animItems.length) {
		animItems.forEach((panel, i) => {
			gsap.set(panel, {
				xPercent: rtlValue(40),
				ease: "none",
			});
			gsap.to(panel, {
				xPercent: 0,
				scrollTrigger: {
					trigger: panel,
					start: `top bottom-=300`,
					end: `bottom bottom-=300`,
					pin: false,
					pinSpacing: false,
					scrub: true,
					markers: false,
					invalidateOnRefresh: true,
				},
			});
		});
	}
};

export default fadeInRightOnScrollAnim;
