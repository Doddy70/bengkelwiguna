import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features4 = ({ type }) => {
	const features = [
		{
			title: "Innovative Solutions",
			desc: "We stay ahead of the curve, leveraging cutting-edge technologies and strategies to keep  you competitive in a marketplace.",
			icon: "tji-innovative",
		},
		{
			title: "Award-Winning Expertise",
			desc: "Recognized by industry leaders, our award-winning team has a proven record of delivering  excellence across projects.",
			icon: "tji-award",
		},
		{
			title: "Dedicated Support",
			desc: "Our team is always available to address your concerns, providing quick and effective solution to keep your business.",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section h6-choose section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-6 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title title-anim">
								Empowering Business with Expertise.
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} type={2} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features4;
