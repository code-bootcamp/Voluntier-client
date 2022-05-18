import { useRef, useState, useEffect } from 'react';
import BoardWriteUI from "./boardWritePresenter";
import {useForm} from "react-hook-form"
import { Editor } from "@toast-ui/react-editor";
import { useMutation } from "@apollo/client";
import { CREATE_BOARD } from "./BoardWriteQueries";
import useAuth from '../../../commons/hooks/useAuth';


interface IFormValues {
  name? : string,
  contents?: string,
  price?: number,
  remarks?: string ,
  tags?: string,
  address?: string,
  addressdetail? : string



}


export default function BoardWrite() {
useAuth()
const [isModalVisible, setIsModalVisible] = useState(false);
const [address,setAddress] = useState("")
const editorRef = useRef<Editor>(null);
const [createBoard] = useMutation(CREATE_BOARD)
const contentsvalue = editorRef.current?.getInstance().getMarkdown()
const {register, handleSubmit} = useForm({
  mode:"onChange",
})  
const handleComplete = (data: any) => {
  setIsModalVisible((prev) => !prev);
  console.log(data.address)
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
  // const onClickSubmit = async(data: IFormValues)=>{
  //   const result = await createBoard({
  //       variables:{
  //         createBoardInput:{
  //           title:,
  //           contents,
  //           centerName,
  //           centerOwnerName,
  //           centerPhone,
  //           recruitCount,
  //           serviceDate,
  //           address,
  //           addressDetail,
  //           location1,
  //           location2,
  //           urls

  //         }
  //       }
  //   })
  //   console.log(contentsvalue)
  // }
  
  return <BoardWriteUI
        address={address}
        handleComplete={handleComplete} 
        showModal={showModal} 
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalVisible={isModalVisible}
        // onClickSubmit={onClickSubmit}
        editorRef={editorRef}
        // register={register}
        // handleSubmit={handleSubmit}
  />;
}
