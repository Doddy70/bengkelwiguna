import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServicesSlider4 from "@/components/shared/services/ServicesSlider4";

const Services10 = () => {
	return (
		<section className="h5-service-section h10-service section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-8">
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i> Our Solutions
									</span>
									<h2 className="sec-title text-anim">
										Tailor Business Solutions for Corporates.
									</h2>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Explore More"} url={"/services"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col-12">
						<div
							className="service-wrapper h10-service-wrapper wow fadeInUp"
							data-wow-delay=".4s"
						>
							<ServicesSlider4 />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services10;
