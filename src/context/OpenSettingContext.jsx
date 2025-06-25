import { createContext, useContext, useState } from "react";

let SettingOpenContext = createContext(null);

let SettingOpenProvider = ({children}) => {
    let [isSettingOpen, setIsSettingOpen] = useState(false);
    let toggleSettingWin = () => {setIsSettingOpen(prev=>!prev)};
    let value = {isSettingOpen, toggleSettingWin};
    return(
        <SettingOpenContext.Provider value={value}>{children}</SettingOpenContext.Provider>
    );
};

let useSettingOpen = () => {
    let context = useContext(SettingOpenContext);
    if (!context) {
        throw new Error(
            "useSettingOpen должен использоваться внутри SettingOpenProvider"
        );
    }
    return context
};
export{SettingOpenProvider, useSettingOpen};