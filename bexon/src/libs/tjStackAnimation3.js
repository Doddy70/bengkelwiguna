import { gsap } from "@/libs/gsap.config";
const tjStackAnimation3 = selector => {
	const animItems = gsap.utils.toArray(".tj-sticky-panel-3");
	if (animItems?.length) {
		const container = animItems[0].closest(".tj-sticky-panel-3-container");
		let mediaMatch = gsap.matchMedia();
		mediaMatch.add("(min-width: 992px)", () => {
			const startOffset = parseInt(getComputedStyle(container).paddingTop) || 0;
			const lastIdx = animItems.length - 1;
			const lastPanel = animItems[lastIdx];
			const paddingBottom =
				parseInt(getComputedStyle(container).paddingBottom) || 0;
			animItems.forEach((panel, i) => {
				gsap.to(panel, {
					scrollTrigger: {
						trigger: panel,
						start: `top-=${startOffset} top`,
						endTrigger: container,
						end: () =>
							`bottom top+=${
								lastPanel.offsetHeight + startOffset + paddingBottom
							}`,
						pin: true,
						pinSpacing: false,
						scrub: true,
						markers: false,
						invalidateOnRefresh: true,
					},
					ease: "circ",
					opacity: i === 0 || i === lastIdx ? 1 : 0.1,
				});
			});
		});
	}
};
export default tjStackAnimation3;
