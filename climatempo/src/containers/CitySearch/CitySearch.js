import React, { Component } from 'react';

import WeatherForm from '../CitySearch/WeatherForm/WeatherForm';

import WeatherInfo from '../CitySearch/WeatherInfo/WeatherInfo';
import CityCard from '../../components/CityCard/CityCard';
import classes from '../AppBlock/AppBlock';


class App extends Component {

    state = {
        temperature: '',
        description: '',
        humidity: '',
        wind_speed: 0,
        city: '',
        country: '',
        error: null,
        temp_max: '',
        temp_min: '',
        showCities: false,
    };

    nomeDaFuncao = (argumentos) => {
        return null
    };






    getWeather = async (e) => {
        e.preventDefault();
        const { city } = e.target.elements;
        const cityValue = city.value;
        const response = await fetch('https://api.myjson.com/bins/14iuob');
        const dataJson = await response.json();
        
        if (cityValue) {
            // começo da formula para filtrar de acordo com o city q a pessoa digitou
            const newData = [...dataJson]
            const filteredElement = newData.filter(city => city.locale.name = cityValue)
              console.log(dataJson);
              console.log(cityValue);
              console.log('filteredElement');
              console.log(filteredElement);
            // fim
            this.setState({
                temperature: filteredElement[0].temperature,
                description: filteredElement[0].text,
                rainProbability: filteredElement[0].weather[0].rain.probability,
                rainPrecipitation: filteredElement[0].weather[0].rain.precipitation,
                cityName: filteredElement[0].name,
                maxTemperature: filteredElement[0].weather[0].temperature.max,
                minTemperature: filteredElement[0].weather[0].temperature.min,
                todayDate: filteredElement[0].date,
                error: null,
                showCities: true
            });
        } else {
            this.setState({
                error: 'Por favor insira o nome de uma cidade.'
            });
        }

    }

    render() {
        let cities = null;
        if (this.state.showCities) {
            cities = (
                <div className={classes.AppBox}> 
                    <h1>{this.state.cityName}</h1>
                <CityCard date={this.state.todayDate}
                    text={this.state.todayText}
                    tempmax={this.state.maxTemperature}
                    tempmin={this.state.minTemperature}
                    rainprob={this.state.rainProbability}
                    rainprec={this.state.rainPrecipitation}
                />
                <CityCard date={this.state.todayDate1a}
                    text={this.state.todayText1a}
                    tempmax={this.state.maxTemperature1a}
                    tempmin={this.state.minTemperature1a}
                    rainprob={this.state.rainProbability1a}
                    rainprec={this.state.rainPrecipitation1a}
                />
            </div>
            )
        };

        return ( <div>
                    /            <WeatherForm
                        getWeather={this.getWeather}
                    />
                    <WeatherInfo {...this.state} />
            {cities}
            <button onClick={this.searchData}>Check</button>
            <button onClick={this.cliqueDoBotao}>Isis</button>
            {this.textoPraAparecer}
            </div>
        )

        // return <div className={classes.SearchAppContainer}>
        //     <div classname={classes.TitleCitySearch}>Previsão do Tempo</div>
        //     <div className="row">
        //         <div className="col-md-6 mx-auto">
        //             <WeatherForm
        //                 getWeather={this.getWeather}
        //             />
        //             <WeatherInfo {...this.state} />
        //         </div>
        //     </div>
        // </div>
    }
}

export default App;