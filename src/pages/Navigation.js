import React from "react";
import gpsIcon from "../static/gpsIcon.png";
import "../static/navigation.css"

export default() =>  {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="#">
                    <img src={gpsIcon}/>
                    <div className="logo-content">gps</div>
                </a>
            </div>

            <div className="nav-links">
                <a href="#/myMap">myMap</a>
                <a href="#/gallery">gallery</a>
            </div>

            <div className="nav-loggedIn">
                <a href="#/login" className="logIn-button">log in</a>
            </div>
        </nav>
    );
}