/**
 * Homepage - Bengkel Wiguna
 * Home-05 Template dengan brand identity
 *
 * OPTIMIZATION: Parallel API fetching using Promise.all
 * Reduces total TTFB by fetching data concurrently
 */

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import PerspectiveServiceSlider from "@/components/sections/services/PerspectiveServiceSlider";
import Services5 from "@/components/sections/services/Services5";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import SpesialisSliderSection from "@/components/sections/spesialis/SpesialisSliderSection";
import Portfolios5 from "@/components/sections/portfolios/Portfolios5";
import Blogs5 from "@/components/sections/blogs/Blogs5";
import Cta from "@/components/sections/cta/Cta";
import dynamic from 'next/dynamic';

// Lazy loaded Client Components
const Testimonials5 = dynamic(() => import("@/components/sections/testimonials/Testimonials5"), { ssr: true });
const YoutubeSlider = dynamic(() => import("@/components/sections/video-gallery/YoutubeSlider"), { ssr: true });

import { 
	getPageBySlug, 
	getNavigationMenu, 
	getAllServices, 
	getAllPromosi, 
	getAllPosts, 
	getAllLayananSpesialis,
	getAllPaketService
} from "@/lib/wordpress";
import { extractRankMathSEO } from "@/lib/rank-math-seo";
import { generatePageMetadata, generateJSONLDScripts, generateCompleteSEO } from "@/lib/seo-complete";

export async function generateMetadata() {
	// OPTIMIZATION: Fetch page data in parallel for metadata generation
	const [page] = await Promise.all([
		getPageBySlug('home'),
	]);

	const seo = extractRankMathSEO(page);

	// SEO Fallback: If WP returns generic title or no description, use branded defaults
	const brandedSeo = {
		...seo,
		// Override if title is generic ('Home', empty, etc)
		title: (!seo.title || seo.title === 'Home' || seo.title === 'Beranda')
			? 'Bengkel Wiguna | Servis Mobil Presisi & Transparan di Depok'
			: seo.title,
		// Override if description contains HTML entities or is too long/short
		description: (!seo.description || seo.description.includes('&amp;') || seo.description.length < 50 || seo.description.length > 300)
			? 'Bengkel One Stop Service di Depok dengan standar presisi tinggi. Ahli Kaki-kaki (bunyi gluduk), Servis AC, Ganti Oli, & Spooring 3D. Jujur, tuntas, dan bergaransi.'
			: seo.description,
	};

	return generatePageMetadata({
		seo: brandedSeo,
		pageType: 'homepage',
		slug: '',
		baseUrl: 'https://bengkelwiguna.com',
	});
}

export default async function Home() {
	// OPTIMIZATION: Fetch all data in parallel using Promise.all
	// This reduces total TTFB significantly compared to sequential fetches
	const [
		page,
		navItems,
		servicesData,
		promosiData,
		layananSpesialisData,
		blogsResult,
		paketServiceData,
	] = await Promise.all([
		getPageBySlug('home'),
		getNavigationMenu("menu-1"),
		getAllServices(),
		getAllPromosi(),
		getAllLayananSpesialis(),
		getAllPosts(1, 3), // Fetch 3 latest posts
		getAllPaketService(),
	]);

	const seo = extractRankMathSEO(page);
	const seoData = generateCompleteSEO({
		seo,
		pageType: 'homepage',
		slug: '',
		baseUrl: 'https://bengkelwiguna.com',
	});

	const blogsData = blogsResult?.posts || [];

	return (
		<div>
			{/* JSON-LD Structured Data */}
			{generateJSONLDScripts(seoData.schemas).map((script, idx) => (
				<script
					key={idx}
					type="application/ld+json"
					dangerouslySetInnerHTML={script.props.dangerouslySetInnerHTML}
				/>
			))}

			<BackToTop />
			<Header headerType={5} navItems={navItems} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="top-space-15"></div>
						<PerspectiveServiceSlider servicesData={servicesData} />
						
						{/* DYNAMIC PROMO SECTION */}
						<Services5 promosiData={promosiData} />
						
						{/* LAYANAN SPESIALIS */}
						<SpesialisSliderSection data={layananSpesialisData} />

						{/* PAKET SERVICE SECTION */}
						{paketServiceData && paketServiceData.length > 0 && (
							<section className="paket-service-home bg-light py-5">
								<div className="container">
									<div className="sec-heading sec-heading-centered style-2">
										<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
											<i className="tji-box"></i>PAKET SERVIS
										</span>
										<h2 className="sec-title title-anim">
											Pilihan <span style={{ color: '#224297' }}>Paket Ekonomis</span>
										</h2>
									</div>
									<div className="row mt-5 rg-30">
										{paketServiceData.slice(0, 3).map((item, idx) => (
											<div className="col-lg-4 col-md-6" key={item.id}>
												<div className="tj-product wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
													<div className="tj-product-item">
														<div className="tj-product-thumb">
															<a href={`/paket-service/${item.slug}`}>
																<img 
																	src={item.featured_img || "/images/service/service-1.webp"} 
																	alt={item.title}
																	className="w-100"
																	style={{ height: '280px', objectFit: 'cover' }}
																/>
															</a>
															<div className="tj-product-cart-btn">
																<a href={`/paket-service/${item.slug}`} className="cart-button button tj-cart-btn stock-available">
																	<span className="btn-text">Lihat Detail</span>
																</a>
															</div>
														</div>
														<div className="tj-product-content">
															<h3 className="tj-product-title">
																<a href={`/paket-service/${item.slug}`}>{item.title}</a>
															</h3>
															<div className="tj-product-price-wrapper">
																<span className="price">
																	<ins>
																		<span>
																			<bdi>
																				{item.harga_paket || "Mulai Rp 150rb"}
																			</bdi>
																		</span>
																	</ins>
																</span>
															</div>
														</div>
													</div>
												</div>
											</div>
										))}
									</div>
									<div className="text-center mt-5">
										<a href="/paket-service/" className="tj-btn-secondary">
											<i className="tji-arrow-right-long"></i>
											<span>Lihat Semua Paket</span>
										</a>
									</div>
								</div>
							</section>
						)}

						{/* <Brands4 /> */}
						<Testimonials5 />
						<YoutubeSlider />
						<Portfolios5 services={servicesData} />
						{/* <VideoGallery /> */}

						<Blogs5 blogs={blogsData} />
						<Cta />
					</main>
					<Footer />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
