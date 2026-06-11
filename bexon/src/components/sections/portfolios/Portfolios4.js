"use client";
import PortfolioCard4 from "@/components/shared/cards/PortfolioCard4";
import getPortfolio from "@/libs/getPortfolio";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios4 = () => {
	const portfolioTShow = getPortfolio()?.slice(0, 3);
	const portfolio = [...portfolioTShow, ...portfolioTShow];

	return (
		<section className="tj-project-section-4 section-gap">
			<div className="container-fluid">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-4 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Proud Projects
							</span>
							<h2 className="sec-title title-anim">
								Breaking Boundaries, Building Dreams.
							</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper wow fadeInUp" data-wow-delay=".5s">
							<Swiper
								slidesPerView={1.2}
								spaceBetween={15}
								loop={true}
								speed={1500}
								centeredSlides={false}
								autoplay={{
									delay: 6000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								breakpoints={{
									576: {
										slidesPerView: 1.5,
										spaceBetween: 20,
									},
									768: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									992: {
										slidesPerView: 2.4,
										spaceBetween: 30,
									},
									1200: {
										slidesPerView: 3,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay]}
								className="project-slider-3"
							>
								{portfolio?.length
									? portfolio?.map((portfolio, idx) => (
											<SwiperSlide key={idx}>
												<PortfolioCard4 portfolio={portfolio} />
											</SwiperSlide>
									  ))
									: ""}
								<div className="swiper-pagination-area"></div>
							</Swiper>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios4;
