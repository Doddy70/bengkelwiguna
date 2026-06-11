import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = ({ navItems: dynamicNavItems }) => {
	const staticNavItems = getNavItems();
	const navItems = dynamicNavItems || staticNavItems;
	
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems.map((item, idx) => {
								const hasSubmenu = item?.submenu && item.submenu.length > 0;

								const isMegaMenuPagesStyle = item?.name?.toLowerCase().includes("layanan") || item?.submenu?.length > 7;
								const isMegaMenuServiceStyle = !isMegaMenuPagesStyle && item?.submenu?.length > 3;

								if (!hasSubmenu) {
									return (
										<li key={idx} className={idx === navItems.length - 1 ? "mean-last" : ""}>
											<Link href={item?.path || "#"}>
												{item?.name}
											</Link>
										</li>
									);
								}

								if (isMegaMenuPagesStyle) {
									const chunkSize = Math.ceil(item.submenu.length / 2);
									const columns = [];
									for (let i = 0; i < item.submenu.length; i += chunkSize) {
										columns.push(item.submenu.slice(i, i + chunkSize));
									}

									return (
										<MobileMenuItem
											key={idx}
											text={item?.name}
											url={item?.path || "#"}
											submenuClass={"header__mega-menu mega-menu mega-menu-pages"}
										>
											<li>
												<div className="mega-menu-wrapper">
													{columns.map((colItems, colIdx) => (
														<div key={colIdx} className="mega-menu-pages-single">
															<div className="mega-menu-pages-single-inner">
																<h6 className="mega-menu-title">
																	{colIdx === 0 ? "Layanan Utama" : "Layanan Lainnya"}
																</h6>
																<div className="mega-menu-list">
																	{colItems.map((subItem, subIdx) => (
																		<Link
																			key={subIdx}
																			href={subItem?.path || "#"}
																		>
																			{subItem?.name}
																		</Link>
																	))}
																</div>
															</div>
														</div>
													))}
													<div className="col-12 col-lg-3 mega-menu-pages-single">
														<div className="mega-menu-pages-single-inner">
															<div className="feature-box">
																<div className="feature-content">
																	<h2 className="title">Chat Minna</h2>
																	<span>Service Online</span>
																	<Link
																		className="read-more feature-contact"
																		href="https://wa.me/6287817773888?text=halo%20mon,%20saya%20ingin%20tanya%20seputar%20servis%20mobil%20saya%20di%20bengkel%20wiguna.%20(web)"
																		target="_blank"
																		rel="noopener noreferrer"
																	>
																		<i className="tji-phone-3"></i>
																		<span>Chat Minna</span>
																	</Link>
																</div>
																<div className="feature-images">
																	<Image
																		src="/images/service/banner-sidebar.jpg"
																		alt="Service Promo"
																		width={370}
																		height={370}
																	/>
																</div>
															</div>
														</div>
													</div>
												</div>
											</li>
										</MobileMenuItem>
									);
								}

								return (
									<MobileMenuItem
										key={idx}
										text={item?.name}
										url={item?.path || "#"}
										submenuClass={isMegaMenuServiceStyle ? "mega-menu-service" : ""}
									>
										{item.submenu.map((subItem, subIdx) => {
											if (isMegaMenuServiceStyle) {
												return (
													<li key={subIdx}>
														<Link
															className="mega-menu-service-single"
															href={subItem?.path || "#"}
														>
															<span className="mega-menu-service-icon">
																<i className={subItem?.icon || "tji-service-1"}></i>
															</span>
															<span className="mega-menu-service-title">
																{subItem?.name}
															</span>
															<span className="mega-menu-service-nav">
																<i className="tji-arrow-right-long"></i>
																<i className="tji-arrow-right-long"></i>
															</span>
														</Link>
													</li>
												);
											}

											return (
												<li key={subIdx}>
													<Link href={subItem?.path || "#"}>
														{subItem?.name}
													</Link>
												</li>
											);
										})}
									</MobileMenuItem>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
