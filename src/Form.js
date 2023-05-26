import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function showWeather(response) {
    setLoaded(true);
    setWeather({
      town: response.data.name,
      temperature: Math.round(response.data.main.temp),
      day: "Thursday 12:00",
      desc: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      imgurl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "40305f3309a7ac55bca48e8adec8ae7a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  //
  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-4">
            <div className="mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Enter a city"
                onChange={updateCity}
              />
            </div>
          </div>
        </div>

        <div className="button">
          <button type="submit" className="blue-button">
            Search
          </button>
          <button type="submit" className="orange-button">
            Current
          </button>
        </div>
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <div className="weather-app">
          <div className="weather-details">
            <div className="town-time-des">
              <div className="town">
                <strong>{weather.town}</strong>
              </div>
              <div id="time">{weather.day}</div>
              <div className="description">{weather.desc}</div>
            </div>
            <div className="icon">
              <img src={weather.imgurl} alt="weather Icon" />
            </div>
            <div className="temp-prep">
              <div className="d-flex temp">
                <div>
                  <strong>{weather.temperature}</strong>
                  <span className="unit">
                    <a href="/" className="active">
                      °C{" "}
                    </a>
                    |<a href="/">°F</a>
                  </span>
                </div>
              </div>
              <div className="prep">
                <div>
                  Humidity: <span className="humidity"></span>
                  {weather.humidity}%
                </div>
                <div>
                  Wind: <span className="wind">{weather.wind} km/h</span>
                </div>
              </div>
            </div>
          </div>
          <div className="list" id="forcast"></div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
