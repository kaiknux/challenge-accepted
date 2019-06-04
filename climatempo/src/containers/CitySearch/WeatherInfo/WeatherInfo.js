import React from 'react';

import classes from '../WeatherInfo/WeatherInfo.css';

const WeatherInfo = props => {
    console.log(props)
    return (
        <div>
            {
                props.error &&
                <div className={classes.alertdanger}>
                    <p>{props.error}</p>
                </div>
            }
            {props.temperature ?
                <div className={classes.InfoContainer} >
                    {
                        props.city && props.country &&
                        <p><i className="fas fa-location-arrow"></i> Location: {props.city}, Brasil</p>
                    }
                    {
                        props.temperature &&
                        <p><i className="fas fa-temperature-low"></i> Temperature: {props.temperature} ℃, {props.description}</p>
                    }
                    {
                        props.humidity &&
                        <p><i className="fas fa-water"></i> Humidity: {props.humidity}</p>
                    }
                    {
                        props.wind_speed &&
                        <p><i className="fas fa-wind"></i> Wind Speed: {props.wind_speed}</p>
                    }
                </div>
                :
                <div className="card card-body mt-2 text-center">
                    <i className="fas fa-sun fa-10x"></i>
                </div>
            }
        </div>

    )
}

export default WeatherInfo;

//fff3e4