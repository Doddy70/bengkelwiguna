const makeWowDelay = (delay, startingDelay, type) => {
	const delayFloat = parseFloat(delay < 10 ? `.${delay}` : `1.${delay}`);
	const wowDelay = delayFloat + startingDelay + (type === 2 ? 0 : delayFloat);

	return `${wowDelay.toFixed(1)}s`;
};

export default makeWowDelay;
