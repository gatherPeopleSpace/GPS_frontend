import React from "react";
import gpsIcon from "../static/gpsIcon.png";
import "../static/navigation.css"

export default() =>  {
    return (
        <nav className="nav">
            <div className="nav-logo">
                <a href="#/about">
                    <img src={gpsIcon}/>
                    <div className="logo-content">gps</div>
                </a>
            </div>

            <div className="nav-links">
                <a href="#">myMap</a>
                <a href="#/profile">myProfile</a>
            </div>

            <div className="nav-loggedIn">log in</div>
        </nav>
    );
}