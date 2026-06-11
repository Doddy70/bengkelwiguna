import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const ServiceCard7 = ({ service, idx, lastItemIdx }) => {
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
		<div className="h6-service-item">
			<div className="h6-service-thumb">
				<Link href={`/services/${id}`}>
					<img src={img4} alt="" />
				</Link>
			</div>
			<div className="h6-service-content">
				<h5 className="h6-service-index">{modifyNumber(id)}.</h5>
				<div className="h6-service-title-wrap">
					<h4 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h4>
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

export default ServiceCard7;
