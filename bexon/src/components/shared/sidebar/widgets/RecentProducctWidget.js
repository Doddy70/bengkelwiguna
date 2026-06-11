import getProducts from "@/libs/getProducts";
import Image from "next/image";
import Link from "next/link";

const RecentProducctWidget = () => {
	const recentItems = getProducts()?.slice(0, 3);
	return (
		<div className="product-widget  widget_products">
			<h5 className="product-widget-title">Latest products</h5>
			<ul className="product_list_widget">
				{recentItems?.length
					? recentItems?.map(
							({ id, title, img, price, previousPrice }, idx) => (
								<li
									key={idx}
									className="tj-recent-product-list sidebar-recent-post"
								>
									<div className="single-post d-flex align-items-center ">
										<div className="post-image">
											<Link href={`/shop/${id}`}>
												<Image
													src={img ? img : "/images/product/product-1.webp"}
													className="attachment-_thumbnail size-_thumbnail"
													alt="Personal holding earbud"
													width={300}
													height={300}
												/>
											</Link>
										</div>

										<div className="post-header">
											<h5 className="tj-product-title">
												<Link href={`/shop/${id}`}>{title} </Link>
											</h5>
											<div className="tj-product-sidebar-rating-price tj-product-price">
												{previousPrice ? (
													<del>
														<span>
															<span>$</span>
															{previousPrice?.toFixed(2)}
														</span>
													</del>
												) : (
													""
												)}
												<ins>
													<span>
														<span>$</span>
														{price?.toFixed(2)}
													</span>
												</ins>
											</div>
										</div>
									</div>
								</li>
							)
					  )
					: ""}
			</ul>
		</div>
	);
};

export default RecentProducctWidget;
