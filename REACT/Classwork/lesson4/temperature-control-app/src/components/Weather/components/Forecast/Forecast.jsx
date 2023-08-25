import React from "react";
import ForecastCard from "./ForecastCard";
export default class Forecast extends React.Component{
    render() {
        const {forecastData} = this.props
        const card = forecastData?.map((card, index)=><ForecastCard key={index} card={card}/>)
        return(
            <div class="forecast">
                {card}
            </div>
        )
    }
}