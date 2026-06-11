import { gsap, SplitText } from "@/libs/gsap.config";
const textReavealAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".tj-text-invert");
	if (animItems.length) {
		const split = new SplitText(".tj-text-invert", { type: "lines" });
		split.lines.forEach(target => {
			gsap.to(target, {
				backgroundPositionX: 0,
				ease: "none",
				scrollTrigger: {
					trigger: target,
					scrub: 1,
					start: "top 85%",
					end: "bottom center",
				},
			});
		});
	}
};

export default textReavealAnim;
