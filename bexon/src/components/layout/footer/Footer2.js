import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import MarqueeSlider1 from "@/components/shared/marquee/MarqueeSlider1";
import Link from "next/link";

const Footer2 = () => {
	return (
		<footer className="tj-footer-section footer-2 section-gap-x">
			<div className="footer-top">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div
								className="footer-subscribe wow fadeInUp"
								data-wow-delay=".3s"
							>
								<div className="subscribe-logo">
									<img src="/images/logos/logo.png" alt="Bengkel Wiguna" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-1 wow fadeInUp"
								data-wow-delay=".1s"
							>
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
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-2 widget-nav-menu wow fadeInUp"
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
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget footer-col-3 widget-nav-menu wow fadeInUp"
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
						<div className="col-xl-3 col-md-6">
							<div
								className="footer-widget widget-contact wow fadeInUp"
								data-wow-delay=".7s"
							>
								<h5 className="title">Kantor Kami</h5>
								<div className="footer-contact-info">
									<div className="contact-item">
										<span>Depok, Jawa Barat, Indonesia</span>
									</div>
									<div className="contact-item">
										<Link href="tel:+6287817773888">P: +62 878-1777-3888</Link>
										<Link href="mailto:info@bengkelwiguna.com">
											E: info@bengkelwiguna.com
										</Link>
									</div>
									<div className="contact-item">
										<span>
											<i className="tji-clock"></i> Senin-Sabtu 08:00-17:00
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area-2">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="copyright-text">
									<p>
										&copy; 2025{" "}
										<Link href="https://bengkelwiguna.com">
											Bengkel Wiguna
										</Link>{" "}
										All right reserved
									</p>
								</div>
								<div className="social-links style-3">
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
								<div className="copyright-menu">
									<ul>
										<li>
											<Link href="/tentang-wiguna">Privasi</Link>
										</li>
										<li>
											<Link href="/terms-and-conditions">
												Syarat & Ketentuan
											</Link>
										</li>
									</ul>
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

export default Footer2;