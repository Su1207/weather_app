import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./dateSelector.css";
import calendar from "../../assets/calendar.png";

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="date-picker_container">
      <p className="date-pick-day">Select Date</p>
      <div className="calendar_container">
        <img src={calendar} alt="" className="calendar_logo" />
        <DatePicker
          className="date-picker"
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="dd MMM yyyy" // Customize the date format if needed
          placeholderText="Select a date"
        />
      </div>
    </div>
  );
};

export default DateSelector;
