import React, { useState } from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps";

export const NaverMapAPI = (props) => {
  console.log(props);

  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={process.env.REACT_APP_API_Client_ID}
      submodules={["geocoder"]}
    >
      <NaverMap
        mapDivId={"maps-getting-started-uncontrolled"}
        style={{ width: "100%", height: "100%" }}
        center={{ lat: props.Latitude, lng: props.Longtitude }}
        defaultZoom={12}
        zoom={props.zoom}
        minZoom={12}
        enableWheelZoom={false}
      >
        {/* 서버에서 makerList 받아고 출력해서 보여줄 부분 */}
        {props.zoom == 15 && (
          <Marker
            position={{ lat: props.Latitude, lng: props.Longtitude }}
            title={props.roadAddress}
            clickable={true}
          />
        )}
      </NaverMap>
    </RenderAfterNavermapsLoaded>
  );
};

export default NaverMapAPI;
