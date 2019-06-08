import React from 'react';
import classes from '../WeatherForm/WeatherForm.css';
import Capture from '../../../assets/images/Capture.JPG';

const WeatherForm = props => (
    <div>
        <div className={classes.Climatempo}><img height='50%' src={ require('../../../assets/images/logo-white.png') } /></div>
        <div className={classes.Headerf1}>
            <form onSubmit={props.getWeather}>
                <div className="form-group">
                    <input type="text" name="city" placeholder="Insira aqui o nome da cidade" className={classes.FormControl} autoFocus />
                </div>
                <button className="btn btn-success btn-block">
                    Get Weather
            </button>
            </form>
        </div>
    </div>
);

export default WeatherForm;