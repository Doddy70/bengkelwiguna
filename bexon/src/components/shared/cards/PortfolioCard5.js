import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const PortfolioCard5 = ({ portfolio }) => {
	// Parse WP Data or fallback to static mapping
	const title = portfolio?.title?.rendered || portfolio?.title || "Promo Spesial";
	const id = portfolio?.slug || portfolio?.id || "#";
	const img5 = portfolio?._embedded?.['wp:featuredmedia']?.[0]?.source_url || portfolio?.img5 || "/images/project/h5-project-1.webp";
	const category = portfolio?.type === 'promosi' ? "Promosi" : (portfolio?.category || "Promo");
	const excerpt = portfolio?.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') || portfolio?.shortDesc || "Jangan lewatkan penawaran spesial kami bulan ini.";

	return (
		<div className="h5-project-item-wrapper tj-scroll-slider-item">
			<div className="project-item h4-project-item  h5-project-item">
				<div className="project-img">
					<img src={img5} alt={title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
				</div>
				<div className="project-content">
					<span className="categories">
						<Link href={`/promosi/${id}`}>{category}</Link>
					</span>
					<div className="project-text">
						<h3 className="title">
							<Link href={`/promosi/${id}`}>{title}</Link>
						</h3>
					</div>
					<p className="desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
						{excerpt}
					</p>
					<ButtonPrimary text={"Lihat Promo"} url={`/promosi/${id}`} />
				</div>
			</div>
		</div>
	);
};

export default PortfolioCard5;
