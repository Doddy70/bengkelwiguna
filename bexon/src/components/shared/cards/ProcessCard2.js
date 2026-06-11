import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";
const ProcessCard2 = ({ processSingle, idx }) => {
	const { title, img, desc, id } = processSingle ? processSingle : {};
	return (
		<div
			className="process-item h5-working-process-item wow bounceInUp"
			data-wow-delay={makeWowDelay(idx, 0.3, 2)}
		>
			<h5 className="h5-working-process-indicator">
				Step {modifyNumber(idx + 1)}
			</h5>
			<div className="process-step">
				<span>{modifyNumber(idx + 1)}</span>
			</div>
			<div className="process-content">
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default ProcessCard2;
