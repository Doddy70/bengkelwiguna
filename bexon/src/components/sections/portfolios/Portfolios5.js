import Link from "next/link";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import { services as staticServices } from "@/data/services";
import { getFeaturedImage, stripHtml } from "@/lib/wordpress";

const Portfolios5 = ({ services: wpServices }) => {
	// Gunakan data dari WordPress jika tersedia, jika tidak gunakan fallback statis
	const rawServices = wpServices && wpServices.length > 0 ? wpServices : staticServices;

	// Ambil 3 layanan teratas dan petakan ke struktur data kartu
	const featuredServices = rawServices.slice(0, 3).map((service) => {
		// Deteksi apakah data dari WP API (lama/baru) atau data statis
		const isWpData = service.id && (service.featured_img !== undefined || (service.title && typeof service.title === 'object'));
		
		if (isWpData) {
			const slug = service.slug;
			const title = typeof service.title === 'object' ? service.title.rendered : service.title;
			const excerptRaw = service.excerpt?.rendered || service.excerpt || service.content?.rendered || service.content || "";
			const description = stripHtml(excerptRaw) || "Layanan servis mobil profesional oleh teknisi berpengalaman Bengkel Wiguna.";
			const image = service.featured_img || getFeaturedImage(service) || `/images/service/${slug}.jpg`;
			
			return {
				id: service.id,
				slug,
				title,
				description,
				image
			};
		}
		// Jika ini adalah objek layanan lokal statis
		return {
			id: service.id,
			slug: service.slug,
			title: service.title,
			description: service.description,
			image: service.image
		};
	});
	
	return (
		<section className="h5-project">
			<div className="tj-scroll-slider section-gap">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="sec-heading-wrap style-3">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#ffd900', fontWeight: '600' }}>
									<i className="tji-box"></i> LAYANAN KAMI
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading style-3">
										<h2 className="sec-title text-anim">
											Layanan Terbaik & <span style={{ color: '#224297' }}>Terpercaya</span> untuk Mobil Anda
										</h2>
									</div>
									<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
										<ButtonPrimary text={"Lihat Semua Layanan"} url={"/services"} />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row ">
						<div className="col-12">
							<div className="project-wrapper h5-project-wrapper">
								{featuredServices.map((service, idx) => (
									<div key={idx} className="h5-project-item-wrapper tj-scroll-slider-item">
										<div className="project-item h4-project-item h5-project-item">
											<div className="project-img">
												<img 
													src={service.image} 
													alt={service.title} 
													style={{ width: '100%', height: '100%', minHeight: '400px', objectFit: 'cover', borderRadius: '8px 0 0 8px' }} 
												/>
											</div>
											<div className="project-content">
												<span className="categories">
													<Link href={`/services/${service.slug}`}>{service.title}</Link>
												</span>
												<div className="project-text">
													<h3 className="title">
														<Link href={`/services/${service.slug}`}>{service.title}</Link>
													</h3>
												</div>
												<p className="desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
													{service.description}
												</p>
												<ButtonPrimary text={"Lihat Detail"} url={`/services/${service.slug}`} />
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolios5;
