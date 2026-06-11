import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import Link from "next/link";

const BlogCard10 = ({ blog, idx, hasNoDesc }) => {
	const {
		title,
		desc,
		id,
		img = "/images/blog/h5-blog-1.webp",
		category,
		date2,
		day,
		month,
	} = blog || {};
	return (
		<div
			className="blog-item style-2 wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.2, 2)}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<img src={img} alt="" />
				</Link>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<div className="blog-date-wrapper">
						<span className="blog-author">
							By <Link href={`/blogs/${id}`}>Ellinien Loma</Link>
						</span>
						<span className="blog-date">{date2}</span>
					</div>
					<span className="categories">
						<Link href={`/blogs?category=${makePath(category)}`}>
							{" "}
							{category}
						</Link>
					</span>
				</div>
				<div className="title-area">
					<h3 className="title">
						<Link href={`/blogs/${id}`}>{title}</Link>
					</h3>
					<Link className="text-btn" href={`/blogs/${id}`}>
						<span className="btn-text">
							<span>Read More</span>
						</span>
						<span className="btn-icon">
							<i className="tji-arrow-right-long"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default BlogCard10;
