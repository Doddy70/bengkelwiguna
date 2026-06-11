"use client";
import ServiceCard5 from "@/components/shared/cards/ServiceCard5";
import getALlServices from "@/libs/getALlServices";
import Link from "next/link";

const Services4 = () => {
	const services = getALlServices()?.slice(0, 3);
	const lastItemIdx = services?.length - 1;
	return (
		<section className="tj-service-section-5 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
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
										<ServiceCard5
											key={idx}
											service={service}
											idx={idx}
											lastItemIdx={lastItemIdx}
										/>
								  ))
								: ""}
						</div>
						<div className="service-bottom-text">
							<p className="desc">
								<span>
									<i className="tji-box"></i>Unlock tailored solutions without
									the wasted effort.{" "}
									<Link href="/contact">Talk to us today</Link>
								</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services4;
