import React from 'react';
import "../static/footer.css"
import gpsIcon from "../static/gpsIcon.png";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <hr color="lightgrey" size="1"/>
        <div className="footer-content">
          <img className="footer-logo"src={gpsIcon}/>
          <a className="footer-about" href="#/about">about gps</a>
          <h2 className="footer-title">
            &copy; Copyright 2021-2022. GPS. All Rights Reserved.
          </h2>
        </div>
      </footer>
    </>
  );
}



export default Footer;
