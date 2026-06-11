"use client";

import { useCallback, useEffect, useState } from "react";

const ReactNiceSelect = ({
	options = [],
	selectedIndex = 0,
	getSelectedOption = () => {},

	className,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFocused, setIsFocused] = useState(true);
	useEffect(() => {
		setSelectedOption(options[selectedIndex]);
		setCurrentIndex(selectedIndex);
	}, []);
	const { value, optionName } = selectedOption || {};
	const handleSelect = useCallback((option, idx) => {
		setIsFocused(true);
		setCurrentIndex(idx);
		setSelectedOption(option);
		getSelectedOption(option);
	}, []);
	return (
		<div
			data-lenis-prevent
			className={`nice-select orderby ${isOpen ? "open" : ""} ${
				className ? className : ""
			}`}
			tabIndex="0"
			onClick={() => setIsOpen(!isOpen)}
			onBlur={() => setIsOpen(false)}
		>
			<span className="current">{optionName ? optionName : ""}</span>
			<div className="nice-select-dropdown">
				<ul className="list">
					{options?.length
						? options?.map((option, idx) => (
								<li
									key={idx}
									data-value={option.value}
									className={`option  ${
										currentIndex === idx ? "selected" : ""
									} ${(currentIndex === idx) & isFocused ? "focus" : ""}`}
									onClick={() => handleSelect(option, idx)}
									onBlur={() => setIsFocused(false)}
								>
									{option.optionName}
								</li>
						  ))
						: ""}
				</ul>
			</div>
		</div>
	);
};

export default ReactNiceSelect;
