// service animation
export const serviceBgAnimation = (parent, item) => {
	const bgAnimWidget = document.querySelector(`.${parent}`);
	const activeBg = document.querySelector(`.${parent} .active-bg`);
	let currentElement = document.querySelector(`.${parent} .current`);

	function activeItem(activeBg, element) {
		if (activeBg && element) {
			const rect = element.getBoundingClientRect();
			const widgetRect = bgAnimWidget.getBoundingClientRect();
			activeBg.style.width = `${rect.width}px`;
			activeBg.style.height = `${rect.height}px`;
			activeBg.style.left = `${rect.left - widgetRect.left}px`;
			activeBg.style.top = `${rect.top - widgetRect.top}px`;
		}
	}

	bgAnimWidget.addEventListener(
		"mouseenter",
		event => {
			if (event.target.classList.contains(`${item}`)) {
				const target = event.target;
				activeItem(activeBg, target);
				document.querySelectorAll(`.${parent} .${item}`).forEach(item2 => {
					item2.classList.remove("current");
				});
				target.classList.add("current");
			}
		},
		true
	);

	bgAnimWidget.addEventListener("mouseleave", () => {
		currentElement = document.querySelector(`.${parent} .current`);
		activeItem(activeBg, currentElement);
		document.querySelectorAll(`.${item}`).forEach(item2 => {
			item2.classList.remove("mleave");
		});
	});

	activeItem(activeBg, currentElement);
};

// butotn animation
export function buttonBgAnimation() {
	const buttonGroup = document.querySelector(".portfolio-filter .button-group");
	const activeBg = document.querySelector(
		".portfolio-filter .button-group .active-bg"
	);
	const buttons = document.querySelectorAll(
		".portfolio-filter .button-group button"
	);

	const activeFilterBtn = (activeBg, element) => {
		if (activeBg && element) {
			const rect = element.getBoundingClientRect();
			const parentRect = buttonGroup.getBoundingClientRect();

			activeBg.style.width = `${rect.width}px`;
			activeBg.style.height = `${rect.height}px`;
			activeBg.style.left = `${rect.left - parentRect.left}px`;
			activeBg.style.top = `${rect.top - parentRect.top}px`;
		}
	};

	// Event listener for button clicks
	buttons.forEach(button => {
		button.addEventListener("click", () => {
			// Remove the 'active' class from all buttons
			buttons.forEach(btn => btn.classList.remove("active"));

			// Add the 'active' class to the clicked button
			button.classList.add("active");

			// Update the position of the active background
			activeFilterBtn(activeBg, button);
		});
	});

	// Initialize with the currently active button
	const activeElement = document.querySelector(
		".portfolio-filter .button-group .active"
	);
	activeFilterBtn(activeBg, activeElement);
}
