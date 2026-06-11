import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard8 from "@/components/shared/cards/BlogCard8";
import getBlogs from "@/libs/getBlogs";

const Blogs8 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="tj-blog-section-2 h8-blog section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-12 col-lg-4 col-xl-3">
						<div className="sec-heading style-3 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i>Insights & Ideas
							</span>
							<h2 className="sec-title title-anim">
								Read Our Latest Blog & News.
							</h2>
							<div className="h8-blog-more wow fadeInUp" data-wow-delay=".8s">
								<ButtonPrimary text={"More Blogs"} url={"/blogs"} />
							</div>
						</div>
					</div>
					<div className="col-12 col-lg-8 col-xl-9">
						<div className="blog-wrapper h8-blog-wrapper ">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard8 key={idx} blog={blog} idx={idx} />
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs8;
