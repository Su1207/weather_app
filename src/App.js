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

  /*
    Search button is pressed. Make a fetch call to the Open Weather Map API.
  */
  const searchPressed = () => {
    fetch(`${api.base}weather?q=${city}&units=metric&APPID=${api.key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  const handleSelectCity = (city) => {
    updateCity(city);
  };

  return (
    <div className="App">
      <Navbar />

      <SearchBar
        weather={weather}
        searchPressed={searchPressed}
        onCitySelect={handleSelectCity}
      />

      {typeof weather.main !== "undefined" ? (
        <WeatherCard weather={weather} />
      ) : (
        ""
      )}

      {/* If weather is not undefined display results from API */}
    </div>
  );
}

export default App;
