const modal = () => {
	const modalContainers = document.querySelectorAll(".tj-modal-container");

	if (!modalContainers.length) {
		return;
	}

	modalContainers.forEach(modalContainer => {
		const body = document.body;
		const bodyStyle = body.style;
		const modalOpens = modalContainer.querySelectorAll(".tj-modal-open");
		const modalCloses = modalContainer.querySelectorAll(".tj-modal-close");
		const modal = modalContainer.querySelector(".tj-modal");
		const modalContent = modalContainer.querySelector(".tj-modal-content");
		modalOpens.forEach(modalOpen => {
			modalOpen.addEventListener("click", () => {
				modal.style.display = "flex";
				modal.classList.add("modal-open");
				body.classList.add("is-modal-opened");
				setTimeout(() => {
					modal.style.opacity = 100;
					modal.style.visibility = "visible";
					modal.scrollTop = 0;
					modalContent.style.transform = "translateY(0px)";
				}, 10);
			});
		});
		modalCloses.forEach(modalClose => {
			modalClose.addEventListener("click", function () {
				modal.style.opacity = 0;
				modal.style.visibility = "hidden";
				modal.classList.remove("modal-open");
				modalContent.style.transform = `translateY(-${80}px)`;

				setTimeout(() => {
					modal.style.display = "none";
					body.classList.remove("is-modal-opened");
				}, 500);
			});
		});
	});
};
export default modal;
