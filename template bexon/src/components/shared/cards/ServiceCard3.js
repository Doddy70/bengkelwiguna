import Link from "next/link";

const ServiceCard3 = ({ service, idx, lastItem }) => {
	const {
		title,
		desc,
		id,
		totalProject,
		img2 = "/images/service/service-2.webp",
		svg,
		iconName,
	} = service || {};

	return (
		<div className="service-item style-3 wow fadeInUp" data-wow-delay=".3s">
			<div className="service-content-wrap">
				<div className="service-title">
					<div className="service-icon">
						<i className={iconName ? iconName : "tji-service-1"}></i>
					</div>
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="service-content">
					<p className="desc">{desc}</p>
				</div>
			</div>
			<div
				className="service-reveal-bg"
				style={{ backgroundImage: `url('${img2}')` }}
			></div>
		</div>
	);
};

export default ServiceCard3;
