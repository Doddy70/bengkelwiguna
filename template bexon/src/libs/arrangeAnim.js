import { gsap } from "@/libs/gsap.config";
import rtlValue from "./rtlValue";
const arrangeAnim = commonAnimContainerRef => {
	const animItems = gsap.utils.toArray(".tj-arrange-container");
	if (animItems?.length) {
		let mediaMatch = gsap.matchMedia();
		mediaMatch.add("(min-width: 992px)", () => {
			animItems.forEach((panelsContainer, idx) => {
				const panels = panelsContainer.querySelectorAll(".tj-arrange-item");
				const startOffset = 50;
				panels.forEach((panel, i) => {
					gsap.from(panel, {
						xPercent: i % 2 === 0 ? rtlValue(-20) : rtlValue(20),
						ease: "none",
						scrollTrigger: {
							trigger: panel,
							start: `top bottom`,
							end: `bottom bottom`,
							pin: false,
							pinSpacing: false,
							scrub: true,
							markers: false,
							invalidateOnRefresh: true,
						},
					});
				});
			});
		});
	}
};
export default arrangeAnim;
