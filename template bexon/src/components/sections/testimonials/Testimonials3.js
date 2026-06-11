"use client";
import getTestimonials from "@/libs/getTestimonials";
import { useRef, useState } from "react";
import {
	Autoplay,
	Controller,
	Navigation,
	Pagination,
	Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials3 = () => {
	const testimonials = getTestimonials()?.slice(0, 6);
	const [controlledMainSwiper, setControlledMainSwiper] = useState(null);
	const [controlledThumbSwiper, setControlledThumbSwiper] = useState(null);
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	return (
		<section className="tj-testimonial-section-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<h5 className="sec-title">
								Our Clients Love <span>Feedback</span>
							</h5>
							<Swiper
								onSwiper={setControlledMainSwiper} // capture thumbs swiper
								slidesPerView={3}
								spaceBetween={12}
								initialSlide={2}
								loop={true}
								freeMode
								watchSlidesProgress={true}
								slideToClickedSlide={true}
								speed={1500}
								loopAdditionalSlides={2}
								centeredSlides={true}
								controller={{ control: controlledThumbSwiper }}
								modules={[Thumbs, Controller]}
								className="client-thumb"
							>
								{testimonials.map(({ authorName, authorDesig, img }, idx) => (
									<SwiperSlide key={idx} className="thumb-item">
										<div className="thumb-img">
											<img
												src={img || "/images/testimonial/client-1.webp"}
												alt={authorName}
											/>
										</div>
										<div className="author-header">
											<h5 className="title">{authorName}</h5>
											<span className="designation">{authorDesig}</span>
										</div>
									</SwiperSlide>
								))}
							</Swiper>

							<div className="testimonial-navigation d-none d-md-inline-flex">
								<div className="slider-prev" role="button" ref={prevRef}>
									<span className="anim-icon">
										<i className="tji-arrow-left"></i>
										<i className="tji-arrow-left"></i>
									</span>
								</div>
								<div className="slider-next" role="button" ref={nextRef}>
									<span className="anim-icon">
										<i className="tji-arrow-right"></i>
										<i className="tji-arrow-right"></i>
									</span>
								</div>
							</div>
							<Swiper
								onSwiper={setControlledThumbSwiper}
								slidesPerView={"auto"}
								spaceBetween={28}
								initialSlide={2}
								loop={true}
								speed={1500}
								loopAdditionalSlides={2}
								autoplay={{ delay: 5000 }}
								pagination={{ el: ".swiper-pagination-area", clickable: true }}
								navigation={{
									prevEl: prevRef.current,
									nextEl: nextRef.current,
								}}
								controller={{ control: controlledMainSwiper }}
								modules={[Autoplay, Navigation, Pagination, Thumbs, Controller]}
								className="testimonial-slider-3"
							>
								{testimonials.map(({ desc2 }, idx) => (
									<SwiperSlide key={idx}>
										<div className="testimonial-item">
											<div className="desc">
												<p>{desc2}</p>
											</div>
										</div>
									</SwiperSlide>
								))}
								<div className="swiper-pagination-area"></div>
							</Swiper>

							<span className="quote-icon">
								<i className="tji-quote"></i>
							</span>
							<div className="bg-shape-1">
								<img src="/images/shape/pattern-2.svg" alt="" />
							</div>
							<div className="bg-shape-2">
								<img src="/images/shape/pattern-3.svg" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials3;
