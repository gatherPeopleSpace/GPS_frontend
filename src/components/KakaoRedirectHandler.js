import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { CLIENT_ID, REDIRECT_URI } from "./OAuth";
import profileImage from "../static/media/KakaoTalk_20210328_192027988.jpg";

const KakaoRedirectHandler = ({ setIsLoggedIn, setUserObj }) => {
  const history = useHistory();

  let code = new URL(window.location.href).searchParams.get("code");

  useEffect(() => {
    if (code) {
      console.log(code);

      axios({
        method: "GET",
        url: `http://localhost:8080/login/oauth2/code/kakao?code=${code}`,
      })
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            setIsLoggedIn(true);
            console.log(res);
            //res에서 userObj 받아와서 setUserObj로 userObj 받아오는 코드 짜기
            setUserObj({
              userId: "thisisUserId",
              email: "kimain77@daum.net",
              name: "김어진",
              isPublic: true,
              profile: profileImage,
              introduce: "한줄 소개를 입력해보세요",
            });
            history.push("/home");
          } else {
            window.alert("로그인에 실패하였습니다.");
            history.push("/login");
          }
        })
        .catch((err) => {
          window.alert(err);
          history.push("/login");
        });
    }
  }, []);

  return <div>kakao login...</div>;
};

export default KakaoRedirectHandler;
