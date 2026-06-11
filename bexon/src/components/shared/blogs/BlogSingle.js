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
		slug,
		img = "/images/blog/blog-1.webp",
		title,
		desc,
		category,
		author = "Bengkel Wiguna",
		day,
		month,
	} = blog ? blog : {};

	return (
		<article
			className="blog-item wow fadeInUp"
			data-wow-delay={makeWowDelay(idx, 0.1)}
		>
			<div className="blog-thumb">
				<Link href={`/blog/${slug || id}`}>
					<div style={{ position: 'relative', width: '100%', height: '300px', overflow: 'hidden' }}>
						<Image
							src={img}
							alt={title || "Blog image"}
							fill
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 65vw, 800px"
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</Link>
				<div className="blog-date">
					<span className="date">{modifyNumber(day)}</span>
					<span className="month">{month}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="blog-meta">
					<span className="categories">
						<Link href={`/blog?category=${makePath(category || "Tips")}`}>
							{category || "Tips"}
						</Link>
					</span>
					<span>
						Oleh <Link href={`/blog/${slug || id}`}>{author}</Link>
					</span>
				</div>
				<h3 className="title">
					<Link href={`/blog/${slug || id}`} dangerouslySetInnerHTML={{ __html: title }} />
				</h3>
				<div className="desc" dangerouslySetInnerHTML={{ __html: desc || "Baca artikel selengkapnya..." }} />
				<ButtonPrimary
					text={"Baca Selengkapnya"}
					url={`/blog/${slug || id}`}
					isTextBtn={true}
				/>
			</div>
		</article>
	);
};

export default BlogSingle;
