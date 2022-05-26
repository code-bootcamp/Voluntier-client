import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { myLocationState } from "../../../commons/store";
import { breakPoints } from "../../../commons/styles/Media";
import { useMoveToPage } from "../hooks/useMoveToPage";

declare const window: typeof globalThis & {
  kakao: any;
};
interface IPropsKakaoMap {
  address: string;
  data: any;
}

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

export default function KakaomapGeolocation(props: IPropsKakaoMap) {
  const [windowSize, setWindowSize] = useState(false);
  const [location, setLocation] = useRecoilState(myLocationState);

  const { data } = useQuery(FETCH_BOARDS_ALL);

  const { moveToPage } = useMoveToPage();

  const handleResize = () => {
    if (window.innerWidth <= 767) {
      setWindowSize(true);
    } else {
      setWindowSize(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      function getLocation() {
        if (window.navigator.geolocation) {
          window.navigator.geolocation.getCurrentPosition(
            function (position) {
              setLocation([
                position.coords.latitude,
                position.coords.longitude,
              ]);
            },
            function (error) {
              console.error(error);
            },
            {
              enableHighAccuracy: true,
              maximumAge: 0,
              timeout: Infinity,
            }
          );
        } else {
          alert("GPS를 지원하지 않습니다");
        }
      }
      getLocation();
    }

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=6fd48e92f18946d0fc326142df70d236&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(location[0], location[1]),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);

        const imageSrc = "/images/marker-center.png";
        const imageSize = new window.kakao.maps.Size(47.5, 40);
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize
        );

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
          image: markerImage,
        });

        // 지도에 마커를 표시합니다
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;font-size:15px;color:#FF602A">${"당신은 여기 있다냥!"}</div>`,
        });
        infowindow.open(map, marker);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new window.kakao.maps.services.Geocoder();

        data?.fetchBoardsAll?.map((el) => {
          geocoder.addressSearch(el.address, function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const imageSrc = "/images/marker.png";
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
                  </div>`, // 인포윈도우에 표시할 내용
              });

              // 마커에 클릭이벤트를 등록합니다
              window.kakao.maps.event.addListener(
                marker,
                "click",
                moveToPage(`/boards/${el.id}`)
              );

              // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
              // 이벤트 리스너로는 클로저를 만들어 등록합니다
              // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
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

              // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
              function makeOverListener(map, marker, infowindow) {
                return function () {
                  infowindow.open(map, marker);
                };
              }

              // 인포윈도우를 닫는 클로저를 만드는 함수입니다
              function makeOutListener(infowindow) {
                return function () {
                  infowindow.close();
                };
              }
            }
          });
        });
      });
    };

    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize, location, moveToPage]);

  return <Mymap id="map"></Mymap>;
}
