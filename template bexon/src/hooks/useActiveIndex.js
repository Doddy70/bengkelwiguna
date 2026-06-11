"use client";
import { useState } from "react";

export default function useActiveIndex(defaultIndex = 0) {
	const [activeIndex, setActiveIndex] = useState(defaultIndex);
	const hadleAcitiveIndex = index => {
		setActiveIndex(index);
	};
	return { activeIndex, setActiveIndex, hadleAcitiveIndex };
}
