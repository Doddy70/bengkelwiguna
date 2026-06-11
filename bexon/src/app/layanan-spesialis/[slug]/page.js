import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import Cta from "@/components/sections/cta/Cta";
import HeroInner from "@/components/sections/hero/HeroInner";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import FaqItem from "@/components/shared/faq/FaqItem";
import FaqItem2 from "@/components/shared/faq/FaqItem2";
import { getLayananSpesialisBySlug, getAllLayananSpesialis } from "@/lib/wordpress";

export async function generateStaticParams() {
  const all = await getAllLayananSpesialis();
  if (!all || !Array.isArray(all)) return [];
  return all.map(item => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
	const { slug } = await params;
	const item = await getLayananSpesialisBySlug(slug);
	if (!item) return { title: "Layanan Tidak Ditemukan | Bengkel Wiguna" };
	return {
		title: `${item.title} | Layanan Spesialis | Bengkel Wiguna`,
		description: item.excerpt || item.manfaat_spesialis?.replace(/<[^>]+>/g, '').substring(0, 160) || `Layanan spesialis ${item.title} di Bengkel Wiguna Depok`,
	};
}

export default async function LayananSpesialisDetail({ params }) {
	const { slug } = await params;
	const item = await getLayananSpesialisBySlug(slug);

	if (!item || item.data?.status === 404) {
		notFound();
	}

	// FAQ data langsung berupa array dari API v1.7.0 (tidak perlu JSON.parse)
	let faqs = [];
	if (Array.isArray(item.bw_spesialis_faq) && item.bw_spesialis_faq.length > 0) {
		faqs = item.bw_spesialis_faq;
	}

	// Split FAQ: bagian pertama (Faq2 style) = 5 item pertama
	// bagian kedua (Faq3 style) = sisanya
	const faqsFirst = faqs.slice(0, 5).map((faq, idx) => ({
		title: faq.q,
		desc: faq.a,
		initActive: idx === 0,
	}));
	const faqsSecond = faqs.slice(5).map((faq, idx) => ({
		title: faq.q,
		desc: faq.a,
		initActive: idx === 0,
	}));

	const faqImage = item.bw_spesialis_faq_image || "/images/faq/faq.webp";
	const waLink = `https://wa.me/6287817773888?text=Halo%20Bengkel%20Wiguna,%20saya%20ingin%20tahu%20lebih%20lanjut%20tentang:%20${encodeURIComponent(item.title)}`;

	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<HeroInner title={item.title} text={"Layanan Spesialis"} />

						{/* =============================================
						    SECTION 1: Layout Faq2 type=4
						    Gambar + Call Box (kiri) | Accordion FAQ (kanan)
						    ============================================= */}
						<section className="tj-faq-section section-gap">
							<div className="container">
								<div className="row justify-content-between">

									{/* Kolom Kiri: Gambar + Judul overlay + Call Box */}
									<div className="col-lg-6">
										<div className="faq-img-area tj-arrange-item-2">
											<div className="faq-img overflow-hidden">
												<Image
													src={faqImage}
													alt={item.title}
													width={585}
													height={629}
													style={{ objectFit: "cover", width: "100%", height: "auto" }}
													priority
												/>
												<h2 className="title title-anim">
													{item.title}
												</h2>
											</div>
											<div className="box-area">
												<div className="call-box">
													<h4 className="title">Konsultasi Gratis?</h4>
													<span className="call-icon">
														<i className="tji-phone"></i>
													</span>
													<Link className="number" href="tel:+6287817773888">
														<span>0878-1777-3888</span>
													</Link>
												</div>
											</div>
										</div>
									</div>

									{/* Kolom Kanan: Deskripsi + Teknologi + FAQ Accordion (style-2) */}
									<div className="col-lg-6">
										{/* Deskripsi singkat layanan */}
										{item.content && (
											<div
												className="desc mb-4 wow fadeInUp"
												data-wow-delay=".3s"
												dangerouslySetInnerHTML={{ __html: item.content }}
											/>
										)}

										{/* Badge teknologi jika ada */}
										{item.teknologi_spesialis && (
											<div className="tj-feature-box mb-4 wow fadeInUp" data-wow-delay=".5s">
												<span className="sub-title">
													<i className="tji-setting"></i> Teknologi Digunakan
												</span>
												<p><strong>{item.teknologi_spesialis}</strong></p>
											</div>
										)}

										{/* Manfaat layanan */}
										{item.manfaat_spesialis && (
											<div className="mb-4 wow fadeInUp" data-wow-delay=".6s">
												<h4>Manfaat Layanan</h4>
												<div
													className="check-list-box mt-3"
													dangerouslySetInnerHTML={{ __html: item.manfaat_spesialis }}
												/>
											</div>
										)}

										{/* FAQ Accordion — style-2 (jika ada FAQ) */}
										{faqsFirst.length > 0 && (
											<BootstrapWrapper>
												<div
													className="accordion tj-faq style-2 tj-arrange-item-2"
													id="faqOne"
												>
													{faqsFirst.map((faqItem, idx) => (
														<FaqItem key={idx} item={faqItem} idx={idx} />
													))}
												</div>
											</BootstrapWrapper>
										)}

										{/* Tombol WhatsApp jika tidak ada FAQ */}
										{faqsFirst.length === 0 && (
											<div className="wow fadeInUp" data-wow-delay=".8s">
												<Link
													href={waLink}
													className="tj-primary-btn"
													target="_blank"
												>
													Konsultasi via WhatsApp <i className="flaticon-right-arrow"></i>
												</Link>
											</div>
										)}
									</div>
								</div>
							</div>
						</section>

						{/* =============================================
						    SECTION 2: Galeri (jika ada)
						    ============================================= */}
						{item.gallery && item.gallery.length > 0 && (
							<section className="tj-portfolio-section section-gap section-separator pt-0">
								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="sec-heading text-center">
												<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
													<i className="tji-box"></i>Hasil Pengerjaan
												</span>
												<h2 className="sec-title title-anim">
													Galeri <span>Layanan</span>
												</h2>
											</div>
										</div>
									</div>
									<div className="row mt-4">
										{item.gallery.map((imgUrl, idx) => (
											<div className="col-md-6 col-lg-4 mb-4" key={idx}>
												<div className="portfolio-item overflow-hidden rounded">
													<Image
														src={imgUrl}
														alt={`Galeri ${item.title} ${idx + 1}`}
														width={400}
														height={300}
														className="w-100 h-auto"
														style={{ objectFit: "cover" }}
													/>
												</div>
											</div>
										))}
									</div>
								</div>
							</section>
						)}

						{/* =============================================
						    SECTION 3: Layout Faq3 — FAQ tambahan
						    Heading centered + accordion col-lg-8
						    (hanya tampil jika ada lebih dari 5 FAQ)
						    ============================================= */}
						{faqsSecond.length > 0 && (
							<section className="tj-faq-section section-gap section-separator">
								<div className="container">
									<div className="row">
										<div className="col-12">
											<div className="sec-heading text-center">
												<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
													<i className="tji-box"></i>Pertanyaan Umum
												</span>
												<h2 className="sec-title title-anim">
													Ada <span>Pertanyaan?</span> Temukan Jawabannya...
												</h2>
											</div>
										</div>
									</div>
									<div className="row justify-content-center">
										<div className="col-lg-8">
											<BootstrapWrapper>
												<div className="accordion tj-faq pt-0" id="faqTwo">
													{faqsSecond.map((faqItem, idx) => (
														<FaqItem2 key={idx} item={faqItem} idx={idx} />
													))}
												</div>
											</BootstrapWrapper>
										</div>
									</div>
								</div>
							</section>
						)}

						{/* =============================================
						    SECTION 4: Layanan Spesialis Lainnya
						    ============================================= */}
						<section className="tj-service-section section-gap section-separator pt-0">
							<div className="container">
								<div className="row">
									<div className="col-12">
										<div className="sec-heading text-center">
											<span className="sub-title wow fadeInUp" data-wow-delay=".1s">
												<i className="tji-box"></i>Jelajahi Lebih Lanjut
											</span>
											<h2 className="sec-title title-anim">
												Layanan <span>Spesialis</span> Lainnya
											</h2>
										</div>
									</div>
								</div>
								<div className="row justify-content-center mt-4">
									<div className="col-lg-4 col-md-6 mb-3">
										<Link href="/layanan-spesialis/semi-overhaul/" className="tj-service-item d-block p-4 rounded text-center" style={{ border: '1px solid rgba(var(--tj-color-common-white-rgb), 0.1)', transition: 'all 0.3s' }}>
											<i className="tji-setting fs-2 mb-3 d-block"></i>
											<h5>Semi Overhaul dengan Stinger Engine Flush</h5>
										</Link>
									</div>
									<div className="col-lg-4 col-md-6 mb-3">
										<Link href="/layanan-spesialis/cek-kaki-kaki/" className="tj-service-item d-block p-4 rounded text-center" style={{ border: '1px solid rgba(var(--tj-color-common-white-rgb), 0.1)', transition: 'all 0.3s' }}>
											<i className="tji-car fs-2 mb-3 d-block"></i>
											<h5>Cek Kaki-Kaki dengan Kyoto Shaking Machine</h5>
										</Link>
									</div>
									<div className="col-lg-4 col-md-6 mb-3">
										<Link href="/layanan-spesialis/reset-ac/" className="tj-service-item d-block p-4 rounded text-center" style={{ border: '1px solid rgba(var(--tj-color-common-white-rgb), 0.1)', transition: 'all 0.3s' }}>
											<i className="tji-snowflake fs-2 mb-3 d-block"></i>
											<h5>Reset AC dengan Kyoto Flushing</h5>
										</Link>
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
