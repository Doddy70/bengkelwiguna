"use client";
import { createContext, useContext } from "react";

const CurrentItemContext = createContext(null);
const CurrentItemContextProvider = ({ children, currentId }) => {
	return (
		<CurrentItemContext.Provider value={{ currentId }}>
			{children ? children : ""}
		</CurrentItemContext.Provider>
	);
};
export const useCurrentItem = () => {
	const value = useContext(CurrentItemContext);
	return value ? value?.currentId : null;
};
export default CurrentItemContextProvider;
