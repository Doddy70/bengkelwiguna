"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import Link from "next/link";

const Contact2 = () => {
	return (
		<section className="tj-contact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="global-map wow fadeInUp" data-wow-delay=".3s">
							<div className="global-map-img">
								<img src="/images/bg/map.svg" alt="Image" />
								<div className="location-indicator loc-1">
									<div className="location-tooltip">
										<span>Head office:</span>
										<p>993 Renner Burg, West Rond, MT 94251-030, USA.</p>
										<Link href="tel:10095447818">P: +1 (009) 544-7818</Link>
										<Link href="mailto:support@bexon.com">
											M: support@bexon.com
										</Link>
									</div>
								</div>
								<div className="location-indicator loc-2">
									<div className="location-tooltip">
										<span>Regional office:</span>
										<p>Hessisch Lichtenau 37235, Kassel, Germany.</p>
										<Link href="tel:10098801810">P: +1 (009) 880-1810</Link>
										<Link href="mailto:support@bexon.com">
											M: support@bexon.com
										</Link>
									</div>
								</div>
								<div className="location-indicator loc-3">
									<div className="location-tooltip">
										<span>Regional office:</span>
										<p>32 Altamira, State of Pará, Brazil.</p>
										<Link href="tel:10095447818">P: +1 (009) 544-7818</Link>
										<Link href="mailto:support@bexon.com">
											M: support@bexon.com
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-6">
						<div
							className="contact-form style-2 wow fadeInUp"
							data-wow-delay=".4s"
						>
							<div className="sec-heading">
								<span className="sub-title text-white">
									<i className="tji-box"></i>Get in Touch
								</span>
								<h2 className="sec-title title-anim">
									Drop Us a <span>Line.</span>
								</h2>
							</div>
							<form id="contact-form-2">
								<div className="row wow fadeInUp" data-wow-delay=".5s">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName2"
												placeholder="Full Name *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail2"
												placeholder="Email Address *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone2"
												placeholder="Phone number *"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Chose a option" },
															{ value: "1", optionName: "Business Strategy" },
															{ value: "2", optionName: "Customer Experience" },
															{
																value: "3",
																optionName: "Sustainability and ESG",
															},
															{
																value: "4",
																optionName: "Training and Development",
															},
															{
																value: "5",
																optionName: "IT Support & Maintenance",
															},
															{
																value: "6",
																optionName: "Marketing Strategy",
															},
														]}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage2"
												id="message"
												placeholder="Type message *"
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary text={"Send Message"} type={"submit"} />
									</div>
								</div>
							</form>
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

export default Contact2;
