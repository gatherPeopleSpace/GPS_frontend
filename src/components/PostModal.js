import React, { useEffect, useState, useRef } from "react";
import "../static/postmodal.css";
import TagSelector from "../components/TagSelector";
import axios from "axios";
import LoadUser from "../components/LoadUser";

const Modal = ({ modalClose, userObj, setUserObj }) => {
  useEffect(() => {
    LoadUser(userObj, setUserObj);
  }, []);

  const [imgLoaded, setImgLoad] = useState(false);
  const [photoInfo, setPhotoInfo] = useState({
    // 업로드할 이미지의 소스
    src: null,
    address: null,
  });

  // const [tagList, setTaglist] = useState([]);

  const [postObj, setPostObj] = useState({
    photo: "",
    tagList: [],
  });

  const tagRef = useRef({});

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      //파일이 있으면(파일이 등록되면)HTML5 의 FileAPI 를 사용하여 FileReader 객체를 reader 변수에 저장합니다.
      const reader = new FileReader();

      //readAsDataURL로 파일을 읽습니다
      reader.readAsDataURL(e.target.files[0]);

      //readAsDataURL 메서드 실행이 완료되면 onload 이벤트가 발생합니다.
      //이 이벤트가 발생하면(읽기가 완료되면) 해당 이미지를 src state에 저장합니다.
      reader.addEventListener("load", () => {
        setPhotoInfo({ ...photoInfo, src: reader.result });
        setImgLoad(true);
        setPostObj({ ...postObj, photo: reader.result });
      });
    }
  };

  const OnSubmit = (e) => {
    e.preventDefault();
    tagRef.current.Change();
    console.log(postObj);

    axios
      .post(`/gallery/${userObj.id}`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postObj),
      })
      .then((res) => {
        if (res.state == 400) alert(res.msg);
        else if (res !== null) {
          //address 있는 경우
          this.props.history.push(`/gallery/${userObj.id}`);
          setPhotoInfo({ address: res.address });
          modalClose();
        } else alert("post 실패");
      })
      .catch((err) => alert("error"));
  };

  const onCloseModal = (e) => {
    if (e.target === e.currentTarget) modalClose();
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
              (<img className="choicedImg" src={photoInfo.src} />))
            }
          </div>
          <div className="tagSelection-container">
            <TagSelector
              setPostObj={setPostObj}
              postObj={postObj}
              ref={tagRef}
            />
            <div className="tagSelection-Recommend"></div>
          </div>
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
