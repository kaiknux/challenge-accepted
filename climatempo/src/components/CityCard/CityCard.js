import React from 'react';
import classes from '../CityCard/CityCard.css';

function CityCard (props) {

        return (
                <div className={classes.CardContainer}>                 {/* A caixa externa */}
                    <div className={classes.CardHeaderDate}>            {/* Faixa superior com a data */}
                         {props.date}
                    </div>
                    <div className={classes.CardWeatherDescription}>    {/* Segunda faixa, com descrições do clima*/}
                        {props.text}
                    </div>
                    <div className={classes.WeatherNumbers}>            {/* Caixa das duas faixas inferiores*/}
                        <div className={classes.CardRows}>              {/* Faixa de temperaturas máxima e mínima*/}
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowup.JPG') }/></div>
                            <div className={classes.Box2}>{props.tempmax}</div>
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowdn.JPG') }/></div>
                            <div className={classes.Box3}>{props.tempmin}</div>
                        </div>
                        <div className={classes.CardRows}>              {/* Faixa inferior: chance de chuva e precipitação*/}
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowup.JPG') }/></div>
                            <div className={classes.Box4}>{props.rainprec}</div>
                            <div className={classes.Box1}><img src={ require('../../assets/images/arrowdn.JPG') }/></div>
                            <div className={classes.Box4}>{props.rainprob}</div>
                        </div>

                    </div>
                </div>
        );
};

export default CityCard;