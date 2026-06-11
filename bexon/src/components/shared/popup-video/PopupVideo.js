"use client";

import { useEffect } from "react";
const PopupVideo = ({ children }) => {
	useEffect(() => {
		import("glightbox").then(({ default: GLightbox }) => {
			const lightbox = GLightbox({
				selector: ".glightbox",
			});
		});
	}, []);
	return children;
};

export default PopupVideo;
