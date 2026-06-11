import Image from "next/image";
import Link from "next/link";

const Hero7 = () => {
	return (
		<section className="h7-hero">
			<div className="h7-hero-inner">
				<div
					className="h7-hero-bg-image"
					style={{ backgroundImage: "url('/images/hero/h7-hero-bg.webp')" }}
				></div>
				<div className="container">
					<div className="row ">
						<div className="col-12">
							<div className="h7-hero-item-wrapper">
								<div className="h7-hero-content">
									<h1 className="h7-hero-title text-anim">
										<span>Delivering</span>{" "}
										<span>
											<Image
												width={66}
												height={66}
												className="wow bounceIn"
												data-wow-delay="1s"
												src="/images/icons/verified.svg"
												alt=""
											/>
											Trusted
										</span>
										<span>Solutions</span>
									</h1>
								</div>
								<div className="h7-hero-banner">
									<Image
										width={651}
										height={839}
										style={{ height: "auto" }}
										className="wow fadeInUpBig"
										data-wow-delay=".8s"
										src="/images/hero/h7-hero-banner.webp"
										alt=""
									/>
								</div>

								<div className="h7-hero-box">
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
												<Image
													width={89}
													height={89}
													src="/images/testimonial/client-4.webp"
													alt=""
												/>
											</li>
										</ul>
									</div>

									<div
										className="h7-hero-box-content wow fadeInLeft"
										data-wow-delay=".9s"
									>
										<div className="star-ratings">
											<div className="fill-ratings" style={{ width: "100%" }}>
												<span>★★★★★</span>
											</div>
											<div className="empty-ratings">
												<span>★★★★★</span>
											</div>
										</div>
										<h5 className="customers-text">100+ happy customer.</h5>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="circle-text-wrap wow fadeInUp" data-wow-delay="2.2s">
				<span
					className="circle-text"
					style={{ backgroundImage: "url('/images/hero/circle-text.webp')" }}
				></span>
				<Link className="circle-icon" href="/services">
					<i className="tji-arrow-down-big"></i>
				</Link>
			</div>
			<div
				className="h7-hero-shape h7-hero-shape-1 wow fadeInUpBig"
				data-wow-delay="1s"
			>
				<img
					className="tj-anim-move-var-big"
					src="/images/shape/h7-hero-blur-1.png"
					alt=""
				/>
			</div>
			<div
				className="h7-hero-shape h7-hero-shape-2 wow fadeInDownBig"
				data-wow-delay="1.2s"
			>
				<img
					className="tj-anim-move-var-big-reverse"
					src="/images/shape/h7-hero-blur-2.png"
					alt=""
				/>
			</div>
		</section>
	);
};

export default Hero7;
