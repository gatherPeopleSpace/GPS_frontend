import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import PostModal from "../components/PostModal";
import "../static/gallery.css";
import Footer from "../components/Footer";
import PhotoItem from "../components/PhotoItem";
import Follow from "../components/Follow";
import Pagination from "../components/Pagination";
import GalleryFollow from "../components/GalleryFollow";
import EditIntro from "../components/EditIntro";
import profileImage from "../static/media/KakaoTalk_20210328_192027988.jpg";

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
import LoadUser from "../components/LoadUser";

const Gallery = ({ userObj, setUserObj }) => {
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
    { id: 51, src: sen1 },
    { id: 52, src: sen2 },
    { id: 53, src: sen3 },
    { id: 54, src: sen4 },
    { id: 55, src: kiki1 },
    { id: 56, src: kiki2 },
    { id: 57, src: kiki3 },
    { id: 58, src: ponyo1 },
    { id: 59, src: ponyo2 },
    { id: 60, src: ponyo3 },
  ]);

  useEffect(() => {
    setUserObj({
      id: localStorage.getItem("id"),
      password: localStorage.getItem("password"),
      email: localStorage.getItem("email"),
      name: localStorage.getItem("name"),
    });
    console.log(userObj);
    //photoList 가져오기
    axios
      .get(`http://localhost:8080/gallery/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res);
        // setPhotos();
      });
  }, []);

  const [page_userId, setPageUserId] = useState("");
  const [isFollowed, setIsFollowed] = useState();

  const [modalOpen, setModalOpen] = useState(false);

  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  const history = useHistory();

  const onClickRandom = () => {
    axios
      .get(`/gallery`, {
        headers: {
          "Content-Type": "application/json",
          // Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => res.json())
      .then((res) => {
        if (res.data) {
          history.push("/gallery/userId={res.data}");
        }
      });
  };

  //pagination을 위한 변수
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = photos.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const username = userObj.name;
  return (
    //쓸데없는 DIV 없애기
    <div className="Gallery-container">
      <div className="g-nav-container">
        <ul>
          <li>
            <button className="add-button" onClick={modalClose}>
              ➕
            </button>
          </li>
          {modalOpen && (
            <PostModal
              userObj={userObj}
              modalClose={modalClose}
              setUserObj={setUserObj}
            />
          )}
          <li>
            <button className="random-button" onClick={onClickRandom}>
              파도타기
            </button>
          </li>
        </ul>
      </div>
      <div className="g-Content-container">
        <div className="g-User-container">
          <div className="User-profile">
            <img className="User-profile-image" src={profileImage} />
          </div>
          <div className="User-header">{username} 님의 gallery</div>

          <EditIntro intro={userObj.intro} setUserObj={setUserObj} />
          <GalleryFollow />
        </div>

        <div className="g-myRecords">
          <div className="myRecords-header">나의 기록</div>
          <div className="myRecords-photoList">
            <PhotoItem photolist={currentPosts} userObj={userObj} />
            <Pagination
              postsPerPage={postsPerPage}
              totalPosts={photos.length}
              currentPage={currentPage}
              paginate={paginate}
            ></Pagination>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Gallery;
