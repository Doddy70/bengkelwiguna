import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const About9 = () => {
	return (
		<section className="h10-about section-gap">
			<div className="container">
				<div className="row flex-column-reverse flex-md-row ">
					<div className="col-12 col-lg-5 d-block d-md-none d-lg-block">
						<div
							className="about-img-area h10-about-banner wow bounceInLeft"
							data-wow-delay=".3s"
						>
							<div className="about-img overflow-hidden">
								<img
									data-speed=".8"
									src="/images/about/h10-about-banner.webp"
									alt=""
								/>
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7">
						<div className="h10-about-content-wrapper">
							<div className="sec-heading style-3 ">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i> ABOUT OUR COMPANY
								</span>
								<h2
									className="sec-title title-highlight wow fadeInUp"
									data-wow-delay=".3s"
								>
									Powering Innovation Through Partnerships with our Brands and
									Many Companies.
								</h2>
							</div>
							<div className="row">
								<div className="col-12 col-md-6 d-none d-md-block d-lg-none">
									<div
										className="about-img-area h10-about-banner wow bounceInLeft"
										data-wow-delay=".3s"
									>
										<div className="about-img">
											<img src="/images/about/h10-about-banner.webp" alt="" />
										</div>
									</div>
								</div>
								<div className="col-12 col-md-6 col-lg-12">
									<div className="h10-about-content">
										<div
											className="customers-box style-3 h10-about-clients wow fadeInUp"
											data-wow-delay=".4s"
										>
											<div className="customers">
												<ul>
													<li className="wow fadeInLeft" data-wow-delay=".2s">
														<img
															src="/images/testimonial/client-1.webp"
															alt=""
														/>
													</li>
													<li className="wow fadeInLeft" data-wow-delay=".3s">
														<img
															src="/images/testimonial/client-2.webp"
															alt=""
														/>
													</li>
													<li className="wow fadeInLeft" data-wow-delay=".4s">
														<img
															src="/images/testimonial/client-3.webp"
															alt=""
														/>
													</li>
													<li className="wow fadeInLeft" data-wow-delay=".5s">
														<span>
															<i className="tji-plus"></i>
														</span>
													</li>
												</ul>
											</div>
										</div>
										<p className="desc wow fadeInUp" data-wow-delay=".4s">
											Recognized by industryaward leaders, award winning team
											has be a proven record.
										</p>
										<div className="h9-about-funfact h10-about-funfact">
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
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About9;
