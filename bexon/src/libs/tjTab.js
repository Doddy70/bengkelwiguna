const tjTab = () => {
	// Define variables
	var tabLabels = document.querySelectorAll("#tabs li");
	var tabPanes = document.querySelectorAll(".tab-contents");
	var tabContainer = document.querySelector("#tab-contents");

	function setMinTabHeight() {
		let maxHeight = 0;

		if (tabPanes.length) {
			tabPanes.forEach(pane => {
				const wasHidden =
					pane.style.display === "none" || pane.style.visibility === "hidden";

				if (wasHidden) {
					// Temporarily make hidden pane visible to get its height
					pane.style.visibility = "hidden";
					pane.style.display = "block"; // Ensure it's displayed for height measurement
				}

				const height = pane.offsetHeight;
				if (height > maxHeight) {
					maxHeight = height;
				}

				// Revert back to original state if it was hidden
				if (wasHidden) {
					pane.style.visibility = "";
					pane.style.display = "none"; // Hide it again after measuring
				}
			});

			// Set the container's minHeight to the height of the tallest pane
			tabContainer.style.minHeight = maxHeight + "px";
		}
	}

	if (tabLabels?.length) {
		function activateTab(e) {
			e.preventDefault();

			// Deactivate all tabs
			tabLabels.forEach(label => label.classList.remove("active"));
			tabPanes.forEach(pane => {
				pane.classList.remove("show");
				pane.classList.add("fade");
			});

			// Activate the clicked tab
			const parentLi = e.target.closest("li");
			const targetId = e.target.getAttribute("href");
			if (parentLi && targetId) {
				parentLi.classList.add("active");
				const targetPane = document.querySelector(targetId);
				if (targetPane) {
					setTimeout(() => {
						targetPane.classList.remove("fade");
						targetPane.classList.add("show", "fade");

						// Update the min-height after fade starts
						setMinTabHeight();
					}, 10); // Small delay to trigger fade effect
				}
			}
		}

		// Add click listeners to tab links
		tabLabels.forEach(label => {
			const link = label.querySelector("a");
			if (link) {
				link.addEventListener("click", activateTab);
			}
		});

		// Set initial height on load
		setMinTabHeight();
	}
};

export default tjTab;
