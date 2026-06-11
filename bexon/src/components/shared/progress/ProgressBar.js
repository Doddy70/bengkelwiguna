"use client";

import { gsap } from "@/libs/gsap.config";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const ProgressBar = ({
	value = 92,
	size = 120,
	thickness = 0.16,
	strokeLinecap = 0,
	bgColor = "#ffffff",
	fgColor = "#1E8A8A",
}) => {
	const circleRef = useRef(null);
	const textRef = useRef(null);

	// Intersection Observer for "appear on scroll"
	const { ref, inView } = useInView({
		triggerOnce: true,
		threshold: 0.3,
	});

	useEffect(() => {
		if (!inView) return;

		const circle = circleRef.current;
		const text = textRef.current;

		if (!circle || !text) return; // safeguard

		const radius = size / 2 - ((size / 2) * thickness) / 2;
		const circumference = 2 * Math.PI * radius;

		// set initial circle dash
		circle.style.strokeDasharray = circumference;
		circle.style.strokeDashoffset = circumference;

		// animate circle progress
		const circleTween = gsap.to(circle, {
			strokeDashoffset: circumference - (circumference * value) / 100,
			duration: 2,
			ease: "power2.out",
		});

		// animate number
		const counter = { val: 0 };
		const numberTween = gsap.to(counter, {
			val: value,
			duration: 2,
			ease: "power2.out",
			onUpdate: () => {
				text.textContent = Math.round(counter.val) + "%";
			},
		});
		// Cleanup on unmount
		return () => {
			circleTween.kill();
			numberTween.kill();
		};
	}, [inView, value, size, thickness]);

	return (
		<div ref={ref} style={{ width: size, height: size, position: "relative" }}>
			<svg width={size} height={size}>
				{/* Background circle */}
				<circle
					cx={size / 2}
					cy={size / 2}
					r={size / 2 - ((size / 2) * thickness) / 2}
					stroke={bgColor}
					strokeWidth={(size / 2) * thickness}
					fill="none"
				/>
				{/* Foreground progress circle */}
				<circle
					ref={circleRef}
					cx={size / 2}
					cy={size / 2}
					r={size / 2 - ((size / 2) * thickness) / 2}
					stroke={fgColor}
					strokeWidth={(size / 2) * thickness}
					fill="none"
					strokeLinecap={strokeLinecap ? strokeLinecap : ""}
					transform={`rotate(-90 ${size / 2} ${size / 2})`}
				/>
			</svg>
			{/* Animated text */}
			<span
				ref={textRef}
				className="progress-percent"
				style={{
					position: "absolute",
					top: "50%",
					left: "50%",
					transform: "translate(-50%, -50%)",
				}}
			>
				0%
			</span>
		</div>
	);
};

export default ProgressBar;
