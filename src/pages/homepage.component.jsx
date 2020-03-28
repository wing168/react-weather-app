import React from 'react';

import MainWeather from '../components/main-weather-card/main-weather-card.component';
import FiveDayWeather from '../components/fiveday-weather-card/fiveday-weather-card.component';
import Loading from '../components/loading/loading.component';
import SearchBar from '../components/search-bar/search-bar.component';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';


import './homepage.styles.css';

const HomePage = (props) => {
    const { currweatherdata, data5days, loading, searchedWeather, mainMenuSelect, isCelsius } = props
    return (
        <div>
            
            <button className='mainmenu-btn' onClick={mainMenuSelect}><FontAwesomeIcon icon={faHome} /></button>
            <SearchBar searchedWeather={searchedWeather}/>
            
            
            {loading ? <Loading /> : <MainWeather {...currweatherdata} isCelsius={isCelsius} /> }
            <div className = 'container-fluid mt-5 d-flex justify-content-center fiveday'>
                {loading ? null : data5days.map((data, index) => <FiveDayWeather key={index} {...data} isCelsius={isCelsius} />)}
            </div>
            
        </div>
    );
}

export default HomePage;