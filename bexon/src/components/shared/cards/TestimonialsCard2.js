import Image from "next/image";

const TestimonialsCard2 = ({ testimonial }) => {
	const { authorName, authorDesig, desc2, img, logoImg, logoImgLight } =
		testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<span className="quote-icon">
				<i className="tji-quote"></i>
			</span>
			<div className="desc">
				<p>{desc2}</p>
			</div>
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
						<h4 className="title">{authorName}</h4>
						<span className="designation">{authorDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard2;
