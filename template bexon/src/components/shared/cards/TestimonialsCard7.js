import Image from "next/image";

const TestimonialsCard7 = ({ testimonial }) => {
	const {
		authorName,
		authorDesig,
		desc4,
		img = "/images/testimonial/client-1.webp",
		logoImg,
		logoImgLight,
	} = testimonial ? testimonial : {};
	return (
		<div className="testimonial-item">
			<div className="star-ratings">
				<div className="fill-ratings">
					<span>★★★★★</span>
				</div>
				<div className="empty-ratings">
					<span>★★★★★</span>
				</div>
			</div>
			<div className="desc">
				<p>{desc4}</p>
			</div>
			<div className="testimonial-author">
				<div className="author-inner">
					<div className="author-img">
						<Image
							src={img}
							alt="Images"
							width={89}
							height={89}
							style={{ height: "auto" }}
						/>
					</div>
					<div className="author-header">
						<h5 className="title">{authorName}</h5>
						<span className="designation">{authorDesig}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TestimonialsCard7;
