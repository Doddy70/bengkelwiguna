const animateSplitText = async () => {
	if (typeof window === "undefined") return;
	import("gsap").then(({ gsap }) => {
		import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
			import("./gsap-split-text.min").then(({ default: SplitText }) => {
				const elList = document.querySelectorAll(".tj-char-animation");
				function controllAnimation() {
					if (!elList.length) return;

					gsap.registerPlugin(ScrollTrigger, SplitText);

					elList.forEach(el => {
						const tl = gsap.timeline({
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "bottom 60%",
								toggleActions: "play none none none",
								markers: false,
							},
						});

						const split = new SplitText(el, { type: "words,chars" });

						gsap.set(el, { perspective: 300 });

						tl.from(split.chars, {
							duration: 1,
							delay: 0.5,
							x: 100,
							autoAlpha: 0,
							stagger: 0.05,
						});
					});
				}
				controllAnimation();
			});
		});
	});
};

export default animateSplitText;
