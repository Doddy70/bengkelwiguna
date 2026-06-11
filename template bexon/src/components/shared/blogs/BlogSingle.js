"use client";
import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";
import ButtonPrimary from "../buttons/ButtonPrimary";

const BlogSingle = ({ blog, idx }) => {
	const {
		id,
		detailsImg,
		img = "/images/blog/blog-1.webp",
		title,
		desc,
		blogTopList,
		category,
		slider,
		author,
		popupVideo,
		day,
		month,
		date,
		comments,
	} = blog ? blog : {};

	return (
		<article
			className="blog-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-thumb">
				<Link href={`/blogs/${id}`}>
					<Image src={img} alt="" width={870} height={450} />
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
							{category}
						</Link>
					</span>
					<span>
						By <Link href={`/blogs/${id}`}>Ellinien Loma</Link>
					</span>
				</div>
				<h3 className="title">
					<Link href={`/blogs/${id}`}>{title}</Link>
				</h3>
				<p className="desc">
					In today’s fast-paced business environment, the key to staying ahead
					of the competition lies in embracing innovation. At [Company Name], we
					specialize in unlocking your business’s full potential by providing
					tailored, forward-thinking solutions that drive growth, efficiency,
					and lasting success.
				</p>
				<ButtonPrimary
					text={"Read More"}
					url={`/blogs/${id}`}
					isTextBtn={true}
				/>
			</div>
		</article>
	);
};

export default BlogSingle;
