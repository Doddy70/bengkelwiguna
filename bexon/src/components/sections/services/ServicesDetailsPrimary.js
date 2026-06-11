"use client";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPrimary = ({ serviceData, allServices }) => {
	const title = serviceData?.title?.rendered || serviceData?.title || "";
	const content = serviceData?.content?.rendered || serviceData?.content || "";
	const imageSrc = serviceData?.featured_img || serviceData?.featured_image || "/images/service/service-details.webp";

	// Use top 6 services for sidebar
	const sidebarItems = allServices?.slice(0, 6) || [];

	return (
		<section className="tj-service-area section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							<div className="blog-images wow fadeInUp" data-wow-delay=".1s">
								<Image
									src={imageSrc}
									alt={title}
									width={870}
									height={450}
									style={{ height: "auto", width: "100%", objectFit: "cover", borderRadius: "12px" }}
								/>
							</div>
							<h2 className="title title-anim">
								{title}
							</h2>
							<div className="blog-text wow fadeInUp" data-wow-delay=".3s">
								{/* Render dynamic WordPress Content */}
								{content ? (
									<div dangerouslySetInnerHTML={{ __html: content }} className="wp-content" />
								) : (
									<p>Layanan ini belum memiliki deskripsi detail.</p>
								)}
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
										? sidebarItems.map((item, idx) => {
												const itemTitle = item.title?.rendered || item.title;
												const itemSlug = item.slug || item.id;
												const isActive = serviceData?.slug === itemSlug;
												return (
												<li key={idx}>
													<Link
														className={`${isActive ? "active" : ""}`}
														href={`/services/${itemSlug}`}
													>
														{itemTitle}
														<span className="icon">
															<i className="tji-arrow-right"></i>
														</span>
													</Link>
												</li>
										  	)})
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
