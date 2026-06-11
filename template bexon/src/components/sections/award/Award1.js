"use client";

import modifyNumber from "@/libs/modifyNumber";
import { useEffect, useRef, useState } from "react";

const Award1 = () => {
	const items = [
		{
			id: 1,
			title: (
				<>
					Inspire <br /> Growth Award
				</>
			),
			img: "/images/award/award-1.png",
			img2: "/images/award/award-1-white.png",
			result: "Winner",
			year: "2010",
		},
		{
			id: 2,
			title: (
				<>
					Pinnacle <br /> Excellence Award
				</>
			),
			img: "/images/award/award-2.png",
			img2: "/images/award/award-2-white.png",
			result: "Nominee",
			year: "2016",
		},
		{
			id: 3,
			title: (
				<>
					Mastermind <br /> Excellence Award
				</>
			),
			img: "/images/award/award-3.png",
			img2: "/images/award/award-3-white.png",
			result: "Distinguished",
			year: "2020",
		},
		{
			id: 4,
			title: (
				<>
					Game <br /> Changer Award
				</>
			),
			img: "/images/award/award-4.png",
			img2: "/images/award/award-4-white.png",
			result: "Champion",
			year: "2025",
		},
	];

	const wrapperRef = useRef(null);
	const bgRef = useRef(null);
	const itemRefs = useRef([]);
	const [currentIndex, setCurrentIndex] = useState(0);

	// Move active background
	const moveActiveBg = index => {
		const wrapper = wrapperRef.current;
		const bg = bgRef.current;
		const item = itemRefs.current[index];

		if (!wrapper || !bg || !item) return;

		const itemRect = item.getBoundingClientRect();
		const wrapperRect = wrapper.getBoundingClientRect();

		const top = itemRect.top - wrapperRect.top;
		const height = itemRect.height;

		bg.style.top = `${top}px`;
		bg.style.height = `${height}px`;
	};

	useEffect(() => {
		moveActiveBg(currentIndex);
	}, [currentIndex]);

	return (
		<section className="tj-award section-gap">
			<div className="container">
				{/* Section Header */}
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-2 style-6 ">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Our Achievements
							</span>
							<h2 className="sec-title title-anim">
								Our pursuit of perfection has recognized
							</h2>
						</div>
					</div>
				</div>

				{/* Award Items */}
				<div className="row">
					<div className="col-12">
						<div
							className="tj-award-wrapper tj-active-bg-wrapper"
							ref={wrapperRef}
							onMouseLeave={() => moveActiveBg(currentIndex)}
						>
							{items.map((item, idx) => (
								<div
									key={idx}
									className={`tj-award-item tj-active-bg-item wow fadeInUp ${
										currentIndex === idx ? "current" : ""
									}`}
									data-wow-delay=".3s"
									ref={el => (itemRefs.current[idx] = el)}
									onMouseEnter={() => moveActiveBg(idx)}
									onClick={() => setCurrentIndex(idx)}
								>
									<div className="tj-award-item-inner">
										<div className="row align-items-center justify-content-between">
											<div className="col-md-4 tj-award-img-wrapper">
												<h6 className="tj-award-index">
													{modifyNumber(idx + 1)}.
												</h6>
												<div className="tj-award-img">
													<img src={item.img} alt="" />
													<img src={item.img2} alt="" />
												</div>
											</div>

											<div className="col-md-4 col-lg-3 tj-award-title-wrapper">
												<h5 className="tj-award-title">{item.title}</h5>
											</div>

											<div className="col-md-4 tj-award-date-wrapper">
												<h6 className="tj-award-result">{item.result}</h6>
												<h6 className="tj-award-date">{item.year}</h6>
											</div>
										</div>
									</div>
								</div>
							))}

							{/* Background highlight */}
							<span className="active-bg" ref={bgRef}></span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Award1;
