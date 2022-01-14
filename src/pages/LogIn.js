import React from "react";
import { useHistory } from "react-router-dom";
import "../static/login.css";

const LogIn = (props) => {
  // const history = useHistory();
  // const onClickGoogle = () => {
  //   history.push("/oauth2/authorization/google");
  // };
  // const onClickNaver = () => {
  //   history.push("/oauth2/authorization/naver");
  // };
  // const onClickKakao = () => {
  //   history.push("/oauth2/authorization/kakao");
  // };

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
          <div className="login-form-button">
            <a href="/oauth2/authorization/google" className="login-google">
              구글로 로그인
            </a>
            <a href="/oauth2/authorization/naver" className="login-naver">
              네이버로 로그인
            </a>
            <a href="/oauth2/authorization/kakao" className="login-kakao">
              카카오톡으로 로그인
            </a>

            {/* <button className="login-google" onClick={onClickGoogle}>
              구글로 로그인
            </button> */}
            {/* <button className="login-naver" onClick={onClickNaver}>
              네이버로 로그인
            </button>
            <button className="login-kakao" onClick={onClickKakao}>
              카카오톡으로 로그인
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
