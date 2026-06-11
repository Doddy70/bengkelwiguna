import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import TesstimonialsVerticalSlider from "@/components/shared/testimonials/TesstimonialsVerticalSlider";
import Link from "next/link";

const Testimonials6 = () => {
	return (
		<section className="h6-testimonial section-gap section-gap-x slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="slidebar-stickiy">
							<div className="h6-testimonial-banner">
								<img
									src="/images/testimonial/h6-testimonial-banner.webp"
									alt=""
								/>
								<PopupVideo>
									<Link
										className="h6-testimonial-banner-video video-popup glightbox"
										href="https://youtu.be/gXFATcwrO-U"
										data-autoplay="true"
										data-vbtype="video"
									>
										<i className="tji-play"></i>
									</Link>
								</PopupVideo>
							</div>
							<div className="content-wrap">
								<div className="sec-heading style-2 style-6">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>CLIENT FEEDBACK
									</span>
									<h2 className="sec-title title-anim">
										Our Clients Share Their Success Stories
									</h2>
								</div>
								<p className="desc">
									Our approach to customer experience is comprehensive and
									data-driven. We begin by assessing your current.
								</p>
								<div
									className="d-none d-lg-inline-flex wow fadeInUp"
									data-wow-delay=".6s"
								>
									<ButtonPrimary text={"Explore More"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="testimonial-wrapper h6-testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
						>
							<TesstimonialsVerticalSlider />
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
		</section>
	);
};

export default Testimonials6;
