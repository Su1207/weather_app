import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import WeatherCard from "./components/weatherCard/WeatherCard";
import SearchBar from "./components/searchBar/SearchBar";

const api = {
  key: "0a8d9abf92f4ed538d76bb84935eab8a",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [city, updateCity] = useState("");
  const [weather, setWeather] = useState({});

  const [cityName, setCityName] = useState({});

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.\
  */
  const searchPressed = () => {
    fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${api.key}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCityName(data[0]);
        return fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${data[0].lat}&lon=${data[0].lon}&exclude=hourly,minutely&units=metric&appid=${api.key}`
        );
      })
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleSelectCity = (city) => {
    updateCity(city);
  };

  const handleRefresh = () => {
    // Check if a city is selected before making the API call
    if (city) {
      searchPressed();
      console.log("Page Refreshed");
    }
  };

  return (
    <div className="App">
      <Navbar handleRefresh={handleRefresh} />

      <SearchBar
        cityName={cityName}
        weather={weather}
        searchPressed={searchPressed}
        onCitySelect={handleSelectCity}
      />

      {typeof weather.current !== "undefined" ? (
        <WeatherCard weather={weather} />
      ) : (
        ""
      )}

      {/* If weather is not undefined display results from API */}
    </div>
  );
}

export default App;
