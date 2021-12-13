import React, { useState, useEffect } from "react";
import PostModal from "./PostModal";
import "../static/gallery.css";
import Footer from "../components/Footer";
import profile from "../static/KakaoTalk_20210328_192027988.jpg";
import PhotoItem from "../components/PhotoItem";

const Gallery = (userId) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch("서버주소/gallery/{userId}")
      .then((res) => res.json())
      .then((res) => {
        console.log(1, res);
        setPhotos(res);
      });
  }, []);

  const userName = "username";
  const introduction = "한 줄 소개";
  const follower = 100;
  const following = 100;
  const userProfile = profile;

  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="Gallery-container">
      <div className="g-Content-container">
        <div className="g-User-container">
          <div className="User-profile">
            <img className="User-profile-image" src={userProfile} />
          </div>
          <div className="User-header">{userName} 님의 gallery</div>
          <div className="User-introduction">{introduction}</div>
          <div className="User-follow">
            <button className="User-follower">팔로워 {follower}</button>
            <button className="User-following">팔로잉 {following}</button>
            <button className="User-addFriend">친구 추가 ➕</button>
          </div>
        </div>

        <div className="g-myRecords">
          <div className="g-photo-filter">
            {" "}
            {/* dropdown menu*/}
            <select
              className="photo-filter-kinds"
              name="태그"
              defaultValue="전체"
            >
              <option value="전체">전체</option>
              <option value="분위기">분위기</option>
              <option value="음식">음식</option>
              <option value="연령대">연령대</option>
              <option value="장소">장소</option>
              <option value="종류">종류</option>
            </select>
            <select
              className="photo-filter-places"
              name="위치"
              defaultValue="전체"
            >
              <option value="전체">전체</option>
              <option value="종로구">종로구</option>
              <option value="서대문구">서대문구</option>
              <option value="용산구">용산구</option>
              <option value="강남구">강남구</option>
            </select>
          </div>
          <div className="myRecords-header">나의 기록</div>
          <div className="myRecords-photoList">
            {photos.map((photo, index) => {
              <PhotoItem key={index} photo={photo} />;
            })}
          </div>
          <Footer />
        </div>

        {/* <div className="g-pagination"> </div> */}
      </div>

      <div className="g-nav-container">
        <ul className="g-nav">
          <li>
            <button className="add-button" onClick={modalClose}>
              ➕
            </button>
          </li>
          {modalOpen && <PostModal modalClose={modalClose}></PostModal>}
          <li className="find-container">
            <input className="find-input" placeholder="친구찾기"></input>
            <button className="find-button">🔎</button>
          </li>
          <li>
            <button className="random-button">파도타기</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Gallery;
