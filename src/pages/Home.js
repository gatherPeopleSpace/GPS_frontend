import React, { useState } from "react";
import "../static/home.css";
import NaverMapAPI from "../components/NaverMapAPI";

const Home = () => {
  const { naver } = window;
  const [address, setAddress] = useState("");
  const [roadAddress, setRoadAddress] = useState(null);

  const [lat, setLat] = useState(37.54);
  const [lng, setLng] = useState(126.99);
  const [zoom, setZoom] = useState(12);

  const handleChange = (e) => {
    const { address, value } = e.target;
    const newAddress = { address: value };
    setAddress(newAddress);
  };

  function searchAddressToCoordinate(address) {
    console.log(address);
    naver.maps.Service.geocode(
      {
        query: address, // String 타입의 주소값
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK)
          return alert("Something wrong!");

        // 제대로 된 query가 들어가 결과가 나올 경우
        var result = response.v2, // 검색 결과의 컨테이너
          items = result.addresses; // 검색 결과의 배열

        console.log(items);

        let x = parseFloat(items[0].x); // 경도
        let y = parseFloat(items[0].y); // 위도

        setLat(y);
        setLng(x);
        setZoom(15);
        setRoadAddress(items[0].roadAddress);
      }
    );
  }

  return (
    <>
      <div className="map-loader">
        <div className="map" style={{ width: "100%", height: "100%" }}>
          <NaverMapAPI
            zoom={zoom}
            Latitude={lat}
            Longtitude={lng}
            roadAddress={roadAddress}
          />
        </div>
        <div className="search-container">
          <form>
            <input
              className="findAddress"
              placeholder="주소로 검색"
              onChange={handleChange}
            />
            <button
              className="submitAddress-button"
              type="submit"
              onClick={() => searchAddressToCoordinate(address.address)}
            >
              🔎
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Home;
