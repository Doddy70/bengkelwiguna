"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Autoplay, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopupImage from "../../modals/PopupImage";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/thumbs";

const ProductDetailsSlider = ({ items = [], currentItem = {} }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	const { title, status } = currentItem;

	return (
		<div className="tj-product-details-thumb-wrapper d-flex flex-wrap flex-md-nowrap justify-content-center justify-content-md-between">
			{/* Thumbnail Swiper - Direction controlled by breakpoints */}
			<div className="tj-product-thumb-items  order-2 order-md-1">
				<Swiper
					onSwiper={setThumbsSwiper}
					slidesPerView={4}
					spaceBetween={10}
					freeMode={true}
					watchSlidesProgress={true}
					watchOverflow={true}
					direction="vertical"
					grabCursor={true}
					breakpoints={{
						0: {
							direction: "horizontal",
							slidesPerView: 4,
							spaceBetween: 10,
						},

						768: {
							direction: "vertical",
							slidesPerView: 4,
							spaceBetween: 15,
						},
					}}
					modules={[Thumbs]}
				>
					{items.map((item, idx) => (
						<SwiperSlide key={`thumb-${idx}`}>
							<div className="tj-pdt-thumb-img">
								<Image
									src={item.img || "/images/product/product-1.webp"}
									alt={`Thumbnail ${idx + 1}`}
									width={100}
									height={120}
									style={{ objectFit: "cover" }}
								/>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>

			{/* Main Product Image Area */}
			<div className="tj-product-img-wrap order-1 order-md-2">
				{/* Product Status Badge */}
				{status && (
					<div className="tj-product-badge product-on-sale">
						<span className={`onsale ${status === "Sold" ? "sold-out" : ""}`}>
							{status}
						</span>
					</div>
				)}

				{/* Product Action Buttons (Zoom, etc.) */}
				<div className="tj-product-action-btn">
					{items.map((item, idx) => (
						<PopupImage key={`popup-${idx}`}>
							<Link
								className="ig-gallery glightbox-img"
								data-gall="product-gallery"
								href={item.img || "/images/product/product-1.webp"}
								prefetch={false}
							>
								<i className="tji-search"></i>
							</Link>
						</PopupImage>
					))}
				</div>

				{/* Main Image Swiper */}
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					loop={true}
					speed={500}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					thumbs={{
						swiper: thumbsSwiper,
						multipleActiveThumbs: false,
					}}
					modules={[Thumbs, Autoplay]}
				>
					{items.map((item, idx) => (
						<SwiperSlide key={`main-${idx}`}>
							<div className="product-img-area">
								<div className="product-img">
									<Image
										src={item.img || "/images/product/product-1.webp"}
										alt={title || `Product Image ${idx + 1}`}
										width={520}
										height={601}
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default ProductDetailsSlider;
