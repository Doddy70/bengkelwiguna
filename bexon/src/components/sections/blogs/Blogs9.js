import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BlogCard5 from "@/components/shared/cards/BlogCard5";
import getBlogs from "@/libs/getBlogs";

const Blogs9 = () => {
	const blogs = getBlogs().slice(0, 3);
	return (
		<section className="h5-blog section-gap fix">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="sec-heading-wrap style-8">
							<div className="heading-wrap-content">
								<div className="sec-heading style-8">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										Insights & Ideas
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
				</div>
				<div className="row">
					<div className="col-12">
						<div className="h5-blog-wrapper h9-blog-wrapper">
							{blogs?.length
								? blogs?.map((blog, idx) => (
										<BlogCard5
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

export default Blogs9;
