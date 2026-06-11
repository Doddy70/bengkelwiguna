import TestimonialsCard8 from "@/components/shared/cards/TestimonialsCard8";
import getTestimonials from "@/libs/getTestimonials";

const Testimonials9 = () => {
	const testimonials1 = getTestimonials()?.slice(0, 2);

	const testimonials2 = getTestimonials()?.slice(2, 4);

	return (
		<section className="h9-testimonial section-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 order-2 order-lg-1">
						<div className="h9-testimonial-wrap">
							{testimonials1?.length
								? testimonials1?.map((testimonial, idx) => (
										<TestimonialsCard8
											key={idx}
											testimonial={testimonial}
											idx={idx}
											className={idx === 1 ? "style-2" : ""}
										/>
								  ))
								: ""}
						</div>
					</div>
					<div className="col-lg-4 order-1 order-lg-2">
						<div className="h9-testimonial-heading">
							<div className="sec-heading style-8">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									Clients Testimonials
								</span>
								<h2 className="sec-title title-anim">Our Trusted Clients.</h2>
							</div>
							<div
								className="testimonial-img wow fadeInUpBig"
								data-wow-delay=".3s"
							>
								<img src="/images/testimonial/h9-testimonial-img.webp" alt="" />
							</div>
							<div className="shape-icon wow fadeIn" data-wow-delay=".5s">
								<img src="/images/shape/big-icon.png" alt="" />
							</div>
						</div>
					</div>
					<div className="col-lg-4 order-3 order-lg-3">
						<div className="h9-testimonial-wrap style-2">
							{testimonials2?.length
								? testimonials2?.map((testimonial, idx) => (
										<TestimonialsCard8
											key={idx}
											testimonial={testimonial}
											idx={idx}
											className={idx === 0 ? "style-2" : ""}
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

export default Testimonials9;
