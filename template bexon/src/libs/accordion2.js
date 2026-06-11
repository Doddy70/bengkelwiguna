const accordion2 = () => {
	const accordionItems = document.querySelectorAll(".accordion-list > li");
	if (accordionItems?.length) {
		const firstItem = accordionItems[0];
		firstItem.classList.add("active");
		firstItem.querySelector(".tj-service-5-accordion-wrap").style.display =
			"flex";

		// Hide the rest
		for (let i = 1; i < accordionItems.length; i++) {
			const wrap = accordionItems[i].querySelector(
				".tj-service-5-accordion-wrap"
			);
			if (wrap) wrap.style.display = "none";
		}

		// Click functionality
		accordionItems.forEach(item => {
			item.addEventListener("click", function () {
				const isActive = item.classList.contains("active");
				const currentWrap = item.querySelector(".tj-service-5-accordion-wrap");

				if (isActive) {
					item.classList.remove("active");
					slideUp(currentWrap);
				} else {
					const activeItem = document.querySelector(
						".accordion-list > li.active"
					);
					if (activeItem) {
						activeItem.classList.remove("active");
						const activeWrap = activeItem.querySelector(
							".tj-service-5-accordion-wrap"
						);
						slideUp(activeWrap);
					}

					item.classList.add("active");
					slideDown(currentWrap);
				}
			});
		});

		// Helper functions for slideUp and slideDown
		function slideUp(element, duration = 300) {
			element.style.transition = `height ${duration}ms ease`;
			element.style.overflow = "hidden";
			element.style.height = element.scrollHeight + "px";
			requestAnimationFrame(() => {
				element.style.height = "0";
			});

			setTimeout(() => {
				element.style.display = "none";
				element.style.removeProperty("height");
				element.style.removeProperty("overflow");
				element.style.removeProperty("transition");
			}, duration);
		}

		function slideDown(element, duration = 300) {
			element.style.display = "flex";
			let height = element.scrollHeight;
			element.style.height = "0";
			element.style.overflow = "hidden";
			element.style.transition = `height ${duration}ms ease`;

			requestAnimationFrame(() => {
				element.style.height = height + "px";
			});

			setTimeout(() => {
				element.style.removeProperty("height");
				element.style.removeProperty("overflow");
				element.style.removeProperty("transition");
			}, duration);
		}
	}
};

export default accordion2;
