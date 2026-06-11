import countTotalPrice from "@/libs/countTotalPrice";
import modifyAmount from "@/libs/modifyAmount";
import sliceText from "@/libs/sliceText";

const CheckoutProduct = ({ product }) => {
	const { title, price, disc, quantity } = product ? product : {};
	const totalPriceSingle = countTotalPrice([{ price, quantity, disc }]);

	return (
		<tr className="cart_item">
			<td className="product-name">
				{sliceText(title, 20)}
				<strong className="product-quantity"> × {quantity}</strong>
			</td>
			<td className="product-total">
				<span className="woocommerce-Price-amount amount">
					<bdi>
						<span className="woocommerce-Price-currencySymbol">$</span>
						{modifyAmount(totalPriceSingle)}
					</bdi>
				</span>
			</td>
		</tr>
	);
};

export default CheckoutProduct;
