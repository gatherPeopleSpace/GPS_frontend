import React, { useEffect, useState } from "react";
import "../static/photoitem.css";
import axios from "axios";

const PhotoItem = ({ photolist, userObj }) => {
  const onButtonClick = (e) => {
    //삭제할 이미지의 id(key)값도 같이 보내기
    // const selectedPhotoId = e.target.key;
    axios
      .delete(`http://localhost:8080/gallery/${userObj.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        console.log("delete");
      });
  };

  return (
    <div className="photoItem-Container">
      {photolist.map((photo, index) => {
        return (
          <div>
            <img key={index} src={photo.src} />
            <button className="img-deleteButton" onClick={onButtonClick}>
              ✖
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoItem;
