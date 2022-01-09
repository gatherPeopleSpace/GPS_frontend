import React, { useState, useEffect } from "react";
import PostModal from "../components/PostModal";
import "../static/gallery.css";
import Footer from "../components/Footer";
import PhotoItem from "../components/PhotoItem";
import Follow from "../components/Follow";
import Pagination from "../components/Pagination";

import profile from "../static/media/KakaoTalk_20210328_192027988.jpg";
import sen1 from "../static/media/sen_1.png";
import sen2 from "../static/media/sen_2.png";
import sen3 from "../static/media/sen_3.png";
import sen4 from "../static/media/sen_4.jpg";
import kiki1 from "../static/media/kiki_1.jpg";
import kiki2 from "../static/media/kiki_2.jpg";
import kiki3 from "../static/media/kiki_3.jpg";
import ponyo1 from "../static/media/ponyo_1.jpg";
import ponyo2 from "../static/media/ponyo_2.jpg";
import ponyo3 from "../static/media/ponyo_3.jpg";

const Gallery = (user) => {
  const [photos, setPhotos] = useState([
    { id: 1, src: sen1 },
    { id: 2, src: sen2 },
    { id: 3, src: sen3 },
    { id: 4, src: sen4 },
    { id: 5, src: kiki1 },
    { id: 6, src: kiki2 },
    { id: 7, src: kiki3 },
    { id: 8, src: ponyo1 },
    { id: 9, src: ponyo2 },
    { id: 10, src: ponyo3 },
    { id: 11, src: sen1 },
    { id: 12, src: sen2 },
    { id: 13, src: sen3 },
    { id: 14, src: sen4 },
    { id: 15, src: kiki1 },
    { id: 16, src: kiki2 },
    { id: 17, src: kiki3 },
    { id: 18, src: ponyo1 },
    { id: 19, src: ponyo2 },
    { id: 20, src: ponyo3 },
    { id: 21, src: sen1 },
    { id: 22, src: sen2 },
    { id: 23, src: sen3 },
    { id: 24, src: sen4 },
    { id: 25, src: kiki1 },
    { id: 26, src: kiki2 },
    { id: 27, src: kiki3 },
    { id: 28, src: ponyo1 },
    { id: 29, src: ponyo2 },
    { id: 30, src: ponyo3 },
    { id: 41, src: sen1 },
    { id: 42, src: sen2 },
    { id: 43, src: sen3 },
    { id: 44, src: sen4 },
    { id: 45, src: kiki1 },
    { id: 46, src: kiki2 },
    { id: 47, src: kiki3 },
    { id: 48, src: ponyo1 },
    { id: 49, src: ponyo2 },
    { id: 50, src: ponyo3 },
  ]);

  const userName = "username";
  const introduction = "한 줄 소개";
  const userProfile = profile;

  const [modalOpen, setModalOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const [followModalOpen, setFollowModalOpen] = useState(false);
  const [follow, setFollow] = useState("");

  const followerModalClose = () => {
    setFollowModalOpen(!followModalOpen);
    setFollow("follower");
  };

  const followingModalClose = () => {
    setFollowModalOpen(!followModalOpen);
    setFollow("following");
  };

  // useEffect(() => {
  //   fetch("서버주소/gallery/{userId}")
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(1, res);
  //       setPhotos(res);
  //     });
  // }, []);

  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
            <button className="User-follower" onClick={followerModalClose}>
              팔로워
            </button>
            {followModalOpen && follow === "follower" && (
              <Follow followModalClose={followerModalClose} mode="팔로워" />
            )}
            <button className="User-following" onClick={followingModalClose}>
              팔로잉
            </button>
            {followModalOpen && follow === "following" && (
              <Follow followModalClose={followingModalClose} mode="팔로잉" />
            )}
            <button className="User-addFriend">친구 추가 ➕</button>
          </div>
        </div>

        <div className="g-myRecords">
          <div className="g-photo-filter">
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
            <PhotoItem photolist={currentPosts} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={photos.length}
              currentPage={currentPage}
              paginate={paginate}
            ></Pagination>
          </div>

          <Footer />
        </div>
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
