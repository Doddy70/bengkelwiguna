"use client";

const FaqItem = ({ item = {}, idx }) => {
	const { title, desc, initActive } = item;

	return (
		<div className={`accordion-item `}>
			<button
				className={`faq-title ${initActive ? "" : "collapsed"}`}
				type="button"
				data-bs-toggle="collapse"
				data-bs-target={`#faq-${idx + 1}`}
				aria-expanded={initActive ? true : false}
			>
				{title}
			</button>
			<div
				id={`faq-${idx + 1}`}
				className={`collapse ${initActive ? "show" : ""}`}
				data-bs-parent="#faqOne"
			>
				<div className="accordion-body faq-text">
					<p>{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default FaqItem;
