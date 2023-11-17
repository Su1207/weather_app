import React from "react";
import "./weathercard.css";
import DateSelector from "../datePicker/DateSelector";

const CardValue = () => {
  return (
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
  );
};

export default CardValue;
