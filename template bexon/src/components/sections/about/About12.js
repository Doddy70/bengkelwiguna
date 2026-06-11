import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About12 = () => {
	return (
		<section className="tj-history section-gap">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-xl-5">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								<i className="tji-box"></i> Our background
							</span>
							<h2 className="sec-title text-anim">
								Discover How We Have Evolved Our Company’s on{" "}
								<span>Legacy.</span>
							</h2>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Our mission is to empowers businesses off all size to thrive in
								an businesses ever changing marketplace. We are committed to the
								delivering exceptional in the value through our strategic inset,
								innovative approaches. Our mission is to empower businesses of
								all sizes to thrive.
							</p>
							<p>
								Committed to the delivering exceptional in the value through our
								strategic inset, innovative approaches empower.
							</p>
						</div>
						<div
							className="history-btn mt-30 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<ButtonPrimary text={"Learn More"} url={"/about"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;
