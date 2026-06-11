import countDataLength from "@/libs/countDataLength";
import filterItems from "@/libs/filterItems";
import getProductCategories from "@/libs/getProductCategories";
import getProducts from "@/libs/getProducts";
import makePath from "@/libs/makePath";
import Link from "next/link";

const ProductCategoriesWidget = () => {
	const categories = getProductCategories();
	const items = getProducts();
	return (
		<div className="product-widget  widget_product_categories">
			<h5 className="product-widget-title">Categories</h5>
			<ul className="product-categories">
				{categories?.length
					? categories?.map((category, idx) => (
							<li key={idx}>
								<Link href={`/shop?category=${makePath(category)}`}>
									{category}
								</Link>{" "}
								(
								{countDataLength(
									filterItems(items, "category", makePath(category))
								)}
								)
							</li>
					  ))
					: ""}
			</ul>
		</div>
	);
};

export default ProductCategoriesWidget;
