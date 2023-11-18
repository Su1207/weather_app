import React from "react";
import "./weathercard.css";
// import sunny from "../../assets/sunny.png";
import DateSelector from "../datePicker/DateSelector";

const WeatherCard = ({ weather }) => {
  let sunSetHours12, sunRiseMin12, date;

  const dateToString = (time) => {
    date = new Date(time * 1000); // Multiply by 1000 to convert from seconds to milliseconds
    //   console.log(date.length);
    date = date.toDateString();
    //   console.log(date);
    return date;
  };

  const timeToHour = (time) => {
    let sunSet = new Date(time * 1000);
    let sunSetHours = sunSet.getHours();
    sunSetHours12 = sunSetHours > 12 ? sunSetHours % 12 : sunSetHours;
    return sunSetHours12;
  };

  const timeToMin = (time) => {
    let sunRise = new Date(time * 1000);
    let sunRiseMin = sunRise.getMinutes();
    sunRiseMin12 = sunRiseMin < 10 ? `0${sunRiseMin}` : sunRiseMin;
    return sunRiseMin12;
  };

  // console.log(sunSetHours12, sunSetMin);

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
          <p className="sunrise_time">Sunrise Time</p>
          <p className="sunset_time">Sunset Time</p>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {dateToString(weather.daily[0].dt)}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src={`https://openweathermap.org/img/wn/${weather.daily[0].weather[0].icon}@2x.png`}
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.daily[0].weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="temp">{weather.daily[0].temp.max}&deg;C</p>
            <p className="low-temp">{weather.daily[0].temp.min}&deg;C</p>
            <p className="humidity">{weather.daily[0].humidity}%</p>
            <p className="sunrise_time">
              {timeToHour(weather.daily[0].sunrise)}:
              {timeToMin(weather.daily[0].sunrise)} AM
            </p>
            <p className="sunset_time">
              {timeToHour(weather.daily[0].sunset)}:
              {timeToMin(weather.daily[0].sunset)} PM
            </p>
          </div>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {dateToString(weather.daily[1].dt)}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src={`https://openweathermap.org/img/wn/${weather.daily[1].weather[0].icon}@2x.png`}
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.daily[1].weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="temp">{weather.daily[1].temp.max}&deg;C</p>
            <p className="low-temp">{weather.daily[1].temp.min}&deg;C</p>
            <p className="humidity">{weather.daily[1].humidity}%</p>
            <p className="sunrise_time">
              {timeToHour(weather.daily[1].sunrise)}:
              {timeToMin(weather.daily[1].sunrise)} AM
            </p>
            <p className="sunset_time">
              {timeToHour(weather.daily[1].sunset)}:
              {timeToMin(weather.daily[1].sunset)} PM
            </p>
          </div>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {dateToString(weather.daily[2].dt)}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src={`https://openweathermap.org/img/wn/${weather.daily[2].weather[0].icon}@2x.png`}
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.daily[2].weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="temp">{weather.daily[2].temp.max}&deg;C</p>
            <p className="low-temp">{weather.daily[2].temp.min}&deg;C</p>
            <p className="humidity">{weather.daily[2].humidity}%</p>
            <p className="sunrise_time">
              {timeToHour(weather.daily[2].sunrise)}:
              {timeToMin(weather.daily[2].sunrise)} AM
            </p>
            <p className="sunset_time">
              {timeToHour(weather.daily[2].sunset)}:
              {timeToMin(weather.daily[2].sunset)} PM
            </p>
          </div>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {dateToString(weather.daily[3].dt)}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src={`https://openweathermap.org/img/wn/${weather.daily[3].weather[0].icon}@2x.png`}
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.daily[3].weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="temp">{weather.daily[3].temp.max}&deg;C</p>
            <p className="low-temp">{weather.daily[3].temp.min}&deg;C</p>
            <p className="humidity">{weather.daily[3].humidity}%</p>
            <p className="sunrise_time">
              {timeToHour(weather.daily[3].sunrise)}:
              {timeToMin(weather.daily[3].sunrise)} AM
            </p>
            <p className="sunset_time">
              {timeToHour(weather.daily[3].sunset)}:
              {timeToMin(weather.daily[3].sunset)} PM
            </p>
          </div>
        </div>
      </div>
      <div className="weathercard_container">
        <p style={{ color: "#444", fontWeight: "700", fontSize: "1rem" }}>
          {dateToString(weather.daily[4].dt)}
        </p>
        <div className="weathercard_maincontainer">
          <div className="condition">
            <img
              src={`https://openweathermap.org/img/wn/${weather.daily[4].weather[0].icon}@2x.png`}
              alt="icon"
              className="sunny_logo"
            />
            <p>{weather.daily[4].weather[0].main}</p>
          </div>
          <div className="weather_data">
            <p className="temp">{weather.daily[4].temp.max}&deg;C</p>
            <p className="low-temp">{weather.daily[4].temp.min}&deg;C</p>
            <p className="humidity">{weather.daily[4].humidity}%</p>
            <p className="sunrise_time">
              {timeToHour(weather.daily[4].sunrise)}:
              {timeToMin(weather.daily[4].sunrise)} AM
            </p>
            <p className="sunset_time">
              {timeToHour(weather.daily[4].sunset)}:
              {timeToMin(weather.daily[4].sunset)} PM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
