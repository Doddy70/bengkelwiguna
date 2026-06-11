import Link from "next/link";

const Footer7 = () => {
	return (
		<footer className="tj-footer-section footer-1 h7-footer section-gap-x">
			<div className="footer-main-area  h7-footer-main">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/logo.png" alt="Bengkel Wiguna" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Bengkel One Stop Service terpercaya di Depok. Layanan
										lengkap: ban, oli, kaki-kaki, AC, aki, rem, spooring
										&amp; balancing.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Layanan</h5>
								<ul>
									<li>
										<Link href="/services/penggantian-ban">Penggantian Ban</Link>
									</li>
									<li>
										<Link href="/services/penggantian-oli">Penggantian Oli</Link>
									</li>
									<li>
										<Link href="/services/kaki-kaki-mobil">Kaki-kaki Mobil</Link>
									</li>
									<li>
										<Link href="/services/service-ac">Service AC</Link>
									</li>
									<li>
										<Link href="/services/aki-dan-kelistrikan">Aki & Kelistrikan</Link>
									</li>
									<li>
										<Link href="/services/spooring-balancing">Spooring & Balancing</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Navigasi</h5>
								<ul>
									<li>
										<Link href="/tentang-wiguna">Tentang Kami</Link>
									</li>
									<li>
										<Link href="/services">Layanan</Link>
									</li>
									<li>
										<Link href="/promosi">Promo</Link>
									</li>
									<li>
										<Link href="/lokasi">Lokasi</Link>
									</li>
									<li>
										<Link href="/blog">Blog</Link>
									</li>
									<li>
										<Link href="/karir">Karir</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-6">
							<div
								className="footer-widget widget-subscribe wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h3 className="title">Hubungi Kami</h3>
								<div className="footer-contact">
									<Link href="tel:+6287817773888">
										<i className="tji-phone-2"></i> +62 878-1777-3888
									</Link>
									<Link href="mailto:info@bengkelwiguna.com">
										<i className="tji-envelop-2"></i> info@bengkelwiguna.com
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area h7-footer-copyright">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:+6287817773888">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+62 878-1777-3888</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@bengkelwiguna.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@bengkelwiguna.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/bengkelwiguna" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/bengkelwiguna" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://wa.me/6287817773888" target="_blank">
												<i className="fa-brands fa-whatsapp"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2025{" "}
										<Link href="https://bengkelwiguna.com">
											Bengkel Wiguna
										</Link>{" "}
										All right reserved
									</p>
								</div>
							</div>
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
		</footer>
	);
};

export default Footer7;