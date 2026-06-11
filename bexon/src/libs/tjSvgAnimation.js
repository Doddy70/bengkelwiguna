import { gsap } from "@/libs/gsap.config";
const tjSvgAnimation = animContainerRef => {
	animContainerRef?.current?.querySelectorAll(".svg-animate")?.forEach(box => {
		// Check if the element has the
		if (box.classList.contains("svg-animate")) {
			const paths = box.querySelectorAll("path");

			paths.forEach(path => {
				const length = path.getTotalLength();

				// Set initial state
				gsap.set(path, {
					strokeDasharray: length,
					strokeDashoffset: length,
					visibility: "visible",
					opacity: 1,
				});

				// Animate on scroll
				gsap.to(path, {
					strokeDashoffset: 0,
					duration: 1.5,
					ease: "power2.out",
					scrollTrigger: {
						trigger: box,
						start: "top 80%",
						toggleActions: "play none none none",
						markers: false,
					},
				});
			});
		}
	});
};

export default tjSvgAnimation;
