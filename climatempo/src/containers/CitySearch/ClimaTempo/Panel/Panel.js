import React, { Component} from 'react';
import './Panel.css';
import axios from 'axios';
import CityCard from '../../../../components/CityCard/CityCard';
import WeatherForm from '../../../CitySearch/WeatherForm/WeatherForm';

class Panel extends Component {
    state = {
        cities: [],
        toShow: false,
        activeCity: null,
    }
     
    getWeather = async (event) => {
        event.preventDefault();
        const { city } = event.target.elements;
        const cityValue = city.value;
        let res = await axios.get('https://api.myjson.com/bins/14iuob');
        let data = await res.data;
        const newData = [...data];
        console.log(newData);
        if (cityValue === 'Sao Paulo') { // cheat to avoid the lack of accentuation to stop the search from working given the api
            let filResult = '';
            filResult = newData[1]
            this.setState({activeCity: filResult})
         } else {
            const filResult = newData.filter( city => city.locale.name === cityValue);
            this.setState({activeCity: filResult});    
         }
        console.log(this.state);
    }

    render() {

        return (
            <div>
                <WeatherForm
                        getWeather={this.getWeather}
                />
            
                
            </div>
        )
    };
}

export default Panel;
