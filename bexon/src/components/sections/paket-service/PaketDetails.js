"use client";
import ProductDetailsSlider from "@/components/shared/sidebar/widgets/ProductDetailsSlider";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import { getWhatsAppLink } from "@/lib/constants";
import Link from "next/link";
import React, { useEffect } from "react";

const PaketDetails = ({ currentItem = {}, setCurrentTitle }) => {
	const {
		id,
		title,
		slug,
		content,
		excerpt,
		featured_img,
		harga_paket,
		durasi_paket,
		garansi_paket,
		items_paket,
		jenis_kendaraan,
		gallery
	} = currentItem;

	useEffect(() => {
		if (setCurrentTitle) setCurrentTitle(title);
	}, [title, setCurrentTitle]);

	// Prepare images for slider
	let allImages = [];
	if (featured_img) allImages.push(featured_img);
	if (gallery && Array.isArray(gallery)) {
		allImages = [...allImages, ...gallery];
	}
	
	// Format to what ProductDetailsSlider expects
	const sliderItems = allImages.length > 0 ? allImages.map(imgUrl => ({ img: imgUrl })) : [{ img: "/images/service/service-1.webp" }];

	// Parse items_paket string (separated by |)
	const parsedItems = items_paket ? items_paket.split("|").map(item => item.trim()) : [];

	return (
		<section className="tj-product-area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="row section-bottom-gap product">
							<div className="col-xl-6 col-lg-7">
								<ProductDetailsSlider items={sliderItems} currentItem={{ title, status: null }} />
							</div>
							<div className="col-xl-6 col-lg-5">
								<div className="tj-product-details-wrapper">
									<h3 className="tj-product-details-title">{title}</h3>
									
									{/* <!-- price --> */}
									<div className="tj-product-details-price-wrapper">
										<p className="price">
											<ins>
												<span>
													{harga_paket || "Hubungi Kami"}
												</span>
											</ins>
										</p>
									</div>

									<div className="product-details__short-description mt-3">
										<p>{excerpt || "Paket service komprehensif untuk performa kendaraan yang maksimal."}</p>
									</div>

									{/* <!-- actions --> */}
									<div className="tj-product-details-action-wrapper mt-4">
										<Link
											href={getWhatsAppLink(`Halo Minna, saya ingin booking Paket Service: ${title}`)}
											target="_blank"
											rel="noopener noreferrer"
											className="tj-product-details-buy-now-btn w-100"
											style={{ background: '#25D366', borderColor: '#25D366', color: '#fff', textAlign: 'center' }}
										>
											<span className="btn-text">
												<i className="fa-brands fa-whatsapp me-2"></i>
												<span>Booking Sekarang</span>
											</span>
										</Link>
									</div>

									<div className="tj-product-details-query mt-5">
										<h6 className="tj-product-details-query-title">
											Informasi Paket
										</h6>
										{durasi_paket && (
											<div className="tj-product-details-query-item d-flex align-items-center">
												<span>Estimasi Waktu:</span>
												<p className="mb-0 ms-2">{durasi_paket}</p>
											</div>
										)}
										{garansi_paket && (
											<div className="tj-product-details-query-item d-flex align-items-center mt-2">
												<span>Garansi:</span>
												<p className="mb-0 ms-2">{garansi_paket}</p>
											</div>
										)}
										{jenis_kendaraan && (
											<div className="tj-product-details-query-item d-flex align-items-center mt-2">
												<span>Jenis Kendaraan:</span>
												<p className="mb-0 ms-2">{jenis_kendaraan.replace(/\|/g, ', ')}</p>
											</div>
										)}
									</div>
									
									<div className="tj-product-details-share mt-4">
										<h6>Share:</h6>
										<Link href="#" title="Facebook">
											<i className="fa-brands fa-facebook-f"></i>
										</Link>
										<Link href="#" title="Twitter">
											<i className="fab fa-x-twitter"></i>
										</Link>
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
												<div
													className="nav nav-tabs p-relative tj-product-tab"
													id="navPresentationTab"
													role="tablist"
												>
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
														Deskripsi Paket
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
														Spesifikasi & Pengerjaan
													</button>
												</div>
											</nav>
											<div
												className="tab-content"
												id="navPresentationTabContent"
											>
												<div
													className="tab-pane fade active show"
													id="nav-desc-description"
													role="tabpanel"
													aria-labelledby="nav-desc-tab-description"
												>
													<div className="tj-product-details-description mt-30 wp-content-rendered" dangerouslySetInnerHTML={{ __html: content }}>
													</div>
												</div>
												<div
													className="tab-pane fade"
													id="nav-desc-additional_information"
													role="tabpanel"
													aria-labelledby="nav-desc-tab-additional_information"
												>
													<div className="tj-product-details-description mt-30">
														<table className="table table-bordered">
															<tbody>
																{durasi_paket && (
																	<tr>
																		<th>Estimasi Durasi</th>
																		<td>{durasi_paket}</td>
																	</tr>
																)}
																{garansi_paket && (
																	<tr>
																		<th>Garansi Layanan</th>
																		<td>{garansi_paket}</td>
																	</tr>
																)}
																{jenis_kendaraan && (
																	<tr>
																		<th>Cocok Untuk</th>
																		<td>{jenis_kendaraan.replace(/\|/g, ', ')}</td>
																	</tr>
																)}
															</tbody>
														</table>
														
														{parsedItems.length > 0 && (
															<div className="mt-4">
																<h5>Item Pengerjaan dalam Paket Ini:</h5>
																<ul className="list-group mt-3">
																	{parsedItems.map((item, idx) => (
																		<li key={idx} className="list-group-item">
																			<i className="fa-solid fa-check text-success me-2"></i> {item}
																		</li>
																	))}
																</ul>
															</div>
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

export default PaketDetails;
