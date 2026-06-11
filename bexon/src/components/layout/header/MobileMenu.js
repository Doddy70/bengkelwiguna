import Link from "next/link";
import Image from "next/image";
import MobileNavbar from "./MobileNavbar";

const MobileMenu = ({ isMobileMenuOpen, setIsMobileMenuOpen, navItems = null }) => {
	const handleClick = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isMobileMenuOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`hamburger-area d-lg-none ${
					isMobileMenuOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/" className="mobile_logo">
									<Image
									src="/images/logos/logo-panjang-bengkelwiguna.png"
									alt="Bengkel Wiguna"
									width={200}
									height={50}
									sizes="200px"
									style={{ height: "auto", maxWidth: "200px", objectFit: "contain" }}
								/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<MobileNavbar navItems={navItems} />
						<div className="hamburger-infos">
							<h5 className="hamburger-title">Contact Info</h5>
							<div className="contact-info">
								<div className="contact-item">
									<span className="subtitle">Phone</span>
									<Link className="contact-link" href="tel:+6287817773888">
										+62 878-1777-3888
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:info@bengkelwiguna.com">
										info@bengkelwiguna.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
										Depok, Jawa Barat, Indonesia
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="hamburger-socials">
						<h5 className="hamburger-title">Follow Us</h5>
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
									<Link href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</Link>
								</li>
								<li>
									<Link href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MobileMenu;