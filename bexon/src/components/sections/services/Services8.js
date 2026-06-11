import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard9 from "@/components/shared/cards/ServiceCard9";
import getALlServices from "@/libs/getALlServices";

const Services8 = () => {
	const services = getALlServices()?.slice(0, 3);
	return (
		<section className="h8-service overflow-hidden section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 sec-heading-centered">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Solutions
							</span>
							<h2 className="sec-title title-anim">
								Tailor Business Solutions for Corporates.
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div className="container gap-30">
				<div className="row">
					<div className="col-12">
						<div
							className="service-wrapper h8-service-wrapper  wow bounceInLeft"
							data-wow-delay=".3s"
						>
							<div className="row">
								{services?.length
									? services?.map((service, idx) => (
											<div key={idx} className="col-12 col-md-6 col-xl-4">
												<ServiceCard9 service={service} idx={idx} />
											</div>
									  ))
									: ""}
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h8-service-more wow fadeInUp" data-wow-delay=".8s">
							<ButtonPrimary text={"More services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services8;
