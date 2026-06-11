import heroAreaAnimation from "./heroAreaAnimation";

const preloaderController = () => {
	import("gsap").then(({ gsap }) => {
		const svg = document.getElementById("preloaderSvg");

		const preTl = gsap.timeline({
			onComplete: startAnimationAfterPreloader,
		});

		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 0,
			y: -100,
			opacity: 0,
		});
		preTl
			.to(svg, {
				duration: 0.5,
				attr: { d: curve },
				ease: "power2.easeIn",
			})
			.to(svg, {
				duration: 0.5,
				attr: { d: flat },
				ease: "power2.easeOut",
			});
		preTl.to(".preloader", {
			y: -1500,
		});
		preTl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		let svgText = document.querySelector(".hero-section .intro_text svg text");
		let heroAnimation = document.querySelector(".heroAnimation");

		function startAnimationAfterPreloader() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}

			if (heroAnimation) {
				// Add a class or directly apply styles to trigger the stroke animation
				heroAnimation.classList.add("activeAnimation");
				heroAreaAnimation(gsap);
			}
		}
	});
};

export default preloaderController;
