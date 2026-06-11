"use client";

import HeroInner from "@/components/sections/hero/HeroInner";
import ShopPrimary from "@/components/sections/shop/ShopPrimary";
import CommonContext from "@/context_api/CommonContext";
import filterItems from "@/libs/filterItems";
import getProducts from "@/libs/getProducts";
import makeText from "@/libs/makeText";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ShopMain = () => {
	const allItems = getProducts();
	const category = useSearchParams()?.get("category");
	const tag = useSearchParams()?.get("tag");
	const [range, setRange] = useState([0, 600]);
	const [shortString, setShortString] = useState(null);
	const [filteredItems, setFilteredItems] = useState([]);
	// Filter Items
	const filterableItems = filterItems(
		allItems,
		category ? "category" : tag ? "tags" : "",
		category ? category : tag ? tag : ""
	);
	// handle price range
	const handleRangeFilter = () => {
		const itemsInRage = filterableItems.filter(
			({ price }) => price >= range[0] && price <= range[1]
		);
		setFilteredItems([...itemsInRage]);
	};
	// handle short
	const handleSort = (currentSortOption = {}) => {
		const { value, optionName } = currentSortOption;
		setFilteredItems(prevFilteredItems => {
			const sorteditems = filterItems([...prevFilteredItems], value);
			return [...sorteditems];
		});
	};

	useEffect(() => {
		setFilteredItems([...filterableItems]);
		setRange([0, 600]);
	}, [category, tag]);

	return (
		<div>
			<HeroInner
				title={
					category
						? `${makeText(category, true)}`
						: tag
						? `${makeText(tag, true)}`
						: "Shop"
				}
				text={category ? `Category` : tag ? `Tag` : "Shop"}
				breadcrums={category || tag ? [{ name: "Shop", path: "/shop" }] : []}
			/>
			<CommonContext
				value={{
					range,
					setRange,
					handleRangeFilter,
					handleSort,
				}}
			>
				<ShopPrimary filteredItems={filteredItems} />
			</CommonContext>
		</div>
	);
};

export default ShopMain;
