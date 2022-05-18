import { useEffect, useState } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};
interface IPropsKakaoMap {
  address: string;
}

export default function KakaomapForBoardList(props: IPropsKakaoMap) {
  const [windowSize, setWindowSize] = useState(false);
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // if ("geolocation" in window.navigator) {
      //   // Geolocation API가 있는 브라우저라면,
      //   alert("사용가넝");
      // } else {
      //   // 없는 브라우저라면,
      //   alert("사용불가넝");
      // }

      function getLocation() {
        if (window.navigator.geolocation) {
          // GPS를 지원하면
          window.navigator.geolocation.getCurrentPosition(
            function (position) {
              // alert(
              //   position.coords.latitude + ", " + position.coords.longitude
              // );
              setMyLatitude(position.coords.latitude);
              setMyLongitude(position.coords.longitude);
            },
            function (error) {
              console.error(error);
            },
            {
              enableHighAccuracy: false,
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

    const handleResize = () => {
      if (window.innerWidth <= 767) {
        setWindowSize(true);
      } else {
        setWindowSize(false);
      }
    };

    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=6fd48e92f18946d0fc326142df70d236&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(myLatitude, myLongitude),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        // const geocoder = new window.kakao.maps.services.Geocoder();

        // 지도를 클릭한 위치에 표출할 마커입니다
        const marker = new window.kakao.maps.Marker({
          // 지도 중심좌표에 마커를 생성합니다
          position: map.getCenter(),
        });
        // 지도에 마커를 표시합니다
        marker.setMap(map);

        const infowindow = new window.kakao.maps.InfoWindow({
          content: `<div style="width:150px;text-align:center;padding:6px 0;font-size:15px;color:#FF602A">${"당신은 여기 있다냥!"}</div>`,
        });
        infowindow.open(map, marker);

        // geocoder.addressSearch(
        //   props.address || "제주 제주시 첨단로 242",
        //   function (result: any, status: any) {
        //     if (status === window.kakao.maps.services.Status.OK) {
        //       const coords = new window.kakao.maps.LatLng(
        //         result[0].y,
        //         result[0].x
        //       );
        //       const marker = new window.kakao.maps.Marker({
        //         map: map,
        //         position: coords,
        //       });
        //       const infowindow = new window.kakao.maps.InfoWindow({
        //         content: `<div style="width:150px;text-align:center;padding:6px 0;">${
        //           props.address ? props.address : "센터위치 주소를 검색해주세요"
        //         }</div>`,
        //       });
        //       infowindow.open(map, marker);
        //       map.setCenter(coords);
        //     }
        //   }
        // );
      });
    };

    if (window.innerWidth <= 767) {
      setWindowSize(true);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    ></div>
  );
}
