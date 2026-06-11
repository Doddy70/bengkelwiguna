import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Link from "next/link";

const About7 = () => {
	return (
		<section className="tj-about-section h8-about section-gap">
			<div className="container">
				<div className="row row-gap-4">
					<div className="col-12">
						<div
							className="about-content-area-2 wow fadeInUp"
							data-wow-delay=".3s"
						>
							<div className="sec-heading style-3">
								<div className="row">
									<div className="col-12 col-lg-4">
										<div className="h8-about-left">
											<span
												className="sub-title wow fadeInUp"
												data-wow-delay=".3s"
											>
												<i className="tji-box"></i>Get to Know Us
											</span>
										</div>
									</div>
									<div className="col-12 col-lg-8">
										<div className="h8-about-content-inner">
											<h2 className="sec-title title-highlight">
												Committed Delivering Our Measurable Result and in
												Building from the Lasting Relationships a through out
												trusts and innovation and shared
											</h2>
										</div>
									</div>
								</div>
								<div className="row align-items-center">
									<div className="col-12 col-lg-4">
										<div className="h8-about-video">
											<img src="/images/about/h8-about.webp" alt="" />
											<PopupVideo>
												<Link
													className="h8-about-video-btn video-popup glightbox"
													href="https://youtu.be/gXFATcwrO-U"
													data-autoplay="true"
													data-vbtype="video"
												>
													<i className="tji-play"></i>
												</Link>
											</PopupVideo>
										</div>
									</div>
									<div className="col-12 col-lg-8">
										<div className="h8-about-item-wrapper">
											<div className="h8-about-item h8-about-item-counter">
												<div className="countup-item style-2">
													<div className="count-inner">
														<FunfactSingle currentValue={30} sup={"+"} />
														<span className="count-text">
															Years of Corporate Experience.
														</span>
													</div>
												</div>
											</div>
											<div className="h8-about-item h8-about-item-desc">
												<div className="h8-about-item-content">
													<p className="desc">
														Our approach to customer experience comhensive and
														data-driven. We begin assessing you current customer
														touchpoints, identifying areas for improvement, an
														using insights to develop strategies in that meet
														your customers’ evolving needs. From optimizing
														digital platforms.
													</p>
													<div
														className="about-btn-area-2 wow fadeInUp"
														data-wow-delay="1s"
													>
														<ButtonPrimary text={"Learn More"} url={"/about"} />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid client-container-2 gap-top">
				<div className="row">
					<div className="col-12">
						<BrandSlider1 className="client-slider-3" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About7;
