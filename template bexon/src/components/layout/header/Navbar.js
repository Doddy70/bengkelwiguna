import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems();
	const homeNav = makeActiveLink(navItems[0]);
	const pagesNav = makeActiveLink(navItems[1]);
	const serviceNav = makeActiveLink(navItems[2]);
	const portfolioNav = makeActiveLink(navItems[3]);
	const blogNav = makeActiveLink(navItems[4]);
	const contactNav = makeActiveLink(navItems[5]);

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					<li
						className={`has-dropdown ${
							homeNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={homeNav?.path ? homeNav?.path : "#"}>
							{homeNav?.name}
						</Link>
						<ul className="sub-menu header__mega-menu mega-menu  ">
							<li>
								<div className="mega-menu-wrapper">
									<div className="container-fluid gap-60-25">
										<div className="row">
											{homeNav?.submenu?.length
												? homeNav?.submenu?.map((item, idx) => (
														<div key={idx} className="col-xl-3 col-lg-3 col-12">
															<div
																className={`tj-demo-thumb ${
																	item?.isComming ? "coming" : ""
																}`}
															>
																<div className="image">
																	<Image
																		src={
																			item?.img
																				? item?.img
																				: "/images/header/demo/home-1.webp"
																		}
																		alt=""
																		width={570}
																		height={434}
																	/>
																	{item?.badge ? (
																		<span className="tj-demo-badge tj-zoom-in-out-anim">
																			{item?.badge}
																		</span>
																	) : (
																		""
																	)}
																	{!item?.isComming ? (
																		<div className="tj-demo-button">
																			<ButtonPrimary
																				text={"View demo"}
																				url={item?.path}
																				className={"header_btn"}
																			/>
																		</div>
																	) : (
																		""
																	)}
																</div>
																<h6 className="tj-demo-title">
																	{item?.isComming ? (
																		item?.name
																	) : (
																		<Link href={item?.path ? item?.path : "#"}>
																			{item?.name}
																		</Link>
																	)}
																</h6>
															</div>
														</div>
												  ))
												: ""}
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							pagesNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={pagesNav?.path}>{pagesNav?.name}</Link>
						<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
							<li>
								<div className="mega-menu-wrapper">
									{pagesNav?.submenu?.length
										? pagesNav?.submenu?.map((pageItem, idx) => (
												<div key={idx} className="mega-menu-pages-single">
													<div className="mega-menu-pages-single-inner">
														<h6 className="mega-menu-title">
															{pageItem?.name}
														</h6>
														<div className="mega-menu-list">
															{pageItem?.items?.length
																? pageItem?.items?.map((item, idx2) => (
																		<Link
																			key={100 + idx2}
																			href={item?.path ? item?.path : "/"}
																			className={item?.isActive ? "active" : ""}
																		>
																			{item?.name}
																			{item?.badge ? (
																				<span
																					className={`mega-menu-badge tj-zoom-in-out-anim ${
																						item?.badge === "HOT"
																							? "mega-menu-badge-hot"
																							: ""
																					}`}
																				>
																					{item?.badge}
																				</span>
																			) : (
																				""
																			)}
																		</Link>
																  ))
																: ""}
														</div>
													</div>
												</div>
										  ))
										: ""}

									<div className="col-12 col-lg-3 mega-menu-pages-single">
										<div className="mega-menu-pages-single-inner">
											<div className="feature-box">
												<div className="feature-content">
													<h2 className="title">Modern</h2>
													<span>Home Makeover</span>
													<Link
														className="read-more feature-contact"
														href="tel:8321890640"
													>
														<i className="tji-phone-3"></i>
														<span>+8 (321) 890-640</span>
													</Link>
												</div>
												<div className="feature-images">
													<img src="/images/service/service-ad.webp" alt="" />
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							serviceNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={serviceNav?.path ? serviceNav?.path : "#"}>
							{serviceNav?.name}
						</Link>
						<ul className="sub-menu  mega-menu-service">
							{serviceNav?.submenu?.length
								? serviceNav?.submenu?.map((item, idx) => (
										<li key={idx}>
											<Link
												className="mega-menu-service-single"
												href={item?.path ? item?.path : "/"}
											>
												{" "}
												<span className="mega-menu-service-icon">
													<i
														className={
															item?.icon ? item?.icon : "tji-service-1"
														}
													></i>
												</span>{" "}
												<span className="mega-menu-service-title">
													{item?.name
														? item?.name
														: "Business process optimization"}
												</span>{" "}
												<span className="mega-menu-service-nav">
													<i className="tji-arrow-right-long"></i>
													<i className="tji-arrow-right-long"></i>
												</span>
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							portfolioNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={portfolioNav?.path ? portfolioNav?.path : "#"}>
							{portfolioNav?.name}
						</Link>
						<ul className="sub-menu">
							{portfolioNav?.submenu?.length
								? portfolioNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li
						className={`has-dropdown ${
							blogNav?.isActive ? "current-menu-ancestor" : ""
						}`}
					>
						<Link href={blogNav?.path ? blogNav?.path : "#"}>
							{blogNav?.name}
						</Link>
						<ul className="sub-menu">
							{blogNav?.submenu?.length
								? blogNav?.submenu?.map((item, idx) => (
										<li
											key={idx}
											className={item?.isActive ? "current-menu-item" : ""}
										>
											<Link href={item?.path ? item?.path : "/portfolios"}>
												{item?.name ? item?.name : "Portfolio"}
											</Link>
										</li>
								  ))
								: ""}
						</ul>
					</li>
					<li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
						<Link href={contactNav?.path ? contactNav?.path : "#"}>
							{contactNav?.name ? contactNav?.name : "Contact"}
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
