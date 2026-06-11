import Link from "next/link";

const Choose2 = () => {
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Choose the Best
							</span>
							<h2 className="sec-title title-anim">
								Empowering Business with Expertise.
							</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					<div className="col-md-6 col-lg-4">
						<div className="choose-box customers-box h9-choose-box right-swipe">
							<h4 className="title">
								Providing the Our Best Business Solution Ever.
							</h4>
							<div className="customers-inner">
								<div className="customers">
									<ul>
										<li className="wow fadeInLeft" data-wow-delay=".5s">
											<img src="/images/testimonial/client-1.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".6s">
											<img src="/images/testimonial/client-2.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".7s">
											<img src="/images/testimonial/client-3.webp" alt="" />
										</li>
										<li className="wow fadeInLeft" data-wow-delay=".8s">
											<img src="/images/testimonial/client-4.webp" alt="" />
										</li>
									</ul>
								</div>
								<div className="rating-area">
									<div className="star-ratings">
										<div className="fill-ratings">
											<span>★★★★★</span>
										</div>
										<div className="empty-ratings">
											<span>★★★★★</span>
										</div>
									</div>
								</div>
								<h5 className="customers-text">100+ happy customer.</h5>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-4">
						<div className="choose-box h9-choose-box right-swipe">
							<div className="choose-content">
								<div className="choose-icon">
									<i className="tji-award"></i>
								</div>
								<h4 className="title">Award-Winning Expertise</h4>
								<p className="desc">
									Recognized by industry leaders, our award-winning team has a
									proven record of delivering excellence across projects.
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div
							className="choose-box h9-choose-box h9-choose-bg right-swipe"
							style={{
								backgroundImage: "url('/images/choose/h9-choose-bg.webp')",
							}}
						>
							<div className="choose-content">
								<h4 className="title">Dedicated Support</h4>
								<p className="desc">
									Our team is always available for address expert concerns,
									providing quick and effective solution to keep your business.
								</p>
								<Link className="text-btn" href="/contact">
									<span className="btn-text">
										<span>Contact Us</span>
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
		</section>
	);
};

export default Choose2;
