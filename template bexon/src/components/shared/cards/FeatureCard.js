const FeatureCard = ({ feature, type, idx }) => {
	const { icon, title, desc } = feature ? feature : {};
	return (
		<div
			className={`choose-box ${type === 2 ? "h6-choose-box" : ""} right-swipe`}
		>
			<div className="choose-content">
				<div className="choose-icon">
					<i className={icon}></i>
				</div>
				<h4 className="title">{title}</h4>
				<p className="desc">{desc}</p>
			</div>
		</div>
	);
};

export default FeatureCard;
