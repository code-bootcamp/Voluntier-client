
import { Modal } from "antd";
import { useRouter } from "next/router";
import { useEffect} from "react";
import { useQuery } from '@apollo/client';
import { FETCH_LOGIN_USER } from '../../../units/Board/boardDetail/BoardDetailQueries';

// @ts-ignore

export default function useAdmin(){
  const {data} = useQuery(FETCH_LOGIN_USER)
  const router = useRouter();

  useEffect(() => {
    if(data?.fetchLoginUser.isAdmin === false){
        Modal.error({content:"관리자만 수정할 수 있습니다."})
        router.back()
    }
  },[]);

  return {

  }
};
