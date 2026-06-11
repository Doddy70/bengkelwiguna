import FaqItem2 from "@/components/shared/faq/FaqItem2";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Link from "next/link";

const Faq4 = () => {
	const items = [
		{
			title: "What services does Bexon offer to clients?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: true,
		},
		{
			title: "How do I get started with Corporate Business?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "How do you ensure the success of a project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "How long will it take to complete my project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
		{
			title: "Can I track the progress of my project?",
			desc: "	Getting started is easy! Simply reach out to us through our contact form or give us a call, and we’ll schedule a consultation to discuss your project and how we can best assist you. Our team keeps you informed throughout the process, ensuring quality control and timely delivery.",
			initActive: false,
		},
	];
	return (
		<section className="h7-faq section-gap slidebar-stickiy-container">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-12 col-lg-4">
						<div className="sec-heading style-2 style-7 slidebar-stickiy">
							<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
								<i className="tji-box"></i> OUR SOLUTIONS
							</span>
							<h2 className="sec-title text-anim">
								Find answers to the common questions
							</h2>
							<Link className="number" href="tel:18884521505">
								{" "}
								<span className="call-icon">
									<i className="tji-phone"></i>
								</span>
								<span>1-888-452-1505</span>
							</Link>
						</div>
					</div>
					<div className="col-12 col-lg-8">
						<BootstrapWrapper>
							<div
								className="accordion tj-faq style-2 h7-faq-wrapper"
								id="faqTwo"
							>
								{items?.length
									? items?.map((item, idx) => (
											<FaqItem2 key={idx} item={item} idx={idx} />
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

export default Faq4;
