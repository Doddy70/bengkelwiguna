"use client";
import { useEffect, useState } from "react";

const BackToTop = () => {
	const [scrollValue, setScrollValue] = useState(0);
	const [scrollTopPos, setScrollTopPos] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			const scrollTopPos = document.documentElement.scrollTop;

			const calcHeight =
				document.documentElement.scrollHeight -
				document.documentElement.clientHeight;
			const value = Math.round((scrollTopPos / calcHeight) * 100);
			setScrollTopPos(scrollTopPos);
			setScrollValue(value);
		};

		window.addEventListener("scroll", handleScroll);
		window.addEventListener("load", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("load", handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		document.documentElement.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div
			id="tj-back-to-top"
			onClick={scrollToTop}
			className={scrollTopPos > 100 ? "active" : ""}
			style={{
				background: `conic-gradient(var(--tj-color-theme-primary) ${scrollValue}%, var(--tj-color-common-white) ${scrollValue}%)`,
				cursor: "pointer",
			}}
		>
			<span id="tj-back-to-top-percentage">
				{scrollValue < 96 ? (
					`${scrollValue}%`
				) : (
					<i className="tji-arrow-up-long"></i>
				)}
			</span>
		</div>
	);
};

export default BackToTop;
