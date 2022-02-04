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
    const { name, value } = e.target;
    const newName = { name: value };
    setName(newName);
    console.log(NAME);
  };

  const handleChangeID = (e) => {
    const { id, value } = e.target;
    const newID = { id: value };
    setID(newID);
    console.log(ID);
  };

  const handleChangePassword = (e) => {
    const { password, value } = e.target;
    const newPassword = { password: value };
    setPassword(newPassword);
    console.log(PASSWORD);
  };

  const handleChangeEmail = (e) => {
    const { email, value } = e.target;
    const newEmail = { email: value };
    setEmail(newEmail);
    console.log(EMAIL);
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
      .post(`http://localhost:8080/signup`, JSON.stringify(userObj), {
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
