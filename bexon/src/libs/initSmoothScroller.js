import { gsap, ScrollSmoother } from "@/libs/gsap.config";

const initSmoothScroller = contanerRef => {
	const animItems = gsap.utils.toArray("#smooth-wrapper");
	if (animItems.length) {
		gsap.config({
			nullTargetWarn: false,
		});

		let smoother = ScrollSmoother.create({
			content: "#smooth-content",
			wrapper: "#smooth-wrapper",
			smooth: 1.5,
			effects: true,
			smoothTouch: 0.1,
			ignoreMobileResize: true,
		});
	}
};

export default initSmoothScroller;
