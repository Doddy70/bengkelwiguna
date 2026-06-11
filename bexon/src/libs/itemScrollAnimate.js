import { gsap } from "@/libs/gsap.config";
const itemScrollAnimate = commonAnimContainerRef => {
	const animItems =
		commonAnimContainerRef.current.querySelectorAll(".itemScrollAnimate");
	if (animItems.length) {
		animItems.forEach((item, index) => {
			const isEven = index % 2 === 0;

			gsap.fromTo(
				item,
				{
					transform: isEven
						? "perspective(1000px) rotateX(50deg)"
						: "perspective(1000px) rotateX(-50deg)",
				},
				{
					transform: isEven
						? "perspective(1000px) rotateX(0deg)"
						: "perspective(1000px) rotateX(0deg)",
					duration: 2,
					ease: "power3.out",
					scrollTrigger: {
						id: `teamItemTrigger-${index}`,
						trigger: item,
						start: "top 80%",
						end: "top 40%",
						scrub: true,
						// markers: true,
					},
				}
			);
		});
	}
};
export default itemScrollAnimate;
