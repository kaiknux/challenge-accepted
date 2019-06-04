import React from 'react';
import classes from '../WeatherForm/WeatherForm.css';

const WeatherForm = props => (
    <div className="card card-body">
        <form onSubmit={props.getWeather}>
            <div className="form-group">
                <input type="text" name="city" placeholder="Insira aqui o nome da cidade" className={classes.FormControl} autoFocus/>
            </div>
            <button className="btn btn-success btn-block">
                Get Weather
            </button>
        </form>
    </div>
);

export default WeatherForm;