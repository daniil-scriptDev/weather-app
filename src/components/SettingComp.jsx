import React from "react";
import styled from "styled-components";
import { useSettingOpen } from "../context/OpenSettingContext";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext"
export default function SettingComp() {
    let {isSettingOpen, toggleSettingWin} = useSettingOpen();
    let {currentTranslation, changeLang, currentLang} = useLanguage();
    let {toggleTheme, theme} = useTheme();
    const StyledSettingComp = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;         
        background: rgba(0,0,0,0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1000;
    `;
    const StyledSettingCompContent = styled.div`
        background: white;
        padding: 2.5rem;
        border-radius: 12px;
        max-width: 400px;
        width: 90%;
        font-family: Verdana, Geneva, Tahoma, sans-serif    ;
        font-size: 20px;
        display: flex;
        flex-direction: column;
    `;
    const baseClasses ="px-3 py-1.5 text-sm rounded-md transition duration-200 border";
    const activeClasses = "bg-gray-200 dark:bg-gray-400 text-black dark:text-white border-gray-400 dark:border-gray-500";
    const inactiveClasses = "bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-100 border-gray-300 dark:border-gray-700";
    return(
        <>{isSettingOpen&&<StyledSettingComp onClick={()=>toggleSettingWin()}>
            <StyledSettingCompContent>
                <h1 className="text-4xl mb-8">
                    {currentTranslation.setting.settingTitle}
                </h1>
                <div>
                    <ul className="flex flex-row text-center justify-around">
                        <li className="flex flex-col items-center justify-around text-gray-900 gap-3">
                            <h3>{currentTranslation.setting.changeThemeTitle}</h3>                      
                            <div className="flex flex-row gap-5">
                                <button 
                                    className={`${baseClasses} ${theme === "dark" ? activeClasses : inactiveClasses}`}
                                    disabled={theme==="dark"}
                                    onClick={()=>toggleTheme('dark')}>
                                    Dark
                                </button>
                                
                                <button 
                                    className={`${baseClasses} ${theme === "light" ? activeClasses : inactiveClasses}`}
                                    disabled={theme==="light"}
                                    onClick={()=>toggleTheme('light')}>
                                    Light
                                </button>
                            </div>
                        </li>
                        <li className="flex flex-col items-center justify-around text-gray-900 gap-2">
                            <h3>{currentTranslation.setting.changeLangTitle}</h3>
                            <div className="flex flex-row gap-5">
                                <button 
                                    className={`${baseClasses} ${currentLang === "ua" ? activeClasses : inactiveClasses}`}
                                    disabled={currentLang==="ua"}
                                    onClick={()=>changeLang('ua')}>
                                    UA
                                </button>
                                
                                <button 
                                    className={`${baseClasses} ${currentLang === "en" ? activeClasses : inactiveClasses}`}
                                    disabled={currentLang==="en"}
                                    onClick={()=>changeLang('en')}>
                                    EN
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </StyledSettingCompContent>
        </StyledSettingComp>}</>
    );
};