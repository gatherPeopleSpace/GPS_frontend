import React, { useEffect, useState } from "react";
import "../static/modal.css";
import "../static/fileread.css";
import EXIF from "exif-js";

const Modal = ({ modalClose }, userId) => {
  const [imgLoaded, setImgLoad] = useState(false);

  const [photoInfo, setPhotoInfo] = useState({
    // 업로드할 이미지의 소스
    src: null,
    address: null,
  });

  const [postObj, setPostObj] = useState({
    userId: { userId },
    photo: "",
    tagList: [],
  });

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      // 파일이 있으면 (파일이 등록되면)
      // HTML5 의 FileAPI 를 사용하여 FileReader 객체를 reader 변수에 저장합니다.
      const reader = new FileReader();

      // readAsDataURL로 파일을 읽습니다
      reader.readAsDataURL(e.target.files[0]);

      // readAsDataURL 메서드 실행이 완료되면 onload 이벤트가 발생합니다.
      // 이 이벤트가 발생하면(읽기가 완료되면) 해당 이미지를 src state에 저장합니다.
      reader.addEventListener("load", () => {
        setPhotoInfo({ src: reader.result });
        setImgLoad(true);
        setPostObj({ photo: reader.result });
      });
    }
  };

  const getExif = () => {
    var choicedImg = document.getElementsByClassName("choicedImg");
    console.log(`GetExif ${choicedImg}`);
    EXIF.getData(choicedImg, function () {
      var make = EXIF.getTag(this, "Make");
      var model = EXIF.getTag(this, "Model");
      // var makeAndModel = document.getElementsByClassName("makeAndModel");
      // makeAndModel.innerHTML = `${make} ${model}`;
      console.log(`make : ${make} model : ${model}`);
    });

    EXIF.getData(choicedImg, function () {
      var allMetaData = EXIF.getAllTags(this);
      // var allMetaDataSpan = document.getElementsByClassName("allMetaDataSpan");
      // allMetaDataSpan.innerHTML = JSON.stringify(allMetaData, null, "\t");
      console.log(JSON.stringify(allMetaData, null, "\t"));
    });
    // if(allMeataData) setPhotoInfo({ address: address });
  };

  // const changeValue=(e)=>{ //태그 선택 jsx 완료 후 작성
  //     setPostObj({
  //         ...photo,
  //         [e.target.name] : e.target.value
  //     });
  // }

  const OnSubmit = async (e) => {
    e.preventDefault();
    fetch("서버주소/gallery/{userId}", {
      method: "POST",
      heaer: {
        "Content-Type": "",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => {
        console.log("정상", res);
        if (res.status === 201) return res.json();
        else return null;
      })
      .then((res) => {
        if (res !== null) this.props.history.push("/");
        else alert("post 실패");
      });
    // .catch((error)=>{
    //     console.log("실패",error);
    // });
  };

  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };

  return (
    <div className="modal-container" onClick={onCloseModal}>
      <div className="modal">
        <button className="modal-button" onClick={modalClose}>
          ✖
        </button>
        <div className="modal-content">
          <div className="cropForm-container">
            <input
              className="fileChoice"
              type="file"
              accept="image/*"
              onChange={onSelectFile}
            />
            {
              (photoInfo.src && imgLoaded,
              (
                <img
                  className="choicedImg"
                  src={photoInfo.src}
                  onLoad={getExif}
                  onChange={getExif}
                />
              ))
            }
          </div>
          <div className="Img-address-container">
            <p className="Img-address">
              {photoInfo.address != null
                ? photoInfo.address
                : "위치 정보가 없습니다."}
            </p>
            <button className="search-button" type="submit">
              위치검색
            </button>
          </div>
          <div className="tagSelection-container"></div>
          <button
            type="submit"
            className="modal-submit-button"
            onClick={OnSubmit}
          >
            완료
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
