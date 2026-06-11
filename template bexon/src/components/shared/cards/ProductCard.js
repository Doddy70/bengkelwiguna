"use client";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import modal from "@/libs/modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ProductCard = ({ item, idx, setCurrentItem }) => {
	const { addProductToCart } = useCartContext();
	const { addProductToWishlist } = useWishlistContext();
	const [isAdded, setIsAdded] = useState(false);
	const { id, title, price, previousPrice, status, img, category, date } =
		item || {};
	useEffect(() => {
		modal();
	}, []);
	// handle add to cart
	const handleAddToCart = () => {
		addProductToCart({
			...item,
			quantity: 1,
		});
		setIsAdded(true);
	};
	return (
		<div className="tj-product">
			<div className="tj-product-item">
				<div className="tj-product-thumb">
					<Link href={`/shop/${id}`}>
						<Image
							src={img ? img : "/images/product/product-1.webp"}
							alt=""
							width={520}
							height={601}
							style={{ height: "auto" }}
						/>{" "}
					</Link>

					{status ? (
						<div className="tj-product-badge product-on-sale">
							<span className={`onsale ${status === "Sold" ? "sold-out" : ""}`}>
								{status}
							</span>
						</div>
					) : (
						""
					)}

					{/* <!-- product action --> */}
					<div className="tj-product-action">
						<div className="tj-product-action-item d-flex flex-column">
							<div
								className="tj-product-action-btn product-add-wishlist-btn"
								onClick={() => addProductToWishlist({ ...item, quantity: 1 })}
							>
								<button>Add to wishlist</button>{" "}
								<span className="tj-product-action-btn-tooltip">
									Add to wishlist
								</span>
							</div>

							<div
								className="tj-product-action-btn tj-modal-open"
								onMouseEnter={() => setCurrentItem(item)}
							>
								<button className="tj-quick-product-details ">
									<i className="fal fa-eye"></i>
								</button>
								<span className="tj-product-action-btn-tooltip">
									Quick view
								</span>
							</div>
						</div>
					</div>
					{status === "Sold" ? (
						""
					) : (
						<div className="tj-product-cart-btn">
							<button
								onClick={handleAddToCart}
								className={`cart-button button tj-cart-btn stock-available`}
								style={{ display: isAdded ? "none" : "flex" }}
							>
								<span className="btn-icon">
									<i className="fal fa-shopping-cart"></i>
									<i className="fal fa-shopping-cart"></i>
								</span>
								<span className="btn-text">
									<span>Add to cart</span>
								</span>
							</button>
							{isAdded ? (
								<Link
									href="/cart/"
									className="added_to_cart wc-forward"
									title="View cart"
								>
									View cart
								</Link>
							) : (
								""
							)}
						</div>
					)}
				</div>
				<div className="tj-product-content">
					<h3 className="tj-product-title">
						<Link href={`/shop/${id}`}>{title}</Link>
					</h3>

					<div className="tj-product-price-wrapper">
						<span className="price">
							{previousPrice ? (
								<del>
									<span>
										<bdi>
											<span>$</span>
											{previousPrice.toFixed(2)}
										</bdi>
									</span>
								</del>
							) : (
								""
							)}
							<ins>
								<span>
									<bdi>
										<span>$</span>
										{price.toFixed(2)}
									</bdi>
								</span>
							</ins>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
