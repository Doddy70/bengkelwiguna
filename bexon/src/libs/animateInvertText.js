import { gsap, SplitText } from "@/libs/gsap.config";
const animateInvertText = contanerRef => {
	const animItems = gsap.utils.toArray(".title-highlight");
	if (animItems.length) {
		const highlightText = new SplitText(".title-highlight", {
			type: "lines",
			linesClass: "line",
		});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".title-highlight",
				scrub: 1,
				start: "top 80%",
				end: "bottom center",
			},
		});
		tl.to(".line", {
			"--highlight-offset": "100%",
			stagger: 0.4,
		});
	}
};

export default animateInvertText;
