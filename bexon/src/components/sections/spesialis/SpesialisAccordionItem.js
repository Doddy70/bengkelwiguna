"use client";

import Link from "next/link";

const SpesialisAccordionItem = ({ item = {}, idx }) => {
	const { title, slug, content, manfaat_spesialis, teknologi_spesialis } = item;
	const initActive = idx === 0; // The first item is active by default

	return (
		<div className="accordion-item active wow fadeInUp" data-wow-delay=".3s">
			<button
				className={`faq-title ${initActive ? "" : "collapsed"}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#faq-spesialis-${idx + 1}`}
				aria-expanded={initActive ? true : false}
			>
				{title}
			</button>
			<div
				id={`faq-spesialis-${idx + 1}`}
				className={`collapse ${initActive ? "show" : ""}`}
				data-bs-parent="#faqSpesialis"
			>
				<div className="accordion-body faq-text">
					{teknologi_spesialis && (
						<div className="mb-4">
							<h6 className="mb-2"><strong>Teknologi / Alat:</strong></h6>
							<p className="mb-0 text-primary">{teknologi_spesialis}</p>
						</div>
					)}
					
					<div className="mb-4" dangerouslySetInnerHTML={{ __html: content }} />

					{manfaat_spesialis && (
						<div className="mb-4">
							<h6 className="mb-2"><strong>Manfaat:</strong></h6>
							<div dangerouslySetInnerHTML={{ __html: manfaat_spesialis }} />
						</div>
					)}

					<div className="mt-4">
						<Link href={`/layanan-spesialis/${slug}`} className="tj-primary-btn btn-sm">
							Lihat Detail <i className="flaticon-right-arrow"></i>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SpesialisAccordionItem;
