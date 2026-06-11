const textAnimation = () => {
	// Anim Js
	const target = document.getElementById("anim");

	if (target) {
		function splitTextToSpans(targetElement) {
			if (targetElement) {
				const text = targetElement.textContent;
				targetElement.innerHTML = "";
				for (let character of text) {
					const span = document.createElement("span");
					if (character === " ") {
						span.innerHTML = "&nbsp;";
					} else {
						span.textContent = character;
					}
					targetElement.appendChild(span);
				}
			}
		}
		splitTextToSpans(target);
	}
};

export default textAnimation;
