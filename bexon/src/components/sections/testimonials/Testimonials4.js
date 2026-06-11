"use client";
import TestimonialsCard2 from "@/components/shared/cards/TestimonialsCard2";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import getTestimonials from "@/libs/getTestimonials";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials4 = () => {
	const testimonials = getTestimonials()?.slice(0, 3);
	const handleSelect = option => {};
	return (
		<section className="tj-contact-section h4-contact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div
							className="contact-form style-3 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="sec-heading style-4">
								<span className="sub-title">
									<i className="tji-box"></i>Get in Touch
								</span>
								<h2 className="sec-title title-anim">Drop us a Line Here.</h2>
							</div>
							<form id="contact-form-3">
								<div className="row wow fadeInUp" data-wow-delay=".5s">
									<div className="col-sm-6">
										<div className="form-input">
											<label className="cf-label">Full Name *</label>
											<input type="text" name="cfName3" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<label className="cf-label">Email Address *</label>
											<input type="email" name="cfEmail3" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<label className="cf-label">Phone number *</label>
											<input type="tel" name="cfPhone3" />
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<label className="cf-label">Chose a option</label>
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Chose a option" },
															{ value: "1", optionName: "Business Strategy" },
															{ value: "2", optionName: "Customer Experience" },
															{
																value: "3",
																optionName: "Sustainability and ESG",
															},
															{
																value: "4",
																optionName: "Training and Development",
															},
															{
																value: "5",
																optionName: "IT Support & Maintenance",
															},
															{
																value: "6",
																optionName: "Marketing Strategy",
															},
														]}
														getSelectedOption={handleSelect}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<label className="cf-label">Message here... *</label>
											<textarea name="cfMessage3" id="message"></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<button className="tj-primary-btn" type="submit">
											<span className="btn-text">
												<span>Send Message</span>
											</span>
											<span className="btn-icon">
												<i className="tji-arrow-right-long"></i>
											</span>
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="testimonial-wrapper-3 h4-testimonial-wrapper  wow fadeInUp"
							data-wow-delay=".5s"
						>
							<h3 className="tes-title">
								Client Feedback (4.8<span>/out of 200</span>)
							</h3>
							<Swiper
								spaceBetween={28}
								slidesPerView={1}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 3000,
								}}
								navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
								modules={[Autoplay, Navigation]}
								className="testimonial-slider-2 h4-testimonial"
							>
								{testimonials?.length
									? testimonials?.map((testimonial, idx) => (
											<SwiperSlide key={idx}>
												<TestimonialsCard2 testimonial={testimonial} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="testimonial-navigation d-flex">
									<div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
								</div>
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

export default Testimonials4;
