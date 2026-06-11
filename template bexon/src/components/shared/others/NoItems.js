import ButtonPrimary from "../buttons/ButtonPrimary";

const NoItems = ({
	text = "Empty!",
	navUrl = "/",
	navText = "Return to home",
}) => {
	return (
		<div className="tj-entry__content">
			<div className="woocommerce">
				<div className="woocommerce-notices-wrapper">
					<div className="cart-empty woocommerce-info">{text}</div>
				</div>
				<div className="wc-empty-cart-message"></div>{" "}
				<p className="return-to-shop text-center">
					<ButtonPrimary
						text={navText}
						url={navUrl}
						className={"wc-backward"}
					/>
				</p>
			</div>
		</div>
	);
};

export default NoItems;
