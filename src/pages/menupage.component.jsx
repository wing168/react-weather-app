import React from 'react';

import './menupage.styles.css';

import SearchBar from '../components/search-bar/search-bar.component';

const MainMenu = (props) => {
    const { currentWeather, searchedWeather, handleTempSelection } = props;
    return (
        <div className='container-fluid main-menu-box'>
            <div className='weather-logo- pt-5'>
                <i className={`wi wi-day-sunny`}></i>
            </div>

            <h2 className='pt-5'>Welcome to the Weather App</h2>
            <h6 className='pt-3'>Personalise your weather content</h6>
            <hr className='break-line'/>
            <form>
                <h6 className='pt-3'>Show temperature in</h6>
                <div className='temp-container'>
                    <label className='temp-label'>Fahrenheit: </label>
                    <input className='temp-type-radio' type='radio' value='fahrenheit' name='temp' onClick={handleTempSelection}></input>
                
                
                    <label className='temp-label'>Celsius: </label>
                    <input className='temp-type-radio' type='radio' value='celsius' name='temp' onClick={handleTempSelection}></input>
                </div>
            </form>
            
            <hr className='break-line' />
    
            <SearchBar searchedWeather={searchedWeather}/>
            <button className='search-btn current-loc' onClick={currentWeather}>Weather For Current Location</button>
            
            
            
        </div>
    )

};

export default MainMenu;

