import makePath from "./makePath";
import makeText from "./makeText";

const filterItems = (items, collection, filterItem, isProducts) => {
	switch (collection) {
		case "category":
			return items?.filter(
				({ type, category }) =>
					makePath(isProducts ? type : category) === filterItem
			);

		case "brand":
			return items?.filter(({ brand }) => makePath(brand) === filterItem);

		case "tags":
			return items?.filter(({ tags }) => {
				const filterableTags = tags?.map(tag => tag.toLowerCase());

				return filterableTags?.includes(makeText(filterItem));
			});

		case "size":
			return items?.filter(({ size }) => makePath(size) === filterItem);

		case "color":
			return items?.filter(({ color }) => makePath(color) === filterItem);

		case "author":
			return items?.filter(
				({ author }) => makePath(author?.name) === filterItem
			);

		case "role":
			return items?.filter(
				({ author_role }) =>
					makePath(author_role ? author_role : "") === filterItem
			);

		case "search":
			if (!filterItem) return [];
			const searchText = new RegExp(makeText(filterItem), "i");
			return items?.filter(({ title }) => searchText.test(title));

		case "popularity":
			return [...items]?.sort((a, b) => b.soldUnits - a.soldUnits);

		case "new":
			return [...items]?.sort((a, b) => b.date - a.date);

		case "price-descending":
			return [...items]?.sort((a, b) => b.price - a.price);

		case "price-ascending":
			return [...items]?.sort((a, b) => a.price - b.price);

		case "rating":
			return [...items]?.sort((a, b) => b.reviews - a.reviews);

		default:
			return items;
	}
};

export default filterItems;
