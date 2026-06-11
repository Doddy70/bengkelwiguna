"use client";
import BlogCard3 from "@/components/shared/cards/BlogCard3";
import getBlogs from "@/libs/getBlogs";
const Blogs3 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-3 section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading style-3 text-center">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Read Blogs
							</span>
							<h2 className="sec-title title-anim">Strategies and Insights.</h2>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{blogs?.length
						? blogs?.map((blog, idx) => (
								<div className="col-lg-4 col-md-6" key={idx}>
									<BlogCard3 blog={blog} idx={idx} />
								</div>
						  ))
						: ""}
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default Blogs3;
