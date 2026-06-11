"use client";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import Image from "next/image";
import Link from "next/link";
import CtaSidebar from "../cta/CtaSidebar";

const ServicesDetailsPremium = ({ serviceData }) => {
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } = serviceData || {};
	const { title, slug, id, featured_img, content, harga, durasi, gallery } = currentItem || {};

	return (
		<section className="tj-service-details-premium section-gap" style={{
            position: 'relative',
            overflow: 'hidden',
            padding: 'var(--side-gap, 15px)',
            background: 'linear-gradient(135deg, rgba(240,244,248,0.5) 0%, rgba(220,230,240,0.5) 100%)',
        }}>
            {/* Background Glows for Home-05 feel */}
            <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '40%', height: '40%', background: 'rgba(34,66,151,0.2)', filter: 'blur(100px)', zIndex: -1, opacity: 'var(--glow-opacity, 0.8)' }}></div>
            <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '40%', height: '40%', background: 'rgba(255,100,50,0.15)', filter: 'blur(100px)', zIndex: -1, opacity: 'var(--glow-opacity, 0.8)' }}></div>

			<div className="container" style={{
                background: 'var(--glass-bg, rgba(255, 255, 255, 0.65))',
                backdropFilter: 'blur(var(--glass-blur, 35px))',
                WebkitBackdropFilter: 'blur(var(--glass-blur, 35px))',
                borderRadius: '24px',
                padding: '40px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                border: '1px solid rgba(255,255,255,0.4)',
                position: 'relative',
                zIndex: 1
            }}>
				<div className="row rg-50">
					<div className="col-lg-8">
						<div className="post-details-wrapper">
							{featured_img && (
								<div className="blog-images wow fadeInUp" data-wow-delay=".1s" style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '30px' }}>
									<Image
										src={featured_img}
										alt={title || "Service Details"}
										width={868}
										height={450}
										style={{ height: "auto", width: "100%", objectFit: "cover" }}
									/>
								</div>
							)}
							<h2 className="title title-anim" style={{ fontSize: '36px', fontWeight: '700', marginBottom: '20px' }}>
								{title}
							</h2>
							<div className="blog-text">
								<div className="wow fadeInUp wp-content-rendered" data-wow-delay=".3s" dangerouslySetInnerHTML={{ __html: content }}></div>
								
								{gallery && gallery.length > 0 && (
									<>
										<h3 className="wow fadeInUp" data-wow-delay=".3s" style={{ marginTop: '40px', marginBottom: '20px' }}>
											Galeri Pengerjaan
										</h3>
										<p className="wow fadeInUp" data-wow-delay=".3s">
											Berikut adalah beberapa dokumentasi dari proses pengerjaan layanan <strong>{title}</strong> di Bengkel Wiguna.
										</p>
										<div className="images-wrap">
											<div className="row">
												{gallery[0] && (
													<div className="col-sm-12">
														<div className="image-box wow fadeInUp" data-wow-delay=".3s">
															<PopupVideo>
																<Link className="gallery glightbox" href={gallery[0]} prefetch={false}>
																	<Image src={gallery[0]} alt={`${title} Gallery 1`} width={870} height={420} style={{ height: "auto", width: "100%", objectFit: "cover" }} />
																</Link>
															</PopupVideo>
														</div>
													</div>
												)}
												{gallery[1] && (
													<div className="col-sm-6">
														<div className="image-box wow fadeInUp" data-wow-delay=".3s">
															<PopupVideo>
																<Link className="gallery glightbox" href={gallery[1]} prefetch={false}>
																	<Image src={gallery[1]} alt={`${title} Gallery 2`} width={420} height={420} style={{ height: "auto", width: "100%", objectFit: "cover" }} />
																</Link>
															</PopupVideo>
														</div>
													</div>
												)}
												{gallery[2] && (
													<div className="col-sm-6">
														<div className="image-box wow fadeInUp" data-wow-delay=".5s">
															<PopupVideo>
																<Link className="gallery glightbox" href={gallery[2]} prefetch={false}>
																	<Image src={gallery[2]} alt={`${title} Gallery 3`} width={420} height={420} style={{ height: "auto", width: "100%", objectFit: "cover" }} />
																</Link>
															</PopupVideo>
														</div>
													</div>
												)}
											</div>
										</div>
									</>
								)}
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
							{/* <!-- category --> */}
							<div
								className="tj-sidebar-widget widget-categories wow fadeInUp"
								data-wow-delay=".1s"
                                style={{
                                    background: 'rgba(255,255,255,0.4)',
                                    borderRadius: '16px',
                                    border: '1px solid rgba(255,255,255,0.6)',
                                    padding: '30px 20px'
                                }}
							>
								<h4 className="widget-title">Info Layanan</h4>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-user"></i>
									</div>
									<div className="project-text">
										<span>Mekanik</span>
										<h6 className="title">Tim Ahli Tersertifikasi</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-budget"></i>
									</div>
									<div className="project-text">
										<span>Estimasi Harga</span>
										<h6 className="title">{harga || 'Hubungi Kami'}</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-calendar"></i>
									</div>
									<div className="project-text">
										<span>Estimasi Waktu</span>
										<h6 className="title">{durasi || 'Tergantung Kondisi'}</h6>
									</div>
								</div>
								<div className="infos-item">
									<div className="project-icons">
										<i className="tji-check"></i>
									</div>
									<div className="project-text">
										<span>Garansi</span>
										<h6 className="title">Ya, sesuai S&K</h6>
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

export default ServicesDetailsPremium;
