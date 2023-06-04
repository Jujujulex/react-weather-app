import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div>
        <strong>{props.celsius}</strong>
        <span className="unit">
          <a href="/" className="active">
            °C{" "}
          </a>
          |
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <strong>{Math.round(fahrenheit)}</strong>
        <span className="unit">
          <a href="/" onClick={displayCelsius}>
            °C{" "}
          </a>
          | °F
        </span>
      </div>
    );
  }
}
