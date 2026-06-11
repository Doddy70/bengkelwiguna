"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SpesialisCard from "../cards/SpesialisCard";

const SpesialisSlider = ({ data = [] }) => {
	// If less than 4 items, we might duplicate them for the slider to loop nicely
	const itemsToRender = data.length > 0 && data.length < 4 ? [...data, ...data, ...data] : data;

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={15}
			loop={true}
			speed={1500}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			breakpoints={{
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="h6-service-slider"
		>
			{itemsToRender?.length
				? itemsToRender?.map((service, idx) => (
						<SwiperSlide key={`${service.slug}-${idx}`}>
							<SpesialisCard service={service} idx={idx % data.length} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default SpesialisSlider;
