"use client";

import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";

const FaqSpesialis = ({ faqs = [], image = null }) => {
	if (!faqs || faqs.length === 0) return null;

	// Prepare items in the format expected by FaqItem
	const items = faqs.map((faq, idx) => ({
		title: faq.q,
		desc: faq.a,
		initActive: idx === 0,
	}));

	return (
		<section className="tj-faq-section section-gap mt-5 mb-5 pt-0 pb-0">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<div className="faq-img-area">
							<div className="faq-img overflow-hidden">
								<Image
									src={image || "/images/faq/faq.webp"}
									alt="Pertanyaan Umum"
									width={585}
									height={629}
									style={{ objectFit: 'cover' }}
								/>
								<h2 className="title">
									Pertanyaan Umum
								</h2>
							</div>
						</div>
					</div>

					<div className="col-lg-6">
						<BootstrapWrapper>
							<div
								className="accordion tj-faq style-2"
								id="faqOne"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem key={idx} item={item} idx={idx} />
									  ))
									: ""}
							</div>
						</BootstrapWrapper>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FaqSpesialis;
