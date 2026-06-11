"use client";
import BlogCard2 from "@/components/shared/cards/BlogCard2";
import getBlogs from "@/libs/getBlogs";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const Blogs2 = () => {
	const blogs = getBlogs().slice(0, 4);
	return (
		<section className="tj-blog-section-2 section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								Read Blogs
							</span>
							<div className="heading-wrap-content">
								<div className="sec-heading style-2">
									<h2 className="sec-title text-anim">
										Strategies and <span>Insights.</span>
									</h2>
								</div>
								<div className="wow fadeInUp" data-wow-delay=".5s">
									<p className="desc">
										Developing personalized customer journeys to increase
										satisfaction and loyalty.
									</p>
								</div>
								<div
									className="slider-navigation d-none d-md-inline-flex wow fadeInUp"
									data-wow-delay=".7s"
								>
									<div className="slider-prev" role="button">
										<span className="anim-icon">
											<i className="tji-arrow-left"></i>
											<i className="tji-arrow-left"></i>
										</span>
									</div>
									<div className="slider-next" role="button">
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
				<div className="row">
					<div className="col-12">
						<div className="blog-wrapper wow fadeIn" data-wow-delay=".5s">
							<Swiper
								slidesPerView={1}
								spaceBetween={15}
								loop={true}
								speed={1500}
								loopAdditionalSlides={1}
								autoplay={{
									delay: 5000,
								}}
								pagination={{
									el: ".swiper-pagination-area",
									clickable: true,
								}}
								navigation={{ nextEl: ".slider-next", prevEl: ".slider-prev" }}
								breakpoints={{
									768: {
										spaceBetween: 20,
										slidesPerView: 1,
									},
									992: {
										slidesPerView: 2,
										spaceBetween: 20,
									},
									1200: {
										slidesPerView: 2,
										spaceBetween: 30,
									},
								}}
								modules={[Pagination, Autoplay, Navigation]}
								className="blog-slider"
							>
								{blogs?.length
									? blogs?.map((blog, idx) => (
											<SwiperSlide key={idx}>
												<BlogCard2 blog={blog} idx={idx} />
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

export default Blogs2;
