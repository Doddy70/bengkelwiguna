import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard4 = ({ service, idx, lastItem }) => {
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
		<div className="service-item style-4">
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${id}`}>{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={"Learn More"}
					url={`/services/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard4;
