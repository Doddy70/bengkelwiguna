import ButtonPrimary from "../buttons/ButtonPrimary";

const PricingPlanItems = ({ isYearlyPlan }) => {
	return (
		<>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".5s">
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
								<i className="tji-list"></i>Limited customer support (email)
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
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box active wow fadeInUp" data-wow-delay=".7s">
					<div className="pricing-header">
						<h4 className="package-name">Standard Plan</h4>
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
				</div>
			</div>
			<div className="col-xl-4 col-md-6">
				<div className="pricing-box wow fadeInUp" data-wow-delay=".9s">
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
				</div>
			</div>
		</>
	);
};

export default PricingPlanItems;
