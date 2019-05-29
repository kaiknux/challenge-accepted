import React, { Component } from 'react';
import CityCard from '../../components/CityCard/CityCard';

const axios = require('axios'); // not using it rn

class AppBlock extends Component {

 state = {
    cities: [],
    weatherInfo: []
 }
    searchData = async () => { 
        // API call
        let dataLocale = await fetch('https://api.myjson.com/bins/d0et7');
        const resLocale = await dataLocale.json();
        let dataWeather = await fetch('https://api.myjson.com/bins/14iuob');
        const resWeather = await dataWeather.json();
        this.parseChecker(resLocale, resWeather);
    };

    parseChecker = (resLocale, resWeather) => {
        this.setState()
                                                                               console.log(resLocale);
                                                                               console.log(resWeather);
        if (resLocale !== undefined && resWeather !== undefined) {
            this.updateFromServer(resLocale, resWeather)
        } else { console.log('error fetchcing data')}

    };

    updateFromServer = (resLocale, resWeather) => {
            this.setState({cities: resLocale});
            this.setState({weatherInfo: resWeather})
                                                                                console.log(this.state);
    };

    render() {

    return (
        <div>
            
        <CityCard item1={this.state.cities[0]} item2={this.state.weatherInfo[0]}/>
        <CityCard {...this.state.cities[1]} {...this.state.weatherInfo[1]}/>
        <button onClick={this.searchData}>Check</button>
        </div>
    );
}};

export default AppBlock;