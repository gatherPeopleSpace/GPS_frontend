import React, { useEffect, useState } from "react";
import "../static/follow.css";

const Follow = ({ followModalClose, mode, userObj }) => {
  const [list, setList] = useState([
    { name: "김어진", intro: "한줄소개입니다." },
    { name: "문승재", intro: "컴퓨터과학과" },
    { name: "김경은", intro: "휴먼지능공학과" },
    { name: "김선재", intro: "데이터사이언스" },
    { name: "이름뭐하지", intro: "fmyym" },
    { name: "가나다라마바사", intro: "한줄소개 뭐로해야되냐" },
    { name: "ㄴㄴㄴ", intro: "dddsfsfsfdddcxbchgf" },
    { name: "ㅁㅁㅁ", intro: "awtrjgta" },
    { name: "ㅎㅎㅎ", intro: "한줄소개입니다." },
    { name: "ㅈㅈㅈ", intro: "tynmyuinoygnkjhfjb" },
    { name: "ㄷㄷㄷ", intro: "sfsfafdsf" },
    { name: "ㅕㅕㅕ", intro: "ymyuimtyu" },
  ]);

  // useEffect(() => {
  //   if (mode === "팔로워") {
  //     // fetch("서버주소/gallery/{userId}/followers")
  //     //   .then((res) => res.json())
  //     //   .then((res) => {
  //     //     setList(res);
  //     //   });
  //   } else if (mode === "팔로잉") {
  //     // fetch("서버주소/gallery/{userId}/followings")
  //     //   .then((res) => res.json())
  //     //   .then((res) => {
  //     //     setList(res);
  //     //   });
  //   }
  // }, []);

  const onCloseFollow = (e) => {
    if (e.target === e.currentTarget) followModalClose();
  };

  return (
    <>
      <div className="follow-Container" onClick={onCloseFollow}>
        <div className="follow-header-container">
          <div className="follow-header">{mode}</div>
          <button className="follow-close-button" onClick={followModalClose}>
            ✖
          </button>
        </div>

        <div className="follow-list-Container">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <div className="name">{item.name}</div>
                <div className="intro">{item.intro}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Follow;
