import { gsap } from "@/libs/gsap.config";
import rtlValue from "./rtlValue";
const tjScrollSlider = selector => {
	let mediaMatch = gsap.matchMedia();
	mediaMatch.add("(min-width: 768px)", () => {
		const sliders = gsap.utils.toArray(".tj-scroll-slider");
		if (sliders?.length) {
			sliders.forEach(slider => {
				let panels = gsap.utils.toArray(".tj-scroll-slider-item");
				gsap.to(panels, {
					xPercent: rtlValue(-100) * (panels.length - 1),
					force3D: true,
					ease: "none",
					scrollTrigger: {
						trigger: slider,
						start: "top+=50 top",
						pin: true,
						scrub: 1,
						markers: false,
						end: () => "+=" + slider.offsetWidth,
					},
				});
			});
		}
	});
};
export default tjScrollSlider;
