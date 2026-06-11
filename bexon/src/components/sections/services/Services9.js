import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ServiceCard10 from "@/components/shared/cards/ServiceCard10";
import getALlServices from "@/libs/getALlServices";

const Services9 = () => {
	const services = getALlServices()?.slice(0, 4);
	return (
		<section className="h9-service section-gap  section-gap-x tj-sticky-panel-container-2 tj-progress-wrapper">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 ">
						<div className="sec-heading style-8  tj-sticky-panel-2">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								CHOOSE THE BEST
							</span>
							<h2 className="sec-title title-anim">
								Scalable business services
							</h2>
							<div
								className="h9-service-more wow fadeInUp"
								data-wow-delay=".3s"
							>
								<ButtonPrimary text={"More services"} url={"/services"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8 ">
						<div className="h9-service-scroll-progress tj-scroll-progress tj-sticky-panel-2">
							<div className="tj-scroll-progress-item active">
								<h5 className="tj-scroll-progress-sln">01.</h5>
								<div className="tj-scroll-progress-ind">
									<div className="tj-scroll-progress-ind-inner"></div>
								</div>
							</div>
							<div className="tj-scroll-progress-item">
								<h5 className="tj-scroll-progress-sln">02.</h5>
								<div className="tj-scroll-progress-ind">
									<div className="tj-scroll-progress-ind-inner"></div>
								</div>
							</div>
							<div className="tj-scroll-progress-item">
								<h5 className="tj-scroll-progress-sln">03.</h5>
								<div className="tj-scroll-progress-ind">
									<div className="tj-scroll-progress-ind-inner"></div>
								</div>
							</div>
							<div className="tj-scroll-progress-item">
								<h5 className="tj-scroll-progress-sln">04.</h5>
								<div className="tj-scroll-progress-ind">
									<div className="tj-scroll-progress-ind-inner"></div>
								</div>
							</div>
						</div>
						<div className="service-wrapper h9-service-wrapper">
							{services?.length
								? services?.map((service, idx) => (
										<ServiceCard10 key={idx} service={service} idx={idx} />
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
				<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Services9;
