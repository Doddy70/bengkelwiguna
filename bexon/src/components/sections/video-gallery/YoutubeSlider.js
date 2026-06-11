"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PopupVideo from "@/components/shared/popup-video/PopupVideo";
import { SwiperFullCss, AnimateCss } from "@/lib/css-loaders";

const fallbackPlaylist = [
	{
		id: 1,
		title: "Penyebab & Solusi Kaki-Kaki Mobil Bunyi Gruduk | Bengkel Wiguna",
		duration: "12:45",
		youtubeId: "kYJv8Pj328Q",
		thumbnail: "/images/service/service-3.webp",
		category: "Kaki-Kaki Mobil"
	},
	{
		id: 2,
		title: "Mengapa AC Mobil Tiba-Tiba Tidak Dingin? Ini Penjelasannya!",
		duration: "10:15",
		youtubeId: "dQw4w9WgXcQ",
		thumbnail: "/images/service/service-4.webp",
		category: "AC Mobil"
	},
	{
		id: 3,
		title: "Pentingnya Ganti Oli & Engine Flushing untuk Rawat Mesin",
		duration: "08:30",
		youtubeId: "8yL02_G09-s",
		thumbnail: "/images/service/service-2.webp",
		category: "Mesin & Ganti Oli"
	},
	{
		id: 4,
		title: "Proses Spooring & Balancing Roda Mobil Presisi Tinggi 3D",
		duration: "06:50",
		youtubeId: "mIPd8U3Lh4k",
		thumbnail: "/images/service/service-7.webp",
		category: "Spooring & Balancing"
	}
];

const YoutubeSlider = () => {
	const [videos, setVideos] = useState([...fallbackPlaylist, ...fallbackPlaylist]);

	useEffect(() => {
		const loadVideos = async () => {
			try {
				const response = await fetch("/api/youtube");
				const data = await response.json();
				if (data && data.success && data.videos && data.videos.length > 0) {
					// Duplicate playlist items for smooth swiper loop behaviour
					setVideos([...data.videos, ...data.videos]);
				}
			} catch (error) {
				console.error("Failed to load dynamic YouTube videos:", error);
			}
		};
		loadVideos();
	}, []);

	return (
		<section className="tj-project-section-3 h9-project section-gap section-gap-x youtube-playlist-section">
			<SwiperFullCss />
			<AnimateCss />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="heading-wrap-content">
								<div className="sec-heading style-8">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										YOUTUBE PLAYLIST
									</span>
									<h2 className="sec-title title-anim">
										Edukasi & Tips Perawatan Mobil
									</h2>
								</div>
								<div
									className="slider-navigation d-none d-md-inline-flex wow fadeInUp"
									data-wow-delay=".5s"
								>
									<div className="slider-prev">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next">
										<span className="anim-icon">
											<i className="tji-arrow-right"></i>
											<i className="tji-arrow-right"></i>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div
							className="project-wrapper h9-project-wrapper wow fadeInUp"
							data-wow-delay=".4s"
						>
							<Swiper
								slidesPerView={1}
								spaceBetween={15}
								loop={true}
								centeredSlides={false}
								speed={1500}
								autoplay={{
									delay: 6000,
									disableOnInteraction: false,
								}}
								navigation={{
									nextEl: ".slider-next",
									prevEl: ".slider-prev",
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.3,
										centeredSlides: true,
									},
									768: {
										slidesPerView: 1.8,
										spaceBetween: 20,
										centeredSlides: true,
									},
									992: {
										slidesPerView: 2.3,
										spaceBetween: 20,
										centeredSlides: true,
									},
									1200: {
										slidesPerView: 2.8,
										spaceBetween: 24,
										centeredSlides: true,
									},
									1400: {
										slidesPerView: 3.2,
										spaceBetween: 24,
										centeredSlides: true,
									},
									1600: {
										slidesPerView: 4,
										spaceBetween: 30,
										centeredSlides: true,
									},
								}}
								modules={[Pagination, Navigation, Autoplay]}
								className="h9-project-slider"
							>
								{videos.map((video, idx) => (
									<SwiperSlide key={idx}>
										<PopupVideo>
											<a 
												className="project-item glightbox" 
												href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
												style={{ display: 'block', cursor: 'pointer', position: 'relative' }}
											>
												<div className="project-img">
													<img src={video.thumbnail} alt={video.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
													
													{/* Premium Video Play Button Overlay */}
													<div 
														className="video-play-overlay-btn" 
														style={{
															position: 'absolute',
															top: '50%',
															left: '50%',
															transform: 'translate(-50%, -50%)',
															width: '64px',
															height: '64px',
															borderRadius: '50%',
															backgroundColor: 'rgba(34, 66, 151, 0.85)',
															border: '2px solid #ffd900',
															display: 'flex',
															alignItems: 'center',
															justifyContent: 'center',
															color: '#ffffff',
															fontSize: '20px',
															zIndex: '2',
															boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
															transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
															pointerEvents: 'none'
														}}
													>
														<i className="fa-solid fa-play" style={{ marginLeft: '4px' }}></i>
													</div>
												</div>
												<div className="project-content">
													<span className="categories">
														<span style={{ fontSize: '13px', fontWeight: '600', color: '#224297' }}>{video.category}</span>
													</span>
													<div className="project-text">
														<h4 className="title" style={{ fontSize: '18px', fontWeight: '700', margin: '0', color: '#1a1a2e', lineHeight: '1.4' }}>
															{video.title}
														</h4>
													</div>
												</div>
											</a>
										</PopupVideo>
									</SwiperSlide>
								))}
								<div className="swiper-pagination-area"></div>
							</Swiper>
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

export default YoutubeSlider;
