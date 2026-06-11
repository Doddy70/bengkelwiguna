/**
 * Testimonials5 - Bengkel Wiguna
 * Komponen Testimonial yang disulap menjadi Google Reviews Widget yang premium
 */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";
import { getWhatsAppLink } from "@/lib/constants";
import { SwiperFullCss, AnimateCss } from "@/lib/css-loaders";

const Testimonials5 = () => {
	const googleReviews = [
		{
			name: "Budi Santoso",
			initial: "B",
			bgColor: "#e1f5fe",
			textColor: "#0288d1",
			role: "Local Guide • 42 Ulasan",
			date: "1 minggu yang lalu",
			rating: 5,
			text: "Sangat puas service AC mobil di Bengkel Wiguna Margonda. Dinginnya awet kembali seperti baru dan pengerjaannya sangat transparan. Montirnya ramah dan menjelaskan masalah evaporator dengan detail tanpa asal tembak ganti part.",
		},
		{
			name: "Rian Hidayat",
			initial: "R",
			bgColor: "#efebe9",
			textColor: "#5d4037",
			role: "Pemilik Toyota Alphard",
			date: "2 minggu yang lalu",
			rating: 5,
			text: "Montir spesialis kaki-kaki mobil di Margonda paling recommended ya di sini. Alphard saya yang sempat bunyi gruduk-gruduk di bagian roda depan sekarang sudah sunyi senyap dan stabil setelah diganti bushing dan spooring balancing 3D.",
		},
		{
			name: "Siti Rahma",
			initial: "S",
			bgColor: "#fce4ec",
			textColor: "#c2185b",
			role: "Local Guide • 18 Ulasan",
			date: "3 minggu yang lalu",
			rating: 5,
			text: "Layanan ganti oli rutin dan engine flushing di sini cepat sekali. Harganya sangat transparan, ada rincian sebelum dikerjakan. Ruang tunggunya bersih ber-AC nyaman dan kopi gratisnya mantap. Pasti kembali servis rutin di sini.",
		},
		{
			name: "Agus Pratama",
			initial: "A",
			bgColor: "#e8f5e9",
			textColor: "#2e7d32",
			role: "Pemilik Honda Civic",
			date: "1 bulan yang lalu",
			rating: 5,
			text: "Spooring balancing 3D-nya luar biasa presisi. Setir mobil yang tadinya miring ke kiri dan lari-lari saat kecepatan tinggi sekarang lurus mantap kembali stabil. Harganya pun sangat bersahabat dibanding bengkel resmi.",
		},
		{
			name: "Dewi Lestari",
			initial: "D",
			bgColor: "#fff3e0",
			textColor: "#f57c00",
			role: "Local Guide • 89 Ulasan",
			date: "1 bulan yang lalu",
			rating: 5,
			text: "Suka banget sama kejujuran Bengkel Wiguna. Gak ada pemaksaan ganti suku cadang jika masih layak pakai. Semua dicek menyeluruh dan pengerjaannya rapi sekali. Benar-benar bengkel One Stop Service terbaik di Depok!",
		},
	];

	return (
		<section className="h5-testimonial section-gap section-gap-x" style={{ background: '#f9fbfd', position: 'relative' }}>
			<SwiperFullCss />
			<AnimateCss />
			<div className="container">
				{/* Header Section */}
				<div className="row justify-content-between align-items-center mb-5">
					<div className="col-lg-6">
						<div className="sec-heading style-3" style={{ textAlign: 'left', marginBottom: '0' }}>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#224297', fontWeight: '600' }}>
								<i className="tji-box"></i> ULASAN PELANGGAN
							</span>
							<h2 className="sec-title text-anim" style={{ marginTop: '10px' }}>
								Kata <span style={{ color: '#224297' }}>Pelanggan</span> Setia Kami
							</h2>
						</div>
					</div>
					
					{/* Google Reviews Badge Header */}
					<div className="col-lg-5 mt-4 mt-lg-0">
						<div 
							className="google-badge-header d-flex align-items-center gap-3 p-3 wow fadeInUp" 
							data-wow-delay=".4s"
							style={{ 
								background: '#ffffff', 
								borderRadius: '12px', 
								boxShadow: '0 8px 25px rgba(0,0,0,0.04)',
								border: '1px solid #eef2f6'
							}}
						>
							<div className="google-icon-wrapper" style={{ width: '48px', height: '48px', flexShrink: 0 }}>
								{/* G Logo representation */}
								<svg viewBox="0 0 24 24" width="100%" height="100%">
									<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
									<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
									<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
									<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
								</svg>
							</div>
							<div className="badge-text-area" style={{ flexGrow: 1 }}>
								<div className="rating-row d-flex align-items-center gap-2">
									<span style={{ fontSize: '20px', fontWeight: '800', color: '#1a3567' }}>4.9</span>
									<div className="stars-row" style={{ color: '#ffd900', fontSize: '14px', display: 'flex', gap: '2px' }}>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
										<i className="fa-solid fa-star"></i>
									</div>
								</div>
								<p style={{ margin: '0', fontSize: '13px', color: '#67787a', fontWeight: '500' }}>
									Berdasarkan 328 ulasan di Google Maps
								</p>
							</div>
							<Link 
								href="https://g.page/r/CQ2MI8cx0ox9EAE/review" 
								target="_blank"
								rel="noopener noreferrer"
								className="tj-btn-primary" 
								style={{ 
									padding: '8px 16px', 
									fontSize: '12px',
									background: '#ffd900',
									color: '#1a3567',
									border: 'none',
									borderRadius: '50px',
									fontWeight: '700',
									display: 'inline-flex',
									alignItems: 'center',
									gap: '5px'
								}}
							>
								<span>Tulis Ulasan</span>
								<i className="fa-solid fa-pen" style={{ fontSize: '10px' }}></i>
							</Link>
						</div>
					</div>
				</div>

				{/* Reviews Swiper Slider */}
				<div className="row">
					<div className="col-12">
						<div
							className="testimonial-wrapper h5-testimonial-wrapper wow fadeInUp"
							data-wow-delay=".5s"
							style={{ padding: '0 5px' }}
						>
							<Swiper
								slidesPerView={1.1}
								spaceBetween={20}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 4500,
									disableOnInteraction: false,
								}}
								pagination={{
									el: ".reviews-pagination",
									clickable: true,
								}}
								breakpoints={{
									768: {
										slidesPerView: 2,
										spaceBetween: 25,
									},
									1200: {
										slidesPerView: 3,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="swiper-container reviews-carousel-swiper"
							>
								{googleReviews.map((review, idx) => (
									<SwiperSlide key={idx}>
										<div 
											className="google-review-card" 
											style={{ 
												background: '#ffffff', 
												borderRadius: '16px', 
												padding: '30px', 
												boxShadow: '0 8px 30px rgba(0,0,0,0.03)',
												border: '1px solid #eef2f6',
												height: '100%',
												display: 'flex',
												flexDirection: 'column',
												position: 'relative',
												transition: 'all 0.3s ease'
											}}
										>
											{/* Top Row: Avatar & Name */}
											<div className="d-flex align-items-center gap-3 mb-3">
												<div 
													className="avatar-circle d-flex align-items-center justify-content-center" 
													style={{ 
														width: '46px', 
														height: '46px', 
														borderRadius: '50%', 
														backgroundColor: review.bgColor, 
														color: review.textColor,
														fontWeight: '700',
														fontSize: '18px'
													}}
												>
													{review.initial}
												</div>
												<div className="reviewer-info">
													<h4 style={{ fontSize: '16px', fontWeight: '700', color: '#1a3567', margin: '0 0 2px 0' }}>
														{review.name}
													</h4>
													<span style={{ fontSize: '11px', color: '#67787a', display: 'block' }}>
														{review.role}
													</span>
												</div>
												{/* Google G logo on each card */}
												<div className="google-icon" style={{ width: '18px', height: '18px', marginLeft: 'auto', opacity: 0.9 }}>
													<svg viewBox="0 0 24 24" width="100%" height="100%">
														<path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
														<path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
														<path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.85z" />
														<path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.85c.87-2.6 3.3-4.53 6.16-4.53z" />
													</svg>
												</div>
											</div>

											{/* Star ratings and Date */}
											<div className="d-flex align-items-center gap-2 mb-3">
												<div className="stars-row" style={{ color: '#ffd900', fontSize: '13px', display: 'flex', gap: '2px' }}>
													<i className="fa-solid fa-star"></i>
													<i className="fa-solid fa-star"></i>
													<i className="fa-solid fa-star"></i>
													<i className="fa-solid fa-star"></i>
													<i className="fa-solid fa-star"></i>
												</div>
												<span style={{ fontSize: '12px', color: '#b9bbbc' }}>•</span>
												<span style={{ fontSize: '12px', color: '#67787a' }}>{review.date}</span>
											</div>

											{/* Review Text */}
											<p 
												className="review-text" 
												style={{ 
													color: '#555555', 
													fontSize: '14px', 
													lineHeight: '1.6', 
													margin: '0', 
													flexGrow: '1',
													fontStyle: 'italic' 
												}}
											>
												"{review.text}"
											</p>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
							<div className="reviews-pagination text-center mt-5" style={{ display: 'flex', justifyContent: 'center', gap: '8px' }}></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonials5;
