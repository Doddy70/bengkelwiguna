import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";

const PricingPlan3 = () => {
	return (
		<section className="h5-pricing section-gap">
			<BootstrapWrapper>
				<div className="container gap-30-30">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading-wrap style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>FLEXIBLE PRICING
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading style-3">
										<h2 className="sec-title text-anim">Our Pricing Plan.</h2>
									</div>
									<div className="wow fadeInUp" data-wow-delay=".5s">
										<p className="desc">
											Our team is always available to address your concerns,
											providing quick.
										</p>
									</div>
									<div
										className="h5-pricing-tab-controllers wow fadeInUp"
										data-wow-delay=".6s"
										role="tablist"
									>
										<button
											type="button"
											className="h5-pricing-tab-controller active"
											data-bs-target="#monthlyPackageContent"
											data-bs-toggle="tab"
										>
											Monthly
										</button>
										<button
											type="button"
											className="h5-pricing-tab-controller"
											data-bs-target="#yearlyPackageContent"
											data-bs-toggle="tab"
										>
											Yearly
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row  ">
						<div className="col-12">
							<div className="tab-content  package__tab__content ">
								<div
									className="tab-pane active show"
									id="monthlyPackageContent"
								>
									<div className="h5-pricing-box-wrapper">
										<div className="row ">
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box h5-pricing-box-basic wow fadeInUp"
													data-wow-delay=".3s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Basic Plan</h4>
														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">99</span>
															<span className="package-period">/per month</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>Access to core
																services
															</li>
															<li>
																<i className="tji-list"></i>Limited customer
																support (email)
															</li>
															<li>
																<i className="tji-list"></i>1 project per month
															</li>
															<li>
																<i className="tji-list"></i>Basic reporting and
																analytics
															</li>
															<li>
																<i className="tji-list"></i>Standard templates
																and tools
															</li>
															<li>
																<i className="tji-list"></i>Basic performance
																tracking
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box active wow fadeInUp"
													data-wow-delay=".4s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Standard Plan</h4>
														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">249</span>
															<span className="package-period">/per month</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>All features in
																Basic Plan
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
																<i className="tji-list"></i>Collaboration tools
																for team
															</li>
															<li>
																<i className="tji-list"></i>Custom templates
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box h5-pricing-box-premium wow fadeInUp"
													data-wow-delay=".5s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Premium Plan</h4>
														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">499</span>
															<span className="package-period">/per month</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>All features in
																Standard Plan
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
																<i className="tji-list"></i>Quarterly
																performance audits
															</li>
															<li>
																<i className="tji-list"></i>Priority support
															</li>
															<li>
																<i className="tji-list"></i>24/7 emergency
																service
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
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
											<img src="/images/shape/shape-blur-2.svg" alt="" />
										</div>
									</div>
								</div>
								<div className="tab-pane" id="yearlyPackageContent">
									<div className="h5-pricing-box-wrapper">
										<div className="row">
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box h5-pricing-box-basic wow fadeInUp"
													data-wow-delay=".3s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Basic Plan</h4>

														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">299</span>
															<span className="package-period">/per year</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>Access to core
																services
															</li>
															<li>
																<i className="tji-list"></i>Limited customer
																support (email)
															</li>
															<li>
																<i className="tji-list"></i>1 project per month
															</li>
															<li>
																<i className="tji-list"></i>Basic reporting and
																analytics
															</li>
															<li>
																<i className="tji-list"></i>Standard templates
																and tools
															</li>
															<li>
																<i className="tji-list"></i>Basic performance
																tracking
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box active wow fadeInUp"
													data-wow-delay=".4s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Standard Plan</h4>
														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">549</span>
															<span className="package-period">/per year</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>All features in
																Basic Plan
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
																<i className="tji-list"></i>Collaboration tools
																for team
															</li>
															<li>
																<i className="tji-list"></i>Custom templates
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</div>
												</div>
											</div>
											<div className="col-xl-4 col-md-6">
												<div
													className="pricing-box h5-pricing-box h5-pricing-box-premium wow fadeInUp"
													data-wow-delay=".5s"
												>
													<div className="pricing-header">
														<h4 className="package-name">Premium Plan</h4>
														<div className="package-price">
															<span className="package-currency">$</span>
															<span className="price-number">899</span>
															<span className="package-period">/per year</span>
														</div>
														<div className="package-desc">
															<p>
																Through a combination of the our data driven
																insights and innovative approaches.
															</p>
														</div>
													</div>
													<div className="list-items">
														<h6 className="h5-pricing-list-title">
															Plan Include:
														</h6>
														<ul>
															<li>
																<i className="tji-list"></i>All features in
																Standard Plan
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
																<i className="tji-list"></i>Quarterly
																performance audits
															</li>
															<li>
																<i className="tji-list"></i>Priority support
															</li>
															<li>
																<i className="tji-list"></i>24/7 emergency
																service
															</li>
														</ul>
													</div>
													<div className="pricing-btn">
														<Link className="text-btn" href="/contact">
															<span className="btn-text">
																<span>Chose Plan</span>
															</span>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
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
											<img src="/images/shape/shape-blur-2.svg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</BootstrapWrapper>
		</section>
	);
};

export default PricingPlan3;
