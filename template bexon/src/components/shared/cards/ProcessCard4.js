import modifyNumber from "@/libs/modifyNumber";

const ProcessCard4 = ({ processSingle, idx }) => {
	const {
		title,
		iconName = "tji-growth",
		desc,
		id,
	} = processSingle ? processSingle : {};
	return (
		<div className="h10-process-item tj-sticky-panel-3">
			<h6 className="h10-process-sln">Step {modifyNumber(idx + 1)}</h6>
			<div className="h10-process-icon">
				<i className={iconName}></i>
			</div>
			<div className="h10-process-content">
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default ProcessCard4;
