const tjMagicCursorAnimation = () => {
	if (typeof window === "undefined") return;

	// Keep track of all listeners we add
	const listeners = [];

	// Utility function to add and track event listeners
	function onAll(selector, event, handler) {
		document.querySelectorAll(selector).forEach(el => {
			el.addEventListener(event, handler);
			listeners.push({ el, event, handler });
		});
	}

	// Slider drag cursor size
	onAll(".slider-drag", "mouseenter", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.add("cursor-big"));
	});
	onAll(".slider-drag", "mouseleave", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.remove("cursor-big"));
	});

	// Hide cursor on links and submenu
	onAll("a, .sub-menu", "mouseenter", () => {
		document
			.querySelectorAll(".mouseCursor, .tj-cursor")
			.forEach(el => el.classList.add("d-none"));
	});
	onAll("a, .sub-menu", "mouseleave", () => {
		document
			.querySelectorAll(".mouseCursor, .tj-cursor")
			.forEach(el => el.classList.remove("d-none"));
	});

	// Hide mouse cursor on project slider
	onAll(".project-slider-one", "mouseenter", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.add("d-none"));
	});
	onAll(".project-slider-one", "mouseleave", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.remove("d-none"));
	});

	// Project cursor style
	onAll(".view-project", "mouseenter", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.add("project-cursor"));
	});
	onAll(".view-project", "mouseleave", () => {
		document
			.querySelectorAll(".mouseCursor")
			.forEach(el => el.classList.remove("project-cursor"));
	});

	// Custom cursor behavior
	function itCursor() {
		const myCursor = document.querySelector(".mouseCursor");
		if (myCursor) {
			const inner = document.querySelector(".cursor-inner"),
				outer = document.querySelector(".cursor-outer");

			if (inner && outer) {
				let isHovering = false;

				const mouseMoveHandler = e => {
					if (!isHovering) {
						outer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
					}
					inner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
				};
				window.addEventListener("mousemove", mouseMoveHandler);
				listeners.push({
					el: window,
					event: "mousemove",
					handler: mouseMoveHandler,
				});

				// Hover effect
				onAll("button, a, .cursor-pointer", "mouseenter", () => {
					inner.classList.add("cursor-hover");
					outer.classList.add("cursor-hover");
					isHovering = true;
				});

				onAll("button, a, .cursor-pointer", "mouseleave", ev => {
					if (
						!(ev.target.closest("a") || ev.target.closest("button")) &&
						!ev.target.closest(".cursor-pointer")
					) {
						inner.classList.remove("cursor-hover");
						outer.classList.remove("cursor-hover");
					}
					isHovering = false;
				});

				inner.style.visibility = "visible";
				outer.style.visibility = "visible";
			}
		}
	}

	itCursor();

	// 🔥 Cleanup function
	return () => {
		listeners.forEach(({ el, event, handler }) => {
			el.removeEventListener(event, handler);
		});
	};
};

export default tjMagicCursorAnimation;
