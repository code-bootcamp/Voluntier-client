import { useEffect, useState } from "react";
import LivechatUI from "./LivechatPresenter";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

const url = "backendapi.voluntier.site/chat";
export default function Livechat(props) {
  const router = useRouter();
  const [nickname, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [resultMsg, setResultMsg] = useState([]);

  const socket: Socket = io(url, { transports: ["websocket"] });

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    socket.on(room, (data) => {
      setResultMsg((prev) => [...prev, data]);
      console.log("받는 거", socket);
    });
  }, [room]);
  console.log(resultMsg);

  useEffect(() => {
    setUserId(props.data?.fetchLoginUser?.id);
    setRoom(String(router.query.boardId));
    setNickName(props.data?.fetchLoginUser?.name);
  }, [props.data]);



  const onClickSubmit = async (data) => {
    const message = await data.contents
    socket.emit("send", room, nickname, message, userId);
    console.log(socket)
  };

  const onKeyDown = (event) => (data) => {
    if (event.key === "Enter") {
      // console.log("들어오냐?", data);
      onClickSubmit(data);
    }
  };



  return (
    <LivechatUI
      resultMsg={resultMsg}
      nickname={nickname}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onKeyDown={onKeyDown}
    />
  );
}
