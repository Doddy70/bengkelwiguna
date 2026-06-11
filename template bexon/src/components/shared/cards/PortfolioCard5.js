import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const PortfolioCard5 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img5 = "/images/project/h5-project-1.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="h5-project-item-wrapper tj-scroll-slider-item">
			<div className="project-item h4-project-item  h5-project-item">
				<div className="project-img">
					<img src={img5} alt="Image" />
				</div>
				<div className="project-content">
					<span className="categories">
						<Link href={`/portfolios/${id}`}>{category}</Link>
					</span>
					<div className="project-text">
						<h3 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h3>
					</div>
					<p className="desc">
						Through a combination of data-driven insights and innovative
						approaches, we work closely with you to develop customized.
					</p>
					<ButtonPrimary text={"Learn More"} url={""} />
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard5;
