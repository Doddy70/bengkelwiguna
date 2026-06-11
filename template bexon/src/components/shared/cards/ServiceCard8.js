import Link from "next/link";

const ServiceCard8 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc3,
		id,
		totalProject,
		img4 = "/images/service/h6-service-1.webp",
		svg,
		iconName,
	} = service || {};

	return (
		<div
			className="service-item h7-service-item wow fadeInUp"
			data-wow-delay=".3s"
		>
			<div className="service-content-wrap">
				<div className="service-title">
					<div className="service-icon">
						<i className={iconName}></i>
					</div>
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
				</div>
				<div className="h7-service-action">
					<Link className="text-btn" href={`/services/${id}`}>
						<span className="btn-icon">
							<i className="tji-arrow-right-long"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default ServiceCard8;
