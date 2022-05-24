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
  const [message, setContents] = useState("");
  const [userId, setUserId] = useState("");
  const [resultMsg, setResultMsg] = useState([]);

  const socket: Socket = io(url, { transports: ["websocket"] });

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    socket.on(room, (data) => {
      setResultMsg((prev) => [...prev, data]);
      console.log("받는 거", socket);
    });
  }, [resultMsg]);
  console.log(resultMsg);

  useEffect(() => {
    setUserId(props.data?.fetchLoginUser?.id);
    setRoom(String(router.query.boardId));
    setNickName(props.data?.fetchLoginUser?.name);
  }, [props.data]);

  console.log(userId);
  console.log(room);
  console.log(nickname);

  const submit = () => {
    socket.emit("send", room, nickname, message, userId);
    console.log("보내는 거", socket);
  };

  const onClickSubmit = async (data) => {
    setContents(data.contents);
    console.log(message);
    submit();
  };

  const onKeyDown = (event) => (data) => {
    if (event.key === "Enter") {
      // console.log("들어오냐?", data);
      onClickSubmit(data);
    }
  };

  // const onKeyDown = (event, data) => {
  //   if (event.key === "Enter") {
  //     console.log(data.contents);
  //     setMsg(data.contents);
  //     setContents(data.contents);
  //     submit();
  //   }
  // };

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
