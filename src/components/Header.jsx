import {useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import SettingButton from "./SettingButton";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import DropDownMenu from "./DropDownMenu";
import Loader from "./Loader";
import {useFetch} from '../hooks/useFetch';
let StyledHeader = styled.header`
    display: flex;
    justify-content: space-around;
    height: 60px;
    padding-inline: 16px;
    align-items: center;
    font-size: 25px;
    top: 2px;
`;

let citys = {
    "en": {
        'Odesa': 'Odesa',
        "Kyiv": "Kyiv",
        "Lviv": "Lviv",
        "Luhansk": "Luhansk",
        "Kherson": "Kherson",
        "Kharkiv" : "Kharkiv",
        "Cherkasy" : "Cherkasy",
        "Chernivtsi":"Chernivtsi",
    },
    "ua": {
        'Luhansk': "Луганськ",
        "Lviv": "Львів",
        'Kyiv' : "Київ",
        'Odesa' : "Одеса",
        "Kherson": "Херсон",
        "Kharkiv" : "Харків",
        "Cherkasy" : "Черкаси",
        "Chernivtsi": "Чернівці",
    },
};

export default function Header(){
    const classForDarkTheme = " dark:border-gray-600 focus:ring-blue-800 focus:border-transparent text-gray-200 dark:text-gray-800 dark:placeholder-gray-800 bg-white dark:bg-gray-200";
    const classForLightTheme = " focus:ring-blue-500 focus:border-transparent text-gray-700";    
    let { currentTranslation, currentLang } = useLanguage();
    const translatedCitys = citys[currentLang] || citys["en"] 

    let {theme} = useTheme();
    let [city, setCity] = useState('');
    let [cityTips, setCityTips] = useState([]);
    let [isLoading, getWeatherData] = useFetch(false);
    
    let citysFilter = useCallback(()=>{
            let filteredTips = {};
            Object.entries(translatedCitys).forEach(([key, value]) => {
                if(value.includes(city)) filteredTips[key] = value;
            })
            setCityTips(Object.entries(filteredTips));
        },
        [city, translatedCitys]
    )

    useEffect(()=>{
        citysFilter();
    }, [citysFilter]);

    return(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
        <>                                                                              
            <StyledHeader>
                <div style={{position:'relative', display:'inline-block'}}>
                    <input 
                        className= {`w-60 md:w-65 lg:w-80 mx-4 h-10 px-4 py-2 text-base placeholder-gray-400 rounded-lg border border-gray-300 focus:outline-none focus:ring-2${theme==="dark" ? classForDarkTheme : classForLightTheme}`}
                        placeholder={currentTranslation.input.searchPlaceholder} 
                        type="text" 
                        value={city}
                        onChange={(e)=>setCity(e.target.value)}
                    />
                    {city.trim() !== "" && <DropDownMenu getWeather={getWeatherData} tips={cityTips}/> }
                    {isLoading && <Loader/>}
                </div>
                <SettingButton/>
            </StyledHeader>
        </>
    );
};