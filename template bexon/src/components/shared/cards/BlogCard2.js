import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard2 = ({ blog, idx }) => {
	const { title, desc, id, img1, category, date, day, month } = blog || {};
	return (
		<div className="blog-item style-2">
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<img src={img1 ? img1 : "/images/blog/blog-4.webp"} alt="" />
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
						<Link href={`/blogs/${id}`}>{title}.</Link>
					</h4>
				</div>
				<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default BlogCard2;
