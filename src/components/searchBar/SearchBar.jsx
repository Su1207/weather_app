import React, { useState } from "react";
import "./searchBar.css";
import location from "../../assets/location.png";
import Search from "../../assets/search.png";

const SearchBar = ({ weather, searchPressed, onCitySelect }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="middle-bar">
      <div className="city-location">
        <img src={location} alt="location" className="location_logo" />
        <h2 className="city-name">{weather.name}</h2>
      </div>

      <div className="search-bar">
        <input
          type="text"
          className="input_search"
          placeholder="Search your city here..."
          onChange={(e) => {
            setSearch(e.target.value);
            onCitySelect(e.target.value);
          }}
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
