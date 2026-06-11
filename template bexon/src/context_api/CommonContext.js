"use client";
import React, { createContext, useContext } from "react";
const commonContext = createContext(null);
export const useCommonContext = () => {
  return useContext(commonContext);
};
const CommonContext = ({ children, value }) => {
  return (
    <commonContext.Provider value={value}>{children}</commonContext.Provider>
  );
};

export default CommonContext;
