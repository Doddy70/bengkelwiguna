import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard4 = ({ service, idx, lastItem }) => {
	const {
		totalProject,
		img2 = "/images/service/service-2.webp",
		svg,
		iconName,
	} = service || {};

	// Handle both Static JSON and WordPress API data formats
	const title = service?.title?.rendered || service?.title || "";
	const desc = service?.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') || service?.desc || "";
	const slug = service?.slug || service?.id;

	return (
		<div className="service-item style-4">
			<div className="service-icon">
				<i className={iconName ? iconName : "tji-service-1"}></i>
			</div>
			<div className="service-content">
				<h4 className="title">
					<Link href={`/services/${slug}`}>{title}</Link>
				</h4>
				<p className="desc">{desc}</p>
				<ButtonPrimary
					text={"Learn More"}
					url={`/services/${slug}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default ServiceCard4;
