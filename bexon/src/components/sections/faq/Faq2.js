import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FaqItem from "@/components/shared/faq/FaqItem";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";
import Image from "next/image";
import Link from "next/link";

const Faq2 = ({ type = 1 }) => {
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
		<section
			className={`tj-faq-section section-gap  ${
				type === 3 || type === 4 ? "" : "tj-arrange-container-2"
			}`}
		>
			<div className="container">
				<div className="row justify-content-between">
					{type === 3 ? (
						<div className="col-lg-4">
							<div className="content-wrap">
								<div className="sec-heading">
									<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
										<i className="tji-box"></i>Common Questions
									</span>
									<h2 className="sec-title title-anim">
										Need <span>Help?</span> Start Here...
									</h2>
								</div>
								<p className="desc wow fadeInUp" data-wow-delay=".6s">
									We stay ahead of curve, leveraging <br /> cutting-edge are
									technologies and <br /> strategies to competitive
								</p>
								<div className="wow fadeInUp" data-wow-delay=".8s">
									<ButtonPrimary text={"Request a Call"} url={"/contact"} />
								</div>
							</div>
						</div>
					) : (
						<div className="col-lg-6">
							<div
								className={`faq-img-area ${
									type === 3 ? "" : "tj-arrange-item-2"
								}`}
							>
								<div className="faq-img overflow-hidden">
									<Image
										src="/images/faq/faq.webp"
										alt=""
										width={585}
										height={629}
									/>
									<h2 className={`title ${type === 4 ? "title-anim" : ""}`}>
										Need Help? Start Here...
									</h2>
								</div>
								<div className="box-area ">
									<div className="call-box">
										<h4 className="title">Get Started Free Call? </h4>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<Link className="number" href="tel:18884521505">
											<span>1-888-452-1505</span>
										</Link>
									</div>
								</div>
							</div>
						</div>
					)}

					<div className={`col-lg-${type === 3 ? "8" : "6"}`}>
						<BootstrapWrapper>
							<div
								className={`accordion tj-faq ${
									type === 2 || type === 4 ? "style-2" : ""
								} ${type === 3 || type === 4 ? "" : "tj-arrange-item-2"}`}
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

export default Faq2;
