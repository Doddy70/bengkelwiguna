import { gsap } from "@/libs/gsap.config";
const tjImageParallex = selector => {
	const animItems = gsap.utils.toArray(".img-parallax");
	if (animItems?.length) {
		let mediaMatch = gsap.matchMedia();
		let tl = gsap.timeline();
		animItems.forEach((item, i) => {
			const img = item.querySelector("img");
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: item,
					scrub: 1,
					pin: false,
				},
			});
			tl.fromTo(
				img,
				{
					yPercent: 0,
					ease: "none",
				},
				{
					yPercent: -30,
					ease: "none",
				}
			);
		});
	}
};
export default tjImageParallex;
