import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Link from "next/link";

const Footer4 = () => {
	return (
		<footer className="tj-footer-section footer-4 section-gap-x">
			<div className="footer-top">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-6">
							<div className="footer-cta">
								<h2 className="cta-title title-anim">
									Let’s Build Future Together?
								</h2>
								<Link
									className="cta-btn wow fadeInUp"
									data-wow-delay=".3s"
									href="/contact"
								>
									<div className="customers">
										<ul>
											<li>
												<img src="/images/testimonial/client-1.webp" alt="" />
											</li>
											<li>
												<img src="/images/testimonial/client-2.webp" alt="" />
											</li>
											<li>
												<img src="/images/testimonial/client-3.webp" alt="" />
											</li>
										</ul>
									</div>
									<span className="btn-text">
										<span>Lets Talk</span>{" "}
										<i className="tji-arrow-right-long"></i>
									</span>
								</Link>
							</div>
						</div>
						<div className="col-lg-6">
							<div
								className="footer-widget widget-subscribe-3 wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h3 className="title">Subscribe to Our Newsletter.</h3>
								<div className="subscribe-form">
									<form action="#">
										<input
											type="email"
											name="email"
											placeholder="Enter email"
										/>
										<ButtonPrimary
											text={"Subscribe"}
											type={"submit"}
											className={"d-none d-sm-flex"}
										/>

										<label htmlFor="agree">
											<input id="agree" type="checkbox" />
											Agree to our{" "}
											<Link href="/terms-and-conditions">
												Terms & Condition?
											</Link>
										</label>
										<ButtonPrimary
											text={"Subscribe"}
											type={"submit"}
											className={"d-flex d-sm-none"}
										/>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<h5 className="title">Our Company</h5>
								<div className="footer-text">
									<p>
										Developing personalze our customer journeys to increase
										satisfaction & loyalty of our expansion.
									</p>
								</div>
								<div className="award-logo-area">
									<div className="award-logo">
										<img src="/images/footer/award-logo-1.webp" alt="" />
									</div>
									<div className="award-logo">
										<img src="/images/footer/award-logo-2.webp" alt="" />
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Services</h5>
								<ul>
									<li>
										<Link href="/services/1">Customer Experience</Link>
									</li>
									<li>
										<Link href="/services/2">Training Programs</Link>
									</li>
									<li>
										<Link href="/services/3">Business Strategy</Link>
									</li>
									<li>
										<Link href="/services/4">Training Program</Link>
									</li>
									<li>
										<Link href="/services/5">ESG Consulting</Link>
									</li>
									<li>
										<Link href="/services/6">Development Hub</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Resources</h5>
								<ul>
									<li>
										<Link href="/contact">Contact us</Link>
									</li>
									<li>
										<Link href="/team">Team Member</Link>
									</li>
									<li>
										<Link href="#">Recognitions</Link>
									</li>
									<li>
										<Link href="/careers">
											Careers <span className="badge">New</span>
										</Link>
									</li>
									<li>
										<Link href="/blogs">News</Link>
									</li>
									<li>
										<Link href="#">Feedback</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact style-2 wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Our Office</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>993 Renner Burg, West Rond, MT 94251-030, USA.</span>
									</div>
									<div className="contact-item">
										<Link href="tel:10095447818">P: +1 (009) 544-7818</Link>
										<Link href="mailto:support@bexon.com">
											M: support@bexon.com
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i> Mon-Fri 10am-10pm
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area-4">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025 
										<Link
											href="https://themeforest.net/user/theme-junction/portfolio"
											target="_blank"
										>
											Bexon
										</Link>{" "}
										All right reserved
									</p>
								</div>
								<div className="social-links style-2">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/contact">Privacy Policy</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">
												Terms & Condition
											</Link>
										</li>
									</ul>
								</div>
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
		</footer>
	);
};

export default Footer4;
