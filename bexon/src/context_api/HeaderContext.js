"use client"
import { createContext, useContext } from "react";

const headerContext = createContext(null)
const HeaderContextProvider = ({value, children}) => {
    return (
        <headerContext.Provider value={value}>
            {children?children:""}
        </headerContext.Provider>
    );
};

export const useHeaderContext = ()=>{
const value = useContext(headerContext)
return value
}
export default HeaderContextProvider;