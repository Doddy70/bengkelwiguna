const makeText = (path, isCapitalize) => {
	const pathArray = path.split("_");
	const text = isCapitalize
		? pathArray
				.map(
					eachWord =>
						`${eachWord.slice(0, 1).toUpperCase()}${eachWord.slice(
							1,
							eachWord?.length
						)}`
				)
				.join(" ")
		: pathArray.join(" ");
	return text;
};

export default makeText;
