"use client";
/**
 * SpesialisSliderSection - Bengkel Wiguna
 * Section untuk menampilkan layanan spesialis dengan slider
 */

import SpesialisSlider from "@/components/shared/services/SpesialisSlider";
import { SwiperCss, AnimateCss } from "@/lib/css-loaders";

const SpesialisSliderSection = ({ data = [] }) => {
	// Fallback dummy data jika API gagal atau plugin belum diupdate
	const displayData = data && data.length > 0 ? data : [
		{ id: 1, title: 'Semi Overhaul dengan Stinger Engine Flush', slug: 'semi-overhaul', featured_img: '/images/service/h6-service-1.webp' },
		{ id: 2, title: 'Cek Kaki-Kaki dengan Kyoto Shaking Machine', slug: 'cek-kaki-kaki', featured_img: '/images/service/h6-service-1.webp' },
		{ id: 3, title: 'Reset AC dengan Kyoto Flushin', slug: 'reset-ac', featured_img: '/images/service/h6-service-1.webp' }
	];

	return (
		<>
			{/* OPTIMIZATION: Load CSS only when this component renders */}
			<SwiperCss />
			<AnimateCss />

			<section className="h6-service section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading sec-heading-centered style-2 style-6">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>OUR SOLUTIONS
								</span>
								<h2 className="sec-title title-anim">
									Layanan Spesialis & Solusi Terbaik
								</h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-12">
							<SpesialisSlider data={displayData} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SpesialisSliderSection;