"use client";

import { useState } from "react";

const usePagination = (filteredItems, currentLimit, pagiItemsLengthPerView) => {
	// stats
	const [currentpage, setCurrentpage] = useState(0);

	// pagination related
	const limit = currentLimit ? currentLimit : 6;
	const skip = limit * currentpage;
	const currentItems = filteredItems?.slice(skip, skip + limit);
	const totalItems = filteredItems?.length;
	const totalCurrentItems = currentItems?.length;
	const totalPages = Math.ceil(totalItems / limit);
	const paginationItemsUnmodified = [...Array(totalPages)];
	const paginationItems = paginationItemsUnmodified?.map((it, idx) => idx);

	// hande currentpage
	const handleCurrentPage = (e, id) => {
		setCurrentpage(id);
	};
	let showMore = false;
	let currentPaginationItems = paginationItems;

	if (totalPages > pagiItemsLengthPerView) {
		showMore = currentpage + 1 > totalPages / 2 ? "left" : "right";
		const sliceStartPoint =
			currentpage >= totalPages - (pagiItemsLengthPerView < 6 ? 2 : 3)
				? -(pagiItemsLengthPerView - 2)
				: currentpage < pagiItemsLengthPerView - 3
				? 0
				: showMore === "left"
				? currentpage - 1
				: currentpage - (pagiItemsLengthPerView - 4);
		const sliceEndPoind =
			currentpage >= totalPages - (pagiItemsLengthPerView < 6 ? 2 : 3)
				? totalPages
				: currentpage < pagiItemsLengthPerView - 3
				? pagiItemsLengthPerView - 2
				: showMore === "left"
				? currentpage + (pagiItemsLengthPerView - 3)
				: currentpage + 2;
		currentPaginationItems = paginationItems?.slice(
			sliceStartPoint,
			sliceEndPoind
		);
	}

	return {
		currentItems,
		totalItems,
		currentpage,
		setCurrentpage,
		paginationItems,
		currentPaginationItems,
		showMore,
		totalPages,
		handleCurrentPage,
		firstItem: skip + 1,
		lastItem:
			totalItems < limit
				? totalItems
				: skip + (totalCurrentItems < limit ? totalCurrentItems : limit),
	};
};

export default usePagination;
