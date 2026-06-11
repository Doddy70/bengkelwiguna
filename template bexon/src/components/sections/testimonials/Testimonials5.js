"use client";
import TestimonialsCard4 from "@/components/shared/cards/TestimonialsCard4";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials5 = () => {
	const testimonialsShowable = getTestimonials()?.slice(0, 4);
	const testimonials = [...testimonialsShowable, ...testimonialsShowable];
	return (
		<section className="h5-testimonial section-gap section-gap-x">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>CLIENT FEEDBACKS
							</span>
							<h2 className="sec-title text-anim">
								Success Stories Fuel our Innovation.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper h5-testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
						>
							<Swiper
								slidesPerView={1.2}
								spaceBetween={20}
								loop={true}
								speed={1500}
								centeredSlides={true}
								loopAdditionalSlides={4}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								autoplay={{
									delay: 3000,
									disableOnInteraction: true,
								}}
								breakpoints={{
									992: {
										centeredSlides: false,
										slidesPerView: 2,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="swiper-container h5-testimonial-slider"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard4 testimonial={testimonial} />
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

export default Testimonials5;
