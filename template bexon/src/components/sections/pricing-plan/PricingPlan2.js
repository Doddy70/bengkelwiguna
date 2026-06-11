import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const PricingPlan2 = () => {
	return (
		<section className="tj-pricing-section-2 section-gap section-separator slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 order-2 order-lg-1">
						<BootstrapWrapper>
							<div className="accordion tj-faq pricing-accordion" id="pricing">
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-1"
										aria-expanded="true"
									>
										Basic Plan
									</button>
									<div
										id="pricing-1"
										className="collapse show"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="pricing-top">
													<div className="package-desc">
														<p>Essential Business Services</p>
													</div>
													<div className="package-price">
														<span className="package-currency">$</span>
														<span className="price-number">99</span>
														<span className="package-period">/per month</span>
													</div>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>Access to core services
													</li>
													<li>
														<i className="tji-list"></i>Limited customer support
														(email)
													</li>
													<li>
														<i className="tji-list"></i>1 project per month
													</li>
													<li>
														<i className="tji-list"></i>Basic reporting and
														analytics
													</li>
													<li>
														<i className="tji-list"></i>Standard templates and
														tools
													</li>
													<li>
														<i className="tji-list"></i>Basic performance
														tracking
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-2"
										aria-expanded="false"
									>
										Standard Plan
									</button>
									<div
										id="pricing-2"
										className="collapse"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="package-desc">
													<p>Complete Business Solutions</p>
												</div>
												<div className="package-price">
													<span className="package-currency">$</span>
													<span className="price-number">249</span>
													<span className="package-period">/per month</span>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>All features in Basic
														Plan
													</li>
													<li>
														<i className="tji-list"></i>Priority customer
														support
													</li>
													<li>
														<i className="tji-list"></i>Up to 3 projects per
														month
													</li>
													<li>
														<i className="tji-list"></i>Monthly performance
														reviews
													</li>
													<li>
														<i className="tji-list"></i>Collaboration tools for
														team
													</li>
													<li>
														<i className="tji-list"></i>Custom templates
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-3"
										aria-expanded="false"
									>
										Premium Plan
									</button>
									<div
										id="pricing-3"
										className="collapse"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="package-desc">
													<p>Advanced Business Services</p>
												</div>
												<div className="package-price">
													<span className="package-currency">$</span>
													<span className="price-number">499</span>
													<span className="package-period">/per month</span>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>All features in Standard
														Plan
													</li>
													<li>
														<i className="tji-list"></i>Dedicated account
														manager
													</li>
													<li>
														<i className="tji-list"></i>Tailored strategy
														sessions
													</li>
													<li>
														<i className="tji-list"></i>Quarterly performance
														audits
													</li>
													<li>
														<i className="tji-list"></i>Priority support
													</li>
													<li>
														<i className="tji-list"></i>24/7 emergency service
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</BootstrapWrapper>
					</div>
					<div className="col-lg-4 order-1 order-lg-2">
						<div className="content-wrap slidebar-stickiy">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Flexible pricing
								</span>
								<h2 className="sec-title title-anim">Our Pricing Plan.</h2>
							</div>
							<p className="desc">
								Our team is always available to address your concerns, providing
								quick.
							</p>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay=".6s"
							>
								<ButtonPrimary text={"More Pricing"} url={"/pricing-plan"} />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="d-lg-none d-flex mt-5">
							<ButtonPrimary text={"More Pricing"} url={"/pricing-plan"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan2;
