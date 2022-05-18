import { useRef, useState } from "react";
import BoardWriteUI from "./boardWritePresenter";
import {useForm} from "react-hook-form"
import { Editor } from "@toast-ui/react-editor";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWriteQueries";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useRecoilState } from "recoil";
import { calendarDateState } from "../../../../commons/store";


interface IFormValues {
  title: string,
  centerName: string,
  centerOwnerName: string,
  centerPhone: number,
  recruitCount: number,
  serviceDate: number,
  serviceTime: number,
  address:string,
  addressDetail: string,
  location1:string,
  location2: string,
  urls: []



}

const schema = yup.object({
  title:yup.string().required("봉사모집 제목을 작성해주세요 "),
  centerName: yup.string().required("봉사센터 이름을 작성해주세요 "),
  centerOwnerName: yup.string().required("봉사센터 대표이름을 작성해주세요 "),
  centerPhone: yup.string().required("봉사센터의 대표전화번호를 작성해주세요 "),
  recruitCount: yup.number().required("봉사모집 인원을 작성해주세요 "),
  serviceTime: yup.number().required("봉사소요시간을 작성해주세요 "),
  address: yup.string().required("봉사센터주소를 작성해주세요 "),
  addressDetail: yup.string().required("봉사센터 상세주소를 작성해주세요 "),

})


export default function BoardWrite() {
const [isModalVisible, setIsModalVisible] = useState(false);
const [calendardate] = useRecoilState(calendarDateState)
const [address,setAddress] = useState("")
const editorRef = useRef<Editor>(null);
const [createBoard] = useMutation(CREATE_BOARD)
const contentsvalue = editorRef.current?.getInstance().getMarkdown()
const {register, handleSubmit} = useForm({
  resolver: yupResolver(schema),
  mode:"onChange",
})  
const handleComplete = (data: any) => {
  setIsModalVisible((prev) => !prev);
  setAddress(data.address);
};

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
// 봉사 등록 함수 
  const onClickSubmit = async(data: IFormValues)=>{
    console.log(data)
    try{

      const result = await createBoard({
        variables:{
          createBoardInput:{
            title:data.title,
            contents: contentsvalue,
            centerName: data.centerName,
            centerOwnerName: data.centerOwnerName,
            centerPhone: data.centerPhone,
            recruitCount: Number(data.recruitCount),
            serviceDate: calendardate,
            serviceTime: Number(data.serviceTime),
            address: "주소",
            addressDetail: data.addressDetail,
            location1: "경기도",
            location2: "남양주시",
            urls: ["야"]
            
          }
        }
      })
      console.log(result)
    }catch(error){
      alert("무언가가 잘못되었다")
    }
  }

  return <BoardWriteUI
        address={address}
        handleComplete={handleComplete} 
        showModal={showModal} 
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        onClickSubmit={onClickSubmit}
        editorRef={editorRef}
        register={register}
        handleSubmit={handleSubmit}
  />;
}
