"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import QuantityInput from "@/components/shared/Inputs/QuantityInput";
import ProductDetailsSlider from "@/components/shared/sidebar/widgets/ProductDetailsSlider";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import getPreviousNextItem from "@/libs/getPreviousNextItem";
import getProducts from "@/libs/getProducts";
import makePath from "@/libs/makePath";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";

const ProductDetailsPrimary = ({ setCurrentTitle, currentItemId }) => {
	const [quantity, setQuantity] = useState(1);
	const items = getProducts();
	const currentId = currentItemId;
	const { addProductToCart } = useCartContext();
	const { addProductToWishlist } = useWishlistContext();
	const {
		prevId,
		nextId,
		currentItem: item = {},
		isPrevItem,
		isNextItem,
	} = getPreviousNextItem(items, currentId);
	const {
		id,
		title,
		price,
		img,
		status,
		category,
		previousPrice,
		reviews,
		sizes,
		colors,
		tags,
	} = item;
	useEffect(() => {
		setCurrentTitle(title);
	}, [currentId]);
	const sliderItems = [
		item,
		...items?.filter(({ id: id1 }) => id1 !== id).slice(0, 3),
	];
	return (
		<section className="tj-product-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row section-bottom-gap product">
							<div className="col-xl-6 col-lg-7">
								<ProductDetailsSlider items={sliderItems} currentItem={item} />
							</div>
							<div className="col-xl-6 col-lg-5">
								<div className="tj-product-details-wrapper">
									<h3 className="tj-product-details-title">{title}</h3>
									{/* <!-- price --> */}
									<div className="tj-product-details-price-wrapper">
										<p className="price">
											{previousPrice ? (
												<del>
													<span>
														<span>$</span>
														{previousPrice.toFixed(2)}
													</span>
												</del>
											) : (
												""
											)}
											<ins>
												<span>
													<span>$</span>
													{price.toFixed(2)}
												</span>
											</ins>
										</p>
									</div>

									<div className="product-details__short-description">
										<p>
											Experience true wireless freedom with our latest earbuds,
											designed to deliver crystal-clear sound and deep bass in
											compact, lightweight package. Perfectly crafted for
											everyday use, these earbuds feature.
										</p>
									</div>

									{/* <!-- actions --> */}
									{status !== "Sold" ? (
										<div className="tj-product-details-action-wrapper">
											<div className="tj-product-details-action-wrapper">
												<form className="cart" action="#" method="post">
													<div className="tj-product-details-action-item-wrapper d-flex align-items-center">
														<QuantityInput
															quantity={quantity}
															setQuantity={setQuantity}
														/>
														<div className="tj-product-details-add-to-cart">
															<button
																type="button"
																name="add-to-cart"
																className="single_add_to_cart_button tj-cart-btn "
																onClick={() => {
																	addProductToCart({
																		id,
																		title,
																		price,
																		quantity,
																		img,
																	});
																	setQuantity(1);
																}}
															>
																<span className="btn-icon">
																	<i className="fal fa-shopping-cart"></i>
																	<i className="fal fa-shopping-cart"></i>
																</span>
																<span className="btn-text">
																	<span>Add to cart</span>
																</span>
															</button>
														</div>
														<div
															className="tj-product-details-wishlist"
															onClick={() =>
																addProductToWishlist({ ...item, quantity: 1 })
															}
														>
															<button type="button" className="woosw-btn ">
																Add to wishlist
															</button>
														</div>
													</div>
												</form>
											</div>

											{/* <!-- buy now button --> */}
											<Link
												href={`/checkout?id=${id}&quantity=${quantity}`}
												className="tj-product-details-buy-now-btn w-100"
											>
												<span className="btn-text">
													<span>Shop now</span>
												</span>
											</Link>
										</div>
									) : (
										false
									)}

									<div className="tj-product-details-query">
										<h6 className="tj-product-details-query-title">
											Product Info
										</h6>
										<div className="tj-product-details-query-item d-flex align-items-center">
											<span>SKU:</span>
											<p>SV-18</p>
										</div>
										<div className="tj-product-details-query-item d-flex align-items-center">
											<span>Category:</span>{" "}
											<Link href={`/shop?category=${makePath(category)}`}>
												{category}
											</Link>
										</div>
										{tags?.length ? (
											<div className="tj-product-details-query-item d-flex align-items-center">
												<span>Tags:</span>{" "}
												{tags.map((tag, idx) => (
													<React.Fragment key={idx + 20000}>
														<Link
															href={`/shop?tag=${makePath(tag)}`}
															style={{
																marginLeft: idx !== 0 ? "4px" : 0,
															}}
														>
															{tag}
														</Link>
														{tags?.length > 1 && idx !== tags?.length - 1
															? ", "
															: ""}
													</React.Fragment>
												))}
											</div>
										) : (
											""
										)}
									</div>
									{status !== "Sold" ? (
										<div className="tj-product-details-share">
											<h6>Share:</h6>
											<Link href="https://www.facebook.com/" title="Facebook">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
											<Link href="https://x.com/" title="Twitter">
												<i className="fab fa-x-twitter"></i>
											</Link>
											<Link href="https://www.linkedin.com/" title="Linkedin">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
											<Link href="https://www.pinterest.com/" title="Pinterest">
												<i className="fa-brands fa-pinterest-p"></i>
											</Link>
										</div>
									) : (
										false
									)}
								</div>
							</div>
						</div>
						<BootstrapWrapper>
							<div className="tj-product-details-bottom section-bottom-gap">
								<div className="row">
									<div className="col-xl-12">
										<div className="tj-product-details-tab-nav tj-tab">
											<nav>
												<div
													className="nav nav-tabs p-relative tj-product-tab"
													id="navPresentationTab"
													role="tablist"
												>
													<button
														className="nav-link description_tab active"
														id="nav-desc-tab-description"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-description"
														type="button"
														role="tab"
														aria-controls="nav-desc-description"
														aria-selected="true"
													>
														Description
													</button>
													<button
														className="nav-link additional_information_tab"
														id="nav-desc-tab-additional_information"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-additional_information"
														type="button"
														role="tab"
														aria-controls="nav-desc-additional_information"
														aria-selected="false"
														tabIndex="-1"
													>
														Additional information{" "}
													</button>
													<button
														className="nav-link reviews_tab"
														id="nav-desc-tab-reviews"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-reviews"
														type="button"
														role="tab"
														aria-controls="nav-desc-reviews"
														aria-selected="false"
														tabIndex="-1"
													>
														Reviews (01)
													</button>
												</div>
											</nav>
											<div
												className="tab-content"
												id="navPresentationTabContent"
											>
												<div
													className="tab-pane fade active show"
													id="nav-desc-description"
													role="tabpanel"
													aria-labelledby="nav-desc-tab-description"
												>
													<div className="tj-product-details-description mt-30">
														<p>
															Experience true wireless freedom with our latest
															earbuds, designed to deliver crystal-clear sound
															and deep bass in a compact, lightweight package.
															Perfectly crafted for everyday use, these earbuds
															feature advanced Bluetooth connectivity for
															seamless pairing and stable audio streaming.
															Whether you’re hitting the gym, commuting, or
															relaxing at home, enjoy up to 8 hours of
															uninterrupted playtime with a portable charging
															case that keeps you powered on the go.
														</p>
														<p>
															With ergonomic ear tips and sweat-resistant
															materials, they provide a secure and comfortable
															fit for any activity. Plus, intuitive touch
															controls let you manage music, calls, and voice
															assistants effortlessly. Elevate your audio
															experience with earbuds that combine style,
															performance, and convenience
														</p>
													</div>
												</div>
												<div
													className="tab-pane fade"
													id="nav-desc-additional_information"
													role="tabpanel"
													aria-labelledby="nav-desc-tab-additional_information"
												>
													<div className="tj-product-details-description mt-30">
														<table>
															<tbody>
																<tr>
																	<th>Weight</th>
																	<td>55 kg</td>
																</tr>
																<tr>
																	<th>Dimensions</th>
																	<td>55 × 55 × 55 cm</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
												<div
													className="tab-pane fade"
													id="nav-desc-reviews"
													role="tabpanel"
													aria-labelledby="nav-desc-tab-reviews"
												>
													<div className="tj-product-details-description mt-30">
														<div className="reviews-area">
															<div className="comments-area">
																<h3 className="d-none mb-30">
																	1 review for “
																	<span>Personal holding earbud</span>”{" "}
																</h3>

																<ol className="commentlist">
																	<li className="review">
																		<div className="comment_container">
																			<img
																				className="avatar"
																				src="/images/blog/avatar-1.webp"
																				alt=""
																			/>
																			<div className="comment-text">
																				<div className="star-rating">
																					<span
																						style={{ width: "100%" }}
																					></span>
																				</div>
																				<p className="meta">
																					<strong className="review__author">
																						Berlee Hopper{" "}
																					</strong>
																					<span className="review__dash">
																						–
																					</span>
																					<span className="review__published-date">
																						June 30, 2025
																					</span>
																				</p>

																				<div className="description">
																					<p>
																						“I’ve been using these earbuds daily
																						for a few weeks, and they’ve truly
																						exceeded my expectations. The sound
																						quality is crisp, with deep bass and
																						clear highs — perfect for music,
																						calls, or podcasts. The Bluetooth
																						connection is stable, and pairing
																						was super easy.”
																					</p>
																				</div>
																			</div>
																		</div>
																	</li>
																	{/*<!-- #comment-## --> */}
																</ol>
															</div>

															<div id="review_form_wrapper">
																<div id="review_form">
																	<div id="respond" className="comment-respond">
																		<h3>Leave a comment</h3>
																		<form
																			className="comment-form"
																			id="commentform"
																		>
																			<p className="comment-notes">
																				Your email address will not be
																				published. Required fields are marked
																				<span className="required">*</span>
																			</p>
																			<p className="comment-form-author comment-input">
																				<label htmlFor="author">
																					Name{" "}
																					<span className="required">*</span>
																				</label>
																				<input
																					id="author"
																					name="author"
																					type="text"
																					defaultValue=""
																					size="30"
																					required=""
																				/>
																			</p>
																			<p className="comment-form-email comment-input">
																				<label htmlFor="semail">
																					Email{" "}
																					<span className="required">*</span>
																				</label>
																				<input
																					id="semail"
																					name="semail"
																					type="email"
																					defaultValue=""
																					size="30"
																					required=""
																				/>
																			</p>
																			<div className="comment-form-rating comment-rating d-flex">
																				<span>
																					Your rating{" "}
																					<span className="required">*</span>
																				</span>
																				<div className="star-ratings">
																					<div
																						className="fill-ratings"
																						style={{ width: "100%" }}
																					>
																						<span>★★★★★</span>
																					</div>
																					<div className="empty-ratings">
																						<span>★★★★★</span>
																					</div>
																				</div>
																			</div>

																			<p className="comment-input">
																				<label htmlFor="comment">
																					Type your review&nbsp;
																					<span className="required">*</span>
																				</label>
																				<textarea
																					id="comment"
																					name="comment"
																					cols="45"
																					rows="8"
																					required=""
																				></textarea>
																			</p>
																			<p className="comment-check">
																				<input
																					id="comment-check"
																					name="comment-check"
																					type="checkbox"
																					defaultValue="yes"
																				/>{" "}
																				<label htmlFor="comment-check">
																					Save my name, email, and website in
																					this browser for the next time I
																					comment.
																				</label>
																			</p>
																			<p className="form-submit">
																				<ButtonPrimary
																					type={"submit"}
																					text={"Submit reviews"}
																					className={"mt-0"}
																				/>
																			</p>
																		</form>
																		{/* </div><!-- #respond --> */}
																	</div>
																</div>

																<div className="clear"></div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</BootstrapWrapper>
						<RelatedProducts />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetailsPrimary;
