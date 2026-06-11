import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard10 from "@/components/shared/cards/BlogCard10";
import getBlogs from "@/libs/getBlogs";

const Blogs10 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="h10-blog section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap ">
							<div className="heading-wrap-content">
								<div className="sec-heading style-3">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Insights & Ideas
									</span>
									<h2 className="sec-title text-anim">
										The Ultimate Resource.
									</h2>
								</div>
								<div className="btn-area wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"More Blogs"} url={"/blogs"} />
								</div>
							</div>
						</div>
					</div>
					<div className="col-12 ">
						<div className="blog-wrapper h8-blog-wrapper h10-blog-wrapper ">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard10
											key={idx}
											blog={blog}
											idx={idx}
											hasNoDesc={true}
										/>
								  ))
								: ""}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs10;
