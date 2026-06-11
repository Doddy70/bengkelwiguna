"use client";
import Link from "next/link"
import Image from "next/image";

const ContactMenu = ({ isContactOpen, setIsContactOpen }) => {
	const handleClick = () => {
		setIsContactOpen(false);
	};

	return (
		<>
			<div
				className={`body-overlay  ${isContactOpen ? "opened" : ""}`}
				onClick={handleClick}
			></div>
			<div
				className={`tj-offcanvas-area d-none d-lg-block  ${
					isContactOpen ? "opened" : ""
				}`}
			>
				<div className="hamburger_bg"></div>
				<div className="hamburger_wrapper">
					<div className="hamburger_inner">
						<div className="hamburger_top d-flex align-items-center justify-content-between">
							<div className="hamburger_logo">
								<Link href="/">
									<Image 
										src="/images/logos/logo-panjang-bengkelwiguna.png" 
										alt="Bengkel Wiguna" 
										width={200}
										height={60}
										style={{ height: "auto", maxWidth: "200px", objectFit: "contain" }} 
										priority
									/>
								</Link>
							</div>
							<div className="hamburger_close">
								<button className="hamburger_close_btn" onClick={handleClick}>
									<i className="fa-thin fa-times"></i>
								</button>
							</div>
						</div>
						<div className="offcanvas-text">
							<p>
								Bengkel One Stop Service terpercaya di Depok. Menyediakan
								layanan lengkap: ban, oli, kaki-kaki, AC, aki, rem, spooring
								&amp; balancing untuk kendaraan Anda.
							</p>
						</div>
						<div className="hamburger-search-area">
							<h5 className="hamburger-title">Search Now!</h5>
							<div className="hamburger_search">
								<form method="get" action="/">
									<button type="submit">
										<i className="tji-search"></i>
									</button>
									<input
										type="search"
										autoComplete="off"
										name="s"
										placeholder="Search here..."
									/>
								</form>
							</div>
						</div>
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
									<a href="https://www.facebook.com/bengkelwiguna" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/bengkelwiguna" target="_blank">
										<i className="fa-brands fa-instagram"></i>
									</a>
								</li>
								<li>
									<a href="https://x.com/" target="_blank">
										<i className="fa-brands fa-x-twitter"></i>
									</a>
								</li>
								<li>
									<a href="https://www.linkedin.com/" target="_blank">
										<i className="fa-brands fa-linkedin-in"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ContactMenu;