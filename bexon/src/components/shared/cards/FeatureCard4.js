import Link from "next/link";

const FeatureCard4 = ({ feature, type, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div className="col-lg-4 h7-choose-item">
			<div className="choose-box h6-choose-box h7-choose-box">
				<div className="choose-content">
					<div className="choose-icon">
						<i className={icon}></i>
					</div>
					<h4 className="title">{title}</h4>
					<p className="desc">{desc}</p>
					<Link className="text-btn" href="/about">
						<span className="btn-text">
							<span>Read More</span>
						</span>
						<span className="btn-icon">
							<i className="tji-arrow-right-long"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FeatureCard4;
