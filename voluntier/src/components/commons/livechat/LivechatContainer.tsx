import { useEffect, useState } from "react";
import LivechatUI from "./LivechatPresenter";
import io, { Socket } from "socket.io-client";
// import { useQuery } from "@apollo/client";
// import { FETCH_LOGIN_USER } from "./LivechatQueries";
import { useRouter } from "next/router";

const url = "backendapi.voluntier.site/chat";
export default function Livechat(props) {
  const router = useRouter();
  const [nickname, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setContents] = useState("");
  const [resMsg, setMsg] = useState([]);
  const [come, setCome] = useState([]);

  const socket: Socket = io(url, { transports: ["websocket"] });

  // const { data } = useQuery(FETCH_LOGIN_USER);

  // const delay = (ms) => {
  //   return new Promise((resolve) => setTimeout(resolve, ms));
  // };
  // if (typeof window !== "undefined") {
  //   setNickName(data?.fetchLoginUser?.name);
  //   setRoom(String(router.query.boardId));
  //   window.onload = async () => {
  //     await delay(3000);
  //     return socket.emit("joinRoom", nickname, room);
  //   };
  // }

  // console.log(props.data);

  // if (!nickname && !room) {
  //   setNickName(props.data?.fetchLoginUser?.name);
  //   setRoom(String(router.query.boardId));
  // }
  // socket.emit("joinRoom", nickname, room);

  useEffect(() => {
    socket.on(room, (data) => {
      setMsg((prev) => [...prev, data]);
      console.log("data", socket);
    });
    socket.on("comeOn" + room, (comeOn) => {
      setCome(comeOn);
      console.log("come", socket);
    });
    // return () => {
    //   socket.on("disconnect", () => {
    //     console.log("연결해제");
    //   });
    // };
  }, [room]);

  const onChangeContents = (event) => {
    setContents(event.target.value);
  };

  const submit = () => {
    socket.emit("send", room, nickname, message);
  };

  const onKeydown = (event) => {
    if (event.key === "Enter") {
      submit();
    }
  };

  return (
    <LivechatUI
      onChangeContents={onChangeContents}
      onKeydown={onKeydown}
      resMsg={resMsg}
      come={come}
      nickname={nickname}
    />
  );
}
