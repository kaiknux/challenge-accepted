import React, { Component } from 'react';
import CityCard from '../../components/CityCard/CityCard';

class AppBlock extends Component {

 state = {  cityOneInfo: '',
            cityTwoInfo: '',
            cityOneWeekWeather: '',
            cityTwoWeekWeather: '',
            todayDate: '',
            todayText: '',
            minTemperature: '',
            maxTemperature: '',
            rainProbability: '',
            rainPrecipitation: '',
            appear: false,
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
        if (resLocale !== undefined && resWeather !== undefined) {
            this.updateFromServer(resWeather)
        } else { console.log('error fetchcing data')}

    };

    organizeWeekWeather = (resWeather) => {
        let i = '';
        for (i = 0; i < resWeather.length; i++) {
            return resWeather[i].weather;
        }
    }

    cityInfoEngine = (resWeather) => {
        const locales = resWeather.map(city => city.locale)
        return locales;
    };

    updateFromServer = (resWeather) => {
        let dataHandled = [...resWeather];
        const weekDaysWeather = dataHandled.map((x) => {
            return this.organizeWeekWeather(dataHandled)
        });
        const cityInfo = this.cityInfoEngine(resWeather);
        const cityOneWeekWeather = weekDaysWeather[0];
        const cityTwoWeekWeather = weekDaysWeather[1];
        const cityOneInfo = cityInfo[0];
        const cityTwoInfo = cityInfo[1];
        this.stateChangeHandler(cityOneWeekWeather, cityTwoWeekWeather, cityOneInfo, cityTwoInfo);
        // this.setState({cityOneInfo: cityOneInfo})
        // this.setState({cityTwoInfo: cityTwoInfo})
        this.setState({cityOneWeekWeather: cityOneWeekWeather})
        // this.setState({cityTwoWeekWeather: cityTwoWeekWeather})
                                                                                console.log('state updated:');
                                                                                console.log(this.state);
    };

    stateChangeHandler = (cityOneWeekWeather, cityTwoWeekWeather, cityOneInfo, cityTwoInfo) => {
        const todayDate = cityOneWeekWeather[0].date;
        this.setState({todayDate: todayDate});
        const todayText = cityOneWeekWeather[0].text;
        this.setState({todayText: todayText});
        const minTemperature = cityOneWeekWeather[0].temperature.min;
        this.setState({minTemperature: minTemperature});
        const maxTemperature = cityOneWeekWeather[0].temperature.max;
        this.setState({maxTemperature: maxTemperature});
        const rainProbability = cityOneWeekWeather[0].rain.probability;
        this.setState({rainProbability: rainProbability});
        const rainPrecipitation = cityOneWeekWeather[0].rain.precipitation;
        this.setState({rainPrecipitation: rainPrecipitation});
        // second box item
        const todayDate1a = cityOneWeekWeather[1].date;
        this.setState({todayDate1a: todayDate1a});
        const todayText1a = cityOneWeekWeather[1].text;
        this.setState({todayText1a: todayText1a});
        const minTemperature1a = cityOneWeekWeather[1].temperature.min;
        this.setState({minTemperature1a: minTemperature1a});
        const maxTemperature1a = cityOneWeekWeather[1].temperature.max;
        this.setState({maxTemperature1a: maxTemperature1a});
        const rainProbability1a = cityOneWeekWeather[1].rain.probability;
        this.setState({rainProbability1a: rainProbability1a});
        const rainPrecipitation1a = cityOneWeekWeather[1].rain.precipitation;
        this.setState({rainPrecipitation1a: rainPrecipitation1a});
        this.setState({appear: true})
                                                                                console.log(this.state);

    };
        
        // obj[i].text = resWeather[i].weather[0].text,
        // obj[i].maxtemperature = resWeather[i].weather[0].temperature.max,
        // obj[i].mintemperature = resWeather[i].weather[0].temperature.min,
        // obj[i].rainprobability = resWeather[i].weather[0].rain.probability,
        // obj[i].rainprecipitation = resWeather[i].weather[0].rain.precipitation,


    render() 
        let jsx =  <div>
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
        </div>;

    return (
        <div>
        {this.showUp}
        <button onClick={this.searchData}>Check</button>
        </div>
        };
    );
}};

export default AppBlock;