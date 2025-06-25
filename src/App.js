import React from 'react';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import SettingComp from './components/SettingComp';
import { useSettingOpen } from './context/OpenSettingContext';

export default function App(){
  let {isSettingOpen} = useSettingOpen();
  return(
    <>
      <div className='flex flex-col gap-5 w-full max-w-screen-sm mx-auto px-4 overflow-hidden'>
        <Header/>
        <CurrentWeather/>
        
        {isSettingOpen&&<SettingComp/>}
      </div>
    </>
  )
};