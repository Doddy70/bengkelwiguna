"use client";

import ReactNiceSelect from "../Inputs/ReactNiceSelect";

const CountryInput = ({
	optionns,
	selectedIndex,
	getSelectedOption,
	className,
}) => {
	return (
		<ReactNiceSelect
			selectedIndex={selectedIndex}
			options={optionns}
			getSelectedOption={getSelectedOption}
			className={className}
		/>
	);
};

export default CountryInput;
