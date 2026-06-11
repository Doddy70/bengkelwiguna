"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">
								Feel Free to Get in Touch or Visit our Location.
							</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder="Email Address*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder="Phone number*"
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
												name="cfMessage"
												id="message"
												placeholder="Type message*"
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary type={"submit"} text={"Submit Now"} />
									</div>
								</div>
							</form>
						</div>
					</div>
					<div className="col-lg-6">
						<div className="map-area wow fadeInUp" data-wow-delay=".3s">
							<iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d316440.5712687838!2d-74.01091796224334!3d40.67186885683901!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1745918398047!5m2!1sen!2sbd"></iframe>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
