import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function WeatherDetail(props) {
  return (
    <div>
      <div className="weather-app">
        <div className="weather-details">
          <div className="town-time-des">
            <div className="town">
              <strong>{props.data.town}</strong>
            </div>
            <div id="time">
              <FormattedDate date={props.data.date} />
            </div>
            <div className="description">{props.data.desc}</div>
          </div>
          <div>
            <div className="row mt-5">
              <div className="d-flex col-6">
                <div className="icon float-left mt-3 me-2">
                  <WeatherIcon code={props.data.icon} size={50} />
                </div>
                <div className="temp">
                  <WeatherTemperature celsius={props.data.temperature} />
                </div>
              </div>
              <div className="prep col-6 ">
                <div>
                  Humidity: <span className="humidity"></span>
                  {props.data.humidity}%
                </div>
                <div>
                  Wind: <span className="wind">{props.data.wind} km/h</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <WeatherForecast coordinate={props.data.coord} />
      </div>
    </div>
  );
}
