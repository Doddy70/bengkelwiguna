import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const About5 = () => {
	return (
		<section className="tj-about-section h6-about section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-xl-6 col-lg-6">
						<div
							className="about-content-area  h6-about-content  style-1 wow fadeInLeft"
							data-wow-delay=".2s"
						>
							<div className="sec-heading style-2 style-6">
								<span className="sub-title  wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OUR COMPANY
								</span>
								<h2 className="sec-title title-anim">
									Innovating Today for Build Smarter, Stronger, and More
									Successful.
								</h2>
								<p className="desc  wow fadeInUp" data-wow-delay=".8s">
									Our approach to customer experience is comprehensive and
									data-driven. We begin by assessing your current customer
									touchpoints, our identifying areas for improvement, and using
									insights to develop.
								</p>
							</div>
							<div className="h6-about-funfact-wrapper">
								<div className="h6-about-funfact">
									<div className="countup-item">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="count-text">
											Reach Worldwide empower dreams everywhere.
										</span>
									</div>
									<div className="countup-item">
										<FunfactSingle currentValue={8.5} symbol={"X"} />

										<span className="count-text">
											Faster Growth starts smart solutions today.
										</span>
									</div>
								</div>
								<div className="h6-about-funfact-shape">
									<img
										src="/images/shape/about-counter-shape-blur.svg"
										alt=""
									/>
								</div>
							</div>
							<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"Know More Us"} url={"/contact"} />
							</div>
						</div>
					</div>
					<div className="col-xl-6 col-lg-6">
						<div
							className="about-img-area h6-about-img wow fadeInLeft"
							data-wow-delay=".2s"
						>
							<div
								className="about-img overflow-hidden  wow fadeInRight"
								data-wow-delay=".8s"
							>
								<img
									data-speed=".8"
									src="/images/about/h6-about-banner.webp"
									alt=""
								/>
							</div>
							<div className="box-area h6-about-box  ">
								<div className="customers-box wow fadeInUp" data-wow-delay="1s">
									<div className="customers">
										<ul>
											<li className="wow fadeInLeft" data-wow-delay=".5s">
												<img src="/images/testimonial/client-1.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".6s">
												<img src="/images/testimonial/client-2.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".7s">
												<img src="/images/testimonial/client-3.webp" alt="" />
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".8s">
												<span>
													<i className="tji-plus"></i>
												</span>
											</li>
										</ul>
									</div>
									<h5
										className="customers-text wow fadeInUp"
										data-wow-delay=".5s"
									>
										We have 100+ happy customer.
									</h5>
								</div>
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
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default About5;
