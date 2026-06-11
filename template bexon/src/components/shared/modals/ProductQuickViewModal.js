"use client";
import { useCartContext } from "@/context_api/CartContext";
import { useWishlistContext } from "@/context_api/WshlistContext";
import getProducts from "@/libs/getProducts";
import makePath from "@/libs/makePath";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import QuantityInput from "../Inputs/QuantityInput";

const ProductQuickViewModal = ({ item = {}, totalItemsToShow }) => {
	const { addProductToCart } = useCartContext();

	const { addProductToWishlist } = useWishlistContext();
	const [quantity, setQuantity] = useState(1);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const paginationRef = useRef(null);
	const items = getProducts();
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
		stockSize,
		tags,
	} = item;
	const sliderItems = [
		item,
		...items?.filter(({ id: id1 }) => id1 !== id).slice(0, 2),
	];
	const isStockOut = status === "Sold" ? true : false;
	return (
		<div className="tj-modal hidden " data-lenis-prevent>
			<div className="tj-modal-close "></div>
			<button className="tj-modal-close tj-modal-close-btn ">
				<i className="fa-thin fa-times"></i>
			</button>
			<div className="tj-modal-content">
				<div className="single-product woosq-product container">
					<div className="product row ">
						<div className="col-12 col-md-6 thumbnails">
							<Swiper
								slidesPerView={1}
								loop={true}
								speed={1200}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: paginationRef.current,
									clickable: true,
								}}
								navigation={{
									prevEl: prevRef.current,
									nextEl: nextRef.current,
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="images tj-quick-details-slider"
							>
								{sliderItems?.length
									? sliderItems?.map(({ img }, idx) => (
											<SwiperSlide key={idx}>
												<div className="thumbnail">
													<Image
														src={img ? img : "/images/product/product-1.webp"}
														className="attachment-woosq size-woosq"
														alt=""
														width={520}
														height={601}
													/>
												</div>
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-button-next" ref={nextRef}></div>
								<div className="swiper-button-prev" ref={prevRef}></div>
								<div className="swiper-pagination" ref={paginationRef}></div>
							</Swiper>
						</div>
						<div className="col-12 col-md-6 summary entry-summary">
							<div className="summary-content ps-container ps-theme-wpc">
								<div className="product-stock">
									<span
										className={`stock ${
											isStockOut ? "out-of-stock" : "in-stock"
										}`}
									>
										{isStockOut ? "Out of" : `${stockSize} in`} stock
									</span>
								</div>
								<h3 className="tj-product-details-title">{title}</h3>
								<p className="price">
									{previousPrice ? (
										<del>
											<span className="price-amount amount">
												<span>$</span>
												{previousPrice?.toFixed(2)}
											</span>
										</del>
									) : (
										""
									)}

									<span className="price-amount amount">
										<span>$</span>
										{price?.toFixed(2)}
									</span>
								</p>
								<div className="product-details__short-description">
									<p>
										Experience true wireless freedom with our latest earbuds,
										designed to deliver crystal-clear sound and deep bass in
										compact, lightweight package. Perfectly crafted for everyday
										use, these earbuds feature.
									</p>
								</div>
								{isStockOut ? (
									""
								) : (
									<div className="tj-product-details-action-wrapper">
										<form className="cart">
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
								)}

								<div className="tj-product-details-query-item d-flex align-items-center">
									<span>SKU:</span>
									<p>SV-18</p>
								</div>
								<div className="tj-product-details-query-item d-flex align-items-center">
									<span>Category: </span>{" "}
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

								<div
									className="ps-scrollbar-x-rail"
									style={{ left: "0px", bottom: "0px" }}
								>
									<div
										className="ps-scrollbar-x"
										tabIndex="0"
										style={{ left: "0px", width: "0px" }}
									></div>
								</div>
								<div
									className="ps-scrollbar-y-rail"
									style={{ top: "0px", right: "0px" }}
								>
									<div
										className="ps-scrollbar-y"
										tabIndex="0"
										style={{ top: "0px", height: "0px" }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* close button */}
			</div>
		</div>
	);
};

export default ProductQuickViewModal;
