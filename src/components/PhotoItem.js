import React, { useEffect, useState } from "react";
import "../static/photoitem.css";

const PhotoItem = ({ photolist }) => {
  const onButtonClick = () => {
    fetch("서버주소/gallery/{userId}", {
      method: "Delete",
    })
      .then((res) => res.json())
      .then((res) => {
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
