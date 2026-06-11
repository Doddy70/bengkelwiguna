"use client";
import NoItems from "@/components/shared/others/NoItems";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import Image from "next/image";

import Link from "next/link";

const WishlistPrimary = () => {
	const { wishlistProducts, deleteProductFromWishlist } = useWishlistContext();
	const { addProductToCart } = useCartContext();
	const iswishlistProducts = wishlistProducts?.length ? true : false;
	return (
		<section className="full-width tj-page__area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{!iswishlistProducts ? (
							<NoItems
								text="Your Wishlist is currently empty!"
								navText="Return to shop"
								navUrl="/shop"
							/>
						) : (
							<div className="tj-page__container">
								<div className="tj-entry__content">
									<div className="woosw-list">
										<table className="woosw-items table-bordered">
											<tbody>
												{wishlistProducts?.map(
													(
														{
															id,
															title,
															price,
															previousPrice,
															img = "./assets/images/product/product-8.webp",
															quantity,
															status,

															stockSize,
														},
														idx
													) => (
														<tr key={idx} className="woosw-item">
															<td
																onClick={() =>
																	deleteProductFromWishlist(id, title)
																}
																className="woosw-item--remove"
															>
																<span>×</span>
															</td>
															<td className="woosw-item--image">
																<Link href={`/shop/${id}`}>
																	<Image
																		src={img}
																		alt=""
																		width={520}
																		height={601}
																		style={{ height: "auto" }}
																	/>
																</Link>
															</td>
															<td className="woosw-item--info">
																<div className="woosw-item--name">
																	<Link href={`/shop/${id}`}>{title}</Link>
																</div>
																<div className="woosw-item--price">
																	{previousPrice ? (
																		<del aria-hidden="true">
																			<span className="woocommerce-Price-amount amount">
																				<span className="woocommerce-Price-currencySymbol">
																					$
																				</span>
																				{previousPrice?.toFixed(2)}
																			</span>
																		</del>
																	) : (
																		""
																	)}{" "}
																	<ins aria-hidden="true">
																		<span className="woocommerce-Price-amount amount">
																			<span className="woocommerce-Price-currencySymbol">
																				$
																			</span>
																			{price?.toFixed(2)}
																		</span>
																	</ins>
																</div>
															</td>
															<td className="woosw-item--actions">
																<div className="woosw-item--stock">
																	<div className="product-stock">
																		<span
																			className={`stock ${
																				status === "Sold"
																					? "out-of-stock"
																					: "in-stock"
																			} `}
																		>
																			{status === "Sold"
																				? "Out of stock"
																				: `${stockSize} in stock`}
																		</span>
																	</div>
																</div>
																<div className="woosw-item--atc">
																	<p className="product woocommerce add_to_cart_inline ">
																		<button
																			onClick={() =>
																				addProductToCart({
																					id,
																					title,
																					quantity,
																					price,
																					img,
																				})
																			}
																			disabled={
																				status === "Sold" ? true : false
																			}
																			className="cart-button button tj-cart-btn stock-out  product_type_simple product-add-cart-btn"
																		>
																			<span className="btn-icon">
																				<i className="fal fa-shopping-cart"></i>
																				<i className="fal fa-shopping-cart"></i>
																			</span>
																			<span className="btn-text">
																				<span>Add to cart</span>
																			</span>
																		</button>
																	</p>
																</div>
															</td>
														</tr>
													)
												)}
											</tbody>
										</table>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WishlistPrimary;
