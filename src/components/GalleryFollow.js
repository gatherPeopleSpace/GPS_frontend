import React, { useState } from "react";
import "../static/gallery.css";
import Follow from "../components/Follow";

const GalleryFollow = () => {
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

  const onClickAddFriend = () => {
    // fetch("서버주소/gallery/{userId}", {
    //   method: "POST",
    //   mode: 'cors',
    //   body: JSON.stringify(page_userId),
    // })
    //   .then((res) => {
    //     if (res.state == 412) alert("이미지에 위치 정보가 없습니다.");
    // else alert("post 실패");
    //   })
    //   .catch((err) => alert("error"));
  };

  return (
    //쓸데없는 DIV 없애기
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
      {/* {page_userId !== props.userObj.userId && ( */}
      <button className="User-addFriend" onClick={onClickAddFriend}>
        친구 추가 ➕
      </button>
    </div>
  );
};

export default GalleryFollow;
