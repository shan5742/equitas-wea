import React, { useEffect } from "react";
import "./forecastOverview.css";
import Wind from "../../images/wind.png";
import { getDate } from "../../helpers/getDate";

export default function ForecastOverview(props) {
  const imgSrc = "https://www.metaweather.com/static/img/weather/png";
  const {
    applicable_date: date,
    max_temp: max,
    min_temp: min,
    the_temp: temp,
    weather_state_name: current,
    wind_speed: breeze,
    weather_state_abbr: img,
  } = props.forecast;

  return (
    <div className="forecastItem">
      <div className="weatherMain">
        <div className="mainSmallSection">
          <img
            className="weatherIcon"
            src={`${imgSrc}/${img}.png`}
            alt="weather"
          />
          <p className="date">{getDate(date)}</p>
        </div>
        <p className="currentTemp">
          {Math.floor(temp)}
          <span>°C</span>
        </p>
      </div>
      <p className="weatherState">{current}</p>
      <div className="windContainer">
        <img className="windIcon" src={Wind} alt="wind" />
        <p className="windText">{Math.floor(breeze)}mph</p>
      </div>
      <p className="minMax">
        min: {Math.floor(min)}°C | max: {Math.floor(max)}°C
      </p>
    </div>
  );
}
