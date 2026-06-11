"use client";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard6 from "../cards/ServiceCard6";
const ServicesSlider2 = () => {
	const showableSevices = getALlServices()?.slice(0, 4);
	const services = [...showableSevices, ...showableSevices];
	return (
		<Swiper
			slidesPerView={1.3}
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
				576: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
					spaceBetween: 20,
				},
				1400: {
					slidesPerView: 4,
					spaceBetween: 28,
				},
			}}
			modules={[Pagination, Autoplay]}
			className="service-slider-2"
		>
			{services?.length
				? services?.map((service, idx) => (
						<SwiperSlide key={idx}>
							<ServiceCard6 service={service} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default ServicesSlider2;
