import React from "react";
import "./forecastOverview.css";
import windIcon from "../../images/wind.png";
import { getDate } from "../../helpers/getDate/getDate";
import { roundDown } from "../../helpers/roundDown/roundDown";

export default function ForecastOverview(props) {
  const imgSrc = "https://www.metaweather.com/static/img/weather/png";
  const {
    applicable_date: date,
    max_temp: max,
    min_temp: min,
    the_temp: temp,
    weather_state_name: current,
    wind_speed: breeze,
    weather_state_abbr: imgIcon,
  } = props.forecast;

  return (
    <div className="forecastItem">
      <div className="weatherMain">
        <div className="mainSmallSection">
          <img
            className="weatherIcon"
            src={`${imgSrc}/${imgIcon}.png`}
            alt="weather"
          />
          <p className="date">{getDate(date)}</p>
        </div>
        <p className="currentTemp">
          {roundDown(temp)}
          <span>°C</span>
        </p>
      </div>
      <p className="weatherState">{current}</p>
      <div className="windContainer">
        <img className="windIcon" src={windIcon} alt="wind" />
        <p className="windText">{roundDown(breeze)}mph</p>
      </div>
      <p className="minMax">
        min: {roundDown(min)}°C | max: {roundDown(max)}°C
      </p>
    </div>
  );
}
