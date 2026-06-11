import Link from "next/link";

const ButtonPrimary = ({ className, text, isTextBtn, url, type, iconName }) => {
	return (
		<>
			{type ? (
				<button
					type={type ? type : "submit"}
					className={`tj-primary-btn ${className ? className : ""}`}
				>
					<span className="btn-text">
						<span>{text}</span>
					</span>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
				</button>
			) : (
				<Link
					href={url ? url : "/"}
					className={`${isTextBtn ? "text-btn" : "tj-primary-btn"} ${
						className ? className : ""
					}`}
				>
					<span className="btn-text">
						<span>{text}</span>
					</span>
					<span className="btn-icon">
						<i className="tji-arrow-right-long"></i>
					</span>
				</Link>
			)}
		</>
	);
};

export default ButtonPrimary;
