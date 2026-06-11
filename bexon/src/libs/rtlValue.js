const rtlValue = value => {
	const isRTL = document.documentElement.dir === "rtl";
	return isRTL ? -value : value;
};

export default rtlValue;
