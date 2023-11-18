import React from "react";
import "./weathercard.css";
// import sunny from "../../assets/sunny.png";
import DateSelector from "../datePicker/DateSelector";

const WeatherCard = ({ weather }) => {
  let date = new Date(weather.dt * 1000); // Multiply by 1000 to convert from seconds to milliseconds
  //   console.log(date.length);
  date = date.toDateString();
  //   console.log(date);
  return (
    <div className="weather_container">
      <div className="weathercard_container card_container">
        <div className="date_selector">
          <DateSelector />
        </div>
        <div className="card_data">
          <p className="high-temp">High Temperature</p>
          <p className="low-temp">Low Temperature</p>
          <p className="humidity">Humidity</p>
          <p className="sunrise_time">Condition</p>
          <p className="sunset_time">Wind Speed</p>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {date}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src=" https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="high-temp">{weather.main.temp_max}&deg;C</p>
            <p className="low-temp">{weather.main.temp_min}&deg;C</p>
            <p className="humidity">{weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
            <p className="wind_speed">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
      <div className="weathercard_container weather2">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {date}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src=" https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="high-temp">{weather.main.temp_max}&deg;C</p>
            <p className="low-temp">{weather.main.temp_min}&deg;C</p>
            <p className="humidity">{weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
            <p className="wind_speed">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
      <div className="weathercard_container weather3">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {date}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src=" https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="high-temp">{weather.main.temp_max}&deg;C</p>
            <p className="low-temp">{weather.main.temp_min}&deg;C</p>
            <p className="humidity">{weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
            <p className="wind_speed">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
      <div className="weathercard_container weather4">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {date}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src=" https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="high-temp">{weather.main.temp_max}&deg;C</p>
            <p className="low-temp">{weather.main.temp_min}&deg;C</p>
            <p className="humidity">{weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
            <p className="wind_speed">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
      <div className="weathercard_container weather5">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {date}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src=" https://openweathermap.org/img/wn/10d@2x.png"
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="high-temp">{weather.main.temp_max}&deg;C</p>
            <p className="low-temp">{weather.main.temp_min}&deg;C</p>
            <p className="humidity">{weather.main.humidity}%</p>
            <p className="desc">{weather.weather[0].description}</p>
            <p className="wind_speed">{weather.wind.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
