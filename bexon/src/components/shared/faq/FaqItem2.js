"use client";

const FaqItem2 = ({ item = {}, idx }) => {
	const { title, desc, initActive } = item;

	return (
		<div className="accordion-item active wow fadeInUp" data-wow-delay=".3s">
			<button
				className={`faq-title ${initActive ? "" : "collapsed"}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#faq-1-${idx + 1}`}
				aria-expanded={initActive ? true : false}
			>
				{" "}
				{title}
			</button>
			<div
				id={`faq-1-${idx + 1}`}
				className={`collapse ${initActive ? "show" : ""}`}
				data-bs-parent="#faqTwo"
			>
				<div className="accordion-body faq-text">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default FaqItem2;
