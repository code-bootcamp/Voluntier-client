import BoardDetailUI from "./BoardDetailPresenter";
import {useMutation, useQuery} from '@apollo/client'
import { CREATE_ENROLL, DELETE_BOARD, FETCH_BOARD, FETCH_ENROLL, FETCH_USER_LOGIN } from "./BoardDetailQueries";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {Modal} from 'antd'




export default function BoardDetail() {
  
  const [isEdit,setIsEdit] = useState(false)
  const router = useRouter()
  const {data : Userdata} = useQuery(FETCH_USER_LOGIN)
  const [createenroll] = useMutation(CREATE_ENROLL)
  const [deleteBoard] = useMutation(DELETE_BOARD)
  const {data} = useQuery(FETCH_BOARD,
    {variables:{boardId: String(router.query.boardId)}})
    
    const {data : enrolldata, refetch} = useQuery(FETCH_ENROLL,{
      variables: {boardId: String(router.query.boardId)}
    })

    useEffect(()=>{
  
    },[enrolldata])
    

  const CreateEnroll = async() =>{
    try{

      const result = await createenroll({
        variables: {
          boardId: router.query.boardId
        }
      })
      console.log(result)
      alert("신청이 완료되었습니다! 마이페이지에서 확인하세요!")
    }catch(error){
      alert("이미 신청이 완료되었거나, 지금은 신청할 수 없습니다 ")
    }
  }

  const DeleteBoard = ()=>{
    try{
      deleteBoard({
        variables:{
          boardId: String(router.query.boardId)
        }
      })
      Modal.success({content: "삭제완료! 목록페이지로 넘어갑니다"})
      router.push('/boards')
    }catch(error){
      alert("글을 삭제할 수 없습니다!")
    }
  }

  const onClickEdit = ()=>{
    setIsEdit(true)
    router.push(`/boards/${router.query.boardId}/edit`)
  }


  
  return <BoardDetailUI 
  data={data}
  Userdata={Userdata}
  enrolldata={enrolldata}
  CreateEnroll={CreateEnroll}
  DeleteBoard={DeleteBoard}
  onClickEdit={onClickEdit}
  isEdit={isEdit}
  refetch={refetch}
  />;
}
