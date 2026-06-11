import { gsap } from "@/libs/gsap.config";
const onePageNavAnim = contextSafe => {
	const animItems = gsap.utils.toArray(".tj-scroll-btn");
	if (animItems.length) {
		animItems.forEach((btn, index) => {
			const onClickGood = contextSafe(() => {
				var sectionTarget = btn.getAttribute("data-target");
				gsap.to(window, {
					duration: 0.3,
					ease: "power2.out",
					scrollTo: { y: sectionTarget, offsetY: 70 },
				});
			});
			btn.addEventListener("click", onClickGood);
		});
	}
};

export default onePageNavAnim;
