"use client";
import { useCommonContext } from "@/context_api/CommonContext";
import { useRef } from "react";
import ReactNiceSelect from "../../Inputs/ReactNiceSelect";

const ShopSortFilterWidget = () => {
	const { handleSort } = useCommonContext();
	const sortFilterContainerRef = useRef(null);
	return (
		<div ref={sortFilterContainerRef} className="tj-shop-listing-popup">
			<div className="tj-shop-from">
				<form className="-ordering" method="get">
					<ReactNiceSelect
						selectedIndex={2}
						options={[
							{ value: "popularity", optionName: "Sort by popularity" },
							{ value: "rating", optionName: "Sort by average rating" },
							{ value: "new", optionName: "Sort by latest" },
							{
								value: "price-ascending",
								optionName: "Sort by price: low to high",
							},
							{
								value: "price-descending",
								optionName: "Sort by price: high to low",
							},
						]}
						getSelectedOption={handleSort}
					/>
				</form>
			</div>
		</div>
	);
};

export default ShopSortFilterWidget;
