"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard2 from "@/components/shared/cards/ServiceCard2";
import getALlServices from "@/libs/getALlServices";

const Services2 = () => {
	const services = getALlServices()?.slice(0, 4);

	return (
		<section className="tj-service-section service-2 section-gap section-gap-x slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-4">
						<div className="content-wrap  slidebar-stickiy">
							<div className="sec-heading style-2">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									Our Solutions
								</span>
								<h2 className="sec-title text-white text-anim">
									Tailored Business Solutions for our
									<span>Corporates.</span>
								</h2>
							</div>
							<div className="wow fadeInUp" data-wow-delay=".6s">
								<ButtonPrimary text={"More Services"} url={"/services"} />
							</div>
						</div>
					</div>
					<div className="col-lg-8">
						<div className="service-wrapper-2">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard2 key={idx} service={service} idx={idx} />
								  ))
								: ""}
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
			<div className="bg-shape-3">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Services2;
