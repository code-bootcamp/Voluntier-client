import { useEffect, useState, useRef } from "react";
import LivechatUI from "./LivechatPresenter";
import io, { Socket } from "socket.io-client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useQuery } from "@apollo/client";
import { FETCH_CHAT_HISTORY } from "./LivechatQueries";
import { useRecoilState } from "recoil";
import { accessTokenState } from "../../../commons/store";

const url = "backendapi.voluntier.site/chat";

export default function Livechat(props) {
  const messagesEndRef = useRef<HTMLDivElement>();
  const [accessToken] = useRecoilState(accessTokenState);
  const router = useRouter();
  const [nickname, setNickName] = useState("");
  const [room, setRoom] = useState("");
  const [userId, setUserId] = useState("");
  const [resultMsg, setResultMsg] = useState([]);
  const { data } = useQuery(FETCH_CHAT_HISTORY, {
    variables: { boardId: String(router.query.boardId) },
  });

  const socket: Socket = io(url, { transports: ["websocket"] });

  const delay = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const { register, handleSubmit, resetField } = useForm({
    mode: "onChange",
    defaultValues: {
      contents: "",
    },
  });

  useEffect(() => {
    socket.on(room, (data) => {
      setResultMsg((prev) => [...prev, data]);
      return alert("카톡왔숑")
    });
  }, [room]);

  useEffect(() => {
    setUserId(props.data?.fetchLoginUser?.id);
    setRoom(String(router.query.boardId));
    setNickName(props.data?.fetchLoginUser?.name);
  }, [props.data]);

  const onClickSubmit = async (data) => {
    const message = await data.contents;
    socket.emit("send", room, nickname, message, userId);
    resetField("contents");
    await delay(100);
    return messagesEndRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "start",
    });
  };

  const onKeyDown = (event) => (data) => {
    if (event.key === "Enter") {
      onClickSubmit(data);
    }
  };

  return (
    <LivechatUI
      resultMsg={resultMsg}
      userId={userId}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
      onKeyDown={onKeyDown}
      data={data?.fetchChatHistory}
      accessToken={accessToken}
      messagesEndRef={messagesEndRef}
    />
  );
}
