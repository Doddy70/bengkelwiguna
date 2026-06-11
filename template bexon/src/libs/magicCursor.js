const magicCursor = () => {
	document.body.classList.add("tj-magic-cursor");
	import("gsap").then(({ gsap }) => {
		if (
			!document.body.classList.contains("is-mobile") &&
			document.body.classList.contains("tj-magic-cursor")
		) {
			const magneticItems = document.querySelectorAll(".tj-magnetic-item");
			magneticItems.forEach(item => {
				const wrapper = document.createElement("div");
				wrapper.classList.add("tj-magnetic-wrap");
				item.parentElement.insertBefore(wrapper, item);
				wrapper.appendChild(item);
			});

			const mouse = { x: 0, y: 0 }; // Cursor position
			const pos = { x: 0, y: 0 }; // Cursor position
			const ratio = 0.15; // delay follow cursor
			let active = false;
			const ball = document.getElementById("ball");

			let ballWidth = 0;
			let ballHeight = 0;
			let ballScale = 1;
			let ballOpacity = 1;
			let ballBorderWidth = 1;

			gsap.set(ball, {
				xPercent: -50,
				yPercent: -50,
				width: ballWidth,
				height: ballHeight,
				borderWidth: ballBorderWidth,
				opacity: ballOpacity,
			});

			document.addEventListener("mousemove", function (e) {
				mouse.x = e.clientX;
				mouse.y = e.clientY;
			});

			gsap.ticker.add(function () {
				if (!active) {
					pos.x += (mouse.x - pos.x) * ratio;
					pos.y += (mouse.y - pos.y) * ratio;
					gsap.set(ball, { x: pos.x, y: pos.y });
				}
			});

			// Show/hide magic cursor
			const linksAndButtons = document.querySelectorAll(
				"a, button, .tj-cart-minus, .tj-cart-plus"
			);
			linksAndButtons.forEach(element => {
				if (!element.classList.contains("cursor-hide")) {
					element.addEventListener("mouseenter", function () {
						gsap.to(ball, { duration: 0.3, scale: 0, opacity: 0 });
					});

					element.addEventListener("mouseleave", function () {
						gsap.to(ball, {
							duration: 0.3,
							scale: ballScale,
							opacity: ballOpacity,
						});
					});
				}
			});

			const clickableLinks = document.querySelectorAll(
				"a:not([target='_blank']):not(.cursor-hide):not([href^='#']):not([href^='mailto']):not([href^='tel']):not(.lg-trigger):not(.tj-btn-disabled a)"
			);
			clickableLinks.forEach(link => {
				link.addEventListener("click", function () {
					gsap.to(ball, { duration: 0.3, scale: 1.3, autoAlpha: 0 });
				});
			});

			// Show/hide on document leave/enter
			document.addEventListener("mouseleave", function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 0 });
			});

			document.addEventListener("mouseenter", function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});

			document.addEventListener("mousemove", function () {
				gsap.to("#magic-cursor", { duration: 0.3, autoAlpha: 1 });
			});

			// Cursor view on hover (data attribute "data-cursor="...")
			const cursorElements = document.querySelectorAll("[data-cursor]");
			cursorElements.forEach(element => {
				element.addEventListener("mouseenter", function () {
					const ballView = document.createElement("div");
					ballView.classList.add("ball-view");
					ballView.innerHTML = this.getAttribute("data-cursor");
					ball.appendChild(ballView);

					gsap.to(ball, {
						duration: 0.3,
						yPercent: -75,
						width: 100,
						height: 100,
						opacity: 1,
						borderWidth: 1,
						zIndex: 1,
						backdropFilter: "blur(15px)",
						backgroundColor: "#8750f7",
						boxShadow: "0px 1px 3px 0px rgba(18, 20, 32, 0.14)",
					});

					gsap.to(ballView, { duration: 0.3, scale: 1, autoAlpha: 1 });
				});

				element.addEventListener("mouseleave", function () {
					gsap.to(ball, {
						duration: 0.3,
						yPercent: -50,
						width: ballWidth,
						height: ballHeight,
						opacity: ballOpacity,
						borderWidth: ballBorderWidth,
						backgroundColor: "#1c1d21",
					});

					gsap.to(".ball-view", {
						duration: 0.3,
						scale: 0,
						autoAlpha: 0,
						clearProps: "all",
					});
					ball.querySelector(".ball-view").remove();
				});

				element.classList.add("not-hide-cursor");
			});
		}
	});
};

export default magicCursor;
