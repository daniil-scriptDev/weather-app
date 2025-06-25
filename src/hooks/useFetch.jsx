import {  useState } from "react";
import { useWeatherData } from "../context/WeatherDataContext";

const getFullUrl = (newCity) => `https://api.weatherapi.com/v1/current.json?key=2ec896b565ea43719e6111358241307&q=${newCity}&aqi=no`
export function useFetch() {
    let [isLoading, setIsLoading] = useState(false);
    let {updatingData, setUpdatingData} = useWeatherData();
    async function getWeatherData(cityQuery){
        setIsLoading(true);
        
        try {
            const responce = await fetch(getFullUrl(cityQuery));
            if (responce.ok) {  
                const data = await responce.json();
                setUpdatingData(data);
                
            }else{
                throw new Error('Something went wrong');
            };
        } catch (error) {
            console.error(error);
            
        }finally{
            setIsLoading(false)
        }
    };
    const getCityWeatherInfo = () => {
        //console.log(updatingData.current.temp_c);
        if (updatingData&&updatingData.current) {
            let currentUpdatingData = updatingData.current;
            let locationUpdatingData = updatingData.location;
            return{
                cityName: locationUpdatingData.name,
                region: locationUpdatingData.region,
                country: locationUpdatingData.country,
                temp_c: currentUpdatingData.temp_c,
                feelslike_c: currentUpdatingData.feelslike_c,
                humidity: currentUpdatingData.humidity,
                wind_kph: currentUpdatingData.wind_kph,
                pressure_mb: currentUpdatingData.pressure_mb,
                vis_km: currentUpdatingData.vis_km,
                uv: currentUpdatingData.uv,
                last_updated: currentUpdatingData.last_updated
            }
        }
    }
    return [isLoading, getWeatherData, getCityWeatherInfo];
}