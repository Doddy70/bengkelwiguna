import getProductTags from "@/libs/getProductTags";
import makePath from "@/libs/makePath";
import Link from "next/link";

const ProductTagsWidget = () => {
	const tags = getProductTags();

	return (
		<div className="product-widget  widget_product_tag_cloud">
			<h5 className="product-widget-title">Tags</h5>
			<div className="tagcloud">
				{tags?.length
					? tags?.map((tag, idx) => (
							<Link key={idx} href={`/shop?tag=${makePath(tag)}`}>
								{" "}
								{tag}
							</Link>
					  ))
					: ""}
			</div>
		</div>
	);
};

export default ProductTagsWidget;
