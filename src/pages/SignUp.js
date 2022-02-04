import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../static/signup.css";
import axios from "axios";
import profileImage from "../static/media/KakaoTalk_20210328_192027988.jpg";

const SignUp = ({ setUserObj, userObj }) => {
  const history = useHistory();

  const [NAME, setName] = useState("");
  const [ID, setID] = useState("");
  const [PASSWORD, setPassword] = useState("");
  const [EMAIL, setEmail] = useState("");

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeID = (e) => {
    setID(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onClickCheck = () => {
    console.log("중복 체크 버튼이 클릭되었습니다.");
  };

  const onClickSignUp = () => {
    setUserObj({
      id: ID,
      email: EMAIL,
      name: NAME,
      password: PASSWORD,
      //   isPublic: true,
      //   profile: profileImage,
      //   introduce: "한줄 소개를 입력해보세요",
    });

    console.log(userObj);

    axios
      .post(`http://localhost:8080/signup`, userObj, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          window.alert("회원가입이 완료되었습니다.");
          console.log(userObj);
        } else {
          window.alert("회원가입에 실패했습니다.");
        }
        history.push("/login");
      })
      .catch((err) => {
        window.alert(err);
        history.push("/login");
      });
  };
  return (
    <>
      <div className="SignUp-Container">
        <div className="SignUpform-Container">
          <span className="header">회원가입</span>

          <div className="Input-Container">
            <div className="SignUpform-Name">
              <span className="formSpan">이름</span>
              <input onChange={handleChangeName} />
            </div>
            <div className="SignUpform-ID">
              <span className="formSpan">아이디</span>
              <input onChange={handleChangeID} />

              <button className="checkOverlap" onClick={onClickCheck}>
                중복확인
              </button>
            </div>
            <div className="SignUpform-Password">
              <span className="formSpan">비밀번호</span>
              <input onChange={handleChangePassword} />
            </div>
            <div className="SignUpform-Email">
              <span className="formSpan">이메일</span>
              <input onChange={handleChangeEmail} />
            </div>
          </div>
          <button className="SignUpButton" onClick={onClickSignUp}>
            완료
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
