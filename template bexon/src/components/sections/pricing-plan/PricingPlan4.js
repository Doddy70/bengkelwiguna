import Link from "next/link";

const PricingPlan4 = () => {
	return (
		<section className="h10-pricing section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our PRICING PLAN
							</span>
							<h2 className="sec-title text-anim">Our Pricing Plan.</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-xl-4 col-md-6">
						<div
							className="pricing-box h10-pricing-box wow fadeInUp"
							data-wow-delay=".5s"
						>
							<div className="pricing-header">
								<h4 className="package-name">Basic Plan</h4>
								<div className="package-desc">
									<p>Essential Business Services</p>
								</div>
								<div className="package-price">
									<span className="package-currency">$</span>
									<span className="price-number">99</span>
									<span className="package-period">/per month</span>
								</div>
							</div>
							<div className="pricing-body">
								<div className="list-items h10-pricing-list">
									<div className="title-wrapper">
										<h5 className="title">Features</h5>
										<p className="desc">Includes:</p>
									</div>
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
											<i className="tji-list"></i>Basic reporting and analytics
										</li>
										<li>
											<i className="tji-list"></i>Standard templates and tools
										</li>
										<li>
											<i className="tji-list"></i>Basic performance tracking
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
					<div className="col-xl-4 col-md-6">
						<div
							className="pricing-box h10-pricing-box active wow fadeInUp"
							data-wow-delay=".7s"
						>
							<div className="pricing-header">
								<div className="pricing-badge">
									<i className="tji-star-2"></i> <span>Popular</span>
								</div>
								<h4 className="package-name">Standard Plan</h4>
								<div className="package-desc">
									<p>Complete Business Solutions</p>
								</div>
								<div className="package-price">
									<span className="package-currency">$</span>
									<span className="price-number">249</span>
									<span className="package-period">/per month</span>
								</div>
							</div>
							<div className="pricing-body">
								<div className="list-items">
									<div className="title-wrapper">
										<h5 className="title">Features</h5>
										<p className="desc">Includes all Basic plan and Plus:</p>
									</div>
									<ul>
										<li>
											<i className="tji-list"></i>All features in Basic Plan
										</li>
										<li>
											<i className="tji-list"></i>Priority customer support
										</li>
										<li>
											<i className="tji-list"></i>Up to 3 projects per month
										</li>
										<li>
											<i className="tji-list"></i>Monthly performance reviews
										</li>
										<li>
											<i className="tji-list"></i>Collaboration tools for team
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
					</div>
					<div className="col-xl-4 col-md-6">
						<div
							className="pricing-box h10-pricing-box wow fadeInUp"
							data-wow-delay=".9s"
						>
							<div className="pricing-header">
								<h4 className="package-name">Premium Plan</h4>
								<div className="package-desc">
									<p>Advanced Business Services</p>
								</div>
								<div className="package-price">
									<span className="package-currency">$</span>
									<span className="price-number">499</span>
									<span className="package-period">/per month</span>
								</div>
							</div>
							<div className="pricing-body">
								<div className="list-items">
									<div className="title-wrapper">
										<h5 className="title">Features</h5>
										<p className="desc">Includes all Standard plan and Plus:</p>
									</div>
									<ul>
										<li>
											<i className="tji-list"></i>All features in Standard Plan
										</li>
										<li>
											<i className="tji-list"></i>Dedicated account manager
										</li>
										<li>
											<i className="tji-list"></i>Tailored strategy sessions
										</li>
										<li>
											<i className="tji-list"></i>Quarterly performance audits
										</li>
										<li>
											<i className="tji-list"></i>Priority support
										</li>
										<li>
											<i className="tji-list"></i>24/7 emergency service
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
				</div>
			</div>
		</section>
	);
};

export default PricingPlan4;
