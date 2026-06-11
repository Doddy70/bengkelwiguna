"use client";
import TestimonialsCard1 from "@/components/shared/cards/TestimonialsCard1";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials1 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);

	return (
		<section className="tj-testimonial-section section-gap section-gap-x">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Clients Feedback
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading">
									<h2 className="sec-title title-anim">
										Success <span>Stories</span> Fuel our Innovation.
									</h2>
								</div>
								<div
									className="slider-navigation d-inline-flex wow fadeInUp"
									data-wow-delay=".4s"
								>
									<button className="slider-prev">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</button>
									<button className="slider-next">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
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
												<TestimonialsCard1 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
							</Swiper>
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

export default Testimonials1;
