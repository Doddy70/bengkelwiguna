const accordion = () => {
	const buttons = document.querySelectorAll(".accordion-btn");
	if (buttons?.length) {
		buttons.forEach((button, index) => {
			button.addEventListener("click", function () {
				const content = button.nextElementSibling;

				const isOpen = content.classList.contains("open");
				buttons.forEach((button2, index2) => {
					button2.classList.remove("open");
				});
				document.querySelectorAll(".accordion-content").forEach((item, i) => {
					item.style.maxHeight = "0";
					item.classList.remove("open");
				});

				if (!isOpen) {
					content.style.maxHeight = content.scrollHeight + "px";
					content.classList.add("open");
					this.classList.add("open");
				}
			});
		});

		document.querySelectorAll(".accordion-content").forEach((item, i) => {
			const isOpen = item.classList.contains("open");
			if (isOpen) {
				item.style.maxHeight = item.scrollHeight + "px";
			}
		});
	}
};

export default accordion;
