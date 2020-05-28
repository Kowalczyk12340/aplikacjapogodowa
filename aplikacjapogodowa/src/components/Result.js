import React from 'react';
import './Result.css';

const Result = props => {
    
    const {date,city,sunrise,sunset,temp,pressure,wind,err} = props.weather
    
    let content = null;

    if(!err && city)
    {
        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString()
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString()
        content = (
            <React.Fragment>
                <h3>Wyniki Wyszukiwania dla <em>{city}</em></h3>
                <h4>Dane dla Dnia i Godziny: {date}</h4>
                <h4>Aktualna Temperatura: {temp} &#176;C</h4>
                <h4>Wschód Słońca Dzisiaj o: {sunriseTime}</h4>
                <h4>Zachód Słońca Dzisiaj o: {sunsetTime}</h4>
                <h4>Aktualna Siła Wiatru: {wind} m/s</h4>
                <h4>Aktualne Ciśnienie: {pressure} hPa</h4>
                <h4></h4>
            </React.Fragment>
        )
    }

    return(
        <div className="result">
            {err ? `Nie mamy w bazie ${city}` : content}
        </div>
    );
} 

export default Result;