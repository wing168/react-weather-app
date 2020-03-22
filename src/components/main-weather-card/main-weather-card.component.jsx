import React from 'react';

import './main-weather-card.styles.css';

/* Weather icons from "https://erikflowers.github.io/weather-icons/". Installed using npm - weather-icons-npm*/
import '../../../node_modules/weather-icons-npm/css/weather-icons.min.css';
import '../../../node_modules/weather-icons-npm/css/weather-icons-wind.min.css';



const MainWeather = (props) => {
    
    const { isCelsius } = props;
    const city = props.name;
    const { temp, temp_min, temp_max, humidity, pressure } = props.main;
    const description  = props.weather[0].main;
    const icon = props.weather[0].id;
    const { deg, speed } = props.wind;
    const country = props.sys.country;
    const visibility = props.visibility;
    const temp_F = temp * (9/5) + 32;
    const temp_min_F = temp_min * (9/5) + 32;
    const temp_max_F = temp_max * (9/5) + 32;
    
    return (
        <div className = 'container-fluid mt-2 current-weather'>
            <div className = 'location display-4 mb-4'>{city}, {country}</div>
            <div className = 'd-flex justify-content-center align-items-center'>
                <div className = 'mr-4 logo'><i className={`wi wi-owm-${icon} my-auto`}></i></div>
                <div className = 'temp ml-4'>{isCelsius ? Math.round(temp) : Math.round(temp_F)}&deg;</div>
            </div>
            
            <div className='description display-4'>{description}</div>

            <div className = 'd-flex justify-content-center align-items-center'>
                <div className = 'min m-3'>Min: {isCelsius ? Math.round(temp_min) : Math.round(temp_min_F)}&deg;</div>
                <div className = 'max m-3'>Max: {isCelsius ? Math.round(temp_max) : Math.round(temp_max_F)}&deg;</div>
                <div className = 'wind m-3'>Wind: <i className={`wi wi-wind from-${deg}-deg wind-logo`}></i> {Math.round(speed *(1609/3600))} mph</div> {/* converting m/s to mph */}
            </div>
            <div className = 'd-flex justify-content-center align-items-center'>
                <div className = 'humidity m-3'>Humidity: {humidity}%</div>
                <div className = 'pressure m-3'>Pressure: {pressure} mb</div>
                <div className = 'visibility m-3'>Visibility: {(visibility/1609).toFixed(1)} mi</div> {/*convert to miles from metres */}
            </div>
        </div> 
    )
}

export default MainWeather;