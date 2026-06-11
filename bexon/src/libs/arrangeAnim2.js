import { gsap } from "@/libs/gsap.config";
import rtlValue from "./rtlValue";
const arrangeAnim2 = commonAnimContainerRef => {
	const animItems = gsap.utils.toArray(".tj-arrange-container-2");
	if (animItems?.length) {
		let mediaMatch = gsap.matchMedia();
		mediaMatch.add("(min-width: 992px)", () => {
			animItems.forEach((panelsContainer, idx) => {
				const panels = panelsContainer.querySelectorAll(".tj-arrange-item-2");
				const startOffset = 50;
				panels.forEach((panel, i) => {
					gsap.from(panel, {
						xPercent: i % 2 === 0 ? rtlValue(-30) : rtlValue(30),
						ease: "none",
						scrollTrigger: {
							trigger: panel,
							start: `top bottom`,
							end: `${
								i === 0 || i === 2 ? "bottom+=200" : "bottom+=300"
							} bottom`,
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
export default arrangeAnim2;
