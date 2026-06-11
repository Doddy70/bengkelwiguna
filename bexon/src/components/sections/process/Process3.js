"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ProcessCard3 from "@/components/shared/cards/ProcessCard3";
import { useCallback, useState } from "react";

const Process3 = () => {
	const process = [
		{
			id: 1,
			title: "Discovery & Planning",
			desc: "The first step in our’s process is understanding your unique business needs, objectives, and our cutomes  challenges. first step in our process is understanding",
		},
		{
			id: 2,
			title: "Execution & Delivery",
			desc: "Once the plan is in place, our team moves forward with execution, turning strategies into actiony to deliver. he first step in our’s process is understanding.",
		},
		{
			id: 3,
			title: "Review & Support",
			desc: "After project completion  conduct thorough review to ensure everything aligns with your goals requirements. he first step in our’s process is understanding.",
		},
	];
	const [currentIndex, setCurrentIndex] = useState(2);
	const handleCurrentIndex = useCallback(idx => {
		setCurrentIndex(idx);
	}, []);
	return (
		<section className="h6-working-process section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-6 order-2 order-lg-1">
						<div className="h6-working-process-inner">
							<div className="h6-working-process-wrapper">
								{process?.length
									? process?.map((processSingle, idx) => (
											<ProcessCard3
												key={idx}
												processSingle={processSingle}
												idx={idx}
												currentIndex={currentIndex}
												handleCurrentIndex={handleCurrentIndex}
											/>
									  ))
									: ""}
							</div>
						</div>
					</div>
					<div className="col-lg-6 order-1 order-lg-2">
						<div className="content-wrap slidebar-stickiy">
							<div className="sec-heading style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OUR PROCESS
								</span>
								<h2 className="sec-title title-anim">
									Seamless Process and Great Results.
								</h2>
							</div>
							<p className="desc">
								We stay ahead of curve, leveraging cutting-edge are technologies
								and strategies to competitive
							</p>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay=".6s"
							>
								<ButtonPrimary text={"Request a Call"} url={"/contact"} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Process3;
