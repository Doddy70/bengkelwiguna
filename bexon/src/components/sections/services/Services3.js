"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard3 from "@/components/shared/cards/ServiceCard3";
import getALlServices from "@/libs/getALlServices";

const Services3 = () => {
	const services = getALlServices()?.slice(0, 4);

	return (
		<section className="tj-service-section service-3 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Solutions
							</span>
							<h2 className="sec-title title-anim">
								Tailor Business Solutions for Corporates.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard3 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
						<div
							className="service-btn-area text-center wow fadeInUp"
							data-wow-delay=".3s"
						>
							<ButtonPrimary text={"More Services"} url={"/services"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services3;
