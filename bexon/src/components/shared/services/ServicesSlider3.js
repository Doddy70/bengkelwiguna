"use client";
import getALlServices from "@/libs/getALlServices";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard7 from "../cards/ServiceCard7";
const ServicesSlider3 = () => {
	const showableSevices = getALlServices()?.slice(0, 3);
	const services = [...showableSevices, ...showableSevices];
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
			{services?.length
				? services?.map((service, idx) => (
						<SwiperSlide key={idx}>
							<ServiceCard7 service={service} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default ServicesSlider3;
