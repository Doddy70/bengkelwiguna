"use client";
import TestimonialsCard5 from "@/components/shared/cards/TestimonialsCard5";
import getTestimonials from "@/libs/getTestimonials";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TesstimonialsVerticalSlider = () => {
	const testimonialsShowable = getTestimonials()?.slice(0, 3);
	const testimonials = [...testimonialsShowable, ...testimonialsShowable];
	const [currentDirection, setCurrentDirection] = useState("vertical");

	useEffect(() => {
		const getDirection = () => {
			setCurrentDirection(window.innerWidth < 992 ? "horizontal" : "vertical");
		};

		getDirection();
		window.addEventListener("resize", getDirection);
		return () => window.removeEventListener("resize", getDirection);
	}, []);
	return (
		<Swiper
			key={currentDirection}
			direction={currentDirection}
			slidesPerView={1}
			spaceBetween={20}
			loop={true}
			speed={1000}
			autoplay={{
				delay: 5000,
				disableOnInteraction: false,
			}}
			breakpoints={{
				576: {
					slidesPerView: 1.2,
				},
				992: {
					slidesPerView: "auto",
					spaceBetween: 30,
				},
			}}
			modules={[Autoplay]}
			className="swiper-container h6-testimonial-slider"
		>
			{testimonials?.length
				? testimonials?.map((testimonial, idx) => (
						<SwiperSlide key={idx}>
							<TestimonialsCard5 testimonial={testimonial} />
						</SwiperSlide>
				  ))
				: ""}
		</Swiper>
	);
};

export default TesstimonialsVerticalSlider;
