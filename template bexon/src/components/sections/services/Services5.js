import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServicesSlider2 from "@/components/shared/services/ServicesSlider2";

const Services5 = () => {
	return (
		<section className="h5-service-section overflow-hidden section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Solutions
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<h2 className="sec-title text-anim">
										Tailor Business Solutions for Corporates.
									</h2>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Explore More"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper wow fadeInUp" data-wow-delay=".4s">
							<ServicesSlider2 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services5;
