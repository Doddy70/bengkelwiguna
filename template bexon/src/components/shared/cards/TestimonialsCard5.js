import Image from "next/image";

const TestimonialsCard5 = ({ testimonial }) => {
	const {
		authorName,
		authorDesig,
		desc,
		img = "/images/testimonial/client-1.webp",
		logoImg,
		logoImgLight,
	} = testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<div className="h6-testimonial-author-wrapper">
				<div className="testimonial-author">
					<div className="author-inner">
						<div className="author-img">
							<Image
								src={img ? img : "/images/testimonial/client-1.webp"}
								alt="Images"
								width={89}
								height={89}
								style={{ height: "auto" }}
							/>
						</div>
						<div className="author-header">
							<h4 className="title">Guy Hawkins</h4>
							<span className="designation">Co. Founder</span>
						</div>
					</div>
				</div>
				<div className="star-ratings">
					<div className="fill-ratings" style={{ width: "100%" }}>
						<span>★★★★★</span>
					</div>
					<div className="empty-ratings">
						<span>★★★★★</span>
					</div>
				</div>
			</div>
			<div className="desc">
				<p>
					“Working with Bexon has been a game-changer for our business. Their
					team's professionalism, attention to detail, and innovative solutions
					have helped us streamline operations our goals faster than imagined.
					We truly feel like a valued partner.”
				</p>
			</div>
		</div>
	);
};

export default TestimonialsCard5;
