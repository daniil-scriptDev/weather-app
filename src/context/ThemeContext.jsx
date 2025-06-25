import React from "react";
import { createContext, useContext, useEffect, useState } from "react";
let ThemeContext = createContext(null);
let ThemeProvider = ({children}) => {
    let [theme, setTheme] = useState("light");
    useEffect(()=>{
        document.body.className = theme;
    },[theme]);
    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
      };
    
    let value = {toggleTheme, theme};
    return(
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    )  
};
let useTheme = () => {
    let context = useContext(ThemeContext);
    if (!context) {
        throw new Error(
            "useTheme должен использоваться внутри ThemeProvider"
        );
    }
    return context
};
export{useTheme, ThemeProvider};