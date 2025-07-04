import React, { useEffect } from "react";
import logos from "../images/images";
import { useWeatherData } from "../context/WeatherDataContext";
import { useLanguage } from "../context/LanguageContext";
import { useFetch } from "../hooks/useFetch";
const {CloudySvg} = logos;

export default function TopArticle(){
    const {updatingData} = useWeatherData();
    let {currentTranslation} = useLanguage();
    let [,getWeatherData, getCityWeatherInfo] = useFetch();
    
        useEffect(()=>{
            if (!updatingData) {
                getWeatherData('Kyiv')
            }
        })

    return(
        <>
            <div className="flex flex-row text-white gap-1 text-lg">
                <h1>{updatingData?getCityWeatherInfo()["cityName"]:""},</h1>
                <h2>{updatingData?getCityWeatherInfo()["country"]:""}</h2>
            </div>

            <div className="flex flex-col text-white gap-3">
                <div className="flex flex-row">
                    <CloudySvg />
                    <h1 className="text-7xl font-bold mt-2 ">
                        {updatingData ? getCityWeatherInfo()["temp_c"] : ""}°
                    </h1>
                    </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-8 text-xl">
                    <span className="mt-3">{currentTranslation.info.feels_like}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["feelslike_c"]:""}°</span>

                    <span className="mt-3">{currentTranslation.info.Humidity}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["humidity"]:""}</span>

                    <span className="mt-3">{currentTranslation.info.wind_kph}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["wind_kph"]:""}</span>

                    <span className="mt-3">{currentTranslation.info.pressure_mb}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["pressure_mb"]:""}</span>
                    
                    <span className="mt-3">{currentTranslation.info.vis_km}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["vis_km"]:""}</span>
                    
                    <span className="mt-3">{currentTranslation.info.uv}</span>
                    <span className="mt-3">{updatingData?getCityWeatherInfo()["uv"]:""}</span>
                    
                    <span className="text-gray-300 mt-4 text-small">{currentTranslation.info.last_updated}</span>
                    <span className="text-gray-300 mt-4 text-small">{updatingData?getCityWeatherInfo()["last_updated"]:""}</span>
                </div>
            </div>
        
        </>
    );
};