import Link from "next/link";

const PortfolioCard8 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img4 = "/images/project/project-4.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item h4-project-item">
			<div className="project-img">
				<img src={img4} alt="Image" />
			</div>
			<div className="project-content">
				<div className="project-text">
					<div>
						<h3 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h3>
						<span className="categories">
							<Link href={`/portfolios/${id}`}>{category}</Link>
						</span>
					</div>
					<Link className="tji-icon-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-long"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard8;
