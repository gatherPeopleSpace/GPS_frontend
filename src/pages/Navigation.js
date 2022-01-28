import React from "react";
import gpsIcon from "../static/gpsIcon.png";
import "../static/navigation.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Navigation = (props) => {
  const history = useHistory();
  console.log(props);

  const onLogoutClick = () => {
    axios({
      method: "POST",
      url: `http://localhost:8080/logout`,
    }).then((res) => {
      if (res.status === 201 || res.status === 200) {
        props.setIsLoggedIn(false);
        window.alert("로그아웃 되었습니다.");
        history.push("/home");
      } else window.alert("로그아웃 실패하였습니다.");
    });
  };
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
          <button className="logOut-button" onClick={onLogoutClick}>
            log out
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
