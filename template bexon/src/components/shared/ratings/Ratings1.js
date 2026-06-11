const Ratings1 = ({ width }) => {
	return (
		<div className="star-ratings">
			<div className="fill-ratings" style={{ width: width ? width : "100%" }}>
				<span>★★★★★</span>
			</div>
			<div className="empty-ratings">
				<span>★★★★★</span>
			</div>
		</div>
	);
};

export default Ratings1;
