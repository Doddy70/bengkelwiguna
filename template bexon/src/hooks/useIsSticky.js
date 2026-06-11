"use client";

import { useEffect, useState } from "react";
const useIsSticky = isStickyHeader => {
	const [isSticky, setIsSticky] = useState(false);

	// sticky header related
	useEffect(() => {
		let lastScrollTop = 0;
		const handleScroll = () => {
			const st = window.scrollY;
			if (st > 500) {
				if (st > lastScrollTop) {
					// Scrolling down → remove sticky
					setIsSticky(false);
				} else {
					// Scrolling up → add sticky

					setIsSticky(true);
				}
			} else {
				// Reset when near top
				setIsSticky(false);
			}

			lastScrollTop = st;
		};
		if (isStickyHeader) {
			handleScroll();
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (isStickyHeader) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [isStickyHeader]);
	return isSticky;
};

export default useIsSticky;
