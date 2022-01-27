import React from "react";
import gpsIcon from "../static/gpsIcon.png";
import "../static/navigation.css";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <Link to="/home">
          <img src={gpsIcon} />
          <div className="logo-content">gps</div>
        </Link>
      </div>

      {props.isLoggedIn && (
        <div className="nav-links">
          <Link to="/myMap">myMap</Link>
          <Link to="/gallery">gallery</Link>
        </div>
      )}

      <div className="nav-loggedIn">
        {!props.isLoggedIn ? (
          <Link to="/login" className="logIn-button">
            log in
          </Link>
        ) : (
          <Link to="/login" className="logIn-button">
            log out
          </Link>
        )}
      </div>
    </nav>
  );
};
