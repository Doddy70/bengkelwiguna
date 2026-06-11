import getBlogs from "@/libs/getBlogs";
import sliceText from "@/libs/sliceText";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/wordpress";

const RecentBlogWidget = ({ recentPosts: dynamicRecentPosts }) => {
	// Fallback to static if not provided
	const recentBlogs = dynamicRecentPosts || getBlogs()
		?.filter(({ isBlogQuote }) => !isBlogQuote)
		?.slice(0, 3);

	return (
		<div className="tj-sidebar-widget tj-recent-posts">
			<h4 className="widget-title">Artikel Terbaru</h4>
			<ul>
				{recentBlogs?.length
					? recentBlogs?.map(
							(post, idx) => {
								const postUrl = `/blog/${post.slug || post.id}`;
								const img = post.img || post.smallImg || "/images/blog/post-1.webp";
								const postTitle = post.title;
								const postDate = post.date || `${post.day || ''} ${post.month || ''}`;
								return (
									<li key={idx}>
										<div className="post-thumb">
											<Link href={postUrl}>
												{" "}
												<Image
													src={img}
													alt="Blog"
													width={150}
													height={150}
													style={{ objectFit: 'cover' }}
												/>
											</Link>
										</div>
										<div className="post-content">
											<h6 className="post-title">
												<Link href={postUrl}>
													{sliceText(postTitle, 32, true)}
												</Link>
											</h6>
											<div className="blog-meta">
												<ul>
													<li>{postDate}</li>
												</ul>
											</div>
										</div>
									</li>
								);
							}
					  )
					: ""}
			</ul>
		</div>
	);
};

export default RecentBlogWidget;
