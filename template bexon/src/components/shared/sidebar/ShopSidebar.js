import PriceReangeWidget from "./widgets/PriceReangeWidget";
import ProductCategoriesWidget from "./widgets/ProductCategoriesWidget";
import ProductTagsWidget from "./widgets/ProductTagsWidget";
import RecentProducctWidget from "./widgets/RecentProducctWidget";

const ShopSidebar = () => {
	return (
		<div className="tj-shop-sidebar">
			<PriceReangeWidget />
			<ProductCategoriesWidget />
			<RecentProducctWidget />
			<ProductTagsWidget />
		</div>
	);
};

export default ShopSidebar;
