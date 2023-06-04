import React, { useState } from "react";
import WeatherDetail from "./WeatherDetail";
import axios from "axios";

export default function Form(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({ ready: false });

  function showWeather(response) {
    setWeather({
      ready: true,
      town: response.data.name,
      temperature: Math.round(response.data.main.temp),
      date: new Date(response.data.dt * 1000),
      desc: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "40305f3309a7ac55bca48e8adec8ae7a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  //
  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weather.ready) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <div className="">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter a city"
                  onChange={updateCity}
                  autoFocus="on"
                />
              </div>
            </div>
            <div className="col-md-3 button">
              <button type="submit" className="blue-button">
                Search
              </button>

              <div className="col-md-3">
                <button type="submit" className="orange-button">
                  Current
                </button>
              </div>
            </div>
          </div>
        </form>
        <WeatherDetail data={weather} />
      </div>
    );
  } else {
    search();
    return "Searching.....";
  }
}
