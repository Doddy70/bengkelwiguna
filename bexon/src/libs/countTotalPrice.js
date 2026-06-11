const countTotalPrice = items => {
	// calculate total price
	let totalPrice;
	if (items?.length) {
		totalPrice = parseFloat(
			items?.reduce((ac, { price, quantity }) => ac + quantity * price, 0)
		);
	} else {
		totalPrice = 0;
	}

	return totalPrice;
};
export default countTotalPrice;
