import React, { Component} from 'react';
import './Panel.css';
import axios from 'axios';
import CityCard from '../../../../components/CityCard/CityCard';
import WeatherForm from '../../../../components/WeatherForm/WeatherForm';
import classes from '../Panel/Panel.css'

class Panel extends Component {
    state = {
        cities: [],
        toShow: false,
        activeCity: null,
        Escondido: false,
    }
     
    getWeather = async (event) => {
        // event.preventDefault();
        // const { city } = event.target.elements;
        // const cityValue = city.value;
        const cityValue = event;
        let res = await axios.get('https://api.myjson.com/bins/14iuob');
        let data = await res.data;
        const newData = [...data];
        if (cityValue === 'Sao Paulo') { // cheat to avoid the lack of accentuation to stop the search from working given the api
            let filResult = '';
            filResult = newData[1]
            this.setState({activeCity: filResult})
            this.setState({Escondido: true})
         } else {
            const filResult = newData.filter( city => city.locale.name === cityValue);
            this.setState({activeCity: filResult});    
            this.setState({Escondido: true})
         }
    }
    functionHandler (oioioi) {
        this.getWeather(oioioi)
    }
    render() {
        let info = <div className={classes.Text}><p>No city was selected</p></div>
        if (this.state.Escondido) {
            info = 
            <div >
                <h1 className={classes.TextCenter}>Previsão para {this.state.activeCity[0].locale.name}-SP</h1>
                <CityCard date={this.state.activeCity[0].weather[0].date}
                          text={this.state.activeCity[0].weather[0].text}
                          tempmax={this.state.activeCity[0].weather[0].temperature.max}
                          tempmin={this.state.activeCity[0].weather[0].temperature.min}
                          rainprec={this.state.activeCity[0].weather[0].rain.precipitation}
                          rainprob={this.state.activeCity[0].weather[0].rain.probability}
    
            />
            <CityCard date={this.state.activeCity[0].weather[1].date}
                      text={this.state.activeCity[0].weather[1].text}
                      tempmax={this.state.activeCity[0].weather[1].temperature.max}
                      tempmin={this.state.activeCity[0].weather[1].temperature.min}
                      rainprec={this.state.activeCity[0].weather[1].rain.precipitation}
                      rainprob={this.state.activeCity[0].weather[1].rain.probability}


            
            /></div>
            
        }
        return ( // return = é o que vai pra tela
            <div>
                <WeatherForm
                        getWeather={this.getWeather}
                        functionHandler={this.functionHandler}
                />
                {info}
                
            </div>
        )
    };
}

export default Panel;
