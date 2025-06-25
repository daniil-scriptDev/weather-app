import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import { WeatherDataProvider } from './context/WeatherDataContext';
import { SettingOpenProvider } from './context/OpenSettingContext';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(
  <ThemeProvider>
      <LanguageProvider>
            <SettingOpenProvider>
                <WeatherDataProvider>
                    <App/>
                </WeatherDataProvider>
            </SettingOpenProvider>
    </LanguageProvider>
  </ThemeProvider>
);