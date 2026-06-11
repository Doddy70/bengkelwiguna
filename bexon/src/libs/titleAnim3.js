import { gsap, SplitText } from "@/libs/gsap.config";
const titleAnim3 = contanerRef => {
	const animItems = gsap.utils.toArray(".hero-text-anim");
	if (animItems.length) {
		let staggerAmount = 0.05,
			delayValue = 0.4,
			easeType = "power1.out",
			heroTextElements = animItems;

		heroTextElements.forEach(element => {
			element.classList.add("start-anim");
			let animationSplitText = new SplitText(element, { type: "chars, words" });
			gsap.from(animationSplitText.chars, {
				opacity: 0,
				duration: 0.4,
				delay: delayValue,
				ease: easeType,
				stagger: staggerAmount,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}
};

export default titleAnim3;
