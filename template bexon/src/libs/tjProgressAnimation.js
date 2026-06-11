import { gsap } from "@/libs/gsap.config";
const tjProgressAnimation = selector => {
	let mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 0)", () => {
		// Sticky panels
		let panels = gsap.utils.toArray(".tj-sticky-panel-2");
		if (panels.length) {
			let tl = gsap.timeline();
			panels.forEach(panel => {
				tl.to(panel, {
					force3D: true,
					scrollTrigger: {
						trigger: panel,
						pin: panel,
						scrub: 1,
						start: "top top",
						end: "bottom+=120 bottom",
						endTrigger: ".tj-sticky-panel-container-2",
						pinSpacing: false,
						markers: false,
					},
				});
			});
		}

		// Progress Panels
		const animItems = gsap.utils.toArray(".tj-progress-item");
		let totalAnimItems = animItems?.length;
		if (totalAnimItems) {
			let scrollProgressItems = gsap.utils.toArray(".tj-scroll-progress-item");
			gsap.to(animItems, {
				ease: "none",
				scrollTrigger: {
					trigger: ".tj-progress-wrapper",
					start: "top top",
					end: "bottom bottom",
					scrub: 1,
					pin: false,
					onUpdate: self => {
						let progress = self.progress;
						let activeIndex = Math.round(progress * (totalAnimItems - 1));
						animItems.forEach((panel, index) => {
							panel.classList.toggle("active", index === activeIndex);
						});
						scrollProgressItems.forEach((item, index) => {
							item.classList.toggle("active", index === activeIndex);
						});
					},
				},
			});
		}
	});
};
export default tjProgressAnimation;
