import NavigationUI from "./NavigationPresenter";
import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import { useMoveToPage } from "../../../components/commons/hooks/useMoveToPage";
import { useRouter } from 'next/router';
import { Modal } from 'antd';


const LOGOUT = gql`
  mutation logout{
    logout
  }
`

export default function Navigation() {
  const [logout] = useMutation(LOGOUT)
  const [visible, setVisible] = useState(false);
  const router = useRouter()


  const hide = () => {
    setVisible(false);
  };

  const handleVisibleChange = () => {
    setVisible(true);
  };

  const { moveToPage } = useMoveToPage();
  
  const onClickLogout = () => {
    try{
    logout()
    Modal.success({content:"로그아웃되었습니다."})
    router.push('/login')
  }catch(error){
    Modal.error({content:error.message})
  }
    
  } 
  
  return (
    <NavigationUI
      hide={hide}
      handleVisibleChange={handleVisibleChange}
      visible={visible}
      moveToPage={moveToPage}
      onClickLogout = {onClickLogout}
    />
  );
}
