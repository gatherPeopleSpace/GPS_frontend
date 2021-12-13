import React, { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";
import "../static/mymap.css";
import Footer from "../components/Footer";
import NaverMapAPI from "../components/NaverMapAPI";

const MyMap = () => {
  const [lat, setLat] = useState(37.555);
  const [lng, setLng] = useState(126.99);
  const [zoom, setZoom] = useState(11);
  return (
    <>
      <div>
        <div className="mymap-loader">
          <div className="mymap-header">username 님의 지도</div>
          <div className="mymap" style={{ width: "100%", height: "100%" }}>
            <NaverMapAPI zoom={zoom} Latitude={lat} Longtitude={lng} />
          </div>
        </div>
        <div className="myTags">
          <div className="myTags-header">나의 태그</div>
          <div className="myTags-graph"></div>
          <Footer />
        </div>
      </div>
    </>
  );
};
export default MyMap;
