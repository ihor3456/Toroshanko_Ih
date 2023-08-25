import React from "react";
export default class ForecastCard extends React.Component{
    render() {
        const {weekDay, day, month, forecastIcon,
            forecastText,
            maxTemp}=this.props.card;
        return(
            <div className="forecast__card card--selected">
                <p className="card__data">{weekDay} <br/> {day} {month}</p>
                <div className="card__icon">
                    <img src={forecastIcon} alt={forecastText}/>
                </div>
                <span className="card__temp">{maxTemp}</span>
            </div>
        )
    }
}