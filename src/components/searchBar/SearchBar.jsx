import React, { useState } from "react";
import "./searchBar.css";
import location from "../../assets/location.png";
import Search from "../../assets/search.png";

const SearchBar = ({ weather, searchPressed, onCitySelect, cityName }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    const inputValue = e.target.value;
    onCitySelect(inputValue);
  };

  function convertDecimalToDMS(decimalDegrees, lat) {
    const dir = decimalDegrees > 0 ? (lat ? "N" : "E") : lat ? "S" : "W";
    const degrees = Math.floor(decimalDegrees);
    const minutesWithDecimal = (decimalDegrees - degrees) * 60;
    const minutes = Math.floor(minutesWithDecimal);
    const seconds = (minutesWithDecimal - minutes) * 60;

    return `${degrees}° ${minutes}' ${seconds.toFixed(0)}" ${dir}`;
  }

  return (
    <div className="middle-bar">
      <div className="city_full_location">
        <div className="city-location">
          <img src={location} alt="location" className="location_logo" />
          {typeof cityName.name !== "undefined" ? (
            <h2 className="city-name">
              {cityName.name}, {cityName.state}
            </h2>
          ) : (
            ""
          )}
        </div>
        {typeof cityName.name !== "undefined" ? (
          <div className="city_direction">
            {convertDecimalToDMS(cityName.lat, true)} &{" "}
            {convertDecimalToDMS(cityName.lat, false)}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="search-bar">
        <input
          type="text"
          className="input_search"
          placeholder="Search your city here..."
          onChange={(e) => setSearch(e.target.value)}
          onInput={handleInput}
        />
        <img
          src={Search}
          alt="search"
          className="search-logo"
          onClick={searchPressed}
          style={{ cursor: "pointer" }}
        />
      </div>
      {/* <button onClick={searchPressed}>Search</button> */}
    </div>
  );
};

export default SearchBar;
