import styled from "@emotion/styled"
import socketIOClient from "socket.io-client"
import { useEffect, useState } from 'react';

const TalkWrapper = styled.div`
  width: 320px;
  height: 580px;
  display: flex;
  flex-direction: column;
`
const ABC = styled.div`
  display: flex;
  flex-direction: column;
  width: 96.9%;
  height: 450px;
  background-color: #EDEDED;
  border-left: 2.2px solid #0085CB;
  border-right: 2.2px solid #0085CB;
`
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`
const TalkHeader = styled.div`
  width: 100%;
  height: 50px;
  background-image: url('../../../../images/boardDetail/chatheader.png');
  background-repeat: no-repeat;
`
const TalkContents = styled.div`

  width: 96.9%;
  height: 450px;
  background-color: #EDEDED;
  border-left: 2.2px solid #0085CB;
  border-right: 2.2px solid #0085CB;

`
const TalkWrite = styled.input`
width: 96.9%;
height: 50px;
border-radius: 0px 0px 20px 20px;
border: 2.2px solid #0085CB;
border-top: none;
::placeholder{
  font-size: 11px;
}

`

export default function ChatTest(){
    const [nickname,setNickName] = useState("")
    const [room,setRoom] = useState("")
    const [message,setContents] = useState("")
    const [resMsg,setMsg] = useState([])
    const [come,setCome] = useState([])
    const socket = socketIOClient('34.64.234.26:8080/chat');




    const onChangeContents = (event) => {
        setContents(event.target.value)
      }
    const onChangeName = (event) =>{
        setNickName(event.target.value)
    }
    const onChangeRoom = (event) =>{
        setRoom(event.target.value)
    }


    const onClickJoin = () => {
      socket.emit('joinRoom', nickname, room);
        console.log(socket)
    }

      
      const Submit = () => {
        socket.emit('send',room,nickname,message)
        console.log(socket)
      }
      
 
  useEffect(()=>{
  
      socket.on('comeOn'+room,(comeOn)=>{
        setCome(comeOn)
      })
      socket.on(room,(data)=>{
        setMsg((prev)=>[...prev,data])
      })

  },[onClickJoin,Submit])
      console.log(socket)
      console.log(resMsg)    
      console.log(come)

    
      
    return(
        <TalkWrapper>
            닉네임: <input placeholder="이름을 입력해주세요" onChange={onChangeName}/>
            방이름: <input placeholder="방 이름을 입력해주세요" onChange={onChangeRoom}/>
            <ABC >
            <div>{come}</div>
            {resMsg.map((el,index)=>(
            <>
            {el[0]===nickname?
            <Right>
            <div>{el}</div>
            </Right>
            :
            <div key={index}>
              <div>{el}</div>
            </div>
            }
            </>
            ))}
            </ABC>
            {/* <div>{resMsg}</div> */}
            <TalkWrite onChange={onChangeContents} placeholder="센터의 궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"></TalkWrite>
            <button onClick={Submit}>제출하기</button>
            {/* <button onClick={onClickNameRoom}>이름 방이름 제출</button> */}
            <button onClick={onClickJoin}>채팅방입장하기</button>
          </TalkWrapper>
    )
}