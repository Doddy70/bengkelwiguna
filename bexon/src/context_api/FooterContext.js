"use client";
import { createContext, useContext } from "react";

const FooterContext = createContext(null);
const FooterContextProvider = ({ value, children }) => {
  return (
    <FooterContext.Provider value={value}>
      {children ? children : ""}
    </FooterContext.Provider>
  );
};

export const useFooterContext = () => {
  const value = useContext(FooterContext);
  return value;
};
export default FooterContextProvider;
