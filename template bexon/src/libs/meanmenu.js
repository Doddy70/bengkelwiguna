function meanmenu(elementSelector, options = {}) {
	const defaults = {
		meanMenuTarget: elementSelector,
		meanMenuContainer: "body",
		meanMenuClose: "X",
		meanMenuCloseSize: "18px",
		meanMenuOpen: "<span /><span /><span />",
		meanRevealPosition: "right",
		meanRevealPositionDistance: "0",
		meanRevealColour: "",
		meanScreenWidth: 480,
		meanNavPush: "",
		meanShowChildren: true,
		meanExpandableChildren: true,
		meanRemoveAttrs: false,
		onePage: false,
		meanDisplay: "block",
		removeElements: "",
		meanExpand: "+",
	};

	const settings = Object.assign({}, defaults, options);

	let menuOn = false;
	let meanMenuExist = false;
	let navReveal;
	const meanMenu = document.querySelector(settings.meanMenuTarget);
	const meanContainer = document.querySelector(settings.meanMenuContainer);
	const removeElements = settings.removeElements
		? document.querySelectorAll(settings.removeElements)
		: [];

	// helpers
	function getCurrentWidth() {
		return window.innerWidth || document.documentElement.clientWidth;
	}
	function addClass(el, cls) {
		if (el && !el.classList.contains(cls)) el.classList.add(cls);
	}
	function removeClass(el, cls) {
		if (el && el.classList.contains(cls)) el.classList.remove(cls);
	}

	// restore original
	function meanOriginal() {
		const meanBar = document.querySelector(".mean-bar");
		const meanPush = document.querySelector(".mean-push");
		if (meanBar) meanBar.remove();
		if (meanPush) meanPush.remove();
		if (meanContainer) meanContainer.classList.remove("mean-container");
		if (meanMenu) meanMenu.style.display = settings.meanDisplay;
		removeElements.forEach(el => el.classList.remove("mean-remove"));
		menuOn = false;
		meanMenuExist = false;
	}

	// build mobile menu
	function showMeanMenu() {
		const currentWidth = getCurrentWidth();
		if (currentWidth > settings.meanScreenWidth) {
			meanOriginal();
			return;
		}
		if (meanMenuExist) return;

		removeElements.forEach(el => el.classList.add("mean-remove"));
		meanMenuExist = true;

		if (meanContainer) addClass(meanContainer, "mean-container");

		const meanBar = document.createElement("div");
		meanBar.className = "mean-bar";

		// reveal button
		navReveal = document.createElement("a");
		navReveal.href = "#nav";
		navReveal.className = "meanmenu-reveal";
		navReveal.style.cssText = `background:${settings.meanRevealColour};color:${settings.meanRevealColour};font-size:${settings.meanMenuCloseSize};`;
		navReveal.innerHTML = settings.meanMenuOpen;
		meanBar.appendChild(navReveal);

		// nav wrapper
		const meanNav = document.createElement("nav");
		meanNav.className = "mean-nav";
		meanNav.innerHTML = meanMenu.innerHTML;
		meanBar.appendChild(meanNav);

		meanContainer.insertBefore(meanBar, meanContainer.firstChild);

		// push
		const meanPush = document.createElement("div");
		meanPush.className = "mean-push";
		meanPush.style.marginTop = settings.meanNavPush;
		meanBar.parentNode.insertBefore(meanPush, meanBar.nextSibling);

		// hide original
		meanMenu.style.display = "none";

		// submenus
		const submenus = meanNav.querySelectorAll("ul ul");
		submenus.forEach(submenu => (submenu.style.display = "none"));

		// expandable children
		if (settings.meanShowChildren && settings.meanExpandableChildren) {
			submenus.forEach(submenu => {
				if (submenu.children.length > 0) {
					const expandBtn = document.createElement("a");
					expandBtn.href = "#";
					expandBtn.className = "mean-expand";
					expandBtn.style.fontSize = settings.meanMenuCloseSize;
					expandBtn.innerHTML = settings.meanExpand;
					submenu.parentNode.appendChild(expandBtn);

					expandBtn.addEventListener("click", e => {
						e.preventDefault();
						if (expandBtn.classList.contains("mean-clicked")) {
							submenu.style.display = "none";
							submenu.parentNode.classList.remove("dropdown-opened");
							expandBtn.classList.remove("mean-clicked");
						} else {
							submenu.style.display = "block";
							submenu.parentNode.classList.add("dropdown-opened");
							expandBtn.classList.add("mean-clicked");
						}
					});
				}
			});
		}

		// add 'last' class
		const lis = meanNav.querySelectorAll("ul li");
		if (lis.length > 0) lis[lis.length - 1].classList.add("mean-last");

		// reveal toggle
		navReveal.addEventListener("click", e => {
			e.preventDefault();
			if (!menuOn) {
				const firstUl = meanNav.querySelector("ul");
				if (firstUl) firstUl.style.display = "block";
				menuOn = true;
				addClass(navReveal, "meanclose");
				navReveal.innerHTML = settings.meanMenuClose;
			} else {
				const firstUl = meanNav.querySelector("ul");
				if (firstUl) firstUl.style.display = "none";
				menuOn = false;
				removeClass(navReveal, "meanclose");
				navReveal.innerHTML = settings.meanMenuOpen;
			}
		});

		// one page
		if (settings.onePage) {
			const firstLinks = meanNav.querySelectorAll("ul > li > a:first-child");
			firstLinks.forEach(link => {
				link.addEventListener("click", () => {
					const firstUl = meanNav.querySelector("ul");
					if (firstUl) firstUl.style.display = "none";
					menuOn = false;
					removeClass(navReveal, "meanclose");
					navReveal.innerHTML = settings.meanMenuOpen;
				});
			});
		}
	}

	// resize handler
	function resizeHandler() {
		const w = getCurrentWidth();
		if (w > settings.meanScreenWidth) {
			meanOriginal();
		} else {
			showMeanMenu();
		}
	}

	// init
	showMeanMenu();
	window.addEventListener("resize", resizeHandler);

	// return cleanup
	return function destroyMeanmenu() {
		window.removeEventListener("resize", resizeHandler);
		meanOriginal();
	};
}

export default meanmenu;
