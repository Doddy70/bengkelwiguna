"use client";
import BlogsPrimary from "@/components/sections/blogs/BlogsPrimary";
import filterItems from "@/libs/filterItems";
import getBlogs from "@/libs/getBlogs";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

const BlogMain = () => {
	const allItems = useMemo(() => getBlogs());
	const category = useSearchParams()?.get("category");
	const tag = useSearchParams()?.get("tag");
	const author_role = useSearchParams()?.get("author_role");
	const search = useSearchParams()?.get("search");
	// Filter Items
	const filteredItems = filterItems(
		allItems,
		category
			? "category"
			: tag
			? "tags"
			: author_role
			? "role"
			: search
			? "search"
			: "",
		category
			? category
			: tag
			? tag
			: author_role
			? author_role
			: search
			? search
			: ""
	);

	return (
		<div>
			<BlogsPrimary filteredItems={filteredItems} />
		</div>
	);
};

export default BlogMain;
