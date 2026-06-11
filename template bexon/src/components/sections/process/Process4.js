import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard4 from "@/components/shared/cards/ProcessCard4";

const Process4 = () => {
	const process = [
		{
			id: 1,
			iconName: "tji-growth",
			title: "Discovery & Planning",
			desc: "The first step in our’s process is understanding your unique business needs, objectives, and our cutomes  challenges. first step in our process is understanding",
		},
		{
			id: 2,
			iconName: "tji-worldwide",
			title: "Execution & Delivery",
			desc: "Once the plan is in place, our team moves forward with execution, turning strategies into actiony to deliver. he first step in our’s process is understanding.",
		},
		{
			id: 3,
			title: "Review & Support",
			iconName: "tji-complete",
			desc: "After project completion  conduct thorough review to ensure everything aligns with your goals requirements. he first step in our’s process is understanding.",
		},
	];

	return (
		<section className="h10-process section-gap section-gap-x tj-sticky-panel-3-container">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-5">
						<div className="sec-heading style-3 tj-sticky-panel-3">
							<span className="sub-title">
								<i className="tji-box"></i> Our PROCESS
							</span>
							<h2 className="sec-title text-anim">
								Seamless Process and Great Results.
							</h2>
							<div className="h10-process-more">
								<ButtonPrimary text={"Explore More"} url={"/about"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-7 ">
						<div className="h10-process-wrapper">
							{process?.length
								? process?.map((processSingle, idx) => (
										<ProcessCard4
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
			<div className="bg-shape-3">
				<img src="/images/shape/h7-testimonial-shape-blur.svg" alt="" />
			</div>
		</section>
	);
};

export default Process4;
