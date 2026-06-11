"use client";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroCard from "../cards/HeroCard";

const HeroCardSlider = () => {
	const items = [
		{
			id: 1,
			title: "Business Strategies Development",
			img: "/images/hero/h6-hero-cart-1.webp",
			videoUrl: "https://youtu.be/gXFATcwrO-U",
		},
		{
			id: 2,
			title: "Customer Experience Solutions",
			img: "/images/hero/h6-hero-cart-2.webp",
			videoUrl: "https://youtu.be/gXFATcwrO-U",
		},
		{
			id: 3,
			title: "Sustainability and ESG Consulting",
			img: "/images/hero/h6-hero-cart-3.webp",
			videoUrl: "https://youtu.be/gXFATcwrO-U",
		},
	];

	return (
		<Swiper
			slidesPerView={1}
			spaceBetween={15}
			loop={true}
			speed={1400}
			centeredSlides={false}
			pagination={{
				el: ".swiper-pagination-area",
				clickable: true,
			}}
			autoplay={{
				delay: 3000,
			}}
			modules={[Pagination, Autoplay]}
			className="h6-hero-card-slider"
		>
			{items?.length
				? items?.map((item, idx) => (
						<SwiperSlide key={idx}>
							<HeroCard item={item} idx={idx} />
						</SwiperSlide>
				  ))
				: ""}
			<div className="swiper-pagination-area"></div>
		</Swiper>
	);
};

export default HeroCardSlider;
