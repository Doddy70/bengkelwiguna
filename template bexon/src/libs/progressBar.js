import { gsap } from "@/libs/gsap.config";

const progressBar = containerRef => {
	const progressContainers = gsap.utils.toArray(".tj-progress");

	if (!progressContainers.length) return;

	progressContainers.forEach(progressContainer => {
		const targetedProgressBar =
			progressContainer.querySelector(".tj-progress-bar");
		if (!targetedProgressBar) return; // avoid errors if markup is missing

		const completedPercent =
			parseInt(targetedProgressBar.getAttribute("data-percent"), 10) || 0;
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
					".tj-progress-percent"
				);
				if (percentageText) {
					percentageText.textContent = displayPercent + "%";
				}
			},
		});
	});
};

export default progressBar;
