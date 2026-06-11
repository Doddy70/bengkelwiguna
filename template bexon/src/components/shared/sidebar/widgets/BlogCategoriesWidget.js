import countDataLength from "@/libs/countDataLength";
import filterItems from "@/libs/filterItems";
import getBlogCategories from "@/libs/getBlogCategories";
import getBlogs from "@/libs/getBlogs";
import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const BlogCategoriesWidget = () => {
	const categories = getBlogCategories();
	const blogs = getBlogs();
	return (
		<div className="tj-sidebar-widget widget-categories">
			<h4 className="widget-title">Categories</h4>
			<ul>
				{categories?.length
					? categories?.map((category, idx) => (
							<li key={idx}>
								<Link href={`/blogs?category=${makePath(category)}`}>
									{category}{" "}
									<span className="number">
										(
										{modifyNumber(
											countDataLength(
												filterItems(blogs, "category", makePath(category))
											)
										)}
										)
									</span>
								</Link>{" "}
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
};

export default BlogCategoriesWidget;
