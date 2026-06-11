import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";

const Hero3 = () => {
	return (
		<section className="tj-banner-section-2 section-gap-x">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5">
						<div className="banner-content-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".2s">
								<i className="tji-box"></i> Get to Know Us
							</span>
							<h1 className="banner-title title-anim">
								Driving Excellence Through{" "}
								<PopupVideo>
									<Link
										className="title-video video-popup glightbox wow fadeInUp"
										data-wow-delay="1.3s"
										href="https://www.youtube.com/watch?v=MLpWrANjFbI&ab_channel=eidelchteinadvogados"
									>
										<i className="tji-play"></i>
										<Image
											src="/images/hero/title-img.webp"
											alt=""
											width={148}
											height={68}
											style={{ height: "auto" }}
										/>
									</Link>
								</PopupVideo>{" "}
								Evolution & Trust.
							</h1>
							<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"Learn More"} url={"/contact"} />
								<Link className="number" href="tel:18884521505">
									<i className="tji-phone"></i>
									<span>1-888-452-1505</span>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-lg-7">
						<div className="banner-img-area wow fadeInUp" data-wow-delay=".3s">
							<div className="banner-img">
								<Image
									src="/images/hero/hero-img-2.webp"
									alt=""
									width={507}
									height={653}
								/>

								<div className="brand-name wow fadeIn" data-wow-delay="2.2s">
									<div className="marquee-vr">
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
										<span className="text">
											Bexon<span className="icon">/</span>
										</span>
									</div>
								</div>
								<div className="growth-box wow fadeInUp" data-wow-delay="1.7s">
									<Image
										src="/images/hero/growth.webp"
										alt=""
										width={158}
										height={169}
									/>
								</div>
							</div>
							<div className="wow fadeIn" data-wow-delay="2.2s">
								<div className="banner-author">
									<h4 className="title">Eade Marren</h4>
									<span className="designation">CEO & Founder</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
			<div className="banner-scroll wow fadeInDown" data-wow-delay="2.5s">
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

export default Hero3;
