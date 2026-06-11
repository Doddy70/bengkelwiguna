"use client";

import HeroInner from "@/components/sections/hero/HeroInner";
import ProductDetailsPrimary from "@/components/sections/shop/ProductDetailsPrimary";
import sliceText from "@/libs/sliceText";
import { useState } from "react";

const ProductDetailsMain = ({ currentItemId }) => {
	const [title, setCurrentTitle] = useState("Shop details");
	return (
		<div>
			<HeroInner
				title={sliceText(title, 31, true)}
				text={title}
				breadcrums={[{ name: "Shop", path: "/shop" }]}
				noNeedTitleAnim={true}
			/>
			<ProductDetailsPrimary
				setCurrentTitle={setCurrentTitle}
				currentItemId={currentItemId}
			/>
		</div>
	);
};

export default ProductDetailsMain;
