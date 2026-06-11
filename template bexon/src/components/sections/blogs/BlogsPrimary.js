import BlogSingle from "@/components/shared/blogs/BlogSingle";
import Paginations from "@/components/shared/others/Paginations";
import BlogSidebar from "@/components/shared/sidebar/BlogSidebar";
import usePagination from "@/hooks/usePagination";
import { useEffect } from "react";

const BlogsPrimary = ({ filteredItems }) => {
	const items = [...filteredItems];
	const limit = 3;
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
					<div className="col-lg-8">
						<div className="blog-post-wrapper">
							{currentItems?.length
								? currentItems?.map((blog, idx) => (
										<BlogSingle key={idx} blog={blog} idx={idx} />
								  ))
								: ""}

							{/* <!-- pagination --> */}
							{totalItemsToShow < totalItems ? (
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
									type={2}
								/>
							) : (
								""
							)}
						</div>
					</div>
					<div className="col-lg-4">
						<BlogSidebar />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogsPrimary;
