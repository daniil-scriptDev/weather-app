import { createContext, useContext, useState, useMemo } from "react";

const translation = {
    'ua': {
        'setting':{
            'title': 'Налаштування',
            'changeThemeTitle': "Змінити тему",
            "changeLangTitle":"Змінити мову"
        },
        'input': {
            'searchPlaceholder': 'Шукати місто'
        },
        'info':{
            "feels_like":"Відчувається наче",
            "Humidity":"Вологість",
            "wind_kph": "Швидкість Вітру(km/h)",
            "pressure_mb": "Тиск",
            "vis_km": "Видимість(km)",
            "uv": "УФ-індекс",
            "last_updated": "Востаннє оновлено"
        }
    },
    'en': {
        'setting' : {
            'settingTitle': 'Settings',
            'changeThemeTitle': 'Change theme',
            'changeLangTitle': 'Change language',
        },
        'input': {
            'searchPlaceholder': 'Search location'
        },
        'info':{
            "feels_like":"Feels like",
            "Humidity":"Humidity",
            "wind_kph": "Wind speed(km/h)",
            "pressure_mb": "Pressure",
            "vis_km": "Visibility(km)",
            "uv": "UV-index",
            "last_updated": "Last updated"
        }
    }
} 
//let {currentTranslation} = useLanguage();
let LanguageContext = createContext(null);
//type Language = 'ua' | 'en' | 'de' | 'pl'
let LanguageProvider = ({children}) => {
    let [currentLang, setCurrentLang] = useState('en');
    let changeLang = (newLang) => setCurrentLang(newLang);

    const currentTranslation = useMemo(()=>{
        return translation[currentLang]
    },[currentLang])

    let value = {currentLang, changeLang, currentTranslation};
    
    return(
        <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
    )  
};
let useLanguage = () => {
    let context = useContext(LanguageContext);
    if (!context) {
        throw new Error(
            "useLanguage должен использоваться внутри LanguageProvider"
        );
    }
    return context
};
export{useLanguage, LanguageProvider};