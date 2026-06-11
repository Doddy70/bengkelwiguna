"use client";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import { useCallback } from "react";

const Paginations = ({ paginationDetails, type }) => {
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
	} = paginationDetails;
	const handleBackToTop = useCallback(() => {
		setTimeout(() => {
			if (typeof window !== "undefined") {
				window.scrollTo({ top: 400, left: 0, behavior: "smooth" });
			}
		}, 10);
	}, []);
	return (
		<div
			className={`tj-pagination d-flex ${
				type === 2 ? "" : "justify-content-center"
			}`}
		>
			<ul>
				<li
					style={{
						display: currentpage > 0 ? "inline-block" : "none",
					}}
					onClick={handleBackToTop}
				>
					<Link
						className="page-numbers prev"
						href="#"
						onClick={e =>
							handleCurrentPage(e, currentpage < 1 ? 0 : currentpage - 1)
						}
					>
						<i className="tji-arrow-left-long"></i>
					</Link>
				</li>
				{currentPaginationItems?.map((item, idx) => (
					<li key={idx} onClick={handleBackToTop}>
						<Link
							className={`page-numbers ${
								item === currentpage ? "current" : ""
							}`}
							href="#"
							onClick={e => handleCurrentPage(e, item)}
						>
							{modifyNumber(item + 1)}
						</Link>
					</li>
				))}

				<li
					style={{
						display:
							currentpage < paginationItems?.length - 1
								? "inline-block"
								: "none",
					}}
					onClick={handleBackToTop}
				>
					<Link
						className="page-numbers next"
						href="#"
						onClick={e =>
							handleCurrentPage(
								e,
								currentpage > totalPages - 2 ? totalPages - 1 : currentpage + 1
							)
						}
					>
						<i className="tji-arrow-right-long"></i>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Paginations;
