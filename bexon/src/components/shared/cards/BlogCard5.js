import makePath from "@/libs/makePath";
import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
import Image from "next/image";
import Link from "next/link";

const BlogCard5 = ({ blog, idx, hasNoDesc }) => {
	// Parse WP Data or fallback to static mapping
	const postTitle = blog?.title?.rendered || blog?.title || "Artikel Tanpa Judul";
	const postId = blog?.slug || blog?.id || "#";
	const postImg = blog?._embedded?.['wp:featuredmedia']?.[0]?.source_url || blog?.img3 || "/images/blog/h5-blog-1.webp";
	const postDesc = blog?.excerpt?.rendered?.replace(/<[^>]*>?/gm, '') || blog?.desc || "";
	const postCategory = blog?._embedded?.['wp:term']?.[0]?.[0]?.name || blog?.category || "Berita";
	const postDate = new Date(blog?.date || blog?.date || new Date());
	const dayStr = postDate.getDate().toString();
	const monthStr = postDate.toLocaleString('id-ID', { month: 'short' });
	return (
		<div
			className="blog-item style-2 h5-blog-item wow fadeInUp"
			data-wow-delay={`${makeWowDelay(idx, 0.3, 2)}`}
		>
			<div className="blog-thumb">
			<Link href={`/blog/${postId}`}>
				<div style={{ position: 'relative', width: '100%', height: '250px', overflow: 'hidden' }}>
					<Image
						src={postImg}
						alt={postTitle}
						fill
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
						style={{ objectFit: 'cover' }}
					/>
				</div>
			</Link>
			<div className="blog-date">
					<span className="date">{modifyNumber(dayStr)}</span>
					<span className="month">{monthStr}</span>
				</div>
			</div>
			<div className="blog-content">
				<div className="title-area">
					<div className="blog-meta">
						<span className="categories">
							<Link href={`/blog?category=${makePath(postCategory)}`}>
								{postCategory}
							</Link>
						</span>
						<span>
							By <Link href={`/blog/${postId}`}>Admin Wiguna</Link>
						</span>
					</div>
					<h4 className="title">
						<Link href={`/blog/${postId}`}>{postTitle}</Link>
					</h4>
					{idx === 0 ? hasNoDesc ? "" : <p className="desc" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{postDesc}</p> : ""}
				</div>
				<Link className="text-btn" href={`/blog/${postId}`}>
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
