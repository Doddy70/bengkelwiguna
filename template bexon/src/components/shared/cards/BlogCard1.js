import makePath from "@/libs/makePath";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogCard1 = ({ blog, idx }) => {
	const { title, desc, id, img, category, date, day, month } = blog || {};
	return (
		<div className="blog-item wow fadeInUp" data-wow-delay={`0.${idx + 1}s`}>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					{" "}
					<Image
						src={img ? img : "/images/blog/blog-1.webp"}
						alt="Images"
						width={870}
						height={450}
					/>
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/blogs?category=${makePath(category)}`}>
							{" "}
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
				<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</div>
	);
};

export default BlogCard1;
