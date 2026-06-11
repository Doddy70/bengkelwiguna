import { gsap, SplitText } from "@/libs/gsap.config";
const titleAnim = contanerRef => {
	const animItems = gsap.utils.toArray(".title-anim");
	if (animItems.length) {
		let staggerAmount = 0.01,
			delayValue = 0.1,
			easeType = "power1.inout",
			animatedTextElements = animItems;

		animatedTextElements.forEach(element => {
			element.classList.add("start-anim");
			let animatedTextElements = new SplitText(element, {
				types: "lines, words",
			});
			gsap.from(animatedTextElements.chars, {
				y: "100%",
				duration: 0.5,
				delay: delayValue,
				autoAlpha: 0,
				stagger: staggerAmount,
				ease: easeType,
				scrollTrigger: { trigger: element, start: "top 85%" },
			});
		});
	}
};

export default titleAnim;
