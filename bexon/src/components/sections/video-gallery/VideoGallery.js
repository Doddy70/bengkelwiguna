/**
 * VideoGallery - Bengkel Wiguna
 * Galeri Video YouTube Playlist yang interaktif dan premium
 */
"use client";
import { useState } from "react";
import Link from "next/link";

const VideoGallery = () => {
	const playlist = [
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
			youtubeId: "dQw4w9WgXcQ", // Valid YouTube ID
			thumbnail: "/images/service/service-4.webp",
			category: "AC Mobil"
		},
		{
			id: 3,
			title: "Pentingnya Rutin Ganti Oli & Engine Flushing untuk Rawat Mesin",
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

	const [activeVideo, setActiveVideo] = useState(playlist[0]);

	return (
		<section className="h5-pricing section-gap" style={{ background: '#111827', position: 'relative' }}>
			{/* Decorative shapes with brand blue color */}
			<div style={{
				position: 'absolute',
				top: '-10%',
				left: '-10%',
				width: '400px',
				height: '400px',
				borderRadius: '50%',
				background: 'rgba(34, 66, 151, 0.15)',
				filter: 'blur(80px)',
				zIndex: '0',
				pointerEvents: 'none'
			}}></div>
			<div style={{
				position: 'absolute',
				bottom: '-10%',
				right: '-10%',
				width: '400px',
				height: '400px',
				borderRadius: '50%',
				background: 'rgba(255, 217, 0, 0.05)',
				filter: 'blur(80px)',
				zIndex: '0',
				pointerEvents: 'none'
			}}></div>

			<div className="container" style={{ position: 'relative', zIndex: '1' }}>
				{/* Section Header */}
				<div className="row mb-5">
					<div className="col-12 text-center">
						<div className="sec-heading style-3 sec-heading-centered" style={{ marginBottom: '0' }}>
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#ffd900', fontWeight: '600' }}>
								<i className="tji-box"></i> GALERI VIDEO WIGUNA
							</span>
							<h2 className="sec-title text-anim text-white" style={{ marginTop: '10px' }}>
								Edukasi & <span style={{ color: '#ffd900' }}>Tips Perawatan</span> Mobil
							</h2>
							<p className="desc mt-3" style={{ color: '#b9bbbc', maxWidth: '600px', marginInline: 'auto' }}>
								Simak video edukasi langsung dari tim ahli montir Bengkel Wiguna untuk memahami perawatan kendaraan Anda.
							</p>
						</div>
					</div>
				</div>

				{/* Dual Pane Interactive YouTube Player */}
				<div className="row g-4 align-items-stretch">
					{/* Left Column: Featured Active Player */}
					<div className="col-xl-8 col-lg-7">
						<div 
							className="main-player-card wow fadeInUp" 
							data-wow-delay=".4s"
							style={{
								background: '#1f2937',
								borderRadius: '16px',
								padding: '15px',
								boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
								border: '1px solid #374151',
								height: '100%',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							{/* Iframe player container */}
							<div 
								className="iframe-ratio-container" 
								style={{ 
									position: 'relative', 
									width: '100%', 
									paddingBottom: '56.25%', /* 16:9 Aspect Ratio */
									height: '0', 
									borderRadius: '12px',
									overflow: 'hidden',
									background: '#000000'
								}}
							>
								<iframe
									src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=0&rel=0`}
									title={activeVideo.title}
									frameBorder="0"
									allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
									allowFullScreen
									style={{
										position: 'absolute',
										top: '0',
										left: '0',
										width: '100%',
										height: '100%',
										border: 'none'
									}}
								></iframe>
							</div>

							{/* Video Meta Info */}
							<div className="video-meta-body" style={{ padding: '20px 10px 5px 10px', marginTop: 'auto' }}>
								<span 
									style={{ 
										background: 'rgba(255, 217, 0, 0.1)', 
										color: '#ffd900', 
										padding: '4px 10px', 
										borderRadius: '4px', 
										fontSize: '11px',
										fontWeight: '700',
										textTransform: 'uppercase',
										display: 'inline-block',
										marginBottom: '10px'
									}}
								>
									{activeVideo.category}
								</span>
								<h3 className="video-title text-white" style={{ fontSize: '22px', fontWeight: '700', lineHeight: '1.4', margin: '0' }}>
									{activeVideo.title}
								</h3>
								<div className="d-flex align-items-center gap-3 mt-3" style={{ fontSize: '13px', color: '#b9bbbc' }}>
									<span><i className="fa-solid fa-clock" style={{ marginRight: '5px' }}></i> Durasi: {activeVideo.duration}</span>
									<span>•</span>
									<span><i className="fa-solid fa-circle-check" style={{ marginRight: '5px', color: '#ffd900' }}></i> Diverifikasi oleh Bengkel Wiguna</span>
								</div>
							</div>
						</div>
					</div>

					{/* Right Column: Scrollable Playlist Sidebar */}
					<div className="col-xl-4 col-lg-5">
						<div 
							className="playlist-sidebar-card wow fadeInUp" 
							data-wow-delay=".6s"
							style={{
								background: '#1f2937',
								borderRadius: '16px',
								padding: '20px',
								boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
								border: '1px solid #374151',
								height: '100%',
								display: 'flex',
								flexDirection: 'column'
							}}
						>
							<div className="playlist-header d-flex align-items-center justify-content-between pb-3 mb-3" style={{ borderBottom: '1px solid #374151' }}>
								<h4 className="text-white" style={{ fontSize: '18px', fontWeight: '700', margin: '0' }}>
									<i className="fa-solid fa-list-ul" style={{ color: '#ffd900', marginRight: '10px' }}></i> Playlist Video
								</h4>
								<span style={{ fontSize: '12px', color: '#b9bbbc', background: '#374151', padding: '3px 8px', borderRadius: '50px', fontWeight: '600' }}>
									{playlist.length} Video
								</span>
							</div>

							{/* Playlist scrollable container */}
							<div 
								className="playlist-scroll-area" 
								style={{ 
									overflowY: 'auto', 
									flexGrow: 1, 
									maxHeight: '380px',
									paddingRight: '5px' 
								}}
							>
								<div className="d-flex flex-column gap-3">
									{playlist.map((video) => {
										const isActive = activeVideo.id === video.id;
										return (
											<button
												key={video.id}
												onClick={() => setActiveVideo(video)}
												className="playlist-item-btn"
												style={{
													background: isActive ? 'rgba(34, 66, 151, 0.3)' : 'transparent',
													border: isActive ? '1px solid #224297' : '1px solid transparent',
													borderRadius: '10px',
													padding: '10px',
													textAlign: 'left',
													width: '100%',
													display: 'flex',
													gap: '12px',
													alignItems: 'center',
													transition: 'all 0.3s ease',
													cursor: 'pointer'
												}}
											>
												{/* Video Number or Play Icon */}
												<div className="play-indicator" style={{ flexShrink: 0 }}>
													{isActive ? (
														<i className="fa-solid fa-play" style={{ color: '#ffd900', fontSize: '14px' }}></i>
													) : (
														<span style={{ color: '#b9bbbc', fontSize: '13px', fontWeight: '600' }}>0{video.id}</span>
													)}
												</div>

												{/* Thumbnail Representation */}
												<div 
													className="thumbnail-wrap" 
													style={{ 
														width: '80px', 
														height: '50px', 
														borderRadius: '6px', 
														overflow: 'hidden', 
														position: 'relative',
														flexShrink: 0,
														background: '#000000'
													}}
												>
													<img 
														src={video.thumbnail} 
														alt="" 
														style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: isActive ? 0.8 : 0.6 }} 
													/>
													<span 
														style={{ 
															position: 'absolute', 
															bottom: '3px', 
															right: '3px', 
															background: 'rgba(0,0,0,0.8)', 
															color: '#fff', 
															fontSize: '9px', 
															padding: '1px 3px', 
															borderRadius: '2px',
															fontWeight: '600'
														}}
													>
														{video.duration}
													</span>
												</div>

												{/* Title and duration */}
												<div className="video-text-details" style={{ flexGrow: 1, minWidth: '0' }}>
													<h5 
														style={{ 
															fontSize: '13px', 
															fontWeight: '600', 
															color: isActive ? '#ffd900' : '#ffffff', 
															margin: '0 0 4px 0',
															lineHeight: '1.4',
															whiteSpace: 'nowrap',
															overflow: 'hidden',
															textOverflow: 'ellipsis'
														}}
													>
														{video.title}
													</h5>
													<span style={{ fontSize: '11px', color: '#b9bbbc' }}>
														{video.category}
													</span>
												</div>
											</button>
										);
									})}
								</div>
							</div>

							{/* Call to action at bottom */}
							<div className="playlist-footer pt-3 mt-3" style={{ borderTop: '1px solid #374151', textAlign: 'center' }}>
								<Link 
									href="https://www.youtube.com/@BengkelWiguna" 
									target="_blank"
									rel="noopener noreferrer"
									className="tj-btn-primary w-100"
									style={{
										background: 'rgba(255,0,0,0.15)',
										border: '1px solid rgba(255,0,0,0.4)',
										color: '#ff4d4d',
										borderRadius: '50px',
										padding: '10px 20px',
										fontSize: '13px',
										fontWeight: '700',
										display: 'inline-flex',
										alignItems: 'center',
										justifyContent: 'center',
										gap: '8px'
									}}
								>
									<i className="fa-brands fa-youtube" style={{ fontSize: '16px' }}></i>
									<span>Kunjungi YouTube Wiguna</span>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default VideoGallery;
