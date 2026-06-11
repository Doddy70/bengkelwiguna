"use client";
import PortfolioCard8 from "@/components/shared/cards/PortfolioCard8";
import getPortfolio from "@/libs/getPortfolio";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios8 = () => {
	const showablePortfolio = getPortfolio()?.slice(0, 3);
	const portfolio = [...showablePortfolio, ...showablePortfolio];

	return (
		<section className="h8-project section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="sec-heading style-3 m-0">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
							</div>
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<h2 className="sec-title title-anim">
										Tailor Business Solutions for Corporates.
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
			<div
				className="container container-end-align  wow bounceInRight"
				data-wow-delay=".3s"
			>
				<div className="row">
					<div className="col-12">
						<div className="project-wrapper h7-project-wrapper h8-project-wrapper">
							<Swiper
								slidesPerView={1}
								spaceBetween={15}
								loop={true}
								speed={1500}
								autoplay={{
									delay: 6000,
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
										slidesPerView: 1.06,
									},
									768: {
										slidesPerView: 1.3,
									},
									992: {
										slidesPerView: 1.8,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Navigation, Autoplay]}
								className="h8-project-slider"
							>
								{portfolio?.length
									? portfolio?.map((portfolio, idx) => (
											<SwiperSlide key={idx}>
												<PortfolioCard8 portfolio={portfolio} />
											</SwiperSlide>
									  ))
									: ""}
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

export default Portfolios8;
