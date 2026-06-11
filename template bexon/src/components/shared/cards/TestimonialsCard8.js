import makeWowDelay from "@/libs/makeWowDelay";

const TestimonialsCard8 = ({ testimonial, idx, className }) => {
	const {
		authorName,
		authorDesig,
		desc4,
		img = "/images/testimonial/client-1.webp",
		logoImg,
		logoImgLight,
	} = testimonial ? testimonial : {};
	return (
		<div
			className={`testimonial-item ${
				className ? className : ""
			} wow fadeInUpBig`}
			data-wow-delay={makeWowDelay(idx, 0.2)}
		>
			<div className="star-ratings">
				<div className="fill-ratings">
					<span>★★★★★</span>
				</div>
				<div className="empty-ratings">
					<span>★★★★★</span>
				</div>
			</div>
			<div className="desc">
				<p>
					“Working with Bexon has been a game-changer business. Their team's
					profession alism, attention to detail, and innovative solutions have
					help streamline operations our goals faster than imagined. We truly
					feel like a valued partner.”
				</p>
			</div>
			<div className="testimonial-author">
				<div className="author-inner">
					<div className="author-header">
						<h5 className="title">{authorName}</h5>
						<span className="designation">{authorDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard8;
