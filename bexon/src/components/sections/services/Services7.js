import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard8 from "@/components/shared/cards/ServiceCard8";
import getALlServices from "@/libs/getALlServices";

const Services7 = () => {
	const services = getALlServices()?.slice(0, 4);
	return (
		<section className="h7-service  section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-2 style-7">
							<div className="row">
								<div className="col-12 col-lg-4 col-xl-3">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Our Solutions
									</span>
								</div>
								<div className="col-12 col-lg-8 col-xl-9">
									<div className="sec-title-wrapper">
										<h2 className="sec-title text-anim">
											Tailor Business Solutions for Corporates.
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 col-lg-4 col-xl-3">
						<div className="section-desc-wrapper slidebar-stickiy">
							<p className="desc">
								Recognized by industry leaders, our award winning team has a
								proven.
							</p>
							<div className=" wow fadeInUp" data-wow-delay=".3s">
								<ButtonPrimary text={"More services"} url={"/services"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8 col-xl-9">
						<div className="service-wrapper h7-service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard8 key={idx} service={service} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services7;
