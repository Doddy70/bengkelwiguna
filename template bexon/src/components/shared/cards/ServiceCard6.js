import Link from "next/link";

const ServiceCard6 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc3,
		id,
		totalProject,

		svg,
		iconName,
	} = service || {};

	return (
		<div className="service-item style-6">
			<h4 className="title">
				<Link href={`/services/${id}`}>{title}</Link>
			</h4>
			<div className="service-icon">
				<i className="tji-service-1"></i>
			</div>
			<div className="service-content">
				<p className="desc">{desc3}</p>
				<Link className="text-btn" href={`/services/${id}`}>
					<span className="btn-text">
						<span>Learn More</span>
					</span>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default ServiceCard6;
