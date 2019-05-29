import React, { Component } from 'react';
import CityCard from '../../components/CityCard/CityCard';

const axios = require('axios');

// import { LOCALES } from  '../../base/locales.json';
// import { WEATHER } from '../../base/weather.json';

class AppBlock extends Component {

    async getData() {
        const res = await axios('https://github.com/kaiknux/challenge-accepted/blob/master/base/locales.json');
        return await res.json(); // (Or whatever)
    }
    constructor(...args) {
        super(...args);
        this.state = {data: null};
    }
    componentDidMount() {
        if (!this.state.data) {
            this.getData().then(data => this.setState({data}))
                          .catch(err => { /*...handle the error...*/});
        }
                                                                console.log(this.res);
    }
te
    // parseChecker = async (val1, val2) => {
    //     const testLocales = { LOCALES }
    //     const testWeather = { WEATHER }

    //                                                             console.log(testLocales);
    //                                                             console.log(testWeather);
    // };

    // updateFromServer = (val1, val2) => {
    //     let transitionObject = [...res.list]
    //     const updatedArray = transitionObject.filter(function(city) {
    //         return cities.indexOf(city);
    //       });
    //                                                         // console.log(updatedArray);
    //       this.setState({cities: updatedArray});
    //                                                         // console.log(this.state.cities[1].sys.country);
                                                            
    //                                                         console.log(this.state.cities);
    // };

    render() {
    return (
        <div>
        <CityCard/>
        <CityCard/>
        <button onClick={this.parseChecker}>Check</button>
        </div>
    );
}};

export default AppBlock;