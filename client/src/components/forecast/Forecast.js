import React, { useState, useEffect } from "react";
import ForecastOverview from "../forecast-overview/ForecastOverview";
import Loader from "../loader/Loader";
import "./forecast.css";

export default function Forecast() {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    fetch("/weather")
      .then((res) => res.json())
      .then((data) => setWeatherData(data));
  }, []);

  if (!weatherData) return <Loader />;
  return (
    <div className="weather-container">
      {weatherData.consolidated_weather.slice(0, 5).map((forecast) => (
        <ForecastOverview key={forecast.id} forecast={forecast} />
      ))}
    </div>
  );
}
