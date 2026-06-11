import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
const About4 = () => {
	return (
		<section className="tj-about-section-2 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className="about-content-area style-3 wow fadeInLeft"
							data-wow-delay=".3s"
						>
							<div className="sec-heading style-4">
								<div className="subtitle-text">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Get to Know Us
									</span>
								</div>
								<h2 className="sec-title title-highlight">
									Committed Delivering{" "}
									<img src="/images/marquee/marquee-1.webp" alt="" /> Measurable
									Results and Building from the Lasting Relationships{" "}
									<img src="/images/marquee/marquee-2.webp" alt="" /> through
									trust and innovation and shared for success industries
									Experts.
								</h2>
							</div>
							<div className="about-bottom-area">
								<div className="customers-box style-3">
									<div className="customers">
										<ul>
											<li className="wow fadeInLeft" data-wow-delay=".2s">
												<img src="/images/testimonial/client-1.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".3s">
												<img src="/images/testimonial/client-2.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".4s">
												<img src="/images/testimonial/client-3.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".5s">
												<span>
													<i className="tji-plus"></i>
												</span>
											</li>
										</ul>
									</div>
									<h6
										className="customers-text wow fadeInLeft"
										data-wow-delay=".6s"
									>
										We have <span>100+</span> happy customer.
									</h6>
								</div>
								<div
									className="about-btn-area-2 wow fadeInUp"
									data-wow-delay="1s"
								>
									<ButtonPrimary text={"Learn More"} url={"/about"} />
									<ButtonPrimary
										text={"Meet Teams"}
										url={"/team"}
										className={"transparent-btn"}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid client-container-2 gap-top">
				<div className="row">
					<div className="col-12">
						<BrandSlider1 className="client-slider-3" />
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

export default About4;
