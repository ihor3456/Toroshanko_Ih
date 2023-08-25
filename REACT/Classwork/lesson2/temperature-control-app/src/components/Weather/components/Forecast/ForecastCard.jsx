import React from "react";

export default class ForecastCard extends React.Component {
  render() {
    const { weekDay, day, month, forecastIcon, forecastText, maxTemp } =
      this.props.card;
    return (
      <div class="forecast__card card--selected">
        <p class="card__data">
          {weekDay} <br /> {day} {month}
        </p>
        <div class="card__icon">
          <img src={forecastIcon} alt={forecastText} />
        </div>
        <span class="card__temp">{maxTemp}</span>
      </div>
    );
  }
}
