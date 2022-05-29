import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { Modal } from "antd";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { myLocationState } from "../../../commons/store";
import { breakPoints } from "../../../commons/styles/Media";
import { IQuery } from "../../../commons/types/generated/types";
import { useMoveToPage } from "../hooks/useMoveToPage";

declare const window: typeof globalThis & {
  kakao: any;
};

const FETCH_BOARDS_ALL = gql`
  query fetchBoardsAll {
    fetchBoardsAll {
      id
      centerName
      address
    }
  }
`;

const Mymap = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 20px;
  @media ${breakPoints.tablet} {
    width: 100%;
  }
  @media ${breakPoints.mobile} {
    width: 100%;
    height: 200px;
  }
`;

export default function KakaomapGeolocation() {
  const [location, setLocation] = useRecoilState(myLocationState);
  const { data } = useQuery<Pick<IQuery, "fetchBoardsAll">>(FETCH_BOARDS_ALL);
  const { moveToPage } = useMoveToPage();
  const [isTrue, setIsTrue] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(
          function (position) {
            setLocation([position.coords.latitude, position.coords.longitude]);
            setIsTrue(true);
          },
          function (error) {
            return error;
          },
          {
            enableHighAccuracy: false,
            maximumAge: 0,
            timeout: 7000,
          }
        );
      } else {
        Modal.error({ content: "GPS를 지원하지 않습니다" });
      }

      const script = document.createElement("script");
      script.src =
        "//dapi.kakao.com/v2/maps/sdk.js?appkey=6fd48e92f18946d0fc326142df70d236&libraries=services&autoload=false";
      document.head.appendChild(script);

      const makeOverListener = (map: any, marker: any, infowindow: any) => {
        return function () {
          infowindow.open(map, marker);
        };
      };

      const makeOutListener = (infowindow: any) => {
        return function () {
          infowindow.close();
        };
      };

      script.onload = () => {
        window.kakao.maps.load(function () {
          const container = document.getElementById("map");
          const options = {
            center: new window.kakao.maps.LatLng(location[0], location[1]),
            level: 5,
          };
          const map = new window.kakao.maps.Map(container, options);

          const imageSrc = "/images/marker-center.webp";
          const imageSize = new window.kakao.maps.Size(47.5, 40);
          const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize
          );

          const marker = new window.kakao.maps.Marker({
            position: map.getCenter(),
            image: markerImage,
          });

          marker.setMap(map);

          const infowindow = new window.kakao.maps.InfoWindow({
            content: `<div style="width:150px;text-align:center;padding:6px 0;font-size:15px;color:#FF602A">${"당신은 여기 있다냥!"}</div>`,
          });
          infowindow.open(map, marker);

          const geocoder = new window.kakao.maps.services.Geocoder();

          data?.fetchBoardsAll?.map((el) => {
            return geocoder.addressSearch(
              el.address,
              function (result: any, status: boolean) {
                if (status === window.kakao.maps.services.Status.OK) {
                  const coords = new window.kakao.maps.LatLng(
                    result[0].y,
                    result[0].x
                  );

                  const imageSrc = "/images/marker.webp";
                  const imageSize = new window.kakao.maps.Size(43.5, 35);
                  const markerImage = new window.kakao.maps.MarkerImage(
                    imageSrc,
                    imageSize
                  );

                  const marker = new window.kakao.maps.Marker({
                    map,
                    position: coords,
                    title: el.centerName,
                    image: markerImage,
                  });

                  const infowindow = new window.kakao.maps.InfoWindow({
                    content: `<div style="width:150px;text-align:center;padding:3px;font-size:12px;color:#0085CB">
                    ${el.centerName}
                  </div>`,
                  });

                  window.kakao.maps.event.addListener(
                    marker,
                    "click",
                    moveToPage(`/boards/${el.id}`)
                  );

                  window.kakao.maps.event.addListener(
                    marker,
                    "mouseover",
                    makeOverListener(map, marker, infowindow)
                  );

                  window.kakao.maps.event.addListener(
                    marker,
                    "mouseout",
                    makeOutListener(infowindow)
                  );

                  makeOverListener(map, marker, infowindow);
                  makeOutListener(infowindow);
                }
              }
            );
          });
        });
      };
    }
  }, [isTrue]);

  return <Mymap id="map"></Mymap>;
}
