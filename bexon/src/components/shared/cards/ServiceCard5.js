import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const ServiceCard5 = ({ service, idx, lastItemIdx }) => {
	const {
		title,
		desc,
		id,
		totalProject,
		img3 = "/images/service/service-6.webp",
		svg,
		iconName,
	} = service || {};

	return (
		<div
			className={`service-item style-5 ${
				idx !== lastItemIdx ? "service-stack" : ""
			}`}
		>
			<div className="service-content-area">
				<div className="service-icon">
					<i className={iconName ? iconName : "tji-service-1"}></i>
				</div>
				<div className="service-content">
					<span className="no">{modifyNumber(idx + 1)}.</span>
					<h3 className="title">
						<Link href={`/services/${id}`}>{title}</Link>
					</h3>
					<p className="desc">{desc}</p>
					<ButtonPrimary text={"Learn More"} url={`/services/${id}`} />
				</div>
			</div>
			<div className="service-img">
				<img src={img3} alt="" />
			</div>
		</div>
	);
};

export default ServiceCard5;
