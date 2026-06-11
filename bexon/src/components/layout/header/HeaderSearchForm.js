const HeaderSearchForm = () => {
	return (
		<>
			<div className="search_popup">
				<div className="search_close">
					<button type="button" className="search_close_btn">
						<svg
							width="18"
							height="18"
							viewBox="0 0 18 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M17 1L1 17"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M1 1L17 17"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				</div>
				<div className="container">
					<div className="row">
						<div className="col-xxl-12">
							<div className="tj_search_wrapper">
								<div className="search_form">
									<form action="#">
										<div className="search_input">
											<h4 className="title">
												Search Blog, projects, Service or people.
											</h4>
											<div className="search-box">
												<input
													className="search-input-field"
													type="search"
													placeholder="Search here..."
													required=""
												/>
												<button type="submit">
													<i className="tji-search"></i>
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="search-popup-overlay"></div>
		</>
	);
};

export default HeaderSearchForm;
