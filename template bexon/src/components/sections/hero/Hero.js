import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<section className="tj-banner-section section-gap-x">
			<div className="banner-area">
				<div className="banner-left-box">
					<div className="banner-content">
						<span className="sub-title wow fadeInDown" data-wow-delay=".2s">
							<i className="tji-excellence"></i> Recognized for Excellence
						</span>
						<h1 className="banner-title title-anim">
							Driving Excellence Through Evolution and <span>Trust.</span>
						</h1>
						<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
							<Link className="banner-link" href="/about">
								<span>
									<i className="tji-arrow-right-big"></i>
								</span>
							</Link>
							<div className="banner-desc">
								Represents growth, expansion, and modern business solution
								present growth, expansion.
							</div>
						</div>
					</div>
					<div className="banner-shape">
						<img src="/images/shape/pattern-bg.webp" alt="" />
					</div>
				</div>
				<div className="banner-right-box">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/hero-img.webp"
							alt=""
							width={945}
							height={793}
						/>
					</div>
					<div className="box-area">
						<div className="customers-box">
							<div className="customers">
								<ul>
									<li className="wow fadeInLeft" data-wow-delay=".5s">
										<Image
											src="/images/testimonial/client-1.webp"
											alt=""
											width={89}
											height={89}
										/>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".6s">
										<Image
											src="/images/testimonial/client-2.webp"
											alt=""
											width={89}
											height={89}
										/>
									</li>
									<li className="wow fadeInLeft" data-wow-delay=".7s">
										<Image
											src="/images/testimonial/client-3.webp"
											alt=""
											width={89}
											height={89}
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
								className="customers-number wow fadeInUp"
								data-wow-delay=".5s"
							>
								30K
							</div>
							<h6 className="customers-text wow fadeInUp" data-wow-delay=".5s">
								Happy customer we have world-wide.
							</h6>
						</div>
					</div>
				</div>
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="2s">
				<button data-target="#choose" className="scroll-down tj-scroll-btn">
					<span>
						<i className="tji-arrow-down-long"></i>
					</span>
					Scroll Down
				</button>
			</div>
		</section>
	);
};

export default Hero;
