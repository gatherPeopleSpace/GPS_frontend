import React, { useState } from "react";
import "../static/editIntro.css";

const EditIntro = ({ intro, setUserObj }) => {
  const [newIntro, setNewIntro] = useState(intro);
  const [editstate, setEditState] = useState(false);

  const handleChange = (e) => {
    console.log(e.target.value);
    setNewIntro(e.target.value);
  };
  const onClickEditIntro = () => {
    setEditState(!editstate);
  };

  const onClickSubmitIntro = () => {
    setEditState(!editstate);
    // setUserObj({ introduce: newIntro });
    //db 저장 요청 코드
  };

  return (
    <>
      {editstate ? (
        <form className="introduce-container">
          <input
            className="input-introduce"
            placeholder={intro}
            onChange={handleChange}
          ></input>
          <button type="submit" onClick={onClickSubmitIntro}>
            ✔
          </button>
        </form>
      ) : (
        <div className="introduce-container">
          <div className="User-introduction">{newIntro}</div>
          <button onClick={onClickEditIntro}>🖍</button>
        </div>
      )}
    </>
  );
};

export default EditIntro;
