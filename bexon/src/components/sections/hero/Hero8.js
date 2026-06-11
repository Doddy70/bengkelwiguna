import Image from "next/image";
import Link from "next/link";

const Hero8 = () => {
	return (
		<section className="h8-hero ">
			<div className="h8-hero-inner">
				<div
					className="h8-hero-bg-image"
					style={{ backgroundImage: "url('/images/hero/h8-hero-bg.webp')" }}
				></div>
				<div className="container">
					<div className="row ">
						<div className="col-12">
							<div className="h8-hero-item-wrapper">
								<div className="h8-hero-content">
									<h1 className="h8-hero-title text-anim">
										<span>Shaping</span> <span>- Smart</span>
										<span>Business</span>
										<span className="title-year">[2025]</span>
									</h1>
								</div>
								<div className="h8-hero-box">
									<div className="customers">
										<ul>
											<li className="wow fadeInLeft" data-wow-delay=".5s">
												<Image
													width={89}
													height={89}
													src="/images/testimonial/client-1.webp"
													alt=""
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".6s">
												<Image
													width={89}
													height={89}
													src="/images/testimonial/client-2.webp"
													alt=""
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".7s">
												<Image
													width={89}
													height={89}
													src="/images/testimonial/client-3.webp"
													alt=""
												/>
											</li>
											<li className="wow fadeInLeft" data-wow-delay=".8s">
												<span>
													<i className="tji-plus"></i>
												</span>
											</li>
										</ul>
									</div>
									<div
										className="h8-hero-box-content wow fadeInLeft"
										data-wow-delay=".9s"
									>
										<div className="h8-hero-box-icon">
											<i className="tji-star"></i>
										</div>
										<div className="desc">
											Recognized by industry leaders, of our award-winning team
											has be a proven record of delivering.
										</div>
									</div>
								</div>
								<div className="h8-hero-banner">
									<Image
										width={669}
										height={760}
										style={{ height: "auto" }}
										className="wow fadeInUpBig"
										data-wow-delay=".8s"
										src="/images/hero/h8-hero-banner.webp"
										alt=""
									/>
								</div>
								<Link href="/services" className="circle-text-wrap">
									<span className="desc">
										Explore Us More <i className="tji-arrow-right-long"></i>
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

export default Hero8;
