import FeatureCard2 from "@/components/shared/cards/FeatureCard2";

const Features2 = () => {
	const features = [
		{
			id: 1,
			title: "Innovative Solutions",
			icon: "tji-innovative",
			desc: "We stay ahead of the leveraging cutting-edge technologies and strategies to keep.",
		},
		{
			id: 2,
			title: "Award-Winning",
			icon: "tji-award",
			desc: "Recognized by industry leaders, our award-winning team has a proven record.",
		},
		{
			id: 3,
			title: "Expert Team",
			icon: "tji-team",
			desc: "Our team is always available to address your concerns, providing quick and solution.",
		},
		{
			id: 3,
			title: "Dedicated Support",
			icon: "tji-support",
			desc: "Our team is always available to address your concerns, providing quick and effective.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
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
					{features?.length
						? features?.map((feature, idx) => (
								<div key={idx} className="col-xl-3 col-md-6">
									<FeatureCard2 feature={feature} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Features2;
