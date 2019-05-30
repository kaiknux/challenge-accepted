import React, { Component } from 'react';
import CityCard from '../../components/CityCard/CityCard';

const axios = require('axios'); // not using it rn

class AppBlock extends Component {

 state = {
    date: '',
    text: '',
    maxtemperature: '',
    mintemperature: '',
    rainprobability: '',
    rainprecipitation: '',
    };
 
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
            this.updateFromServer(resWeather)
        } else { console.log('error fetchcing data')}

    };

    arrayOrganize = (resWeather) => {
        let i = '';
        for (i = 0; i < resWeather.length; i++) {
            return resWeather[i].weather;
        }
    }

    updateFromServer = (resWeather) => {
        let dataHandled = [...resWeather];
        const weekDaysWeather = dataHandled.map((x) => {
            return this.arrayOrganize(dataHandled)
        });
        console.log(weekDaysWeather);
    };
        


        // [{chuloo: "grilled chicken", age: 60}, {chris: "cold beer", age: 50}, {sam: "fish biscuits", age: 30}]

        // obj[i].text = resWeather[i].weather[0].text,
        // obj[i].maxtemperature = resWeather[i].weather[0].temperature.max,
        // obj[i].mintemperature = resWeather[i].weather[0].temperature.min,
        // obj[i].rainprobability = resWeather[i].weather[0].rain.probability,
        // obj[i].rainprecipitation = resWeather[i].weather[0].rain.precipitation,


    render() {

    return (
        <div>
            
        <CityCard/>
        <CityCard/>
        <button onClick={this.searchData}>Check</button>
        </div>
    );
}};

export default AppBlock;