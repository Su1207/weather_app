import React from "react";
import "./navbar.css";
import Refresh from "../../assets/refresh.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar_container">
      <nav className="navbar_link">
        <div className="title_logo">
          <img src={logo} alt="" className="logo" />
          <h1 className="title">Weather 99</h1>
        </div>

        <div className="refresh">
          <img src={Refresh} alt="refresh" className="refresh_img" />
          <span className="refresh-title">Refresh</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
