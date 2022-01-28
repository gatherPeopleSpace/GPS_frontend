import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CLIENT_ID, REDIRECT_URI } from "./OAuth";

const KakaoRedirectHandler = ({ setIsLoggedIn, setUserObj }) => {
  const history = useHistory();

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      // getKakaoTokenHandler(code.toString());
      console.log(code);

      axios({
        method: "GET",
        url: `http://localhost:8080/login/oauth2/code/kakao?code=${code}`,
      }).then((res) => {
        if (res.status === 201 || res.status === 200) {
          setIsLoggedIn(true);
          history.push("/home");
        } else {
          window.alert("로그인에 실패하였습니다.");
          history.push("/login");
        }
      });
    }
  }, []);

  return <div>kakao login...</div>;
};

export default KakaoRedirectHandler;
