"use client";
import PortfolioCard9 from "@/components/shared/cards/PortfolioCard9";
import getPortfolio from "@/libs/getPortfolio";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Portfolios9 = () => {
	const showablePortfolio = getPortfolio()?.slice(0, 4);
	const portfolio = [...showablePortfolio, ...showablePortfolio];

	return (
		<section className="tj-project-section-3 h9-project section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<div className="heading-wrap-content">
								<div className="sec-heading style-8">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										OUR PORTFOLIO
									</span>
									<h2 className="sec-title title-anim">
										Empowering Business with Expertise.
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
									680: {
										slidesPerView: 1.5,
										spaceBetween: 20,
										centeredSlides: true,
									},
									992: {
										slidesPerView: 2.3,
										spaceBetween: 20,
										centeredSlides: true,
									},
									1200: {
										slidesPerView: 2.5,
										spaceBetween: 20,
										centeredSlides: true,
									},
									1400: {
										slidesPerView: 2.5,
										spaceBetween: 20,
										centeredSlides: true,
									},
									1500: {
										slidesPerView: 4,
										spaceBetween: 30,
										centeredSlides: true,
									},
								}}
								modules={[Pagination, Navigation, Autoplay]}
								className="h9-project-slider"
							>
								{portfolio?.length
									? portfolio?.map((portfolio, idx) => (
											<SwiperSlide key={idx}>
												<PortfolioCard9 portfolio={portfolio} />
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

export default Portfolios9;
