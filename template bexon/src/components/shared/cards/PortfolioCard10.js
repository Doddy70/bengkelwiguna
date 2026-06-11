import Link from "next/link";

const PortfolioCard10 = ({ portfolio }) => {
	const {
		title = "Event Management Platform",
		img8 = "/images/project/h10-project-1.webp",
		shortDesc,
		id,
		dataFilter,
		category = "Connect",
	} = portfolio ? portfolio : {};
	return (
		<div
			className={`project-item h4-project-item portfolio-filter-item ${dataFilter}`}
		>
			<div className="project-img" data-cursor-text="View Project">
				<Link href={`/portfolios/${id}`}>
					<img src={img8} alt="Image" />
				</Link>
			</div>
			<div className="project-content">
				<div className="project-text">
					<div>
						<h4 className="title">
							<Link href={`/portfolios/${id}`}>{title}</Link>
						</h4>
						<span className="categories">
							<Link href={`/portfolios/${id}`}>{category}</Link>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard10;
