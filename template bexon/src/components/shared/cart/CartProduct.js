"use client";

import { useCartContext } from "@/context_api/CartContext";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import QuantityInput from "../Inputs/QuantityInput";

const CartProduct = ({
	product,
	updatableProducts,
	setUpdatableProducts,
	setUpdatableProduct,
	handleClearCart,
}) => {
	const [quantity, setQuantity] = useState(1);
	const {
		id,
		title,
		price,
		quantity: quantity1,
		img = "/images/product/product-1.webp",
		isCourse,
	} = product;
	const { deleteProductFromCart } = useCartContext();

	useEffect(() => {
		if (quantity1 > 0) {
			setQuantity(quantity1);
		}
	}, [quantity1]);
	useEffect(() => {
		const newUptedProducts = [...updatableProducts]?.map(product =>
			id === product?.id ? { ...product, quantity } : product
		);
		setUpdatableProducts(newUptedProducts);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [quantity]);
	const totalPrice = quantity * price;
	return product ? (
		<tr className="woocommerce-cart-form__cart-item cart_item">
			<td className="product-thumbnail" data-title="Product">
				<Link href={`/shop/${id}`}>
					<Image
						src={img}
						className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
						alt="Personal holding earbud"
						width={520}
						height={601}
						style={{ height: "auto" }}
					/>
				</Link>
			</td>
			<td className="product-name" data-title="Name">
				<h5>
					<Link href={`/shop/${id}`}>
						{" "}
						{title.length > 30 ? title.slice(0, 30) : title}
					</Link>
				</h5>
			</td>
			<td className="product-price" data-title="Price">
				<span className="woocommerce-Price-amount amount">
					<bdi>
						<span className="woocommerce-Price-currencySymbol">$</span>
						{price?.toFixed(2)}
					</bdi>
				</span>
			</td>
			<td className="product-quantity tj-cart-quantity" data-title="Quantity">
				<QuantityInput
					quantity={quantity}
					setQuantity={setQuantity}
					product={product}
					setUpdatableProduct={setUpdatableProduct}
				/>
			</td>
			<td className="product-subtotal" data-title="Subtotal">
				<span className="woocommerce-Price-amount amount">
					<bdi>
						<span className="woocommerce-Price-currencySymbol">$</span>
						{totalPrice <= 0 ? "0.00" : totalPrice.toFixed(2)}
					</bdi>
				</span>
			</td>
			<td className="product-remove">
				<button
					type="button"
					onClick={() => deleteProductFromCart(id, title)}
					className="remove"
				>
					×
				</button>
			</td>
		</tr>
	) : (
		<p></p>
	);
};

export default CartProduct;
