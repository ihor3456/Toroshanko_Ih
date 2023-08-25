import React from "react";
import "./Weather.scss";
import Meta from "./components/Meta";
import Forecast from "./components/Forecast";

export default class Weather extends React.Component {
  render() {
    const data = {
      current: {
        cloud: 46,
        humidity: 46,
        temp: 20,
      },
      forecast: [
        {
          weekDay: "Wednesday",
          month: "August",
          day: 31,
          forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
          forecastText: "Partly cloudy",
          maxTemp: 23.2,
        },
        {
          weekDay: "Thursday",
          month: "September",
          day: 1,
          forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
          forecastText: "Partly cloudy",
          maxTemp: 21.5,
        },
        {
          weekDay: "Wednesday",
          month: "August",
          day: 31,
          forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
          forecastText: "Partly cloudy",
          maxTemp: 23.2,
        },
        {
          weekDay: "Wednesday",
          month: "August",
          day: 31,
          forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
          forecastText: "Partly cloudy",
          maxTemp: 23.2,
        },
        {
          weekDay: "Wednesday",
          month: "August",
          day: 31,
          forecastIcon: "http://cdn.weatherapi.com/weather/64x64/day/116.png",
          forecastText: "Partly cloudy",
          maxTemp: 23.2,
        },
      ],
    };
    return (
      <div class="weather-wrapper">
        <Meta
          cloud={data.current.cloud}
          humidity={data.current.humidity}
          feelslike={data.current.temp}
        />
        <Forecast forecastData={data.forecast} />
      </div>
    );
  }
}
