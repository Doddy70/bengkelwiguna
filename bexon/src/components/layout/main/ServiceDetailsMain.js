import HeroInner from "@/components/sections/hero/HeroInner";
import ServicesDetailsPrimary from "@/components/sections/services/ServicesDetailsPrimary";
import getALlServices from "@/libs/getALlServices";
import getPreviousNextItem from "@/libs/getPreviousNextItem";

const ServiceDetailsMain = ({ currentItemId }) => {
	const items = getALlServices();
	const currentId = currentItemId;
	const { prevId, nextId, currentItem, isPrevItem, isNextItem } =
		getPreviousNextItem(items, currentId);
	const { title } = currentItem || {};
	return (
		<div>
			<HeroInner
				title={title ? title : "Service Details"}
				text={title ? title : "Service Details"}
				breadcrums={[{ name: "Services", path: "/services" }]}
			/>
			<ServicesDetailsPrimary
				option={{
					currentItem,
					items,
					currentId,
					prevId,
					nextId,
					isPrevItem,
					isNextItem,
				}}
			/>
		</div>
	);
};

export default ServiceDetailsMain;
