import BlogCard5 from "@/components/shared/cards/BlogCard5";
import getBlogs from "@/libs/getBlogs";

const Blogs5 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="h5-blog section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>READ BLOGS
							</span>
							<h2 className="sec-title text-anim">Strategies and Insights.</h2>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h5-blog-wrapper">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard5 key={idx} blog={blog} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs5;
