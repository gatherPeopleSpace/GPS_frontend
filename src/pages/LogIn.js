import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../static/login.css";
import axios from "axios";

const LogIn = ({ setIsLoggedIn, setUserObj, userObj }) => {
  const history = useHistory();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeID = (e) => {
    setId(e.target.value);
  };

  const onClickLogin = () => {
    axios
      .post(
        `/login`,
        { id: id, password: password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          const newUserObj = res.data;
          setUserObj({
            id: newUserObj.id,
            password: newUserObj.password,
            email: newUserObj.email,
            name: newUserObj.name,
          });
          console.log("LogIn:", userObj);

          localStorage.setItem("token", res.headers.authorization);
          localStorage.setItem("id", res.data.id);
          localStorage.setItem("password", res.data.password);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("email", res.data.email);

          setIsLoggedIn(true);
          history.push({ pathname: "/home", state: userObj });
        } else {
          window.alert("로그인에 실패하였습니다.");
          history.push("/login");
        }
      })
      .catch((err) => {
        window.alert(err);
        history.push("/login");
      });
  };

  const onClickSignup = () => {
    history.push("/signup");
  };

  return (
    <>
      <div className="login-container">
        <div className="login-main">
          <div className="login-main-header">GPS 시작하기</div>
          <p className="login-main-content">
            지금 로그인하고 다양한 사진을 경험하세요
          </p>
          <p className="login-main-content">매일 새로운 경험들이 추가됩니다.</p>
        </div>

        <div className="login-form-container">
          <div className="login-form-header">Log In</div>
          <div className="login-form-content">
            로그인 후 더 다양한 기능을 이용하실 수 있습니다.
          </div>
          <div className="login-form">
            <div className="login-form-ID">
              <span className="login-form-span">아이디</span>
              <input onChange={handleChangeID} />
            </div>

            <div className="login-form-Password">
              <span className="login-form-span">비밀번호</span>
              <input onChange={handleChangePassword} />
            </div>
          </div>
          <div className="button-Container">
            <button className="loginButton" onClick={onClickLogin}>
              log in
            </button>
            <button className="signupButton" onClick={onClickSignup}>
              sign up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
