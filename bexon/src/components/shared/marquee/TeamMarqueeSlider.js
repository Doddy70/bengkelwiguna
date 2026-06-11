"use client";

import getTeamMembers from "@/libs/getTeamMembers";
import Link from "next/link";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const TeamMarqueeSlider = ({ isRtl }) => {
	const showableItems = getTeamMembers()?.slice(isRtl ? 4 : 0, isRtl ? 8 : 4);
	const items = [...showableItems, ...showableItems];

	return (
		<Swiper
			slidesPerView="auto"
			spaceBetween={10}
			loop={true}
			freeMode={true}
			centeredSlides={true}
			allowTouchMove={false}
			speed={7000}
			autoplay={{
				delay: 1,
				disableOnInteraction: false,
			}}
			breakpoints={{
				992: {
					spaceBetween: 15,
				},
			}}
			dir={isRtl ? "rtl" : "ltr"}
			className="h7-team-marquee"
			modules={[Autoplay]}
		>
			{items?.length
				? items?.map(
						(
							{ id, name, desig, img2 = "/images/team/h7-team-1.webp" },
							idx
						) => (
							<SwiperSlide key={idx}>
								<div className="team-item">
									<div className="team-content">
										<h5 className="title">
											<Link href={`/team/${id}`}>{name}</Link>
										</h5>
										<span className="designation">{desig}</span>
									</div>
									<div className="team-img">
										<img src={img2} alt="team-single" />
									</div>
								</div>
							</SwiperSlide>
						)
				  )
				: ""}
		</Swiper>
	);
};

export default TeamMarqueeSlider;
