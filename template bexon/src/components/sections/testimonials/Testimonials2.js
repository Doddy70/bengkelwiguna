"use client";
import TestimonialsCard2 from "@/components/shared/cards/TestimonialsCard2";
import Ratings1 from "@/components/shared/ratings/Ratings1";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials2 = ({ type }) => {
	const testimonials = getTestimonials()?.slice(0, 3);

	return (
		<section
			className={`tj-testimonial-section-2 ${
				type === 2 ? "section-bottom-gap" : "section-gap"
			}`}
		>
			<div className="container">
				<div className="row row-gap-3">
					<div className={`col-lg-6 ${type === 2 ? "order-lg-2" : ""}`}>
						<div
							className="testimonial-img-area wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="testimonial-img">
								<img
									data-speed=".8"
									src="/images/testimonial/testimonial-img.webp"
									alt=""
								/>
								<div className="sec-heading style-2">
									<h2
										className={`sec-title ${
											type === 2 ? "title-anim" : "text-anim"
										}`}
									>
										Hear from Our <span>Customer.</span>
									</h2>
								</div>
							</div>
							<div className="box-area">
								<div className="rating-box wow fadeInUp" data-wow-delay=".3s">
									<h2 className="title">4.9</h2>
									<div className="rating-area">
										<Ratings1 />
									</div>
									<span className="rating-text">(80+ Clients Reviews)</span>
								</div>
							</div>
						</div>
					</div>
					<div className={`col-lg-6 ${type === 2 ? "order-lg-1" : ""}`}>
						<div
							className="testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
						>
							<Swiper
								spaceBetween={28}
								slidesPerView={1}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 3000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
								modules={[Pagination, Autoplay, Navigation]}
								className="testimonial-slider-2"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard2 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials2;
