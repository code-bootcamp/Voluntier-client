import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

interface IPropsKakaoMap {
  address: string;
  data: any;
}

export default function KakaoMap(props: IPropsKakaoMap) {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=6fd48e92f18946d0fc326142df70d236&libraries=services&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        const map = new window.kakao.maps.Map(container, options);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.address ||
            props.data?.fetchBoard?.address ||
            "제주 제주시 첨단로 242",
          function (result: any, status: any) {
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
                image: markerImage,
              });

              const infowindow = new window.kakao.maps.InfoWindow({
                content: `<div style="width:200px;text-align:center;padding:6px;color:#FF602A;font-size:12px">${
                  props.data?.fetchBoard?.address
                    ? props.data?.fetchBoard?.address
                    : "센터위치 주소를 검색해주세요"
                }</div>`,
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.address || props.data?.fetchBoard.address]);

  return (
    <div
      id="map"
      style={{ width: "100%", height: "100%", borderRadius: "20px" }}
    ></div>
  );
}
