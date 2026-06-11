/**
 * Services5 - Bengkel Wiguna
 * Menampilkan Swiper carousel berisi Promo Terbaru Bengkel Wiguna
 * Menggunakan data promosi terpadu (promotions.js) dengan copywriting profesional dan gambar existing.
 *
 * OPTIMIZATION: CSS loaded dynamically via CssLoader
 */
"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { promotions } from "@/data/promotions";
import { SwiperFullCss, AnimateCss, BexonIconsCss } from "@/lib/css-loaders";

const Services5 = ({ promosiData }) => {
	// Use dynamic data from WP if available, otherwise fallback to static data
	const displayPromos = (promosiData && promosiData.length > 0) ? promosiData : promotions;

	// Peta ikon Font Awesome untuk masing-masing promo agar lebih menarik
	const promoIcons = {
		1: "fa-solid fa-oil-can",
		2: "fa-solid fa-shield-halved",
		3: "fa-solid fa-gauge-high",
		4: "fa-solid fa-screwdriver-wrench",
		5: "fa-solid fa-snowflake",
		6: "fa-solid fa-car",
		7: "fa-solid fa-circle-notch",
		8: "fa-solid fa-car-side",
		9: "fa-solid fa-star",
		10: "fa-solid fa-bolt",
	};

	return (
		<>
			{/* OPTIMIZATION: Load CSS only when this component renders */}
			<SwiperFullCss />
			<AnimateCss />
			<BexonIconsCss />

			<section id="services" className="h6-service section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading sec-heading-centered style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>PROMO TERBARU
								</span>
								<h2 className="sec-title title-anim">
									Promo Terhangat & <span style={{ color: '#224297' }}>Penawaran Spesial</span>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-12">
							<Swiper
								slidesPerView={1}
								spaceBetween={15}
								loop={displayPromos.length > 3}
								speed={1500}
								autoplay={{
									delay: 4000,
									disableOnInteraction: false,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									992: {
										slidesPerView: 3,
										spaceBetween: 30,
									},
									1200: {
										slidesPerView: 3,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="h6-service-slider"
							>
								{displayPromos.map((promo, index) => {
									const title = promo.originalTitle || promo.title;
									const id = promo.id;
									const slug = promo.slug;
									const imageSrc = promo.featured_img || promo.image;
									const formattedIndex = String(index + 1).padStart(2, "0");

									return (
										<SwiperSlide key={index}>
											<div className="h6-service-item wow fadeInUp" data-wow-delay={`${0.1 * index}s`}>
												<div className="h6-service-thumb">
													<Link href={`/promosi/${slug || id}`}>
														<img src={imageSrc} alt={title} />
													</Link>
												</div>
												<div className="h6-service-content">
													<h5 className="h6-service-index">{formattedIndex}.</h5>
													<div className="h6-service-title-wrap">
														<h4 className="title">
															<Link href={`/promosi/${slug || id}`}>{title}</Link>
														</h4>
														<Link className="text-btn" href={`/promosi/${slug || id}`}>
															<span className="btn-icon">
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</div>
												</div>
											</div>
										</SwiperSlide>
									);
								})}
								<div className="swiper-pagination-area"></div>
							</Swiper>

							{/* Centered Button to View All Promos */}
							<div className="text-center mt-5">
								<Link href="/promosi/" className="tj-btn-secondary">
									<i className="tji-arrow-right-long"></i>
									<span>Lihat Semua Promo</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Services5;
