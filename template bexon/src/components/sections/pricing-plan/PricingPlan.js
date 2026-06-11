"use client";
import PricingPlanItems from "@/components/shared/pricing-plan/PricingPlanItems";

const PricingPlan = ({ type = 1 }) => {
	return (
		<section
			className={`${
				type === 2 || type === 3 ? "tj-pricing-section-2" : "tj-pricing-section"
			} ${type === 3 ? "section-top-gap" : "section-gap"} `}
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div
							className={`sec-heading text-center ${
								type === 2 || type === 3 ? "" : "style-2"
							}`}
						>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								{type === 2 || type === 3 ? <i className="tji-box"></i> : ""}{" "}
								Pricing plan
							</span>
							<h2
								className={`sec-title ${
									type === 2 || type === 3 ? "title-anim" : "text-anim"
								}`}
							>
								Our Pricing <span>Plan.</span>
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<PricingPlanItems />
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

export default PricingPlan;
