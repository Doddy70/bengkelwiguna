import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "Founding and Early Years",
			desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
			images: [
				"/images/history/history-1.webp",
				"/images/history/history-2.webp",
			],
			year: 2008,
		},
		{
			title: "Expansion and Growth",
			desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
			images: [
				"/images/history/history-3.webp",
				"/images/history/history-4.webp",
			],
			year: 2012,
		},
		{
			title: "Innovation and Industry Leadership",
			desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
			images: [
				"/images/history/history-5.webp",
				"/images/history/history-6.webp",
			],
			year: 2016,
		},
		{
			title: "Global Expansion and Diversification",
			desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
			images: [
				"/images/history/history-7.webp",
				"/images/history/history-8.webp",
			],
			year: 2020,
		},
		{
			title: "Looking Ahead",
			desc: "Our mission is to empowers businesses off all size to thrive in an businesses ever changing marketplace. We are committed to the delivering exceptional in the value.",
			images: [
				"/images/history/history-9.webp",
				"/images/history/history-1.webp",
			],
			year: 2024,
		},
	];
	return (
		<section className="tj-history-area section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="timeline">
							{history?.length
								? history?.map(({ title, desc, images, year }, idx) => (
										<div
											key={idx}
											className="timeline-inner wow fadeInUp"
											data-wow-delay={`0.${idx + 1 + idx}s`}
										>
											<div className="date">{year}</div>
											<div className="content">
												<div className="top">
													<span>{modifyNumber(idx + 1)}.</span>
													<h4 className="title">{title}</h4>
													<p>{desc}</p>
												</div>
												<div className="bottom">
													{images?.length
														? images?.map((img, idx) => (
																<Image
																	key={idx + 100}
																	src={
																		img ? img : "/images/history/history-1.webp"
																	}
																	alt="history"
																	width={241}
																	height={204}
																	style={{ height: "auto" }}
																/>
														  ))
														: ""}
												</div>
											</div>
										</div>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default History1;
