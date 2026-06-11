"use client";
import TestimonialsCard7 from "@/components/shared/cards/TestimonialsCard7";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials8 = () => {
	const showbleTestimonials = getTestimonials()?.slice(0, 4);
	const testimonials = [...showbleTestimonials, ...showbleTestimonials];

	return (
		<section className="h8-testimonial section-gap">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered ">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title title-anim">
								Our Clients Share Their Success Stories.
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid gap-0">
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper h8-testimonial-wrapper wow fadeInUpBig"
							data-wow-delay=".3s"
						>
							<Swiper
								slidesPerView={1}
								spaceBetween={20}
								loop={true}
								speed={1500}
								centeredSlides={true}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								autoplay={{
									delay: 3000,
									disableOnInteraction: false,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.5,
									},
									768: {
										slidesPerView: 2,
									},
									992: {
										slidesPerView: 2.2,
										spaceBetween: 30,
									},
									1200: {
										slidesPerView: 2.8,
										spaceBetween: 30,
									},
									1400: {
										slidesPerView: 4,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="swiper-container h8-testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard7 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area swiper-pagination-clickable"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials8;
