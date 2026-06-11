import modifyNumber from "@/libs/modifyNumber";

const ProcessCard3 = ({
	processSingle,
	idx,
	handleCurrentIndex,
	currentIndex,
}) => {
	const { title, img, desc, id } = processSingle ? processSingle : {};
	return (
		<div
			className={`process-item h6-working-process-item tj-hover-active-item ${
				currentIndex === idx ? "active" : ""
			}`}
			onMouseEnter={() => handleCurrentIndex(idx)}
		>
			<div className="process-step">
				<span>{modifyNumber(idx + 1)}.</span>
			</div>
			<div className="process-content">
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default ProcessCard3;
