"use client";
import ProcessCard2 from "@/components/shared/cards/ProcessCard2";

const Process2 = () => {
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
		<section className="h5-working-process section-gap section-gap-x ">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> OUR PROCESS
							</span>
							<h2 className="sec-title text-anim  text-white">
								Seamless Process and Great Results.
							</h2>
						</div>
					</div>
				</div>
			</div>

			<div className="h5-working-process-inner">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="working-process-area h5-working-process-wrapper">
								{process?.length
									? process?.map((processSingle, idx) => (
											<ProcessCard2
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
			<div className="bg-shape-4">
				<img src="/images/shape/shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Process2;
