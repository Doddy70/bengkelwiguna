import { getHomepageSettings } from "@/lib/wordpress";

const Cta = async () => {
	const settings = await getHomepageSettings();
	const cta = settings?.cta || {};

	const title = cta.title || "Let’s Build Future Together.";
	const waUrl = cta.whatsappUrl || "https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)";
	const bgImage = cta.bgImage || "/images/cta/cta-bg.jpg";
	return (
		<section className="tj-cta-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="cta-area">
							<div className="cta-content">
								<h2 className="title title-anim">
									{title}
								</h2>
								<div className="cta-btn wow fadeInUp" data-wow-delay=".6s">
									<a
										href={waUrl}
										target="_blank"
										rel="noopener noreferrer"
										className="tj-primary-btn btn-dark"
									>
										<span className="btn-text">
											<span>Tanya Seputar Servis</span>
										</span>
										<span className="btn-icon">
											<i className="tji-arrow-right-long"></i>
										</span>
									</a>
								</div>
							</div>
							<div className="cta-img" style={{ height: "100%", minHeight: "338px" }}>
								<img 
									src={bgImage} 
									alt="Bengkel Wiguna CTA" 
									style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "0 10px 10px 0" }} 
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Cta;
