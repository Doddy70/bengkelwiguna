import BlogCard5 from "@/components/shared/cards/BlogCard5";
import getBlogs from "@/libs/getBlogs";

const Blogs5 = ({ blogs: dynamicBlogs }) => {
	const fallbackBlogs = getBlogs().slice(0, 3);
	const blogs = dynamicBlogs || fallbackBlogs;
	return (
		<section className="h5-blog section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading sec-heading-centered style-3">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s" style={{ color: '#224297', fontWeight: '600' }}>
								<i className="tji-box"></i>ARTIKEL & BERITA
							</span>
							<h2 className="sec-title text-anim">Tips & <span style={{ color: '#224297' }}>Berita Otomotif</span></h2>
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
