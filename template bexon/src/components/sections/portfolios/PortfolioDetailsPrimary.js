"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";
const PortfolioDetailsPrimary = ({ option }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = option || {};
	const { title, titleLarge, id, imgLarge } = currentItem || {};

	return (
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src="/images/project/project-details.webp"
									alt="Images"
									width={868}
									height={450}
									style={{ height: "auto" }}
								/>
							</div>
							<h2 className="title title-anim">
								Designing a Modern Brand Identity for Competitive Edge
							</h2>
							<div className="blog-text">
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Rebranding is more than just a logo change or a new color
									palette; it’s about reshaping how your company is perceived in
									the marketplace. At [Company Name], we specialize in crafting
									comprehensive rebranding strategies that align your business
									with its evolving goals, values, and target audience. Whether
									you’re launching in new markets, updating your identity for
									modern relevance, or simply reinvigorating a tired brand, we
									take a holistic approach to ensure your brand resonates with
									customers on a deeper level.
								</p>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our rebranding process is rooted in strategic thinking, market
									research, and creativity. We work closely with you to
									understand your business, vision, and customers, ensuring that
									every element of the rebrand— from visual design to messaging—
									is authentic and impactful. The end result is a refreshed
									brand that speaks.
								</p>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Project Overview
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									In today’s dynamic market, a strong and consistent brand
									identity is key to standing out and driving growth. [Client
									Name], a growing business in the Bexon, recognized the need to
									evolve its brand to better resonate with an expanding audience
									and adapt to shifting market trends.
								</p>
								<ul className="wow fadeInUp" data-wow-delay=".3s">
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Brand Audit & Research
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Holder & Internal Communication
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Customer Experience
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Strategy Development
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Launch & Marketing
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Creative Direction
									</li>
									<li>
										<span>
											<i className="tji-check"></i>
										</span>
										Touchpoints
									</li>
								</ul>
								<h3 className="wow fadeInUp" data-wow-delay=".3s">
									Project Galley
								</h3>
								<p className="wow fadeInUp" data-wow-delay=".3s">
									Our Rebranding Strategy for [Client Name] transformed their
									entire brand identity, from a fresh new logo to an updated
									visual design that resonates with their growing audience.
								</p>
								<div className="images-wrap">
									<div className="row">
										<div className="col-sm-12">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href="/images/project/project-gallery-1.webp"
														prefetch={false}
													>
														<Image
															src="/images/project/project-gallery-1.webp"
															alt="Image"
															width={870}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".3s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														href="/images/project/project-gallery-2.webp"
														prefetch={false}
													>
														<Image
															src="/images/project/project-gallery-2.webp"
															alt="Image"
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
										<div className="col-sm-6">
											<div
												className="image-box wow fadeInUp"
												data-wow-delay=".5s"
											>
												<PopupVideo>
													<Link
														className="gallery glightbox"
														prefetch={false}
														href="/images/project/project-gallery-3.webp"
													>
														<Image
															src="/images/project/project-gallery-3.webp"
															alt="Image"
															width={420}
															height={420}
															style={{ height: "auto" }}
														/>
													</Link>
												</PopupVideo>
											</div>
										</div>
									</div>
								</div>
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
										<Link href={isPrevItem ? `/portfolios/${prevId}` : "#"}>
											<span>
												<i className="tji-arrow-left"></i>
											</span>
											Previous
										</Link>
									</div>
								</div>
								<Link href={"/portfolios"} className="tj-nav-post__grid">
									<i className="tji-window"></i>
								</Link>
								{/* <!-- next post --> */}
								<div
									className="tj-nav__post next"
									style={{ visibility: isNextItem ? "visible" : "hidden" }}
								>
									<div className="tj-nav-post__nav next_post">
										<Link href={isNextItem ? `/portfolios/${nextId}` : "#"}>
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
							{/* <!-- category --> */}
							<div
								className="tj-sidebar-widget widget-categories wow fadeInUp"
								data-wow-delay=".1s"
							>
								<h4 className="widget-title">Project Info</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Clients</span>
										<h6 className="title">Innovate Interiors Group</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-budget"></i>
									</div>
									<div className="project-text">
										<span>Budget</span>
										<h6 className="title">$100M USD</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-location-2"></i>
									</div>
									<div className="project-text">
										<span>Location</span>
										<h6 className="title">Maplewood Heights, CA</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-chart"></i>
									</div>
									<div className="project-text">
										<span>Sector</span>
										<h6 className="title">Corporate Business</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="project-text">
										<span>Complete date</span>
										<h6 className="title">OCT 20, 2024</h6>
									</div>
								</div>
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

export default PortfolioDetailsPrimary;
