function heroAreaAnimation(gsap) {
	let heroArea = document.querySelector(".heroAnimation.activeAnimation");
	const selectAll = selector =>
		Array.from(document.querySelectorAll(`.activeAnimation ${selector}`));

	const hero4SubTitle = selectAll(".tj-hero-4-subtitle, .tj-hero-7-thumb");
	const hero4Title = selectAll(".tj-hero-4-title, .tj-hero-7-content");
	const hero4Thumb = selectAll(
		".tj-hero-4-bottom-thumb .img, .tj-hero-7-button"
	);
	const hero4Shape1 = selectAll(
		".tj-hero-4-bottom-thumb-shape-1, .tj-feature-7-thumb"
	);
	const hero4Shape2 = selectAll(
		".tj-hero-4-bottom-thumb-shape-2, .tj-feature-7-wrapper"
	);
	const hero4Reviews = selectAll(".tj-hero-4-bottom-reviews");
	const hero4Counter = selectAll(".tj-hero-4-bottom-counter");

	if (heroArea) {
		const heroTl = gsap.timeline();

		if (hero4SubTitle.length) {
			heroTl.from(hero4SubTitle, {
				y: 50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Title.length) {
			heroTl.from(hero4Title, {
				y: 50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Thumb.length) {
			heroTl.from(hero4Thumb, {
				y: 50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Shape1.length) {
			heroTl.from(hero4Shape1, {
				x: 50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Shape2.length) {
			heroTl.from(hero4Shape2, {
				x: -50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Reviews.length) {
			heroTl.from(hero4Reviews, {
				x: -50,
				opacity: 0,
				duration: 0.5,
			});
		}

		if (hero4Counter.length) {
			heroTl.from(hero4Counter, {
				x: 50,
				opacity: 0,
				duration: 0.5,
			});
		}
	}
}

export default heroAreaAnimation;
