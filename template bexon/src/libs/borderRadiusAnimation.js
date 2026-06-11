import { gsap } from "@/libs/gsap.config";
const borderRadiusAnimation = async selector => {
	gsap.set(selector, {
		"--br-bottom-left": "0px",
	});
	gsap.to(selector, {
		"--br-bottom-left": "410px",
		ease: "power3.out", // extra smoothness on top of scrub
		scrollTrigger: {
			trigger: selector,
			start: "bottom 120%",
			end: "bottom 50%", // longer scroll for slower animation
			scrub: 0.8, // smooth scrub with inertia feel
		},
	});
};
export default borderRadiusAnimation;
