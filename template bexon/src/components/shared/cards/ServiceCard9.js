import Link from "next/link";

const ServiceCard9 = ({ service, idx, lastItemIdx }) => {
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
		<div className="service-item h8-service-item">
			<div className="service-icon">
				<i className={iconName}></i>
			</div>
			<h4 className="title">
				<Link href={`/services/${id}`}>{title}</Link>
			</h4>
			<div className="service-content">
				<p className="desc">
					Through a combination of data-driven insights and innovative
					approaches, we work closely with you to develop customized.
				</p>
				<ul className="list-items">
					<li>
						<i className="tji-list"></i>Expansion Strategies
					</li>
					<li>
						<i className="tji-list"></i>Operational Efficiency
					</li>
					<li>
						<i className="tji-list"></i>Competitive Edge
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ServiceCard9;
