import { useEffect, useState } from "react";


declare const window: typeof globalThis & {
  kakao: any;
};
interface IPropsKakaoMap {
    address : string
}

export default function KakaoMap(props:IPropsKakaoMap) {
  const [windowSize,setWindowSize] = useState(false)
 
  const handleResize = () => {
    if(window.innerWidth <= 767){
        setWindowSize(true)
    }else{
        setWindowSize(false)
    }
    }

  useEffect(() => {
    const script = document.createElement("script");
    script.src ="//dapi.kakao.com/v2/maps/sdk.js?appkey=6fd48e92f18946d0fc326142df70d236&libraries=services&autoload=false";
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
 
        geocoder.addressSearch(props.address || "제주 제주시 첨단로 242", function(result:any, status:any) {
           if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);
              const marker = new window.kakao.maps.Marker({
                  map,
                  position: coords
              });
              const infowindow = new window.kakao.maps.InfoWindow({
                  content: `<div style="width:150px;text-align:center;padding:6px 0;">${props.address? props.address : "센터위치 주소를 검색해주세요"}</div>`
              });
              infowindow.open(map, marker);
              map.setCenter(coords);
          } 
      });  
      });
    }
    if(window.innerWidth<=767){
        setWindowSize(true)
    }
    window.addEventListener('resize', handleResize)
    return () => {
        window.removeEventListener('resize', handleResize)
    }
  }, [windowSize|| props.address]);
 

  return (
      <div id="map" style={{ width: "100%", height: "100%", borderRadius: "20px"}}></div>
  );
}