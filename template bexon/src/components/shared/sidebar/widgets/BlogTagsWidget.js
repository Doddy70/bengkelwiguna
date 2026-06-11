import getBlogTags from "@/libs/getBlogTags";
import makePath from "@/libs/makePath";
import Link from "next/link";

const BlogTagsWidget = () => {
	const tags = getBlogTags();

	return (
		<div className="tj-sidebar-widget widget-tag-cloud">
			<h4 className="widget-title">Tags</h4>
			<nav>
				<div className="tagcloud">
					{tags?.length
						? tags?.map((tag, idx) => (
								<Link key={idx} href={`/blogs?tag=${makePath(tag)}`}>
									{" "}
									{tag}
								</Link>
						  ))
						: ""}
				</div>
			</nav>
		</div>
	);
};

export default BlogTagsWidget;
