import { gsap } from "@/libs/gsap.config";
const tjLeftSwipeAnimation = commonAnimContainerRef => {
	const animItems = gsap.utils.toArray(".leftSwipeWrap");
	if (animItems.length) {
		animItems.forEach((wrap, i) => {
			gsap.set(wrap.querySelectorAll(".left-swipe"), {
				transformPerspective: 1200,
				x: "-10rem",
				rotateY: 20,
				opacity: 0,
				transformOrigin: "left center",
			});
			gsap.to(wrap.querySelectorAll(".left-swipe"), {
				transformPerspective: 1200,
				x: 0,
				rotateY: 0,
				opacity: 1,
				delay: 0.3,
				ease: "power3.out",
				scrollTrigger: {
					trigger: wrap,
					start: "top 80%",
					id: "leftSwipeWrap-" + i,
					toggleActions: "play none none none",
					// markers: true,
				},
			});
		});
	}
};
export default tjLeftSwipeAnimation;
