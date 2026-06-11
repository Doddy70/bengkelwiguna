import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";

const BlogCard5 = ({ blog, idx, hasNoDesc }) => {
	const {
		title,
		desc,
		id,
		img3 = "/images/blog/h5-blog-1.webp",
		category,
		date,
		day,
		month,
	} = blog || {};
	return (
		<div
			className="blog-item style-2 h5-blog-item wow fadeInUp"
			data-wow-delay={`${makeWowDelay(idx, 0.3, 2)}`}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<img src={img3} alt="" />
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="title-area">
					<div className="blog-meta">
						<span className="categories">
							<Link href={`/blogs?category=${makePath(category)}`}>
								{category}
							</Link>
						</span>
						<span>
							By <Link href={`/blogs/${id}`}>Ellinien Loma</Link>
						</span>
					</div>
					<h4 className="title">
						<Link href={`/blogs/${id}`}>{title}</Link>
					</h4>
					{idx === 0 ? hasNoDesc ? "" : <p className="desc">{desc}</p> : ""}
				</div>
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
	);
};

export default BlogCard5;
