import React, { Component } from 'react';
import classes from '../CityCard/CityCard.css';

class CityCard extends Component {



    render() {
        return (
                <div className={classes.CardContainer}>                 {/* A caixa externa */}
                    <div className={classes.CardHeaderDate}>            {/* Faixa superior com a data */}
                        27/05/2019
                    </div>
                    <div className={classes.CardWeatherDescription}>    {/* Segunda faixa, com descrições do clima*/}
                        Céu claro com núvens sendo portanto chamado parcialmente nublado.
                    </div>
                    <div className={classes.WeatherNumbers}>            {/* Caixa das duas faixas inferiores*/}
                        <div className={classes.CardRows}>              {/* Faixa de temperaturas máxima e mínima*/}
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowup.JPG') }/></div>
                            <div className={classes.Box2}>20°C</div>
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowdn.JPG') }/></div>
                            <div className={classes.Box3}>15°C</div>
                        </div>
                        <div className={classes.CardRows}>              {/* Faixa inferior: chance de chuva e precipitação*/}
                            Placeholder
                        </div>

                    </div>
                </div>
        );
    }
};

export default CityCard;