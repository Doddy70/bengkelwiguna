import modifyNumber from "@/libs/modifyNumber";
import Link from "next/link";
import Image from "next/image";

const SpesialisCard = ({ service, idx }) => {
	const {
		title,
		slug,
		featured_img,
		excerpt,
	} = service || {};

	return (
		<div className="h6-service-item">
			<div className="h6-service-thumb" style={{ minHeight: '230px', overflow: 'hidden', position: 'relative' }}>
				<Link href={`/layanan-spesialis/${slug}`}>
					<Image 
                        src={featured_img || "/images/service/h6-service-1.webp"} 
                        alt={title} 
                        fill
                        style={{ objectFit: 'cover' }}
                    />
				</Link>
			</div>
			<div className="h6-service-content">
				<h5 className="h6-service-index">{modifyNumber(idx + 1)}.</h5>
				<div className="h6-service-title-wrap">
					<h4 className="title">
						<Link href={`/layanan-spesialis/${slug}`}>{title}</Link>
					</h4>
					<Link className="text-btn" href={`/layanan-spesialis/${slug}`}>
						<span className="btn-icon">
							<i className="tji-arrow-right-long"></i>
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SpesialisCard;
