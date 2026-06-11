import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import SpesialisAccordionItem from "@/components/sections/spesialis/SpesialisAccordionItem";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import { getAllLayananSpesialis } from "@/lib/wordpress";

export const metadata = {
	title: "Layanan Spesialis | Bengkel Wiguna",
	description: "Kumpulan layanan spesialis unggulan Bengkel Wiguna dengan teknologi modern.",
};

export default async function LayananSpesialisList() {
	const items = await getAllLayananSpesialis() || [];

	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={"Layanan Spesialis"} text={"Layanan Spesialis"} />
						
						<section className="tj-faq-section section-gap section-separator">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="sec-heading text-center">
											<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
												<i className="tji-box"></i>Teknologi Terkini
											</span>
											<h2 className="sec-title title-anim">
												Layanan Spesialis <span>Bengkel Wiguna</span>
											</h2>
											<p className="mt-3 mx-auto" style={{ maxWidth: '800px' }}>
												Kami menggabungkan layanan servis dengan alat diagnostik dan flushing modern yang relatif jarang ditemukan dalam satu bengkel yang sama, memberikan solusi yang tepat dan akurat untuk mobil Anda.
											</p>
										</div>
									</div>
									<div className="row justify-content-center">
										<div className="col-lg-10">
											<BootstrapWrapper>
												<div className="accordion tj-faq pt-0" id="faqSpesialis">
													{items.length > 0 ? (
														items.map((item, idx) => (
															<SpesialisAccordionItem key={item.id || idx} item={item} idx={idx} />
														))
													) : (
														<p className="text-center">Belum ada layanan spesialis yang ditambahkan.</p>
													)}
												</div>
											</BootstrapWrapper>
										</div>
									</div>
								</div>
							</div>
						</section>

						<Cta />
					</main>
					<Footer />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
