import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";

const History1 = () => {
	const history = [
		{
			title: "Visi Bengkel Wiguna",
			desc: "Menjadi bengkel mobil terpercaya di Indonesia dengan layanan transparan, profesional, dan mengutamakan kepuasan pelanggan.",
			images: [
				"/images/history/visi-1.jpg",
				"/images/history/visi-2.jpg",
			],
			year: "VISI",
		},
		{
			title: "Misi 1: Solusi Akurat & Transparan",
			desc: "Memberikan solusi akurat dan transparan untuk perawatan mobil.",
			images: [
				"/images/history/misi-1.jpg",
				"/images/history/misi-2.jpg",
			],
			year: "MISI",
		},
		{
			title: "Misi 2: Teknologi Diagnosis & Servis",
			desc: "Mengedepankan teknologi dalam proses diagnosis dan servis.",
			images: [
				"/images/history/misi-3.jpg",
				"/images/history/misi-4.jpg",
			],
			year: "MISI",
		},
		{
			title: "Misi 3: Tim Profesional",
			desc: "Membangun tim profesional dengan pelatihan berkelanjutan.",
			images: [
				"/images/history/misi-5.jpg",
				"/images/history/misi-6.jpg",
			],
			year: "MISI",
		},
		{
			title: "Misi 4: Pengalaman Menyenangkan",
			desc: "Menyediakan pengalaman pelanggan yang menyenangkan dan bebas kekhawatiran.",
			images: [
				"/images/history/misi-7.jpg",
				"/images/history/misi-8.jpg",
			],
			year: "MISI",
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
