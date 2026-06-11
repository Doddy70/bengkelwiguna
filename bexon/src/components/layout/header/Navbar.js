import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader, navItems: dynamicNavItems }) => {
	const makeActiveLink = useActiveLink();
	const staticNavItems = getNavItems();
	
	// Gunakan dynamicNavItems jika ada, jika tidak fallback ke staticNavItems
	const navItems = dynamicNavItems || staticNavItems;
	
	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems.map((item, idx) => {
						const hasSubmenu = item?.submenu && item.submenu.length > 0;
						const activeLink = makeActiveLink(item);
						
						const isMegaMenuPagesStyle = item?.name?.toLowerCase().includes("layanan") || item?.submenu?.length > 7;
						const isMegaMenuServiceStyle = !isMegaMenuPagesStyle && item?.submenu?.length > 3;

						if (isMegaMenuPagesStyle && hasSubmenu) {
							const chunkSize = Math.ceil(item.submenu.length / 2);
							const columns = [];
							for (let i = 0; i < item.submenu.length; i += chunkSize) {
								columns.push(item.submenu.slice(i, i + chunkSize));
							}

							return (
								<li
									key={idx}
									className={`has-dropdown ${
										activeLink?.isActive ? "current-menu-ancestor" : ""
									}`}
								>
									<Link href={activeLink?.path || "#"}>
										{activeLink?.name}
									</Link>
									<ul className="sub-menu header__mega-menu mega-menu mega-menu-pages">
										<li>
											<div className="mega-menu-wrapper">
												{columns.map((colItems, colIdx) => (
													<div key={colIdx} className="mega-menu-pages-single">
														<div className="mega-menu-pages-single-inner">
															<h6 className="mega-menu-title">
																{colIdx === 0 ? "Layanan Utama" : "Layanan Lainnya"}
															</h6>
															<div className="mega-menu-list">
																{colItems.map((subItem, subIdx) => {
																	const activeSubLink = makeActiveLink(subItem);
																	return (
																		<Link
																			key={subIdx}
																			href={activeSubLink?.path || "#"}
																			className={activeSubLink?.isActive ? "active" : ""}
																		>
																			{activeSubLink?.name}
																		</Link>
																	);
																})}
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
																	width={280}
																	height={180}
																	sizes="280px"
																	style={{ width: '100%', height: 'auto' }}
																/>
															</div>
														</div>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</li>
							);
						}

						return (
							<li
								key={idx}
								className={`${hasSubmenu ? "has-dropdown" : ""} ${
									activeLink?.isActive ? "current-menu-ancestor" : ""
								}`}
							>
								<Link href={activeLink?.path || "#"}>
									{activeLink?.name}
								</Link>
								{isMegaMenuServiceStyle ? (
									<ul className="sub-menu mega-menu-service">
										{item.submenu.map((subItem, subIdx) => {
											const activeSubLink = makeActiveLink(subItem);
											return (
												<li key={subIdx}>
													<Link
														className="mega-menu-service-single"
														href={activeSubLink?.path || "#"}
													>
														<span className="mega-menu-service-icon">
															<i className={subItem?.icon || "tji-service-1"}></i>
														</span>
														<span className="mega-menu-service-title">
															{activeSubLink?.name}
														</span>
														<span className="mega-menu-service-nav">
															<i className="tji-arrow-right-long"></i>
															<i className="tji-arrow-right-long"></i>
														</span>
													</Link>
												</li>
											);
										})}
									</ul>
								) : hasSubmenu ? (
									<ul className="sub-menu">
										{item.submenu.map((subItem, subIdx) => {
											const activeSubLink = makeActiveLink(subItem);
											return (
												<li
													key={subIdx}
													className={activeSubLink?.isActive ? "current-menu-item" : ""}
												>
													<Link href={activeSubLink?.path || "#"}>
														{activeSubLink?.name}
													</Link>
												</li>
											);
										})}
									</ul>
								) : null}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
