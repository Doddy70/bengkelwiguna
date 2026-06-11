"use client";

import getBrands from "@/libs/getBrands";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const BrandSlider3 = ({ className }) => {
	const brands = getBrands();
	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={0}
			freeMode={true}
			centeredSlides={true}
			loop={true}
			speed={5000}
			allowTouchMove={false}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			className={`client-slider client-slider-3`}
			modules={[Autoplay]}
		>
			{brands?.length
				? brands?.map(({ img3 }, idx) => (
						<SwiperSlide key={idx} className="client-item h5-client-item">
							<div className="client-logo">
								<img
									src={img3 ? img3 : "/images/brands/h5-brand-1.webp"}
									alt="Brand"
								/>
							</div>
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default BrandSlider3;
