"use client";

import ProductDetailsPrimary from "@/components/sections/shop/ProductDetailsPrimary";

const ProductDetailsMain = ({ currentItemId, setCurrentTitle }) => {
	return (
		<div>
			<ProductDetailsPrimary
				setCurrentTitle={setCurrentTitle}
				currentItemId={currentItemId}
			/>
		</div>
	);
};

export default ProductDetailsMain;
