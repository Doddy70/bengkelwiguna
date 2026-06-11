"use client";

import { useEffect } from "react";
const PopupImage = ({ children }) => {
	useEffect(() => {
		import("glightbox").then(({ default: GLightbox }) => {
			const lightbox = GLightbox({
				selector: ".glightbox-img",
			});
		});
	}, []);
	return children;
};

export default PopupImage;
