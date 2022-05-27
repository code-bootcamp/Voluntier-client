
import _ from "lodash";
import { useState, useEffect, ChangeEvent } from 'react';
import BoardListUI from "./BoardListPresenter";


export default function BoardList(props) {
  const [, setKeyword] = useState("");
  const [key,setKey] = useState("전체")
  const [big,setBig] = useState("전체")
  const [small,setSmall] = useState("전체")
  const Big = ["전체","서울","경기","인천","대전","대구","광주","울산","부산","세종특별자치시","강원","충북","충남","전북","전남","경북","경남","제주특별자치도"]

  const Small = { "전체":["전체"],
                  "서울":["종로구","중구","용산구","성동구","광진구","동대문구","중랑구","성북구","강북구","도봉구","노원구","은평구","서대문구","마포구","양천구","강서구","구로구","금천구","영등포구","동작구","관악구","서초구","강남구","송파구","강동구"],
                  "경기":["수원시","성남시","의정부시","안양시","부천시","광명시","평택시","동두천시","안산시","고양시","과천시","구리시","남양주시","오산시","시흥시","군포시","의왕시","하남시","용인시","파주시","이천시","안성시","김포시","화성시","광주시","양주시","포천시","여주시","연천군","가평군","양평군"],
                  "인천":["중구","동구","미추홀구","연수구","남동구","부평구","계양구","서구","강화군","옹진군"],
                  "대전":["동구","중구","서구","유성구","대덕구"],
                  "대구":["중구","동구","서구","남구","북구","수성구","달서구","달성군"],
                  "광주":["동구","서구","남구","북구","광산구"],
                  "울산":["중구","남구","동구","북구","울주군"],
                  "부산":["중구","서구","동구","영도구","부산진구","동래구","남구","북구","해운대구","사하구","금정구","강서구","연제구","수영구","사상구","기장군"],
                  "세종특별자치시":["조치원읍"],
                  "강원":["고성군","화천군","양구군","춘천시","속초시","홍천군","양양군","원주시","횡성군","평창군","영월군","강릉시","태백시","삼척시","정선군","동해시","인제군"],
                  "충북":["제천시","충주시","청주시","단양군","괴산군","음성군","증평군","진천군","청원군","보은군","옥천군","영동군"],
                  "충남":["태안군","당진시","서산시","예산군","아산시","천안시","홍성군","보령시","청양군","공주시","부여군","서천군","논산시","금산군","계룡시"],
                  "전북":["전주시","군산시","익산시","남원시","정읍시","김제시","완주군","진안군","무주군","장수군","임실군","순창군","고창군","부안군"],
                  "전남":["목포시","여수시","순천시","나주시","광양시","담양군","곡성군","구례군","고흥군","보성군","화순군","장흥군","강진군","해남군","영암군","무안군","함평군","영광군","장성군","완도군","진도군","신안군"],
                  "경북":["포항시","경주시","김천시","안동시","구미시","영주시","영천시","상주시","문경시","경산시","군위군","의성군","청송군","영양군","영덕군","청도군","고령군","성주군","칠곡군","예천군","봉화군","울진군","울릉군"],
                  "경남":["창원시","진주시","통영시","사천시","김해시","밀양시","거제시","양산시","의령군","함안군","창녕군","고성군","남해군","하동군","산청군","함양군","거창군","합천군"],
                  "제주특별자치도":["제주시","서귀포시"]
                }
  const S = Small[key]
  useEffect(()=>{
    setSmall(Small[key][0])
  },[key])
  const onChangeKey = (event) => {
    setKey(event.target.value)
    setBig(event.target.value)
  }
  const onChangeSmall = (event) =>{
    setSmall(event.target.value) 
  }
  
  const onClickSearch = () => {
    if(big==="전체"){
      return location.reload()
    }
    props.refetch({ page: 1, location1:big, location2:small});
  };

  const getDebounce = _.debounce((data) => {
    props.refetch({page:1,search:data});
    setKeyword(data);
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.target.value);
  };


  console.log(props.data?.fetchBoards)
  return <BoardListUI 
  onChangeSearch={onChangeSearch}
  onClickSearch={onClickSearch} 
  onChangeSmall={onChangeSmall} 
  onChangeKey={onChangeKey} 
  Big={Big} S={S} 
  data={props.data}
  refetch={props.refetch}
  BoardsCountData={props.BoardsCountData}/>;
}
