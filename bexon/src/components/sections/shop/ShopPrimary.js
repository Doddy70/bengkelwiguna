"use client";
import ProductCard from "@/components/shared/cards/ProductCard";
import ProductQuickViewModal from "@/components/shared/modals/ProductQuickViewModal";
import Paginations from "@/components/shared/others/Paginations";
import ShopSidebar from "@/components/shared/sidebar/ShopSidebar";
import ShopSortFilterWidget from "@/components/shared/sidebar/widgets/ShopSortFilterWidget";
import usePagination from "@/hooks/usePagination";
import { useEffect, useState } from "react";

const ShopPrimary = ({ filteredItems }) => {
	const [currentItem, setCurrentItem] = useState(null);

	const items = [...filteredItems];
	const limit = 6;
	// get pagination details
	const {
		currentItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		totalPages,
		handleCurrentPage,
		firstItem,
		lastItem,
	} = usePagination(items, limit);
	const totalItems = items?.length;
	const totalItemsToShow = currentItems?.length;

	useEffect(() => {
		setCurrentpage(0);
	}, [totalItems]);

	return (
		<div className="tj-modal-container">
			<div className="tj-product-area section-gap">
				<div className="container">
					<div className="row rg-50">
						<div className="col-xl-8 col-lg-8 col-md-12">
							<div className="tj-shop-listing d-flex flex-wrap align-items-center mb-40 justify-content-between">
								<div className="tj-shop-listing-number">
									<p className="tj-shop-list-title">
										{totalItems === 0
											? "No products were found matching your selection."
											: "Showing"}{" "}
										{totalItems === 0
											? ""
											: totalItemsToShow < totalItems
											? `${firstItem}–${lastItem} of`
											: totalItems === 1
											? "the"
											: "all"}{" "}
										{totalItems === 0
											? ""
											: totalItems === 1
											? "single result"
											: `${totalItems} results`}
									</p>
								</div>
								{totalItems < 1 ? "" : <ShopSortFilterWidget />}
							</div>

							<div className="tj-shop-item-wrapper">
								<div className="row rg-30 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
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
								{/* <!-- pagination --> */}
								<div className="row">
									<div className="col-sm-12">
										{totalItemsToShow < totalItems ? (
											<Paginations
												type={2}
												paginationDetails={{
													currentItems,
													currentpage,
													setCurrentpage,
													paginationItems,
													currentPaginationItems,
													totalPages,
													handleCurrentPage,
													firstItem,
													lastItem,
												}}
											/>
										) : (
											""
										)}
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-lg-4 col-md-12">
							<ShopSidebar />
						</div>
					</div>
				</div>
			</div>{" "}
			<ProductQuickViewModal
				item={currentItem || currentItems[0] || {}}
				totalItemsToShow={totalItemsToShow}
			/>
		</div>
	);
};

export default ShopPrimary;
