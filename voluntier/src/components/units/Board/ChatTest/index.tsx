import styled from "@emotion/styled";
import io, { Socket } from "socket.io-client";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const TalkWrapper = styled.div`
  width: 320px;
  height: 580px;
  display: flex;
  flex-direction: column;
`;
const ABC = styled.div`
  display: flex;
  flex-direction: column;
  width: 96.9%;
  height: 450px;
  background-color: #ededed;
  border-left: 2.2px solid #0085cb;
  border-right: 2.2px solid #0085cb;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const TalkWrite = styled.input`
  width: 96.9%;
  height: 50px;
  border-radius: 0px 0px 20px 20px;
  border: 2.2px solid #0085cb;
  border-top: none;
  ::placeholder {
    font-size: 11px;
  }
`;
// const socket = socketIOClient('backendapi.voluntier.site/chat',{ transports: ['websocket'] })
const url = "backendapi.voluntier.site/chat";
export default function ChatTest() {
  const [nickname, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setContents] = useState("");
  const [resMsg, setMsg] = useState([]);
  const [come, setCome] = useState([]);

  const socket: Socket = io(url, { transports: ["websocket"] });

  const onClickJoin = () => {
    socket.emit("joinRoom", room, nickname);
    console.log(socket);
  };

  const Submit = () => {
    socket.emit("send", room, nickname, message);
  };

  useEffect(() => {
    socket.on(room, (data) => {
      setMsg((prev) => [...prev, data]);
      console.log("data", socket);
    });

    socket.on("comeOn" + room, (comeOn) => {
      setCome(comeOn);
      console.log("come", socket);
    });
  }, [room]);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };
  const onChangeName = (event) => {
    setNickName(event.target.value);
  };
  const onChangeRoom = (event) => {
    setRoom(event.target.value);
  };

  return (
    <TalkWrapper>
      닉네임:{" "}
      <input placeholder="이름을 입력해주세요" onChange={onChangeName} />
      방이름:{" "}
      <input placeholder="방 이름을 입력해주세요" onChange={onChangeRoom} />
      <ABC>
        <div>{come}</div>
        {resMsg.map((el) => (
          <div key={uuidv4()}>
            {el[0] === nickname ? (
              <Right>
                <div>{el}</div>
              </Right>
            ) : (
              <div>
                <div>{el}</div>
              </div>
            )}
          </div>
        ))}
      </ABC>
      {/* <div>{resMsg}</div> */}
      <TalkWrite
        onChange={onChangeContents}
        placeholder="센터의 궁금한 점을 물어보세요! 실시간으로 답변해드립니다!"
      ></TalkWrite>
      <button onClick={Submit}>제출하기</button>
      {/* <button onClick={onClickNameRoom}>이름 방이름 제출</button> */}
      <button onClick={onClickJoin}>채팅방입장하기</button>
    </TalkWrapper>
  );
}
