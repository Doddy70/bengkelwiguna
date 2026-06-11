import FeatureCard4 from "@/components/shared/cards/FeatureCard4";

const Features5 = ({ type }) => {
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
		<section
			id="choose"
			className="tj-choose-section h6-choose h7-choose section-gap"
		>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Choose the Best
							</span>
							<h2 className="sec-title text-anim">
								Empowering Business with Expertise.
							</h2>
						</div>
					</div>
				</div>
				<div
					className="row h7-choose-item-wrapper  wow fadeInLeftBig"
					data-wow-delay=".4s"
				>
					{features.map((feature, idx) => (
						<FeatureCard4 key={idx} feature={feature} idx={idx} />
					))}
				</div>
			</div>
		</section>
	);
};
export default Features5;
