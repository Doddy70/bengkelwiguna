"use client";

import { useCartContext } from "@/context_api/CartContext";

const QuantityInput = ({
	quantity,
	setQuantity,
	type,
	product,
	setUpdatableProduct,
}) => {
	const { addProductToCart } = useCartContext();
	const isQuantiy = quantity > 1;
	return (
		<div className="tj-product-details-quantity">
			<div className="tj-product-quantity">
				<div className="quantity">
					<span
						onClick={() => {
							setQuantity(isQuantiy ? quantity - 1 : 1);
							if (isQuantiy) {
								if (setUpdatableProduct) {
									setUpdatableProduct({ ...product });
								}
							}

							type === "box" && isQuantiy
								? addProductToCart({ ...product, quantity: 1 }, true)
								: () => {};
						}}
						className="qty_button minus tj-cart-minus"
					>
						<i className="far fa-minus"></i>
					</span>
					<input
						type="text"
						id="quantity_6862037ea99bb"
						className="input-text tj-cart-input qty tj-cart-input text"
						name="quantity"
						value={quantity}
						onChange={e => {
							const value = parseInt(e.target.value);

							if (value) {
								if (setUpdatableProduct) {
									setUpdatableProduct({ ...product });
								}
								setQuantity(value);

								if (type === "box") {
									addProductToCart(
										{ ...product, quantity: value },
										false,
										true
									);
								}
							} else {
								setQuantity(1);
								if (type === "box") {
									addProductToCart({ ...product, quantity: 1 }, false, true);
								}
							}
						}}
					/>
					<span
						onClick={() => {
							setQuantity(quantity + 1);
							if (quantity > 0) {
								if (setUpdatableProduct) {
									setUpdatableProduct({ ...product });
								}
							}
							type === "box"
								? addProductToCart({ ...product, quantity: 1 })
								: () => {};
						}}
						className="qty_button plus tj-cart-plus "
					>
						<i className="far fa-plus"></i>
					</span>
				</div>
			</div>
		</div>
	);
};

export default QuantityInput;
