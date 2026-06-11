"use client";
import modal from "@/libs/modal";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const PaketCard = ({ item, setCurrentItem }) => {
	const { id, title, slug, featured_img, harga_paket, durasi_paket } = item || {};
	
	useEffect(() => {
		modal();
	}, []);

	return (
		<div className="tj-product">
			<div className="tj-product-item">
				<div className="tj-product-thumb">
					<Link href={`/paket-service/${slug}`}>
						<Image
							src={featured_img ? featured_img : "/images/service/service-1.webp"}
							alt={title}
							width={520}
							height={601}
							style={{ height: "auto", objectFit: "cover" }}
						/>
					</Link>

					{/* <!-- product action --> */}
					<div className="tj-product-action">
						<div className="tj-product-action-item d-flex flex-column">
							<div
								className="tj-product-action-btn tj-modal-open"
								onMouseEnter={() => setCurrentItem(item)}
							>
								<button className="tj-quick-product-details">
									<i className="fal fa-eye"></i>
								</button>
								<span className="tj-product-action-btn-tooltip">
									Quick view
								</span>
							</div>
						</div>
					</div>
					
					<div className="tj-product-cart-btn">
						<Link
							href={`/paket-service/${slug}`}
							className={`cart-button button tj-cart-btn stock-available`}
							style={{ display: "flex", justifyContent: "center" }}
						>
							<span className="btn-text">
								<span>Lihat Detail</span>
							</span>
						</Link>
					</div>
				</div>
				<div className="tj-product-content">
					<h3 className="tj-product-title">
						<Link href={`/paket-service/${slug}`}>{title}</Link>
					</h3>

					<div className="tj-product-price-wrapper">
						<span className="price">
							<ins>
								<span>
									<bdi>
										{harga_paket || "Hubungi Kami"}
									</bdi>
								</span>
							</ins>
						</span>
					</div>
					{durasi_paket && (
						<div className="durasi-info mt-2" style={{ fontSize: '14px', color: '#666' }}>
							<i className="fal fa-clock me-1"></i> {durasi_paket}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default PaketCard;
