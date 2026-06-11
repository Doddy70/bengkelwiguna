"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ option }) => {
	const {
		currentItem,
		items,
		currentId,
		isPrevItem,
		isNextItem,
		prevId,
		nextId,
	} = option || {};
	const { title, titleLarge, id, iconName, img } = currentItem || {};
	const sidebarItems = items?.slice(0, 6);
	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src="/images/service/service-details.webp"
									alt="Images"
									width={870}
									height={450}
									style={{ height: "auto" }}
								/>
							</div>
							<h2 className="title title-anim">
								Transforming Customer: Tailored Solutions for Experiences.
							</h2>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Recognize that exceptional customer experiences are at the
									heart of every successful business. Our Customer Experience
									Solutions are crafted to help you transform every interaction
									your customers have with your brand into a meaningful and
									positive experience. We believe that understanding the
									customer journey and providing personalized, seamless
									experiences can significantly enhance customer loyalty,
									satisfaction, and lifetime value.Our approach to customer
									experience is comprehensive and data-driven.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our approach to customer experience is comprehensive and
									data-driven. We begin by assessing your current customer
									touchpoints, identifying areas for improvement, and using
									insights to develop strategies that meet your customers’
									evolving needs. From optimizing digital platforms.
								</p>
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Personalization at Scale
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Improved Customer Retention
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Data-Driven Insights
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Omni-channel Integration
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Customer Retention
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Support Optimization
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Proactive Engagement
									</li>
								</ul>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<Image
													src="/images/service/service-3.webp"
													alt="Image"
													width={420}
													height={420}
													style={{ height: "auto" }}
												/>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".5s"
											>
												<Image
													src="/images/service/service-4.webp"
													alt="Image"
													width={420}
													height={420}
													style={{ height: "auto" }}
												/>
											</div>
										</div>
									</div>
								</div>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Our Range of Customer Services
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									At Bexon, we don't just focus on solving customer problems—we
									focus on creating experiences that delight and build lasting
									relationships. Whether it's through improving customer service
									operations, leveraging technology, or designing more engaging
									digital experiences, our team is here to help you exceed your
									customers' expectations every time. We help you understand
									your customers deeply, optimize their experience.
								</p>
								<div className="details-content-box">
									<div
										className="service-details-item wow fadeInUp"
										data-wow-delay=".2s"
									>
										<span className="number">01.</span>
										<h6 className="title">
											Increased Customer <br />
											Satisfaction
										</h6>
										<div className="desc">
											<p>
												By prov consistent, personalized experience, customers
												are more likely to feel valued a satisfied, which
												directly.
											</p>
										</div>
									</div>
									<div
										className="service-details-item wow fadeInUp"
										data-wow-delay=".4s"
									>
										<div className="service-number">
											<span className="number">02.</span>
											<h6 className="title">
												Improved Operational <br />
												Efficiency
											</h6>
											<div className="desc">
												<p>
													With our tools and strategies, your customer support
													teams can handle inquiries faster, while automated
													systems.
												</p>
											</div>
										</div>
									</div>
									<div
										className="service-details-item wow fadeInUp"
										data-wow-delay=".6s"
									>
										<div className="service-number">
											<span className="number">03.</span>
											<h6 className="title">
												Insights for Continuous Improvement
											</h6>
											<div className="desc">
												<p>
													Our data-driven approach provides team with valuable
													insights into customer behavior, enabling to
													continual.
												</p>
											</div>
										</div>
									</div>
								</div>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Frequently asked questions
								</h3>
								<BootstrapWrapper>
									<div className="accordion tj-faq style-2" id="faqOne">
										<div
											className="accordion-item active wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className=" faq-title"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-1"
												aria-expanded="true"
											>
												What is Customer Experience (CX) and why is it
												important?
											</button>
											<div
												id="faq-1"
												className="collapse show"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Customer Experience (CX) refers to the overall
														impression a customer has of a business based on
														their interactions across various
														touchpoints—whether it’s a website visit, a customer
														support call, or an in-store purchase. It
														encompasses everything from ease of navigation and
														service quality to emotional connection and brand
														perception.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-2"
												aria-expanded="false"
											>
												How can your Customer Experience Solutions benefit?
											</button>
											<div
												id="faq-2"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Our solutions optimize every touchpoint of the
														customer journey, ensuring seamless, personalized,
														and meaningful interactions. The benefits include
														improved customer satisfaction, higher retention
														rates, stronger brand loyalty, and actionable
														insights to continuously improve your customer
														engagement strategies. We help integrate these
														channels so customers feel valued.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-3"
												aria-expanded="false"
											>
												How do you personalize the customer experience?
											</button>
											<div
												id="faq-3"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Getting started is easy! Simply reach out to us
														through our contact form or give us a call, and
														we’ll schedule a consultation to discuss your
														project and how we can best assist you. Our team
														keeps you informed throughout the process, ensuring
														quality control and timely delivery.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-4"
												aria-expanded="false"
											>
												What kind of tools do you use to improve customer
												experience?
											</button>
											<div
												id="faq-4"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Getting started is easy! Simply reach out to us
														through our contact form or give us a call, and
														we’ll schedule a consultation to discuss your
														project and how we can best assist you. Our team
														keeps you informed throughout the process, ensuring
														quality control and timely delivery.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-5"
												aria-expanded="false"
											>
												How do you collect customer feedback?
											</button>
											<div
												id="faq-5"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Getting started is easy! Simply reach out to us
														through our contact form or give us a call, and
														we’ll schedule a consultation to discuss your
														project and how we can best assist you. Our team
														keeps you informed throughout the process, ensuring
														quality control and timely delivery.
													</p>
												</div>
											</div>
										</div>
										<div
											className="accordion-item wow fadeInUp"
											data-wow-delay=".3s"
										>
											<button
												className="faq-title collapsed"
												type="button"
												data-bs-toggle="collapse"
												data-bs-target="#faq-6"
												aria-expanded="false"
											>
												Can you help improve our customer support system?
											</button>
											<div
												id="faq-6"
												className="collapse"
												data-bs-parent="#faqOne"
											>
												<div className="accordion-body faq-text">
													<p>
														Getting started is easy! Simply reach out to us
														through our contact form or give us a call, and
														we’ll schedule a consultation to discuss your
														project and how we can best assist you. Our team
														keeps you informed throughout the process, ensuring
														quality control and timely delivery.
													</p>
												</div>
											</div>
										</div>
									</div>
								</BootstrapWrapper>
							</div>
							<div
								className="tj-post__navigation mb-0 wow fadeInUp"
								data-wow-delay="0.3s"
							>
								{/* <!-- previous post --> */}
								<div
									className="tj-nav__post previous"
									style={{ visibility: isPrevItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav prev_post">
										<Link href={isPrevItem ? `/services/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/services"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/services/${nextId}` : "#"}>
											Next
											<span>
												<i className="tji-arrow-right"></i>
											</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<aside className="tj-main-sidebar">
							{/* <!-- Service List --> */}
							<div
								className="tj-sidebar-widget service-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">More Services</h4>
								<ul>
									{sidebarItems?.length
										? sidebarItems?.map(({ shortTitle, id }, idx) => (
												<li key={idx}>
													<Link
														className={`${currentId === id ? "active" : ""}`}
														href={`/services/${id}`}
													>
														{shortTitle}
														<span className="icon">
															<i className="tji-arrow-right"></i>
														</span>
													</Link>
												</li>
										  ))
										: ""}
								</ul>
							</div>

							{/* <!-- cta --> */}
							<div
								className="tj-sidebar-widget widget-feature-item wow fadeInUp"
								data-wow-delay=".3s"
							>
								<CtaSidebar />
							</div>
						</aside>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesDetailsPrimary;
