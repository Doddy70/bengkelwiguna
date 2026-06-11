"use client";
import TestimonialsCard6 from "@/components/shared/cards/TestimonialsCard6";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials7 = () => {
	const showbleTestimonials = getTestimonials()?.slice(0, 3);
	const testimonials = [...showbleTestimonials, ...showbleTestimonials];

	return (
		<section className="tj-testimonial-section h7-testimonial section-gap section-gap-x">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> CLIENT FEEDBACK
							</span>
							<h2 className="sec-title text-anim">
								Our Clients Share Their Success Stories.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper  h7-testimonial-wrapper  wow fadeInRightBig"
							data-wow-delay=".3s"
						>
							<Swiper
								spaceBetween={15}
								slidesPerView={1.2}
								loop={true}
								speed={1500}
								centeredSlides={false}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
								autoplay={{
									delay: 3000,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.3,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 1.4,
										spaceBetween: 20,
									},
									992: {
										slidesPerView: 3,
										spaceBetween: 28,
										centeredSlides: true,
									},
									1200: {
										slidesPerView: 3,
										spaceBetween: 28,
										centeredSlides: true,
									},
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="swiper-container testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard6 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
							</Swiper>

							<div className="slider-prev">
								<span className="anim-icon">
									<i className="tji-arrow-left"></i>
									<i className="tji-arrow-left"></i>
								</span>
							</div>
							<div className="slider-next">
								<span className="anim-icon">
									<i className="tji-arrow-right"></i>
									<i className="tji-arrow-right"></i>
								</span>
							</div>
							<div className="bg-shape-3">
								<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Testimonials7;
