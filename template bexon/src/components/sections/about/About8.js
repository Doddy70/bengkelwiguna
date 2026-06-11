import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About8 = () => {
	return (
		<section className="h9-about-section section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-8 h9-sec-heading">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								About our company
							</span>
							<h2
								className="sec-title title-highlight wow fadeInUp"
								data-wow-delay=".3s"
							>
								<span>Our Stories</span> on Begins Passion Driven by Purpose,
								and Fueled by a Relentless Pursuit of Results and Client Real
								Success.
							</h2>
						</div>
						<div className="h9-about-area">
							<div
								className="about-img-area h9-about-img wow fadeInLeft"
								data-wow-delay=".3s"
							>
								<div className="about-img overflow-hidden">
									<img
										data-speed=".8"
										src="/images/about/h9-about.webp"
										alt=""
									/>
								</div>
								<div className="box-area">
									<div
										className="author-info wow fadeInUp"
										data-wow-delay=".3s"
									>
										<h4 className="title">Eade Marren</h4>
										<span className="designation">CEO & Founder</span>
									</div>
								</div>
							</div>
							<div className="h9-about-content">
								<p className="desc wow fadeInUp" data-wow-delay=".4s">
									Recognize that exceptional customer experiences are at the
									heart of every successful business. Our Customer Experience
									Solutions are crafted to help you transform every interaction
									your customers have with your brand busin into a meaningful
									and positive experience. We believe that understanding the
									customer.
								</p>
								<div
									className="h9-about-funfact wow fadeInUp"
									data-wow-delay=".6s"
								>
									<div className="countup-item">
										<FunfactSingle currentValue={20} symbol={"M"} />
										<span className="count-text">
											Reach Worldwide empower dreams everywhere.
										</span>
									</div>
									<div className="countup-item">
										<FunfactSingle currentValue={8.5} symbol={"X"} />
										<span className="count-text">
											Faster Growth starts smart solutions today.
										</span>
									</div>
								</div>
								<div
									className="about-btn-area-2 wow fadeInUp"
									data-wow-delay=".7s"
								>
									<ButtonPrimary text={"Learn More"} url={"/about"} />
									<PopupVideo>
										<Link
											className="video-btn video-popup glightbox"
											data-autoplay="true"
											data-vbtype="video"
											data-maxwidth="1200px"
											href="https://www.youtube.com/watch?v=MLpWrANjFbI"
										>
											<span className="play-btn">
												<i className="tji-play"></i>
											</span>
											<span className="video-text">Play our reels</span>
										</Link>
									</PopupVideo>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About8;
