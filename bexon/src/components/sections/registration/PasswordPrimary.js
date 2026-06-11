const PasswordPrimary = () => {
	return (
		<section className="full-width tj-page__area section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="tj-page__container">
							<div className="tj-entry__content">
								<div className="woocommerce">
									<div className="woo-lost-password">
										<h3>Forgot password?</h3>
										<p>
											Please enter your username or email address carefully. You
											will receive a secure link to create a new password via
											email address.
										</p>

										<form
											method="post"
											className="woocommerce-ResetPassword lost_reset_password"
										>
											<p className="woocommerce-form-row woocommerce-form-row--first form-row form-row-first">
												<label htmlFor="user_login">
													Username or email&nbsp;
													<span className="required" aria-hidden="true">
														*
													</span>
												</label>
												<input
													className="woocommerce-Input woocommerce-Input--text input-text"
													type="text"
													name="user_login"
													id="user_login"
													autoComplete="username"
													required=""
													aria-required="true"
												/>
											</p>

											<div className="clear"></div>

											<p className="woocommerce-form-row form-row">
												<input
													type="hidden"
													name="wc_reset_password"
													defaultValue="true"
												/>
												<button
													type="submit"
													className="woocommerce-Button button"
													defaultValue="Reset password"
												>
													<span className="btn-text">
														<span>Reset password</span>
													</span>
												</button>
											</p>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PasswordPrimary;
