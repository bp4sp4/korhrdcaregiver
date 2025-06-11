/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoStaticMap() {
  useEffect(() => {
    // SDK가 이미 있으면 중복 삽입 방지
    if (!window.kakao) {
      const script = document.createElement("script");
      const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_APP_KEY;
      script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&autoload=false`;
      script.async = true;
      script.onload = () => {
        window.kakao.maps.load(() => {
          createMap();
        });
      };
      document.head.appendChild(script);
    } else {
      window.kakao.maps.load(() => {
        createMap();
      });
    }

    function createMap() {
      const markerPosition = new window.kakao.maps.LatLng(
        37.665285,
        127.044426
      ); // 방학로 174
      const marker = { position: markerPosition, text: "한평생 평생요양원" };
      const staticMapContainer = document.getElementById("staticMap");
      const staticMapOption = {
        center: markerPosition,
        level: 3,
        marker,
      };
      new window.kakao.maps.StaticMap(staticMapContainer, staticMapOption);
    }
  }, []);

  return (
    <div
      id="staticMap"
      style={{
        width: "100%",
        maxWidth: 450,
        height: 340,
        borderRadius: 16,
        overflow: "hidden",
        margin: "0 auto",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    />
  );
}
