import ServicesSlider3 from "@/components/shared/services/ServicesSlider3";

const Services6 = () => {
	return (
		<section className="h6-service section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2 style-6 ">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>OUR SOLUTIONS
							</span>
							<h2 className="sec-title title-anim">
								Tailor Business Solutions for Corporates.
							</h2>
						</div>
					</div>
				</div>
				<div className="row ">
					<div className="col-12">
						<ServicesSlider3 />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services6;
