import React from 'react';

import './fiveday-weather-card.styles.css';

const getDate = (date) => {

    const textDayArr = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
    const dayOfWeek = new Date(date).getDay();
    const day = new Date(date).getDate();
    const textDay = textDayArr[dayOfWeek];

    return `${day} ${textDay}`;

}

const FiveDayWeather = (props) => {

    const { isCelsius } = props;
    const { temp } = props.main;
    const icon = props.weather[0].id;
    const description = props.weather[0].main;
    const date = props.dt_txt;
    const temp_F = temp * (9/5) + 32;


    return (
        <div className= 'm-5'>
            <div>{getDate(date)}</div>
            <i className = {`wi wi-owm-${icon} logo-sm`}></i>
            <div>{isCelsius ? Math.round(temp) : Math.round(temp_F)}&deg;</div>
            <div>{description}</div>
      
        </div> 
    )
  
};

export default FiveDayWeather;