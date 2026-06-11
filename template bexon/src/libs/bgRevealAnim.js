const bgRevealAnim = () => {
	// hover image animation
	const hoverItem = document.querySelectorAll(".anim-reveal-item");
	if (hoverItem?.length) {
		function moveImage(e, hoverItem, index) {
			const item = hoverItem.getBoundingClientRect();
			const x = e.clientX - item.x;
			const y = e.clientY - item.y;
			if (hoverItem.children[index]) {
				hoverItem.children[index].style.transform = `translate(${x}px, ${y}px)`;
			}
		}
		hoverItem.forEach((item, i) => {
			item.addEventListener("mousemove", e => {
				setInterval(moveImage(e, item, 1), 50);
			});
		});
	}
};

export default bgRevealAnim;
