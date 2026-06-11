"use client";
import { createContext, useContext } from "react";
const rtlContext = createContext(null);
export const useRtlContext = () => {
	return useContext(rtlContext);
};
const RtlContext = ({ children, value }) => {
	return <rtlContext.Provider value={value}>{children}</rtlContext.Provider>;
};

export default RtlContext;
