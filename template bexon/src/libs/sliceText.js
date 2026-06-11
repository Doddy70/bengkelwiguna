const sliceText = (text, length, ext) => {
	return text.length > length
		? `${text.slice(0, ext ? length - 3 : length)}${ext ? "..." : ""}`
		: text;
};

export default sliceText;
