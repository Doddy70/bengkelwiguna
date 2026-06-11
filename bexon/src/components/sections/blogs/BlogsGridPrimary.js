"use client";
import BlogCard1 from "@/components/shared/cards/BlogCard1";
import Paginations from "@/components/shared/others/Paginations";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import usePagination from "@/hooks/usePagination";
import getBlogs from "@/libs/getBlogs";
import { useEffect, useMemo } from "react";

const BlogsGridPrimary = ({ isSidebar = false }) => {
	const items = useMemo(() => getBlogs());
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
		<section className="tj-blog-section section-gap">
			<div className="container">
				<div className="row row-gap-5">
					<div className={isSidebar ? "col-lg-8" : "col-lg-12"}>
						<div className="row row-gap-4">
							{currentItems?.length
								? currentItems?.map((blog, idx) => (
										<div
											key={idx}
											className={`col-md-6 ${isSidebar ? "" : "col-xl-4"}`}
										>
											<BlogCard1 blog={blog} idx={idx} />
										</div>
								  ))
								: ""}
						</div>
						<Paginations
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
							type={isSidebar ? 2 : 1}
						/>
					</div>
					{isSidebar ? (
						<div className="col-lg-4">
							<BlogSidebar type={2} />
						</div>
					) : (
						""
					)}
				</div>
			</div>
		</section>
	);
};

export default BlogsGridPrimary;
