"use client";
import ProductDetailsSlider from "@/components/shared/sidebar/widgets/ProductDetailsSlider";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import makePath from "@/libs/makePath";
import Link from "next/link";
import React, { useEffect } from "react";
// import RelatedProducts from "./RelatedProducts";

const PaketDetailsPrimary = ({ setCurrentTitle, paket }) => {
	useEffect(() => {
		if (paket?.title) {
			setCurrentTitle(paket.title);
		}
	}, [paket, setCurrentTitle]);

	if (!paket) return null;

	const { title, content, paket_category } = paket;
	
	// Extract meta fields directly from paket root
	const rawPrice = paket?.price || paket?.harga_paket || 0;
	const price = typeof rawPrice === 'string' ? parseFloat(rawPrice.replace(/[^\d]/g, '')) || 0 : rawPrice;
	const previousPrice = paket?.previousPrice ? parseFloat(String(paket.previousPrice).replace(/[^\d]/g, '')) || 0 : 0;
	const status = paket?.status || "";
	const sku = paket?.sku || "";
	const reviewsCount = paket?.reviews || 0;

	// Extract gallery images from paket.featured_img and paket.gallery
	let imageUrls = [];
	
	// Featured Image as first image
	if (paket?.featured_img) {
		imageUrls.push(paket.featured_img);
	}
	if (paket?.gallery && Array.isArray(paket.gallery)) {
	    imageUrls = [...imageUrls, ...paket.gallery];
	}
	// Fallback if no images
	if (imageUrls.length === 0) {
		imageUrls.push("/images/product/product-1.webp");
	}

	// Prepare data for ProductDetailsSlider
	const currentItem = {
		title: title || "",
		status: status,
		img: imageUrls[0],
	};
	const sliderItems = imageUrls.map(url => ({ img: url }));

	// Categories mapping
	const categories = paket?.paket_category || [];

	return (
		<section className="tj-product-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row section-bottom-gap product">
							<div className="col-xl-6 col-lg-7">
								<ProductDetailsSlider items={sliderItems} currentItem={currentItem} />
							</div>
							<div className="col-xl-6 col-lg-5">
								<div className="tj-product-details-wrapper">
									<h3 className="tj-product-details-title" dangerouslySetInnerHTML={{ __html: title }} />
									
									{/* <!-- price --> */}
									<div className="tj-product-details-price-wrapper">
										<p className="price">
											{previousPrice > 0 ? (
												<del>
													<span>
														<span>Rp </span>
														{previousPrice.toLocaleString('id-ID')}
													</span>
												</del>
											) : null}
											<ins>
												<span>
													{price > 0 ? (
														<>
															<span>Rp </span>
															{price.toLocaleString('id-ID')}
														</>
													) : (
														"Hubungi Kami"
													)}
												</span>
											</ins>
										</p>
									</div>

									<div className="product-details__short-description" dangerouslySetInnerHTML={{ __html: paket?.garansi_paket ? `<p>Garansi: ${paket.garansi_paket}</p>` : "" }}>
									</div>

									{/* <!-- actions --> */}
									{status !== "Sold" ? (
										<div className="tj-product-details-action-wrapper">
											<div className="tj-product-details-action-wrapper">
												<form className="cart" action="#" method="post">
													<div className="tj-product-details-action-item-wrapper d-flex align-items-center">
														<div className="tj-product-details-add-to-cart">
															<Link
																href={`https://wa.me/6281234567890?text=Halo%20saya%20ingin%20booking%20Paket%20${title}`}
																className="single_add_to_cart_button tj-cart-btn"
																target="_blank"
																style={{ display: 'inline-flex', padding: '0 30px' }}
															>
																<span className="btn-icon">
																	<i className="fa-brands fa-whatsapp"></i>
																</span>
																<span className="btn-text">
																	<span>Booking Sekarang</span>
																</span>
															</Link>
														</div>
													</div>
												</form>
											</div>
										</div>
									) : null}

									<div className="tj-product-details-query">
										<h6 className="tj-product-details-query-title">Informasi Paket</h6>
										{sku && (
											<div className="tj-product-details-query-item d-flex align-items-center">
												<span>SKU:</span>
												<p>{sku}</p>
											</div>
										)}
										{categories.length > 0 && (
											<div className="tj-product-details-query-item d-flex align-items-center">
												<span>Kategori:</span>{" "}
												{categories.map((cat, idx) => (
													<React.Fragment key={idx}>
														<Link href={`/paket-service?category=${cat.slug}`}>
															{cat.name}
														</Link>
														{idx !== categories.length - 1 ? ", " : ""}
													</React.Fragment>
												))}
											</div>
										)}
									</div>
								</div>
							</div>
						</div>
						
						<BootstrapWrapper>
							<div className="tj-product-details-bottom section-bottom-gap">
								<div className="row">
									<div className="col-xl-12">
										<div className="tj-product-details-tab-nav tj-tab">
											<nav>
												<div className="nav nav-tabs p-relative tj-product-tab" id="navPresentationTab" role="tablist">
													<button
														className="nav-link description_tab active"
														id="nav-desc-tab-description"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-description"
														type="button"
														role="tab"
														aria-controls="nav-desc-description"
														aria-selected="true"
													>
														Deskripsi
													</button>
													<button
														className="nav-link additional_information_tab"
														id="nav-desc-tab-additional_information"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-additional_information"
														type="button"
														role="tab"
														aria-controls="nav-desc-additional_information"
														aria-selected="false"
														tabIndex="-1"
													>
														Informasi Tambahan
													</button>
													<button
														className="nav-link reviews_tab"
														id="nav-desc-tab-reviews"
														data-bs-toggle="tab"
														data-bs-target="#nav-desc-reviews"
														type="button"
														role="tab"
														aria-controls="nav-desc-reviews"
														aria-selected="false"
														tabIndex="-1"
													>
														Ulasan ({reviewsCount.toString().padStart(2, '0')})
													</button>
												</div>
											</nav>
											<div className="tab-content" id="navPresentationTabContent">
												<div className="tab-pane fade active show" id="nav-desc-description" role="tabpanel" aria-labelledby="nav-desc-tab-description">
													<div className="tj-product-details-description mt-30" dangerouslySetInnerHTML={{ __html: content }} />
												</div>
												<div className="tab-pane fade" id="nav-desc-additional_information" role="tabpanel" aria-labelledby="nav-desc-tab-additional_information">
													<div className="tj-product-details-description mt-30">
														<table>
															<tbody>
																{paket?.durasi_paket && (
																	<tr>
																		<th>Durasi Pengerjaan</th>
																		<td>{paket.durasi_paket}</td>
																	</tr>
																)}
																{paket?.jenis_kendaraan && (
																	<tr>
																		<th>Jenis Kendaraan</th>
																		<td>{paket.jenis_kendaraan.replace(/\|/g, ', ')}</td>
																	</tr>
																)}
																{paket?.garansi_paket && (
																	<tr>
																		<th>Garansi</th>
																		<td>{paket.garansi_paket}</td>
																	</tr>
																)}
															</tbody>
														</table>
													</div>
												</div>
												<div className="tab-pane fade" id="nav-desc-reviews" role="tabpanel" aria-labelledby="nav-desc-tab-reviews">
													<div className="tj-product-details-description mt-30">
														{paket?.ulasan_paket ? (
															<div dangerouslySetInnerHTML={{ __html: paket.ulasan_paket }} />
														) : (
															<p>Belum ada ulasan untuk paket ini.</p>
														)}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PaketDetailsPrimary;
