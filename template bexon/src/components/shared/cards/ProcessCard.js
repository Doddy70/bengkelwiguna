import makeWowDelay from "@/libs/makeWowDelay";
import modifyNumber from "@/libs/modifyNumber";

const ProcessCard = ({ processSingle, idx }) => {
	const { title, img, desc, id } = processSingle ? processSingle : {};
	return (
		<div
			className="process-item wow fadeInLeft"
			data-wow-delay={makeWowDelay(idx, 0.3)}
		>
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

export default ProcessCard;
