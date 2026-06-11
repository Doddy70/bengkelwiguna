import Link from "next/link";

const CtaSidebar = () => {
	return (
		<div className="feature-box">
			<div className="feature-content">
				<h2 className="title">Chat Minna</h2>
				<span>Service Online</span>
				<Link className="read-more feature-contact" href="https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)" target="_blank" rel="noopener noreferrer">
					<i className="tji-phone-3"></i>
					<span>Chat Minna</span>
				</Link>
			</div>
			<div className="feature-images">
				<img src="/images/service/banner-sidebar.jpg" alt="" />
			</div>
		</div>
	);
};

export default CtaSidebar;
