import { gsap } from "@/libs/gsap.config";
const sidebarSticky = commonAnimContainerRef => {
	const animItems = gsap.utils.toArray(".slidebar-stickiy-container");
	if (animItems?.length) {
		animItems.forEach(container => {
			const panels = container.querySelectorAll(".slidebar-stickiy");
			if (panels.length) {
				let mediaMatch = gsap.matchMedia();
				mediaMatch.add("(min-width: 992px)", () => {
					const startOffset = 30;
					//parseInt(getComputedStyle(container).paddingTop) || 0;
					const lastIdx = panels.length - 1;
					const lastPanel = panels[lastIdx];
					const paddingBottom =
						parseInt(getComputedStyle(container).paddingBottom) || 0;
					panels.forEach((panel, i) => {
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
						});
					});
				});
			}
		});
	}
};
export default sidebarSticky;
