"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import ProductQuickViewModal from "@/components/shared/modals/ProductQuickViewModal";
import getProducts from "@/libs/getProducts";
import { useState } from "react";

const RelatedProducts = () => {
	const [currentItem, setCurrentItem] = useState(null);
	const items = getProducts()?.slice(0, 3);

	// const [refreshVenoboxContent, setRefreshVenoboxContent] = useState(null);
	const currentItems = [...items];

	return (
		<div className="related-products has-border tj-modal-container">
			<div className="sec-heading text-center">
				<span className="sub-title wow fadeInUp" data-wow-delay="0.1s">
					{" "}
					<i className="tji-box"></i>
					Related products
				</span>
				<h2 className="sec-title text-anim">Customers also bought</h2>
			</div>
			<div className="row rg-30 row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-1">
				{currentItems?.length
					? currentItems?.map((item, idx) => (
							<ProductCard
								key={idx}
								item={item}
								idx={idx}
								setCurrentItem={setCurrentItem}
							/>
					  ))
					: ""}
			</div>

			<ProductQuickViewModal item={currentItem || currentItems[0] || {}} />
		</div>
	);
};

export default RelatedProducts;
