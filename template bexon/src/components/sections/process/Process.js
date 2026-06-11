"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard from "@/components/shared/cards/ProcessCard";

const Process = () => {
	const process = [
		{
			id: 1,
			title: "Discovery & Planning",
			desc: "The first step in our process is understanding your unique business needs,  objectives, and our cutomes challenges.",
		},
		{
			id: 2,
			title: "Execution & Delivery",
			desc: "Once the plan is in place, our team moves forward with execution, turning strategies into actiony to deliver.",
		},
		{
			id: 3,
			title: "Review & Support",
			desc: "After project completion, we conduct a thorough review to ensure everything aligns with your goals and requirements.",
		},
	];
	return (
		<section className="tj-working-process section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Our Process
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Seamless Process, Great <span>Results.</span>
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".5s">
									Developing personalized customer journeys to increase
									satisfaction and loyalty.
								</p>
								<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="working-process-area">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard
											key={idx}
											processSingle={processSingle}
											idx={idx}
										/>
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
		</section>
	);
};

export default Process;
