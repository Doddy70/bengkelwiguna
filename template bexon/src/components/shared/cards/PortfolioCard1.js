import Link from "next/link";

const PortfolioCard1 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img = "/images/project/project-1.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div className="project-item tj-arrange-item">
			<div
				className="project-img"
				style={{ backgroundImage: `url(${img})` }}
			></div>
			<div className="project-content">
				<span className="categories">
					<Link href={`/portfolios/${id}`}>{category}</Link>
				</span>
				<div className="project-text">
					<h4 className="title">
						<Link href={`/portfolios/${id}`}>{title}</Link>
					</h4>
					<Link className="project-btn" href={`/portfolios/${id}`}>
						<i className="tji-arrow-right-long"></i>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard1;
