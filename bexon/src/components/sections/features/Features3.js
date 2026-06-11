import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "Innovative Solutions",
			icon: "tji-innovative",
			desc: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep you competitive in a marketplace.",
		},
		{
			id: 2,
			title: "Award-Winning Expertise",
			icon: "tji-award",
			desc: "Recognized by industry leaders, our award-winning team has a proven record of delivering excellence across projects.",
		},
		{
			id: 3,
			title: "Expert Team",
			icon: "tji-team",
			desc: "Our team is always available to address your concerns, providing quick and solution. to keep you competitive in marketplace.",
		},
		{
			id: 3,
			title: "Dedicated Support",
			icon: "tji-support",
			desc: "Our team is always available to address your concerns, providing quick and effective solution to keep your business.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div
						className="col-lg-4 col-md-6 order-lg-0 order-1 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<FeatureCard3 feature={features[1]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-1 order-0">
						<div className="h4-content-wrap text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
								<h2 className="sec-title title-anim">
									Solutions Built for Business.
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="/about"
							>
								<span className="btn-text">
									<span>Learn More</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-long"></i>
								</span>
							</a>
						</div>
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-2 order-2  wow fadeInUp"
						data-wow-delay=".3s"
					>
						<FeatureCard3 feature={features[2]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-3 order-3 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<FeatureCard3 feature={features[3]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-4 order-4 wow fadeInUp"
						data-wow-delay=".7s"
					>
						<FeatureCard3 feature={features[0]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-5 order-5">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
							style={{
								backgroundImage: "url('/images/choose/choose-img.webp')",
							}}
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<div className="count-inner">
								<span className="count-text">Faster Growth</span>
								<FunfactSingle currentValue={8.5} symbol={"X"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features3;
