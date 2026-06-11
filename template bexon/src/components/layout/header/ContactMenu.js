"use client";
import Link from "next/link";

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
								<Link href="/" className="mobile_logo">
									<img src="/images/logos/logo-2.webp" alt="Logo" />
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
								Developing personalize our customer journeys to increase
								satisfaction & loyalty of our expansion recognized by industry
								leaders.
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
									<Link className="contact-link" href="tel:10095447818">
										+1 (009) 544-7818
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Email</span>
									<Link className="contact-link" href="mailto:info@bexon.com">
										info@bexon.com
									</Link>
								</div>
								<div className="contact-item">
									<span className="subtitle">Location</span>
									<span className="contact-link">
										993 Renner Burg, West Rond, MT 94251-030
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
									<a href="https://www.facebook.com/" target="_blank">
										<i className="fa-brands fa-facebook-f"></i>
									</a>
								</li>
								<li>
									<a href="https://www.instagram.com/" target="_blank">
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
