import { useRef, useState} from 'react';
import BoardWriteUI from "./boardWritePresenter";
import {useForm} from "react-hook-form"
import { Editor } from "@toast-ui/react-editor";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWriteQueries";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import { useRecoilState } from "recoil";
import { calendarDateState } from "../../../../commons/store";
import useAuth from '../../../commons/hooks/useAuth';
import {Modal} from 'antd';
import { useRouter } from 'next/router';




interface IFormValues {
  title: string,
  centerName: string,
  centerOwnerName: string,
  centerPhone: number,
  recruitCount: number,
  serviceDate: string,
  serviceTime: number,
  address:string,
  addressDetail: string,
  location1:string,
  location2: string,
  contents: string,
  urls: []



}

const schema = yup.object({
  title:yup.string().required("봉사모집 제목을 작성해주세요 "),
  centerName: yup.string().required("봉사센터 이름을 작성해주세요 "),
  centerOwnerName: yup.string().required("봉사센터 대표이름을 작성해주세요 "),
  centerPhone: yup.string().required("봉사센터의 대표전화번호를 작성해주세요 "),
  recruitCount: yup.number().typeError("숫자로 입력해주세요.").required("봉사모집 인원을 작성해주세요 "),
  serviceTime: yup.number().typeError("숫자로 입력해주세요.").required("봉사소요시간을 작성해주세요 "),
  address: yup.string().required("봉사센터주소를 작성해주세요 "),
  addressDetail: yup.string().required("봉사센터 상세주소를 작성해주세요 "),
})


export default function BoardWrite() {
useAuth()
const router = useRouter()
const [isModalVisible, setIsModalVisible] = useState(false);
const [calendardate] = useRecoilState(calendarDateState)
const [address,setAddress] = useState("")
const editorRef = useRef<Editor>(null);
const [createBoard] = useMutation(CREATE_BOARD)

const {register, handleSubmit, setValue, getValues} = useForm({
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

    const contentsvalue = editorRef.current?.getInstance().getMarkdown()

    data.contents = contentsvalue
    data.serviceDate = calendardate
    
    try{
     const result = await createBoard({
        variables:{
          createBoardInput:{
            ...data,
            location1: data.address.split(" ")[0],
            location2: data.address.split(" ")[1],
          }
        }
      })
      console.log(result)
      Modal.success({content: "봉사모집 등록성공! 상세조회 페이지로 이동합니다 "})
      router.push('/boards')
      
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
        setValue={setValue}
        getValues={getValues}

  />;
}
