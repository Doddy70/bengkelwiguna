import getTeamMembers from "@/libs/getTeamMembers";
import Image from "next/image";

const TeamDetails1 = ({ currentItemId }) => {
	const items = getTeamMembers();
	const currentId = currentItemId;
	const currentItem = items?.find(({ id }) => currentId === id);
	const {
		name,
		desig,
		imgLarge = "/images/team/team-1-big.webp",
	} = currentItem || {};

	return (
		<section className="team-details slidebar-stickiy-container">
			<div className="container">
				<div className="row justify-content-center">
					{/* <!--  left --> */}
					<div className="col-12 col-md-8 col-lg-5">
						<div
							className="team-details__img slidebar-stickiy wow fadeInUp"
							data-wow-delay=".1s"
						>
							<Image
								src={imgLarge}
								alt=""
								width={645}
								height={700}
								style={{ height: "auto" }}
							/>
						</div>
					</div>
					{/* <!-- right --> */}
					<div className="col-12 col-lg-7 ">
						<div className="team-details__content">
							<h2 className="team-details__name title-anim">
								Hello, I am {name}
							</h2>
							<span
								className="team-details__desig wow fadeInUp"
								data-wow-delay=".1s"
							>
								{desig}
							</span>
							<p className="wow fadeInUp" data-wow-delay=".3s">
								Our mission is to empowers businesses sizes thrive businesses ev
								changing marketplace We are committed to the delivering
								exceptional value through strategic inset innovative approaches.
								Our consulting of our missing empower.
							</p>
							<div
								className="team-details__contact-info wow fadeInUp"
								data-wow-delay=".5s"
							>
								<ul>
									<li>
										<span>Email address</span>
										<a href="mailto:eade.marren@bexon.com">
											eade.marren@bexon.com
										</a>
									</li>
									<li>
										<span>Phone number</span>
										<a href="tel:10095447818">+1 (009) 544-7818</a>
									</li>
								</ul>
							</div>
							<div className="social-links wow fadeInUp" data-wow-delay=".5s">
								<ul>
									<li>
										<a href="https://www.facebook.com/" target="_blank">
											<i className="fa-brands fa-facebook-f"></i>
										</a>
									</li>
									<li>
										<a href="https://www.instagram.com/" target="_blank">
											<i className="fa-brands fa-instagram"></i>
										</a>
									</li>
									<li>
										<a href="https://x.com/" target="_blank">
											<i className="fa-brands fa-x-twitter"></i>
										</a>
									</li>
									<li>
										<a href="https://www.linkedin.com/" target="_blank">
											<i className="fa-brands fa-linkedin-in"></i>
										</a>
									</li>
								</ul>
							</div>
							<div className="team-details__experience">
								<h4
									className="team-details__subtitle wow fadeInUp"
									data-wow-delay=".3s"
								>
									Work experience
								</h4>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers businesses
									of all sizes Committed to the delivering exceptional in the
									values
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers
								</p>
								<div
									className="team-details__experience__list wow fadeInUp"
									data-wow-delay=".3s"
								>
									<ul>
										<li>
											<i className="tji-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
										<li>
											<i className="tji-check"></i>
											<p>
												We believe that the human essential start any successful
												project.
											</p>
										</li>
									</ul>
								</div>
							</div>
							<div className="team-details__skills">
								<h4
									className="team-details__subtitle wow fadeInUp"
									data-wow-delay=".3s"
								>
									Professional skills
								</h4>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our mission is to empowers businesses size to thrivie in ses
									ever changing marketplace We are committed to the delivering
									exceptionals the value thro strategic ins innovative
									approaches. Our consulting of our missing empowers.
								</p>
								<ul
									className="tj-progress-list wow fadeInUp"
									data-wow-delay=".3s"
								>
									<li>
										<h6 className="tj-progress-title">Business Consultants</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">82%</span>
											<div className="tj-progress-bar" data-percent="82"></div>
										</div>
									</li>
									<li>
										<h6 className="tj-progress-title">Client Communication</h6>
										<div className="tj-progress">
											<span className="tj-progress-percent">90%</span>
											<div className="tj-progress-bar" data-percent="90"></div>
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamDetails1;
