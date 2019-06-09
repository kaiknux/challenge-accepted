import React from 'react';
import classes from './WeatherForm.css';

const WeatherForm = props => (
    <div>
        <div className={classes.Climatempo}>
            <img height='50%' src={require('../../assets/images/logo-white.png')} />
        </div>
        <div className={classes.Headerf1}>
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Osasco ou São Paulo" className={classes.FormControl} autoFocus />
                </div>
                <button className={classes.ButtonAs}>
                    Get Weather!
            </button>
            </form>
        </div>
    </div>
);

export default WeatherForm;