import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard11 = ({ service, idx, lastItemIdx }) => {
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
		<div className="service-item style-4">
			<h6 className="h10-service-sln">{modifyNumber(idx + 1)}.</h6>
			<div className="service-icon">
				<i className={iconName}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<p className="desc">
					Through a combination of data-driven insights and innovative
					approaches business.
				</p>
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

export default ServiceCard11;
