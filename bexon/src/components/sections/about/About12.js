import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";

const About12 = () => {
	return (
		<section className="tj-history section-gap">
			<div className="container">
				<div className="row rg-30 justify-content-between">
					<div className="col-xl-5">
						<div className="sec-heading mb-0">
							<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
								<i className="tji-box"></i> Latar Belakang Kami
							</span>
							<h2 className="sec-title text-anim">
								Selamat Datang Di{" "}
								<span>Bengkel Wiguna.</span>
							</h2>
						</div>
					</div>
					<div className="col-xl-5">
						<div className="desc wow fadeInUp" data-wow-delay="0.3s">
							<p>
								Bengkel Wiguna adalah bengkel One Stop Service terpercaya yang telah menjadi bagian dari perjalanan masyarakat Depok dan sekitarnya dalam merawat kendaraan mereka sejak lebih dari dua dekade lalu.
							</p>
							<p>
								Kami hadir dengan komitmen kuat terhadap kualitas layanan, kejujuran, dan kepuasan pelanggan, menjadikan Bengkel Wiguna sebagai pilihan utama dalam segala kebutuhan perawatan dan perbaikan kendaraan Anda—mulai dari servis ringan, perbaikan mesin, pengecekan sistem kelistrikan, spooring-balancing, hingga detailing dan body repair.
							</p>
						</div>
						<div
							className="history-btn mt-30 wow fadeInUp"
							data-wow-delay="0.5s"
						>
							<ButtonPrimary text={"Hubungi Kami"} url={"https://wa.me/6287817773888"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About12;
