"use client";
import { usePathname } from "next/navigation";
// make forcely inactive for some paths
const makeForcelyInactive = (pathname, currentPathname) => {
	const isInactive = [
		"/services",
		"/services/1",
		"/portfolios",
		"/portfolios/1",
		"/blogs",
		"/blogs/1",
		"/blog-grid",
		"/blog-sidebar",
		"/contact",
	].includes(pathname);
	return isInactive ? false : pathname === currentPathname;
};
// check active link
const checkActive = (mainObject, currentPathname, isRestricted) => {
	const { path, submenu } = mainObject;
	const isActiveLink =
		(isRestricted
			? makeForcelyInactive(path, currentPathname)
			: path === currentPathname) ||
		submenu?.some(
			({ items, path: path1 }) =>
				path1 === currentPathname ||
				items?.some(({ path: path2 }) =>
					isRestricted
						? makeForcelyInactive(path2, currentPathname)
						: path2 === currentPathname
				)
		);
	return isActiveLink;
};

export default function useActiveLink() {
	const currentPathname = usePathname();
	const makeActiveLink = modifiableObject => {
		const { name } = modifiableObject;
		const isPages = name === "Pages" ? true : false;
		const currentObject = {
			...modifiableObject,
			isActive: checkActive(modifiableObject, currentPathname, isPages),
			submenu: modifiableObject?.submenu?.length
				? modifiableObject?.submenu?.map(submenuItem => ({
						...submenuItem,
						isActive: checkActive(submenuItem, currentPathname),
						items: submenuItem?.items?.length
							? submenuItem?.items?.map(item => ({
									...item,
									isActive: checkActive(item, currentPathname, isPages),
							  }))
							: [],
				  }))
				: [],
		};

		return currentObject;
	};
	return makeActiveLink;
}
