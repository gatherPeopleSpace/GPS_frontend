import React from "react";
import gpsIcon from "../static/gpsIcon.png";
import "../static/navigation.css";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Navigation = (props) => {
  const history = useHistory();

  const onLogoutClick = () => {
    axios
      .post(`/logout`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          props.setIsLoggedIn(false);
          localStorage.removeItem("token");
          window.alert("로그아웃 되었습니다.");
          history.push("/login");
        } else window.alert("로그아웃 실패하였습니다.");
      })
      .catch((err) => {
        window.alert(err);
        history.push("/home");
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

      {localStorage.getItem("token") && (
        <div className="nav-links">
          <Link to="/myMap">myMap</Link>
          <Link to="/gallery">gallery</Link>
        </div>
      )}

      <div className="nav-loggedIn">
        {!localStorage.getItem("token") ? (
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
