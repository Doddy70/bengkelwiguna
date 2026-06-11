import BlogCard7 from "@/components/shared/cards/BlogCard7";
import getBlogs from "@/libs/getBlogs";

const Blogs7 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section h7-blog  section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-2 style-7 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Insights & Ideas
							</span>
							<h2 className="sec-title text-anim">The Ultimate Resource.</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4 h7-blog-wrapper">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div key={idx} className="col-xl-4 col-md-6">
									<BlogCard7 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
		</section>
	);
};

export default Blogs7;
