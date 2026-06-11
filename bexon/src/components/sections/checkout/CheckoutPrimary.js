"use client";
import CheckoutProduct from "@/components/shared/checkout/CheckoutProduct";
import CountryInput from "@/components/shared/checkout/CountryInput";
import NoItems from "@/components/shared/others/NoItems";
import { useCartContext } from "@/context_api/CartContext";
import useSweetAlert from "@/hooks/useSweetAlert";
import countTotalPrice from "@/libs/countTotalPrice";
import getCountries from "@/libs/getCountries";
import getProducts from "@/libs/getProducts";
import getStates from "@/libs/getStates";
import modifyAmount from "@/libs/modifyAmount";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
const paymnetImage3 = "/img/icons/payment-3.png";

const CheckoutPrimary = () => {
	const [isPlaceOrder, setIsPlaceOrder] = useState(false);
	const countries = getCountries();
	const states = getStates();
	const creteAlert = useSweetAlert();
	const allProducts = getProducts();
	const searchParams = useSearchParams();
	const currentId = parseInt(searchParams.get("id"));
	const currentQuantity = parseInt(searchParams.get("quantity"));
	const { cartProducts } = useCartContext();
	const currentProduct = {
		...allProducts?.find(({ id }) => id === currentId),
		quantity: currentQuantity,
	};
	const commonProduct = cartProducts.find(
		({ id, title }) => id === currentId && title === currentProduct?.title
	);
	const isCurrentProduct = currentProduct?.title || currentProduct?.price;
	const isCommonProduct = commonProduct?.title || commonProduct?.price;
	const products = isCurrentProduct
		? [
				isCommonProduct
					? {
							...commonProduct,
							quantity: currentQuantity + commonProduct?.quantity,
					  }
					: currentProduct,
				...cartProducts?.filter(
					({ id, title }) => id !== currentId && title !== currentProduct?.title
				),
		  ]
		: cartProducts;
	const isProducts = currentProduct?.title || products?.length ? true : false;
	const subtotal = countTotalPrice(products);
	const shipping = 0;
	const totalPrice = modifyAmount(subtotal + shipping);
	// handle place order
	const handlePlaceOrder = () => {
		creteAlert("error", "Sorry! App is in demo mode.");
	};
	// get country
	const handleCountry = currentOption => {};
	// get state
	const handleStates = currentOption => {};
	return (
		<section className="full-width tj-page__area section-gap woocommerce-checkout">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{!isProducts ? (
							<NoItems
								text="No product selected to checkout!"
								navText="Return to shop"
								navUrl="/shop"
							/>
						) : (
							<div className="tj-page__container">
								<div className="tj-entry__content">
									<div className="woocommerce">
										<div className="row">
											<div className="col-lg-12">
												<div className="tj-checkout-billing-coupon">
													<div className="woocommerce-form-coupon-toggle">
														<div className="woocommerce-info">
															Have a coupon?{" "}
															<a href="#" className="showcoupon">
																Click here to enter your code
															</a>
														</div>
													</div>

													<form
														className="checkout_coupon woocommerce-form-coupon"
														method="post"
													>
														<p>
															If you have a coupon code, please apply it below.
														</p>

														<div className="d-flex align-items-center flex-wrap rg-30">
															<div className="form-row form-row-first">
																<input
																	type="text"
																	name="coupon_code"
																	className="input-text"
																	placeholder="Coupon code"
																	id="coupon_code"
																/>
															</div>
															<div className="form-row form-row-last">
																<button
																	type="submit"
																	className="tj-primary-btn button"
																	name="apply_coupon"
																	defaultValue="Apply coupon"
																>
																	<span className="btn-text">
																		<span>Apply coupon</span>
																	</span>
																	<span className="btn-icon">
																		<i className="tji-arrow-right-long"></i>
																	</span>
																</button>
															</div>
														</div>
														<div className="clear"></div>
													</form>
												</div>
											</div>
										</div>

										<form
											name="checkout"
											method="post"
											className="checkout"
											action="#"
										>
											<div className="row rg-40" id="customer_details">
												<div className="col-sm-12">
													<div
														className="tj-checkout-billing-wrapper"
														id="customer_form_details"
													>
														<div className="row">
															<div className="col-md-6">
																<div className="woocommerce-billing-fields">
																	<h3>Billing details</h3>
																	<div className="woocommerce-billing-fields__field-wrapper">
																		<p
																			className="form-row form-row-first validate-required"
																			id="billing_first_name_field"
																			data-priority="10"
																		>
																			<label
																				htmlFor="billing_first_name"
																				className="required_field"
																			>
																				First name&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_first_name"
																					id="billing_first_name"
																					placeholder=""
																					aria-required="true"
																					autoComplete="given-name"
																				/>
																			</span>
																		</p>
																		<p
																			className="form-row form-row-last validate-required"
																			id="billing_last_name_field"
																			data-priority="20"
																		>
																			<label
																				htmlFor="billing_last_name"
																				className="required_field"
																			>
																				Last name&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_last_name"
																					id="billing_last_name"
																					placeholder=""
																					aria-required="true"
																					autoComplete="family-name"
																				/>
																			</span>
																		</p>
																		<div
																			className="form-row form-row-wide address-field update_totals_on_change validate-required"
																			id="billing_country_field"
																			data-priority="40"
																		>
																			<label
																				htmlFor="billing_country"
																				className="required_field"
																			>
																				Country / Region&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<div className="woocommerce-input-wrapper">
																				<CountryInput
																					selectedIndex={0}
																					optionns={countries}
																					getSelectedOption={handleCountry}
																					className={"country_to_state"}
																				/>
																			</div>
																		</div>
																		<p
																			className="form-row address-field validate-required form-row-wide"
																			id="billing_address_1_field"
																			data-priority="50"
																		>
																			<label
																				htmlFor="billing_address_1"
																				className="required_field"
																			>
																				Street address&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_address_1"
																					id="billing_address_1"
																					placeholder="House number and street name"
																					aria-required="true"
																					autoComplete="address-line1"
																					data-placeholder="House number and street name"
																				/>
																			</span>
																		</p>
																		<p
																			className="form-row address-field form-row-wide"
																			id="billing_address_2_field"
																			data-priority="60"
																		>
																			<label
																				htmlFor="billing_address_2"
																				className="screen-reader-text"
																			>
																				Apartment, suite, unit, etc.&nbsp;
																				<span className="optional">
																					(optional)
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_address_2"
																					id="billing_address_2"
																					placeholder="Apartment, suite, unit, etc. (optional)"
																					autoComplete="address-line2"
																					data-placeholder="Apartment, suite, unit, etc. (optional)"
																				/>
																			</span>
																		</p>
																		<p
																			className="form-row address-field validate-required form-row-wide"
																			id="billing_city_field"
																			data-priority="70"
																			data-o_class="form-row form-row-wide address-field validate-required"
																		>
																			<label
																				htmlFor="billing_city"
																				className="required_field"
																			>
																				Town / City&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_city"
																					id="billing_city"
																					placeholder=""
																					aria-required="true"
																					autoComplete="address-level2"
																				/>
																			</span>
																		</p>
																		<div
																			className="form-row address-field validate-required validate-state form-row-wide"
																			id="billing_state_field"
																			data-priority="80"
																			data-o_class="form-row form-row-wide address-field validate-required validate-state"
																		>
																			<label
																				htmlFor="billing_state"
																				className="required_field"
																			>
																				State&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<div className="woocommerce-input-wrapper">
																				<CountryInput
																					selectedIndex={0}
																					optionns={states}
																					getSelectedOption={handleStates}
																					className={"state_select"}
																				/>
																			</div>
																		</div>
																		<p
																			className="form-row address-field validate-required validate-postcode form-row-wide"
																			id="billing_postcode_field"
																			data-priority="90"
																			data-o_class="form-row form-row-wide address-field validate-required validate-postcode"
																		>
																			<label
																				htmlFor="billing_postcode"
																				className="required_field"
																			>
																				ZIP Code&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="text"
																					className="input-text "
																					name="billing_postcode"
																					id="billing_postcode"
																					placeholder=""
																					aria-required="true"
																					autoComplete="postal-code"
																				/>
																			</span>
																		</p>
																		<p
																			className="form-row form-row-wide validate-phone"
																			id="billing_phone_field"
																			data-priority="100"
																		>
																			<label
																				htmlFor="billing_phone"
																				className=""
																			>
																				Phone&nbsp;
																				<span className="optional">
																					(optional)
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="tel"
																					className="input-text "
																					name="billing_phone"
																					id="billing_phone"
																					placeholder=""
																					autoComplete="tel"
																				/>
																			</span>
																		</p>
																		<p
																			className="form-row form-row-wide validate-required validate-email"
																			id="billing_email_field"
																			data-priority="110"
																		>
																			<label
																				htmlFor="billing_email"
																				className="required_field"
																			>
																				Email address&nbsp;
																				<span
																					className="required"
																					aria-hidden="true"
																				>
																					*
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<input
																					type="email"
																					className="input-text "
																					name="billing_email"
																					id="billing_email"
																					placeholder=""
																					defaultValue="admin@themejunction.net"
																					aria-required="true"
																					autoComplete="email"
																				/>
																			</span>
																		</p>
																	</div>
																</div>
															</div>
															<div className="col-md-6">
																<div className="woocommerce-shipping-fields"></div>
																<div className="woocommerce-additional-fields">
																	<h3>Additional information</h3>

																	<div className="woocommerce-additional-fields__field-wrapper">
																		<p
																			className="form-row notes"
																			id="order_comments_field"
																			data-priority=""
																		>
																			<label
																				htmlFor="order_comments"
																				className=""
																			>
																				Order notes&nbsp;
																				<span className="optional">
																					(optional)
																				</span>
																			</label>
																			<span className="woocommerce-input-wrapper">
																				<textarea
																					name="order_comments"
																					className="input-text "
																					id="order_comments"
																					placeholder="Notes about your order, e.g. special notes for delivery."
																					rows="2"
																					cols="5"
																				></textarea>
																			</span>
																		</p>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className="col-sm-12">
													<div className="cart-wrapper">
														<div className="order-review-wrapper">
															<h3 id="order_review_heading">Your order</h3>

															<div
																id="order_review"
																className="woocommerce-checkout-review-order"
															>
																<table className="shop_table woocommerce-checkout-review-order-table ss">
																	<thead>
																		<tr>
																			<th className="product-name">Product</th>
																			<th className="product-total">
																				Subtotal
																			</th>
																		</tr>
																	</thead>
																	<tbody>
																		{products?.map((product, idx) => (
																			<CheckoutProduct
																				key={idx}
																				product={product}
																			/>
																		))}
																	</tbody>
																	<tfoot>
																		<tr className="cart-subtotal dd">
																			<th>Subtotal</th>
																			<td>
																				<span className="woocommerce-Price-amount amount">
																					<bdi>
																						<span className="woocommerce-Price-currencySymbol">
																							$
																						</span>
																						{subtotal}
																					</bdi>
																				</span>
																			</td>
																		</tr>

																		<tr className="order-total">
																			<th>Total</th>
																			<td>
																				<strong>
																					<span className="woocommerce-Price-amount amount">
																						<bdi>
																							<span className="woocommerce-Price-currencySymbol">
																								$
																							</span>
																							{totalPrice}
																						</bdi>
																					</span>
																				</strong>
																			</td>
																		</tr>
																	</tfoot>
																</table>
																<div
																	id="payment"
																	className="woocommerce-checkout-payment"
																>
																	<ul className="wc_payment_methods payment_methods methods">
																		<li className="wc_payment_method payment_method_bacs">
																			<input
																				id="payment_method_bacs"
																				type="radio"
																				className="input-radio"
																				name="payment_method"
																				defaultValue="bacs"
																				defaultChecked
																				data-order_button_text=""
																			/>

																			<label htmlFor="payment_method_bacs">
																				Direct bank transfer{" "}
																			</label>
																			<div
																				className="payment_box payment_method_bacs"
																				style={{ display: "block" }}
																			>
																				<p>
																					Make your payment directly into our
																					bank account. Please use your Order ID
																					as the payment reference. Your order
																					will not be shipped until the funds
																					have cleared in our account.
																				</p>
																			</div>
																		</li>
																		<li className="wc_payment_method payment_method_cod">
																			<input
																				id="payment_method_cod"
																				type="radio"
																				className="input-radio"
																				name="payment_method"
																				defaultValue="cod"
																				data-order_button_text=""
																			/>
																			<label htmlFor="payment_method_cod">
																				Cash on delivery{" "}
																			</label>
																		</li>
																	</ul>
																	<div className="form-row place-order">
																		<div className="woocommerce-terms-and-conditions-wrapper">
																			<div className="woocommerce-privacy-policy-text"></div>
																		</div>

																		<button
																			type="button"
																			className="tj-primary-btn button alt"
																			onClick={handlePlaceOrder}
																		>
																			<span className="btn-text">
																				<span>Place order</span>
																			</span>
																			<span className="btn-icon">
																				<i className="tji-arrow-right-long"></i>
																			</span>
																		</button>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CheckoutPrimary;
