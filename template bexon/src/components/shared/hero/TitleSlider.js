"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const TitleSlider = () => {
	const [index, setIndex] = useState(0);
	const images = [
		"/images/hero/title-img-2.webp",
		"/images/hero/title-img-3.webp",
		"/images/hero/title-img-4.webp",
		"/images/hero/title-img-5.webp",
		"/images/hero/title-img-6.webp",
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prev => (prev + 1) % images.length);
		}, 500);

		return () => clearInterval(interval);
	}, []);
	return (
		<span className="tj-image-slider wow zoomIn" data-wow-delay=".5s">
			{images.map((src, i) => (
				<Image
					key={i}
					src={src}
					alt=""
					width={158}
					height={80}
					className={i === index ? "active" : ""}
				/>
			))}
		</span>
	);
};

export default TitleSlider;
