"use client";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard11 from "../cards/ServiceCard11";
const ServicesSlider4 = () => {
	const showableSevices = getALlServices()?.slice(0, 6);
	const services = [
		...showableSevices,
		// , ...showableSevices
	];
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
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1200: {
					spaceBetween: 20,
					slidesPerView: 3,
				},
				1400: {
					spaceBetween: 30,
					slidesPerView: 3,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="h10-service-slider"
		>
			{services?.length
				? services?.map((service, idx) => (
						<SwiperSlide key={idx}>
							<ServiceCard11 service={service} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default ServicesSlider4;
