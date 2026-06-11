import { gsap } from "@/libs/gsap.config";

const tjProgressBar = containerRef => {
	if (!containerRef?.current) return;

	const progressContainers =
		containerRef.current.querySelectorAll(".tj-progress");

	if (!progressContainers.length) return;

	progressContainers.forEach(progressContainer => {
		const targetedProgressBar =
			progressContainer.querySelector(".tj-progress__bar");
		if (!targetedProgressBar) return; // avoid errors if markup is missing

		const completedPercent =
			parseInt(targetedProgressBar.getAttribute("data-perchant"), 10) || 0;
		gsap.set(targetedProgressBar, {
			width: `0`,
		});
		gsap.to(targetedProgressBar, {
			width: `${completedPercent}%`,
			ease: "power2.out",
			duration: 2,
			scrollTrigger: {
				trigger: progressContainer,
				start: "top 90%",
				end: "top 30%",
			},
			onUpdate: function () {
				let progressValue = Math.round(this.progress() * 100);
				let displayPercent = Math.round(
					(completedPercent * progressValue) / 100
				);

				const percentageText = progressContainer.querySelector(
					".tj-progress__perchant"
				);
				if (percentageText) {
					percentageText.textContent = displayPercent + "%";
				}
			},
		});
	});
};

export default tjProgressBar;
