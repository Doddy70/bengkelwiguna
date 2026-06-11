const Choose = () => {
	return (
		<section id="choose" className="tj-choose-section h8-choose  section-gap-x">
			<div className="container-fluid gap-0">
				<div className="row align-items-center flex-column-reverse flex-lg-row">
					<div className="col-12 col-lg-6 align-self-stretch">
						<div className="h8-choose-banner">
							<img
								data-speed=".8"
								className="wow fadeInLeftBig"
								data-wow-delay=".3s"
								src="/images/choose/h8-choose-bnner.webp"
								alt=""
							/>
						</div>
					</div>
					<div className="col-12 col-lg-6">
						<div className="h8-choose-content-wrapper">
							<div className="sec-heading style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
								<h2 className="sec-title title-anim">
									Empowering Business with Expertise.
								</h2>
							</div>
							<div className="h8-choose-box-wrapper ">
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".3s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-innovative"></i>
										</div>
										<div>
											<h4 className="title">Innovative Solutions</h4>
											<p className="desc">
												Our team is always available to address your concerns,
												providing quick and effective solution to keep your
												business expert option.
											</p>
										</div>
									</div>
								</div>
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".4s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-award"></i>
										</div>
										<div>
											<h4 className="title">Winning Expertise</h4>
											<p className="desc">
												Recognized by industry leaders, our award-winning team
												has a proven record of delivering excellence across
												projects base work
											</p>
										</div>
									</div>
								</div>
								<div
									className="choose-box h6-choose-box h8-choose-box  wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className="choose-content">
										<div className="choose-icon">
											<i className="tji-support"></i>
										</div>
										<div>
											<h4 className="title">Dedicated Support</h4>
											<p className="desc">
												Our team is always available to address your concerns,
												providing quick and effective solution to keep your
												business for any business.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Choose;
