"use client";
import PaketCard from "@/components/shared/cards/PaketCard";
import Paginations from "@/components/shared/others/Paginations";
import usePagination from "@/hooks/usePagination";
import ShopSidebar from "@/components/shared/sidebar/ShopSidebar";
import CommonContext from "@/context_api/CommonContext";
import { useEffect, useState } from "react";

const PaketCatalog = ({ items = [] }) => {
	const [currentItem, setCurrentItem] = useState(null);
	const [range, setRange] = useState([0, 600]);

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
					<CommonContext value={{ range, setRange, handleRangeFilter: () => {}, handleSort: () => {} }}>
					<div className="row rg-50 justify-content-center">
						<div className="col-xl-8 col-lg-8 col-md-12">
							<div className="tj-shop-listing d-flex flex-wrap align-items-center mb-40 justify-content-between">
								<div className="tj-shop-listing-number">
									<p className="tj-shop-list-title">
										{totalItems === 0
											? "Belum ada paket service."
											: "Menampilkan"}{" "}
										{totalItems === 0
											? ""
											: totalItemsToShow < totalItems
											? `${firstItem}–${lastItem} dari`
											: totalItems === 1
											? ""
											: "semua"}{" "}
										{totalItems === 0
											? ""
											: totalItems === 1
											? "1 hasil"
											: `${totalItems} hasil`}
									</p>
								</div>
							</div>

							<div className="tj-shop-item-wrapper">
								<div className="row rg-30 row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-1">
									{currentItems?.length
										? currentItems?.map((item, idx) => (
												<PaketCard
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
					</CommonContext>
				</div>
			</div>{" "}
			{/* Quick view modal can be added later if needed */}
		</div>
	);
};

export default PaketCatalog;
